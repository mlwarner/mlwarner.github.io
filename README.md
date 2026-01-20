# mlwarner.github.io

Personal blog and portfolio site built with Docusaurus and deployed to GitHub Pages.

## About

This site showcases technical articles about cloud infrastructure, API development, and software engineering projects.

## Technology Stack

- **Framework**: Docusaurus 3.9 (React-based static site generator)
- **React**: 19.2.3
- **Deployment**: GitHub Pages (automatic deployment on push to `main`)
- **Node Version**: >=18.0

## Development

### Quick Start

Install dependencies:
```bash
npm install
```

Start the development server:
```bash
npm start
```

The site will be available at `http://localhost:3000` with hot reload enabled.

### Available Commands

- `npm start` - Start local development server
- `npm run build` - Build for production (output to `build/` directory)
- `npm run serve` - Preview the production build locally
- `npm run clear` - Clear Docusaurus cache and generated files

## Content Structure

- **Blog posts**: `blog/` directory (format: `YYYY-MM-DD-slug.md`)
- **Documentation**: `docs/` directory
- **Custom pages**: `src/pages/` directory
- **Blog authors**: `blog/authors.yml`
- **Configuration**: `docusaurus.config.js`

## Deployment

The site automatically deploys to GitHub Pages when changes are pushed to the `main` branch via GitHub Actions (`.github/workflows/deploy.yml`).

## More Information

See [CLAUDE.md](CLAUDE.md) for detailed guidance on working with this codebase.

