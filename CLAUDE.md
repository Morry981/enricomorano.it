# CLAUDE.md

## Project

Personal portfolio of Enrico Morano - Astro v5 (SSR), Vue 3, Tailwind CSS v4, TypeScript strict.

## Package Manager

Always use `pnpm`. Never use npm or yarn.

## Commands

- `pnpm dev` - dev server at http://localhost:4321
- `pnpm build` - production build to `dist/`
- `pnpm test` - unit tests (Vitest)
- `pnpm test:e2e` - E2E tests (Playwright, port 4322)

## After Every Code Change

Run `pnpm test` automatically without being asked.

## Conventions

- **Indentation:** 4 spaces everywhere.
- **Language:** User-facing content and explanatory comments → Italian. Code symbols, filenames, routes → English.
- **Comments:** Add only when logic is non-obvious. Never add trivial comments.
- **Components:** `.astro` for layouts/pages, `.vue` for interactive UI (`client:load` or `client:only="vue"`).
- **Styling:** Tailwind v4 utility classes. Custom theme variables live in `src/styles/global.css`.
- **TypeScript:** Define `interface Props` in Astro frontmatter. No implicit `any`.

## Never Do Without Explicit Request

- Refactor code not directly involved in the current task.
- Create new pages/routes under `src/pages/`.
- Deploy is not yet configured - do not suggest or run deploy commands.
