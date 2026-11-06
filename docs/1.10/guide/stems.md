# Stem Separation

Want to put a vocal over another beat, or reuse a drum break without the rest
of the song? **Stem separation** gives you separate **vocals**, **drums**,
**bass**, and **other** audio to work with.

The original file stays untouched. Listen to the separated parts before
building around them; the result depends on the source, and some sounds may
still bleed between parts.

::: tip Downloading models
The first stem separation downloads the primary models (about 1 GB), so you need
an internet connection. A later separation that needs the backup model can
download that model too. Installed models are stored on your computer and reused,
so separation works offline once the models it needs are available. The models are
hosted on [Hugging Face](https://huggingface.co/silverdaw).
:::

## Separating a track

Right-click a clip and choose **Transform ▸ Separate Stems**. If the primary
models aren't installed, Silverdaw asks to download them first.

The **Separate Stems** dialog opens with no stems selected: tick the parts you
want — **Vocals**, **Drums**, **Bass**, and **Other** — choose a **Quality**
setting, then click **Start**.
**Start** stays disabled until you've ticked at least one part.

If your selection needs an additional model, Silverdaw asks to download it
before separating. Once the required models are installed, you won't need to
download them again.

Silverdaw then analyses the audio and produces the separate parts, each on its own
track for you to remix. Every stem keeps the original clip's tempo, key, and
artwork, so it stays in step with the rest of your project.

![The Separate Stems dialog with parts selected](/1.10/images/stems-dialog.png)

### Separating straight from the Library

You don't need a clip on the timeline to separate a track. Right-click an item in
the [Library](/1.10/guide/library) and choose **Separate Stems** to run the same
dialog on the file itself.

The difference is what happens at the end: stems separated from the Library are
**added to the Library only — no tracks are created and nothing is placed on the
timeline**. Drag each stem onto a track yourself when you want to use it. This is
handy for preparing material in advance, or for pulling an acapella out of a song
you haven't decided how to use yet.

**Separate Stems** is offered on imported tracks and on saved samples. It isn't
offered on a stem, since a stem is already a separated part.

## Removing reverb & echo from vocals

When you tick **Vocals**, an extra option appears beneath it: **Remove Reverb &
Echo**. Turn it on to clean room reverb and slap-back echo off the vocals stem as
it's separated, leaving a drier, more upfront vocal. Pick how hard it works with
the **Light**, **Medium**, and **Strong** strength buttons.

This is a fresh choice each time you separate — it isn't saved as a preference —
and, like everything else in Silverdaw, it's non-destructive. The option only
applies to the vocals stem, so it's available only when **Vocals** is ticked.

::: tip
This per-run reverb and echo removal is separate from the per-stem **Cleanup**
strengths in **Edit ▸ Preferences… ▸ Stems**, which tidy the finished stems after
separation.
:::

## The separation models

Silverdaw has two kinds of separation model, and you manage both in
**Edit ▸ Preferences… ▸ Stems**:

- **High-quality RoFormer models** — these give the best results. They total
  about 1 GB, are downloaded once with the **Download models (~1 GB)** button, and
  are then used automatically. The **Separation models** section shows their
  status (**Not downloaded**, **Partly installed**, or **Installed**).
- **A backup model** — a lower-quality fallback. Silverdaw fetches it
  automatically when a separation needs it — for example, when you select
  **Other** without selecting all four parts.

### Using models you already have

If you've already downloaded the models — for example on another machine, or
because someone shared them with you — you can point Silverdaw at them instead of
downloading again:

1. Open **Edit ▸ Preferences… ▸ Stems**.
2. Under **Separation models**, find *"Already have a model? Point Silverdaw at
   the folder that contains it instead of downloading it again."*
3. Click **Locate…** next to **Vocal model** and choose the folder that contains
   the vocal model.
4. Click **Locate…** next to **Drums and bass model** and choose that model's
   folder.

Each model's status changes to **Installed** once Silverdaw has checked the
folder. If a folder doesn't contain the expected model, Silverdaw tells you so you
can try another.

The **backup model** has its own **Locate…** button in the **Backup model**
section, which works the same way.

## Speed, quality, and cleanup

Start with a faster separation to hear whether the part suits your mix.
You can spend more time on quality once you know you'll use it:

- When you run **Separate Stems**, the dialog offers a **Quality** setting —
  **Fast**, **Balanced**, or **Best** — so you can pick how much time Silverdaw
  spends for cleaner results. Silverdaw remembers your choice for the next
  separation.
- **GPU acceleration** is optional. If you have a compatible graphics card,
  separation can run faster; if not, it still works on the processor. You can turn
  it on in **Edit ▸ Preferences… ▸ Stems**.
- An optional **cleanup** can tidy up the separated parts, with **Light**,
  **Medium**, or **Strong** strength. This is set in **Edit ▸ Preferences… ▸
  Stems**.

## Getting good performance

Stem separation is one of the most demanding things Silverdaw does: it runs a
machine-learning model across your audio, which takes real processing power and
time. On a modest laptop — or on any machine without a compatible graphics card —
a single separation can take several minutes. A few habits keep it comfortable:

- **Start with a faster setting.** Choose **Fast** (or **Balanced**) for
  **Quality** the first time, listen to the result, and only step up to **Best**
  if the separation isn't clean enough. Each step up takes noticeably longer, so
  there's no need to pay for quality you don't need.
- **Separate short sections, not whole songs.** You rarely need every stem of an
  entire track. Trim or [split](/1.10/guide/timeline#moving-and-editing-clips) the clip
  down to just the part you want — a single chorus, a drum break, an eight-bar
  loop — and separate that. Less audio means far less waiting, and you can always
  separate another section later.
- **Use GPU acceleration if you can.** If your computer has a compatible graphics
  card, turning on GPU acceleration in **Edit ▸ Preferences… ▸ Stems** can speed
  separation up considerably. Without one it still works, just more slowly on the
  processor.
- **Allow time for processing.** Higher quality and longer clips take more work.
  Check the progress dialog while separation runs, and watch for any error
  message rather than judging by elapsed time alone.

## After separating

Listen to each stem on its own, then in the mix. They behave like your other
clips: you can mute the vocals to make an instrumental, keep the drums as a
loop, add
[effects](/1.10/guide/mixing), or [slice them into loops](/1.10/guide/clip-editor) — all the
usual editing applies.
