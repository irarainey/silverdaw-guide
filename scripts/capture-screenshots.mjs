import { cp, mkdir, mkdtemp, readdir, readFile, rm, writeFile } from 'node:fs/promises'
import { execFileSync } from 'node:child_process'
import { homedir, tmpdir } from 'node:os'
import { join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { setTimeout as pause } from 'node:timers/promises'
import { _electron as electron } from 'playwright-core'
import { captureRecordingExamples } from './recording-screenshots.mjs'

// Review the scenes against the tagged UI before targeting a new guide series.
const release = '1.12.1'
const pace = Number(process.env.SILVERDAW_SCREENSHOT_PAUSE_MS ?? 1200)
if (!Number.isFinite(pace) || pace < 0) throw new Error('SILVERDAW_SCREENSHOT_PAUSE_MS must be a non-negative number')
const series = release.split('.').slice(0, 2).join('.')
const output = fileURLToPath(new URL(`../docs/public/${series}/images/`, import.meta.url))
const [binary, project = join(homedir(), 'Silverdaw', 'Projects', 'California Mashup')] = process.argv.slice(2)
if (process.argv.length > 4) {
  throw new Error('Usage: npm run screenshots -- ["C:\\path\\to\\Silverdaw.exe" ["C:\\project folder"]]')
}

const guide = new URL(`../docs/${series}/guide/`, import.meta.url)
const manifest = await readFile(new URL('../docs/.vitepress/versions.ts', import.meta.url), 'utf8')
if (manifest.match(/export const latestVersion = '([^']+)'/)?.[1] !== series) {
  throw new Error(`Release ${release} does not target the current guide. Review the scenes before capturing.`)
}
const expected = new Set()
for (const page of await readdir(guide)) {
  if (!page.endsWith('.md')) continue
  const text = await readFile(new URL(page, guide), 'utf8')
  for (const [, path] of text.matchAll(/!\[[^\]]*\]\(([^)]+)\)/g)) {
    const prefix = `/${series}/images/`
    if (!path.startsWith(prefix) || !path.endsWith('.png')) {
      throw new Error(`Unexpected screenshot path in ${page}: ${path}`)
    }
    expected.add(path.slice(prefix.length, -4))
  }
}
const work = await mkdtemp(join(tmpdir(), 'silverdaw-guide-'))
const profile = join(work, 'profile')
const images = new Map()
let app
let child
let scene = 'launch'
const faults = []
function fault(message) {
  const detail = `[${scene}] ${message}`
  faults.push(detail)
  console.error(detail)
}
try {
  const files = (await readdir(project, { withFileTypes: true }))
    .filter(entry => entry.isFile() && entry.name.endsWith('.silverdaw'))
  if (files.length !== 1) throw new Error(`Expected one .silverdaw file in ${project}`)
  const copy = join(work, 'project')
  await cp(resolve(project), copy, { recursive: true })
  await mkdir(profile)
  await writeFile(join(profile, 'preferences.json'), JSON.stringify({ paths: { defaultProjectDir: work } }))
  const document = JSON.parse(await readFile(join(copy, files[0].name), 'utf8'))
  function* projectNodes(node) {
    yield node
    for (const child of node.$children ?? []) yield* projectNodes(child)
  }
  const nodes = [...projectNodes(document.project)]
  const song = nodes.find(node => node.kind === 'source' && node.filePath)
  if (!song) throw new Error('No imported source track for the Files scene')
  const music = join(work, 'Music')
  await mkdir(music)
  await cp(song.filePath, join(music, 'California Soul.mp3'))
  let executable = binary
  if (!executable) {
    const archive = `Silverdaw-${release}.zip`
    execFileSync('gh', ['release', 'download', release, '-R', 'irarainey/silverdaw', '-p', archive, '-D', work], { stdio: 'inherit' })
    const extracted = join(work, 'release')
    await mkdir(extracted)
    execFileSync('tar', ['-xf', join(work, archive), '-C', extracted])
    executable = join(extracted, 'Silverdaw.exe')
  }
  app = await electron.launch({
    executablePath: resolve(executable),
    slowMo: pace,
    args: [`--user-data-dir=${profile}`],
    env: Object.fromEntries(Object.entries(process.env).filter(([key]) =>
      !['ELECTRON_RENDERER_URL', 'ELECTRON_RUN_AS_NODE'].includes(key.toUpperCase()))),
    timeout: 60_000,
  })
  // Electron's native JS error box isn't a Playwright page error. Observe the
  // main process too, without handling the exception or altering app behaviour.
  child = app.process()
  child.stderr.setEncoding('utf8').on('data', text => {
    if (text.includes('[guide:main-error]')) fault(text.trim())
  })
  await app.evaluate(() => {
    process.on('uncaughtExceptionMonitor', error =>
      process.stderr.write(`[guide:main-error] ${error.stack ?? error}\n`))
  })
  const exited = new Promise(resolve => child.once('exit', (code, signal) => resolve({ code, signal })))
  const version = await app.evaluate(({ app }) => app.getVersion())
  if (version !== release) throw new Error(`Expected Silverdaw ${release}, found ${version}`)
  const page = await app.firstWindow()
  page.on('pageerror', error => fault(error.stack ?? error.message))
  page.on('crash', () => fault('Renderer crashed'))
  page.setDefaultTimeout(30_000)
  const display = await app.evaluate(({ BrowserWindow, screen }) => {
    const win = BrowserWindow.getAllWindows()[0]
    const { bounds } = screen.getDisplayMatching(win.getBounds())
    win.setFullScreen(true)
    return bounds
  })
  await page.waitForFunction(({ width, height }) =>
    Math.abs(innerWidth - width) <= 1 && Math.abs(innerHeight - height) <= 1, display)
  console.log(`Fullscreen: ${display.width} x ${display.height} display units`)
  // Also handles shutdown, when Playwright is no longer issuing page actions.
  await page.evaluate(() => {
    const answered = new WeakSet()
    const discard = () => {
      const modal = document.querySelector('[role="dialog"][aria-labelledby="unsaved-title"]')
      if (!modal || answered.has(modal)) return
      const no = Array.from(modal.querySelectorAll('button')).find(button => button.textContent.trim() === "Don't Save")
      if (no) {
        answered.add(modal)
        no.click()
      }
    }
    new MutationObserver(discard).observe(document.body, { childList: true, subtree: true })
    discard()
  })
  const button = (name) => page.getByRole('button', { name, exact: true })
  const dialog = page.getByRole('dialog')
  const card = dialog.locator('.dialog-card')
  async function frame(name, box, margin = 0) {
    scene = name
    if (faults.length) throw new Error(faults.join('\n'))
    await pause(pace)
    await page.evaluate(async () => {
      await document.fonts.ready
      await new Promise(done => requestAnimationFrame(() => requestAnimationFrame(done)))
    })
    const viewport = display
    const x = Math.max(0, Math.floor(box.x - margin))
    const y = Math.max(0, Math.floor(box.y - margin))
    const width = Math.min(viewport.width, Math.ceil(box.x + box.width + margin)) - x
    const height = Math.min(viewport.height, Math.ceil(box.y + box.height + margin)) - y
    images.set(name, await page.screenshot({ animations: 'disabled', clip: { x, y, width, height } }))
    console.log(`Captured ${name}`)
  }
  async function capture(name, locator, margin = 0) {
    await locator.waitFor()
    await frame(name, await locator.boundingBox(), margin)
  }
  async function captureGroup(name, controls, margin) {
    const boxes = await Promise.all(controls.map(control => control.boundingBox()))
    if (boxes.some(box => !box)) throw new Error(`Missing control in ${name}`)
    const x = Math.min(...boxes.map(b => b.x))
    const y = Math.min(...boxes.map(b => b.y))
    await frame(name, {
      x, y, width: Math.max(...boxes.map(b => b.x + b.width)) - x,
      height: Math.max(...boxes.map(b => b.y + b.height)) - y,
    }, margin)
  }
  const captureDialog = (name, surface = card) => capture(name, surface, 36)

  await button('New Project').waitFor({ timeout: 60_000 })
  // The startup picker fills the window; frame its controls and surrounding background.
  await capture('startup', dialog.locator('div:has(> header #startup-title)'), 36)
  // Drive the real Open Project workflow without interacting with the OS file picker.
  await app.evaluate(({ dialog }, path) => {
    dialog.showOpenDialog = async () => ({ canceled: false, filePaths: [path] })
  }, join(copy, files[0].name))
  await button('Open Project…').click()
  await dialog.waitFor({ state: 'hidden' })
  const divider = page.getByTitle('Drag to resize track header column')
  await divider.waitFor()
  const box = await divider.boundingBox()
  await page.getByTitle('Vocals — click to rename', { exact: true }).waitFor()
  await page.getByTitle('Hide automation lanes', { exact: true }).first().waitFor()
  await capture('timeline-arranging', divider.locator('..'))
  const vocalHeader = page.locator('.pointer-events-auto.absolute').filter({
    has: page.getByTitle('Vocals — click to rename', { exact: true }),
  })
  await capture('window-track-header', vocalHeader)
  await frame('mixing-automation', { x: 0, y: box.y, width: 1060, height: 228 })
  const y = box.y + 14 // Midpoint of the released UI's 28px timeline ruler.
  await page.mouse.move(box.x + 100, y)
  await page.mouse.down()
  await page.mouse.move(box.x + 380, y, { steps: 20 })
  await page.mouse.up()
  const loop = page.getByTitle(/^Loop Selection \(/)
  if ((await loop.getAttribute('title')).includes('(off)')) await loop.click()
  const control = await page.getByTitle(/^Loop Selection \(on\)/).boundingBox()
  if (!control) throw new Error('Timeline range did not enter loop mode')
  const top = Math.floor(control.y - 6)
  await frame('timeline-range', { x: 0, y: top, width: 1440, height: Math.min(420, box.y + box.height - top) })
  await page.mouse.click(box.x + 100, y)
  await button('Edit').click()
  await page.getByRole('button', { name: /^Preferences/ }).click()
  for (const [tab, name] of [['General', 'preferences'], ['Timeline', 'preferences-timeline'], ['Effects', 'preferences-effects']]) {
    await dialog.getByRole('tab', { name: tab, exact: true }).click()
    await captureDialog(name)
  }
  await dialog.getByRole('tab', { name: 'Audio', exact: true }).click()
  await dialog.getByRole('button', { name: 'Rescan output devices' }).waitFor()
  await captureDialog('preferences-audio')
  await dialog.getByRole('button', { name: 'Cancel' }).click()
  await button('File').click()
  await page.getByRole('button', { name: /^Project Properties/ }).click()
  await captureDialog('project-properties')
  await dialog.getByRole('button', { name: 'Cancel' }).click()
  await button('File').click()
  await page.getByRole('button', { name: /^Export Mixdown/ }).click()
  const outputFile = dialog.getByLabel('Output file', { exact: true })
  await outputFile.fill('C:\\Projects\\California Mashup\\mixdown\\California Mashup.wav')
  await outputFile.blur()
  await captureDialog('export-dialog')
  await dialog.getByRole('button', { name: 'Cancel' }).click()
  await button('File').click()
  await page.getByRole('button', { name: /^Export Tracks/ }).click()
  await dialog.getByLabel('Output folder', { exact: true }).fill('C:\\Projects\\California Mashup\\export')
  const tracks = dialog.getByRole('button', { name: /^Tracks:/ })
  await tracks.click()
  await dialog.getByLabel('Select all tracks').uncheck()
  await dialog.getByLabel('Vocals', { exact: true }).check()
  await captureDialog('export-track-picker')
  await tracks.click()
  await dialog.getByRole('button', { name: 'Cancel' }).click()
  await button('File').click()
  await page.getByRole('button', { name: /^Audio Sample Report/ }).click()
  const table = dialog.locator('table').first()
  const row = table.locator('tbody tr').first()
  await row.scrollIntoViewIfNeeded()
  // Show a placement, not the source paths and credits above and below it.
  await captureGroup('sample-report-placement', [table.locator('thead'), row], 0)
  await dialog.getByRole('button', { name: 'Close' }).click()

  const library = button('Library')
  if (!(await library.isVisible())) await page.keyboard.press('Control+j')
  const panel = page.locator('section').filter({ has: library })
  // Use the real splitter and measure the rendered rack at native display scale.
  // Keep the resulting panel height when returning to the Library for the overview.
  for (const tab of ['Project FX', 'Track FX']) {
    await button(tab).click()
    const rack = panel.locator('.fx-rack')
    await rack.waitFor()
    const overflow = await rack.evaluate(el => el.scrollHeight - el.clientHeight)
    if (overflow > 0) {
      const handle = await panel.getByTitle('Drag to resize', { exact: true }).boundingBox()
      const x = handle.x + handle.width / 2
      const y = handle.y + handle.height / 2
      await page.mouse.move(x, y)
      await page.mouse.down()
      await page.mouse.move(x, y - overflow - 6, { steps: 12 })
      await page.mouse.up()
      if (await rack.evaluate(el => el.scrollHeight > el.clientHeight + 1)) {
        throw new Error(`${tab} controls do not fit at this display resolution`)
      }
    }
  }
  await library.click()
  const filter = page.getByPlaceholder('Filter library', { exact: false })
  await filter.waitFor()
  const source = panel.locator('.library-item').filter({ has: page.getByText('California Soul', { exact: true }) })
  await source.waitFor()
  await page.waitForFunction(() => {
    const cover = document.querySelector('[data-library-item-name="California Soul"] img')
    return cover?.complete && cover.naturalWidth > 0
  })
  await capture('window-overview', page.locator('body'))
  await captureGroup('window-bottom-panel', [button('Files'), button('Project FX')], 7)
  await captureGroup('library-panel', [panel.locator('header'), ...await panel.locator('.library-item').all()], 6)
  await captureGroup('quickstart-import', [library, source], 6)
  await button('Files').click()
  await app.evaluate(({ dialog }, path) => {
    dialog.showOpenDialog = async () => ({ canceled: false, filePaths: [path] })
  }, music)
  await page.getByTitle('Add a folder to the file browser').click()
  const folder = panel.getByRole('treeitem', { name: /Music/ }).first()
  await folder.waitFor()
  if (await folder.getAttribute('aria-expanded') !== 'true') await folder.click()
  const file = panel.getByRole('treeitem').filter({ hasText: 'California Soul' })
  await file.waitFor()
  await captureGroup('files-browser', [panel.locator('header').first(), file], 6)
  await library.click()
  await source.click({ button: 'right' })
  await page.getByText('Separate Stems', { exact: true }).click()
  await dialog.getByRole('checkbox', { name: /Vocals/ }).check()
  await dialog.getByRole('checkbox', { name: /Drums/ }).check()
  await captureDialog('stems-dialog')
  await dialog.getByRole('button', { name: 'Cancel' }).click()
  const clip = { x: box.x + 110, y: box.y + 76 } // Short vocal phrase in the saved timeline view.
  await page.mouse.click(clip.x, clip.y, { button: 'right' })
  await page.getByRole('menu').getByText('Open', { exact: true }).hover()
  await page.getByText('Scratch Editor', { exact: true }).click()
  const arm = button('Arm scratch recording')
  try {
    await arm.click({ timeout: 60_000 })
  } catch (error) {
    throw new Error(`Scratch session did not become ready: ${await dialog.innerText()}`, { cause: error })
  }
  const platter = await page.getByRole('slider', { name: 'Virtual vinyl platter' }).boundingBox()
  const px = fraction => platter.x + platter.width * fraction
  const py = fraction => platter.y + platter.height * fraction
  await page.mouse.move(px(0.3), py(0.3))
  await page.mouse.down()
  // Chop the forward/back strokes into bursts with the virtual crossfader.
  for (const x of [0.5, 0.7, 0.5, 0.3, 0.5, 0.7]) {
    await page.mouse.move(px(x), py(0.3), { steps: 5 })
    await page.keyboard.press('z')
  }
  await page.mouse.up()
  await button('Stop recording').click()
  const notation = page.getByRole('application', { name: 'Scratch notation editor' })
  await notation.getByRole('button', { name: /^Platter point/ }).first().waitFor()
  const cuts = notation.getByRole('button', { name: /^Crossfader point/ })
  await cuts.nth(5).waitFor()
  const points = notation.getByRole('button', { name: /^(Platter|Crossfader) point / })
  const pattern = () => points.evaluateAll(els => els.map(el => el.getAttribute('aria-label')).join('\n'))
  const recorded = await pattern()
  if (!recorded.includes(', 0%') || !recorded.includes(', 100%')) throw new Error('Scratch take is missing open or closed cuts')
  await capture('scratch-pattern', notation, 6)
  await dialog.getByRole('button', { name: 'Save', exact: true }).click()
  await dialog.waitFor({ state: 'hidden', timeout: 60_000 })
  await filter.fill('scratch')
  const savedScratch = panel.locator('[data-library-item-name*="Scratch" i]')
  await savedScratch.click({ button: 'right' })
  await page.getByText('Open in Scratch Editor', { exact: true }).click()
  await cuts.nth(5).waitFor()
  if (await pattern() !== recorded) throw new Error('Reopened scratch does not match the recorded take')
  await captureDialog('scratch-reopened')
  await dialog.getByRole('button', { name: 'Cancel', exact: true }).click()
  await filter.fill('')
  await button('Track FX').click()
  await panel.getByText('Tone', { exact: true }).first().waitFor()
  await capture('quickstart-track-fx', panel)
  await button('Project FX').click()
  await capture('shared-reverb', panel.getByRole('region', { name: 'Reverb', exact: true }), 6)
  await button('Plugins').click()
  await captureGroup('plugin-discovery', [button('Plugins'), page.getByLabel('Choose a plugin to add'), button('Scan Plugins')], 6)
  await button('Track FX').click()
  await page.mouse.dblclick(clip.x, clip.y)
  await dialog.locator('canvas').first().waitFor()
  await captureDialog('clip-editor')
  const grid = dialog.getByRole('region', { name: 'Beat grid', exact: true })
  await grid.getByRole('button', { name: 'Slide grid to align' }).click()
  await capture('clip-beat-grid', grid, 6)
  await grid.getByRole('button', { name: /Aligning/ }).click()
  const waveform = dialog.locator('canvas').first()
  await dialog.getByRole('button', { name: 'Volume', exact: true }).click()
  const wave = await waveform.boundingBox()
  for (const [x, y] of [[0.25, 0.18], [0.36, 0.72], [0.54, 0.72], [0.65, 0.18]]) {
    await waveform.click({ position: { x: wave.width * x, y: 18 + (wave.height - 18) * y } })
  }
  if (!await dialog.getByTitle('Reset the volume shape to standard').isEnabled()) throw new Error('No envelope to capture')
  await captureGroup('clip-volume-envelope', [waveform, dialog.getByRole('button', { name: 'Volume', exact: true })], 4)
  await dialog.getByTitle('Reset the volume shape to standard').click()
  await dialog.getByRole('button', { name: 'Slice', exact: true }).click()
  const slice = dialog.getByRole('region', { name: 'Slice', exact: true })
  await slice.getByRole('button', { name: '1/4', exact: true }).click()
  await slice.getByRole('button', { name: 'Generate to grid' }).click()
  if (!await slice.getByRole('button', { name: 'Slice to timeline' }).isEnabled()) throw new Error('No slices to capture')
  await captureGroup('clip-slice-markers', [waveform, slice], 6)
  await dialog.getByRole('button', { name: 'Slice', exact: true }).click()
  await dialog.getByRole('checkbox', { name: 'Enable Warp' }).check()
  await dialog.getByRole('button', { name: 'tonal', exact: true }).click()
  await captureGroup('clip-warp-pitch', ['Warp', 'Pitch', 'Warp & Pitch Mode'].map(name =>
    dialog.getByRole('region', { name, exact: true })), 6)
  await page.keyboard.press('Escape')
  await dialog.waitFor({ state: 'hidden' })
  await page.mouse.click(clip.x, clip.y, { button: 'right' })
  await page.getByText('Transform', { exact: true }).hover()
  await page.getByText('Chop to Grid', { exact: true }).hover()
  await page.getByText('1 bar', { exact: true }).hover()
  await captureGroup('quickstart-chop-to-grid', await page.getByRole('menu').all(), 24)
  await page.keyboard.press('Escape')
  const addLane = page.getByRole('button', { name: 'Add automation lane' })
  await addLane.first().click()
  await frame('mixing-two-lanes', { x: 0, y: box.y, width: 1060, height: 308 })
  await captureRecordingExamples({ page, captureDialog, work, bpm: document.project.bpm,
    trackIds: nodes.filter(node => node.$type === 'TRACK').map(node => node.id) })
  // In the saved view the next vocal starts at this seam. Extend its left
  // edge over the preceding phrase; the app creates the transition on release.
  const seam = { x: box.x + 305, y: box.y + 84 }
  await page.mouse.move(seam.x, seam.y)
  await page.mouse.down()
  await page.mouse.move(seam.x - 95, seam.y, { steps: 18 })
  await page.mouse.up()
  await page.mouse.click(clip.x, clip.y, { button: 'right' })
  await page.getByText('Crossfade', { exact: true }).hover()
  await page.getByText(/Crossfade to next: Smooth blend/i).waitFor()
  await page.keyboard.press('Escape')
  await frame('timeline-crossfade', { x: box.x + 38, y: box.y, width: 533, height: 148 })
  await button('File').click()
  await page.getByRole('button', { name: /^New Project/ }).click()
  await vocalHeader.waitFor({ state: 'hidden' })
  await button('File').click()
  await page.getByRole('button', { name: /^Import from Project/ }).click()
  await dialog.getByRole('button', { name: 'California Mashup', exact: true }).click()
  await dialog.getByRole('checkbox', { name: /Vocals/i }).first().check()
  await captureDialog('import-from-project')
  await dialog.getByRole('button', { name: 'Cancel' }).click()
  scene = 'closing the project'
  // Initiate exactly one close. Starting app.close() as well would race the
  // renderer's asynchronous discard response and the app's own shutdown.
  await app.evaluate(({ BrowserWindow }) => { setImmediate(() => BrowserWindow.getAllWindows()[0].close()) })
  let timer
  try {
    const { code, signal } = await Promise.race([
      exited,
      new Promise((_, reject) => { timer = setTimeout(() => reject(new Error('Silverdaw did not exit after closing the project')), 30_000) }),
    ])
    if (code !== 0 || signal) throw new Error(`Silverdaw exited with code ${code}, signal ${signal}`)
  } finally {
    clearTimeout(timer)
  }
  if (faults.length) throw new Error(faults.join('\n'))
} finally {
  try {
    if (child && child.exitCode === null && child.signalCode === null) await app.close()
  } finally {
    // Chromium gives some Windows cache directories app-only ACLs. Restore
    // owner access on this run's profile only, never on project or app files.
    try {
      await rm(work, { recursive: true, force: true, maxRetries: 1 })
    } catch (error) {
      if (process.platform !== 'win32' || error.code !== 'EPERM') throw error
      execFileSync('icacls.exe', [profile, '/grant', '*S-1-3-4:(OI)(CI)F', '/t', '/l', '/q'])
      await rm(work, { recursive: true, force: true, maxRetries: 2 })
    }
  }
}

// Do not replace any guide image until every scene has been captured.
const missing = [...expected].filter(name => !images.has(name))
if (missing.length) throw new Error(`Guide screenshots not captured: ${missing.join(', ')}`)
for (const [name, png] of images) {
  const path = join(output, `${name}.png`)
  await writeFile(path, png)
  console.log(path)
}
