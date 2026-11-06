# Scratch Editor

Use the **Scratch Editor** to add the sound of a record moving back and forth
under your hand. Record a pattern with a supported
[MIDI DJ controller](/1.10/guide/midi-controllers), or try the on-screen
controls, then refine the movements and save the result to the
[Library](/1.10/guide/library).

::: warning
A supported MIDI DJ deck gives you the most expressive control. Without one,
you can still try a simple pattern with the virtual deck, but its trackpad
and keyboard controls are experimental.
:::

## Open a scratch session

To open a separate scratch session, right-click a timeline clip and choose
**Open ▸ Scratch Editor**. For a Library item, right-click it and choose **Open
in Scratch Editor**. This does not change the clip you opened.

First prepare something to scratch over. In **Backing deck**, choose the
material you want to hear underneath:

1. Select one or more **Tracks**.
2. Choose **From**: **Start** begins at the start of the project, while
   **Playhead** begins at the current playhead.
3. Choose a **Length** of **60s**, **120s**, or **Full**.
4. Click **Build**.

On a supported MIDI deck with a mapped **Cue** control, press **Cue** to run the
same **Build** action with the current **Tracks**, **From**, and **Length**
settings.

Use the backing controls to play or stop the prepared backing. The **Backing**
and **Monitor** level controls balance the backing and scratch sound while you
work.

## Record a scratch

Click **Record** to arm recording. Nothing is recorded until you first touch or
move the platter. Click **Cancel** before that first touch to disarm it. Once
recording begins, click **Stop** to finish the take.

With a supported MIDI deck, use its platter and crossfader to perform the
scratch. If the controller has a mapped **Headphone Cue / PFL** control, press
the button for the physical deck you want to use for the scratch session.

## Experimental virtual-deck controls

Use these controls only when you do not have a supported MIDI deck:

- **Trackpad:** use a two-finger pan over the virtual platter. Moving right or
  down scratches forward; moving left or up scratches backward. The platter
  releases shortly after movement stops.
- **Tap:** use **Tap to toggle platter hold** to hold the platter, then tap again
  to release it.
- **Mouse:** click and drag around the platter to scratch while dragging.
- **Crossfader cut:** press the configured **Scratch crossfader cut** key to
  close the crossfader, then press it again to reopen it. Set this to **Z** or
  **M** in **Edit ▸ Preferences… ▸ Effects**.

## Edit a pattern

Click **Play** and listen for the parts you'd like to tighten. The platter and
crossfader lanes show the movements you recorded; add, drag, delete, or nudge
their points to refine the timing. Undo and redo let you compare edits.
If you'd rather start a fresh pattern, choose **Clear**.

### Scratch realism

Choose **Scratch realism** in **Edit ▸ Preferences… ▸ Effects** to control the
character of held-platter scratching. It softens the sound while the platter is
held and adds a little groove texture; it does not affect regular timeline clips.
**Off** is the clean, direct response, while **Medium** and **High** add
progressively more vinyl character.

## Save your scratch

Click **Save** in the Scratch Editor footer to keep the editable pattern and bake
the recorded scratch actions into a new (or updated) reusable **Scratch** sample
in the Library. Drag that sample onto the timeline and edit the resulting clip
like any other clip. Saving closes the editor; it does not replace the timeline
clip that opened the session.

If you close with unsaved changes, **Unsaved Scratch Pattern** offers **Don't
Save** or **Save**. Saving keeps the pattern so you can continue editing it; use
the footer **Save** when you are ready to create or update its Library item.

## Scratch shortcuts

| Action | Shortcut |
| --- | --- |
| Play or pause the backing | <kbd>Space</kbd> |
| Build the backing | <kbd>B</kbd> |
| Arm, cancel, or stop recording | <kbd>R</kbd> |
| Play or stop the scratch pattern | <kbd>P</kbd> |
| Clear the pattern | <kbd>C</kbd> |
| Toggle the crossfader cut | <kbd>Z</kbd> or <kbd>M</kbd> |
| Close the editor | <kbd>Esc</kbd> |
