# susithemafk component library

This is my component library for React projects. Built with Vite, React, TypeScript, and Storybook.
Uses BEM methodology for styling. Built with accessibility in mind. Library and components are fully
typed and compatible with TypeScript.

[![npm version](https://img.shields.io/npm/v/@susithemafk/component-library.svg)](https://www.npmjs.com/package/@susithemafk/component-library)

**[Live Storybook](https://susithemafk.github.io/component-library)**

## Installation

```bash
npm i @susithemafk/component-library
```

## Usage

```tsx
import { Dialog } from '@susithemafk/component-library'
import '@susithemafk/component-library/dist/style.css'

const [open, setOpen] = useState(false)
const handleClose = () => setOpen(false)

return (
    <div>
        <button onClick={() => setOpen(true)}>Open Dialog</button>
        <Dialog open={open} onClose={handleClose} />
    </div>
)
```

## Local Development

```bash
git clone https://github.com/susithemafk/component-library.git
cd component-library
npm i
npm run dev
npm run storybook
```

## Publishing NPM Package and GitHub Package

Change version in `package.json` and push to main branch.

Github -> Releases -> Draft a new release -> Create new tag -> Publish.

## Storybook deployment

To have the storybook always running (deployed) on GitHub Pages, push to main branch.

## Project Info

### Side effects

Side effects are enabled for CSS and SCSS. Ensures that styles are included in the final build.
Bundler shouldn't remove any styles.

```json
"sideEffects": [
	"**/*.css",
	"**/*.scss"
],
```

### BEM methodology

Styles are written using BEM methodology which ensures that the styles are scoped to the component
but also easily overridable by the user without need to use !important statements.
