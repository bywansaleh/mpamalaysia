# AGENTS.md

## Project

MPA Malaysia is a one-page public website for the Music Publishers Association of Malaysia. It is an App Router Next.js site with static content, motion-driven section reveals, light/dark themes, and an optional server-rendered Instagram feed.

Use the repository as the source of truth: package scripts, current imports, route files, and data files are more reliable than older prose docs.

## Start here

- **src/app/(home)/layout.tsx** is the effective root layout for / in the current tree. It loads global CSS, fonts, providers, navigation, and footer; there is no separate **src/app/layout.tsx**.
- **src/app/(home)/page.tsx** composes the home page in this order: Welcome, Pillars, Publishers, Council, Achievements, Instagram.
- **src/app/(home)/sections/** contains the page sections and their nearby static data files.
- **src/components/** contains shared UI and browser-interaction components.
- **src/lib/** contains shared utilities, hooks, runtime configuration, and Open Graph generation.
- **src/app/api/refresh-ig-token/route.ts** is the only API route.
- **public/images/** is the source of truth for images referenced as /images/...; use those paths when editing content data.

## Tooling

Use Bun. `bun.lock` is the lockfile and `package.json#packageManager` pins the Bun version; do not reintroduce pnpm/npm lockfiles.

Bun skips dependency lifecycle scripts unless the package is listed in `package.json#trustedDependencies` (currently `sharp`, `@parcel/watcher`, `unrs-resolver`). Add an entry there whenever a new dependency needs a postinstall build step, or its native binary silently will not be built.

~~~bash
bun dev               # Next dev server on port 2656
bun dev-https         # HTTPS dev server on port 2656
bun lint              # ESLint
bun lint:fix          # ESLint autofix
bun tsc               # TypeScript check
bun build             # Production build
bun start             # Serve the production build
~~~

TypeScript runs side-by-side on purpose. TypeScript 7 ships no JS compiler API, so `typescript-eslint` (and therefore ESLint) crashes on load if `typescript` resolves to 7.x. `package.json` therefore aliases:

~~~json
{
  "devDependencies": {
    "@typescript/native": "npm:typescript@^7.0.2",
    "typescript": "npm:@typescript/typescript6@^6.0.2"
  }
}
~~~

`tsc` (and `bun tsc`) is TypeScript 7 native; `typescript` resolves to the 6.0 API for tooling, with `tsc6` as its binary. Do not "upgrade" the `typescript` key to 7.x — `bun lint` will fail with `typescript-eslint does not support TS 7.0`. Revert this pair only once typescript-eslint supports TS >= 7.1.

Security overrides in `package.json` exist because the vulnerable packages are pinned exactly by their parents (`satori` → fflate 0.7.3, `oxfmt` → tinypool 2.1.0, `@tailwindcss/typography` → postcss-selector-parser 6.0.10, `micromark-extension-math` → katex ^0.16). The postcss-selector-parser override is scoped to that one parent because only 6.x is affected; scoping it globally would downgrade the healthy 7.1.7 copies. Keep `bun audit` at zero vulnerabilities, and do not drop an override without re-running it.

The predev lifecycle removes the generated .next/ directory before `bun dev`. There is currently no test script or test tree; the normal validation baseline is lint, TypeScript, build, and a browser smoke check for UI work.

## Runtime map

The home route is deliberately static/ISR:

- **src/app/(home)/page.tsx** exports dynamic = 'force-static' and revalidate = 60.
- The Instagram fetch has its own Next fetch cache of 3600 seconds. The page can regenerate every 60 seconds, but a successful Instagram response can remain cached for up to an hour.
- If IG_ACCESS_TOKEN is missing or the Instagram request fails, the Instagram section logs the error and returns no section; the rest of the page still renders.
- `bun build` loads .env.local and may make a live Instagram API request when the token is present.

The Instagram integration is server-only:

- **src/app/(home)/sections/instagram.tsx** is an async server component. Keep IG_ACCESS_TOKEN out of client components and browser-exposed variables.
- **src/app/api/refresh-ig-token/route.ts** accepts GET only when the request has Authorization: Bearer <CRON_SECRET>. It uses IG_ACCESS_TOKEN to call Meta's refresh endpoint.
- **vercel.json** schedules the refresh route every 21 days. Keep the route's auth requirement and the deployment's CRON_SECRET configuration aligned.
- **INSTAGRAM_SETUP.md** is the operational companion for this integration. When changing the token flow, endpoint, fields, cache policy, or cron behavior, update that document too; code and vercel.json remain authoritative.
- IG_USER_ID may exist in a local environment file, but current source does not read it.

Metadata and discoverability live in **src/app/metadata.ts**, **src/app/sitemap.ts**, and **src/app/robots.ts**. When changing social previews, also inspect the image assets under **src/app/** and **src/lib/generate-opengraph.tsx**.

## Deployment

Production runs on Vercel in a **different account from the local CLI**: project `mpamalaysia` under the personal scope `bywansaleh-projects` (bywansaleh@gmail.com, Hobby plan). The `vercel` CLI on this machine is authenticated as `wansaleh` in team `wan-salehs-projects`, which cannot see this project — `vercel project ls`, `vercel domains inspect` and `vercel inspect dpl_…` all fail for it, and `--scope bywansaleh-projects` reports "scope does not exist". Read build logs and change settings in the Vercel dashboard (browser space `Chrome › bywansaleh`); a commit's deployment URL is also exposed by the GitHub status API: `gh api repos/bywansaleh/mpamalaysia/commits/<sha>/status`.

- Git `bywansaleh/mpamalaysia`, branch `main`, is the Production branch, so **a push to main deploys the live site**. Vercel blocks a production redeploy behind an emailed one-time code.
- Domains: www.mpamalaysia.com (canonical), mpamalaysia.com (308 → www), staging.mpamalaysia.com, mpamalaysia.vercel.app. Builds run in iad1; requests are served from sin1.
- **Project Settings → Build and Deployment → Node.js Version must stay 24.x.** On 20.x every build died about 1s after cloning with `Node.js Version "20.x" is discontinued` no matter what the commit contained, because Node 20 was retired on 2026-10-01. Settings are not retroactive: after changing the version the old failed deployments stay failed and a redeploy is required.
- Install and build commands are unset, so Vercel auto-detects bun from `bun.lock` plus `packageManager`; there is no `engines` field.
- Production environment holds IG_ACCESS_TOKEN, IG_USER_ID (unused by source) and CRON_SECRET. The vercel.json cron relies on CRON_SECRET matching the refresh route's Bearer check.

## Component and styling conventions

- TypeScript is strict and the @/ alias resolves to the src directory; prefer it for cross-area imports.
- Keep static page content in the section's *.data.tsx file when it is already separated there. Keep the data type beside the data.
- Preserve the current server/client boundary. Add 'use client' only for browser state, effects, observers, theme access, or animation components that require it.
- Reuse **Section** for scroll-section tracking, **RevealFade** for viewport reveals, and **cn()** for conditional/merged class names.
- Tailwind CSS 4 is wired through **src/styles/globals.css** and @tailwindcss/postcss. **tailwind.config.ts.old** is not the active configuration.
- Section-specific reusable CSS is in **src/app/(home)/sections/styles.module.css**; it uses @reference to reach the global Tailwind entry point.
- Theme tokens are defined in **src/styles/globals.css** and **src/styles/colors.ts**, then hue, bgLight, and bgDark are injected by the home layout.
- Active font setup is in **src/app/fonts.ts**: Geist Sans, DM Serif Display for headings, and Fraunces for serif text. Confirm the import before introducing another font.
- Images and logos are currently rendered with native img/SVG elements in several places. Preserve the existing approach unless the change explicitly includes an image-pipeline migration.

## Change workflow

1. Trace the target from **src/app/(home)/page.tsx** or the relevant route before editing. Decide whether the change belongs in a section component, its data file, a shared component, or a global token.
2. Check the server/client boundary before importing hooks, browser APIs, next-themes, Nanostores, or Framer Motion.
3. For content changes, verify every referenced image/logo path exists under **public/images/** and preserve the data shape used by the renderer.
4. Run `bun lint`, `bun tsc`, and `bun build` after code changes. For UI changes, run `bun dev` and check http://localhost:2656 in light and dark modes at narrow and wide widths, including anchor navigation.
5. For Instagram changes, test both with a configured token and without one. Test the refresh route with an explicit Bearer header and never print token values in logs or output.

## Known repository edges

- The repository contains legacy-looking files and variants, including **src/--opengraph-image.tsx**, **src/--twitter-image.tsx**, **src/app/registry.tsx**, and multiple logo components. Confirm the import graph before treating one as active or deleting it.
- **.next/** and **.claude/worktrees/** are generated/local workspace material; do not edit them as application source.
- The production build currently passes but emits a Next warning about metadataBase falling back to http://localhost:3000 while resolving social images. Treat this as a baseline warning and investigate it when touching metadata or Open Graph/Twitter image behavior.

<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
