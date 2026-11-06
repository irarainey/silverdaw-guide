# Projects

A **project** keeps the mix you're working on: its tracks, clips, effects, and
settings. Save it when you want to return and keep editing; export a mixdown
when you want an audio file to listen to or share.

## Creating and opening projects

From the **File** menu (or the startup screen) you can:

- **New Project** (<kbd>Ctrl</kbd>+<kbd>N</kbd>) — start a fresh, empty project.
- **Open Project…** (<kbd>Ctrl</kbd>+<kbd>O</kbd>) — open a project you saved
  before.
- **Recent Projects** — reopen a project you worked on recently, or clear the
  list with **Clear Recent Projects**.

## Saving

- **Save** (<kbd>Ctrl</kbd>+<kbd>S</kbd>) — save your changes.
- **Save As…** (<kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>S</kbd>) — save a copy
  under a new name.

To rename the current project, double-click its name in the title bar or click
the pencil beside it.

Want to try a different arrangement without losing this one? Use **Save As…**
and give the copy a different name.

## Project properties

Open **File ▸ Project Properties…** to view and set details for the current
project:

![The Project Properties dialog](/1.10/images/project-properties.png)

- **Project name** — the name of the project.
- **Tempo (BPM)** — the project's tempo, which the grid, metronome, and
  tempo-matching all follow. Change it whenever you like: your arrangement is
  retimed to stay in time. See
  [Changing the project tempo](/1.10/guide/timeline#changing-the-project-tempo).
- **Project duration** — the overall length, entered as `mm:ss` or `h:mm:ss`.
  New projects start at 5 minutes; adding a first clip that runs longer
  automatically extends the project to fit the whole clip.
- **Sample rate** — the audio rate for the project (44.1 or 48 kHz). If an
  imported file differs, choose whether to convert it to the project's rate or
  switch the project to the file's supported rate.
- **Bar counter start** — the number the first bar is labelled with. This starts
  at 1 by default, and can be set to 0 or lower to leave lead-in bars before bar
  one (handy for clips with a silent intro).
- **Audio output device** and **Audio output driver** — an optional output device
  just for this project, applied every time it loads. Choosing **Use Application
  Settings** clears the override so the global
  **Preferences… ▸ Audio ▸ Output device** is used instead.
  If the project's device isn't connected when it opens, Silverdaw falls back to
  the default available device and shows **Saved Audio Output Device Not
  Available**.
  The saved project setting stays unchanged, so it can be used again when that
  device is available.

## Portable projects

Keep the whole project folder together when moving or backing up your work.
Silverdaw stores generated stems, samples, and recordings beside the project
file, not inside it.

Original imported audio is separate. Moving the project folder does not collect
those source files for you: they must still be available at the same location,
or you'll need to relink them.

If you have moved or renamed those source files, you can point Silverdaw back at
them using **Relink** (see below).

You can also copy generated stems, samples, and recordings from another saved project with
**File ▸ Import from Project…**. See
[Importing from another project](/1.10/guide/library#importing-from-another-project).

## Relinking moved files

If a project can no longer find an imported source file — because it was moved or
renamed — Silverdaw lets you **relink** it, reconnecting the project to the file
in one step so playback and editing continue as before.

## Autosave and crash recovery

With autosave enabled, Silverdaw keeps background snapshots of unsaved work.
If the application closes unexpectedly, it offers recovered work the next time
you open it. Keep saving with <kbd>Ctrl</kbd>+<kbd>S</kbd> as you go; a snapshot
can only recover what it had time to capture.

## Undo and redo

Moved the wrong clip or changed your mind about an effect? Use **Edit ▸ Undo**
(<kbd>Ctrl</kbd>+<kbd>Z</kbd>) to step back, and **Edit ▸ Redo**
(<kbd>Ctrl</kbd>+<kbd>Y</kbd>) to put the change back.

Not every action is undoable. In particular, deleting generated files with
**Clean up project files on remove** cannot be reversed. See
[Preferences](/1.10/guide/preferences#project) before enabling it.
