# Digital Audio Basics

**Silverdaw** is built so you can make music without knowing how audio works
under the hood. But a handful of terms turn up when you import a file, set up a
project, or export a mix — **sample rate**, **bit depth**, **bitrate**, and file
formats like **WAV** and **MP3**.

This page explains those terms in plain language and tells you what to choose in
Silverdaw. You do not need to read it to make a mix. It is here for when you want
to know what a setting actually means.

## What sound is

Sound is vibration travelling through air. Something moves — a string, a
speaker cone — and pushes the air around it in rapid waves. Those waves reach
your ears, and your brain hears them as sound.

Every sound wave has two basic properties:

- **Frequency** — how many times the wave cycles each second, measured in hertz
  (Hz). This is what you hear as **pitch**: high frequencies sound high, low
  frequencies sound low. The A above middle C on a piano vibrates 440 times a
  second (440 Hz); the A an octave above it is double that, 880 Hz.
- **Amplitude** — how big the wave is. This is what you hear as **volume**.

Those two ideas sit behind a lot of Silverdaw. The **Tone** and **Filter**
controls in [Mixing & Effects](/1.4/guide/mixing) work on frequency, turning
ranges of the sound up or down. Every fader, gain number, and meter works on
amplitude.

## How a computer stores sound

A sound wave is smooth and continuous, and a computer cannot store something
with no end of detail. Instead it takes very rapid measurements of the wave and
saves each one as a number. Play those numbers back in order, fast enough, and
you hear the original sound again.

Two settings describe how that is done: how *often* the measurements are taken
(sample rate), and how *precisely* each one is recorded (bit depth).

### Sample rate

The **sample rate** is how many measurements are taken every second, written in
kilohertz (kHz) — thousands of samples per second.

The rule is that to capture a frequency accurately, you need to sample more than
twice as fast as that frequency. Human hearing runs out somewhere around
20,000 Hz, so 44,100 samples per second is enough to cover everything you can
hear. That is where the familiar 44.1 kHz figure comes from — it was chosen for
the CD, and it is still the standard for music.

You will meet two rates in Silverdaw:

- **44.1 kHz** — the standard for music, streaming, and most sample packs.
- **48 kHz** — the standard for video, film, and broadcast, so audio taken from
  video is usually at this rate.

Neither is "better" for a remix. What matters is that everything in a project
agrees.

- Each project has one **Sample rate**, set in **File ▸ Project Properties…**.
  See [Projects](/1.4/guide/projects#project-properties).
- New projects use the **Default project sample rate** from
  [Preferences ▸ Audio](/1.4/guide/preferences#audio).
- If you import a file recorded at a different rate, Silverdaw asks whether to
  **Convert to** the project's rate or **Switch Project to** the file's rate.
  See [Importing & the Library](/1.4/guide/library#sample-rate-check).

::: tip
If most of your material comes from music files, 44.1 kHz is a sensible default.
If you are working with audio pulled from video, 48 kHz saves conversions. Either
way, pick one and let the rest of the project follow it.
:::

### Bit depth

Each of those measurements records how loud the wave was at that instant, as a
number. **Bit depth** is how many different values that number is allowed to
take — in other words, how finely the loudness is measured.

Think of it as the markings on a ruler. A ruler with ten marks can only measure
roughly. A ruler with thousands of marks measures the same distance far more
precisely. More bits means finer markings, which means quieter detail and
smoother fades survive intact.

- **16-bit** gives 65,536 possible levels. This is the CD standard and is fine
  for a finished track.
- **24-bit** gives about 16.7 million levels, with far more room to work while
  editing.
- **32-bit float** is a more flexible way of storing the number that gives an
  enormous amount of room, so levels are very hard to damage during processing.

The distance between the quietest detail a format can hold and the loudest sound
it can hold is called its **dynamic range**, and more bits means more of it.
Editing, mixing, and effects all nudge levels around, and that extra room means
those small changes never run out of space.

In Silverdaw you do not have to think about this while you work. Audio is
processed internally in 32-bit floating point from start to finish, and only
converted to a final bit depth when you
[export a mixdown](/1.4/guide/export). Export defaults to **16-bit**, with
24-bit and 32-bit float available depending on the format.

::: tip
When you export at 16-bit, turn on the **Dither** option. It smooths out the
tiny rounding that happens when the audio is reduced to fewer levels.
:::

The **Bit Crusher** in [Track FX](/1.4/guide/mixing#track-fx) uses the same
ideas deliberately in reverse: its **Bits** control coarsens the loudness
measurements and its **Rate** control coarsens how often they are taken, giving
a crunchy, lo-fi sound.

### Bitrate

**Bitrate** is how much audio data there is each second, so together with the
length of the track it decides the file size. For uncompressed audio it is simply
the other numbers multiplied together:

```text
sample rate × bit depth × channels = bitrate

44,100 × 16 × 2 (stereo) = 1,411,200 bits per second ≈ 1,411 kbps
```

That is why a WAV file is large. Formats like MP3 shrink it by discarding detail
the ear is least likely to notice, which is why you choose a **Bitrate** when
exporting an MP3 from Silverdaw:

- **320 kbps** — the highest quality on offer, and the largest file. Use this
  unless you have a reason not to.
- **192 kbps** — a middle ground between size and quality.
- **128 kbps** — the smallest files and the lowest quality of the three.

## Mono and stereo

**Channels** are the separate streams of audio in a file. A **mono** file has
one, so it sounds the same from both speakers. A **stereo** file has two — left
and right — which is what gives a mix width and lets sounds sit in different
places.

Silverdaw handles both, and a project's mixdown is always exported as a single
stereo file.

- **Pan**, on each track header, places that track in the stereo field.
- **Transform ▸ Split Stereo Channels…** splits a stereo clip's **Left** and
  **Right** sides onto their own clips, which is useful when the two sides carry
  different material. See [Arranging the Timeline](/1.4/guide/timeline).
- Clips can be drawn as a **Single waveform** or as **Left and right** lanes —
  set **Waveform display** in
  [Preferences ▸ General](/1.4/guide/preferences#general). Mono clips always
  show a single waveform.

## Loudness and levels

Audio levels are measured in **decibels (dB)**. It is a relative scale, so what
matters is the difference between two levels rather than the number on its own.
In a DAW, 0 dB on a track means "leave it as it is": positive values make it
louder, negative values quieter. Double-click a track's gain number to type an
exact value.

When audio reaches your speakers, or is saved to a normal 16- or 24-bit file, it
has a hard ceiling. Push the level past it and the tops of the waves are chopped
off, which is called **clipping** and sounds harsh and distorted. Watching the
master output meter and leaving a little space below the top is the simplest way
to avoid it. Silverdaw also has a **Safety Limiter**, whose **Protect final
output** option caps the final output at -1 dBFS. It is on by default — see
[Mixing & Effects](/1.4/guide/mixing).

Two more terms appear in the [Export Mixdown](/1.4/guide/export) dialog, where
loudness normalisation can put your export at a consistent level:

- **LUFS** measures *perceived* loudness over the whole track — how loud it
  actually seems, rather than how high the peaks are. Streaming services use it
  to play everything at a similar volume. **Target LUFS** is the loudness you
  want the export to land at.
- **dBTP** (decibels true peak) measures the highest peak the audio reaches when
  it is played back, including peaks that fall between the stored measurements.
  **Ceiling dBTP** sets the highest peak allowed, keeping a little space below
  the ceiling so nothing clips.

## File formats

Audio formats fall into two groups.

**Lossless** formats keep every bit of the original audio:

- **WAV** — uncompressed and universally supported. A safe choice when you may
  want to work on the audio again later.
- **AIFF** — the same idea as WAV, originally from Apple.
- **FLAC** — compressed, but with nothing thrown away. Smaller files than WAV
  with identical audio.

**Lossy** formats make files much smaller by discarding detail permanently:

- **MP3** — the universal standard, and fine at higher bitrates.
- **M4A** — the file type used for AAC audio, common in downloads and Apple
  Music.

Silverdaw imports **WAV**, **AIFF**, **FLAC**, **MP3**, and **M4A**, and exports
**WAV**, **FLAC**, **AIFF**, and **MP3**.

::: tip
Work from the best-quality source you have, and save lossy formats for the final
export you share. Detail thrown away by compression cannot be recovered, and
compressing audio that was already compressed makes it worse.
:::

## Quick reference

| Setting | Choose | When |
| --- | --- | --- |
| Sample rate | 44.1 kHz | Music, samples, and most remixing |
| Sample rate | 48 kHz | Audio taken from video or broadcast |
| Export bit depth | 16-bit (with Dither) | Sharing and general listening |
| Export bit depth | 24-bit | Keeping maximum quality for later work |
| Export format | WAV, AIFF, or FLAC | Archiving, or taking the mix elsewhere |
| Export format | MP3 at 320 kbps | Sharing and uploading |

## Where next

- [Importing & the Library](/1.4/guide/library) — getting audio into a project.
- [Mixing & Effects](/1.4/guide/mixing) — shaping levels and tone.
- [Exporting a Mixdown](/1.4/guide/export) — turning the project into a file.
