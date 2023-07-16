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
    applies a UNIFORM color or a texture on our geometry
    map property will apply a texture on the SURFACE of the geometry
    color property will apply a UNIFORM color on the SURFACE of the geometry.
    wireframe property will show the triangles that compose the geometry
    transparent and opacity property to control transparency
    transparent and alphaMap property to control transparency too
    side property decides which side of a face is visible. <FrontSide || BackSide || DoubleSide >


MeshNormalMaterial
    straight lines comings out of each vertex that composes your geometry
        contains information encoded in each vertex about direction of the outside of the face.
    Usage of Normals:
        how to illuminate the face
        how the environment should reflect on the geometries' surface.
        how the environment refract on the geometries' surface.
    color will just display the normal relative's orientation to the camera.
    flatShading property will flatten the faces, normals won't be interpolated between vertices.

MeshMatcapMaterial < fantastic and performant >
    meshes will appear illuminated, but illusion is the same regardless of the camera orientation. 

MeshDepthMaterial
    color the geometry in white if it's close to the camera's near value
    black if it's close to the far value of the camera

// Material that needs light to render

MeshLambertMaterial
    most performant material that uses lights.
    similar to MeshBasicMaterial but react with light
    may see strange patterns on the geometry if you look closely at rounded geometries like the sphere.

MeshPhongMaterial
    similar to MeshLambertMaterial
        less performant
        but less strange patterns too
        also see the light reflection on the surface of the geometry
    shininess property control how shiny the surface will be
    specular property control reflection color

MeshToonMaterial
    similar to MeshLambertMaterial
        CARTOON style
    relate to filters and mipMaps on how to show the greyscale properly

MeshStandardMaterial
    PBR - Physically Based Rendering
    can apply the roughness and the metalness properties directly
map property allows you to apply a simple texture.


Debug
    npm install --save lil-gui
aoMap property will add shadows where the texture is dark.
aoMapIntensity set the intensity of aoMap





