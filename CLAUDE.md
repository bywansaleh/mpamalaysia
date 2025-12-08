# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the official website for Music Publishers Association Malaysia (MPA Malaysia), built with Next.js 16 and React 19. The site is a single-page application showcasing the organization's mission, council members, publishers, and achievements.

## Development Commands

### Development
```bash
bun run dev          # Start dev server on port 2656
bun run dev-https    # Start dev server with HTTPS
bun run predev       # Clean .next directory (runs before dev)
```

### Building & Type Checking
```bash
bun run build        # Build for production
bun run tsc          # Run TypeScript compiler
bun run start        # Start production server
```

### Linting & Formatting
```bash
bun run lint         # Run ESLint
bun run lint:fix     # Auto-fix ESLint issues and format with Prettier
bun run lint:strict  # ESLint with zero warnings allowed
```

### Other
```bash
bun run ngrok                      # Expose local server via ngrok
bun run update:deps                # Update dependencies to latest semver
```

## Architecture

### App Structure

The application uses Next.js 16 App Router with the following structure:

- **src/app/(home)/**: Main route group containing the home page
  - **sections/**: Home page sections (Welcome, Pillars, Publishers, Council, Achievements)
  - **icons/**: Custom SVG icon components for pillars
  - **layout.tsx**: Root layout with Nav, Footer, and global providers
  - **page.tsx**: Composes all sections into the home page

- **src/components/**: Reusable components (Nav, Footer, Logo variants, ThemeProvider, etc.)
- **src/lib/**: Utility functions and hooks
- **src/styles/**: Global styles and color configurations
- **src/assets/**: Fonts and images

### Key Configuration Files

- **Path Aliases**: `@/*` maps to `./src/*` (configured in [tsconfig.json:8](tsconfig.json#L8))
- **Port**: Development server runs on port 2656 (configured in [package.json:5](package.json#L5))
- **Environment**: `NODE_ENV` determines baseUrl in [src/lib/config.ts:1](src/lib/config.ts#L1)

### Styling & Theming

- **Tailwind CSS v4**: Uses new PostCSS plugin approach with `@tailwindcss/postcss`
- **Color System**: HSL-based colors defined in [src/styles/colors.ts](src/styles/colors.ts) and [src/styles/colors.css](src/styles/colors.css)
  - Hue is set to 40 (warm yellow/amber tone)
  - CSS custom properties (`--hue`, `--bg-light`, `--bg-dark`) injected in root layout
- **Dark Mode**: Theme switching via `next-themes` with system detection enabled
- **Fonts**:
  - Sans: Geist Sans
  - Heading: DM Serif Display
  - Serif: Fraunces
  - Configured in [src/app/fonts.ts](src/app/fonts.ts)

### Animation & Interactions

- **Framer Motion**: Used with LazyMotion for performance (loads only necessary features)
- **Spring Animations**: Custom spring configurations in [src/lib/spring.config.ts](src/lib/spring.config.ts)
- **Mouse Tracking**: Custom mouse position tracking via [src/app/mouse-provider.tsx](src/app/mouse-provider.tsx) and [src/lib/use-mouse-position.ts](src/lib/use-mouse-position.ts)
- **Intersection Observer**: Section animations triggered via `react-intersection-observer`

### Data Management

- **Static Data**: Council members and publishers data stored in `.data.tsx` files within their respective sections
- **Static Generation**: Home page uses `force-static` with 60-second revalidation
- **Type Safety**: TypeScript interfaces defined alongside data (e.g., `Member` interface in [src/app/(home)/sections/council.data.tsx:1-6](src/app/(home)/sections/council.data.tsx#L1-L6))

### Performance Features

- **Turbopack**: Next.js 16 uses Turbopack as the default bundler for both dev and production builds
- **React Compiler**: React compiler enabled in [next.config.mjs:5](next.config.mjs#L5)
- **React Strict Mode**: Enabled for development checks
- **Image Optimization**: Custom image loader using weserv.nl for production
- **Text Balancing**: `react-wrap-balancer` for better typography

## Code Conventions

### Import Order
Prettier is configured to sort imports in this order:
1. React
2. Next.js modules
3. next-themes
4. Local modules (`@/*`)
5. Third-party modules

### Naming Patterns
- Section components: PascalCase (e.g., `Welcome.tsx`, `Council.tsx`)
- Data files: `{section}.data.tsx` pattern for type-safe static data
- Icons: Descriptive names with optional `-2` suffix for variants

### TypeScript
- Strict mode enabled
- `noImplicitAny: false` for flexibility
- Path aliases required for imports from `src/`

### Styling
- Use `cn()` utility from [src/lib/utils.ts](src/lib/utils.ts) for conditional classes (combines `clsx` + `tailwind-merge`)
- Prefer Tailwind classes over inline styles
- Use CSS variables for theme colors

## ESLint Configuration

The project uses ESLint 9 flat config with:
- TypeScript ESLint (recommended + stylistic type-checked)
- Next.js plugin (custom integration for flat config)
- React plugin with JSX runtime
- Import plugin
- Promise plugin

Many strict rules are disabled to accommodate rapid development and shadcn/ui examples. See [eslint.config.mjs:52-83](eslint.config.mjs#L52-L83) for the full list of disabled rules.

## Analytics & Monitoring

- **Umami Analytics**: Self-hosted at `umami.wslh.org` (script injected in root layout)
- **Cloudflare Insights**: Currently commented out in [src/app/(home)/layout.tsx:41-45](src/app/(home)/layout.tsx#L41-L45)
