# Editing Clips

For detailed work on a single clip, Silverdaw has the **Clip Editor**. Double-click
a clip, or right-click it and choose **Open in Editor**, to open it. Everything
here is non-destructive — your original file is never changed, and you can preview
changes as you make them.

Many of these actions are also available directly from a clip's right-click menu on
the timeline.

The editor works on a **draft**: your changes are previewed as you make them but
aren't applied until you click **Save**. **Cancel** (or <kbd>Esc</kbd>) discards
them. When you edit a clip that's saved to the Library — or any of its copies on
the timeline — saving updates every linked copy together, so they stay in step.

![The Clip Editor window](/images/clip-editor.png)

## Getting around the editor

- **Play** with the transport buttons or the <kbd>Space</kbd> bar, and click the
  waveform to move the playhead.
- **Zoom** with the mouse wheel or <kbd>+</kbd> / <kbd>-</kbd> / <kbd>0</kbd>, so
  you can work right down to the sample.
- **Select a range** by dragging across the waveform, then drag the handles at
  its edges to fine-tune it. Turn on **Loop** (<kbd>L</kbd>) to play the selection
  round and round.
- **Source / Clip** switches the view between the whole source file and just the
  part your clip uses — handy when you want to pull a clip's edges out beyond
  where they currently sit. It only changes what you see; it doesn't change the
  clip.
- **Trim** narrows the view to your current selection as a preview, without
  changing the project.

When you open the editor on an imported file (rather than a clip), the footer
offers **Save Selection to Library**, which turns the range you've selected into a
new saved clip you can reuse — the same [saved clips](/guide/library#saved-clips-and-samples)
that appear in the Library.

## Matching tempo (Warp)

A clip can automatically match the project tempo so it plays in time with
everything else, without changing the source file. Turn on **Warp** (right-click a
clip and choose **Warp**, or use the Clip Editor) to set this up. You can either
**Follow project BPM** so the clip tracks the project tempo, or **Pin to** a
specific BPM. If Silverdaw's detected tempo is off, you can enter the **BPM by
hand** and slide the beat grid across the waveform until it lines up with the
audio.

Warp offers three **modes** for how the stretch is done. As a rough guide:

- **Rhythmic** — best for drums and percussive loops.
- **Tonal** — best for melodic parts and vocals.
- **Complex** — best for full songs and busy, layered material.

## Shifting pitch

Clips can be **pitch-shifted** independently of their tempo — raise or lower a clip
without speeding it up or slowing it down. Right-click a clip and choose **Pitch**,
or open the Clip Editor, to change it. Adjust it in **Semitones** and **Cents** for
fine tuning, or use the **Key presets** — computed from the clip's detected key —
to jump straight to a musical key. This is ideal for getting two tracks into the
same key for a mashup.

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
  [Library](/guide/library) to reuse and rebuild.

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
