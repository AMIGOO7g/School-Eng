/* Общий фон всех экранов: переливающийся градиент как на старте + горы, нарисованные в SVG.
   Горы строятся по зерну, поэтому одинаковы при каждом заходе, и перерисовываются под размер экрана. */
window.ICE_WORLD = (() => {
  const NS = 'http://www.w3.org/2000/svg';
  const rng = seed => () => (seed = (seed * 16807) % 2147483647) / 2147483647;
  // линия хребта: несколько вершин + мелкие изломы
  function ridge(W, H, base, amp, seed, peaks, rough) {
    const r = rng(seed), n = 160, pts = [];
    const P = Array.from({ length: peaks }, () => ({ x: r(), h: .45 + r() * .55, w: .06 + r() * .1 }));
    let jag = 0;
    for (let i = 0; i <= n; i++) {
      const x = i / n; let y = 0;
      P.forEach(p => { const d = Math.abs(x - p.x) / p.w; y = Math.max(y, p.h * Math.max(0, 1 - d) ** 1.25); });
      jag = jag * .6 + (r() - .5) * rough;
      y = Math.max(.08, y + jag + .05 * Math.sin(x * 23 + seed));
      pts.push([x * W, base - y * amp]);
    }
    return pts;
  }
  const path = (pts, W, H) => 'M0,' + H + ' L' + pts.map(p => p[0].toFixed(1) + ',' + p[1].toFixed(1)).join(' L') + ` L${W},${H} Z`;
  const el = (tag, attrs) => { const e = document.createElementNS(NS, tag); for (const k in attrs) e.setAttribute(k, attrs[k]); return e; };

  function build(svgBack, svgFront, hz, seed) {
    const W = innerWidth, H = innerHeight, y0 = H * hz;
    [svgBack, svgFront].forEach(s => { s.innerHTML = ''; s.setAttribute('viewBox', `0 0 ${W} ${H}`); s.setAttribute('width', W); s.setAttribute('height', H); });
    const defs = el('defs', {});
    const grad = (id, stops, x2 = 0, y2 = 1) => { const g = el('linearGradient', { id, x1: 0, y1: 0, x2, y2 }); stops.forEach(([o, c, a]) => g.appendChild(el('stop', { offset: o, 'stop-color': c, 'stop-opacity': a == null ? 1 : a }))); defs.appendChild(g); };
    grad('gFar', [[0, '#e9eff8'], [1, '#cddbea']]);
    grad('gMid', [[0, '#f7f9fc'], [.35, '#d9e3ef'], [1, '#b9cadd']]);
    grad('gNear', [[0, '#ffffff'], [.25, '#dfe7f1'], [1, '#a9bcd2']]);
    grad('gHaze', [[0, '#eef3f9', 0], [.55, '#eef3f9', .85], [1, '#eef3f9', 0]]);
    grad('gIce', [[0, '#f4f7fb', .95], [.5, '#e7eef6', .7], [1, '#dde7f1', .55]]);
    svgBack.appendChild(defs);
    const d2 = defs.cloneNode(true); svgFront.appendChild(d2);
    const amp = H * .26;
    // дальние хребты — за типографикой
    const far = ridge(W, H, y0, amp * .95, seed, 7, .035), far2 = ridge(W, H, y0, amp * .7, seed + 11, 9, .04);
    svgBack.appendChild(el('path', { d: path(far, W, H), fill: 'url(#gFar)', opacity: .7, class: 'L1' }));
    svgBack.appendChild(el('path', { d: path(far2, W, H), fill: 'url(#gFar)', opacity: .9, class: 'L2' }));
    // ближние хребты — перед типографикой; снег светлее у вершин
    const mid = ridge(W, H, y0, amp * .78, seed + 23, 6, .05), near = ridge(W, H, y0 + H * .015, amp * .48, seed + 37, 8, .05);
    svgFront.appendChild(el('path', { d: path(mid, W, H), fill: 'url(#gMid)', class: 'L3' }));
    // тени склонов на среднем хребте
    const sh = mid.map((p, i) => [p[0] + W * .012, p[1] + (i % 2 ? amp * .08 : amp * .14)]);
    svgFront.appendChild(el('path', { d: path(sh, W, H), fill: '#9fb4cc', opacity: .22, class: 'L3' }));
    svgFront.appendChild(el('path', { d: path(near, W, H), fill: 'url(#gNear)', class: 'L4' }));
    svgFront.appendChild(el('rect', { x: 0, y: y0 - H * .07, width: W, height: H * .14, fill: 'url(#gHaze)' }));
    // лёд: ровная светлая гладь до низа экрана с мягкими бликами
    svgFront.appendChild(el('rect', { x: 0, y: y0, width: W, height: H - y0, fill: 'url(#gIce)' }));
    svgFront.appendChild(el('line', { x1: 0, y1: y0, x2: W, y2: y0, stroke: '#ffffff', 'stroke-width': 1.5, opacity: .9 }));
  }

  function mount(opts) {
    const o = Object.assign({ hz: .44, seed: 7, giant: null }, opts);
    const world = document.createElement('div'); world.className = 'world';
    world.innerHTML = '<div class="grad"></div><div class="grain"></div>';
    const back = document.createElementNS(NS, 'svg'); back.setAttribute('class', 'ridges back');
    const front = document.createElementNS(NS, 'svg'); front.setAttribute('class', 'ridges front');
    world.appendChild(back);
    if (o.giant) world.appendChild(o.giant);
    world.appendChild(front);
    document.body.prepend(world);
    const draw = () => { build(back, front, o.hz, o.seed); document.documentElement.style.setProperty('--hz', (innerHeight * o.hz).toFixed(0) + 'px'); };
    draw(); let t; addEventListener('resize', () => { clearTimeout(t); t = setTimeout(draw, 80); });
    // лёгкий параллакс от мыши: дальние слои смещаются меньше ближних
    let mx = 0, cx = 0;
    addEventListener('pointermove', e => { mx = e.clientX / innerWidth - .5; });
    (function loop() {
      cx += (mx - cx) * .06;
      back.style.transform = `translateX(${(-cx * 10).toFixed(2)}px)`;
      front.style.transform = `translateX(${(-cx * 22).toFixed(2)}px)`;
      if (o.giant) o.giant.style.setProperty('--mx', (-cx * 16).toFixed(2) + 'px');
      requestAnimationFrame(loop);
    })();
    return { world, hz: () => innerHeight * o.hz };
  }
  return { mount };
})();
