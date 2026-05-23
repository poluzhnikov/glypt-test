# Glypt fixture site

A small Astro page that exists to be the **test target** for [Glypt](https://github.com/poluzhnikov/screenwriter)'s handoff loop. It's deployed to Cloudflare Pages so Glypt can:

1. Anchor + edit elements on the live URL via its embedded canvas
2. Ship a batch of edits → the workflow in this repo runs the Anthropic Claude Code Action to translate the DOM-level edits into source changes and open a PR
3. Cloudflare Pages auto-deploys the PR's preview
4. Glypt's Stage 2 watcher loads that preview back into the canvas with the designer's original mock as a ghost overlay

This is **infrastructure for e2e testing the loop end-to-end**. The content here doesn't matter beyond being varied enough (different element types, class names, sibling repeats, nesting) to exercise the agent's source-finding across realistic shapes.

## Local development

```
pnpm install
pnpm dev
```

Builds in <10 seconds. Deploys to Cloudflare Pages on push to `main` and on every PR (preview).

## Why this repo is separate from the Glypt monorepo

Test runs create dozens of `glypt/ship-<batch-id>` branches + cancel/recreate cycles. That kind of git history doesn't belong next to real product code. This repo is intentionally disposable — main is reset to a known-good commit between e2e runs.

## Conventions intentionally preserved

- **No rounded corners** (matches Glypt's design house rules; the agent inherits this when editing)
- **Distinctive class names** (`.hero-title` not `.text-2xl`) so the agent's grep uniquely identifies source
- **No backend, no auth, no API routes** — every interesting failure mode for the handoff loop happens at the build + DOM layer

## License

Public domain. Edit at will.
