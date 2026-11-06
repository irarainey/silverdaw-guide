# Quick Start: Your First Remix

Start with one song and make a short remix: cut it into loops, rearrange a few
pieces, and hear what a filter does to the sound. Then save your work and export
an audio file.

This walkthrough assumes Silverdaw is already
[installed](/1.10/guide/installation) and open. Have one audio file ready;
a song with a clear, steady beat makes the first attempt easier.

## 1. Start a project

On the startup screen, choose **New Project**. The empty timeline is where
you'll put your audio.

## 2. Import and place a track

Drag one audio file from Windows Explorer onto an empty part of the timeline.
Silverdaw imports it into the **Library** and creates a new track with the file
already placed on it.

If you'd rather listen before choosing a file, use the
[Files tab](/1.10/guide/files) to browse your audio folders inside Silverdaw.

![The Library panel with imported audio](/1.10/images/quickstart-import.png)

Silverdaw works out the file's tempo (BPM), key, and beat positions in the
background. You can listen while it does this.

## 3. Play it

Your audio appears as a **clip** — a block showing its waveform. Press the
**space bar** to play, and press it again to stop.

By default, the first musical clip with a detected tempo sets the project's
tempo. Later clips don't change it. For now, leave that tempo as it is.

## 4. Chop it into loops

Listen for a section you'd like to repeat, then stop playback. Wait until beat
markers appear on the clip before cutting:

1. Drag the clip's left and right edges inward to keep a short section you
   like, then drag the clip to the start of the timeline. Start with a few bars
   rather than the whole song.
2. Right-click it and choose **Transform ▸ Chop to Grid ▸ 1 bar** to cut that
   section into one-bar pieces.
3. Select the last piece and press <kbd>D</kbd> to repeat it in the empty space
   after it. To shorten the phrase, select an unwanted piece and press
   <kbd>Delete</kbd>, then drag the remaining pieces together to close the gap.
   Play the result and listen to how the rhythm changes.

![The clip right-click menu open on Chop to Grid](/1.10/images/quickstart-chop-to-grid.png)

The pieces snap to the grid as you drag, helping them land on the beat. If you
remove the wrong one, <kbd>Ctrl</kbd>+<kbd>Z</kbd> undoes it. Your original song
is untouched.

If **Chop to Grid** is missing, the file may not have a usable beat grid.
Try a song with a steadier beat for this walkthrough, or
[split the clip yourself](/1.10/guide/timeline#moving-and-editing-clips).

## 5. Add some effects

Play your loops, click the track's header on the left, and open **Track FX** in
the bottom panel. Try one change at a time so you can hear what it does.

![The Track FX panel with its effect modules](/1.10/images/quickstart-track-fx.png)

- Move **Filter** a little left to soften the brighter sounds, or right to
  thin out the bass. Double-click the slider to return it to the centre.
- Try a small change to **Bass** or **Treble** in **Tone** and compare it with
  the original setting.

For a little space around the sound, raise the track's **Reverb** send, then
open **Project FX** and raise **Mix** in **Reverb** too. Both controls need to
be above zero to hear the shared effect.

## 6. Save and export

Press <kbd>Ctrl</kbd>+<kbd>S</kbd> and choose a name and location for the project.
This keeps the editable arrangement so you can come back to it.

To make a file you can listen to outside Silverdaw:

1. Choose **File ▸ Export Mixdown…** (<kbd>Ctrl</kbd>+<kbd>M</kbd>).
2. Choose an **Output file** location and set **Format** to **WAV (PCM / float)**.
3. Choose **Trim to end of last clip**, then click **Export**.

You now have both an editable project and a finished audio file. When you want
to take the idea further, try [blending another track](/1.10/guide/timeline),
[isolating a vocal](/1.10/guide/stems), or
[recording your own part](/1.10/guide/recording).
