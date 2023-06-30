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

Materials
    put a color on each visible pixel of the geometries.
    algorithms that decide on the color of each pixel are written in programs called shaders

MeshBasicMaterial
    applies a uniform color or a texture on our geometry
    map property will apply a texture on the surface
    color property will apply a uniform color on the surface of the geometry. 

AlphaMao
    control opacity of mesh with transparent true

MeshNormalMaterial
    Usage of Normals:
        how to illuminate the face
        how the environment should reflect on the geometries' surface.
        how the environment refract on the geometries' surface.
    