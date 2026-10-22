/* Гибридный фон: сверху фото неба и гор (тонировано под палитру старта), снизу оно растворяется в анимированный градиент.
   Большая надпись стоит между небом и вырезанными горами — верх на небе, низ за хребтом. Слои двигаются от мыши с разной скоростью. */
window.IceScene = (() => {
  const IMG = {
    modules:       { fg: [.1298, .1818], ridge: .2221 },
    lesson:        { fg: [.0645, .2255], ridge: .195 },
    route_morning: { fg: [.1534, .1978], ridge: .2186 },
    route_day:     { fg: [.1221, .1693], ridge: .2096 },
    route_sunset:  { fg: [.1659, .1624], ridge: .2609 },
    route_night:   { fg: [.2353, .1631], ridge: .2935 }
  };
  function mount(stage, o) {
    const C = IMG[o.img], foot = C.fg[0] + C.fg[1];
    stage.classList.add('ibg');
    stage.insertAdjacentHTML('afterbegin', `<div class="ibg-grad"></div>
      <div class="hs" style="--foot:${(foot * 100).toFixed(1)}%">
        <img class="hs-sky" src="img/${o.img}_sky.webp" alt="">
        <div class="hs-over">${o.over || ''}</div>
        <div class="hs-giant">${o.text || ''}</div>
        <img class="hs-fg" src="img/${o.img}_fg.webp" alt="" style="top:${C.fg[0] * 100}%;height:${C.fg[1] * 100}%">
        <div class="hs-tint"></div>
      </div>`);
    const hs = stage.querySelector('.hs'), g = hs.querySelector('.hs-giant'), ov = hs.querySelector('.hs-over');
    const place = () => {
      // на широких экранах фото выше экрана: поднимаем его, чтобы горизонт был не ниже ~42% высоты
      const hH = innerWidth * 1.06 * 941 / 1672, base = Math.min(110, Math.max(36, innerHeight * .07));
      const maxFoot = innerHeight * (o.maxFoot ?? .42), top = Math.min(base, maxFoot - foot * hH);
      hs.style.top = top + 'px';
      const x = typeof o.x === 'function' ? o.x() : (o.x ?? .5);
      g.style.left = (x * 100) + '%'; ov.style.left = (x * 100) + '%';
      g.style.fontSize = (o.size ?? 30) + 'cqh';
      g.style.bottom = ((1 - C.ridge - (o.sink ?? .03)) * 100) + '%';
      if (o.fit) { // ужать слово, если не помещается в ширину
        g.style.fontSize = (o.size ?? 30) + 'cqh';
        const max = o.fit(); const w = g.offsetWidth;
        if (w > max) g.style.fontSize = ((o.size ?? 30) * max / w) + 'cqh';
      }
      ov.style.bottom = `calc(${g.style.bottom} + ${g.offsetHeight * .78}px)`;
    };
    place(); addEventListener('resize', place); document.fonts && document.fonts.ready.then(place);
    let mx = 0, my = 0, cx = 0, cy = 0;
    addEventListener('pointermove', e => { mx = e.clientX / innerWidth - .5; my = e.clientY / innerHeight - .5; });
    (function loop() { cx += (mx - cx) * .06; cy += (my - cy) * .06;
      hs.style.setProperty('--px', cx.toFixed(4)); hs.style.setProperty('--py', cy.toFixed(4));
      requestAnimationFrame(loop); })();
    return {
      el: hs, giant: g,
      setText(t) { g.textContent = t; place(); },
      setOver(t) { ov.innerHTML = t; place(); },
      place,
      footPx() { const r = hs.getBoundingClientRect(); return r.top + r.height * foot; }
    };
  }
  return { mount };
})();
