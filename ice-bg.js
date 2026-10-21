/* Общий фон: анимированный градиент, как на стартовой, и горы, нарисованные в SVG.
   Большая надпись (цифра модуля, название, код урока) встаёт между слоями гор — низ уходит за хребет. */
window.IceBG = (() => {
  const NS = 'http://www.w3.org/2000/svg';
  // детерминированный случайный ряд, чтобы горы не прыгали при каждой загрузке
  const rng = seed => () => { seed |= 0; seed = seed + 0x6D2B79F5 | 0; let t = Math.imul(seed ^ seed >>> 15, 1 | seed); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
  const LAYERS = [   // от дальнего к ближнему: высота, шероховатость, цвет снега, цвет склона, прозрачность
    { h: .27, rough: .62, top: '#f6f9fc', base: '#d9e3ee', op: .55 },
    { h: .23, rough: .64, top: '#f8fafd', base: '#c6d5e5', op: .72 },
    { h: .18, rough: .66, top: '#fbfcfe', base: '#adc2d8', op: .88 },
    { h: .11, rough: .68, top: '#f2f6fa', base: '#97afc8', op: .96 }
  ];
  // хребет методом смещения средней точки — даёт естественный горный силуэт
  function ridge(W, base, H, rough, R) {
    const n = 257, y = new Array(n).fill(0);
    y[0] = R() * .6; y[n - 1] = R() * .6;
    for (let step = n - 1, amp = 1; step > 1; step >>= 1, amp *= rough)
      for (let i = step >> 1; i < n; i += step) y[i] = (y[i - (step >> 1)] + y[i + (step >> 1)]) / 2 + (R() - .5) * amp;
    // вершины: острые пики с изломанными склонами поверх фрактального шума
    const pk = []; const np = 3 + (R() * 4 | 0);
    for (let k = 0; k < np; k++) pk.push({ c: (k + .2 + R() * .6) / np, h: .55 + R() * .45, w: (.5 + R() * .5) / np });
    const mn = Math.min(...y), mx = Math.max(...y);
    return y.map((v, i) => {
      const t = i / (n - 1); let e = 0;
      pk.forEach(p => { const d = Math.abs(t - p.c) / p.w; if (d < 1) e = Math.max(e, p.h * Math.pow(1 - d, 1.6)); });
      const f = (v - mn) / (mx - mn);
      const hgt = Math.pow(Math.min(1, e * .78 + f * .32), 1.15);
      return [t * (W + 40) - 20, base - hgt * H];
    });
  }
  function mount(stage, opt = {}) {
    stage.classList.add('ibg');
    const grad = document.createElement('div'); grad.className = 'ibg-grad';
    const svg = document.createElementNS(NS, 'svg'); svg.setAttribute('class', 'ibg-svg');
    stage.prepend(svg); stage.prepend(grad);
    const giant = { text: opt.text || '', layer: opt.giantBehind ?? 2, x: opt.giantX ?? .5, size: opt.giantSize ?? .30, sink: opt.giantSink ?? .42 };
    let horizon = 0, txt = null;
    function draw() {
      const W = innerWidth, H = innerHeight; svg.setAttribute('viewBox', `0 0 ${W} ${H}`); svg.innerHTML = '';
      horizon = H * (opt.horizon ?? .44);
      const defs = document.createElementNS(NS, 'defs'); svg.appendChild(defs);
      defs.innerHTML = `<linearGradient id="ibg-ice" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f4f8fb" stop-opacity=".7"/><stop offset=".35" stop-color="#e7eef6" stop-opacity=".3"/><stop offset="1" stop-color="#e7eef6" stop-opacity="0"/></linearGradient>
        <linearGradient id="ibg-haze" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#eef3f8" stop-opacity="0"/><stop offset="1" stop-color="#eef3f8" stop-opacity=".95"/></linearGradient>`;
      const R = rng(opt.seed || 7);
      LAYERS.forEach((L, li) => {
        const base = horizon + 2, pts = ridge(W, base, H * L.h, L.rough, R);
        const top = Math.min(...pts.map(p => p[1])), id = 'ibg-l' + li;
        defs.insertAdjacentHTML('beforeend', `<linearGradient id="${id}g" gradientUnits="userSpaceOnUse" x1="0" y1="${top}" x2="0" y2="${base}"><stop offset="0" stop-color="${L.top}"/><stop offset=".38" stop-color="${L.base}"/><stop offset="1" stop-color="${L.base}" stop-opacity=".7"/></linearGradient>`);
        const line = pts.map(p => p[0].toFixed(1) + ' ' + p[1].toFixed(1)).join(' L');
        const d = 'M' + line + ` L${W + 20} ${base} L-20 ${base} Z`;
        const g = document.createElementNS(NS, 'g'); g.setAttribute('class', 'ibg-layer'); g.style.setProperty('--depth', li);
        g.innerHTML = `<path d="${d}" fill="url(#${id}g)" opacity="${L.op}"/>
          <path d="M${line}" fill="none" stroke="#ffffff" stroke-opacity="${.35 + li * .12}" stroke-width="${.8 + li * .3}"/>
          <rect x="-20" y="${base - H * L.h * .55}" width="${W + 40}" height="${H * L.h * .55 + 3}" fill="url(#ibg-haze)" opacity="${.75 - li * .12}"/>`;
        if (li === giant.layer && giant.text) {
          const t = document.createElementNS(NS, 'text'); t.setAttribute('class', 'ibg-giant'); t.textContent = giant.text;
          t.setAttribute('x', W * giant.x); t.setAttribute('y', horizon - H * (opt.giantLift ?? .02)); t.setAttribute('text-anchor', 'middle');
          t.style.fontSize = (H * giant.size) + 'px';
          const wrap = document.createElementNS(NS, 'g'); wrap.setAttribute('class', 'ibg-giant-wrap'); wrap.appendChild(t);
          svg.appendChild(wrap); txt = t;
        }
        svg.appendChild(g);
      });
      // туман у подножия
      svg.insertAdjacentHTML('beforeend', `<rect x="0" y="${horizon - H * .05}" width="${W}" height="${H * .09}" fill="url(#ibg-mist)"/>`);
      defs.insertAdjacentHTML('beforeend', `<linearGradient id="ibg-mist" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#f2f6fa" stop-opacity="0"/><stop offset=".55" stop-color="#f2f6fa" stop-opacity=".85"/><stop offset="1" stop-color="#f2f6fa" stop-opacity="0"/></linearGradient>`);
      // лёд под горами и лёгкое отражение
      svg.insertAdjacentHTML('beforeend', `<rect x="0" y="${horizon + 2}" width="${W}" height="${H - horizon}" fill="url(#ibg-ice)"/>
        <g opacity=".5" stroke="#ffffff" stroke-width="1">${[...Array(7)].map((_, i) => { const y = horizon + (H - horizon) * Math.pow((i + 1) / 8, 1.8); return `<line x1="0" y1="${y}" x2="${W}" y2="${y}" stroke-opacity="${.5 - i * .05}"/>`; }).join('')}</g>`);
      if (txt && opt.onText) opt.onText(txt);
    }
    draw(); addEventListener('resize', draw);
    // лёгкий параллакс от мыши
    let mx = 0, my = 0, cx = 0, cy = 0;
    addEventListener('pointermove', e => { mx = e.clientX / innerWidth - .5; my = e.clientY / innerHeight - .5; });
    (function loop() { cx += (mx - cx) * .05; cy += (my - cy) * .05;
      svg.querySelectorAll('.ibg-layer').forEach(g => { const d = +g.style.getPropertyValue('--depth'); g.setAttribute('transform', `translate(${(-cx * (4 + d * 7)).toFixed(2)} ${(-cy * (1 + d * 2)).toFixed(2)})`); });
      if (txt) txt.setAttribute('transform', `translate(${(-cx * 10).toFixed(2)} ${(-cy * 3).toFixed(2)})`);
      requestAnimationFrame(loop); })();
    return {
      setText(t) { giant.text = t; if (txt) txt.textContent = t; else draw(); },
      text: () => txt, horizon: () => horizon,
      redraw: draw
    };
  }
  return { mount };
})();
