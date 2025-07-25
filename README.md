# supreeme group Scroll Experience

This project is a scroll-driven experience build with Next.js (Typescript), GSAP, Framer Motion and TailwindCSS. It shows different car parts with video playback controlled by scroll. It also has animated text transitions and clean, responsive design.

## Project Setup Instructions

1. Clone the repo
```bash
git clone https://github.com/I-Vishal-Kumar/supreme-group.git
cd to the directory
```

2. Install dependencies
```bash
npm install
```

3. Run the dev server
```bash
npm run dev
```

## Component Architecture Overview

- `HeroSection.tsx` – Shows the intro text with animation. On scroll or click, user goes to next section.
- `ScrollControlledVideo.tsx` – Section with pinned scroll behavior, scrubs through video as user scrolls. Has part selector and animated left text.
- `Header`, `Footer`, `ContactForm` – Basic layout components. They are responsive and clean.

## Responsive Design Strategy

Used TailwindCSS breakpoints and `flex` utilities to make layout adapt to different screens. Buttons and text adjust sizes. Layout becomes single column on mobile.

## Performance Optimization Techniques

- Video lazy loading with `preload="auto"`.
- GSAP animations scoped with context to avoid memory leaks.
- `AnimatePresence` used for minimal and smooth component changes.
- Avoided heavy logic inside animation lifecycle.

## Accessibility Considerations

- Used semantic html and screen reader friendly tags.
- Buttons are keyboard usable.
- Background video is muted and doesn't auto play with sound.

## Third-Party Libraries Used

- **GSAP + ScrollTrigger** – For scroll control and pinning
- **Framer Motion** – For animating components and transitions
- **TailwindCSS** – For styling and layout
- **React Icons** – For icons if needed

## Assumptions Made and Decisions Taken

- Videos will be changed based on scroll or button click.
- All videos are local files for now.
- Scroll triggers video rather than play/pause button.
- Left side shows current/prev/next texts which update based on current video.

## Challenges Faced and Potential Solutions

### Scroll Syncing with Video

It was hard to get scroll position in sync with video playback. Sometimes video wasn't ready or didn't update in time.

**Solution:** We used `video.readyState >= 2` check and synced `video.currentTime` with GSAP scroll progress. That made it smoother.

### Left Text Transition

We needed to show current, next and previous vehicle type info with transition animations.

**Solution:** Used AnimatePresence and Motion divs. Also calculated index of current part to get prev and next.

### Playing Video Only When In View

Videos shouldn’t keep playing when not on screen.

**Solution:** Used IntersectionObserver to pause video when section is out of viewport.

## Suggested Upcoming Features

- Language change feature (Translate button)
- Add backend support for Contact form
- Add scroll progress bar on side
- Track which part is viewed most (analytics)

## Additional Notes

We followed a simple component structure. CSS was written with tailwind. Animations done with GSAP and Framer. Layout is responsive. It can work as a landing page or a product explorer site.