# PRISM Lab Website

Frontend-only React website for PRISM Lab, IIT Guwahati.
No backend required. Free to host on Netlify or GitHub Pages.

## 🚀 Run Locally

```bash
npm install
npm run dev
```

Then open: http://localhost:5173

## 📸 Adding Photos

1. Copy your images to the `public/images/` folder
2. The director photo should be named: `satyajit-das.jpg`
   - Path: `public/images/satyajit-das.jpg`

## ✏️ Updating Content

All content is in one file: `src/data/index.js`

- **News** → edit `newsItems` array
- **Students** → edit `students` array
- **Publications** → edit `publications` array
- **Funded Projects** → edit `fundedProjects` array
- **Director info** → edit `director` object

## 🌐 Free Hosting on Netlify

1. Run `npm run build`
2. Go to https://netlify.com
3. Drag and drop the `dist/` folder
4. Done! Your site is live for free.
