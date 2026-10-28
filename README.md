# 3D Interactive Glassmorphism Clock

A stylish, modern digital clock featuring a frosted glass UI, fluid background animations, and an interactive 3D parallax depth effect that tracks mouse movement. Built purely with HTML, CSS, and Vanilla JavaScript.

## Features

* **3D Mouse Parallax**: The clock tilts and shifts shadows dynamically as you move your cursor across the screen, utilizing CSS 3D transforms (`translateZ`, `perspective`).
* **Glassmorphism UI**: High-quality frosted glass effect built with `backdrop-filter`, semi-transparent borders, and inner shadows.
* **Animated Gradient Background**: A fluid, slow-moving radial gradient background loop that enhances the translucent glass effect.
* **Smooth Analog Second Tracker**: A neon dot travels continuously along the outer rim at 60 frames per second using `requestAnimationFrame`.
* **12H / 24H Toggle**: Integrated custom toggle switch to seamlessly transition between 12-hour (AM/PM) and 24-hour time formats.

## Tech Stack

* **HTML5**: Semantic structure.
* **CSS3**: Variables, Flexbox layout, Keyframe animations, 3D Transforms, Backdrop-filter.
* **JavaScript (ES6)**: DOM manipulation, Date API, Mouse event tracking.

## Usage

1. Clone or download this repository.
2. Ensure `index.html`, `style.css`, and `script.js` are in the same directory.
3. Open `index.html` in any modern web browser (Chrome, Edge, Firefox, Safari).
4. Move your mouse around the browser window to see the 3D depth effect. Click the switch at the bottom of the clock to toggle time formats.
