// import * as THREE from 'three';
// import 'three/build/three.js'
// import { OBJLoader } from 'three/examples/js/loaders/OBJLoader.js';
// import { MTLLoader } from 'three/examples/js/loaders/MTLLoader.js';
// import { OrbitControls } from 'three/examples/js/controls/OrbitControls.js';

// new THREE.OrbitControls();
// import 'three/examples/js/controls/TrackballControls.js';


// window.addEventListener('load', init);

// function init() {
// // レンダラーを作成
//  const renderer = new THREE.WebGLRenderer({
//    canvas: document.querySelector('#myCanvas')
//  });
//  renderer.setPixelRatio(window.devicePixelRatio);
//  renderer.setSize(window.innerWidth, window.innerHeight);
//  renderer.setClearColor(0x000000);

//  // シーンを作成
//  const scene = new THREE.Scene();

//  // カメラを作成
//  const camera = new THREE.PerspectiveCamera(45, window.innerWidth/ window.innerHeight);
//  camera.position.set(0, 10, +1000);

//   controls = new OrbitControls( camera, renderer.domElement );

//  // 形状データを作成
//  const geometry = new THREE.Geometry();
//  // 配置する範囲
//  const SIZE = 3000;
//  // 配置する個数
//  const LENGTH = 2000;
//  for (let i = 0; i < LENGTH; i++) {
//    geometry.vertices.push(new THREE.Vector3(
//      SIZE * (Math.random() - 0.5),
//      SIZE * (Math.random() - 0.1),
//      SIZE * (Math.random() - 0.5),
//    ));
//  }

//  const directionalLight = new THREE.DirectionalLight(0xFFFFFF);
//  directionalLight.position.set(1, 1, 1);
//  scene.add(directionalLight);

//  const ambientLight = new THREE.AmbientLight(0xFFFFFF);
//  scene.add(ambientLight);


//  // マテリアルを作成
//  const material = new THREE.PointsMaterial({
//    // 一つ一つのサイズ
//    size: 19,
//    // 色
//    color: 0x007bbb,
//   //  blending: THREE.AdditiveBlending,
//  });

//  const mesh = new THREE.Points(geometry, material);
//  scene.add(mesh);

//  renderer.render(scene, camera); // レンダリング

//  tick();

//  毎フレーム時に実行されるループイベントです
//  function tick() {
//    box.rotation.x += 0.8;
//    renderer.render(scene, camera); // レンダリング
//    controls.update();  
//    requestAnimationFrame(tick);
//  }

 
// }


