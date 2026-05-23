import { defineConfig } from 'astro/config';

// Static-only build. The fixture exists to be DOM-anchored, source-edited by
// Claude, deployed via Cloudflare Pages, and pulled back into Glypt's canvas
// for Stage 2 review. Anything dynamic (data, auth, API routes) is out of
// scope — every interesting failure mode for the handoff loop happens at the
// build + DOM layer, so we keep the surface minimal.
export default defineConfig({
  output: 'static',
});
