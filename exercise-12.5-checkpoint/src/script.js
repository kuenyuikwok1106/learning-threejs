import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Scene
const scene = new THREE.Scene()

// Textures 
const textureLoader = new THREE.TextureLoader()
const map = textureLoader.load('/map.jpg')
const depthMap = textureLoader.load('/depth-map.jpg')

// Object
const sphereGeometry = new THREE.SphereGeometry(100, 32, 32)
const material = new THREE.MeshStandardMaterial({
// const material = new THREE.MeshBasicMaterial({
    map: map,
    lightMap: depthMap,
    lightMapIntensity: 0.5,
    // transparent: true,
    // // color: 0xff0000,
    side: THREE.BackSide,
    // wireframe: true,
})
const mesh = new THREE.Mesh(sphereGeometry, material)
sphereGeometry.scale(1, 1, 1)
scene.add(mesh)

const light = new THREE.AmbientLight( 'white' );
light.position.set( 0, 0, 0 );
scene.add(light)


// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight
}

// Camera
const camera = new THREE.PerspectiveCamera(90, sizes.width / sizes.height, 0.1, 400)
camera.position.z = 2
scene.add(camera)

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.render(scene, camera)

// Controls
const controls = new OrbitControls( camera, canvas );
controls.enableDamping = true;

// Animation
function tick () {
    // mesh.rotation.y += 0.005
    
    controls.update();
    renderer.render(scene, camera)
    window.requestAnimationFrame(tick)
}

tick();
