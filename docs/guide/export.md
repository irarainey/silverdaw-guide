# Exporting a Mixdown

When your mix is ready, **export a mixdown** to turn the whole project into a
single stereo audio file you can share or upload. Everything you hear on
playback — arrangement, effects, automation, fades, and turntable effects — is
rendered into the file exactly as it plays.

## Exporting

Choose **File ▸ Export Mixdown…** (<kbd>Ctrl</kbd>+<kbd>M</kbd>). This is available
once your project contains audio to render.

![The Export Mixdown dialog](/images/export-dialog.png)

*Screenshot placeholder — replace with: the Export Mixdown dialog, showing the
format choice (WAV / FLAC / AIFF / MP3), the Dither option, the loudness settings
(Target LUFS and Ceiling dBTP), and the start-bar / length options.*

## Choosing a format

Silverdaw can export to:

- **WAV**
- **FLAC**
- **AIFF**
- **MP3**

Audio is processed internally in high-quality 32-bit floating point from start to
finish, and converted to the final bit depth only when you export. Export defaults
to **16-bit**, with 24-bit and 32-bit float also available depending on the
format:

- **WAV:** 16 / 24 / 32-bit float
- **FLAC** and **AIFF:** 16 / 24

For 16-bit exports, a **Dither** option (TPDF) is available. Dithering is
recommended, as it smooths out the tiny rounding that happens when reducing to
16-bit.

## Loudness and level

Optionally, Silverdaw can apply **loudness normalisation** so your export lands at
a consistent loudness. You can set a **Target LUFS** (the overall loudness) and a
**Ceiling dBTP** (the highest allowed peak) to keep the level in check.

## Choosing where the render starts and ends

- **Start bar** — choose which bar the render begins from, so you can skip any
  lead-in.
- **Length** — the render can follow the timeline, add a short tail of silence
  after it, or **Trim to end of last clip** so it finishes exactly where your
  music does.

## After exporting

Your exported file is a standard audio file — play it, share it, or upload it
wherever you like. Because export is separate from your project, you can keep
tweaking the mix and export again as many times as you want.
