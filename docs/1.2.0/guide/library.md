# Importing & the Library

Every project has its own **Library** — the collection of audio you've brought in,
ready to drag onto the timeline. This page covers getting audio into a project and
working with saved clips and samples.

## Importing audio

Open the **Library** tab in the bottom panel and click **Import**, then choose one
or more files. You can also import from **File ▸ Import to Library…**
(<kbd>Ctrl</kbd>+<kbd>I</kbd>), or drag files straight from Windows onto the
Library. When the Library is empty, the word **Import** in the panel's hint is a
shortcut you can click to open the same file picker.

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
on library tiles** in [Preferences ▸ General](/1.2.0/guide/preferences#general).

A small **type badge** in the bottom-right corner of each tile marks what the
item is —
a **Track** (imported audio), a **Stem** from [stem separation](/1.2.0/guide/stems), a
saved **Sample**, or a **Scratch** — so its kind reads at a glance. The tile shows
the badge as an icon; the [Show Information](#working-with-library-items) dialog
spells the type out in words.

![The Library panel with grouped imported items](/1.2.0/images/library-panel.png)

### Sample rate check

Each project has a [sample rate](/1.2.0/guide/projects#project-properties) (44.1 or
48 kHz). When you import a file recorded at a different rate, Silverdaw tells you
and offers a clear way forward, so your project stays consistent.

## Adding audio to the timeline

To use a Library item, drag it from the Library onto a track. It becomes a
**clip** you can move, trim, and edit. You can drag the same item onto the
timeline as many times as you like.

If an item's tempo varies across the file, its BPM is shown with a `~` to show
that it is a rough average. **Auto-warp clips to project tempo** applies one
uniform stretch, so a variable-tempo recording can still drift. Split it into
steadier sections and refine their beat grids when you need a tighter result.

If you drop a Library item onto the empty area below the tracks, Silverdaw shows
a **new track** drop lane (marked with a ＋ badge) and drops the clip onto a
freshly created track — all as a single, undoable step.

## Saved clips and samples

The Library isn't only for imported files — it also holds material you create as
you work:

- **Save Clip to Library** — right-click a clip and choose **Save Clip to
  Library** to keep a reusable copy of it (with its current edits) for use
  elsewhere in the project. Saved clips are grouped under the source they came
  from; use the small chevron on a source to **Show saved clips** or **Hide saved
  clips**. Copies you drag onto the timeline stay [linked](/1.2.0/guide/library#linked-clips)
  to the saved clip; to detach one, use **Unlink from Library**.
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
[Slicing loops](/1.2.0/guide/clip-editor#slicing-a-clip-into-loops).

## Linked clips

When you drag a **saved clip** onto the timeline, each copy stays **linked** to
that saved clip, and shows a small **chain badge** on its title strip. You can
drop the same saved clip onto the timeline as many times as you like, and every
copy stays connected to the original. Duplicating a linked clip, or copying and
pasting one, keeps the new copy linked too.

A clip you drag straight from an imported file — or one you've unlinked (below) —
is a plain, **unlinked** clip. It's completely independent: you can trim, chop,
split, and edit it however you like without affecting anything else, but there's
no automatic way to keep several copies of it in step.

### Why use linked clips

Linked clips let you **edit once and update everywhere**. If you reuse the same
loop throughout a track — a chorus, a drum break, a bassline — you can perfect it
in one place and have every copy follow along, so they all stay consistent without
you editing each one by hand.

### What's shared, and what isn't

Editing a linked clip's **sound** changes every linked copy together, in step. The
shared properties are:

- the **trim** — which part of the source the clip plays,
- **Warp** (tempo matching),
- **Pitch**,
- **Reverse**,
- **Brake** and **Backspin**, and
- the **volume envelope**.

You make these changes in the [Clip Editor](/1.2.0/guide/clip-editor) (they apply when
you click **Save**) or from the clip's right-click **Warp**, **Pitch**,
**Reverse**, **Brake**, and **Backspin** actions. Either way, Silverdaw warns you
that saving updates the saved clip and every linked copy. If a shared trim or
tempo change would make **any** linked copy overlap a neighbour on its track,
Silverdaw refuses the save and names the track (or tracks) that would clash — so
editing a linked clip can never quietly shuffle your arrangement.

Everything else stays **independent** for each copy, so the copies never disturb
one another:

- where each copy sits on the timeline, and which **track** it's on,
- its **Colour** and name, and
- whether it's **locked**.

### What you can't do to a single linked copy

Because the sound is shared, a few per-clip edits are held back on a linked clip:

- You can't drag a linked clip's **edges** to trim it on the timeline. Edit the
  shared trim in the Clip Editor instead, or unlink the copy first.
- **Chop to Grid** and **Split Clip at Playhead** aren't available on a linked
  clip.

### Unlinking a copy

To make a one-off change to just one copy, right-click it and choose **Unlink from
Library**. The copy keeps its current trim, warp, pitch, and effects, but becomes
an ordinary independent clip: you can now trim, chop, and split it freely, and
editing it (or the saved clip) no longer affects the other. Unlinking one copy
leaves the rest linked.

Removing a saved clip from the Library also unlinks every copy automatically — each
one keeps playing from the original source as an independent clip.

## Working with Library items

Right-click a Library tile for the actions available to it (which vary by the kind
of item):

- **Show Information** — a read-only summary: file details, detected key, tempo,
  and beats, cover art, and which tracks currently use the item.
- **Rename** — give the item a clearer name. You can also double-click a tile's
  name text to edit it in place.
- **Reanalyse File** — run the key, tempo, and beat detection again, for example
  after you've corrected something.
- **Auto-classify** / **Treat as Music** / **Treat as Simple** — control whether
  an item is treated as musical (tempo-matched) or as a plain one-shot. If a loop
  isn't lining up with your project tempo, right-click it and choose **Treat as
  Music**.
- **Update Image…** — set your own cover picture for the tile.
- **Open in Scratch Editor** — create or continue a scratch pattern from the
  item. See [Scratch Editor](/1.2.0/guide/scratch-editor).
- **Remove Image** / **Restore Image** — hide or bring back a tile's cover art,
  without deleting the picture file.
- **Remove** — take the item out of the project. Sources still in use by a clip
  can't be removed until the clip is gone; saved clips can always be removed (any
  clips using them keep playing from the original source).

::: warning
If you turn on **Clean up project files on remove** in
[Preferences ▸ Project](/1.2.0/guide/preferences#project), removing a stem or sample
also **deletes its generated file from disk**, which can't be undone. Your
original imported files are never deleted. This setting is off by default, so
normally **Remove** only unlinks the item from the project.
:::
