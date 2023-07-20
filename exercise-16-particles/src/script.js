import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import * as dat from 'lil-gui'

THREE.ColorManagement.enabled = false

/**
 * Base
 */
// Debug
const gui = new dat.GUI()

// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

/**
 * Textures
 */
const textureLoader = new THREE.TextureLoader();
const particleTexture = textureLoader.load('/textures/particles/2.png');

/**
 * Test cube
 */
const vertices = [];
const colors = [];

for ( let i = 0; i < 10000; i ++ ) {
    const x = THREE.MathUtils.randFloatSpread( 100 );
    const y = THREE.MathUtils.randFloatSpread( 100 );
    const z = THREE.MathUtils.randFloatSpread( 100 );
    vertices.push( x, y, z );
    colors.push(Math.random(), Math.random(), Math.random());
}
vertices.push( 0, 0, 1 );
colors.push(Math.random(), Math.random(), Math.random());


const geometry = new THREE.BufferGeometry();
geometry.setAttribute( 'position', new THREE.Float32BufferAttribute( vertices, 3 ) );
geometry.setAttribute( 'color', new THREE.Float32BufferAttribute( colors, 3 ) );

// const count = 10000;
// const positions = new Float32Array(count * 3)
// const colors = new Float32Array(count * 3)
//
// for(let i = 0; i < count * 3; i++)
// {
//     positions[i] = (Math.random() - 0.5) * 10
//     colors[i] = Math.random()
// }
//
// geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
// geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

const material = new THREE.PointsMaterial( {
    // color: '#ff88cc',
    // dun use texture around with black color is still rendering
    // map: particleTexture,
    transparent: true,
    alphaMap: particleTexture,
    // // indicates what wont be render in the alphaMap
    // alphaTest: 0.001,
    // depthTest: false
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexColors: true,
    wireframe: true
} );
material.size = 0.8;
const points = new THREE.Points( geometry, material );

scene.add( points );

const cube = new THREE.Mesh(
  new THREE.BoxGeometry(),
  new THREE.MeshBasicMaterial()
)
scene.add(cube)

// console.log(vertices)
console.log(geometry)
console.log(material)
/**
 * Sizes
 */
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

window.addEventListener('resize', () =>
{
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

/**
 * Camera
 */
// Base camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 3
scene.add(camera)

// Controls
const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.outputColorSpace = THREE.LinearSRGBColorSpace
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

/**
 * Animate
 */
const clock = new THREE.Clock()

const tick = () =>
{
    const elapsedTime = clock.getElapsedTime();
    points.rotation.y = elapsedTime * 0.2;

    // Update controls
    controls.update()

    // Render
    renderer.render(scene, camera)

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()