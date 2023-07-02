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

Geometry
    composed of vertices (point coordinates in 3D spaces), and
    faces (triangles that join those vertices to create a surface).
    use to create Meshed, particles etc

built-in geometries inherit from the BufferGeometry class.

wireframe property from MeshMaterial shows geometric triangle

Creating own Geometry Buffer
    - by instantiating an empty BufferGeometry
    - define each vertices into an array
    - turn array to a BufferAttribute for the geometry
    - put it into a mesh with material