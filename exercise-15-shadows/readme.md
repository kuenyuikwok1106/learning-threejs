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

how to avtivate shadow ?
1. enable shadowMap in renderer
   renderer.shadowMap.type: 
      THREE.BasicShadowMap: Very performant but lousy quality
      THREE.PCFShadowMap: Less performant but smoother edges
      THREE.PCFSoftShadowMap: Less performant but even softer edges
      THREE.VSMShadowMap: Less performant, more constraints, can have unexpected results
2. decide can each object castShadow
3. decide can each object receiveShadow
4. activate castShadow on different lights
    a. light.shadow is the information about the created shadowMaps
   b. can enhance shadow quality by increasing the shadow map width and height.
    c. but it has to be power of 2 !

Principle:
    Under the hood, threejs cast the light source as a camera,
        and render the light from the camera point.
    USE A `new THREE.CameraHelper(directionalLight.shadow.camera)` to help visualize light source


Shadows for Directional Light
1. enable to castShadow
2. adjust shadow map size for better shadow resolution, but it has to be power of 2
3. uses OrthographicCamera under the hood, so we need to configure camera bottom, top, left, right property
   smaller the value, greater the resolution, but too small will crop the shadow
4. directionalLight.shadow.radius to BLUR the shadow edge


Shadows for SpotLight and Point Light
1. enable to castShadow
2. set position, add spotLight and spotLight.target to the scene
3. adjust shadow map size for better shadow resolution, but it has to be power of 2
4. uses PerspectiveCamera under the hood, so we need to configure the fov property



Baking shadows 
1. Shadows are integrated into textures that we apply on materials.


