# Recording Audio

**Silverdaw** can record you. Sing, play an instrument, talk, or feed in a line
from a mixer, and Silverdaw captures it while the rest of your arrangement plays
underneath. What you record becomes an ordinary item in the
[Library](/1.9/guide/library), so everything else in this guide — trimming,
slicing, warping, effects — works on it just the same.

Nothing you record touches your project until you decide to keep it. You can
record, listen, record again, and close the dialog without changing a thing.

## Opening the Record Audio dialog

Choose **File ▸ Record Audio…**, or click the record button in the
[transport](/1.9/guide/the-window#the-transport).

Everything happens in one window, in two stages: you set up and record, then you
review what you captured and choose what to do with it.

<!-- Image placeholder: the Record Audio dialog set up and ready to record, showing the Input, Backing, Record Window, Metronome, Monitor, and Recording sections. -->

## Setting up

### Input

**Input** is where your sound comes from.

- The first dropdown lists the microphones and audio inputs Silverdaw can see.
  Pick the one you want to record from. If you plug something in while the
  dialog is open, click **Rescan**.
- The second dropdown chooses **Mono** or **Stereo**. Use **Mono** for a single
  microphone or a single instrument — it is the usual choice. Use **Stereo** for
  a stereo source such as a mixer or a keyboard with two outputs.
- **Level** is a meter showing how loud your input is right now. Make some noise
  and watch it move. If it never moves at all, see
  [When nothing is recorded](#when-nothing-is-recorded).
- **Gain** makes the incoming signal louder or quieter before it is recorded.
  Aim for a healthy meter that does not sit at the very top. Double-click the
  slider to return it to **0 dB**.

::: tip
If **No input available** is shown, Silverdaw could not find a microphone or
input at all. Connect one and click **Rescan**.
:::

### Timing

Sound takes time to travel out of your speakers, through the air (or a cable),
and back into your input. Left uncorrected, everything you play lands slightly
late against the backing.

The **Timing** row shows what Silverdaw is currently allowing for. Until you
measure it, it reads **Uncalibrated · using driver estimate** — a figure your
audio hardware reports, which is usually far smaller than the real delay.

Click **Calibrate** to measure it properly. See
[Calibrating timing](#calibrating-timing) below. Once measured, the row shows
the figure in milliseconds, and the button becomes **Recalibrate**.

::: tip
Calibration is remembered for that pairing of output and input device, so you
only need to do it once per setup.
:::

### Backing

**Backing** is what you hear while you play.

The list shows the tracks in your project with a checkbox each. Tick the ones
you want to hear and untick the rest. **All** and **None** select and clear the
whole list quickly. A track that is silenced by a mute or a solo elsewhere in
the project is marked **Muted**.

**Volume** sets how loud the backing sits in your ears. It has no effect on your
project — your real mutes, solos, and fader levels are left exactly as they are,
and the backing volume is not recorded into the take.

If your project has no tracks yet, you will see
**There are no tracks to play along to yet.** and can record without any
backing.

### Record Window

**Record Window** decides where recording starts and stops:

- **From Start** — begins at the top of the project.
- **From Playhead** — starts wherever the playhead sits and runs until you stop.
- **Over the Selected Range** — records only over a
  [timeline range](/1.9/guide/timeline#playing-a-timeline-range) you have
  selected, and stops automatically at the end of it. This option is only
  available when a range is selected.

### Metronome

- **Count Me In** plays one bar of clicks before recording begins, so you know
  where the beat is.
- **Click While Recording** keeps the click going after the count-in.

Neither the count-in nor the click is recorded into your take.

### Monitor

**Hear Yourself** plays your input back to you alongside the backing, so you can
hear what you are singing or playing.

::: warning
Use headphones when **Hear Yourself** is on. Through speakers, your microphone
picks up its own output and howls.
:::

Your own voice arrives in your ears a few milliseconds late — Silverdaw tells
you roughly how late. This affects only what you hear live; the recorded take
still lands on the beat.

If your input and output run at different sample rates, monitoring is not
possible and Silverdaw says so.

### Recording

**Recording** decides what kind of item your take becomes — the same distinction
as [Music and Simple samples](/1.9/guide/library#music-and-simple-samples):

- **Music** takes the project tempo and beat markers, so the take warps and
  stays in time like any other musical clip. Use this for singing and playing.
- **Simple** has no tempo at all. Use it for speech, sound effects, and anything
  that should never be stretched.

**Clean Up Background Noise** removes low-level background hiss and hum from the
take. It is aimed at microphone vocals recorded in an untreated room. Leave it
off for line inputs, which are already clean.

## Making a take

Click **Record** (or press <kbd>R</kbd> or <kbd>Space</kbd>) to start.

If you turned on **Count Me In**, you get a bar of clicks first, with the bars
remaining shown on screen. Then the backing plays and Silverdaw captures your
input, drawing a live waveform of your performance as it goes down along with
the elapsed time. In **Music** mode the project's beat grid is drawn over the
waveform, lined up with the beats you are actually hearing, so you can see at a
glance whether you are landing on the bar. **Simple** mode has no grid, because
speech has no beats to mark.

::: tip
A stereo take is drawn as separate left and right lanes when **Waveform display**
is set to **Left and right** in
[Preferences ▸ General](/1.9/guide/preferences#general), both while you record and
while you review. The same setting draws it as one combined waveform instead.
:::

Click **Stop** — or press <kbd>R</kbd> or <kbd>Space</kbd> again — to finish.
With **Over the Selected Range** chosen, recording stops on its own at the end
of the range.

**Cancel** abandons a take in progress and throws it away, leaving your project
exactly as it was.

<!-- Image placeholder: the Record Audio dialog while recording, showing the live waveform and the elapsed time. -->

Silverdaw keeps a moment of audio from just before the point where recording
began, so a note played fractionally early is not cut off.

::: tip
A single take can run up to 30 minutes. If you reach the limit, recording stops
and everything captured up to that point is kept.
:::

## Reviewing a take

When recording stops, the dialog switches to review. Nothing has been added to
your project yet.

You see the take's waveform, along with its length, whether it is mono or
stereo, and its tempo.

<!-- Image placeholder: a finished take in the review stage of the Record Audio dialog, showing the waveform, summary, and the Discard / Record Again / Add to Library / Add to Timeline buttons. -->

- **Play** (or <kbd>Space</kbd>) auditions the take. The button becomes **Stop**
  while it is playing. Click the waveform to play from a particular point.
- **Play With the Arrangement** plays the take against the tracks you recorded
  over, so you can hear whether it sits right. **Backing volume** balances the
  two.
- **Name** is what the item will be called in the Library. Give it something you
  will recognise later.
- **Save as Stereo** turns a mono take into a two-channel item. Both channels
  hold the same audio, which is useful if you intend to pan or process the sides
  differently afterwards.
- **Split Channels** applies to a genuinely stereo take, and separates its left
  and right channels into two items. This lets you use a two-channel mixer as
  your input device and have its two sources land apart from each other. With
  **Each as Stereo** ticked, each half becomes a two-channel item in its own
  right.

Below the controls, Silverdaw tells you exactly where the take will land if you
add it to the timeline.

### Keeping, redoing, or discarding

Four buttons finish the job:

- **Add to Library** keeps the take as a Library item without placing it. Use
  this when you want to decide where it goes later.
- **Add to Timeline** keeps it *and* places it where you recorded it — on the
  selected track if that track is empty, otherwise on a new track of its own. A
  split take places both halves where you played them, each on its own track.
- **Record Again** throws the take away and returns you to the setup stage with
  your settings intact, ready for another attempt.
- **Discard** throws the take away and closes the dialog. Your project is
  untouched.

Either way of keeping a take adds it to the [Library](/1.9/guide/library), where
it behaves like any other item: open it in the
[Clip Editor](/1.9/guide/clip-editor), slice it into loops, run
[stem separation](/1.9/guide/stems) on it, or drag more copies onto the
[timeline](/1.9/guide/timeline).

## Calibrating timing

Click **Calibrate** in the **Input** section to open **Calibrate Recording
Latency**.

Silverdaw plays a short series of clicks through your output device and listens
for them arriving back at your input, measuring the true round trip. It then
shifts your recordings back by that amount so they sit where you actually played
them.

For this to work, the clicks have to physically reach your input:

- **With a microphone**, turn the volume up a little, point the microphone at
  your speakers — or hold a headphone earpiece against it — and keep quiet for a
  few seconds.
- **With a line input, mixer, or DI**, patch an output back into that input. A
  cable is the most accurate method of all.

Click **Measure**. Progress is shown click by click. When it finishes you get a
measured round trip in milliseconds; click **Use Measurement** to apply it.

If the measurement fails, the button becomes **Try Again**. **Stop** abandons a
measurement in progress, and **Clear** removes a stored calibration.

<!-- Image placeholder: the Calibrate Recording Latency dialog showing a successful measured round trip. -->

### Entering a figure by hand

Where measuring acoustically is not practical, type a value into the **Or enter
it** field in milliseconds and click **Apply**. The **Timing** row then notes
that the figure was entered by hand.

::: tip
If a calibration was measured at one sample rate and your project now uses
another, Silverdaw flags it as worth measuring again.
:::

## Choosing the recording input driver

Windows can offer the same physical input through several different drivers.
Silverdaw picks one automatically, which is right for almost everyone.

If your input does not appear in the list at all, or sounds wrong, choose a
specific driver under **Recording input driver** in
[Preferences ▸ Audio](/1.9/guide/preferences#audio). The input itself is always
chosen in the Record Audio dialog, not in Preferences.

## Recordings in your project

A recording is stored as a file beside your project, in the same way as a
generated stem or sample. Saving a project keeps recordings with it, so the
whole project folder can be moved or synced to another machine and still open.
See [Projects](/1.9/guide/projects).

Two other things follow from this:

- **File ▸ Import from Project…** offers another project's recordings alongside
  its stems and samples, so you can pull a take you like into a new project. See
  [Importing from another project](/1.9/guide/library#importing-from-another-project).
- With **Clean up project files** on in
  [Preferences ▸ Project](/1.9/guide/preferences#project), removing a recording
  from the Library also deletes its file from disk. This cannot be undone.

## When nothing is recorded

If the **Level** meter never moves, or a take comes back silent, Windows is
probably blocking access to your microphone.

Silverdaw records through a background audio engine that has no window of its
own, so Windows can refuse access without ever showing you a prompt. A blocked
input opens quite normally and simply returns silence.

Open **Settings ▸ Privacy & security ▸ Microphone** and check all three of:

1. *Microphone access* is on.
2. *Let apps access your microphone* is on.
3. **Silverdaw** is on in the list of apps below.

Then reopen the Record Audio dialog.

Other messages you may see:

- **This input is delivering silence.** Windows is very likely blocking
  microphone access — check the three settings above.
- **That input could not be opened.** Another application is using the device
  exclusively. Close it, or choose a different input.
- **The input was disconnected.** Reconnect it, or pick another input.
- **Playback could not start, so the take was not begun.** Try again, or check
  your audio output device.
- **Your computer could not keep up.** Some audio was lost. Close other
  applications before recording again.
- **There is not enough free disk space to record.** Free some space and try
  again.
- **The recording could not be written to disk.** Check that your project folder
  can be written to, then try again.

## Keyboard shortcuts

| Action | Shortcut |
| --- | --- |
| Start or stop recording | <kbd>R</kbd> or <kbd>Space</kbd> |
| Play or stop the take while reviewing it | <kbd>Space</kbd> |
| Close the dialog | <kbd>Esc</kbd> |

These work anywhere in the Record Audio dialog. <kbd>Space</kbd> is ignored while
you are typing in the **Name** field, and <kbd>R</kbd> is also ignored while a
dropdown has focus, so you can pick a device or a channel count without starting
a take by accident.
