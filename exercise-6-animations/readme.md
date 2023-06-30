# Three.js Journey

## Setup
Download [Node.js](https://nodejs.org/en/download/).
Run this followed commands:

``` bash
# Install dependencies (only the first time)
npm install

# Run the local server at localhost:8080
npm run dev

# Build for production in the dist/ directory
npm run build
```

I move the object, it renders.
I move more, it renders more.
More render, faster movement.


If we want the movement execute in each frame rate, we need `window.requestAnimationFrame(...)` method.
It will execute the function you provide on the *next* frame.

However, different computer may have different frame rate.
but we want consistent update!
    So we use time to controle how much it moves, instead of frame rate
    `THREE.Clock()`
