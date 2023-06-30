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


4 properties to transform class Object3D
    position - move the object
    scale   - resize the object
    rotation    - rotate the object
    quaternion  - also rotate the object

Position: Vector3
    x - going to the right
    y - going upward
    z - going backward

Scale: Vector3
    x, y, z

Rotation:
    imagine putting a stick through your object's center
        in the axis's direction and then rotating that object on that stick
    rotation and quaternion will update each other
    Rotation: Euler
        all calculate in radian
        order is x -> y -> z
            can rearrange using `mesh.rotation.reorder('YXZ')`
    Quaternion
        rotate in a mathematical way and solve the order problem
        Object3D::lookAt(new THREE.Vector3(x, y, z))

Group
    group all objects into a container and add to the scene