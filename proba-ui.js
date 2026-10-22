/* ПРОБА: шапка и «пометки тренера» — рукописная фраза и маркерная стрелка к нужному месту. */
window.PUI = (() => {
  function header(active) {
    const st = ICE_STORE.load(), nx = ICE_NEXT(st);
    const h = document.createElement('header'); h.className = 'pbar';
    h.innerHTML = `<div class="wrap"><a class="brand" href="index.html">ICE <span>ENGLISH</span></a>
      <nav class="modes"><a href="homework.html" ${active === 'hw' ? 'class="on"' : ''}>Домашка</a><a href="school.html" ${active === 'topics' ? 'class="on"' : ''}>Сезон</a><a href="lesson.html?mode=review" ${active === 'pen' ? 'class="on"' : ''}>Штрафная</a></nav>
      <span class="sp"></span><a class="plink" href="parent.html">Для родителя</a>
      <a class="cont" href="proba-match.html">Продолжить: урок ${nx.l.code} <i>↗</i></a></div>`;
    document.body.prepend(h);
  }
  // стрелка «от руки»: из точки a в точку b с изгибом, лёгкая неровность линии, наконечник
  function note(text, at, to, opt = {}) {
    const t = document.createElement('div'); t.className = 'hand'; t.textContent = text;
    Object.assign(t.style, { left: at.x + 'px', top: at.y + 'px' }); document.body.appendChild(t);
    const r = t.getBoundingClientRect();
    const a = opt.from === 'left' ? { x: r.left - 6, y: r.top + r.height / 2 } : opt.from === 'bottom' ? { x: r.left + r.width * .4, y: r.bottom + 4 } : { x: r.right + 6, y: r.top + r.height * .6 };
    const b = to, bend = opt.bend ?? .35, dx = b.x - a.x, dy = b.y - a.y;
    const c1 = { x: a.x + dx * .15 - dy * bend, y: a.y + dy * .15 + dx * bend * .4 }, c2 = { x: a.x + dx * .8 - dy * bend * .3, y: a.y + dy * .85 + dx * bend * .1 };
    const ang = Math.atan2(b.y - c2.y, b.x - c2.x), L = 16;
    const h1 = { x: b.x - L * Math.cos(ang - .45), y: b.y - L * Math.sin(ang - .45) }, h2 = { x: b.x - L * Math.cos(ang + .45), y: b.y - L * Math.sin(ang + .45) };
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg'); svg.setAttribute('class', 'hand-svg');
    Object.assign(svg.style, { left: 0, top: 0, width: innerWidth + 'px', height: innerHeight + 'px', position: 'fixed' });
    svg.innerHTML = `<path d="M${a.x} ${a.y} C${c1.x} ${c1.y} ${c2.x} ${c2.y} ${b.x} ${b.y}"/><path class="head" d="M${h1.x} ${h1.y} L${b.x} ${b.y} L${h2.x} ${h2.y}"/>`;
    document.body.appendChild(svg);
    svg.querySelectorAll('path').forEach(p => p.style.setProperty('--l', p.getTotalLength() + 1));
    setTimeout(() => { t.classList.add('show'); requestAnimationFrame(() => svg.classList.add('show')); }, opt.delay ?? 900);
    return { remove() { t.remove(); svg.remove(); } };
  }
  function go(href) { document.body.classList.add('leaving'); setTimeout(() => location.assign(href), 550); }
  function ready() { requestAnimationFrame(() => setTimeout(() => document.body.classList.add('ready'), 60)); }
  return { header, note, go, ready };
})();
