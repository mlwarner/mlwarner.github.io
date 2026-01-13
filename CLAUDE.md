# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal blog/portfolio site built with VitePress and deployed to GitHub Pages. The site showcases technical articles and projects.

## Architecture

### VitePress Static Site Generator

- **Framework**: VitePress (Vue-based static site generator)
- **Content Location**: All markdown content files are in `docs/` directory
- **Configuration**: `docs/.vitepress/config.mts` contains site configuration including:
  - Site metadata (title, description)
  - Navigation menu structure
  - Theme settings (social links, edit links, outline depth)
  - Vite server configuration (host: true for network access)

### Build Output

- Build artifacts are generated to `docs/.vitepress/dist/`
- This directory contains the static HTML/CSS/JS that gets deployed to GitHub Pages
- Do not modify files in `dist/` or `cache/` directories - they are generated

### Deployment Pipeline

- **Trigger**: Automatic deployment on push to `main` branch
- **Workflow**: `.github/workflows/deploy.yml`
- **Process**:
  1. Build with `npm run docs:build`
  2. Upload `docs/.vitepress/dist/` as artifact
  3. Deploy to GitHub Pages
- **Node Version**: 20 (specified in workflow)

## Commands

### Development
```bash
npm run docs:dev
```
Starts local dev server with hot reload. Site will be accessible on local network (configured via `vite.server.host: true`).

### Build
```bash
npm run docs:build
```
Builds the site for production. Output goes to `docs/.vitepress/dist/`.

### Preview
```bash
npm run docs:preview
```
Preview the production build locally.

## Content Management

### Adding New Pages

1. Create a new `.md` file in the `docs/` directory
2. Add navigation link in `docs/.vitepress/config.mts` if needed (in `themeConfig.nav` array)
3. VitePress automatically generates routes based on file structure

### Current Content Structure

Blog posts and pages include technical articles about:
- Cloud infrastructure (CloudFront/S3 hosting)
- API development (Valorant rank API)
- Example/template pages (markdown-examples, api-examples)

## Dependencies

- **Main Dependency**: vitepress ^1.6.4
- **Override**: esbuild ^0.25.12 (security/compatibility fix)
- **Dependency Management**: Dependabot configured for weekly npm updates
