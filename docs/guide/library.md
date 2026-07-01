# Importing & the Library

Every project has its own **Library** — the collection of audio you've brought in,
ready to drag onto the timeline. This page covers getting audio into a project and
working with saved clips and samples.

## Importing audio

Open the **Library** tab in the bottom panel and click **Import**, then choose one
or more files. You can also drag files straight from Windows onto the Library.

Silverdaw imports these audio formats:

- WAV
- AIFF
- FLAC
- MP3
- AAC / M4A / MP4
- Windows Media audio (WMA)

As soon as a file is imported, Silverdaw analyses it in the background to work out
its **key**, **tempo (BPM)**, and **beat positions**. This is what lets clips line
up musically when you tempo-match them later. You can keep working while analysis
happens — it never blocks you.

Imported files are grouped in the Library so they're easy to find and reuse, and
the panel shows how many items the project contains.

![The Library panel with grouped imported items](/images/library-panel.png)

*Screenshot placeholder — replace with: the Library tab showing several imported
items grouped together, the item count, and the Import button.*

### Sample rate check

Each project has a [sample rate](/guide/projects#project-properties) (44.1 or
48 kHz). When you import a file recorded at a different rate, Silverdaw tells you
and offers a clear way forward, so your project stays consistent.

## Adding audio to the timeline

To use a Library item, drag it from the Library onto a track. It becomes a
**clip** you can move, trim, and edit. You can drag the same item onto the
timeline as many times as you like.

## Saved clips and samples

The Library isn't only for imported files — it also holds material you create as
you work:

- **Save Clip to Library** — right-click a clip and choose **Save Clip to
  Library** to keep a reusable copy of it (with its current edits) for use
  elsewhere in the project. To detach a clip from its saved version, use
  **Unlink from Library**.
- **Save as Sample…** — right-click a clip and choose **Save as Sample…** to
  "bake" it down to a fresh audio sample that commits its current sound. This is
  useful once you're happy with a clip and want to treat it as a finished piece
  of audio.

Slicing a clip can also produce new samples — see
[Slicing loops](/guide/clip-editor#slicing-a-clip-into-loops).

## Item information

To see the details Silverdaw detected for a Library item, right-click it and
choose its information option, or right-click a clip on the timeline and choose
**Show Information**.
