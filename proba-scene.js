/* ПРОБА. Сцена из трёх планов: небо с гигантским словом, горы целиком (двигаются), неподвижный лёд.
   Фото растворяется в анимированный градиент стартовой сверху и снизу. */
window.PScene = (() => {
  const CFG = { modules: { hz: .3387, mtnTop: .1325, ridge: .2221 }, lesson: { hz: .3144, mtnTop: .0673, ridge: .195 } };
  function mount(stage, o) {
    const C = CFG[o.img];
    stage.innerHTML = `<div class="ps-grad"></div><div class="ps-box">
      <img class="ps-sky" src="img/p_${o.img}_sky.webp" alt="">
      <div class="ps-giant"><span class="ps-over">${o.over || ''}</span><span class="ps-word">${o.text || ''}</span></div>
      <img class="ps-mtn" src="img/p_${o.img}_mtn.webp" alt="">
      <img class="ps-ice" src="img/p_${o.img}_ice.webp" alt="">
      <div class="ps-tint"></div></div>`;
    const box = stage.querySelector('.ps-box'), g = stage.querySelector('.ps-giant'), w = stage.querySelector('.ps-word');
    const sky = stage.querySelector('.ps-sky'), mtn = stage.querySelector('.ps-mtn'), ice = stage.querySelector('.ps-ice');
    let H = 0, top = 0;
    function place() {
      const vw = innerWidth, vh = innerHeight, W = vw * 1.05; H = W * 941 / 1672;
      top = vh * (o.horizon ?? .44) - C.hz * H;                       // линия льда — на заданной высоте экрана
      Object.assign(box.style, { width: W + 'px', height: H + 'px', left: (-vw * .025) + 'px', top: top + 'px' });
      sky.style.height = (C.hz * 100 + .3) + '%';
      Object.assign(mtn.style, { top: C.mtnTop * 100 + '%', height: (C.hz - C.mtnTop) * 100 + '%' });
      Object.assign(ice.style, { top: (C.hz * 100 - .15) + '%', height: (100 - C.hz * 100 + .15) + '%' });
      // гигантское слово: низ уходит за хребет, подпись прижата к левому краю слова
      const fs = H * (o.size ?? .2); w.style.fontSize = fs + 'px';
      const left = (typeof o.x === 'function' ? o.x() : vw * (o.x ?? .1)) + vw * .025;
      g.style.left = left + 'px';
      if (o.maxW) { const mw = o.maxW(); if (w.offsetWidth > mw) w.style.fontSize = (fs * mw / w.offsetWidth) + 'px'; }
      const base = H * C.ridge + w.offsetHeight * (o.sink ?? .22);
      g.style.top = (base - g.offsetHeight) + 'px';
    }
    place(); addEventListener('resize', place); document.fonts && document.fonts.ready.then(place);
    // параллакс: небо чуть-чуть, слово средне, горы сильнее; лёд стоит
    let mx = 0, cx = 0, my = 0, cy = 0;
    addEventListener('pointermove', e => { mx = e.clientX / innerWidth - .5; my = e.clientY / innerHeight - .5; });
    (function loop() { cx += (mx - cx) * .05; cy += (my - cy) * .05;
      sky.style.transform = `translate(${-cx * 8}px, ${-cy * 4}px) scale(1.01)`;
      g.style.transform = `translate(${-cx * 16}px, ${-cy * 5}px)`;
      mtn.style.transform = `translateX(${-cx * 28}px)`;
      requestAnimationFrame(loop); })();
    return { place, horizonPx: () => top + C.hz * H, word: w, giant: g };
  }
  return { mount };
})();
