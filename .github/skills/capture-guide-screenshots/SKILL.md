---
name: capture-guide-screenshots
description: Regenerate every screenshot linked by the current Silverdaw guide using Playwright, the released Windows app, and the California Mashup project.
---

# Capture guide screenshots

Use the actual desktop app, not the guide preview or a mockup. Run the following
from the guide repository on Windows with a graphical desktop and Node 20+.

1. Check `gh release view -R irarainey/silverdaw --json tagName,assets`.
   The tag must match `release` in `scripts/capture-screenshots.mjs`, and its
   major/minor must match `latestVersion` in `docs/.vitepress/versions.ts`.
   For a new release, check selectors and framing against the tagged app source
   before updating the pin. Never write into an archived guide.
2. Run `npm ci` in the guide. Have the California Mashup project in
   `%USERPROFILE%\Silverdaw\Projects\California Mashup`, including its stems
   and accessible source audio. Keep the saved view with the Vocals track
   and its filter automation visible. No separate browser or source build
   is needed. Allow disk space for temporary copies of the app and project.
3. Run **`npm run screenshots`**. It uses `gh` and `tar` to fetch and extract
   the pinned Windows release, opens a disposable project copy with a fresh
   profile, and captures the entire set. No export, microphone recording, or stem
   separation is started. Silverdaw may write its normal diagnostic logs.
   To reuse an already extracted release or specify another location for
   the **same** project, use:

   ```powershell
   npm run screenshots -- "D:\Tools\Silverdaw\Silverdaw.exe" "D:\Projects\California Mashup"
   ```

   The app runs fullscreen at the monitor's current resolution and scale;
   do not change display settings or interact with its window during capture.
   It raises the Library / FX splitter just enough to show both effects racks
   without scrolling, and keeps that height for the Library and overview.
   Project save prompts are answered **Don't Save**. Actions are paced at
   1.2 seconds with a further pause before each screenshot.
   To slow the walkthrough further, set `$env:SILVERDAW_SCREENSHOT_PAUSE_MS = '2500'`
   before running it. Readiness checks still apply. A missing project, failed
   interaction or missing scene is an error, not permission to reuse an old PNG.
4. Inspect every changed PNG under `docs/public/<major.minor>/images/` before
   publishing. Check the controls are legible, waveforms have drawn,
   the Library shows the project's track images, and there are no personal
   paths, device identifiers, unapproved artwork, recent files or
   notifications that should not be published. Do not add project or audio
   files to the repository.
5. Reference new images next to the matching task with descriptive alt text
   and a versioned root-absolute URL. Run `npm run docs:build`. Leave changes
   uncommitted for review.

## Add a scene

Find the task or image placeholder in the current guide, then verify the exact
UI in the tagged app's `frontend/src/renderer` and look for a matching journey
in `frontend/e2e`. Add a scene to the capture script using visible roles,
names, and titles. Wait for the final UI state in addition to the pacing delay.
Use `captureDialog` for dialogs: it frames the card with 36 pixels of the
actual background application wherever the viewport allows. Only the window
overview needs the entire screen. For other scenes use `capture` on the panel
or `captureGroup` around the relevant controls; keep the control and its effect
together (for example, the loop toggle and shaded range). The command checks the current guide's
image references before writing any PNGs; do not add a reference without a
working capture. HTML placeholder comments are future illustration ideas, not
published images. In particular, never record a real microphone or invent a
successful hardware calibration to fill a placeholder.

Recording examples use `scripts/recording-screenshots.mjs`: the released
renderer draws a generated four-second tone using a disposable example input.
Recording commands do not reach hardware. Keep these examples identified on
the guide page, and show calibration before measurement, not a made-up result.

The scratch scenes are a real virtual-deck performance, not a recording fixture.
Use a short timeline phrase rather than the full Library source. Move the platter
back and forth and toggle the crossfader during the strokes. Capture the notation,
use the editor's **Save** to bake the sample in the disposable project, then
reopen that Library sample and compare its points before taking the editor shot.
This is distinct from saving the project; always discard project save prompts.
