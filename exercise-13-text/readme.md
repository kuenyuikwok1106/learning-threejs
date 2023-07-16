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

Three.js already supported text geometry.
But we need font family file

How to get font file
1. convert using https://gero3.github.io/facetype.js/
2. find fonts in the Three.js examples located in the /node_modules/three/examples/fonts/
    and import to static/fonts folder


How to show text?
1. use FontLoader
2. load the font in onSuccess callback function and add it to the scene

Creating a text geometry is long and hard for the computer.
keep the geometry as low poly as possible
    reduce the curveSegments and bevelSegments properties.

Centering Text
the TextGeometry is actually wrapped by a sphere by default.
turn the wrapper to be a box by calling computeBoundingBox()
translate using textGeometry.translate(x, y, z) || textGeometry.center() to center it
