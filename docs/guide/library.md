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
the panel shows how many items the project contains. Each tile shows the item's
name, and — where the details are known — its length, detected key, and detected
tempo (BPM). Tiles also show the track's cover art, or a simple icon when there's
none. You can hide the artwork for a denser, text-only Library with **Show images
on library tiles** in [Preferences ▸ General](/guide/preferences#general).

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
  elsewhere in the project. Saved clips are grouped under the source they came
  from; use the small chevron on a source to **Show saved clips** or **Hide saved
  clips**. To detach a clip from its saved version, use **Unlink from Library**.
- **Save as Sample…** — right-click a clip and choose **Save as Sample…** to
  "bake" it down to a fresh audio sample that commits its current sound. This is
  useful once you're happy with a clip and want to treat it as a finished piece
  of audio. Each time you do this you get a new, independent sample.

### Music and Simple samples

When you save a sample, Silverdaw asks which kind you want:

- **Music** — keeps the tempo, beats, and key, so the sample lines up with the
  project and can tempo-match when you drop it in — just like an imported song.
  Choose this for loops and musical phrases.
- **Simple** — a plain one-shot that ignores tempo and key and never
  tempo-matches. Choose this for hits, stabs, and sound effects.

You can pick the same two kinds directly from a saved clip's right-click menu with
**Save as Sample (Music)** and **Save as Sample (Simple)**.

Slicing a clip can also produce new samples — see
[Slicing loops](/guide/clip-editor#slicing-a-clip-into-loops).

## Working with Library items

Right-click a Library tile for the actions available to it (which vary by the kind
of item):

- **Show Information** — a read-only summary: file details, detected key, tempo,
  and beats, cover art, and which tracks currently use the item.
- **Rename** — give the item a clearer name. You can also single-click a tile's
  name to edit it in place.
- **Reanalyse File** — run the key, tempo, and beat detection again, for example
  after you've corrected something.
- **Auto-classify** / **Treat as Music** / **Treat as Simple** — control whether
  an item is treated as musical (tempo-matched) or as a plain one-shot. If a loop
  isn't lining up with your project tempo, right-click it and choose **Treat as
  Music**.
- **Update Image…** — set your own cover picture for the tile.
- **Remove Image** / **Restore Image** — hide or bring back a tile's cover art,
  without deleting the picture file.
- **Remove** — take the item out of the project. Sources still in use by a clip
  can't be removed until the clip is gone; saved clips can always be removed (any
  clips using them keep playing from the original source).

::: warning
If you turn on **Clean up project files on remove** in
[Preferences ▸ Project](/guide/preferences#project), removing a stem or sample
also **deletes its generated file from disk**, which can't be undone. Your
original imported files are never deleted. This setting is off by default, so
normally **Remove** only unlinks the item from the project.
:::
