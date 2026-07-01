# Stem Separation

**Stem separation** splits a finished song into its parts — **vocals**,
**drums**, **bass**, and **other** — so you can remix and recombine them. It's one
of the most powerful things you can do in Silverdaw: pull an acapella out of a
track, isolate a drum break, or drop the bass line onto its own track.

Like everything else in Silverdaw, it's non-destructive: your original file is
never changed.

## Separating a track

Right-click a clip and choose **Separate Stems**. Silverdaw analyses the audio and
produces the separate parts, each of which can go onto its own track for you to
remix. Every stem keeps the original clip's tempo, key, and artwork, so it stays
in step with the rest of your project.

![The Separate Stems dialog](/images/stems-dialog.png)

*Screenshot placeholder — replace with: the Separate Stems dialog, showing the
stem choices (vocals, drums, bass, other) and the Quality control (Fast, Balanced,
Best).*

## The separation models

Silverdaw uses high-quality **RoFormer** models to do the separation. The first
time you separate stems, these models are downloaded once (about 1 GB) and then
reused from then on. There's also a smaller built-in **backup model** that needs
no setup at all, so you can separate stems even before the main models finish
downloading.

## Speed, quality, and cleanup

You can trade speed for polish:

- When you run **Separate Stems**, the dialog offers a **Quality** setting —
  **Fast**, **Balanced**, or **Best** — so you can pick how much time Silverdaw
  spends for cleaner results.
- **GPU acceleration** is optional. If you have a compatible graphics card,
  separation can run faster; if not, it still works on the processor. You can turn
  it on in **Edit ▸ Preferences ▸ Stems**.
- An optional **cleanup** can tidy up the separated parts, with **Light**,
  **Medium**, or **Strong** strength. This is set in **Edit ▸ Preferences ▸
  Stems**.

## After separating

Once you have your stems on separate tracks, they behave like any other clips. You
can mute the vocals to make an instrumental, keep only the drums as a loop, add
[effects](/guide/mixing), or [slice them into loops](/guide/clip-editor) — all the
usual editing applies.
