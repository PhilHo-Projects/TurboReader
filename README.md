# Turbo Reader

[Try it here!](https://philippeho.popnux.com/turboreader/)

A high-performance **Rapid Serial Visual Presentation (RSVP)** reader designed for speed and efficiency. Built with a bold **Neo-Brutalist** aesthetic and deployed as a static site behind Nginx.

![Turbo Reader Preview](preview.png)

## Features

- **RSVP Reading Engine:** Blitz through text one word at a time with Optimal Recognition Point (ORP) highlighting.
- **Interactive Visualizer:** See the full context on the side. Click any word to jump exactly where you want to be.
- **Variable WPM:** Tune your speed from a comfortable 300 to a blistering 900+ WPM.
- **Drag & Drop:** Simply drop any `.txt` or `.md` file to start reading immediately.
- **Neo-Brutalist UI:** A heavy, high-contrast, and ultra-readable interface.
- **Responsive Design:** Works on desktop and tablet.

## Tech Stack

- **Vite** for bundling and static builds
- **Tailwind CSS** for styling
- **PostCSS** for CSS processing
- **Vanilla JS** for the reader logic

## Getting Started

1. **Clone the repo:**
   ```bash
   git clone https://github.com/PhilHo-Projects/TurboReader.git
   ```
2. **Install dependencies:**
   ```bash
   npm ci
   ```
3. **Run locally:**
   ```bash
   npm run dev
   ```

## Deployment

- Production is served from `https://philippeho.popnux.com/turboreader/`.
- `npm run build` emits a static bundle configured for the `/turboreader/` subpath.
- The GitHub Actions workflow deploys `dist/` to the Ubuntu server and reloads Nginx.

---

*Entirely vibe-coded with Google Antigravity using Gemini 3.0 Flash.*
