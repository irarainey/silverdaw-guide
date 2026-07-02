# Projects

A **project** is your Silverdaw work: the tracks, clips, effects, and settings
that make up a mix. This page covers creating, saving, and managing projects.

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

## Project properties

Open **File ▸ Project Properties…** to view and set details for the current
project:

![The Project Properties dialog](/images/project-properties.png)

*Screenshot placeholder — replace with: the Project Properties dialog, showing the
Project name, Tempo (BPM), Project duration, Sample rate, Bar counter start, and
Audio device / Audio driver fields.*

- **Project name** — the name of the project.
- **Tempo (BPM)** — the project's tempo, which the grid, metronome, and
  tempo-matching all follow.
- **Project duration** — the overall length, entered as `mm:ss` or `h:mm:ss`.
- **Sample rate** — the audio rate for the project (44.1 or 48 kHz). Imports are
  checked against this and offer a clear path if they differ.
- **Bar counter start** — the number the first bar is labelled with. This starts
  at 1 by default, and can be set to 0 or lower to leave lead-in bars before bar
  one (handy for clips with a silent intro).
- **Audio device** and **Audio driver** — an optional output device just for this
  project, applied every time it loads. Choosing **Use Application Settings**
  clears the override so the global **Preferences ▸ Audio** device is used instead.

## Portable projects

When you save a project, Silverdaw nests it in its own folder and keeps its
generated stems and samples beside the project file. That means you can move or
sync the whole folder between machines — for example through cloud storage — and
still open it, as long as the original imported source files are still available
at the same location.

If you have moved or renamed those source files, you can point Silverdaw back at
them using **Relink** (see below).

## Relinking moved files

If a project can no longer find an imported source file — because it was moved or
renamed — Silverdaw lets you **relink** it, reconnecting the project to the file
in one step so playback and editing continue as before.

## Autosave and crash recovery

Silverdaw quietly snapshots your work in the background as you go. If the
application closes unexpectedly, it offers your recovered work back to you the
next time you open it, so you don't lose your progress.

## Undo and redo

Every edit can be reversed. Use **Edit ▸ Undo** (<kbd>Ctrl</kbd>+<kbd>Z</kbd>) and
**Edit ▸ Redo** (<kbd>Ctrl</kbd>+<kbd>Y</kbd>) to step back and forward through
your changes.
