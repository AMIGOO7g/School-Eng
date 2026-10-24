/* Урок 1d. Spotlight 7, стр. 11: Culture Corner «Landmarks of the British Isles»
   По странице учебника: карта и столицы (упр. 1), тексты о замках Malahide, Edinburgh, Conwy и Tower of London (упр. 2–3),
   both (Grammar), рассказ о любимом замке (упр. 4), текст о достопримечательностях России (упр. 5). */
window.ICE_LESSON = {
  id: '1d', module: 1, code: '1d', pages: '11',
  en: 'Landmarks of the British Isles',
  ru: 'Достопримечательности Британских островов',
  minutes: 15,
  learn: ['Рассказывать о достопримечательностях', 'Использовать both: both friends, both … and …, both of us', 'Знать столицы стран Британских островов'],
  words: [
    ['landmark', 'достопримечательность'], ['date back to', 'восходить к, датироваться'], ['fortress', 'крепость'],
    ['spooky', 'жуткий, зловещий'], ['ghost', 'привидение'], ['unique', 'уникальный'],
    ['extinct volcano', 'потухший вулкан'], ['medieval', 'средневековый'], ['tower', 'башня'],
    ['view', 'вид'], ['be guarded by', 'охраняться'], ['legend', 'легенда']
  ],
  homework: [
    { ex: 'Упр. 1, стр. 11', task: 'Посмотри на карту: какая столица у каждой страны (части) Великобритании и Ирландии?',
      rule: 'На карте у каждой страны своим цветом есть город с точкой — это столица. Ответ: The capital of … is …',
      items: [
        { t: 'England', hint: 'Город на Темзе, на розовой части карты.' },
        { t: 'Scotland', hint: 'Город на жёлтой части карты, там стоит знаменитый замок на вулкане.' },
        { t: 'Wales', hint: 'Город на голубой части карты, внизу.' },
        { t: 'Northern Ireland', hint: 'Город на фиолетовой части карты.' },
        { t: 'Ireland', hint: 'Город на зелёной части карты, рядом с замком Malahide.' }
      ],
      practice: { q: 'The capital of Wales is ___ .', options: [
        { t: 'Cardiff', ok: true, why: 'Верно: Cardiff — столица Уэльса.' },
        { t: 'Belfast', why: 'Belfast — столица Северной Ирландии. У Уэльса — Cardiff.' }] } },
    { ex: 'Упр. 2b, стр. 11', task: 'Выпиши по одному необычному факту о каждом месте.',
      rule: 'Необычный факт — то, что удивляет. Ищи в каждом тексте выделенные слова: часто факт рядом с ними.',
      items: [
        { t: 'Malahide Castle', hint: 'Почему это место называют spooky?' },
        { t: 'Edinburgh Castle', hint: 'На чём построен замок? Посмотри слово unique.' },
        { t: 'Conwy Castle', hint: 'Сколько лет его строили и сколько у него башен?' },
        { t: 'The Tower of London', hint: 'Какие птицы там живут и что говорит легенда?' }
      ] },
    { ex: 'Упр. 3, стр. 11', task: 'Объясни слова, выделенные жирным, и задай вопросы по тексту, как в примере: Where’s Malahide Castle? — It’s north-east of Dublin City.',
      rule: 'Вопрос начинай с вопросительного слова: Where…? How many…? When…? Who…? What…? Ответ ищи в тексте и отвечай коротко.',
      items: [
        { t: 'When does Malahide Castle date back to?', hint: 'Найди слова dates back to в тексте о Malahide.' },
        { t: 'How many people visit Edinburgh Castle every year?', hint: 'В тексте есть число со словом million.' },
        { t: 'How many towers does Conwy Castle have?', hint: 'Найди слово towers.' },
        { t: 'Who guards the Tower of London?', hint: 'Найди слова guarded by.' }
      ] },
    { ex: 'Упр. 5, стр. 11', task: 'Портфолио: напиши короткий текст о достопримечательностях России (80–90 слов).',
      rule: 'Возьми 2–3 места. Для каждого: где находится, чем знаменито, интересный факт. Используй слова урока: fortress, medieval, unique, view, legend.',
      items: [
        { t: 'Вступление', hint: 'There are many famous landmarks in Russia.' },
        { t: 'Место 1', hint: 'The Moscow Kremlin is in the centre of Moscow. It is a medieval fortress…' },
        { t: 'Место 2', hint: 'The Hermitage in St Petersburg is … It has …' },
        { t: 'Завершение', hint: 'Both places are … / I would like to visit …' }
      ] }
  ],
  theory: [
    {
      title: 'both — оба',
      html: `
        <div class="duo">
          <div><span class="kicker">both + сущ. во мн. ч.</span>
            <p class="ex" data-say="Both friends live in London.">Both <b>friends</b> live in London.</p><p class="tr">Оба друга живут в Лондоне.</p>
            <span class="kicker">both + of + местоимение</span>
            <p class="ex" data-say="Both of us like castles.">Both <b>of us</b> like castles.</p><p class="tr">Мы оба любим замки.</p></div>
          <div><span class="kicker">both … and …</span>
            <p>«И … и …» — <mark>два слова сразу</mark>.</p>
            <p class="ex" data-say="It was used as both a fortress and a family home.">It was used as both <b>a fortress and a family home</b>.</p><p class="tr">Он был и крепостью, и семейным домом.</p></div>
        </div>
        <p class="note">Правило из рамки Grammar на стр. 11, пример — из текста о Malahide Castle.</p>`,
      check: { q: '«Мы оба любим историю» — как сказать?', options: [
        { t: 'Both of us like history.', ok: true, why: 'both + of + местоимение: both of us.' },
        { t: 'Both us like history.', why: 'С местоимением нужно of: both of us.' }] }
    },
    {
      title: 'Где находится и чем известно',
      html: `
        <p class="ex" data-say="Malahide Castle is north-east of Dublin City.">Malahide Castle is <b>north-east of</b> Dublin City.</p><p class="tr">Замок Малахайд — к северо-востоку от Дублина.</p>
        <p class="ex" data-say="It dates back to the 12th century.">It <b>dates back to</b> the 12th century.</p><p class="tr">Он относится к XII веку.</p>
        <p class="ex" data-say="The Tower is guarded by Yeoman Warders.">The Tower <b>is guarded by</b> Yeoman Warders.</p><p class="tr">Тауэр охраняют йомены-стражи («бифитеры»).</p>
        <p class="note">Стороны света: north (север), south (юг), east (восток), west (запад). Между ними — <mark>north-east</mark>, south-west…</p>`,
      check: { q: '«Он к югу от Лондона» — как сказать?', options: [
        { t: 'It’s south of London.', ok: true, why: 'Сторона света + of + город.' },
        { t: 'It’s south London.', why: 'Нужен предлог of: south of London.' }] }
    }
  ],
  tasks: [
    { type: 'choice', prompt: 'Вставь both правильно', text: '___ of us want to visit Edinburgh Castle.', options: [
      { t: 'Both', ok: true, why: 'both + of + местоимение: Both of us.' }, { t: 'All', why: 'Нас двое — значит Both of us.' }, { t: 'Both two', why: 'both уже значит «оба», two лишнее.' }] },
    { type: 'match', prompt: 'Соедини столицу и страну', pairs: [
      ['London', 'England'], ['Edinburgh', 'Scotland'], ['Cardiff', 'Wales'], ['Belfast', 'Northern Ireland'], ['Dublin', 'Ireland']],
      why: 'Посмотри ещё раз на карту на стр. 11.' },
    { type: 'input', prompt: 'Впиши слово', text: 'The capital of Scotland is ___ .', answer: 'Edinburgh', why: 'Столица Шотландии — Edinburgh.' },
    { type: 'match', prompt: 'Соедини слово и перевод', pairs: [
      ['fortress', 'крепость'], ['spooky', 'жуткий'], ['medieval', 'средневековый'], ['legend', 'легенда'], ['extinct volcano', 'потухший вулкан']],
      why: 'Это выделенные слова из текстов на стр. 11.' },
    { type: 'sort', prompt: 'Какой замок где?', groups: ['Malahide Castle', 'Conwy Castle'], items: [
      { t: 'Ireland', g: 0, why: 'Malahide — рядом с Дублином, Ирландия.' }, { t: '12th century', g: 0, why: 'Malahide dates back to the 12th century.' },
      { t: 'ghosts', g: 0, why: 'В Malahide часто видят привидения.' }, { t: 'Wales', g: 1, why: 'Conwy — в Уэльсе.' },
      { t: 'eight big towers', g: 1, why: 'У Conwy восемь больших башен.' }, { t: 'seven years to build', g: 1, why: 'Conwy строили семь лет.' }] },
    { type: 'write', prompt: 'Напиши по-английски', ru: 'Мы оба любим замки.', answer: 'Both of us like castles', alt: ['We both like castles'], why: 'both + of + местоимение: Both of us like…' },
    { type: 'build', prompt: 'Собери предложение', hint: 'Он относится к XII веку.',
      words: ['back', 'It', 'the', 'dates', 'to', 'century', '12th'],
      answer: 'It dates back to the 12th century',
      why: 'Схема: It dates back to + век.' },
    { type: 'error', prompt: 'Нажми на слово с ошибкой', tokens: ['Both', 'my', 'friend', 'like', 'old', 'castles.'], bad: [2],
      fix: 'Both my friends like old castles.',
      why: 'После both — множественное число: friends.',
      miss: 'Это слово на месте. Сколько друзей, если сказано both?' },
    { type: 'speak', prompt: 'Скажи вслух', say: 'It dates back to the twelfth century.', ru: 'Он относится к XII веку.', why: 'dates back to — «датируется, восходит к».' },
    { type: 'listen', prompt: 'Послушай и выбери, что прозвучало', say: 'Around one million people visit it every year.', options: [
      { t: 'Around one million people visit it every year.', ok: true, why: 'Верно: около миллиона человек каждый год.' },
      { t: 'Around one hundred people visit it every year.', why: 'Прислушайся: million, а не hundred.' },
      { t: 'One million people visited it last year.', why: 'Прозвучало every year и visit — Present Simple.' }] }
  ]
};
(window.ICE_LESSONS = window.ICE_LESSONS || {})[window.ICE_LESSON.id] = window.ICE_LESSON;
