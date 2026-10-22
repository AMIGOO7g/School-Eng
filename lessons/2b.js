/* Урок 2b. Spotlight 7, стр. 18–19: «A classic read» — отрывок из «Путешествия к центру Земли» Жюля Верна.
   Объяснения и задания по материалу страниц: сюжет и диалог, упр. 2–3, теория Past Simple & used to, Sequence of events (упр. 6), упр. 5b. */
window.ICE_LESSON = {
  id: '2b', module: 2, code: '2b', pages: '18–19',
  en: 'A classic read',
  ru: 'Классика: «Путешествие к центру Земли»',
  minutes: 20,
  learn: ['Рассказывать о прошлом в Past Simple', 'Говорить о привычках в прошлом с used to', 'Связывать события словами as soon as, when, after, until'],
  theory: [
    { title: 'Past Simple: что было в прошлом',
      html: `
        <div class="duo">
          <div><span class="kicker">Правильные глаголы</span>
            <p>Добавляем <mark>-ed</mark>: look → <b>looked</b>, explore → <b>explored</b>, decide → <b>decided</b>.</p>
            <p class="ex" data-say="They looked around.">They <b>looked</b> around.</p></div>
          <div><span class="kicker">Неправильные глаголы</span>
            <p>Берём <mark>вторую форму</mark> из таблицы: find → <b>found</b>, hide → <b>hid</b>, see → <b>saw</b>, hear → <b>heard</b>, go → <b>went</b>.</p>
            <p class="ex" data-say="The men hid behind some bushes.">The men <b>hid</b> behind some bushes.</p></div>
        </div>
        <p class="note">Вопрос и отрицание — с помощником <span class="f">did</span>, а глагол возвращается в начальную форму: <b>Did</b> they <b>find</b> a knife? They <b>didn’t find</b> Hans.</p>
        <p class="note">Таблица неправильных глаголов — в самом начале учебника (Irregular Verbs).</p>`,
      check: { q: 'Yesterday they ___ a strange noise.', options: [
        { t: 'heard', ok: true, why: 'Верно: hear — неправильный глагол, вторая форма heard.' },
        { t: 'hear', why: 'Yesterday — это прошлое. Нужна вторая форма: hear → heard.' },
        { t: 'heared', why: 'hear — неправильный глагол, -ed к нему не добавляют. Правильно: heard.' }] } },
    { title: 'used to: так было раньше',
      html: `
        <div class="duo">
          <div><span class="kicker">Что значит</span>
            <p><span class="f">used to + глагол</span> — то, что <mark>раньше было регулярно или постоянно</mark>, а теперь уже нет.</p>
            <p class="ex" data-say="They used to live thousands of years ago.">They <b>used to live</b> thousands of years ago.</p>
            <p class="tr">Они жили (здесь) тысячи лет назад — а теперь их нет. Из диалога на стр. 18.</p></div>
          <div><span class="kicker">Вопрос и отрицание</span>
            <p><b>Did</b> you <b>use to</b> ride a bike? — I <b>didn’t use to</b> wake up late.</p>
            <p>После <span class="f">did</span> и <span class="f">didn’t</span> пишем <mark>use to</mark> — без -d!</p>
            <p class="ex" data-say="I didn't use to wake up late in the mornings.">I <b>didn’t use to</b> wake up late.</p></div>
        </div>
        <div class="life"><span class="kicker">В жизни говорят и так</span><p>When he was a child, he <b>spent</b> his holidays in Sochi — без used to тоже правильно, смысл почти тот же. Англичане часто говорят и <b>would</b>: My grandad would tell me stories. Но в упражнениях этого урока нужен used to — его и пиши.</p></div>`,
      life: 'О повторявшихся действиях в прошлом говорят и через <b>would</b>: <i>My grandad would tell me stories</i>. Но для состояний (жить, любить, быть) would не подходит — только used to: <i>I used to live in Moscow</i>. В школе в этом уроке ответ — used to.',
      check: { q: 'I ___ like milk, but now I love it.', options: [
        { t: 'didn’t use to', ok: true, why: 'Верно: раньше не любил, а теперь любит. После didn’t — use to без -d.' },
        { t: 'didn’t used to', why: 'Частая ошибка! После didn’t глагол в начальной форме: didn’t use to.' },
        { t: 'not used to', why: 'Отрицание строится через didn’t: I didn’t use to like milk.' }] } },
    { title: 'Как связать события',
      html: `
        <div class="words">
          <span data-say="as soon as"><b>as soon as</b>как только</span>
          <span data-say="when"><b>when</b>когда</span>
          <span data-say="after"><b>after</b>после того как</span>
          <span data-say="until"><b>until</b>до тех пор, пока не</span>
        </div>
        <p class="ex" data-say="The phone rang as soon as he entered the room.">The phone rang <b>as soon as</b> he entered the room.</p>
        <p class="tr">Телефон зазвонил, как только он вошёл в комнату.</p>
        <p class="note">Это упр. 6 на стр. 19: два предложения соединяем в одно. Слово-связку можно поставить в начало: <b>As soon as</b> they found a message, they decided to go.</p>`,
      check: { q: 'They looked around ___ they heard a noise.', options: [
        { t: 'until', ok: true, why: 'Верно: осматривались до тех пор, пока не услышали шум.' },
        { t: 'as soon as', why: 'as soon as — «как только». А здесь одно действие длилось, пока не случилось другое — это until.' },
        { t: 'after', why: 'after — «после того как». Но они осматривались ДО шума, пока его не услышали — нужно until.' }] } },
    { title: 'Как переводить сюжет',
      html: `
        <ul class="cases">
          <li><mark>Не переводи слово в слово.</mark> Сначала пойми смысл куска, потом скажи его по-русски.
            <p class="ex" data-say="they go on a dangerous journey">they <b>go on</b> a dangerous <b>journey</b></p> <span class="tr">— не «идут на путешествие», а «отправляются в опасное путешествие»</span></li>
          <li><mark>Настоящее время в пересказе сюжета</mark> — так принято в английском. По-русски можно тоже оставить настоящее: находят, отправляются, обнаруживают.</li>
          <li><mark>is broken</mark> — это не «есть сломан». Плот не ломает сам себя, его разбивает: <span class="f">плот разбивается</span> или <span class="f">плот разбит</span>.</li>
          <li><mark>Многоточие в конце</mark> оставь и в переводе — это интрига.</li>
        </ul>`,
      check: { q: 'Как лучше перевести «their raft is broken against rocks»?', options: [
        { t: 'их плот разбивается о скалы', ok: true, why: 'Верно: звучит по-русски и передаёт смысл.' },
        { t: 'их плот есть сломан против скал', why: 'Это перевод слово в слово, так по-русски не говорят. is broken against rocks — «разбивается о скалы».' }] } },
    { title: 'Слова урока',
      html: `
        <div class="words">
          <span data-say="journey"><b>journey</b>путешествие</span><span data-say="mysterious"><b>mysterious</b>таинственный</span>
          <span data-say="explorer"><b>explorer</b>исследователь</span><span data-say="adventure"><b>adventure</b>приключение</span>
          <span data-say="raft"><b>raft</b>плот</span><span data-say="discover"><b>discover</b>обнаружить, открыть</span>
          <span data-say="amazing"><b>amazing</b>удивительный</span><span data-say="look around"><b>look around</b>осматриваться</span>
          <span data-say="huge"><b>huge</b>огромный</span><span data-say="initials"><b>initials</b>инициалы</span>
          <span data-say="compass"><b>compass</b>компас</span><span data-say="cave"><b>cave</b>пещера</span>
        </div>
        <p class="note">Нажми на слово, чтобы услышать, как оно звучит.</p>`,
      check: { q: 'Как сказать «плот»?', options: [
        { t: 'raft', ok: true, why: 'Верно: raft — плот. Это слово будет в переводе на стр. 18.' },
        { t: 'rock', why: 'rock — скала, камень. Плот — raft.' }] } }
  ],
  tasks: [
    { type: 'choice', prompt: 'Выбери правильную форму', text: 'When I was six, I ___ comics every evening.', options: [
      { t: 'used to read', ok: true, why: 'Привычка в прошлом: used to + глагол в начальной форме.' },
      { t: 'use to read', why: 'В утвердительном предложении — used to, с -d.' },
      { t: 'used to reading', why: 'После used to глагол без -ing: used to read.' }] },
    { type: 'choice', prompt: 'Выбери правильную форму', text: 'My grandad ___ me stories when I was young.', options: [
      { t: 'used to tell', ok: true, why: 'Так было раньше регулярно: used to tell.' },
      { t: 'was used to tell', why: 'Лишнее was. Правильно: My grandad used to tell me stories.' },
      { t: 'use to tell', why: 'В утверждении пишем used to, с -d.' },
      { t: 'would tell', alt: true, why: 'My grandad would tell me stories — так тоже говорят о повторявшихся действиях в прошлом. Но в этом уроке тема — used to, поэтому по учебнику: used to tell.' }] },
    { type: 'choice', prompt: 'Выбери правильную форму', text: 'I ___ wake up late in the mornings.', options: [
      { t: 'didn’t use to', ok: true, why: 'После didn’t — use to без -d.' },
      { t: 'didn’t used to', why: 'Частая ошибка: после didn’t глагол в начальной форме — use to.' },
      { t: 'wasn’t use to', why: 'Отрицание строится через didn’t: I didn’t use to wake up late.' }] },
    { type: 'choice', prompt: 'Выбери правильное слово', text: '___ you use to ride a bike when you were five?', options: [
      { t: 'Did', ok: true, why: 'Вопрос с used to строится через Did: Did you use to…?' },
      { t: 'Do', why: 'Речь о прошлом (when you were five), поэтому Did.' },
      { t: 'Were', why: 'С used to вопрос задаём через Did: Did you use to ride a bike?' }] },
    { type: 'match', prompt: 'Соедини глагол и его вторую форму', pairs: [['find', 'found'], ['hide', 'hid'], ['see', 'saw'], ['hear', 'heard'], ['go', 'went']],
      why: 'Это неправильные глаголы — их вторую форму нужно запомнить. Подсмотри в таблицу Irregular Verbs в начале учебника.' },
    { type: 'build', prompt: 'Собери предложение по сюжету', hint: 'Аксель и профессор услышали шум.',
      words: ['noise', 'Axel', 'heard', 'and', 'a', 'the', 'professor'], answer: 'Axel and the professor heard a noise',
      why: 'Кто (Axel and the professor) → что сделали (heard) → что (a noise).' },
    { type: 'choice', prompt: 'Выбери слово-связку', text: '___ they heard a noise, they hid behind some bushes.', options: [
      { t: 'When', ok: true, why: 'Когда услышали шум — спрятались. When связывает два события.' },
      { t: 'Until', why: 'until — «пока не». Здесь сначала услышали, потом спрятались — нужно When.' },
      { t: 'Because', why: 'because — «потому что». Это не связка последовательности, и предложение звучит неестественно.' }] },
    { type: 'choice', prompt: 'Выбери слово-связку', text: 'They looked around ___ they heard a noise.', options: [
      { t: 'until', ok: true, why: 'Осматривались до тех пор, пока не услышали шум.' },
      { t: 'as soon as', why: 'as soon as — «как только». Здесь одно действие длилось, пока не произошло другое — это until.' },
      { t: 'after', why: 'Они осматривались до шума, а не после — нужно until.' }] },
    { type: 'error', prompt: 'Нажми на слово с ошибкой', tokens: ['When', 'I', 'was', 'six,', 'I', 'didn’t', 'used', 'to', 'play', 'football.'], bad: [6],
      fix: 'When I was six, I didn’t use to play football.', why: 'После didn’t пишем use to — без -d.', miss: 'Это слово стоит правильно. Посмотри внимательно на used после didn’t.' },
    { type: 'listen', prompt: 'Послушай и выбери, что прозвучало', say: 'They used to live thousands of years ago.', options: [
      { t: 'They used to live thousands of years ago.', ok: true, why: 'Верно: used to live — так было раньше, а теперь нет.' },
      { t: 'They use to live thousands of years ago.', why: 'Прислушайся: в утверждении звучит used to.' },
      { t: 'They used to living thousands of years ago.', why: 'После used to глагол без -ing: used to live.' }] }
  ],
  words: [['journey', 'путешествие'], ['mysterious', 'таинственный'], ['explorer', 'исследователь'], ['adventure', 'приключение'], ['raft', 'плот'], ['discover', 'обнаружить'],
    ['amazing', 'удивительный'], ['look around', 'осматриваться'], ['huge', 'огромный'], ['initials', 'инициалы'], ['compass', 'компас'], ['cave', 'пещера']],
  homework: [
    { type: 'translate', ex: 'Стр. 18, перевод', task: 'Переведи выделенный текст вверху страницы (The Plot), начиная со второго предложения — со слов «After they find…».',
      rule: 'Переводи по кускам: нажимай на трудные слова, читай подсказку и пиши свой вариант. В конце все куски соберутся в один текст — перечитай его по-русски и проверь по списку.',
      chunks: [
        { en: 'After they find a mysterious message', gloss: [['after', 'после того как'], ['find', 'находить'], ['mysterious', 'таинственный'], ['message', 'послание, сообщение']], hint: 'Начни с «После того как…». Время можно оставить настоящим: «находят».' },
        { en: 'from explorer Arne Saknussemm in an old book,', gloss: [['explorer', 'исследователь'], ['in an old book', 'в старой книге']], hint: 'Имя не переводится, а пишется по-русски так, как звучит: Арне Сакнуссем.' },
        { en: 'they go on a dangerous journey', gloss: [['go on a journey', 'отправиться в путешествие'], ['dangerous', 'опасный']], hint: 'go on a journey — это устойчивое выражение, переводи целиком.' },
        { en: 'to look for the centre of the earth.', gloss: [['look for', 'искать'], ['the centre of the earth', 'центр Земли']], hint: 'to look for — «чтобы найти» или «на поиски». Выбери, как звучит естественнее.' },
        { en: 'During their adventure,', gloss: [['during', 'во время'], ['adventure', 'приключение']], hint: 'Начало нового предложения: «Во время…».' },
        { en: 'their raft is broken against rocks', gloss: [['raft', 'плот'], ['is broken', 'разбивается, разбит'], ['against rocks', 'о скалы']], hint: 'Вспомни карточку «Как переводить сюжет»: is broken — не «есть сломан».' },
        { en: 'and they discover an amazing place …', gloss: [['discover', 'обнаружить, открыть'], ['amazing', 'удивительный'], ['place', 'место']], hint: 'Многоточие в конце оставь — это интрига.' }],
      checklist: ['Два предложения, как в оригинале', 'Не потерял(а) «таинственное послание» и «старую книгу»', 'Есть слова «плот» и «скалы»', 'Глаголы в одном времени: находят, отправляются, обнаруживают', 'Звучит по-русски, а не слово в слово', 'Многоточие в конце на месте'] },
    { type: 'write', ex: 'Упр. 5b, стр. 19', task: 'Используй слова, чтобы написать предложения о том, что ты делал или не делал, когда тебе было шесть.',
      rule: 'Было — used to + глагол. Не было — didn’t use to + глагол (без -d!). Начни так: When I was six, I …',
      phrases: ['read comics', 'play with toys', 'go to the park', 'write stories', 'watch cartoons', 'drive a car', 'play hide-and-seek'] },
    { type: 'hints', ex: 'Упр. 6, стр. 19', task: 'Соедини два предложения в одно с помощью слова в скобках.',
      rule: 'as soon as — как только, when — когда, after — после того как, until — пока не. Слово-связку можно поставить в начало или в середину, второе подлежащее часто заменяем на they.',
      items: [
        { t: '1. Otto and Axel found a message. They decided to go on a dangerous journey. (as soon as)', hint: 'Что произошло сразу после чего? Начни с As soon as Otto and Axel…', opts: [{ t: 'As soon as Otto and Axel found a message, they decided to go on a dangerous journey.', ok: true, why: 'Как только нашли послание — сразу решили отправиться в путь.' },{ t: 'As soon as they decided to go on a dangerous journey, Otto and Axel found a message.', ok: false, why: 'Порядок событий перепутан: сначала нашли послание, потом решили ехать.' }], ans: 'As soon as Otto and Axel found a message, they decided to go on a dangerous journey.' },
        { t: '2. They looked around. They heard a noise. (until)', hint: 'Одно действие длилось, пока не случилось другое. until ставим между частями.', opts: [{ t: 'They looked around until they heard a noise.', ok: true, why: 'Осматривались, пока не услышали шум.' },{ t: 'They heard a noise until they looked around.', ok: false, why: 'Шум не длился «пока не осмотрелись». Длилось осматривание — until ставим перед шумом.' }], ans: 'They looked around until they heard a noise.' },
        { t: '3. They hid behind some bushes. They heard the noise. (when)', hint: 'Сначала услышали, потом спрятались. when ставим перед тем действием, что было первым.', opts: [{ t: 'They hid behind some bushes when they heard the noise.', ok: true, why: 'Спрятались, когда услышали шум.' },{ t: 'When they heard the noise, they hid behind some bushes.', alt: true, why: 'Тоже правильно! When можно поставить в начало — смысл тот же. Оба варианта годятся для тетради.' },{ t: 'They heard the noise when they hid behind some bushes.', ok: false, why: 'Получилось, что шум услышали в момент, когда прятались. А спрятались из-за шума — when ставим перед heard the noise.' }], ans: 'They hid behind some bushes when they heard the noise.' },
        { t: '4. They went to meet Hans. Axel found an old knife. (after)', hint: 'Внимание: что было раньше — нашёл нож или пошли к Хансу? after ставим перед действием, которое было первым.', opts: [{ t: 'They went to meet Hans after Axel found an old knife.', ok: true, why: 'Сначала нашёл нож, потом пошли к Хансу: after ставим перед тем, что было первым.' },{ t: 'Axel found an old knife after they went to meet Hans.', ok: false, why: 'По сюжету нож нашли до того, как пошли к Хансу. after — перед первым действием.' }], ans: 'They went to meet Hans after Axel found an old knife.' }],
      practice: { q: 'Похожий пример: ___ the bell rang, the students ran out of the classroom.', options: [
        { t: 'As soon as', ok: true, why: 'Как только прозвенел звонок — выбежали. Сразу одно за другим.' },
        { t: 'Until', why: 'until — «пока не». А здесь сначала звонок, потом выбежали — нужно As soon as или When.' }] } }
  ]
};
(window.ICE_LESSONS = window.ICE_LESSONS || {})[window.ICE_LESSON.id] = window.ICE_LESSON;
