# Exporting Individual Tracks

Use **Export Tracks** to save each timeline track as its own stereo audio file.
Choose one track, a few tracks, or the whole arrangement. This is useful for
sending separate parts to someone else or continuing your mix in another audio
application.

To make one file containing the finished mix instead, use
[Export Mixdown](/1.11/guide/export).

## Choosing tracks

Choose **File ▸ Export Tracks…**
(<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>M</kbd>). Your project needs at least one
clip on the timeline before you can export.

Open the **Tracks:** dropdown and tick the tracks you want. All tracks are
selected the first time; **Select all tracks** selects or clears the whole
list. You can click anywhere on a track's row to toggle it. At least one track
must be selected.

For just one track, click its header's export icon, whose tooltip reads
**Export this track…**. The same dialog opens with only that track ticked.
You can still change the selection before exporting.

## Choosing a format

**Format** offers **WAV (PCM / float)**, **FLAC (lossless)**,
**AIFF (lossless)**, and **MP3 (lossy, 16-bit)**.

Track export starts with **24-bit WAV**, a useful choice for further editing.
Choose a lossless format (WAV, FLAC, or AIFF) when the files need to line up
precisely in another application.

- **Sample rate** — choose **44.1 kHz** or **48 kHz**. It starts at the
  project's rate.
- **Bit depth** — WAV offers **16-bit**, **24-bit**, or **32-bit float**;
  FLAC and AIFF offer **16-bit** or **24-bit**.
- **Bitrate** — for MP3, choose **128 kbps**, **192 kbps**, or **320 kbps**
  instead of a bit depth.

For 16-bit lossless files, dither is applied automatically to tracks containing
audio; there is no Dither checkbox in this dialog. See
[Digital Audio Basics](/1.11/guide/digital-audio-basics) for help choosing a
format or understanding these terms.

## Choosing what is included

**Include track effects** is on by default:

- Leave it ticked to include Track FX, VST3 plugins, effect automation, Beat
  Repeat, and that track's contribution to the shared Reverb and Delay.
- Clear it to leave those effects out.

Either way, clip edits and effects, track volume, pan, and volume and pan
automation remain in the audio. Clearing the checkbox does not restore the
original, unedited source file.

::: warning
Track export ignores **Mute** and **Solo**, so muting a track does not exclude
it. Untick it in the track list instead. Empty tracks, and tracks whose volume
is set to zero, produce silent files.

The transport's **Master volume**, **Glue Compressor**, **Safety Limiter**, and
mixdown loudness normalisation are not applied. Check your track levels:
**Protect final output** does not protect these exports.
:::

## Choosing the length

By default, every file begins at the project start (0:00) and ends at the end of
the last clip in the **whole arrangement**, even if you export only a subset
of tracks. Silence before, between, and after a track's clips keeps the files
aligned with one another.

Set **Tail (seconds)** to a whole number from **0** to **60** to leave extra
time for effects to ring out. It starts at **0**. Every file has the same length,
including this tail; effects stop at that common end.

### Exporting only a range

Before opening the dialog, drag across the
[timeline ruler](/1.11/guide/timeline#playing-a-timeline-range) to select a
range. Then tick **Export selected range only**.

Each file contains only that interval, from the range start to the range end.
**Tail (seconds)** is disabled and no extra tail is added. Effects already
ringing at the range start are included when **Include track effects** is on.

You do not need to turn on **Loop Selection**. The export checkbox starts
unchecked each time you open the dialog and is unavailable without a timeline
range.

## Saving the files

Choose an **Output folder**, or click **Browse…**. The default is the `export`
folder inside your project folder. If you type another location, use its full
path.

Click **Export**. For an untitled project, the button reads **Save and Export…**
and asks you to save the project first.

Each export creates a new date-and-time folder inside the output folder, with
one file per selected track. Files use the timeline track names; characters
that cannot be used in filenames are replaced, and duplicate names receive a
number. Existing export batches are not overwritten.

The progress dialog shows which track is being rendered. **Cancel** stops the
export; a finished batch folder appears only after every track succeeds.
The completion notification gives the folder location.

The project remembers the output folder, format, bit depth or MP3 bitrate, and
the File menu's track selection separately from mixdown settings. Exporting
from a track header does not replace that saved track selection.

Saving export preferences does not save your arrangement edits. Keep using
<kbd>Ctrl</kbd>+<kbd>S</kbd> to save your project.
