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

When a screen resize happen:
    update size
    update camera aspect ratio
    updating camera aspect ratio also needs to update project matrix
        `camera.updateProjectionMatrix()`
    update renderer


pixelRatio higher than 2 canot bring any visual difference to user
