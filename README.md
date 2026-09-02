# FMP Technology Services — Website

Modern rebuild of [fmp.com.do](https://fmp.com.do) — React 19 + Vite, fully bilingual (ES default · EN), white design system in FMP's blue brand colors with deep-navy interactive panels.

**Live preview:** https://axelfarina.github.io/fmp-website/

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:5173.

## Build for production

```bash
npm run build
```

Static output lands in `dist/` — deployable to any static host (Render, Netlify, Vercel, cPanel, etc.). Routing is hash-based (`#/productos/...`), so no server rewrite rules are needed.

## Structure

- `src/i18n.js` — all site copy (Spanish + English) except products
- `src/content/products.js` — the 13-product catalog, both languages
- `src/pages/` — Home, About (Nosotros), Services, Products, ProductDetail, Partnership, Contact
- `src/components/` — Nav (with products mega-menu), Footer, Splash intro, Globe, shared UI
- `src/index.css` — the whole design system
- `public/assets/img/` — imagery reused from the original fmp.com.do site

## Notes

- Content was migrated from the original WordPress site. The original "English" pages were mostly untranslated Spanish; proper English copy was authored for this rebuild.
- Partnership referral forms submit via formsubmit.co to alfredo.torres@fmp.com.do (same mechanism as the original site). Contact form and newsletter open a pre-filled email to comercial@fmp.com.do.
