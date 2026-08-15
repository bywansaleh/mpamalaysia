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

Use pnpm. The lockfile, .npmrc, and package.json all describe a pnpm workflow; do not copy the older Bun commands from historical docs.

~~~bash
pnpm dev              # Next dev server on port 2656
pnpm dev-https        # HTTPS dev server on port 2656
pnpm lint             # ESLint
pnpm lint:fix         # ESLint autofix
pnpm tsc              # TypeScript check
pnpm build            # Production build
pnpm start            # Serve the production build
~~~

The predev lifecycle removes the generated .next/ directory before pnpm dev. There is currently no test script or test tree; the normal validation baseline is lint, TypeScript, build, and a browser smoke check for UI work.

## Runtime map

The home route is deliberately static/ISR:

- **src/app/(home)/page.tsx** exports dynamic = 'force-static' and revalidate = 60.
- The Instagram fetch has its own Next fetch cache of 3600 seconds. The page can regenerate every 60 seconds, but a successful Instagram response can remain cached for up to an hour.
- If IG_ACCESS_TOKEN is missing or the Instagram request fails, the Instagram section logs the error and returns no section; the rest of the page still renders.
- pnpm build loads .env.local and may make a live Instagram API request when the token is present.

The Instagram integration is server-only:

- **src/app/(home)/sections/instagram.tsx** is an async server component. Keep IG_ACCESS_TOKEN out of client components and browser-exposed variables.
- **src/app/api/refresh-ig-token/route.ts** accepts GET only when the request has Authorization: Bearer <CRON_SECRET>. It uses IG_ACCESS_TOKEN to call Meta's refresh endpoint.
- **vercel.json** schedules the refresh route every 21 days. Keep the route's auth requirement and the deployment's CRON_SECRET configuration aligned.
- **INSTAGRAM_SETUP.md** is the operational companion for this integration. When changing the token flow, endpoint, fields, cache policy, or cron behavior, update that document too; code and vercel.json remain authoritative.
- IG_USER_ID may exist in a local environment file, but current source does not read it.

Metadata and discoverability live in **src/app/metadata.ts**, **src/app/sitemap.ts**, and **src/app/robots.ts**. When changing social previews, also inspect the image assets under **src/app/** and **src/lib/generate-opengraph.tsx**.

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
4. Run pnpm lint, pnpm tsc, and pnpm build after code changes. For UI changes, run pnpm dev and check http://localhost:2656 in light and dark modes at narrow and wide widths, including anchor navigation.
5. For Instagram changes, test both with a configured token and without one. Test the refresh route with an explicit Bearer header and never print token values in logs or output.

## Known repository edges

- The repository contains legacy-looking files and variants, including **src/--opengraph-image.tsx**, **src/--twitter-image.tsx**, **src/app/registry.tsx**, and multiple logo components. Confirm the import graph before treating one as active or deleting it.
- **.next/** and **.claude/worktrees/** are generated/local workspace material; do not edit them as application source.
- The production build currently passes but emits a Next warning about metadataBase falling back to http://localhost:3000 while resolving social images. Treat this as a baseline warning and investigate it when touching metadata or Open Graph/Twitter image behavior.
