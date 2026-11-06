# The Silverdaw Window

Most of your time in Silverdaw is spent in three places: the timeline, where
you arrange audio; the track headers, where you balance it; and the bottom panel,
where you find your material and effects. Here's how to find what you need.

![Overview of the Silverdaw window with its main areas labelled](/1.10/images/window-overview.png)

## The menu bar

Along the top you'll find the main menus:

- **File** — create, open, and save projects; set project properties; import
  audio to the Library or assets from another project; record audio; add a track;
  and export your finished mix.
- **Edit** — undo and redo; cut, copy, and paste; split, duplicate, and delete
  clips; trim the project to the last clip; clear all markers; and open
  **Preferences…**.
- **View** — zoom the timeline in and out, jump to zoom presets, show or hide the
  Library / FX panel, and toggle full screen.
- **Help** — open the **Documentation** and the **Keyboard Shortcuts** reference,
  **Submit Feedback**, and see version information in **About Silverdaw**.

The **Submit Feedback** item opens Silverdaw's feedback site (powered by
**Featurebase**) in your browser, where you can suggest features, vote on ideas,
and report problems.

## The transport

The transport controls handle playback. You can start and stop with the play
button or the **space bar**, and skip through your project with the previous and
next buttons. By default those buttons step through your
[markers](/1.10/guide/timeline#markers); you can set them to jump to the start
and end of the project in [Preferences… ▸ Timeline](/1.10/guide/preferences#timeline).
Turn on **Follow playback** when you want the view to travel with the music.
Turn it off when you want to keep a section in sight while you listen.

A **record** button opens the [Record Audio](/1.10/guide/recording) dialog, where
you can capture a vocal, an instrument, or a line input over your arrangement.

When you have a [timeline range](/1.10/guide/timeline#playing-a-timeline-range),
the play button becomes **Play Selection**. The **Loop Selection** button beside
the transport repeats that range until you turn it off or clear the range.

The timing display shows your position in the project and the project's **BPM**,
which you can change at any time — your arrangement is retimed to stay in time.
See [Changing the project tempo](/1.10/guide/timeline#changing-the-project-tempo).
It also includes a **Metronome** click you can switch on to hear a tick in time
with the project tempo. See
[the metronome](/1.10/guide/timeline#the-metronome) for more.

## The timeline

The timeline is the large central area where you arrange your music. Audio
appears here as **clips** laid out on horizontal **tracks**, measured against a
bar-and-beat grid running left to right. Its ruler also shows minutes and seconds
at every zoom level. This is where you move, split, trim, and rearrange your
material — see [Arranging the Timeline](/1.10/guide/timeline).

## The status bar

A thin strip along the very bottom of the window holds two timeline controls:

- A **zoom** control (magnifying-glass icon) with **−** and **+** buttons either
  side of the current zoom percentage. Double-click the percentage to type an
  exact zoom level.
- A **grid** control (grid icon) that sets how coarse the timeline grid is:
  **Bar**, **Beat**, **Half beat**, **Quarter beat**, or **Free**. This is the
  interval that clips, markers, the playhead, and ranges snap to, and it is saved
  with your project. See
  [Choosing the grid](/1.10/guide/timeline#choosing-the-grid).

## Track headers

Each track has a header on the left with its controls:

- A **volume** fader.
- A **Pan** control (just under the fader) to place the track left or right.
- **Mute** and **Solo** buttons — mute silences a track; solo plays only the
  soloed track(s).
- An **Import** button to bring an audio file straight onto that track (available
  while the track is empty) — a quick alternative to dragging from the
  [Library](/1.10/guide/library).
- A **Remove track** button to delete the track.
- A **track effects** toggle that shows or hides the [Track FX](/1.10/guide/mixing) for
  that track.
- An **automation** toggle that shows or hides the track's
  [automation lanes](/1.10/guide/mixing#automation-changing-settings-over-time), where
  you draw curves that change settings over time.

Single-click a track's **name** to rename it in place.

Drag the edge of a track header to resize it, and drag headers to reorder tracks.
If a track feels cramped, make it taller or widen its header so the controls
are easier to reach.
The overall level of your mix is shown by the master output meter.

![Close-up of a single track header showing its controls](/1.10/images/window-track-header.png)

## The bottom panel

The panel across the bottom has five tabs:

- **Files** — browse folders of audio on your drives, listen to a track, and
  import it. See [Browsing Files](/1.10/guide/files).
- **Library** — the audio imported into this project, ready to drag onto the
  timeline. See [Importing & the Library](/1.10/guide/library).
- **Track FX** — the effects for the selected track. See
  [Mixing & Effects](/1.10/guide/mixing).
- **Plugins** — the **VST3** effect plugins on the selected track. See
  [Plugins](/1.10/guide/plugins).
- **Project FX** — the shared **Reverb**, **Delay**, and **Glue Compressor**,
  plus the **Safety Limiter** for the final output.

The project remembers the tab you last used, so you can pick up where you left
off.

Need more room to arrange? Collapse the panel from its header, with
<kbd>Ctrl</kbd>+<kbd>J</kbd>, or **View ▸ Toggle Library / FX Panel**. Use the same
control to bring it back.

![The bottom panel showing its tabs](/1.10/images/window-bottom-panel.png)

## Choosing your audio output

Silverdaw plays through your chosen audio output device, and you can switch
devices at any time without leaving the timeline. If you press play and hear
nothing, this is the first thing to check.

You can set the output in **Edit ▸ Preferences… ▸ Audio**, and a project can also
remember its own device in [Project Properties](/1.10/guide/projects#project-properties).
Choosing **Use Application Settings** for a project clears its override, so the
device from Preferences is used instead.

If a device tends to go to sleep and clip the start of playback (common with some
USB audio devices), turn on its **Keep awake** checkbox in **Preferences… ▸
Audio**.

Use the output button in the transport to switch devices for the current project.
Choose **Rescan output devices** after connecting new hardware. If a project's
saved device is unavailable, **Saved Audio Output Device Not Available** explains
that playback continues through the default device while the saved preference
remains unchanged.

Your recording input is separate, and is chosen in the
[Record Audio](/1.10/guide/recording) dialog rather than here.

## The Clip Editor

Double-click a clip (or right-click it and choose **Open ▸ Clip Editor**) to open
the **Clip Editor**, a focused window for detailed work on a single clip: matching
tempo, shifting pitch, slicing into loops, shaping volume, and more. See
[Editing Clips](/1.10/guide/clip-editor).
