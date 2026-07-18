# MIDI Controllers

Silverdaw can use supported MIDI DJ controllers to control playback, navigate the
timeline, change the selected track's mixer settings, and perform scratches in
the [Scratch Editor](/1.2.0/guide/scratch-editor).

## Connect and enable a controller

1. Connect and turn on the controller.
2. Open **Edit ▸ Preferences… ▸ MIDI**.
3. Choose **Rescan devices** if it is not listed.
4. Tick a recognised controller, then choose **Save**.

Recognised devices are labelled **MIDI deck controls**. Other MIDI inputs can
appear as **Not supported yet**, but cannot be enabled. You can enable more than
one supported controller.

Each enabled controller keeps its own settings:

- **Play audio while moving the main timeline** makes platter movement audition
  audio while you move through the timeline. It is off by default.
- **Crossfader direction** chooses **Left to right** or **Right to left**.
- **Default deck** chooses **None**, **Deck 1 (Left)**, or **Deck 2 (Right)**.
  A deck selection made on the controller takes priority over this default.

The crossfader is used when recording in the Scratch Editor. It does not change
the ordinary project mix.

## Using a controller

Available controls depend on the controller profile. On supported hardware,
Silverdaw can use controls such as:

- **Play** to start or pause playback.
- **Cue** to move to the previous marker, and **Shift + Cue** to move to the
  next marker where the controller supports it.
- A platter or jog wheel to move the playhead. With **Play audio while moving
  the main timeline** enabled, touching and moving a compatible platter can
  audition audio.
- A **Browse** control to navigate tracks and clips:
  - Turn **Browse** to select timeline tracks.
  - Press **Browse** to enter clip-browse mode for the selected track, then turn
    it to select clips. Hold **Shift** while turning to extend the clip
    selection.
  - Press **Browse** again to leave clip-browse mode. A selected track with no
    clips cannot enter this mode.
  - Hold **Shift** while turning **Browse** to zoom the timeline when
    clip-browse mode is off. This works only on controllers with a mapped
    **Shift** control.
- Hot-cue pads to jump to numbered timeline markers.
- Channel faders, EQ, filters, and master level controls to adjust the selected
  track or project when the profile provides them.

While the [Scratch Editor](/1.2.0/guide/scratch-editor) is open, its controls
take over the controller's platter, crossfader, and playback controls for the
scratch session.

## Matching physical controls to Silverdaw

When a controller first connects or is enabled, Silverdaw cannot read the current
position of every physical dial and slider. This is a technical limitation of
those MIDI controls, which report movement rather than their saved position.

When you first move a supported absolute control, such as a channel fader, EQ,
filter, or master level, Silverdaw softly catches up the on-screen value to the
physical control instead of making an abrupt jump. Move the control until its
position is synchronised before making a precise adjustment.

The crossfader does not use this soft catch-up. Before recording in the
[Scratch Editor](/1.2.0/guide/scratch-editor), move the physical crossfader once
to send its current position to Silverdaw.

## Supported MIDI decks

Silverdaw recognises these supported MIDI deck controllers. The exact controls
vary by model: not every deck has **Browse**, **Shift**, jog, pad, mixer, or
feedback mappings.

| Manufacturer | Supported decks |
| --- | --- |
| Denon DJ | MC7000 |
| Hercules | DJControl Inpulse 200, DJControl Inpulse 300, DJControl Inpulse 500, DJControl Starlight, DJControl MIX |
| Numark | DJ2GO2 Touch, Mixtrack 3, Mixtrack Pro 3 |
| Pioneer DJ | DDJ-200, DDJ-400, DDJ-800, DDJ-1000, DDJ-ERGO, DDJ-FLX4, DDJ-FLX6, DDJ-FLX10, DDJ-RB, DDJ-RR, DDJ-REV5, DDJ-REV7, DDJ-RX, DDJ-RZ, DDJ-RZX, DDJ-SB, DDJ-SB2, DDJ-SB3, DDJ-SR, DDJ-SR2, DDJ-SX, DDJ-SX2, DDJ-SX3, DDJ-SZ, DDJ-WeGO, DDJ-WeGO2, DDJ-WeGO3, DDJ-WeGO4, OMNIS-DUO, OPUS-QUAD, XDJ-AERO, XDJ-R1, XDJ-RR, XDJ-RX, XDJ-RX2, XDJ-RX3, XDJ-XZ |
| Reloop | Beatmix 2 MK2, Beatmix 4 MK2 |

If a controller does not appear, reconnect it and choose **Rescan devices**.
Controllers labelled **Not supported yet** cannot be used by Silverdaw.

The Hercules DJControl Inpulse 200 MK2 and DJControl Inpulse 300 MK2 are not
supported. Similar model names do not guarantee compatibility.

> Only the Pioneer DJ DDJ-RB has been tested on physical hardware. Other listed
> decks have profile coverage but may need refinement.

## Troubleshooting

- Make sure the controller is powered on before opening Silverdaw, then choose
  **Rescan devices** after connecting it.
- If a control does not respond, confirm the device is ticked in **MIDI** and
  click **Save**.
- When a controller's physical fader or knob does not match the on-screen value,
  move it gradually. Silverdaw catches up rather than making an abrupt jump.
