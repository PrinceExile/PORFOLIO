# Vignesh Varsha — Portfolio

A responsive portfolio for AI/ML and software projects, built with React, Vite, Framer Motion, and Lucide.

## Requirements

- Node.js 18 or newer
- npm 9 or newer

Check your versions:

```bash
node --version
npm --version
```

## Run locally

Open a terminal in this folder:

```bash
npm install
npm run dev
```

Open the URL printed by Vite, usually:

```text
http://localhost:5173
```

The development server automatically reloads when you edit the source files.

To stop it, press `Ctrl + C` in the terminal.

## Checks

```bash
npm run lint
npm run build
npm run preview
```

`npm run preview` serves the production build locally, so run `npm run build`
before using it.

## Update portfolio content

Edit [`src/data/portfolio.json`](./src/data/portfolio.json) to change the biography, education, experience, project descriptions, skills, certifications, and contact details.

Static files are stored in [`public/`](./public/):

- `public/assets/` — resume and profile assets
- `public/certificates/` — certificate images
- `public/projects/` — project preview images

Files inside `public/` are referenced from the website using paths beginning
with `/`, for example `/assets/Devarakonda_Vignesh_Varsha_Resume.pdf`.

## Deploy to Vercel

### Using the Vercel CLI

```bash
npm install -g vercel
vercel login
vercel
```

Follow the prompts and accept the detected Vite settings.

### Using GitHub

1. Push this project to a GitHub repository.
2. Open [vercel.com/new](https://vercel.com/new).
3. Import the repository.
4. Keep the default Vite settings and click **Deploy**.

For detailed deployment, domain, and troubleshooting instructions, see
[`DEPLOYMENT_GUIDE.docx`](./DEPLOYMENT_GUIDE.docx) or
[`DEPLOYMENT_GUIDE.md`](./DEPLOYMENT_GUIDE.md).
