import * as THREE from 'three';
// import { OBJLoader } from '';
// import { MTLLoader } from '../node_modules/three/examples/jsm/loaders/MTLLoader';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';
import { MTLLoader } from 'three/examples/jsm/loaders/MTLLoader.js';
import {TrackballControls} from 'three/examples/jsm/controls/TrackballControls.js';

window.addEventListener('load', init);

function init() {
 
 サイズを指定
 const width = 1320;
 const height = 700;

 レンダラーを作成
 const renderer = new THREE.WebGLRenderer({
   canvas: document.querySelector('#myCanvas')
 });
 renderer.setPixelRatio(window.devicePixelRatio);
 renderer.setSize(window.innerWidth, window.innerHeight);
 renderer.setClearColor(0x000000);

 // シーンを作成
 const scene = new THREE.Scene();

 // カメラを作成
 const camera = new THREE.PerspectiveCamera(45, window.innerWidth/ window.innerHeight);
 camera.position.set(0, 0, +1000);


 // 形状データを作成
 const geometry = new THREE.Geometry();
 // 配置する範囲
 const SIZE = 3000;
 // 配置する個数
 const LENGTH = 2000;
 for (let i = 0; i < LENGTH; i++) {
   geometry.vertices.push(new THREE.Vector3(
     SIZE * (Math.random() - 0.5),
     SIZE * (Math.random() - 0.1),
     SIZE * (Math.random() - 0.5),
   ));
 }

 // const directionalLight = new THREE.DirectionalLight(0xFFFFFF);
 // directionalLight.position.set(1, 1, 1);
 // scene.add(directionalLight);

 // const ambientLight = new THREE.AmbientLight(0xFFFFFF);
 // scene.add(ambientLight);

 // 平行光源を作成
 const directionalLight = new THREE.DirectionalLight(0xffffff);
 directionalLight.position.set(1, 1, 1);
 scene.add(directionalLight);
 // 環境光を追加
 const ambientLight = new THREE.AmbientLight(0x333333);
 scene.add(ambientLight);

 // const OBJLoader = new THREE.OBJLoader();

 // OBJLoader.setpath('./dist/img/three-obj');

 // 3DS形式のモデルデータを読み込む
 const loader = new THREE.OBJLoader();
 // 3dsファイルのパスを指定
 loader.load('./dist/img/three-obj/sitelogo-big.obj', obj => {
   // 読み込み後に3D空間に追加
   const model = obj.scene;
   scene.add(model);
 });

 // // マテリアルを作成
 // const material = new THREE.PointsMaterial({
 //   // 一つ一つのサイズ
 //   size: 19,
 //   // 色
 //   color: 0x007bbb,
 //  //  blending: THREE.AdditiveBlending,
 // });

 // const mesh = new THREE.Points(geometry, material);
 // scene.add(mesh);

 renderer.render(scene, camera); // レンダリング

 tick();

 毎フレーム時に実行されるループイベントです
 function tick() {
   box.rotation.x += 0.8;
   renderer.render(scene, camera); // レンダリング

   requestAnimationFrame(tick);
 }


}
