/* Урок 1c. Spotlight 7, стр. 10: «Hanging out»
   По странице учебника: mind map Free time activities (упр. 1), текст о Сиднее — Kelly и Jamie (упр. 2),
   предлоги on, for, from, at, about, to (упр. 2b), рассказ о любимом месте (упр. 3), статья (упр. 4). */
window.ICE_LESSON = {
  id: '1c', module: 1, code: '1c', pages: '10',
  en: 'Hanging out',
  ru: 'Свободное время: любимые места',
  minutes: 15,
  learn: ['Говорить о том, чем занимаешься в свободное время', 'Правильно ставить предлоги: choose from, ride on, crazy about…', 'Рассказать о любимом месте в городе'],
  words: [
    ['hang out', 'проводить время, тусоваться'], ['do the gardening', 'работать в саду'], ['have lunch outdoors', 'обедать на улице'],
    ['surf the Net', 'сидеть в интернете'], ['board games', 'настольные игры'], ['go sunbathing', 'загорать'],
    ['play beach volleyball', 'играть в пляжный волейбол'], ['spot', 'место (любимое)'], ['including', 'включая'],
    ['attraction', 'достопримечательность'], ['be crazy about', 'обожать, быть без ума'], ['skating gear', 'снаряжение для катания']
  ],
  homework: [
    { ex: 'Упр. 1, стр. 10', task: 'Добавь свои идеи в mind map «Free time activities»: что ты делаешь в тёплый, дождливый и жаркий день.',
      rule: 'Mind map — схема: в центре тема, вокруг ветки. На каждую ветку допиши 2–3 занятия. Начинай с глагола: go…, play…, watch…',
      items: [
        { t: 'on a warm day?', hint: 'Например: go cycling, have a picnic, go for a walk in the park.' },
        { t: 'on a rainy day?', hint: 'Например: listen to music, bake a cake, draw pictures.' },
        { t: 'on a hot day?', hint: 'Например: go swimming, eat ice cream, play football on the beach.' }
      ] },
    { ex: 'Упр. 2b, стр. 10', task: 'Вставь в текст о Сиднее предлоги on, for, from, at, about, to.',
      rule: 'Предлог часто зависит от слова рядом — его запоминают парой: choose from, a ride on, a film at, a visit to, crazy about, the place to shop for.',
      items: [
        { t: '1) plenty of activities to choose …', hint: 'choose … — выбирать из чего-то.' },
        { t: '2) a ride … the carousel', hint: 'Кататься на карусели — a ride … the carousel. Как «на» поверхности.' },
        { t: '3) a film … the IMAX theatre', hint: 'Фильм в кинотеатре — место-точка, как at school, at home.' },
        { t: '4) a visit … the fantasy world', hint: 'Визит куда-то — направление, как go … school.' },
        { t: '5) I’m crazy … one thing', hint: 'Быть без ума от чего-то — be crazy …' },
        { t: '6) the best place to shop … skating gear', hint: 'Ходить за покупками, искать что-то — shop … something.' }
      ],
      practice: { q: 'I’m crazy ___ skateboarding!', options: [
        { t: 'about', ok: true, why: 'Обожать что-то — be crazy about.' },
        { t: 'for', why: 'Устойчивая пара — crazy about.' },
        { t: 'on', why: 'Устойчивая пара — crazy about.' }] } },
    { ex: 'Упр. 2b, стр. 10', task: 'Объясни слова, выделенные жирным: spot, including, surfing, skating gear.',
      rule: 'Объяснить слово можно по-английски простыми словами или по-русски. Подсказка — в предложении, где оно стоит.',
      items: [
        { t: 'spot', hint: 'My coolest spot is Darling Harbour — речь о любимом месте.' },
        { t: 'including', hint: '«…lots of attractions, including Sea Life Sanctuary» — перечисляем, что входит в число.' },
        { t: 'surfing', hint: 'Популярный пляж, где катаются на доске по волнам.' },
        { t: 'skating gear', hint: 'Всё, что нужно скейтеру: доска, шлем, защита.' }
      ] },
    { ex: 'Упр. 4, стр. 10', task: 'Портфолио: напиши статью о месте, куда ты ходишь в свободное время (70–90 слов).',
      rule: 'Пять пунктов из учебника — пять частей статьи. На каждый пункт 1–2 предложения. Время — Present Simple: это то, что бывает обычно.',
      items: [
        { t: 'where it is', hint: 'My favourite place is … It is in the centre of …' },
        { t: 'how long it takes you to get there', hint: 'It takes me ten minutes to get there by bus.' },
        { t: 'what you can do there', hint: 'You can … , … or …' },
        { t: 'why you like it', hint: 'I like it because …' },
        { t: 'how you feel there', hint: 'I always feel happy / relaxed there.' }
      ] }
  ],
  theory: [
    {
      title: 'Свободное время',
      html: `
        <p>Занятия называем <mark>глагол + слово</mark> — так их и запоминаем, парами.</p>
        <div class="duo">
          <div><span class="kicker">go + -ing</span>
            <p class="ex" data-say="go sunbathing, go surfing">go sunbath<b>ing</b>, go surf<b>ing</b></p><p class="tr">загорать, заниматься сёрфингом</p>
            <span class="kicker">play</span>
            <p class="ex" data-say="play beach volleyball, play board games">play beach volleyball, play board games</p><p class="tr">играть в пляжный волейбол, в настольные игры</p></div>
          <div><span class="kicker">другие пары</span>
            <p class="ex" data-say="hang out at the shopping centre">hang out at the shopping centre</p><p class="tr">проводить время в торговом центре</p>
            <p class="ex" data-say="surf the Net">surf the Net</p><p class="tr">сидеть в интернете</p></div>
        </div>
        <p class="note">Слова из mind map на стр. 10.</p>`,
      check: { q: '«Заниматься сёрфингом» — как сказать?', options: [
        { t: 'go surfing', ok: true, why: 'Спорт на -ing говорим с go: go surfing.' },
        { t: 'play surfing', why: 'play — для игр с мячом и настольных. Сёрфинг — go surfing.' }] }
    },
    {
      title: 'Предлоги в парах',
      html: `
        <p>Предлог часто <mark>зависит от слова рядом</mark>, поэтому его учат вместе со словом.</p>
        <div class="duo">
          <div><p class="ex" data-say="choose from">choose <b>from</b></p><p class="tr">выбирать из</p>
            <p class="ex" data-say="a ride on the carousel">a ride <b>on</b> the carousel</p><p class="tr">катание на карусели</p>
            <p class="ex" data-say="a film at the cinema">a film <b>at</b> the cinema</p><p class="tr">фильм в кинотеатре</p></div>
          <div><p class="ex" data-say="a visit to the museum">a visit <b>to</b> the museum</p><p class="tr">поход в музей</p>
            <p class="ex" data-say="I'm crazy about skating.">I’m crazy <b>about</b> skating.</p><p class="tr">Я обожаю кататься.</p>
            <p class="ex" data-say="shop for skating gear">shop <b>for</b> skating gear</p><p class="tr">покупать снаряжение</p></div>
        </div>
        <p class="note">Все пары — из текста о Сиднее на стр. 10.</p>`,
      check: { q: '«Я обожаю футбол» — I’m crazy ___ football.', options: [
        { t: 'about', ok: true, why: 'Пара: crazy about.' },
        { t: 'from', why: 'from — «из, от». Обожать — crazy about.' }] }
    },
    {
      title: 'Как рассказать о любимом месте',
      html: `
        <p>Рассказываем о том, что бывает <mark>обычно</mark>, — поэтому Present Simple.</p>
        <p class="ex" data-say="My favourite spot is the skatepark.">My favourite <b>spot</b> is the skatepark.</p><p class="tr">Моё любимое место — скейтпарк.</p>
        <p class="ex" data-say="It takes me ten minutes to get there.">It <b>takes me</b> ten minutes to get there.</p><p class="tr">Мне туда 10 минут добираться.</p>
        <p class="ex" data-say="I meet my friends there and we skate all afternoon.">I meet my friends there and we skate all afternoon.</p><p class="tr">Я встречаюсь там с друзьями, и мы катаемся весь день.</p>
        <p class="note">План статьи — в упр. 4 на стр. 10.</p>`,
      check: { q: '«Мне туда 15 минут добираться» — как сказать?', options: [
        { t: 'It takes me 15 minutes to get there.', ok: true, why: 'Время на дорогу: It takes me … to get there.' },
        { t: 'I take 15 minutes to get there.', alt: true, why: 'Так поймут, но обычно говорят It takes me … — как в плане статьи.' }] }
    }
  ],
  tasks: [
    { type: 'choice', prompt: 'Вставь предлог', text: 'There are plenty of activities to choose ___ .', options: [
      { t: 'from', ok: true, why: 'Выбирать из — choose from.' }, { t: 'at', why: 'Пара — choose from.' }, { t: 'about', why: 'Пара — choose from.' }] },
    { type: 'choice', prompt: 'Вставь предлог', text: 'You can take a ride ___ the carousel.', options: [
      { t: 'on', ok: true, why: 'Кататься на карусели — a ride on.' }, { t: 'to', why: 'to — направление. Кататься на — on.' }, { t: 'for', why: 'Пара — a ride on.' }] },
    { type: 'input', prompt: 'Впиши предлог', text: 'I’m crazy ___ skateboarding.', answer: 'about', why: 'Обожать — crazy about.' },
    { type: 'sort', prompt: 'Какое занятие для какой погоды?', groups: ['on a rainy day', 'on a hot day'], items: [
      { t: 'read a book', g: 0, why: 'В дождь удобно читать дома.' }, { t: 'play board games', g: 0, why: 'Настольные игры — дома в дождь.' },
      { t: 'surf the Net', g: 0, why: 'Интернет — дома.' }, { t: 'go sunbathing', g: 1, why: 'Загорать — в жару.' },
      { t: 'go surfing', g: 1, why: 'Сёрфинг — летом на пляже.' }, { t: 'play beach volleyball', g: 1, why: 'Пляжный волейбол — в жару.' }] },
    { type: 'match', prompt: 'Соедини слово и перевод', pairs: [
      ['hang out', 'проводить время'], ['spot', 'любимое место'], ['including', 'включая'], ['attraction', 'достопримечательность'], ['skating gear', 'снаряжение для катания']],
      why: 'Слова — из текста о Сиднее на стр. 10.' },
    { type: 'write', prompt: 'Напиши по-английски', ru: 'Мне туда 10 минут добираться.', answer: 'It takes me ten minutes to get there', alt: ['It takes me 10 minutes to get there'], why: 'Схема: It takes me + время + to get there.' },
    { type: 'build', prompt: 'Собери предложение', hint: 'Мне туда 10 минут добираться.',
      words: ['takes', 'It', 'minutes', 'me', 'ten', 'there', 'get', 'to'],
      answer: 'It takes me ten minutes to get there',
      why: 'Схема: It takes me + время + to get there.' },
    { type: 'error', prompt: 'Нажми на слово с ошибкой', tokens: ['I', 'meet', 'my', 'friends', 'and', 'we', 'skates', 'all', 'afternoon.'], bad: [6],
      fix: 'I meet my friends and we skate all afternoon.',
      why: 'we — «мы», окончание -s не нужно: we skate.',
      miss: 'Это слово на месте. Посмотри на глагол после we.' },
    { type: 'speak', prompt: 'Скажи вслух', say: 'My favourite spot is the park.', ru: 'Моё любимое место — парк.', why: 'spot — любимое место.' },
    { type: 'listen', prompt: 'Послушай и выбери, что прозвучало', say: 'My coolest spot is Darling Harbour.', options: [
      { t: 'My coolest spot is Darling Harbour.', ok: true, why: 'Верно: spot — любимое место.' },
      { t: 'My coolest sport is Darling Harbour.', why: 'Прислушайся: spot (место), а не sport (спорт).' },
      { t: 'My cool spot was Darling Harbour.', why: 'Прозвучало coolest и is.' }] }
  ]
};
(window.ICE_LESSONS = window.ICE_LESSONS || {})[window.ICE_LESSON.id] = window.ICE_LESSON;
