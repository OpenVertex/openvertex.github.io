# OpenVertex Official Website

> We Build The Future of Open Source.

![OpenVertex Banner](https://img.shields.io/website?url=https%3A%2F%2Fopenvertex.github.io%2F&label=Status&style=for-the-badge)
![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/OpenVertex/openvertex.github.io/deploy.yml?style=for-the-badge)

A Geek-style official website for OpenVertex organization, featuring Matrix/Terminal aesthetics, Glitch effects, and dynamic member showcase.

**Live Demo:** [https://openvertex.github.io/](https://openvertex.github.io/)

## 🚀 Tech Stack

- **Framework:** React + TypeScript + Vite
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** GitHub Pages (via GitHub Actions)

## 🛠️ Features

- **Matrix Rain Background:** Custom canvas implementation of the classic digital rain effect.
- **Glitch Text Effects:** Cyberpunk-inspired text animations.
- **Dynamic Team Section:** Automatically fetches and displays organization members from GitHub API.
- **Responsive Design:** Fully optimized for mobile, tablet, and desktop.
- **Dark Mode:** Immersive dark theme with neon green accents.

## 📦 Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/OpenVertex/openvertex.github.io.git
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## 🚢 Deployment

This project is configured to automatically deploy to GitHub Pages when changes are pushed to the `main` branch.

- **Workflow:** `.github/workflows/deploy.yml`
- **Configuration:** `vite.config.ts` (base: '/')

## 📄 License

MIT © OpenVertex
