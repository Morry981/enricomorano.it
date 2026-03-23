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

*   **Indentation:** Use exactly **4 spaces** for all files.
*   **Language:** 
    *   User-facing content and comments explaining logic: **Italian**.
    *   Code symbols (variables, functions, classes), filenames, and routes: **English**.
*   **Tech Stack:** Astro v5, Tailwind CSS v4, Vue.js 3, VueUse/Motion for animations.
*   **Components:** Use `.astro` files for layouts/pages and Vue components for interactive UI elements. Keep logic in the frontmatter script (fence `---`) for Astro files.
*   **TypeScript:** Use TypeScript interfaces for component `Props`.
    ```typescript
    interface Props {
        title?: string;
    }
    const { title } = Astro.props;
    ```
*   **Styling:** Use **Tailwind CSS v4** utility classes. Define custom theme variables in `src/styles/global.css`.
*   **SSR:** The project is configured for SSR (`output: 'server'`).

## Deployment

The project uses the `@astrojs/node` adapter in `standalone` mode, meaning the build produces a Node.js server entry point.
