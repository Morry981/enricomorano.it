# enricomorano.it - Personal Portfolio

## Project Overview

This project is the personal portfolio website for **Enrico Morano**, designed to showcase his professional journey, projects, and skills.

*   **Framework:** [Astro](https://astro.build) (v5.x)
*   **Rendering Strategy:** Server-Side Rendering (SSR) via `@astrojs/node`.
*   **Language:** TypeScript
*   **Styling:** Scoped CSS in Astro components + Global styles in Layouts.

## Directory Structure

*   `src/pages/`: Application routes. Astro uses file-based routing.
*   `src/layouts/`: Reusable page wrappers (e.g., `Layout.astro`).
*   `src/components/`: UI components (e.g., `Nav.astro`).
*   `src/types.ts`: Shared TypeScript interfaces.
*   `public/`: Static assets like `favicon.svg`.
*   `astro.config.mjs`: Astro configuration file.

## Getting Started

### Prerequisites

*   Node.js (LTS recommended)
*   `pnpm` (Project uses `pnpm-lock.yaml`)

### Installation

```bash
pnpm install
```

### Development Scripts

| Command | Description |
| :--- | :--- |
| `pnpm dev` | Starts the local development server at `http://localhost:4321` |
| `pnpm build` | Builds the project for production (output to `dist/`) |
| `pnpm preview` | Previews the production build locally |
| `pnpm astro` | Runs Astro CLI commands |

## Development Conventions

*   **Components:** Use `.astro` files for components. Keep logic in the frontmatter script (fence `---`).
*   **TypeScript:** Use TypeScript interfaces for component `Props`.
    ```typescript
    interface Props {
      title?: string;
    }
    const { title } = Astro.props;
    ```
*   **Styling:** Prefer scoped styles within the `<style>` block of components. Use `<style is:global>` only when necessary in Layouts.
*   **SSR:** The project is configured for SSR (`output: 'server'`). Ensure code running in components is safe for server execution (or strictly client-side if using `client:*` directives, though none are currently in use).

## Deployment

The project uses the `@astrojs/node` adapter in `standalone` mode, meaning the build produces a Node.js server entry point.
