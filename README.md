# FindU — Cinematic Showcase

A premium, editorial, scroll-driven frontend showcase built around the original **FindU** investigation film (`assets/findu_cinematic_showcase.mp4`).

This experience introduces FindU's core mission: synthesizing scattered multi-camera CCTV feeds into coherent candidate timelines while keeping authorized human investigators strictly in control.

---

## Architecture & Experience Design

- **Engine:** Vite + React + TypeScript + Tailwind CSS
- **Timeline Synchronization:** Scroll position is mapped directly to the 60.0-second video timeline via requestAnimationFrame-throttled seeks, completely supporting bi-directional (forward and reverse) scrubbing without decoding backpressure.
- **Audio Control:** Starts muted by default in accordance with web accessibility standards; provides an explicit unmute/mute control in the persistent header.
- **Continuous Playback Mode:** Allows visitors to toggle between scroll scrubbing and continuous play at any point.
- **Accessible Navigation:** Complete keyboard support (Spacebar to toggle playback, `M` to toggle audio mute, Arrow keys to step 5s forward/backward, `Home` to return to start).
- **Responsive Layout:** Engineered and verified at 320px, 360px, 390px, 430px, 768px, 1024px, and 1440px viewports with zero horizontal overflow and letterboxed aspect preservation.

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

