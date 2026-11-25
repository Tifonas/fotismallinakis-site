// Lightweight 3D viewer for the Thesis coin (three.js r179, MIT, self-hosted in /vendor/three).
// Loaded only when the viewer scrolls near the screen. Renders only while visible.
import * as THREE from './vendor/three/three.module.min.js';
import { GLTFLoader } from './vendor/three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from './vendor/three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from './vendor/three/addons/environments/RoomEnvironment.js';

export function start(host) {
  const reduce = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  let renderer;
  try { renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' }); }
  catch (e) { return; }                         // no WebGL: the poster image stays
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  const canvas = renderer.domElement;
  host.appendChild(canvas);

  const scene = new THREE.Scene();
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromScene(new RoomEnvironment(), 0.04).texture;
  scene.environmentIntensity = 0.55;
  const key = new THREE.DirectionalLight(0xffffff, 0.9); key.position.set(2, 3, 4); scene.add(key);

  const camera = new THREE.PerspectiveCamera(30, 16 / 9, 0.01, 100);
  const controls = new OrbitControls(camera, canvas);
  controls.enableZoom = false; controls.enablePan = false; controls.enableDamping = true;
  canvas.style.touchAction = 'pan-y';           // vertical swipes keep scrolling the page

  let mixer = null, visible = true, running = false, last = 0;
  const clock = new THREE.Clock();

  function size() {
    const w = host.clientWidth, h = host.clientHeight; if (!w || !h) return;
    renderer.setSize(w, h, false); camera.aspect = w / h; camera.updateProjectionMatrix();
  }
  new ResizeObserver(size).observe(host); size();

  function frame() {
    running = false;
    if (!visible || document.hidden) return;
    const dt = clock.getDelta();
    if (mixer && !reduce) mixer.update(dt);
    controls.update();
    renderer.render(scene, camera);
    running = true; requestAnimationFrame(frame);
  }
  function kick() { if (!running && visible && !document.hidden) { clock.getDelta(); running = true; requestAnimationFrame(frame); } }
  new IntersectionObserver(es => { visible = es[0].isIntersecting; kick(); }).observe(host);
  document.addEventListener('visibilitychange', kick);

  new GLTFLoader().load(host.dataset.glb, gltf => {
    const model = gltf.scene; scene.add(model);
    if (gltf.animations.length) {
      mixer = new THREE.AnimationMixer(model);
      gltf.animations.forEach(c => mixer.clipAction(c).play());   // keyframed animation, looping
      mixer.update(0);
    }
    model.updateMatrixWorld(true);
    const box = new THREE.Box3().setFromObject(model);
    const c = box.getCenter(new THREE.Vector3()), s = box.getSize(new THREE.Vector3()).length();
    camera.position.set(c.x, c.y + s * 0.18, c.z + s * 2.1);
    controls.target.copy(c); controls.update();
    host.classList.add('ready');
    kick();
  }, undefined, () => {});
}
