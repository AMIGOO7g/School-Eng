/* English in Use 1. Spotlight 7, стр. 12: «Buying an underground ticket»
   По странице учебника: виды транспорта (упр. 1), фразы кассира и пассажира, диалоги A и B (упр. 2),
   покупка билетов по схеме метро и тарифам (упр. 3), числительные hundred / thousand / million (Grammar), звуки /ɪ/ и /iː/ (упр. 4). */
window.ICE_LESSON = {
  id: '1eu', module: 1, code: 'EU', pages: '12',
  en: 'English in Use 1',
  ru: 'Покупаем билет в метро',
  minutes: 12,
  learn: ['Купить билет в метро по-английски', 'Говорить большие числа: hundred, thousand, million', 'Различать звуки /ɪ/ и /iː/: pit — Pete'],
  words: [
    ['by tube', 'на метро'], ['on foot', 'пешком'], ['ticket seller', 'кассир'], ['passenger', 'пассажир'],
    ['single', 'билет в одну сторону'], ['return', 'билет туда и обратно'], ['Where to?', 'Куда?'], ['line', 'линия (метро)'],
    ['fare', 'стоимость проезда'], ['adult', 'взрослый'], ['Here you are.', 'Вот, пожалуйста.'], ['You’re welcome.', 'Не за что.']
  ],
  homework: [
    { ex: 'Упр. 2a, стр. 12', task: 'Кто говорит каждую фразу: кассир (a ticket seller) или пассажир (a passenger)?',
      rule: 'Кассир спрашивает и называет цену. Пассажир просит билет и спрашивает дорогу. Проверь по диалогам A и B.',
      items: [
        { t: 'Next, please.', hint: 'Так зовут следующего в очереди.' },
        { t: 'Where to?', hint: 'Спрашивают, куда ехать. Кто это спросит у окошка?' },
        { t: 'Single or return?', hint: 'Уточняют вид билета перед продажей.' },
        { t: 'Return to Barbican, please.', hint: 'Просят билет до станции.' },
        { t: 'That’s £6.00.', hint: 'Называют цену.' },
        { t: 'Which line do I take, please?', hint: 'Спрашивают, на какой линии ехать.' },
        { t: 'You’re welcome.', hint: 'Отвечают на «Thanks a lot».' }
      ],
      practice: { q: '«Single or return?» говорит…', options: [
        { t: 'ticket seller', ok: true, why: 'Кассир уточняет, какой билет продать.' },
        { t: 'passenger', why: 'Пассажир отвечает на этот вопрос, а спрашивает кассир.' }] } },
    { ex: 'Упр. 2b, стр. 12', task: 'Куда хочет поехать каждый пассажир?',
      rule: 'Ищи в диалоге реплику пассажира после вопроса «Where to?» или в его просьбе о билете.',
      items: [
        { t: 'Dialogue A', hint: 'После Where to? пассажир называет станцию с парком в названии.' },
        { t: 'Dialogue B', hint: 'Пассажир просит return to …' }
      ] },
    { ex: 'Упр. 3, стр. 12', task: 'Портфолио: разыграй похожие диалоги. Ты едешь от Liverpool Street до Westminster (2 adult & 2 child), Aldgate (2 adult & 1 child), Euston Square (3 adult).',
      rule: 'Цены: взрослый £3, детский £1.50 (зона 1). Посчитай сумму и вставь в фразу That’s £… Если return — умножь на 2.',
      items: [
        { t: 'Westminster: 2 adult & 2 child', hint: '2 × £3 + 2 × £1.50 = ? (для single). Пассажир: Two adult and two child tickets to Westminster, please.' },
        { t: 'Aldgate: 2 adult & 1 child', hint: '2 × £3 + 1 × £1.50 = ?' },
        { t: 'Euston Square: 3 adult', hint: '3 × £3 = ?' }
      ],
      practice: { q: '2 adult + 2 child, single: That’s ___ .', options: [
        { t: '£9.00', ok: true, why: '2 × 3 = 6, 2 × 1.50 = 3, всего 9.' },
        { t: '£6.00', why: 'Это только взрослые. Добавь ещё 2 детских по £1.50.' },
        { t: '£12.00', why: 'Это было бы 4 взрослых. Детские дешевле — по £1.50.' }] } },
    { ex: 'Упр. 4, стр. 12', task: 'Распредели слова по звукам /ɪ/ и /iː/: Pete, pit, peal, pill, beat, bit, slip, sleep.',
      rule: 'Правило чтения: ea и ee читаются долго — /iː/ (steal, seek). Буква i в закрытом слоге — коротко /ɪ/ (Nick). Pete — особый случай: e + согласная + e тоже /iː/.',
      items: [
        { t: '/iː/ — долгий звук', hint: 'Слова с ee, ea и Pete.' },
        { t: '/ɪ/ — короткий звук', hint: 'Слова с одной буквой i.' }
      ] }
  ],
  theory: [
    {
      title: 'Покупаем билет',
      html: `
        <div class="duo">
          <div><span class="kicker">говорит кассир</span>
            <p class="ex" data-say="Next, please.">Next, please.</p><p class="tr">Следующий, пожалуйста.</p>
            <p class="ex" data-say="Where to?">Where to?</p><p class="tr">Куда?</p>
            <p class="ex" data-say="Single or return?">Single or return?</p><p class="tr">В одну сторону или туда и обратно?</p>
            <p class="ex" data-say="That's six pounds.">That’s £6.00.</p><p class="tr">С вас 6 фунтов.</p></div>
          <div><span class="kicker">говорит пассажир</span>
            <p class="ex" data-say="Two tickets to St James's Park, please.">Two tickets to St James’s Park, please.</p><p class="tr">Два билета до Сент-Джеймсского парка.</p>
            <p class="ex" data-say="Which line do I take, please?">Which line do I take, please?</p><p class="tr">На какой линии мне ехать?</p>
            <p class="ex" data-say="Here you are. Thanks a lot.">Here you are. Thanks a lot.</p><p class="tr">Вот, пожалуйста. Большое спасибо.</p></div>
        </div>
        <p class="note">Фразы из диалогов A и B на стр. 12. single — в одну сторону, return — туда и обратно.</p>`,
      check: { q: 'Тебе нужен билет туда и обратно. Ты скажешь…', options: [
        { t: 'A return ticket, please.', ok: true, why: 'return — туда и обратно.' },
        { t: 'A single ticket, please.', why: 'single — только в одну сторону.' }] }
    },
    {
      title: 'Большие числа',
      html: `
        <div class="duo">
          <div><span class="kicker">с числом — без -s</span>
            <p class="ex" data-say="seven hundred students">seven <b>hundred</b> students</p><p class="tr">700 учеников</p>
            <p class="ex" data-say="fifteen thousand tourists">fifteen <b>thousand</b> tourists</p><p class="tr">15 000 туристов</p>
            <p class="ex" data-say="twenty-one million people">twenty-one <b>million</b> people</p><p class="tr">21 000 000 человек</p></div>
          <div><span class="kicker">без числа — с -s и of</span>
            <p class="ex" data-say="hundreds of students">hundred<b>s of</b> students</p><p class="tr">сотни учеников</p>
            <p class="ex" data-say="thousands of tourists">thousand<b>s of</b> tourists</p><p class="tr">тысячи туристов</p>
            <p class="ex" data-say="millions of people">million<b>s of</b> people</p><p class="tr">миллионы людей</p></div>
        </div>
        <p class="note">Правило из рамки Grammar на стр. 12. Главное: <mark>с числом нет -s</mark>.</p>`,
      check: { q: '«Три тысячи зрителей» — как правильно?', options: [
        { t: 'three thousand fans', ok: true, why: 'С числом — без -s: three thousand.' },
        { t: 'three thousands fans', why: 'С числом thousand не получает -s.' },
        { t: 'three thousands of fans', why: 'thousands of — только без числа: «тысячи».' }] }
    },
    {
      title: 'Звуки /ɪ/ и /iː/',
      html: `
        <div class="duo">
          <div><span class="kicker">/iː/ — долгий</span><p>ea, ee: <mark>тянем</mark> звук.</p>
            <p class="ex" data-say="sleep, beat, Pete">sl<b>ee</b>p, b<b>ea</b>t, P<b>e</b>te</p><p class="tr">спать, бить, Пит</p></div>
          <div><span class="kicker">/ɪ/ — короткий</span><p>i в закрытом слоге: <mark>коротко</mark>.</p>
            <p class="ex" data-say="slip, bit, pit">sl<b>i</b>p, b<b>i</b>t, p<b>i</b>t</p><p class="tr">скользить, кусочек, яма</p></div>
        </div>
        <p class="note">Нажми ▶ и послушай разницу. Правило чтения — на стр. 12, упр. 4.</p>`,
      check: { q: 'В каком слове долгий звук /iː/?', options: [
        { t: 'sleep', ok: true, why: 'ee — долгий /iː/.' }, { t: 'slip', why: 'i в закрытом слоге — короткий /ɪ/.' }] }
    }
  ],
  tasks: [
    { type: 'choice', prompt: 'Что ответит кассир?', text: 'Passenger: Two tickets, please. — Ticket seller: ___', options: [
      { t: 'Where to?', ok: true, why: 'Кассиру нужно знать, куда вы едете.' }, { t: 'You’re welcome.', why: 'Так отвечают на «спасибо».' }, { t: 'Which line do I take?', why: 'Это спрашивает пассажир.' }] },
    { type: 'choice', prompt: 'Выбери вид билета', text: 'I want to go there and come back. I need a ___ ticket.', options: [
      { t: 'return', ok: true, why: 'Туда и обратно — return.' }, { t: 'single', why: 'single — только в одну сторону.' }] },
    { type: 'input', prompt: 'Впиши слово', text: 'A ticket there and back is a ___ ticket.', answer: 'return', why: 'Туда и обратно — return.' },
    { type: 'sort', prompt: 'Кто это говорит?', groups: ['ticket seller', 'passenger'], items: [
      { t: 'Next, please.', g: 0, why: 'Кассир зовёт следующего.' }, { t: 'Single or return?', g: 0, why: 'Кассир уточняет билет.' },
      { t: 'That’s £12.00.', g: 0, why: 'Кассир называет цену.' }, { t: 'Which line do I take?', g: 1, why: 'Пассажир спрашивает линию.' },
      { t: 'Here you are.', g: 1, why: 'Пассажир отдаёт деньги.' }, { t: 'Thanks a lot.', g: 1, why: 'Пассажир благодарит.' }] },
    { type: 'sort', prompt: 'Разложи по звукам', groups: ['/iː/ долгий', '/ɪ/ короткий'], items: [
      { t: 'sleep', g: 0, why: 'ee — /iː/.' }, { t: 'peal', g: 0, why: 'ea — /iː/.' }, { t: 'beat', g: 0, why: 'ea — /iː/.' },
      { t: 'slip', g: 1, why: 'i — /ɪ/.' }, { t: 'pill', g: 1, why: 'i — /ɪ/.' }, { t: 'bit', g: 1, why: 'i — /ɪ/.' }] },
    { type: 'write', prompt: 'Напиши по-английски', ru: 'Два билета до Вестминстера, пожалуйста.', answer: 'Two tickets to Westminster, please', alt: ['Two tickets to Westminster please'], why: 'Сколько билетов + to + станция + please.' },
    { type: 'build', prompt: 'Собери просьбу пассажира', hint: 'Два билета туда и обратно до Барбикан, пожалуйста.',
      words: ['tickets,', 'Two', 'to', 'return', 'Barbican,', 'please'],
      answer: 'Two tickets, return to Barbican, please',
      alt: ['Two return tickets to Barbican, please'],
      why: 'Как в диалоге B: сколько билетов → какой (return) → куда (to Barbican) → please.' },
    { type: 'match', prompt: 'Соедини фразу и перевод', pairs: [
      ['Where to?', 'Куда?'], ['Here you are.', 'Вот, пожалуйста.'], ['You’re welcome.', 'Не за что.'], ['on foot', 'пешком'], ['by tube', 'на метро']],
      why: 'Фразы из диалогов на стр. 12.' },
    { type: 'speak', prompt: 'Скажи вслух', say: 'Which line do I take, please?', ru: 'На какой линии мне ехать?', why: 'Вопрос пассажира из диалога B.' },
    { type: 'listen', prompt: 'Послушай и выбери слово', say: 'sleep', options: [
      { t: 'sleep', ok: true, why: 'Долгий звук /iː/ — sleep.' }, { t: 'slip', why: 'Прозвучал долгий звук. slip — короткий /ɪ/.' }] }
  ]
};
(window.ICE_LESSONS = window.ICE_LESSONS || {})[window.ICE_LESSON.id] = window.ICE_LESSON;
