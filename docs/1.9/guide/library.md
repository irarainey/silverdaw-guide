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

You can also drag files straight from Windows Explorer onto the timeline. One
file dropped on a track is imported and placed on that track. Drop one file on
empty timeline space to create a new track for it. When you drop several files,
Silverdaw creates one new track per file at the same timeline position. A row
dragged from the [Files tab](/1.9/guide/files) works the same way. As you drag, a
marker shows exactly where the audio will land.

To find audio on your drives without leaving Silverdaw — and listen to it before
you commit — use the **Files** tab beside the Library. See
[Browsing Files](/1.9/guide/files).

Silverdaw imports these audio formats:

- WAV
- AIFF
- FLAC
- MP3
- M4A

As soon as a file is imported, Silverdaw analyses it in the background to work out
its **key**, **tempo (BPM)**, and **beat positions**. This is what lets clips line
up musically when you tempo-match them later. You can keep working while analysis
happens — it never blocks you.

Imported files are grouped in the Library so they're easy to find and reuse, and
the panel shows how many items the project contains. Each tile shows the item's
name, and — where the details are known — its length, detected key, and detected
tempo (BPM). Tiles also show the track's cover art, or a simple icon when there's
none. You can hide the artwork for a denser, text-only Library with **Show images
on library tiles** in [Preferences ▸ General](/1.9/guide/preferences#general).

A small **type badge** in the bottom-right corner of each tile marks what the
item is — a **Track** (imported audio), a **Stem** from
[stem separation](/1.9/guide/stems), a saved **Sample**, or a **Scratch** — so
its kind reads at a glance. The tile shows the badge as an icon. **Show
Information** identifies a Scratch item's baked audio as a **Sample**. Audio you
[record yourself](/1.9/guide/recording) is a **Sample** too.

### Finding audio

Use the **Filter library** field beside **Import** to find items by their name,
artist, or BPM. Click its **Clear filter** button, or press <kbd>Esc</kbd> while
the field is focused, to clear the filter.

![The Library with imported audio, stems, a saved clip, and the Filter library field](/1.9/images/library-panel.png)

### Sample rate check

Each project has a [sample rate](/1.9/guide/projects#project-properties) (44.1 or
48 kHz). When you import a file recorded at a different rate, choose **Convert
to** the project's rate, or **Switch Project to** the file's supported rate.

## Importing from another project

Use **File ▸ Import from Project…** to reuse generated material from another
saved project. The dialog lists the other saved projects in your configured
project folder; it does not list the project you already have open.

1. Choose a project to see its available **Stems**, **Samples**, and
   **Recordings**.
2. Tick the files you want.
3. Click **Import**.

Silverdaw copies the selected files into the current project, so the copy is
independent and the source project is never changed. A Scratch sample also brings
its linked Scratch pattern and source-audio snapshot, so it remains usable in the
[Scratch Editor](/1.9/guide/scratch-editor). Missing or unreadable files are
shown as unavailable and cannot be selected.

Tracks, timeline clips, markers, automation, and settings are not imported. Use
<kbd>Ctrl</kbd>+<kbd>Z</kbd> to remove the imported items from the project.

<!-- Image placeholder: the Import from Project dialog with a source project and selected stems, samples, and recordings. -->

## Adding audio to the timeline

To use a Library item, drag it from the Library onto a track. It becomes a
**clip** you can move, trim, and edit. You can drag the same item onto the
timeline as many times as you like. You can also drag one file directly onto a
track — from Windows Explorer or from the [Files tab](/1.9/guide/files) — to
import and place it in one step.

If an item's tempo varies across the file, its BPM is shown with a `~` to show
that it is a rough average. **Auto-warp clips to project tempo** applies one
uniform stretch, so a variable-tempo recording can still drift. Split it into
steadier sections and refine their beat grids when you need a tighter result —
see [Beat markers and how they are worked out](/1.9/guide/timeline#beat-markers-and-how-they-are-worked-out).

If you drop a Library item onto the empty area below the tracks, Silverdaw shows
a **new track** drop lane (marked with a ＋ badge) and drops the clip onto a
freshly created track — all as a single, undoable step.

## Saved clips and samples

The Library isn't only for imported files — it also holds material you create as
you work:

- **Save Clip to Library** — right-click a clip and choose **Library ▸ Save Clip
  to Library** to keep a reusable copy of it (with its current edits) for use
  elsewhere in the project. Saved clips are grouped under the source they came
  from; use the small chevron on a source to **Show saved clips** or **Hide saved
  clips**. Copies you drag onto the timeline stay [linked](/1.9/guide/library#linked-clips)
  to the saved clip; to detach one, use **Unlink from Library**.
- **Save as Sample…** — right-click a clip and choose **Library ▸ Save as
  Sample…** to "bake" it down to a fresh audio sample that commits its current sound. This is
  useful once you're happy with a clip and want to treat it as a finished piece
  of audio. Each time you do this you get a new, independent sample.

### Music and Simple samples

When you save a sample, Silverdaw asks which kind you want:

- **Music** — keeps the tempo, beats, and key, so the sample lines up with the
  project and can tempo-match when you drop it in — just like an imported song.
  Choose this for loops and musical phrases.
- **Simple** — a plain one-shot that ignores tempo and key and never
  tempo-matches. Choose this for hits, stabs, and sound effects.

Choose **Music** or **Simple** in the **Save as Sample…** dialog.

Slicing a clip can also produce new samples — see
[Slicing loops](/1.9/guide/clip-editor#slicing-a-clip-into-loops).

## Linked clips

When you drag a **saved clip** onto the timeline, each copy stays **linked** to
that saved clip, and shows a small **chain badge** on its title strip. You can
drop the same saved clip onto the timeline as many times as you like, and every
copy stays connected to the original. Duplicating a linked clip, or copying and
pasting one, keeps the new copy linked too.

A clip you drag straight from an imported file, a sample, or a recording — or one
you've unlinked (below) — is a plain, **unlinked** clip and carries no chain
badge. It's completely independent: you can trim, chop,
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

You make these changes in the [Clip Editor](/1.9/guide/clip-editor) (they apply when
you click **Save**) or from **Transform ▸ Warp**, **Transform ▸ Pitch**, and
**Effects ▸ Reverse**, **Brake**, or **Backspin** in the clip's right-click menu.
Either way, Silverdaw warns you
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
- **Transform ▸ Chop to Grid** and **Edit ▸ Split at Playhead** aren't available on a linked
  clip.

### Unlinking a copy

To make a one-off change to just one copy, right-click it and choose **Library ▸
Unlink from Library**. The copy keeps its current trim, warp, pitch, and effects, but becomes
an ordinary independent clip: you can now trim, chop, and split it freely, and
editing it (or the saved clip) no longer affects the other. Unlinking one copy
leaves the rest linked.

Removing a saved clip from the Library also unlinks every copy automatically — each
one keeps playing from the original source as an independent clip.

## Working with Library items

Right-click a Library tile for the actions available to it (which vary by the kind
of item):

- **Show Information** — a read-only summary: file details, key, tempo, and
  beats, cover art, the item's type, and which tracks currently use it. The
  tempo is shown as **BPM**, and an **Edit** button beside it opens the **Edit
  BPM** dialog (see [Correcting a tempo](#correcting-a-tempo)). Opened from a
  warped clip on the timeline, the row instead reads **Warped BPM** — the tempo
  that clip is playing at — and offers no **Edit** button, because that number is
  a product of the project tempo rather than a fact about the file.
- **Edit BPM…** — correct the tempo when it was detected wrongly. This appears
  only on items that have a tempo to correct, so you won't see it on a
  [Simple sample](#music-and-simple-samples) or on a file that hasn't been
  analysed.
- **Rename** — give the item a clearer name. You can also double-click a tile's
  name text to edit it in place.
- **Reanalyse File** — listen to the file again and work out its key, tempo, and
  beats from scratch. This replaces whatever tempo the item currently has, so a
  tempo you corrected by hand is detected again along with everything else.
- **Separate Stems** — split the item into **Vocals**, **Drums**, **Bass**, and
  **Other**. The stems are added to the Library only; drag them onto tracks
  yourself. See [Stem Separation](/1.9/guide/stems#separating-straight-from-the-library).
- **Auto-classify** / **Treat as Music** / **Treat as Simple** — control whether
  an item is treated as musical (tempo-matched) or as a plain one-shot. If a loop
  isn't lining up with your project tempo, right-click it and choose **Treat as
  Music**.
- **Update Image…** — set your own cover picture for the tile.
- **Open in Scratch Editor** — create or continue a scratch pattern from the
  item. See [Scratch Editor](/1.9/guide/scratch-editor).
- **Remove Image** / **Restore Image** — hide or bring back a tile's cover art,
  without deleting the picture file.
- **Remove** — take the item out of the project. Sources still in use by a clip
  can't be removed until the clip is gone; saved clips can always be removed (any
  clips using them keep playing from the original source).

::: warning
If you turn on **Clean up project files on remove** in
[Preferences ▸ Project](/1.9/guide/preferences#project), removing a stem, sample,
or recording
also **deletes its generated file from disk**, which can't be undone. Your
original imported files are never deleted. This setting is off by default, so
normally **Remove** only unlinks the item from the project.
:::

## Correcting a tempo

Silverdaw works out each file's tempo by listening to it, and sometimes it reads
the wrong number — most often half or double the real tempo, or a few BPM out on
busy, live material. When the BPM on a tile is simply wrong, correct it at the
source and everything that uses the file follows.

(If the tempo is right but the markers sit early, late, or on the off-beat, the
grid needs moving rather than correcting — see
[Fixing the detected tempo](/1.9/guide/clip-editor#fixing-the-detected-tempo).)
Right-click the item and choose **Edit BPM…**, or open **Show Information** and
click **Edit** beside the BPM. Both open the **Edit BPM** dialog:

1. Type the correct tempo in the **Tempo** field — anything from 20 to 300 BPM.
   Tempos are shown to two decimal places.
2. Click **Save**. **Cancel** (or <kbd>Esc</kbd>) leaves the tempo as it was.

**Save** stays greyed out until you've typed a valid tempo that differs from the
one shown, since there's nothing to correct otherwise.

The dialog explains what the correction does: *"Set the tempo of this file when it
was detected wrongly. The beat markers respace themselves to the new tempo;
nothing on the timeline moves."* That is the key idea — you are telling Silverdaw
it misread the file, not asking for anything to play faster or slower. Your
original audio file is not changed — only the tempo Silverdaw believes it has.

### What a correction changes

The file's [beat markers](/1.9/guide/timeline#beat-markers-and-how-they-are-worked-out)
respace themselves to the corrected tempo, and everything you placed by hand stays
exactly where you put it: **clip starts, markers, automation points, your
selection, and the playhead all hold their positions on the timeline.**

Some things do follow the new tempo, though, and it's worth knowing before you
save:

- Clips that are tempo-matched to the project re-stretch, so they can get
  **longer or shorter** on the timeline.
- A clip's **volume envelope** stretches or squashes with it, so it keeps
  shaping the same part of the audio.
- A [crossfade](/1.9/guide/timeline#crossfading-between-clips) between two clips is
  **removed** if the clips no longer overlap.
- A clip can end up extending **past the project length**, which you can change in
  [Project Properties](/1.9/guide/projects#project-properties).

Silverdaw tells you exactly what happened once you save — how many clips were
re-warped, and what it deliberately left alone. Clips you have **pinned** to a
fixed tempo, or that have **warp** switched off, are left as they are, because
you chose those settings on purpose.

The whole correction is a **single step**, so <kbd>Ctrl</kbd>+<kbd>Z</kbd> undoes
all of it at once.

::: tip
Correct a file's tempo **before** you drag its first clip onto the timeline and
there is nothing to reconcile — and if the project is taking its tempo from that
first clip, it starts from the corrected number.
:::

### Correcting a stem or a saved clip

Stems and saved clips take their tempo from the file they were cut from. Choose
**Edit BPM…** on one of them and the dialog names that file — *"This tempo comes
from … , so the correction is applied there and fixes everything cut from it."* One
correction therefore fixes the original and every stem, clip, and sample taken from
it, rather than leaving them disagreeing with one another.

### Two cases to watch for

::: warning
If the item's tempo was **measured from a recorded musical length**, the dialog
warns that correcting it discards that measurement, which can change the item's
bar length. Only override a measured length when you're sure it is wrong.
:::

If a file's tempo **varies** across its length, the dialog says so: the number
detected is a rough average, and a corrected number is still a single tempo for
the whole file. For material that speeds up and slows down, working in shorter
sections gives a much better result — see
[When the beat markers drift](/1.9/guide/timeline#when-the-beat-markers-drift).

### The project tempo is separate

Correcting a file **never changes the project tempo**. The project tempo is your
choice for the arrangement, not a fact about any one file, so it stays put and you
set it yourself in the transport bar — see
[Changing the project tempo](/1.9/guide/timeline#changing-the-project-tempo).

A corrected file whose old, wrong tempo happened to match the project will now
tempo-match to the project properly, which can make it sound stretched compared
with before. That is warp doing its job: if you want the arrangement to run at the
corrected tempo, set the project tempo to match.
