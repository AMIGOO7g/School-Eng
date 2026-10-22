/* Общее для нового оформления: профиль игрока, шапка, сцена с горами */
window.UI2 = (() => {
  const LEAGUES = [
    { id: 1, name: 'Детский хоккей', lvl: 'A1', img: 'league_l1' }, { id: 2, name: 'Юношеская лига', lvl: 'A2', img: 'league_l2' },
    { id: 3, name: 'МХЛ', lvl: 'B1', img: 'league_l3' }, { id: 4, name: 'ВХЛ', lvl: 'B2', img: 'league_l4' },
    { id: 5, name: 'КХЛ', lvl: 'C1', img: 'league_l5' }, { id: 6, name: 'НХЛ', lvl: 'C2', img: 'league_l6' }];
  // профиль игрока считается из реального прогресса: пройденные уроки, лучшие результаты, награды
  function profile() {
    const st = ICE_STORE.load(), lessons = ICE_BOOK.flatMap(m => m.lessons);
    const done = lessons.filter(l => st.done[l.id]).length;
    const best = Object.values(st.lp || {}).reduce((a, x) => a + (x.best || 0), 0);
    const rating = Math.min(99, 50 + done * 2 + Math.round(best / 5));
    return { st, name: st.name || 'Игрок 7', league: LEAGUES[(st.league || 1) - 1], rating, done, total: lessons.length, awards: (st.awards || []).length };
  }
  function header(active) {
    const p = profile();
    const L = [['hub', 'Раздевалка', 'hub.html'], ['hw', 'Домашка', 'homework.html'], ['season', 'Сезон', 'school.html'], ['career', 'Карьера', 'index.html'], ['pen', 'Штрафная', 'lesson.html?mode=review']];
    const h = document.createElement('header'); h.className = 'top2';
    h.innerHTML = `<div class="wrap"><a class="logo" href="index.html"><b>/</b>ICE ENGLISH</a>
      <nav class="nav2">${L.map(([k, t, href]) => `<a href="${href}" class="${k === active ? 'on' : ''}">${t}</a>`).join('')}</nav>
      <a class="me" href="index.html" title="Карьера"><img src="img/pl_avatar.webp" alt=""><span class="n">${p.name}<small>${p.league.name}</small><span class="bar"><i style="width:${(p.done / p.total * 100).toFixed(1)}%"></i></span></span><span class="r">${p.rating}</span></a></div>`;
    document.body.prepend(h);
    h.querySelectorAll('a[href]').forEach(a => a.addEventListener('click', e => { if (a.getAttribute('href') === location.pathname.split('/').pop()) return; e.preventDefault(); go(a.getAttribute('href')); }));
    return h;
  }
  const C = { hz: .3879, mtnTop: .1853, ridge: .2686 };
  // сцена: линия льда на заданной высоте экрана; слово — с подписью у левого края, низ за хребтом
  function scene(stage, o) {
    stage.classList.add('sc');
    stage.innerHTML = `<div class="sc-grad"></div><div class="sc-box"><img class="sc-sky" src="img/cr_sky.webp" alt="">
      <div class="sc-giant"><span class="sc-over"></span><span class="sc-word"></span></div>
      <img class="sc-mtn" src="img/cr_mtn.webp" alt=""><img class="sc-ice" src="img/cr_ice.webp" alt=""></div><div class="sc-haze"></div>`;
    const box = stage.querySelector('.sc-box'), g = stage.querySelector('.sc-giant'), w = stage.querySelector('.sc-word'), ov = stage.querySelector('.sc-over');
    const sky = stage.querySelector('.sc-sky'), mtn = stage.querySelector('.sc-mtn'), ice = stage.querySelector('.sc-ice');
    let H = 0, top = 0, pan = 0;
    function place() {
      const vw = innerWidth, vh = innerHeight; let W = vw * 1.16; H = W * 941 / 1672;
      if (H < vh * .62) { H = vh * .62; W = H * 1672 / 941; }
      top = vh * (o.horizon ?? .5) - C.hz * H;
      Object.assign(box.style, { width: W + 'px', height: H + 'px', left: (vw - W) / 2 + 'px', top: top + 'px' });
      sky.style.height = (C.hz * 100 + .3) + '%';
      Object.assign(mtn.style, { top: C.mtnTop * 100 + '%', height: (C.hz - C.mtnTop) * 100 + '%' });
      Object.assign(ice.style, { top: (C.hz * 100 - .15) + '%', height: (100 - C.hz * 100 + .15) + '%' });
      const left = (vw - Math.min(1320, vw - 2 * Math.max(20, Math.min(64, vw * .04)))) / 2 - (vw - W) / 2;
      g.style.left = left + 'px';
      const fs = H * (o.size ?? .2); w.style.fontSize = fs + 'px';
      const maxW = Math.min(1320, vw - 80); if (w.offsetWidth > maxW) w.style.fontSize = fs * maxW / w.offsetWidth + 'px';
      g.style.top = (H * C.ridge + w.offsetHeight * (o.sink ?? .3) - g.offsetHeight) + 'px';
    }
    place(); addEventListener('resize', place); document.fonts && document.fonts.ready.then(place);
    let mx = 0, cx = 0, my = 0, cy = 0, cp = 0;
    addEventListener('pointermove', e => { mx = e.clientX / innerWidth - .5; my = e.clientY / innerHeight - .5; });
    (function loop() { cx += (mx - cx) * .05; cy += (my - cy) * .05; cp += (pan - cp) * .06;
      sky.style.transform = `translate(${-cx * 8 - cp * .3}px, ${-cy * 4}px) scale(1.01)`;
      g.style.transform = `translate(${-cx * 16 - cp * .6}px, ${-cy * 5}px)`;
      mtn.style.transform = `translateX(${-cx * 30 - cp}px)`;
      ice.style.transform = `translateX(${-cp * 1.2}px)`;
      requestAnimationFrame(loop); })();
    return {
      place, horizonPx: () => top + C.hz * H,
      set(word, over, instant) { // слово уходит за горы и поднимается новое
        if (instant) { w.textContent = word; ov.textContent = over; place(); return; }
        g.classList.add('down'); clearTimeout(g.t);
        g.t = setTimeout(() => { w.textContent = word; ov.textContent = over; place(); g.classList.remove('down'); g.classList.add('pre'); void g.offsetWidth; g.classList.remove('pre'); }, 420);
      },
      pan(px) { pan = px; }
    };
  }
  // рукописная пометка тренера со стрелкой (стрелка дорисовывается)
  function note(parent, text, x, y, arrow) {
    const n = document.createElement('div'); n.className = 'hand'; n.style.left = x + 'px'; n.style.top = y + 'px'; n.innerHTML = text;
    if (arrow) { n.insertAdjacentHTML('beforeend', `<svg width="10" height="10" style="left:${arrow.x}px;top:${arrow.y}px"><path d="${arrow.d}"/></svg>`);
      const p = n.querySelector('path'); requestAnimationFrame(() => { const L = p.getTotalLength(); p.style.strokeDasharray = L; p.style.strokeDashoffset = L; p.style.transition = 'stroke-dashoffset .9s cubic-bezier(.22,.8,.2,1) .4s'; requestAnimationFrame(() => p.style.strokeDashoffset = 0); }); }
    parent.appendChild(n); return n;
  }
  function go(href) { document.body.classList.add('leaving'); setTimeout(() => location.assign(href), 520); }
  function ready() { requestAnimationFrame(() => setTimeout(() => document.body.classList.add('ready'), 60)); }
  return { LEAGUES, profile, header, scene, note, go, ready };
})();
