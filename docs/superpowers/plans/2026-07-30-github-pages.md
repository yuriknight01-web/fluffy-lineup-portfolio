# GitHub Pages Deployment Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a persistent GitHub Pages deployment without changing the existing Sites build.

**Architecture:** Next.js performs a static export only when `GITHUB_PAGES=true`. An official GitHub Actions workflow uploads `out/` and deploys it to GitHub Pages after every push to `main`.

**Tech Stack:** Next.js 16, GitHub Actions, GitHub Pages

## Global Constraints

- Public URL path is exactly `/fluffy-lineup-portfolio`.
- Existing vinext build and Sites deployment behavior must remain unchanged.
- Pages deploys only from `main` or manual dispatch.

---

### Task 1: Static export contract

**Files:**
- Modify: `tests/rendered-html.test.mjs`
- Modify: `next.config.ts`
- Modify: `package.json`

- [ ] Add a test that requires a Pages build script and repository base path.
- [ ] Run the test and verify it fails because the configuration is absent.
- [ ] Add environment-gated `output`, `basePath`, and `assetPrefix`.
- [ ] Add `build:pages`.
- [ ] Run the test and both production builds.

### Task 2: GitHub Pages workflow

**Files:**
- Create: `.github/workflows/pages.yml`
- Modify: `tests/rendered-html.test.mjs`

- [ ] Add a test requiring the official configure, upload, and deploy actions.
- [ ] Run the test and verify it fails because the workflow is absent.
- [ ] Add the workflow with Pages permissions and `out/` artifact upload.
- [ ] Run all tests and the static export.
- [ ] Commit and push to `main`.
