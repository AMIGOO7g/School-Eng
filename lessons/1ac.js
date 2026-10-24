/* Across the Curriculum 1 (Geography). Spotlight 7, стр. 13: Geo-Kids Special Report «Mexico City»
   По странице учебника: описание города (упр. 1), заголовки A–F к разделам 1–5 (упр. 2b), рассказ о своём городе (упр. 3),
   проект «special report» о Москве / Санкт-Петербурге / своём городе (упр. 4). */
window.ICE_LESSON = {
  id: '1ac', module: 1, code: 'AC', pages: '13',
  en: 'Across the Curriculum 1',
  ru: 'География: Мехико',
  minutes: 12,
  learn: ['Описывать город: какой он и что в нём есть', 'Понимать текст по разделам и подбирать заголовки', 'Рассказать о своём городе: плюсы и минусы'],
  words: [
    ['noisy', 'шумный'], ['quiet', 'тихий'], ['crowded', 'многолюдный'], ['busy', 'оживлённый'],
    ['clean', 'чистый'], ['dirty', 'грязный'], ['nightlife', 'ночная жизнь'], ['blocks of flats', 'многоквартирные дома'],
    ['heavy traffic', 'плотное движение'], ['metro line', 'линия метро'], ['street market', 'уличный рынок'], ['leisure', 'досуг']
  ],
  homework: [
    { ex: 'Упр. 1, стр. 13', task: 'Послушай звуки и посмотри на картинки на стр. 13. Каким кажется город? Скажи, как в примере: I think it is busy. The traffic is heavy.',
      rule: 'Используй слова из скобок: noisy, quiet, crowded, busy, clean, dirty. Схема: I think it is + слово.',
      items: [
        { t: 'Улица с машинами (нижняя картинка слева)', hint: 'Много машин → busy, noisy. The traffic is heavy.' },
        { t: 'Рынок (средняя картинка)', hint: 'Много людей → crowded, busy.' },
        { t: 'Площадь с собором (большое фото)', hint: 'Что видно: buildings, people. Is it clean? Is it crowded?' }
      ] },
    { ex: 'Упр. 2b, стр. 13', task: 'Подбери заголовки A–F к разделам 1–5. Один заголовок лишний.',
      rule: 'Прочитай раздел и найди «ключевые слова»: про автобусы и метро — Transport, про дома — Homes, про еду — Food. Один заголовок не подойдёт ни к одному разделу.',
      items: [
        { t: 'Раздел 1', hint: 'Красивые здания, музеи, 9 миллионов посетителей в год. Кто приезжает в город?' },
        { t: 'Раздел 2', hint: 'Где живут люди: houses with gardens, blocks of flats.' },
        { t: 'Раздел 3', hint: 'heavy traffic, metro, buses — на чём ездят.' },
        { t: 'Раздел 4', hint: 'Что делают в свободное время: markets, cinema, football.' },
        { t: 'Раздел 5', hint: 'tortillas, frijoles, restaurants.' }
      ],
      practice: { q: 'Раздел про buses, trolley buses и metro — это…', options: [
        { t: 'A Transport', ok: true, why: 'Всё про то, на чём ездят по городу.' },
        { t: 'F The city centre', why: 'Про центр в разделе только одно слово. Главное — транспорт: A.' }] } },
    { ex: 'Упр. 3, стр. 13', task: 'Сделай заметки о своём городе или посёлке по заголовкам A–E и расскажи классу.',
      rule: 'Под каждым заголовком — 1–2 коротких предложения. Используй слова урока: busy, quiet, crowded, heavy traffic, street market.',
      items: [
        { t: 'A Transport', hint: 'People travel by bus / tram / metro. The traffic is (not) heavy.' },
        { t: 'B Food', hint: 'You can try … in local cafés.' },
        { t: 'C Tourism', hint: 'Tourists visit … It is famous for …' },
        { t: 'D Homes', hint: 'Most people live in blocks of flats / houses.' },
        { t: 'E Leisure', hint: 'In their free time people go to …' }
      ] },
    { ex: 'Упр. 4, стр. 13', task: 'Проект: собери информацию и напиши «special report» о Москве, Санкт-Петербурге или своём городе для сайта Geo-Kids (80–90 слов). Добавь плюсы и минусы.',
      rule: 'Начни с короткой справки, как в рамке слева на стр. 13: continent, population, language, currency. Потом 3–4 абзаца по заголовкам. В конце — что хорошо и что плохо.',
      items: [
        { t: 'Справка', hint: 'Continent: Europe. Population: … million. Language: Russian. Currency: rouble.' },
        { t: 'Плюсы', hint: 'It has got beautiful old buildings, green parks and museums.' },
        { t: 'Минусы', hint: 'It is a difficult city to drive in because of the heavy traffic.' }
      ] }
  ],
  theory: [
    {
      title: 'Какой это город?',
      html: `
        <div class="duo">
          <div><span class="kicker">пары-противоположности</span>
            <p class="ex" data-say="noisy, quiet">noisy ↔ quiet</p><p class="tr">шумный ↔ тихий</p>
            <p class="ex" data-say="clean, dirty">clean ↔ dirty</p><p class="tr">чистый ↔ грязный</p>
            <p class="ex" data-say="crowded, busy">crowded, busy</p><p class="tr">многолюдный, оживлённый</p></div>
          <div><span class="kicker">как сказать</span>
            <p class="ex" data-say="I think it is busy. The traffic is heavy.">I think it is <b>busy</b>. The traffic is <b>heavy</b>.</p><p class="tr">Думаю, там оживлённо. Плотное движение.</p></div>
        </div>
        <p class="note">Слова из упр. 1 на стр. 13.</p>`,
      check: { q: 'Противоположность noisy — это…', options: [
        { t: 'quiet', ok: true, why: 'noisy — шумный, quiet — тихий.' }, { t: 'crowded', why: 'crowded — многолюдный, это не противоположность.' }] }
    },
    {
      title: 'has got / there are',
      html: `
        <p>Чтобы рассказать, <mark>что есть в городе</mark>, используем две конструкции из текста:</p>
        <p class="ex" data-say="It has got beautiful old buildings and green parks.">It <b>has got</b> beautiful old buildings and green parks.</p><p class="tr">В нём есть красивые старые здания и зелёные парки.</p>
        <p class="ex" data-say="There are hundreds of buses.">There <b>are</b> hundreds of buses.</p><p class="tr">Там сотни автобусов.</p>
        <p class="note">Вспомни урок English in Use: <mark>hundreds of</mark> — без числа, с -s и of.</p>`,
      check: { q: '«В городе есть метро» — The city ___ a metro.', options: [
        { t: 'has got', ok: true, why: 'О городе (it) — has got.' }, { t: 'have got', why: 'city — «он», значит has got.' }] }
    }
  ],
  tasks: [
    { type: 'choice', prompt: 'Подбери заголовок к разделу', text: 'Mexico City is a difficult city to drive in because of the heavy traffic. → ___', options: [
      { t: 'Transport', ok: true, why: 'Про движение и метро — Transport.' }, { t: 'Homes', why: 'Homes — про дома. Здесь про дороги.' }, { t: 'Food', why: 'Food — про еду.' }] },
    { type: 'choice', prompt: 'Подбери заголовок к разделу', text: 'Many people live in beautiful houses with gardens. → ___', options: [
      { t: 'Homes', ok: true, why: 'Где живут — Homes.' }, { t: 'Tourism', why: 'Tourism — про туристов.' }, { t: 'Leisure', why: 'Leisure — про досуг.' }] },
    { type: 'choice', prompt: 'Подбери заголовок к разделу', text: 'The restaurants serve delicious local food like tortillas. → ___', options: [
      { t: 'Food', ok: true, why: 'Рестораны и тортильи — Food.' }, { t: 'Transport', why: 'Здесь про еду.' }] },
    { type: 'choice', prompt: 'Верно, неверно или не сказано?', text: 'The metro in Mexico City is very expensive.', options: [
      { t: 'F — неверно', ok: true, why: 'В разделе 3 сказано обратное: метро very cheap — очень дешёвое.' },
      { t: 'T — верно', why: 'Перечитай раздел 3: метро very cheap.' },
      { t: 'NS — не сказано', why: 'Про цену метро в тексте есть: very cheap. Значит, утверждение неверно.' }] },
    { type: 'sort', prompt: 'Разложи по заголовкам', groups: ['Transport', 'Leisure'], items: [
      { t: 'metro lines', g: 0, why: 'Метро — транспорт.' }, { t: 'trolley buses', g: 0, why: 'Троллейбусы — транспорт.' }, { t: 'heavy traffic', g: 0, why: 'Движение — транспорт.' },
      { t: 'street markets', g: 1, why: 'Рынки — досуг в тексте.' }, { t: 'street parties', g: 1, why: 'Праздники на улицах — досуг.' }, { t: 'horse racing', g: 1, why: 'Скачки — досуг.' }] },
    { type: 'match', prompt: 'Соедини слово и перевод', pairs: [
      ['noisy', 'шумный'], ['crowded', 'многолюдный'], ['blocks of flats', 'многоквартирные дома'], ['nightlife', 'ночная жизнь'], ['leisure', 'досуг']],
      why: 'Слова — из текста о Мехико.' },
    { type: 'choice', prompt: 'Справка о Мехико', text: 'The currency of Mexico is the ___ .', options: [
      { t: 'peso', ok: true, why: 'В справке на стр. 13: currency — Peso.' }, { t: 'euro', why: 'Евро — в Европе. В Мексике — песо.' }, { t: 'dollar', why: 'В справке указано Peso.' }] },
    { type: 'build', prompt: 'Собери предложение о своём городе', hint: 'Думаю, там оживлённо. (в моём городе)',
      words: ['think', 'I', 'town', 'my', 'is', 'busy'],
      answer: 'I think my town is busy',
      why: 'Схема: I think + о чём (my town) + is + какой (busy).' },
    { type: 'error', prompt: 'Нажми на слово с ошибкой', tokens: ['There', 'are', 'hundred', 'of', 'buses', 'in', 'the', 'city.'], bad: [2],
      fix: 'There are hundreds of buses in the city.',
      why: 'Без числа — hundreds of (с -s).',
      miss: 'Это слово на месте. Вспомни правило hundred / hundreds of.' },
    { type: 'listen', prompt: 'Послушай и выбери, что прозвучало', say: 'It is a difficult city to drive in.', options: [
      { t: 'It is a difficult city to drive in.', ok: true, why: 'Верно: по городу трудно ездить на машине.' },
      { t: 'It is a different city to live in.', why: 'Прозвучало difficult и drive.' },
      { t: 'It is an easy city to drive in.', why: 'Прозвучало difficult — трудный.' }] }
  ]
};
(window.ICE_LESSONS = window.ICE_LESSONS || {})[window.ICE_LESSON.id] = window.ICE_LESSON;
