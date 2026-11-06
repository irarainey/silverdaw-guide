# Exporting a Mixdown

Ready to hear your mix outside Silverdaw? **Export a mixdown** to make a single
stereo audio file. The export brings your arrangement, effects, automation,
and fades together, while the project stays editable.

Save the project first, especially after changing a plugin's own controls.
Export uses the plugin settings captured at the last save.

## Exporting

Choose **File ▸ Export Mixdown…** (<kbd>Ctrl</kbd>+<kbd>M</kbd>). This is available
once your project contains audio to render.

![The Export Mixdown dialog](/1.10/images/export-dialog.png)

Choose an **Output file**, or use **Browse…** to choose where to save it. When
you have finished the settings below, click **Export**.

## Choosing a format

Not sure which **Format** to use? Choose **WAV (PCM / float)** if you want to
keep a high-quality copy or work on the mix elsewhere. Choose **MP3 (lossy,
16-bit)** for a smaller file to share. **FLAC (lossless)** keeps the audio
without loss in a smaller file than WAV; **AIFF (lossless)** is another
uncompressed option.

Audio is processed internally in high-quality 32-bit floating point from start to
finish, and converted to the final bit depth only when you export. Export defaults
to **16-bit**, with 24-bit and 32-bit float also available depending on the
format:

- **WAV:** 16 / 24 / 32-bit float
- **FLAC** and **AIFF:** 16 / 24

For a 16-bit WAV, FLAC, or AIFF export, turn on **Dither**. It helps smooth the
small rounding errors that occur when reducing the audio to fewer levels.

Choose a **Sample rate** of **44.1 kHz** or **48 kHz**. For MP3, choose a
**Bitrate** of **128 kbps**, **192 kbps**, or **320 kbps**.

## Adding tags

**Tags (optional)** lets you add **Title**, **Artist**, **Album**, **Year**,
**Genre**, and **Comment** details to the exported file.

## Loudness and level

If you want the file to land at a particular listening level, use loudness
normalisation. **Target LUFS** sets the overall loudness, and **Ceiling dBTP**
limits its highest peaks. These settings are optional; you can leave
normalisation off when you want to keep the levels you've mixed.

See [Loudness and levels](/1.10/guide/digital-audio-basics#loudness-and-levels)
if those units are unfamiliar.

## Choosing where the render starts and ends

- **Start from bar** — choose which bar the render begins from, so you can skip any
  lead-in.
- **Tail** — add up to 60 seconds of silence after the timeline, so reverb and
  delay can ring out.
- **Length** — choose **Clip at duration** and enter a length, or **Trim to end
  of last clip** so the render ends where your final clip does.

## After exporting

Play the file back and listen to the opening, transitions, and ending. If
something needs changing, return to the project, adjust it, save, and export
again. Exporting doesn't replace your editable project.
