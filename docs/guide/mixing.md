# Mixing & Effects

Once your clips are arranged, mixing is about balancing the tracks and shaping
their sound. This page covers the track controls, the effects, and automation.

## Track controls

Each track's header, on the left of the timeline, has the basics:

- **Volume** — the fader sets how loud the track is.
- **Pan** — just under the fader, places the track in the stereo field, from left
  to right. It's an equal-power control, so the level stays even as you pan.
- **Mute** — silences the track. (When it's muted, the button offers to
  **Unmute**.)
- **Solo** — plays only the soloed track(s) and silences the rest. (When it's
  soloed, the button offers to **Unsolo**.)

The overall level of your finished mix is shown by the master output meter.

::: tip
To set an exact level, **double-click a track's gain number** to type a value in
decibels (dB), or **double-click the master volume readout** in the transport bar
to type the master level.
:::

## Track FX

Select a track, then open the **Track FX** tab in the bottom panel to shape that
track's sound. (If nothing is selected, the panel prompts you to *"Select a track
to edit its Tone, Filter, Compressor, and Reverb & Delay."*)

- **Tone** — a three-band EQ with **Bass**, **Mid**, and **Treble**. Boost or cut
  each band; double-click a band to reset it to 0 dB.
- **Filter** — a single DJ-style sweep that runs from a low-pass filter (**LPF**),
  through off in the centre, to a high-pass filter (**HPF**). Perfect for
  build-ups and drops. Double-click to recentre it (off).
- **Compressor** — a single-knob control for gentle dynamics, evening out the
  level.
- **Reverb** and **Delay** sends — how much of this track is sent to the shared
  project effects (below).

## Project FX

The **Project FX** tab holds the song-wide effects that every track can send to:

- **Reverb** — a shared reverb for a sense of space.
- **Delay** — a shared, tempo-locked echo.

Each track decides how much of itself to feed into these using its **Reverb** and
**Delay** sends in Track FX. This shared setup is what lets several tracks sit in
the same "room" together.

## Automation: changing settings over time

Most controls don't have to stay fixed — you can **automate** them so they change
across the timeline. This is how you create a slow filter sweep, a fade, or a pan
that drifts across the stereo field.

Open a collapsible **automation lane** under a track — using the **automation**
toggle on the track header — and draw a **breakpoint curve** — a line with points
you can shape. You can automate:

![A track with its automation lane open and a breakpoint curve](/images/mixing-automation.png)

- **Filter**
- **Pan**
- **Tone** — **Bass**, **Mid**, and **Treble**
- **Reverb** and **Delay** sends
- **Compressor**
- **Gain** — an overall track level applied after the effects

Working with automation points:

- **Add** a point by clicking on the curve; **drag** points to shape it.
- **Delete** a point by right-clicking or <kbd>Alt</kbd>-clicking it.
- **Nudge** a selected point with the arrow keys.
- Raise, lower, or copy and paste a whole curve at once.

Each Track FX control also has an **A** button to automate it directly: the
control's slider sets the resting value, and a drawn curve overlays it over time.
While a curve is active, the slider follows the automation as the track plays, so
you can watch each control move. Automation plays back live and renders exactly the
same way in your exported mix.
