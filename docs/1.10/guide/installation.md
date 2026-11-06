# Installation

Choose the **Microsoft Store** for the simplest setup, or the portable download
if you'd prefer to unzip and run. Either gives you the same **Silverdaw**
application for Windows, free and open source under the GNU Affero General
Public License v3.0.

## Before you start

- **Operating system:** Windows 10 (version 1809 or later) or Windows 11, 64-bit.
- **Disk space:** room for the application, plus your projects and audio files.
- **Graphics card (optional):** a compatible GPU can speed up
  [stem separation](/1.10/guide/stems), but it is not required — Silverdaw can do the
  same work on the processor, just more slowly.
- **Internet connection (for stem models):** the first stem separation downloads
  the primary models (about 1 GB). A later separation that needs the backup model
  can download that model too. Once the required models are installed, stem
  separation works offline.
- **MIDI DJ controller (optional):** connect a supported controller after
  installation, then set it up in [MIDI Controllers](/1.10/guide/midi-controllers).

## Getting Silverdaw

Not sure which to choose? Use the **Microsoft Store**. It handles installation
and updates for you. The **portable download** is useful when you don't want
to install anything.

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

A portable version of Silverdaw 1.10.0 is available on GitHub:

- [Download Silverdaw 1.10.0](https://github.com/irarainey/silverdaw/releases/tag/1.10.0)

Download `Silverdaw-1.10.0.zip`, extract it to any folder you can write to,
and run `Silverdaw.exe`. Nothing is
installed, so you can remove it later by simply deleting the folder.

::: warning
The first time you run it, Windows will likely show a SmartScreen prompt
(*"Windows protected your PC"*) because the file was downloaded from the
internet. Choose **More info**, then **Run anyway**. To avoid this, right-click
the zip before extracting it, choose **Properties**, tick **Unblock**, and click
**OK**.
:::

The portable version has no Start-menu entry or file association, and it does not
update itself.

## First launch

When Silverdaw opens, you are greeted by the startup screen, which invites you to
*"Start a new project or open an existing one."* From here you can:

- **New Project** — begin a fresh, empty project.
- **Open Project…** — open a project you saved earlier.
- **Recent Projects** — appears after you have opened projects, letting you jump
  back into them.

Once the timeline opens, you're ready to make some sound. Follow the
[Quick Start](/1.10/guide/quick-start) with one audio file, or take the
[window tour](/1.10/guide/the-window) if you'd rather get your bearings first.

> If you do not hear anything when you press play, check that the right audio
> output is selected. See [Choosing your audio output](/1.10/guide/the-window#choosing-your-audio-output).

## Letting Silverdaw use your microphone

You only need this if you intend to [record audio](/1.10/guide/recording).

Installing Silverdaw does not ask about your microphone — Windows never requests
device permissions during an install. Permission is decided the first time you
actually record, and Silverdaw appears in the microphone list from then on.

If a take comes back silent, or the input meter never moves, open
**Settings ▸ Privacy & security ▸ Microphone** and check all three of:

1. *Microphone access* is on.
2. *Let apps access your microphone* is on.
3. **Silverdaw** itself is on in the list of apps below.

Then reopen the Record Audio dialog.

::: warning
Windows can block microphone access without showing a prompt. If the device
appears to work but the meter stays still, check these permissions before
changing your recording settings.
:::
