# Installation

Silverdaw is a desktop application for **Windows**. It is free and open source,
released under the GNU Affero General Public License v3.0.

## Before you start

- **Operating system:** Windows 10 (version 1809 or later) or Windows 11, 64-bit.
- **Disk space:** room for the application, plus your projects and audio files.
- **Graphics card (optional):** a compatible GPU can speed up
  [stem separation](/1.2.0/guide/stems), but it is not required — Silverdaw can do the
  same work on the processor, just more slowly.
- **Internet connection (first stem separation only):** the first time you
  separate stems, Silverdaw downloads the separation model it needs (about 1 GB).
  This is a one-time download, after which stem separation works offline.
- **MIDI DJ controller (optional):** connect a supported controller after
  installation, then set it up in [MIDI Controllers](/1.2.0/guide/midi-controllers).

## Getting Silverdaw

There are two ways to install Silverdaw. The **Microsoft Store** is the easiest
and recommended option. The **portable download** lets you try Silverdaw without
installing anything.

| Option | Best for | Effort | Updates | Windows integration\* |
| ------ | -------- | ------ | ------- | --------------------- |
| **Microsoft Store** | Everyone | One click | Automatic | Full |
| **Portable download** | Trying it quickly, no install | Unzip and run | Manual | None |

\* *Windows integration* means a Start-menu entry, the `.silverdaw` file
association (so double-clicking a project opens it), and an entry in
**Settings ▸ Apps** for a clean uninstall.

### From the Microsoft Store (recommended)

The easiest way to install Silverdaw is from the **Microsoft Store**. It installs
in one click, with no security prompts, and the
Store keeps the application up to date for you automatically.

- [Get Silverdaw from the Microsoft Store](https://apps.microsoft.com/detail/9N8T25L0462F)

Open the link, click **Get**, and Silverdaw installs itself and adds a Start-menu
entry.

### Portable download

A portable version is published on the application's releases page on GitHub:

- [github.com/irarainey/silverdaw/releases](https://github.com/irarainey/silverdaw/releases)

Download the portable zip (`Silverdaw-<version>.zip`) from the latest release,
extract it to any folder you can write to, and run `Silverdaw.exe`. Nothing is
installed, so you can remove it later by simply deleting the folder.

::: warning
The first time you run it, Windows will likely show a SmartScreen prompt
(*"Windows protected your PC"*) because the file was downloaded from the
internet. Choose **More info**, then **Run anyway**. To avoid this, right-click
the zip before extracting it, choose **Properties**, tick **Unblock**, and click
**OK**.
:::

The portable version has no Start-menu entry or file association, and it does not
update itself — download a newer zip when a new release is available.

Silverdaw is developed in the open, and its full source code lives on GitHub:

- [github.com/irarainey/silverdaw](https://github.com/irarainey/silverdaw)

## First launch

When Silverdaw opens, you are greeted by the startup screen, which invites you to
*"Start a new project or open an existing one."* From here you can:

- **New Project** — begin a fresh, empty project.
- **Open Project…** — open a project you saved earlier.
- **Recent Projects** — jump back into projects you opened recently.

Once you are in, the next step is to make some sound. Head to the
[Quick Start](/1.2.0/guide/quick-start) to build your first remix, or take the
[tour of the Silverdaw window](/1.2.0/guide/the-window) first.

> If you do not hear anything when you press play, check that the right audio
> output is selected. See [Choosing your audio output](/1.2.0/guide/the-window#choosing-your-audio-output).
