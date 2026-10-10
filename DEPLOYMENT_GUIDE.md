# Portfolio Website - Setup & Deployment Guide

## Overview
This is a responsive portfolio website built with **Vite + React 19**, featuring Framer Motion animations, dark/light mode, project filtering, and data-driven content management.

---

## Quick Start

### Prerequisites
- **Node.js** 20.19+ or 22.12+ (required by Vite 8)
- **npm** 9+ (comes with Node.js)
- **Git** (for version control)

### Local Development

```bash
# 1. Navigate to project directory
cd portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

**Access your site at:** http://localhost:5173

### Available Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Production build (outputs to `dist/`) |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run Oxlint |

---

## Project Structure

```
portfolio/
├── public/                 # Static assets (favicon, images)
├── src/
│   ├── components/         # React components
│   │   ├── Header.jsx      # Navigation + theme toggle
│   │   ├── Hero.jsx        # Landing section with typewriter
│   │   ├── About.jsx       # Bio, stats, strengths, certificate gallery
│   │   ├── Projects.jsx    # Filterable project grid
│   │   ├── Skills.jsx      # Expandable, categorized skill lists
│   │   ├── Experience.jsx  # Timeline (work + education)
│   │   ├── Contact.jsx     # Form + contact links
│   │   ├── Footer.jsx      # Social links + copyright
│   │   └── Icons.jsx       # Custom brand icons (GitHub, LinkedIn, etc.)
│   ├── context/
│   │   └── ThemeContext.jsx # Dark/light mode state
│   ├── hooks/
│   │   └── useIntersectionObserver.js # Scroll animations, media queries
│   ├── data/
│   │   └── portfolio.json  # ALL CONTENT - edit this to update site
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Design tokens + global styles
├── index.html              # SEO meta tags, structured data
├── package.json
├── vite.config.js
└── README.md
```

---

## Customizing Content

**All content lives in `src/data/portfolio.json`** - no code changes needed for updates.
Certificate images are stored in `public/certificates/`; each certification entry references its image from there.

### Key Sections to Edit

```json
{
  "name": "Your Name",
  "title": "Your Title",
  "email": "your@email.com",
  "location": "City, Country",
  "linkedin": "https://linkedin.com/in/yourprofile",
  "github": "https://github.com/yourusername",
  "summary": "Professional summary...",
  "education": [...],
  "experience": [...],
  "projects": [
    {
      "id": 1,
      "name": "Project Name",
      "tagline": "Short description",
      "description": "Full description...",
      "tech": ["React", "Python", "AI"],
      "category": "AI/ML",
      "featured": true,
      "github": "https://github.com/...",
      "demo": "https://demo-url.com"
    }
  ],
  "skills": {
    "Category Name": ["Skill1", "Skill2", "Skill3"]
  },
  "certifications": [
    {
      "name": "Workshop Name",
      "issuer": "Organization",
      "image": "/certificates/certificate-image.jpg"
    }
  ],
  "strengths": [...],
  "languages": [...]
}
```

### Adding/Removing Projects
1. Edit the `projects` array in `portfolio.json`
2. Each project needs: `id`, `name`, `tagline`, `description`, `tech[]`, `category`, `featured`, `github`, `demo`
3. Categories auto-populate in the filter tabs

### Project links
Leave `github` and `demo` empty until you have real URLs. The portfolio hides unavailable links instead of sending visitors to placeholder destinations.

---

## Deployment to Vercel (Recommended)

### Method 1: Vercel CLI (Fastest)

```bash
# 1. Install Vercel CLI globally
npm i -g vercel

# 2. Login to Vercel
vercel login

# 3. Deploy from project root
cd portfolio
vercel

# 4. Follow prompts:
#    - Set up and deploy? Yes
#    - Which scope? Your account
#    - Link to existing project? No
#    - Project name: your-portfolio
#    - Directory: ./
#    - Override settings? No
```

**Your site will be live at:** `https://your-portfolio.vercel.app`

### Method 2: GitHub + Vercel Dashboard (Best for CI/CD)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/portfolio.git
   git push -u origin main
   ```

2. **Import on Vercel:**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Import Git Repository"
   - Select your `portfolio` repo
   - Vercel auto-detects Vite settings
   - Click **Deploy**

3. **Automatic Deployments:**
   - Every push to `main` → production deploy
   - Every PR → preview deploy with unique URL

### Method 3: Drag & Drop (No CLI)

1. Run `npm run build` locally
2. Go to [vercel.com/new](https://vercel.com/new)
3. Drag the `dist/` folder onto the page
4. Deploy!

---

## Vercel Configuration (Optional)

Create `vercel.json` in project root for custom settings:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ],
  "headers": [
    {
      "source": "/assets/(.*)",
      "headers": [
        { "key": "Cache-Control", "value": "public, max-age=31536000, immutable" }
      ]
    }
  ]
}
```

---

## Environment Variables (If Needed)

For contact forms or APIs, add in Vercel Dashboard → Settings → Environment Variables:

| Variable | Description |
|----------|-------------|
| `VITE_CONTACT_ENDPOINT` | Formspree/Netlify Forms endpoint |
| `VITE_GA_ID` | Google Analytics measurement ID |

Access in code: `import.meta.env.VITE_CONTACT_ENDPOINT`

---

## Custom Domain

1. Vercel Dashboard → Your Project → Settings → Domains
2. Add your domain (e.g., `vignesh-varsha.dev`)
3. Configure DNS:
   - **A Record:** `@` → `76.76.21.21`
   - **CNAME:** `www` → `cname.vercel-dns.com`
4. Vercel provisions SSL automatically

---

## Performance Checklist (Pre-Deploy)

- [ ] Run `npm run build` - verify no errors
- [ ] Test `npm run preview` - check production build locally
- [ ] Verify all images have `width`/`height` (CLS prevention)
- [ ] Check Lighthouse score (>90 target)
- [ ] Test dark/light mode toggle
- [ ] Verify contact form validation
- [ ] Test on mobile viewport
- [ ] Confirm SEO meta tags in `index.html`

---

## Troubleshooting

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Vercel Build Errors
- Check Node version matches (add `"engines": { "node": ">=18" }` to package.json)
- Ensure `package.json` has correct `build` script
- Verify no `console.log` in production code

### Styles Not Loading
- Ensure `index.css` is imported in `main.jsx`
- Check Vercel build logs for CSS errors

### Animations Lag
- Reduce `transition` durations in `index.css`
- Check `prefers-reduced-motion` is respected

---

## Updating After Deploy

### Content Changes Only
1. Edit `src/data/portfolio.json`
2. Commit & push to GitHub
3. Vercel auto-deploys

### Code Changes
1. Make changes locally
2. Test with `npm run dev`
3. Build: `npm run build`
4. Push to GitHub → auto-deploy

---

## Useful Links

- [Vite Docs](https://vitejs.dev/)
- [React Docs](https://react.dev/)
- [Framer Motion](https://www.framer.com/motion/)
- [Vercel Docs](https://vercel.com/docs)
- [Lucide Icons](https://lucide.dev/)

---

## Support

For issues:
1. Check browser console for errors
2. Review Vercel build logs
3. Verify `portfolio.json` syntax (valid JSON)
4. Ensure all imports resolve correctly

---

*Generated for Devarakonda Vignesh Varsha's AI/ML Portfolio*
*Last updated: 2026*