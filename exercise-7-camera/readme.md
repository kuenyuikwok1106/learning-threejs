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
ArrayCamera
    render your scene multiple times by using multiple cameras
    Each camera will render a specific area of the canvas
    like old school console multiplayer games where we share split-screen

StereoCamera
    render the scene through two cameras that mimic the eyes in order to create what we call a parallax effect.
    You must have the adequate equipment like a VR headset or red and blue glasses to see the result.

CubeCamera
    used to get a render facing each direction
    (forward, backward, leftward, rightward, upward, and downward)
    to create a render of the surrounding

OrthographicCamera
    renders of your scene without perspective
    Elements will have same size on the screen regardless of their distance from the camera
    e.g. Age of Empire

PerspectiveCamera
    simulated a real-life camera with perspective.
    Field of view
        camera view's vertical amplitude angle in degrees.
        usually 45-75
    Aspect Ratio
        width / height
    Near and Far (third and forth param)
        how close and how far the camera can see
        closer or further object than the value will not show up
        attention to z-fighting where two faces seem to fight for which one will be rendered above the other if range are too broad

OrbitControls
    