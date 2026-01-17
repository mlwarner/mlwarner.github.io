# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal blog/portfolio site built with Docusaurus and deployed to GitHub Pages. The site showcases technical articles and projects.

## Architecture

### Docusaurus Static Site Generator

- **Framework**: Docusaurus 3.9 (React-based static site generator)
- **Content Locations**:
  - Blog posts: `blog/` directory (format: `YYYY-MM-DD-slug.md`)
  - Documentation: `docs/` directory
  - Custom pages: `src/pages/` directory
  - Blog authors: `blog/authors.yml`
- **Configuration**: `docusaurus.config.js` contains site configuration including:
  - Site metadata (title, description, URL)
  - Navigation menu structure (navbar items)
  - Theme settings (footer, social links, syntax highlighting)
  - GitHub Pages deployment settings (organizationName, projectName, deploymentBranch)
  - Markdown configuration

### Build Output

- Build artifacts are generated to `build/` directory
- This directory contains the static HTML/CSS/JS that gets deployed to GitHub Pages
- Do not modify files in `build/` or `.docusaurus/` directories - they are generated

### Deployment Pipeline

- **Trigger**: Automatic deployment on push to `main` branch
- **Workflow**: `.github/workflows/deploy.yml`
- **Process**:
  1. Build with `npm run build`
  2. Upload `build/` directory as artifact
  3. Deploy to GitHub Pages
- **Node Version**: 20 (specified in workflow)
- **Target Branch**: gh-pages

## Commands

### Development
```bash
npm start
```
Starts local dev server with hot reload at `http://localhost:3000`.

### Build
```bash
npm run build
```
Builds the site for production. Output goes to `build/` directory.

### Serve
```bash
npm run serve
```
Preview the production build locally.

### Clear Cache
```bash
npm run clear
```
Clear Docusaurus cache and generated files.

## Content Management

### Adding New Blog Posts

1. Create a new `.md` file in the `blog/` directory with format: `YYYY-MM-DD-slug.md`
2. Add frontmatter with metadata:
   ```yaml
   ---
   slug: my-post
   title: My Post Title
   authors: [mlwarner]
   tags: [tag1, tag2]
   ---
   ```
3. Add `<!--truncate-->` comment to mark where the preview should end
4. Blog posts automatically appear on the `/blog` page

### Adding New Documentation Pages

1. Create a new `.md` file in the `docs/` directory
2. Add frontmatter with sidebar position if needed:
   ```yaml
   ---
   sidebar_position: 1
   ---
   ```
3. Pages automatically generate routes based on file structure

### Adding Custom Pages

1. Create a new `.md` or `.js`/`.jsx` file in `src/pages/`
2. Markdown pages auto-generate routes
3. React pages can use Docusaurus components and themes

### Current Content Structure

- **Blog posts**: Technical articles about cloud infrastructure, API development, etc.
- **Custom pages**: About page, home page
- **Documentation**: Intro page

## Dependencies

- **Core Dependencies**:
  - @docusaurus/core: ^3.9.2
  - @docusaurus/preset-classic: ^3.9.2
  - react: ^18.3.1
  - react-dom: ^18.3.1
- **Styling**: clsx, prism-react-renderer
- **Markdown**: @mdx-js/react
- **Dependency Management**: Dependabot configured for weekly npm updates
