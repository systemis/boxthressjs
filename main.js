const scene = new THREE.Scene();
scene.background = new THREE.Color(0xababab)
const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
console.log(document.body);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xDC143C });
const cube = new THREE.Mesh(geometry, material);
camera.position.z = 5;

const geometry2 = new THREE.BoxGeometry(1, 1, 1);
const material2 = new THREE.MeshBasicMaterial({ color: 0xff0ff0 });
const cube2 = new THREE.Mesh(geometry2, material2);
cube2.position.x = 2;

const geometry3 = new THREE.BoxGeometry(1, 1, 1);
const material3 = new THREE.MeshBasicMaterial({ color: 0x00fff });
const cube3 = new THREE.Mesh(geometry3, material3);
cube3.position.x = -2;

scene.add(cube);
scene.add(cube2);
scene.add(cube3);

function animate() {
    requestAnimationFrame(animate);

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    cube2.rotation.x += 0.01;
    cube2.rotation.y += 0.01;

    cube3.rotation.x += 0.01;
    cube3.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();