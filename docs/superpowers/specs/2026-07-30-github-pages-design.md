# GitHub Pages Deployment Design

## Goal

Publish the existing Fluffy Lineup portfolio as a persistent GitHub Pages site
at `https://yuriknight01-web.github.io/fluffy-lineup-portfolio/`.

## Architecture

- Keep the current vinext/Sites build unchanged for the existing production URL.
- Add a separate `build:pages` script that runs Next.js static export.
- Apply `/fluffy-lineup-portfolio` as `basePath` and `assetPrefix` only when
  `GITHUB_PAGES=true`, so local development and Sites hosting remain unchanged.
- Deploy the generated `out/` folder through the official GitHub Pages Actions.
- Trigger deployment on pushes to `main` and through manual workflow dispatch.

## Success criteria

- `next build` produces `out/index.html`.
- Exported HTML references assets beneath `/fluffy-lineup-portfolio/`.
- The existing vinext production build and rendered HTML tests still pass.
- GitHub Pages publishes automatically from `main`.
- The repository remains the single source of truth.

## Failure behavior

If a static export fails, the Pages workflow stops before deployment and the
previous successful Pages version remains online.
