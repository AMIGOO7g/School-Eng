/* Общая шапка всех внутренних экранов: логотип, три режима, путь, «Продолжить», страница для родителя.
   Плюс учёт времени занятий и общий переход между экранами. */
window.IceUI = (() => {
  function go(href) { document.body.classList.add('leaving'); setTimeout(() => location.assign(href), 550); }
  function header({ active, crumbs = [], cont = true } = {}) {
    const store = ICE_STORE.load(), nx = ICE_NEXT(store);
    const h = document.createElement('header'); h.className = 'top topbar';
    h.innerHTML = `<a class="brand" href="index.html">ICE <span>ENGLISH</span></a>
      <nav class="seg modes" aria-label="Режим">
        <button data-m="hw">Домашка</button><button data-m="topics">Темы</button><button data-m="review">Повторить</button></nav>
      <nav class="crumbs" aria-label="Где ты сейчас">${crumbs.map(c => c.href ? `<a href="${c.href}" data-go>${c.t}</a>` : `<span>${c.t}</span>`).join('<i>/</i>')}</nav>
      <span class="spacer"></span>
      <a class="parent-link" href="parent.html" data-go>Для родителя</a>
      ${cont ? `<a class="continue" href="${nx.href}" data-go>Продолжить: <b>урок ${nx.l.code}</b><i>↗</i></a>` : ''}`;
    document.body.prepend(h);
    const M = { hw: 'homework.html', topics: 'school.html', review: 'lesson.html?mode=review' };
    h.querySelectorAll('.modes button').forEach(b => { b.classList.toggle('on', b.dataset.m === active); b.onclick = () => go(M[b.dataset.m]); });
    h.querySelectorAll('[data-go]').forEach(a => a.onclick = e => { e.preventDefault(); go(a.getAttribute('href')); });
    return h;
  }
  // время занятий: каждые 30 секунд, пока вкладка открыта
  function track() {
    setInterval(() => { if (document.hidden) return; const s = ICE_STORE.load(), d = new Date().toISOString().slice(0, 10);
      s.time = s.time || {}; s.time[d] = (s.time[d] || 0) + 30; ICE_STORE.save(s); }, 30000);
  }
  function ready() { requestAnimationFrame(() => setTimeout(() => { document.body.classList.add('ready'); document.body.classList.remove('arriving'); }, 60)); }
  return { header, go, track, ready };
})();
