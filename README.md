# Salvi Keele — Portfolio

A modern React portfolio site for front-end developer & designer Salvi Keele.

## Stack

- **React 19** + **TypeScript**
- **Vite** for fast development and builds
- **Tailwind CSS v4** for styling
- **Framer Motion** for scroll animations
- **Lucide React** for icons

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the site.

## Build

```bash
npm run build
npm run preview
```

## Customization

- **Projects & stats** — edit `src/data/projects.ts`
- **Contact links** — update email and social URLs in `src/components/Footer.tsx`
- **Resume** — add your PDF to `public/resume.pdf`
- **Profile photo** — replace `public/images/salvi-headshot.png`

## Project Structure

```
src/
├── components/     # UI sections (Navbar, Hero, FeaturedWork, etc.)
├── data/           # Portfolio content
├── App.tsx         # Page layout
└── index.css       # Global styles & design tokens
```
