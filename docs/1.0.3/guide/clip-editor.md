# Editing Clips

For detailed work on a single clip, Silverdaw has the **Clip Editor**. Double-click
a clip's body, or right-click it and choose **Open in Editor**, to open it.
Everything here is non-destructive — your original file is never changed, and you
can preview changes as you make them.

Many of these actions are also available directly from a clip's right-click menu on
the timeline.

The editor works on a **draft**: your changes are previewed as you make them but
aren't applied until you click **Save**. **Cancel** (or <kbd>Esc</kbd>) discards
them.

What **Save** affects depends on the kind of clip you opened:

- **A [linked clip](/1.0.3/guide/library#linked-clips)** — or a **saved clip** opened
  from the Library — Save updates the saved clip and **every linked copy** on the
  timeline together, so they stay in step. The Save button confirms this with
  *"Save changes to the library and every linked timeline clip."*
- **An unlinked clip** — Save changes **only that one clip**
  (*"Save changes to this timeline clip only"*).
- **An imported file** opened from the Library (rather than a clip) — there's no
  clip to change, so the footer shows **Close** and **Save Selection to Library**
  (see below) instead.

If a change to the trim or tempo would make a clip overlap its neighbour on a
track, Silverdaw won't save it and tells you which track clashes — for a linked
clip it checks every copy. To edit one linked copy on its own, right-click it and
choose **Unlink from Library** first (see [linked clips](/1.0.3/guide/library#linked-clips)).

![The Clip Editor window](/1.0.3/images/clip-editor.png)

## Editing a clip vs previewing a file

The Clip Editor opens in one of two ways, and it helps to know which you're in:

- **Editing a clip.** Double-click a clip's body on the timeline, or right-click
  it and choose **Open in Editor**. You get the full editor — warp, pitch,
  slicing, volume shaping, and turntable effects — and your changes are kept with
  **Save**.
- **Previewing a file.** Double-click a [Library](/1.0.3/guide/library) tile (anywhere
  but its name) to hear the original imported file. The same window opens but
  shows a **Preview** badge, and in place of the effect panels there's a note
  explaining that warp, pitch, and effects are set *per clip on the timeline* —
  not on the original file. Here you can play the file and drag out a section, then
  use **Save Selection to Library** to turn it into a clip you can edit. The footer
  shows **Close**.

In short: you shape the sound of a **clip**, while previewing a **file** just lets
you listen and carve out clips to work with.

## Getting around the editor

- **Play** with the transport buttons or the <kbd>Space</kbd> bar, and click the
  waveform to move the playhead. <kbd>Home</kbd> and <kbd>End</kbd> jump the
  playhead to the start and end of the current playback range.
- **Zoom** by holding <kbd>Ctrl</kbd> and turning the mouse wheel — matching the
  main timeline — or with <kbd>+</kbd> / <kbd>-</kbd> / <kbd>0</kbd>, so you can
  work right down to the sample. **Zoom to Fit** (<kbd>Ctrl</kbd>+<kbd>F</kbd>)
  sizes the whole view back into the window. To pan across the waveform instead,
  scroll sideways or hold <kbd>Shift</kbd> while scrolling.
- **Select a range** by dragging across the waveform, then drag the handles at
  its edges to fine-tune it.
- **Loop** (<kbd>L</kbd>, or the round-arrows button in the transport controls)
  plays the current section over and over — the selected range if you've made one,
  or the whole clip if you haven't. Its tooltip reads **Loop off** when it's turned
  off and **Loop on** once it's active.
- **Metronome** — the metronome button in the transport (or the <kbd>K</kbd> key)
  plays an audible tick in time with the clip's own tempo while the clip plays in
  the editor, so you can check it sits in time. It's separate from the
  [timeline metronome](/1.0.3/guide/timeline#the-metronome), and it isn't shown when
  you're previewing a raw file from the Library.
- **Source / Clip** switches the view between the whole source file and just the
  part your clip uses — handy when you want to pull a clip's edges out beyond
  where they currently sit. It only changes what you see; it doesn't change the
  clip.
- **Trim** narrows the view to your current selection as a preview, without
  changing the project.

When you open the editor on an imported file (rather than a clip), the footer
offers **Save Selection to Library**, which turns the range you've selected into a
new saved clip you can reuse — the same [saved clips](/1.0.3/guide/library#saved-clips-and-samples)
that appear in the Library.

## Matching tempo (Warp)

A clip can match the project tempo so it plays in time with everything else,
without changing the source file. Right-click a clip and choose **Warp**, or open
the Clip Editor, and tick **Enable Warp** to set this up. The panel shows the
resulting **Playback BPM** so you can see the tempo the clip will play at.

How the clip follows the tempo depends on whether Silverdaw detected a tempo for
the source:

- When a tempo **was detected**, you can **Follow project BPM** — the clip tracks
  the project tempo, so it stays in time even if you change the project's BPM
  later — or **Pin to** a set **BPM** to lock the clip to a specific tempo.
- When **no tempo was detected** (a vocal take, a one-shot, a sound effect), you
  get **Stretch** instead, which sets the playback speed as a **percentage**: 100%
  is the original speed, lower is slower, and higher is faster (from 25% to 400%).
  Silverdaw shows the hint *"No source tempo — use Stretch to fit non-beat
  material like vocals."*

Warp offers three **modes** for how the stretch is done. As a rough guide:

- **Rhythmic** — best for drums and percussive loops.
- **Tonal** — best for melodic parts and vocals.
- **Complex** — best for full songs and busy, layered material.

### Fixing the detected tempo

If Silverdaw's detected tempo is wrong, use the **Beat grid** panel in the Clip
Editor to correct it:

- **Tempo** — type the correct **BPM** and press <kbd>Enter</kbd>. If the tempo
  was detected at half or double the real value, use **÷2** or **×2** to fix it in
  one click, and **Restore** puts back the originally detected tempo.
- **Position** — click **Slide grid to align** and drag left or right across the
  waveform to line the grid up with the beats. Fine-tune with the **Nudge**
  buttons (5 ms earlier or later), or use **½ beat** if the grid has locked onto
  the off-beat.

If the detected tempo is not simply offset but **unreliable or drifting** — common
with live recordings, free-time intros, or tracks that change speed — it often
helps to re-detect from a cleaner section:

1. [Split](/1.0.3/guide/timeline#moving-and-editing-clips) or trim the clip down to a
   short stretch with a clear, steady beat.
2. Right-click it and choose **Save as Sample (Music)** to bake that section into
   a new [music sample](/1.0.3/guide/library#music-and-simple-samples) in the Library.
3. Right-click the new sample in the [Library](/1.0.3/guide/library) and choose
   **Reanalyse File**. With less — and cleaner — audio to work from, Silverdaw can
   often lock onto the tempo far more accurately.

You can then work from that corrected sample in place of the original.

## Shifting pitch

Clips can be **pitch-shifted** independently of their tempo — raise or lower a clip
without speeding it up or slowing it down. Right-click a clip and choose **Pitch**,
or open the Clip Editor, to change it. Drag the **Semitones** and **Cents** sliders
for fine tuning, or double-click a slider's number to type an exact value (press
<kbd>Enter</kbd> to confirm or <kbd>Esc</kbd> to cancel). Both sliders snap back to
zero as you drag past the centre, and double-clicking a slider resets it to zero.
You can also use the **Key presets** — computed from the clip's detected key — to
jump straight to a musical key. This is ideal for getting two tracks into the same
key for a mashup.

## Slicing a clip into loops

Slicing chops a clip into smaller pieces you can rearrange and rebuild with. There
are two ways in:

- **Quick: Chop to Grid.** Right-click a clip and choose **Chop to Grid**, then
  pick a size — **1 bar**, **1/2 bar**, **1/4**, **1/8**, or **1/16**. Silverdaw
  cuts the clip into equal, beat-aligned slices.
- **Hands-on: Slice mode.** Open the Clip Editor's **Slice** mode for finer
  control, slicing on a bar or beat grid (from a whole bar down to 1/32) or by
  placing markers by hand.

Once you've made your slices you can:

- **Slice to timeline** — lay the slices back onto the timeline as separate clips
  to rearrange.
- **Slice to samples** — save each slice as its own sample in the
  [Library](/1.0.3/guide/library) to reuse and rebuild.

Slicing is non-destructive — the source file is untouched.

## Shaping a clip's volume

In the Clip Editor you can draw a **volume envelope** right on the clip's waveform
to swell, duck, fade in, or fade out. Turn on the **Volume** tool, then click to
add points and drag them to shape the line. With a range selected, the **Silence**
and **Full** buttons (<kbd>S</kbd> / <kbd>F</kbd>) instantly drop that part to
silence or push it to full volume with hard edges. The shaping applies to both
playback and export.

## Reversing a clip

Play any clip back-to-front. Toggle **Reverse** from the clip's right-click menu or
in the Clip Editor, with a live preview. It's non-destructive, so the source file
is never altered.

## Turntable effects: Brake and Backspin

Add a classic DJ move to the end of a clip, from the right-click menu or the Clip
Editor toolbar (both with live preview):

- **Brake** — a vinyl record-stop that slows the clip to a halt.
- **Backspin** — a reverse rewind, like pulling the record back.

A clip can have one of these at a time. **Reverse**, **Brake**, and **Backspin** are
mutually exclusive — turn one on and the others stay visible but disabled until you
switch it off. They apply to every linked copy of the clip, work on tempo-matched
clips, and carry through to your exported mix. You can tune how long they take and
how they feel in **Preferences ▸ Effects**.
