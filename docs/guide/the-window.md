# The Silverdaw Window

This page is a quick tour of the main parts of the Silverdaw window, so you know
where everything lives before you start building a mix.

![Overview of the Silverdaw window with its main areas labelled](/images/window-overview.png)

*Screenshot placeholder — replace with: a full screenshot of the Silverdaw window
with a project open, annotated with callouts pointing to the menu bar (top), the
transport and timing display, the timeline with a few clips, a track header on the
left, and the bottom panel with its Library / Track FX / Project FX tabs.*

## The menu bar

Along the top you'll find the main menus:

- **File** — create, open, and save projects; set project properties; add a
  track; and export your finished mix.
- **Edit** — undo and redo; cut, copy, and paste; split, duplicate, and delete
  clips; and open **Preferences…**.
- **View** — zoom the timeline in and out, jump to zoom presets, and toggle full
  screen.
- **Help** — open the documentation, report an issue, and see version
  information in **About Silverdaw**.

## The transport

The transport controls handle playback. You can start and stop with the play
button or the **space bar**, and skip through your project with the previous and
next buttons. By default those buttons jump to the start and end of the project;
you can set them to step through your [markers](/guide/timeline#markers) instead
in [Preferences ▸ Timeline](/guide/preferences#timeline). A **Follow playback**
toggle decides whether the timeline scrolls to keep up with the playhead or stays
still while you play.

The timing display shows your position in the project and includes a
**Metronome** click you can switch on to hear a tick in time with the project
tempo. See [the metronome](/guide/timeline#the-metronome) for more.

## The timeline

The timeline is the large central area where you arrange your music. Audio
appears here as **clips** laid out on horizontal **tracks**, measured against a
bar-and-beat grid running left to right. This is where you move, split, trim, and
rearrange your material — see [Arranging the Timeline](/guide/timeline).

## Track headers

Each track has a header on the left with its controls:

- A **volume** fader.
- A **Pan** control (just under the fader) to place the track left or right.
- **Mute** and **Solo** buttons — mute silences a track; solo plays only the
  soloed track(s).
- An **Import** button to bring an audio file straight onto that track (available
  while the track is empty) — a quick alternative to dragging from the
  [Library](/guide/library).
- A **Remove track** button to delete the track.
- A **track effects** toggle that shows or hides the [Track FX](/guide/mixing) for
  that track.
- An **automation** toggle that shows or hides the track's
  [automation lane](/guide/mixing#automation-changing-settings-over-time), where
  you draw curves that change settings over time.

Drag the edge of a track header to resize it, and drag headers to reorder tracks.
The overall level of your mix is shown by the master output meter.

![Close-up of a single track header showing its controls](/images/window-track-header.png)

*Screenshot placeholder — replace with: a close-up of one track header, with
callouts on the volume fader, the Pan control beneath it, the Mute and Solo
buttons, the Import button, the Remove track button, the track effects toggle, and
the automation-lane toggle.*

## The bottom panel

The panel across the bottom has three tabs:

- **Library** — the audio imported into this project, ready to drag onto the
  timeline. See [Importing & the Library](/guide/library).
- **Track FX** — the effects for the selected track. See
  [Mixing & Effects](/guide/mixing).
- **Project FX** — the shared **Reverb** and **Delay** used across the whole
  project.

You can collapse the panel when you need more room for the timeline, and expand
it again when you need it.

![The bottom panel showing the Library, Track FX, and Project FX tabs](/images/window-bottom-panel.png)

*Screenshot placeholder — replace with: the bottom panel with its three tabs —
Library, Track FX, and Project FX — visible, with the Library tab open showing a
few imported items.*

## Choosing your audio output

Silverdaw plays through your chosen audio output device, and you can switch
devices at any time without leaving the timeline. If you press play and hear
nothing, this is the first thing to check.

You can set the output in **Edit ▸ Preferences ▸ Audio**, and a project can also
remember its own device in [Project Properties](/guide/projects#project-properties).
Choosing **Use Application Settings** for a project clears its override, so the
device from Preferences is used instead.

If a device tends to go to sleep and clip the start of playback (common with some
USB audio devices), turn on its **Keep awake** checkbox in **Preferences ▸
Audio**.

## The Clip Editor

Double-click a clip (or right-click it and choose **Open in Editor**) to open the
**Clip Editor**, a focused window for detailed work on a single clip: matching
tempo, shifting pitch, slicing into loops, shaping volume, and more. See
[Editing Clips](/guide/clip-editor).
