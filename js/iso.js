
window.addEventListener('load', init);

function init() {

    const observer = new IntersectionObserver(function(entries) {
    for(let i = 0; i < entries.length; i++) {
      if (entries[i].intersectionRatio <= 0) continue;
      showElm(entries[i].target);
    }
  },{
    rootMargin: '-25% 0% -25% 0%'
  });
  // 監視対象の追加
  const elements = document.querySelectorAll('.isFadeIn');
  for(let i = 0; i < elements.length; i++) {
    observer.observe(elements[i]);
  }
  // 領域内に入ったとき実行する処理
  function showElm(isFadeIn) {
    isFadeIn.classList.add('is-fadeIn__trigger');
    observer.unobserve(isFadeIn);
  }
}

