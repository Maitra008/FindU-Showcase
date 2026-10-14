# FindU | Cinematic Showcase

A premium, editorial, scroll-driven frontend showcase built around the original FindU investigation film (`assets/findu_cinematic_showcase.mp4`).

This experience introduces FindU's core mission: synthesizing scattered multi-camera CCTV feeds into coherent candidate timelines while keeping authorized human investigators strictly in control.

---

## Architecture & Experience Design

- **Engine:** Vite + React + TypeScript + Tailwind CSS
- **Scroll-Driven Motion:** Coordinated scroll-responsive typography, pinned visual narrative stages, and contextual progressive reveals powered by Framer Motion.
- **Cinematic Timeline Scrubbing:** Scroll position maps directly to the signature investigation film sequence using `requestAnimationFrame`-throttled playback updates with instant eager keyframe fallbacks.
- **Interactive Primitives:** Custom magnetic cursor, perspective tilt cards, smooth progress tracking, and animated data counters.
- **Responsive Layout:** Carefully tested across viewports from 320px mobile to 1440px desktop with zero layout shift or overflow.

---

## Verified Destinations

- **Technical Portal:** [https://find-u-portal-v2.vercel.app/](https://find-u-portal-v2.vercel.app/)
- **Detection Methodology:** [https://find-u-portal-v2.vercel.app/#methodology](https://find-u-portal-v2.vercel.app/#methodology)
- **Cosine Re-ID & Architecture:** [https://find-u-portal-v2.vercel.app/#architecture](https://find-u-portal-v2.vercel.app/#architecture)
- **Simulated Investigation:** [https://find-u-portal-v2.vercel.app/#investigation](https://find-u-portal-v2.vercel.app/#investigation)
- **Human Verification Safeguards:** [https://find-u-portal-v2.vercel.app/#validation](https://find-u-portal-v2.vercel.app/#validation)
- **Source Code Repository:** [https://github.com/Maitra008/FindU](https://github.com/Maitra008/FindU)

---

## Running Locally

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:3000/` in your browser.

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview the production build:**
   ```bash
   npm run preview
   ```