# Editing Clips

For detailed work on a single clip, Silverdaw has the **Clip Editor**. Double-click
a clip, or right-click it and choose **Open in Editor**, to open it. Everything
here is non-destructive — your original file is never changed, and you can preview
changes as you make them.

Many of these actions are also available directly from a clip's right-click menu on
the timeline.

![The Clip Editor window](/images/clip-editor.png)

*Screenshot placeholder — replace with: the Clip Editor open on a clip, showing the
large waveform, the playback controls, and the panels/tools for Warp, Pitch, and
Slice.*

## Matching tempo (Warp)

A clip can automatically match the project tempo so it plays in time with
everything else, without changing the source file. Use **Warp** (right-click a clip
and choose **Warp**, or use the Clip Editor) to set this up. If Silverdaw's
detected tempo is off, you can enter the **BPM by hand** and slide the beat grid
across the waveform until it lines up with the audio.

## Shifting pitch

Clips can be **pitch-shifted** independently of their tempo — raise or lower a clip
without speeding it up or slowing it down. Right-click a clip and choose **Pitch**,
or open the Clip Editor, to change it. This is ideal for getting two tracks into
the same key for a mashup.

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
to swell, duck, fade in, or fade out. You can also chop a selected range to silence
or full volume with hard edges. The shaping applies to both playback and export.

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
