   
   //import
   import "./index.scss";
   import "./iso.js";
   import "./three-index.js";
   import anime from 'animejs';
  
   // Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
   import * as firebase from "firebase/app";

  const firebaseConfig = {
    apiKey: "AIzaSyCJ1dl5kodZeahOQErLLKZqJVMqprVYvkE",
    authDomain: "azuredesign-id.firebaseapp.com",
    projectId: "azuredesign-id",
    storageBucket: "azuredesign-id.appspot.com",
    messagingSenderId: "620153448404",
    appId: "1:620153448404:web:90e1b333839f7189025841"
  };

  // Add the Firebase services that you want to use

   window.addEventListener('load', init);

   function init() {

    window.addEventListener("scroll", function(){
      const element = document.querySelectorAll('.mask_animation');
      const scrollCount = document.documentElement.scrollTop || document.body.scrollTop;
      const windowHeight = window.innerHeight;
      const threshold = 100;
      element.forEach((items) => {
        const elementOffsetTop = items.getBoundingClientRect().top;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const offsetPosition = elementOffsetTop + scrollTop;
        if(scrollCount > offsetPosition - windowHeight + threshold) {
          items.querySelector('.mask-inner').classList.add('start');
        }
      });
    });
    
    const menuopen = document.getElementById('open');
    
    menuopen.addEventListener('click' , function() {
      anime({
        targets: '.spnav-wrapper_linebox--item',
        translateX: 80,
        delay: anime.stagger(100)
      }),
      anime({
        targets: '.spnav-content',
        translateX: -390,
        easing: 'easeOutExpo',
        duration: 1000
        })
    })
    
    const close = document.querySelectorAll('.spnav-content').forEach(function (close) {
      close.addEventListener('click', function(){
        anime({
        targets: '.spnav-content',
        translateX: 160,
        easing: 'easeOutExpo',
        duration: 1000
        }),
        anime({
        targets: '.spnav-wrapper_linebox--item',
        translateX: 0,
        delay: anime.stagger(100) // increase delay by 100ms for each elements. 
        })
      })
    })

    // const spnavOpen = document.getElementById('open');

    // spnavOpen.addEventListener('click' , function() {
    //   anime({
    //     target: '.spnav-wrapper_linebox--item',
    //     translateX: 80,
    //     delay: anime.stagger(100) // increase delay by 100ms for each elements.
    //   }),
    //   anime({
    //     target: '.spnav-content',
    //     translateX: -270,
    //     easing: 'easeOutExpo',
    //     duration: 1000
    //   })
    // })
    
   }

   