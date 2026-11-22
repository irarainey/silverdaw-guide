import { join } from 'node:path'
import { writeFile } from 'node:fs/promises'

// An original pulsed tone: both views use peaks from the same PCM samples.
// No desktop sound, microphone, driver changes or speaker playback are needed.
async function exampleTake(work, bpm) {
  const rate = 44100
  const samples = rate * 4
  const wav = Buffer.alloc(44 + samples * 2)
  wav.write('RIFF'); wav.writeUInt32LE(wav.length - 8, 4); wav.write('WAVEfmt ', 8)
  wav.writeUInt32LE(16, 16); wav.writeUInt16LE(1, 20); wav.writeUInt16LE(1, 22)
  wav.writeUInt32LE(rate, 24); wav.writeUInt32LE(rate * 2, 28)
  wav.writeUInt16LE(2, 32); wav.writeUInt16LE(16, 34)
  wav.write('data', 36); wav.writeUInt32LE(samples * 2, 40)
  const peaks = new Array(400 * 2).fill(0)
  for (let i = 0; i < samples; i++) {
    const t = i / rate
    const beat = t * bpm / 60
    const value = 0.65 * Math.exp(-5 * (beat % 1)) * Math.sin(2 * Math.PI * 220 * t)
    wav.writeInt16LE(Math.round(value * 32767), 44 + i * 2)
    const j = 2 * Math.floor(i / 441)
    peaks[j] = Math.min(peaks[j], value)
    peaks[j + 1] = Math.max(peaks[j + 1], value)
  }
  const filePath = join(work, 'Example take.wav')
  await writeFile(filePath, wav)
  return { filePath, peaks, rate, bpm }
}

export async function captureRecordingExamples({ page, captureDialog, work, bpm, trackIds }) {
  const take = await exampleTake(work, bpm)
  // Supply only recording-device data to the released renderer. All labels,
  // buttons, dialog transitions, waveform drawing and layout are Silverdaw's.
  // Intercept recording commands BEFORE opening the dialog: never arm a real input.
  const fixture = await page.evaluateHandle(({ take, trackIds }) => {
    const store = document.querySelector('#app').__vue_app__.config.globalProperties.$pinia._s.get('recordingSession')
    if (!store) throw new Error('Release recording store unavailable')
    const input = { typeName: 'Windows Audio', deviceName: 'Example input', channelNames: ['Mono'],
      sampleRate: take.rate, inputLatencyMs: 0 }
    const state = { protocolVersion: 1, sessionId: 'guide-example', status: 'idle', input, firstChannel: 0,
      channelCount: 1, countInBars: 0, clickEnabled: false, backingTrackIds: trackIds, backingGain: 1,
      inputGainDb: 0, recordingMode: 'music', monitorEnabled: false, monitorAvailable: true, cleanupEnabled: false,
      windowMode: 'start', hasSelection: false, anchorMs: 0, latencyMs: 0, windowEndMs: null, recordedMs: 0,
      droppedSamples: 0 }
    const send = WebSocket.prototype.send
    let timer
    function update(status, recordedMs = 0) {
      store.applyState({ ...state, status, recordedMs })
    }
    WebSocket.prototype.send = function (data) {
      if (typeof data !== 'string') return send.call(this, data)
      const { type, payload } = JSON.parse(data)
      if (!type.startsWith('RECORD_')) return send.call(this, data)
      if (type === 'RECORD_SESSION_OPEN') update('idle')
      else if (type === 'RECORD_INPUTS_REQUEST') store.applyInputs({ types: [{ name: input.typeName, devices: [input.deviceName] }] })
      else if (type === 'RECORD_SESSION_CONTROL' && payload.action === 'start') {
        const start = performance.now()
        update('recording')
        timer = setInterval(() => {
          const ms = Math.min(performance.now() - start, 3999)
          const peak = take.peaks[Math.floor(ms / 10) * 2 + 1]
          update('recording', ms)
          store.applyInputLevel({ sessionId: state.sessionId, peakL: peak, peakR: peak })
        }, 32)
      } else if (type === 'RECORD_SESSION_CONTROL' && payload.action === 'stop') {
        clearInterval(timer)
        update('review', 4000)
        const recordingId = 'guide-take'
        store.applyRecordingReady({ ...state, recordingId, filePath: take.filePath, suggestedName: 'Example take',
          durationMs: 4000, sampleRate: take.rate, musical: true, bpm: take.bpm, beatAnchorSec: 0,
          preRollMs: 0, peakCount: 400, peaksPerSecond: 100, latencyOffsetMs: 0, driftPpm: 0 })
        store.setReadyPeaks({ recordingId, sampleRate: take.rate, peaksPerSecond: 100,
          peaks: Float32Array.from(take.peaks), channels: [] })
      }
    }
    return () => { clearInterval(timer); WebSocket.prototype.send = send }
  }, { take, trackIds })
  try {
    await page.getByRole('button', { name: /^Record Audio…/ }).click()
    const record = page.getByRole('dialog', { name: 'Record Audio', exact: true })
    const card = record.locator('.dialog-card')
    await record.getByRole('option', { name: 'Example input', exact: true }).waitFor({ state: 'attached' })
    await captureDialog('record-setup', card)
    await record.getByRole('button', { name: 'Calibrate', exact: true }).click()
    const calibration = page.getByRole('dialog', { name: 'Calibrate Recording Latency' })
    await captureDialog('record-calibration', calibration.locator('.dialog-card'))
    await calibration.getByRole('button', { name: 'Close', exact: true }).click()
    await record.getByRole('button', { name: 'Record', exact: true }).click()
    await record.getByText('00:03', { exact: true }).waitFor()
    await captureDialog('record-live', card)
    await record.getByRole('button', { name: 'Stop', exact: true }).click()
    await record.getByLabel('Recording waveform').waitFor()
    await captureDialog('record-review', card)
    await record.getByRole('button', { name: 'Discard', exact: true }).click()
    await record.waitFor({ state: 'hidden' })
  } finally {
    await fixture.evaluate(restore => restore())
    await fixture.dispose()
  }
}
