# Stem Separation

**Stem separation** splits a finished song into its parts — **vocals**,
**drums**, **bass**, and **other** — so you can remix and recombine them. It's one
of the most powerful things you can do in Silverdaw: pull an acapella out of a
track, isolate a drum break, or drop the bass line onto its own track.

Like everything else in Silverdaw, it's non-destructive: your original file is
never changed.

::: tip First time only: a one-off download
The first time you separate stems, Silverdaw downloads the separation model it
needs — a one-time download of about 1 GB, so you'll need an internet connection
just that once. It's stored on your computer and reused for every separation
afterwards, so from then on separation works offline. The models are hosted on
[Hugging Face](https://huggingface.co/silverdaw).
:::

## Separating a track

Right-click a clip and choose **Separate Stems**. The **Separate Stems** dialog
opens with no stems selected: tick the parts you want — **Vocals**, **Drums**,
**Bass**, and **Other** — choose a **Quality** setting, then click **Start**.
**Start** stays disabled until you've ticked at least one part.

The first time you separate stems, if the model Silverdaw needs isn't on your
computer yet, it asks to download it once. Separation begins only after that
download finishes; every separation after that starts straight away.

Silverdaw then analyses the audio and produces the separate parts, each on its own
track for you to remix. Every stem keeps the original clip's tempo, key, and
artwork, so it stays in step with the rest of your project.

![The Separate Stems dialog](/1.2.0/images/stems-dialog.png)

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
strengths in **Edit ▸ Preferences ▸ Stems**, which tidy the finished stems after
separation.
:::

## The separation models

Silverdaw has two kinds of separation model, and you manage both in
**Edit ▸ Preferences ▸ Stems**:

- **High-quality RoFormer models** — these give the best results. They total
  about 1 GB, are downloaded once with the **Download models (~1 GB)** button, and
  are then used automatically. The **Separation models** section shows their
  status (**Not downloaded**, **Partly installed**, or **Installed**).
- **A backup model** — a lower-quality fallback. Silverdaw fetches it
  automatically the first time you separate stems if the high-quality models
  aren't installed (or can't run on your hardware), so you can start separating
  without any setup.

### Using models you already have

If you've already downloaded the models — for example on another machine, or
because someone shared them with you — you can point Silverdaw at them instead of
downloading again:

1. Open **Edit ▸ Preferences ▸ Stems**.
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

You can trade speed for polish:

- When you run **Separate Stems**, the dialog offers a **Quality** setting —
  **Fast**, **Balanced**, or **Best** — so you can pick how much time Silverdaw
  spends for cleaner results. Silverdaw remembers your choice for the next
  separation.
- **GPU acceleration** is optional. If you have a compatible graphics card,
  separation can run faster; if not, it still works on the processor. You can turn
  it on in **Edit ▸ Preferences ▸ Stems**.
- An optional **cleanup** can tidy up the separated parts, with **Light**,
  **Medium**, or **Strong** strength. This is set in **Edit ▸ Preferences ▸
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
  entire track. Trim or [split](/1.2.0/guide/timeline#moving-and-editing-clips) the clip
  down to just the part you want — a single chorus, a drum break, an eight-bar
  loop — and separate that. Less audio means far less waiting, and you can always
  separate another section later.
- **Use GPU acceleration if you can.** If your computer has a compatible graphics
  card, turning on GPU acceleration in **Edit ▸ Preferences ▸ Stems** can speed
  separation up considerably. Without one it still works, just more slowly on the
  processor.
- **Be patient.** Especially at higher quality or on a less powerful machine, a
  separation can take a while. Let it run to the end rather than assuming it has
  stalled — it's working hard in the background.

## After separating

Once you have your stems on separate tracks, they behave like any other clips. You
can mute the vocals to make an instrumental, keep only the drums as a loop, add
[effects](/1.2.0/guide/mixing), or [slice them into loops](/1.2.0/guide/clip-editor) — all the
usual editing applies.
