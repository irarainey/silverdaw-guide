# Silverdaw Guide — repository instructions

## What this repository is

This repository is a [VitePress](https://vitepress.dev) site that publishes the
**user guide** for **Silverdaw**, an open-source Digital Audio Workstation (DAW)
for remixing, mashups, and sample-driven music making. The built site is served
from `docs.silverdaw.com`.

The guide is **entirely, automatically generated** from the documentation and
source code of the Silverdaw application project, which lives in a separate
repository:

- Application repository: https://github.com/irarainey/silverdaw

The application repo is the **single source of truth**. This repository only
contains the guide that is derived from it.

## Core rules for creating or updating content

These rules are mandatory. Follow every one of them whenever you generate or
edit guide content.

1. **Never guess or hallucinate.** Only document real features and
   functionality that are present in the application repo's documentation or
   code. If information is not found there, do not include it — leave it out or
   mark the section as not yet available.
2. **Audience is non-technical end users.** The guide is for people using
   Silverdaw, not for developers of Silverdaw. Its sole purpose is to help users
   operate the application as efficiently as possible. Do not include
   developer-, build-, or contribution-oriented material.
3. **Write clearly, simply, and concisely.** Assume readers are not audio
   experts, professional producers, or DJs. Explain audio concepts in plain
   language — but do not "dumb down" or omit important detail. Clear, not
   condescending.
4. **Organise logically.** Group related features and functionality into
   coherent sections so users can find things by task, not by internal code
   structure.
5. **Include a very simple quick start guide.** It assumes the user has already
   installed the application, and walks through a minimal end-to-end remix:
   importing at least one source track, cutting it into loops, and applying some
   effects. Keep it short and achievable for a first-time user.
6. **Rubberduck all thinking and structure with two other models.** Before
   finalising new content or a structural change, validate the reasoning and
   outline with two additional models to confirm it is factually correct and
   clear. Reconcile any disagreement against the application repo (the source of
   truth) before publishing.
7. **Match the UI exactly.** Any reference to a menu, button, tab, panel, or
   label must use text that matches the application's UI verbatim (including
   capitalisation and wording). Verify wording against the application code or
   docs — never paraphrase UI text.
8. **Assume nothing is permanent.** Features, wording, and workflows change. When
   editing, re-check the **entire** guide for stale content — outdated
   instructions, renamed UI elements, removed features, and broken cross-links —
   not just the page you are touching.
9. **Track the released application version.** The guide must correspond to the
   current released version of the Silverdaw application. Check the application
   repo's releases. If there is no current release, start at version `1.0.0`.
   Make the version the guide targets explicit and keep it in sync.

## Sourcing and verification workflow

When generating or updating content, follow this order:

1. Read the current guide to understand existing structure and version.
2. Pull the latest documentation and relevant code from the application repo
   (https://github.com/irarainey/silverdaw) and confirm the released version.
3. Draft or update content using **only** what is supported by that source.
4. Verify all UI text (menus, buttons, labels) against the application.
5. Rubberduck the structure and key claims with two other models.
6. Sweep the whole guide for stale content and broken links.
7. Build with `npm run docs:build` to catch dead links and errors before
   publishing.

## Related instructions

- Markdown/VitePress authoring conventions for pages under `docs/` are defined
  in `.github/instructions/markdown.instructions.md`.
