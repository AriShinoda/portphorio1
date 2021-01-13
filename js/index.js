   // ページの読み込みを待つ
   window.addEventListener('load', init);

   function init() {
    
     // サイズを指定
     // const width = 1320;
     // const height = 700;

     // レンダラーを作成
     const renderer = new THREE.WebGLRenderer({
       canvas: document.querySelector('#myCanvas')
     });
     renderer.setPixelRatio(window.devicePixelRatio);
     renderer.setSize(window.innerWidth, window.innerHeight);
     renderer.setClearColor(0xaaaaaa);

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
     const LENGTH = 4000;
     for (let i = 0; i < LENGTH; i++) {
       geometry.vertices.push(new THREE.Vector3(
         SIZE * (Math.random() - 0.5),
         SIZE * (Math.random() - 0.1),
         SIZE * (Math.random() - 0.5),
       ));
     }
     // マテリアルを作成
     const material = new THREE.PointsMaterial({
       // 一つ一つのサイズ
       size: 12,
       // 色
       color: 0x494949,
       blending: THREE.AdditiveBlending,
     });

     const mesh = new THREE.Points(geometry, material);
     scene.add(mesh);


     // const directionalLight = new THREE.DirectionalLight(0xffffff);
     // directionalLight.position.set(1, 1, 1);
     // // シーンに追加
     // scene.add(directionalLight);
   

     renderer.render(scene, camera); // レンダリング

     // tick();

     // 毎フレーム時に実行されるループイベントです
     // function tick() {
     //   box.rotation.x += 0.8;
     //   renderer.render(scene, camera); // レンダリング

     //   requestAnimationFrame(tick);
     // }
   }