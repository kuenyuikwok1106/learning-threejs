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

Ambient Light
    applies omnidirectional lighting on all geometries of the scene
    all faces of the geometries will be lit equally
    color property and intensity property

DirectionalLight
    rays come from an infinite space and travel in parallel to the infinite opposite.
    cast ray position to change the ray direction

PointLight
    light source is infinitely small
    light spreads uniformly in every direction
    color and intensity property
        set position to change light source position
    distance and decay property

RectAreaLight
    directional light + diffuse light.
    color, intensity, width, height
    only works for MeshStandardMaterial and MeshPhysicalMaterial.
    can rotate, position or even use lookAt()

SpotLight
    cone of light starting at a point and oriented in a direction
    color: the color
    intensity: the strength
    distance: the distance at which the intensity drops to 0
    angle: how large is the beam
    penumbra: how diffused is the contour of the beam
    decay: how fast the light dims

Minimal cost:
    AmbientLight
    HemisphereLight
Moderate cost:
    DirectionalLight
    PointLight
High cost:
    SpotLight
    RectAreaLight

use lightHelper if needed
    HemisphereLightHelper
    DirectionalLightHelper
    PointLightHelper
    RectAreaLightHelper
    SpotLightHelper

