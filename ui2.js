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
    const sk = st.skills, rating = done && sk ? Math.round((sk.shot + sk.skate + sk.vision + sk.pass) / 4) : '—';   // рейтинг — после первого выигранного урока
    return { st, streak: streak(st), name: st.name || 'Игрок 7', league: LEAGUES[(st.league || 2) - 1], rating, done, total: lessons.length, awards: (st.awards || []).length };
  }
  // серия дней подряд: день засчитывается, если занимался хотя бы минуту
  const day = d => d.toISOString().slice(0, 10);
  function streak(st) {
    const t = st.time || {}; let n = 0, d = new Date();
    if (!((t[day(d)] || 0) >= 60)) d.setDate(d.getDate() - 1);
    while ((t[day(d)] || 0) >= 60) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }
  function track() {   // время занятий: каждые 30 секунд, пока вкладка открыта
    setInterval(() => { if (document.hidden) return; const s2 = ICE_STORE.load(); s2.time = s2.time || {}; const k = day(new Date()); s2.time[k] = (s2.time[k] || 0) + 30;
      if (streak(s2) >= 7) { s2.awards = s2.awards || []; if (!s2.awards.includes('iron')) s2.awards.push('iron'); }
      ICE_STORE.save(s2); }, 30000);
  }
  function header(active, opt = {}) {
    const p = profile();
    const L = [['hub', 'Раздевалка', 'hub.html'], ['hw', 'Домашка', 'homework.html'], ['season', 'Сезон', 'school.html'], ['career', 'Карьера', 'career.html'], ['pen', 'Штрафная', 'penalty.html']];
    const h = document.createElement('header'); h.className = 'top2' + (opt.dark ? ' dark' : '');
    if (opt && opt.light) h.classList.add('light');
    h.innerHTML = `<a class="logo" href="index.html"><b>/</b><span class="ice">ICE</span><span class="eng">ENGLISH</span></a>
      <nav class="nav2"><span class="pill"></span>${L.map(([k, t, href]) => `<a href="${href}" class="${k === active ? 'on' : ''}">${t}</a>`).join('')}</nav>
      <a class="me" href="career.html" title="Карьера"><img src="img/pl_avatar.webp" alt=""><span class="n">${p.name}<small>${p.league.name}</small><span class="bar"><i style="width:${(p.done / p.total * 100).toFixed(1)}%"></i></span></span><span class="r">${p.rating}<small>рейтинг</small></span>${p.streak ? `<span class="fire" title="Дней подряд"><svg class="ico" viewBox="0 0 24 24" width="1em" height="1em"><path d="M12 2c1 4 6 6 6 12a6 6 0 0 1-12 0c0-3 2-5 3-7 1 2 2 3 3 3 0-3-1-5 0-8z" fill="currentColor"/></svg><b>${p.streak}</b></span>` : ''}</a>`;
    document.body.prepend(h);

    // красная плашка переезжает к пункту под курсором и возвращается к активному
    const nav = h.querySelector('.nav2'), pill = nav.querySelector('.pill'), links = [...nav.querySelectorAll('a')];
    const moveTo = a => { if (!a) { pill.style.opacity = 0; return; } pill.style.opacity = 1; pill.style.left = a.offsetLeft + 'px'; pill.style.width = a.offsetWidth + 'px';
      links.forEach(x => x.classList.toggle('hot', x === a)); };
    const act = links.find(a => a.classList.contains('on'));
    links.forEach(a => a.addEventListener('mouseenter', () => moveTo(a)));
    nav.addEventListener('mouseleave', () => moveTo(act));
    (document.fonts ? document.fonts.ready : Promise.resolve()).then(() => moveTo(act)); moveTo(act);
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
      const left = (o.left ? o.left() : (vw - Math.min(1320, vw - 2 * Math.max(20, Math.min(64, vw * .04)))) / 2) - (vw - W) / 2;
      g.style.left = left + 'px';
      const fs = H * (o.size ?? .2); w.style.fontSize = fs + 'px';
      if (o.fitW) w.style.fontSize = fs * vw * o.fitW / w.offsetWidth + 'px';   // слово на заданную долю ширины экрана
      else { const maxW = Math.min(1320, vw - 80); if (w.offsetWidth > maxW) w.style.fontSize = fs * maxW / w.offsetWidth + 'px'; }
      if (o.center) g.style.left = ((vw - w.offsetWidth) / 2 - (vw - W) / 2) + 'px';   // слово по центру экрана
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
      place, horizonPx: () => top + C.hz * H, wordLeft: () => w.getBoundingClientRect().left,
      set(word, over, instant) { // слово уходит за горы и поднимается новое
        if (instant) { w.textContent = word; ov.textContent = over; place(); return; }
        g.classList.add('down'); clearTimeout(g.t);
        g.t = setTimeout(() => { w.textContent = word; ov.textContent = over; place(); g.classList.remove('down'); g.classList.add('pre'); void g.offsetWidth; g.classList.remove('pre'); }, 420);
      },
      pan(px) { pan = px; }
    };
  }
  // фото-сцена (раздевалка, арена): фото на весь экран, лёгкий параллакс, светлая дымка слева под интерфейс
  function photo(stage, o) {
    stage.classList.add('sc', 'ph');
    stage.innerHTML = `<div class="ph-img" style="background-image:url(img/${o.src}.webp);background-position:${o.pos || '60% 50%'}"></div><div class="ph-haze"></div>` +
      (o.word ? `<div class="ph-word"><span class="sc-over">${o.over || ''}</span><span class="sc-word">${o.word}</span></div>` : '');
    const im = stage.querySelector('.ph-img'), w = stage.querySelector('.ph-word');
    let mx = 0, cx = 0; addEventListener('pointermove', e => { mx = e.clientX / innerWidth - .5; });
    (function loop() { cx += (mx - cx) * .05; im.style.transform = `scale(1.04) translateX(${-cx * 14}px)`; if (w) w.style.transform = `translateX(${-cx * 24}px)`; requestAnimationFrame(loop); })();
    return { horizonPx: () => innerHeight * (o.horizon || .5), wordLeft: () => w ? w.querySelector('.sc-word').getBoundingClientRect().left : innerWidth * .06, set() {} };
  }
  // оформленный фон «как в игровом меню»: градиент, полосы цветов клуба (въезжают при загрузке), мотив раздела,
  // снег; если есть большое слово — прожекторы, которые его подсвечивают (где луча нет — слова не видно)
  const MOTIF = {
    ice: `<svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice"><g stroke="rgba(150,220,255,.10)" stroke-width="1.5" fill="none">${Array.from({ length: 9 }, (_, i) => `<line x1="0" y1="${100 + i * 90}" x2="1600" y2="${100 + i * 90}"/>`).join('')}${Array.from({ length: 13 }, (_, i) => `<line x1="${120 * i + 40}" y1="0" x2="${120 * i + 40}" y2="900"/>`).join('')}</g></svg>`,
    arena: `<svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice"><g fill="none" stroke-width="6"><line x1="800" y1="0" x2="800" y2="900" stroke="rgba(230,58,66,.16)"/><line x1="460" y1="0" x2="460" y2="900" stroke="rgba(120,170,255,.14)"/><line x1="1140" y1="0" x2="1140" y2="900" stroke="rgba(120,170,255,.14)"/><circle cx="800" cy="450" r="190" stroke="rgba(120,170,255,.14)"/><circle cx="800" cy="450" r="10" fill="rgba(120,170,255,.2)"/><circle cx="240" cy="230" r="120" stroke="rgba(230,58,66,.12)"/><circle cx="240" cy="670" r="120" stroke="rgba(230,58,66,.12)"/><circle cx="1360" cy="230" r="120" stroke="rgba(230,58,66,.12)"/><circle cx="1360" cy="670" r="120" stroke="rgba(230,58,66,.12)"/></g></svg>`,
    shoot: `<svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMax slice"><g fill="none" stroke-width="6"><path d="M560 900 A240 200 0 0 1 1040 900" fill="rgba(90,150,230,.10)" stroke="rgba(120,170,255,.22)"/><line x1="0" y1="900" x2="1600" y2="900" stroke="rgba(230,58,66,.3)"/></g></svg>`,
    gold: `<svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice"><defs><pattern id="hx" width="56" height="97" patternUnits="userSpaceOnUse"><path d="M28 0 L56 16 L56 48 L28 64 L0 48 L0 16 Z M28 64 L28 97" fill="none" stroke="rgba(242,190,80,.09)" stroke-width="1.5"/></pattern></defs><rect width="1600" height="900" fill="url(#hx)"/></svg>`,
    penalty: `<div class="ab-alarm"></div>`,
    green: `<svg viewBox="0 0 1600 900" preserveAspectRatio="xMidYMid slice"><g fill="none" stroke="rgba(220,255,240,.13)" stroke-width="4" stroke-linecap="round"><path d="M200 640 C 320 520, 420 520, 520 420" /><path d="M505 400 l20 18 l-26 6"/><path d="M1100 220 C 1180 330, 1260 360, 1380 330"/><path d="M1362 316 l22 14 l-24 12"/><path d="M300 200 l40 40 M340 200 l-40 40"/><path d="M1200 640 l40 40 M1240 640 l-40 40"/><circle cx="760" cy="700" r="26"/><circle cx="980" cy="160" r="26"/><path d="M760 700 C 820 560, 900 300, 980 186" stroke-dasharray="10 14"/></g></svg>`
  };
  function abstract(stage, o) {
    o = o || {};
    const th = o.theme || 'red', spot = !!o.word && o.spot !== false;
    stage.classList.add('sc', 'ab'); stage.dataset.theme = th;
    stage.innerHTML = `<div class="ab-base"></div><div class="ab-motif">${MOTIF[th] || ''}</div>` +
      (spot ? '<div class="ab-beam b1"></div><div class="ab-beam b2"></div>' : '') +
      `<div class="ab-str s1"></div><div class="ab-str s2"></div><div class="ab-str s3"></div><canvas class="ab-dust"></canvas>` +
      `<div class="ab-word${spot ? ' lit' : ''}"><div class="ab-w"><span class="sc-over">${o.over || ''}</span><span class="sc-word"><span class="wo">${o.word || ''}</span><span class="wl">${o.word || ''}</span></span></div></div>`;
    const cv = stage.querySelector('.ab-dust'), cx = cv.getContext('2d'), w = stage.querySelector('.ab-word'), word = w.querySelector('.sc-word'), beams = [...stage.querySelectorAll('.ab-beam')];
    setTimeout(() => stage.querySelectorAll('.ab-str').forEach(x => x.classList.add('done')), 1300);
    let P = [];
    const size = () => { cv.width = innerWidth; cv.height = innerHeight; P = Array.from({ length: Math.round(innerWidth / 26) }, () => ({ x: Math.random() * innerWidth, y: Math.random() * innerHeight, r: Math.random() * 1.7 + .5, v: Math.random() * .3 + .15, a: Math.random() * .45 + .2, d: Math.random() * Math.PI * 2 })); };
    size(); addEventListener('resize', size);
    const still = matchMedia('(prefers-reduced-motion: reduce)').matches;
    let mx = 0, gx = 0; addEventListener('pointermove', e => { mx = e.clientX / innerWidth - .5; });
    (function loop(t) {
      cx.clearRect(0, 0, cv.width, cv.height);
      P.forEach(p => { if (!still) { p.y += p.v; p.x += Math.sin(t / 2200 + p.d) * .3; if (p.y > cv.height + 5) { p.y = -5; p.x = Math.random() * cv.width; } }   // снег падает вниз
        cx.beginPath(); cx.arc(p.x, p.y, p.r, 0, 6.3); cx.fillStyle = `rgba(230,240,255,${p.a})`; cx.fill(); });
      gx += (mx - gx) * .05; stage.style.setProperty('--px', (gx * 24).toFixed(1) + 'px');
      if (spot) {   // два прожектора качаются вокруг точек у нижнего края; где луч пересекает слово — буквы светятся
        const r = word.getBoundingClientRect(), k = still ? 0 : t / 1000, H = innerHeight;
        const a1 = 22 * Math.sin(k * .38), a2 = 22 * Math.sin(k * .29 + 2.1), yc = r.top + r.height * .55;
        const bx = [innerWidth * .26, innerWidth * .74], ang = [a1, a2];
        beams.forEach((b, n) => b.style.setProperty('--a', ang[n].toFixed(2) + 'deg'));
        const hit = n => bx[n] + Math.tan(ang[n] * Math.PI / 180) * (H * 1.04 - yc);
        word.style.setProperty('--wx1', (hit(0) - r.left) + 'px'); word.style.setProperty('--wx2', (hit(1) - r.left) + 'px');
      }
      requestAnimationFrame(loop);
    })(0);
    return { horizonPx: () => innerHeight * (o.horizon || .44), wordLeft: () => word.getBoundingClientRect().left,
      set(text, over) { word.querySelectorAll('span').forEach(x => x.textContent = text); if (over) w.querySelector('.sc-over').textContent = over; } };
  }
  // плашка-заголовок рабочих экранов (вместо гигантского слова)
  function plaque(title, sub, pl) {
    const d = document.createElement('div'); d.className = 'plq'; d.innerHTML = `<b>${title}</b>${sub ? `<span>${sub}</span>` : ''}`; document.body.appendChild(d);
    if (pl) {   // маленький хоккеист стоит на верхней границе плашки, у левого края, смотрит в центр
      const w = document.createElement('div'); w.className = 'plq-pl';
      w.innerHTML = /\.webm$/.test(pl) ? `<video src="img/${pl}" autoplay muted loop playsinline></video>` : `<img src="img/${pl}" alt="">`;
      document.body.appendChild(w);
      const place = () => { const r = d.getBoundingClientRect(), m = w.firstChild, ratio = (m.naturalWidth || m.videoWidth || 1) / (m.naturalHeight || m.videoHeight || 1);
        w.style.bottom = (innerHeight - r.top - 2) + 'px'; w.style.height = Math.min(innerHeight * .26, 260, innerWidth * .15 / ratio) + 'px'; };
      w.firstChild.addEventListener('load', place); w.firstChild.addEventListener('loadedmetadata', place);
      place(); addEventListener('resize', place); setTimeout(place, 300);
    }
    return d;
  }
  // рукописная пометка тренера со стрелкой (стрелка дорисовывается)
  function note(parent, text, x, y, arrow) {
    const n = document.createElement('div'); n.className = 'hand'; n.style.left = x + 'px'; n.style.top = y + 'px'; n.innerHTML = text;
    if (arrow) { n.insertAdjacentHTML('beforeend', `<svg width="10" height="10" style="left:${arrow.x}px;top:${arrow.y}px"><path d="${arrow.d}"/></svg>`);
      const p = n.querySelector('path'); requestAnimationFrame(() => { const L = p.getTotalLength(); p.style.strokeDasharray = L; p.style.strokeDashoffset = L; p.style.transition = 'stroke-dashoffset .9s cubic-bezier(.22,.8,.2,1) .4s'; requestAnimationFrame(() => p.style.strokeDashoffset = 0); }); }
    parent.appendChild(n); return n;
  }
  // объёмная шайба: верхняя грань, рифлёный бортик, блик
  function puck(w, state) {
    const h = w * .62, id = 'pk' + Math.random().toString(36).slice(2, 7);
    const op = state === 'off' ? .38 : 1, ring = state === 'next' ? '<ellipse cx="50" cy="24" rx="27" ry="11" fill="none" stroke="#d3262e" stroke-width="5"/>' : '';
    const check = state === 'done' ? '<path d="M38 24 l8 6 l16 -12" fill="none" stroke="#3ccf6e" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>' : '';
    return `<svg class="puck3d" width="${w}" height="${h}" viewBox="0 0 100 62" style="opacity:${op}"><defs>
      <linearGradient id="${id}s" x1="0" x2="1"><stop offset="0" stop-color="#05080c"/><stop offset=".45" stop-color="#2b333d"/><stop offset=".6" stop-color="#3a434e"/><stop offset="1" stop-color="#06090d"/></linearGradient>
      <radialGradient id="${id}t" cx=".38" cy=".3" r=".8"><stop offset="0" stop-color="#4a5562"/><stop offset=".55" stop-color="#1b222b"/><stop offset="1" stop-color="#0b0f14"/></radialGradient></defs>
      <ellipse cx="50" cy="50" rx="46" ry="11" fill="rgba(10,20,30,.28)"/>
      <path d="M4 24 v16 a46 18 0 0 0 92 0 v-16z" fill="url(#${id}s)"/>
      <g stroke="rgba(255,255,255,.08)" stroke-width="1">${[...Array(18)].map((_, i) => { const x = 6 + i * 5.1; return `<line x1="${x}" y1="${30 + Math.sin(i / 17 * Math.PI) * 9}" x2="${x}" y2="${39 + Math.sin(i / 17 * Math.PI) * 13}"/>`; }).join('')}</g>
      <ellipse cx="50" cy="24" rx="46" ry="18" fill="url(#${id}t)"/>
      <ellipse cx="38" cy="17" rx="18" ry="5" fill="rgba(255,255,255,.18)"/>${ring}${check}</svg>`;
  }
  // крупный заголовок переливается между русским и английским, чтобы глаз привыкал к языку
  function flip(el, texts, ms = 6500) {
    let i = 0; setInterval(() => { el.classList.add('out'); setTimeout(() => { i = (i + 1) % texts.length; el.textContent = texts[i]; el.classList.remove('out'); }, 450); }, ms);
  }
  // звук арены: синтез прямо в браузере, файлов нет; выключается кнопкой в шапке
  const SFX = (() => {
    let ctx = null; const muted = () => true;   // звук выключен по решению: только визуальные эффекты
    const ac = () => (ctx = ctx || new (window.AudioContext || window.webkitAudioContext)());
    function tone(type, f0, f1, t0, dur, vol, filt) { const c = ac(), o = c.createOscillator(), g = c.createGain(); o.type = type;
      o.frequency.setValueAtTime(f0, c.currentTime + t0); if (f1) o.frequency.exponentialRampToValueAtTime(f1, c.currentTime + t0 + dur);
      g.gain.setValueAtTime(0.0001, c.currentTime + t0); g.gain.exponentialRampToValueAtTime(vol, c.currentTime + t0 + .03); g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + t0 + dur);
      let n = o; if (filt) { const f = c.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = filt; o.connect(f); n = f; } n.connect(g); g.connect(c.destination); o.start(c.currentTime + t0); o.stop(c.currentTime + t0 + dur + .05); }
    return {
      goal() { if (muted()) return; [[196, 0], [247, 0], [294, 0]].forEach(([f]) => tone('sawtooth', f, 0, 0, 1.1, .08, 1400)); tone('sine', 600, 1100, .1, .9, .05); tone('sine', 1100, 600, 1, .8, .04); },
      post() { if (muted()) return; tone('triangle', 2400, 1800, 0, .35, .12); tone('triangle', 3300, 2900, 0, .25, .06); tone('square', 180, 90, 0, .08, .05, 900); },
      horn() { if (muted()) return; [[147, 0], [185, 0], [220, 0]].forEach(([f]) => tone('sawtooth', f, 0, 0, 1.8, .09, 1200)); tone('sine', 500, 1200, .2, 1.4, .05); },
      muted, toggle() { localStorage.setItem('ice_mute', muted() ? '0' : '1'); return muted(); }
    };
  })();
  function go(href) { document.body.classList.add('leaving'); setTimeout(() => location.assign(href), 520); }
  function ready() { track(); requestAnimationFrame(() => setTimeout(() => document.body.classList.add('ready'), 60)); }
  return { LEAGUES, profile, header, scene, note, go, ready, puck, flip, SFX, streak, photo, plaque, abstract };
})();
