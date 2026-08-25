# Plugins

Silverdaw's built-in [Track FX](/1.7/guide/mixing#track-fx) cover the essentials,
but you can go further by adding **VST3 plugins** — third-party effects installed
separately on your computer. A plugin sits on a single track, and you can stack
several of them into a chain.

Plugins live in the **Plugins** tab of the bottom panel, between **Track FX** and
**Project FX**.

::: tip
**VST3** is a common format for audio effects on Windows. If you have ever
installed an equaliser, a reverb, or a mastering effect, it is very likely a
VST3. Silverdaw uses **effect** plugins only — instruments are not offered.
:::

## Finding your installed plugins

Silverdaw looks in the standard **VST3** folders that plugin installers use by
default, so a plugin installed the normal way is found without any setup. There
is nothing to configure.

The first thing to do is a scan. Open the **Plugins** tab and select **Scan
Plugins**. While it runs, the status beside the button counts through your
plugins — **Scanning plugins…**, then **Scanning 12 of 40…**. The chooser fills
in once the scan finishes.

The scan runs outside Silverdaw itself, so a faulty plugin cannot bring the app
down. If a plugin does fail, it is remembered so it is not tried again on its
own. Selecting **Scan Plugins** clears those remembered failures and gives every
plugin another try, which is what you want after installing an update.

If nothing is found, the chooser reads **No plugins found** and is greyed out.

## Adding a plugin to a track

1. Select the track you want the plugin on, by clicking its header. Until you do,
   the panel reads *"Select a track to add plugins to it."*
2. Open the **Plugins** tab.
3. Pick a plugin from the chooser, which lists each one by name and maker.
4. Select **Add Plugin**.

Before you add anything, the panel reads *"No plugins on this track yet. Choose
one above and select Add Plugin."*

A plugin already on the track stays in the list but is greyed out, so you can see
it is in use rather than wondering where it went.

## The plugin chain

Each plugin you add becomes a numbered row, and the numbers are the order the
audio passes through them. Order matters: a reverb after a distortion sounds very
different from a distortion after a reverb.

Every row has:

- **↑** and **↓** — move the plugin earlier or later in the chain.
- **Bypass** — switch the plugin off without removing it, so you can compare the
  sound with and without. The button highlights while the plugin is bypassed.
  Its settings are kept.
- **Open** — open the plugin's own controls in a separate window (see below).
- **Remove** — take the plugin off the track.

### Where plugins sit in the sound

A track's audio reaches its plugins **after** the built-in Track FX and **before**
the track's volume, mute, solo, pan, and its Reverb and Delay sends:

```text
Track FX  →  your plugins, in order  →  volume / mute / solo  →  sends and pan
```

That ordering means a plugin can never change what your fader, **Mute**,
**Solo**, or send amounts do. It also means the plugin chain you hear is the
chain that is [exported](/1.7/guide/export).

::: warning
An export uses each plugin's **saved** settings. If you have adjusted a plugin's
own controls, save the project (<kbd>Ctrl</kbd>+<kbd>S</kbd>) before exporting,
or the mix will be rendered with the settings as they were at the last save.
:::

## Opening a plugin's controls

Select **Open** on a row to work with the plugin's own knobs and displays. They
appear in a separate window, which you can move and place wherever suits you.
Close that window when you are done — the plugin stays on the track, with its
settings.

Some plugins have no interface of their own. Those still open, showing a plain
list of the plugin's controls, so everything stays adjustable.

::: tip
A plugin's own controls can be set and saved, but they cannot be added to
[automation lanes](/1.7/guide/mixing#automation-changing-settings-over-time) —
those cover Silverdaw's own track controls.
:::

## Playing in time

Plugins that follow the beat, such as a tempo-matched delay, use the **project
tempo** and the current playhead position, so their timing lines up with your
arrangement without any setup.

Some plugins — linear-phase equalisers and lookahead limiters, for example — need
a moment to look ahead before they can produce sound. Silverdaw keeps the rest of
the mix in step with them automatically, in playback and in an exported mix
alike, so you do not have to nudge anything to compensate.

## Plugins and your project

A project remembers its plugins: which ones are on which track, in what order,
whether they are bypassed, and the settings you made inside each one. Settings
are captured when you save, so save the project after adjusting a plugin.

If you open a project on a computer where one of its plugins is not installed,
that plugin's row is shown in amber and marked **— not installed on this
computer**, and **Open** is unavailable. The track plays through it untouched.
Nothing is lost: the plugin stays in its place with its settings, and Silverdaw
tells you when this happens, naming the plugins involved.

To get it working again: install the plugin, select **Scan Plugins**, then close
and reopen the project. The slot picks the plugin back up, with the settings that
were saved with it.

## When a plugin is quiet

A few effects need something Silverdaw does not send them:

- Effects that respond to **MIDI notes**, such as a vocoder or a note-triggered
  gate.
- Effects that need a **side-chain input** — a second, separate signal to listen
  to, such as a ducking compressor that follows a kick drum on another track.

These load and run, but with nothing to work from they may produce little or no
sound. Silverdaw says so when you add one, rather than leaving you with a silent
track and no explanation. Effects that work on the track's own audio — equalisers,
compressors, reverbs, delays, saturation, and so on — are unaffected.

You may also see:

- **That plugin is no longer installed. Rescan and try again.** — the plugin was
  uninstalled or moved since the last scan. Select **Scan Plugins**.
- **… is an instrument, and Silverdaw currently hosts effect plugins only.**
- **… could not be loaded:** followed by the reason the plugin gave. The row is
  still added to the track, so select **Remove** on it before trying again. If
  you select **Open** on such a row, Silverdaw says *"That plugin is not loaded,
  so its controls cannot be opened."*
