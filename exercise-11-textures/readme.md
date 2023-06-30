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

Textures
    images that will cover the surface of your geometries

Color (or albedo)
    easiest texture
    only take the pixels of the texture and apply them to the geometry.

Alpha
    grayscale image
    white will be visible, and black won't.

Height
    grayscale image
    will move the vertices to create some relief.
    You'll need to add subdivision if you want to see it.

Normal
    add small details
    won't move the vertices, but it will lure the light into thinking that the face is oriented differently
    useful to add details with good performance

Ambient occlusion
    grayscale image
    create fake shadow in the surface's crevices
    not physically accurate but help create contrast

Metalness
    grayscale image
    help create metallic reflection
    metallic (white) and non-metallic (black)

Roughness
    grayscale image
    help dissipate the light
    rough (white) and smooth (black)

PBR - Physically Based Rendering
    tend to follow real-life directions to get realistic results.
    e.g. the metalness and the roughness


How to load textures ?
    - load the image
        -> native JS: new Image();
        -> TextureLoader:
            textureLoader.load(
                imgSrc,
                () => loadedFunction,
                () => progressingFunction,
                () => errorFunction
            )
            to handle nicely, we can build a `LoadingManager` and define different callback functions for different state
            implement the LoadingManager to each Loader so they share those callbacks

LoadingManager is recommended to control asset loading state

UV unwrapping
    textures get stretched or squeezed in different ways to cover the geometry.
    All geometry has its UV 2D coordinates
        unwrapping an object to make it flat
        Threejs Geometry is defined by Threejs
        self-defined Geometry need to define ourselves

we can repeat, offset, rotate textures
    rotate based on (0,0) coordinate, not the center of the mesh

Filtering and Mipmapping
    a technique that consists of creating half a smaller version of a texture
        to help reduce level of details at large distances
    however, when the pixels of texture are smaller than the pixels of the render.
    ARTIFACTS !
    it is called `moiré patterns` and should avoid them.
    Only use the mipmaps for the minFilter property.

Preparing own Texture
    1. Weight
        PNG is better than JPEG, but also larger in file size as it has opacity channel
        try to make it as light as possible
    2. Size
        dimensions better be a power of 2, because of the Mipmapping technique
    3. data
        better use PNG xD

