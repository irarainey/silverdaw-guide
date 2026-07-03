# Installation

Silverdaw is a desktop application for **Windows**. It is free and open source,
released under the GNU Affero General Public License v3.0.

## Before you start

- **Operating system:** Windows 10 (version 1809 or later) or Windows 11, 64-bit.
- **Disk space:** room for the application, plus your projects and audio files.
- **Graphics card (optional):** a compatible GPU can speed up
  [stem separation](/guide/stems), but it is not required — Silverdaw can do the
  same work on the processor, just more slowly.
- **Internet connection (first stem separation only):** the first time you
  separate stems, Silverdaw downloads the separation model it needs (about 1 GB).
  This is a one-time download, after which stem separation works offline.

## Getting Silverdaw

There are three ways to install Silverdaw. The **Microsoft Store** is the easiest
and recommended option once it is available. The **portable download** lets you
try Silverdaw without installing anything, and the **self-signed installer**
gives you a full installation before the Store release.

| Option | Best for | Effort | Updates | Windows integration\* |
| ------ | -------- | ------ | ------- | --------------------- |
| **Microsoft Store** *(coming soon)* | Everyone | One click | Automatic | Full |
| **Portable download** | Trying it quickly, no install | Unzip and run | Manual | None |
| **Self-signed installer** | A full install before the Store release | Trust a certificate and run a script | Manual | Full |

\* *Windows integration* means a Start-menu entry, the `.silverdaw` file
association (so double-clicking a project opens it), and an entry in
**Settings ▸ Apps** for a clean uninstall.

### From the Microsoft Store (recommended)

The easiest way to install Silverdaw is from the **Microsoft Store**. It installs
in one click, with no security prompts and no certificates to manage, and the
Store keeps the application up to date for you automatically.

> The Microsoft Store link will be added here soon.

### Portable download

A portable version is published on the application's releases page on GitHub:

- [github.com/irarainey/silverdaw/releases](https://github.com/irarainey/silverdaw/releases)

Download the portable zip (`Silverdaw-<version>.zip`) from the latest release,
extract it to any folder you can write to, and run `Silverdaw.exe`. Nothing is
installed, so you can remove it later by simply deleting the folder.

::: warning
The first time you run it, Windows may show a SmartScreen prompt
(*"Windows protected your PC"*) because the file was downloaded from the
internet. Choose **More info**, then **Run anyway**. To avoid this, right-click
the zip before extracting it, choose **Properties**, tick **Unblock**, and click
**OK**.
:::

The portable version has no Start-menu entry or file association, and it does not
update itself — download a newer zip when a new release is available.

### Self-signed installer (advanced)

If you want a full installation before the Microsoft Store release, you can use
the signed installer package. Because it is signed with a self-signed
certificate, Windows needs to trust that certificate before it will install the
app. A helper script does both steps for you: it trusts the certificate and then
installs Silverdaw.

Download three files from the
[latest release](https://github.com/irarainey/silverdaw/releases) into the **same
folder**:

- the signed app package (`.appx`),
- the public certificate (`Silverdaw-PublicCert.cer`), and
- the install script (`Install-Silverdaw.ps1`).

Then right-click `Install-Silverdaw.ps1`, choose **Run with PowerShell**, and
approve the Windows security prompt (**User Account Control**) that asks to allow
changes to your device.

This gives you a full installation — a Start-menu entry, the `.silverdaw` file
association, and a clean uninstall via **Settings ▸ Apps** — but it requires
administrator rights to trust the certificate, and it does not update
automatically. If you would rather not trust a certificate, use the Microsoft
Store or portable option instead.

Silverdaw is developed in the open, and its full source code lives on GitHub:

- [github.com/irarainey/silverdaw](https://github.com/irarainey/silverdaw)

## First launch

When Silverdaw opens, you are greeted by the startup screen, which invites you to
*"Start a new project or open an existing one."* From here you can:

- **New Project** — begin a fresh, empty project.
- **Open Project…** — open a project you saved earlier.
- **Recent Projects** — jump back into projects you opened recently.

Once you are in, the next step is to make some sound. Head to the
[Quick Start](/guide/quick-start) to build your first remix, or take the
[tour of the Silverdaw window](/guide/the-window) first.

> If you do not hear anything when you press play, check that the right audio
> output is selected. See [Choosing your audio output](/guide/the-window#choosing-your-audio-output).
