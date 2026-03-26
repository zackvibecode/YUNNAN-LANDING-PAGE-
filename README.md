# Yunnan Landing Page

Static landing page for the Nusa Travel Yunnan campaign.

## Structure

- `index.html` - production landing page
- `assets/images/` - images used by the live page
- `scripts/` - utility scripts for rebuilding or adjusting the page
- `docs/reference/pdfs/` - source PDF references
- `docs/reference/text/` - extracted text references
- `docs/raw-images/` - raw source images from the working process

## Common commands

- `npm install` - install local dependencies
- `npm run pdf:read` - extract text from the reference PDF
- `npm run build:html` - regenerate `index.html`
- `npm run fix:html` - run HTML cleanup helpers
- `npm run fix:colors` - align color tokens and logo references
