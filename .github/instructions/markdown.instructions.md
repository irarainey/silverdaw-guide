---
applyTo: "docs/**/*.md"
---

# Markdown authoring guide for the Silverdaw VitePress site

These instructions apply to every Markdown file under `docs/`. Follow them when
creating or editing documentation pages so the generated VitePress site stays
consistent, accessible, and easy to build.

## Frontmatter

- Content pages need **no frontmatter** unless they change layout or metadata.
  Start directly with a single `#` H1 heading.
- Use `layout: home` frontmatter only for the landing page (`docs/index.md`),
  with `hero` and `features` blocks as VitePress expects.
- Set a `title:` in frontmatter only when it should differ from the H1.
- Keep YAML valid: two-space indentation, no tabs, quote values containing
  colons.

## Page structure

- Exactly **one** `#` H1 per page, as the first line of content. It becomes the
  page title and the top navbar/breadcrumb label.
- Use `##` and `###` for sections; never skip heading levels (no `#` → `###`).
- Keep headings short and in sentence case (e.g. `## First launch`), matching
  the existing pages.
- Match every new page with an entry in the `sidebar` config in
  `docs/.vitepress/config.ts`. A page with no sidebar link is effectively
  orphaned.

## Links

- Use **root-absolute, extension-less** internal links that match
  `cleanUrls: true`, e.g. `[Introduction](/guide/introduction)` — not
  `introduction.md` or `./introduction`.
- Internal link paths are case-sensitive and must match the file path under
  `docs/`.
- Use full `https://` URLs for external links; VitePress handles external-link
  decoration automatically.
- Prefer descriptive link text over "click here".

## Content style

- Write in clear, concise prose. Wrap prose at a sensible width for readable
  diffs (the existing pages wrap ~80 cols).
- Use `**bold**` for emphasis on key terms and product names on first mention,
  e.g. **Silverdaw**.
- Use `> ` blockquotes for notes and caveats, or VitePress custom containers for
  stronger signals:
  ```md
  ::: tip
  Helpful aside.
  :::

  ::: warning
  Something to watch out for.
  :::

  ::: danger
  Destructive or irreversible action.
  :::
  ```
- Use `_Coming soon._` (italic) as the placeholder for unwritten sections, as
  the existing pages do.

## Lists, code, and media

- Use `-` for unordered list markers consistently.
- Always tag fenced code blocks with a language for syntax highlighting
  (```` ```bash ````, ```` ```ts ````, ```` ```json ````). Use ```` ```text ````
  when there is no language.
- Store images and static assets in `docs/public/` and reference them with a
  root-absolute path, e.g. `![Mixer](/images/mixer.png)`.
- Provide meaningful alt text for every image.

## Build hygiene

- Do not introduce broken internal links; VitePress dead-link checking will fail
  the build (`npm run docs:build`).
- After adding or renaming a page, update the nav/sidebar in
  `docs/.vitepress/config.ts` and verify with `npm run docs:build`.
- Keep raw HTML to a minimum; prefer Markdown and VitePress containers so light
  and dark themes both render correctly.
