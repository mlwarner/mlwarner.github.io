# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal blog/portfolio site built with VitePress and deployed to GitHub Pages. The site showcases technical articles and projects.

## Architecture

### VitePress Static Site Generator

- **Framework**: VitePress 1.x (Vue-based static site generator)
- **Content Locations**:
  - Blog posts: `blog/` directory (format: `YYYY-MM-DD-slug.md`)
  - Homepage: `index.md` (uses VitePress home layout)
  - About page: `about.md`
- **Configuration**: `.vitepress/config.ts` contains site configuration including:
  - Site metadata (title, description)
  - Navigation menu structure (nav items)
  - Theme settings (footer, social links)
  - Edit link configuration for GitHub

### Theme Customization

- **Custom Theme**: `.vitepress/theme/index.ts` extends the default VitePress theme
- **Custom Styles**: `.vitepress/theme/custom.css` contains:
  - Brand color overrides (green/teal theme)
  - Blog post styling classes
  - Dark mode support

### Build Output

- Build artifacts are generated to `.vitepress/dist/` directory
- This directory contains the static HTML/CSS/JS that gets deployed to GitHub Pages
- Do not modify files in `.vitepress/dist/` or `.vitepress/cache/` directories - they are generated

### Deployment Pipeline

- **Trigger**: Automatic deployment on push to `main` branch
- **Workflow**: `.github/workflows/deploy.yml`
- **Process**:
  1. Build with `npm run build`
  2. Upload `.vitepress/dist/` directory as artifact
  3. Deploy to GitHub Pages
- **Node Version**: 20 (specified in workflow)

## Commands

### Development
```bash
npm run dev
```
Starts local dev server with hot reload at `http://localhost:5173`.

### Build
```bash
npm run build
```
Builds the site for production. Output goes to `.vitepress/dist/` directory.

### Preview
```bash
npm run preview
```
Preview the production build locally.

## Content Management

### Adding New Blog Posts

1. Create a new `.md` file in the `blog/` directory with format: `YYYY-MM-DD-slug.md`
2. Add frontmatter with title:
   ```yaml
   ---
   title: My Post Title
   ---
   ```
3. Add meta info and tags using HTML in the post body:
   ```html
   <div class="meta">January 10, 2024 · M Warner</div>
   <div class="tags">
     <span class="tag">tag1</span>
     <span class="tag">tag2</span>
   </div>
   ```
4. Update `blog/index.md` to include the new post in the listing

### Adding Custom Pages

1. Create a new `.md` file in the root directory
2. Add frontmatter with title:
   ```yaml
   ---
   title: Page Title
   ---
   ```
3. Add link to navigation in `.vitepress/config.ts` if needed

### Current Content Structure

- **Blog posts**: Technical articles about cloud infrastructure, API development, etc.
- **Custom pages**: About page, home page
- **Blog index**: Manual listing of posts at `/blog/`

## Dependencies

- **Core Dependencies**:
  - vitepress: ^1.6.3
- **Dependency Management**: Dependabot configured for weekly npm updates
