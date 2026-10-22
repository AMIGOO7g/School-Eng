/* Урок 1a. Spotlight 7, стр. 6–7: «A city mouse or a country mouse?»
   Объяснения и задания написаны по материалу страниц учебника: текст Teenage Life Swap, письмо Jim, упр. 6, Word Formation. */
window.ICE_LESSON = {
  id: '1a', module: 1, code: '1a', pages: '6–7',
  en: 'A city mouse or a country mouse?',
  ru: 'Город или деревня: как живут люди',
  minutes: 15,
  learn: ['Отличать Present Simple от Present Continuous', 'Строить вопросы и отрицания в обоих временах', 'Говорить о жизни в городе и в деревне'],
  words: [
    ['heavy traffic', 'плотное движение'], ['crowded streets', 'людные улицы'], ['constant noise', 'постоянный шум'],
    ['high cost of living', 'дорогая жизнь'], ['convenient public transport', 'удобный транспорт'], ['fresh air', 'свежий воздух'],
    ['peace and quiet', 'тишина и покой'], ['beautiful landscapes', 'красивые пейзажи'], ['feeling isolated', 'чувство оторванности'],
    ['the hustle and bustle', 'суета большого города'], ['employment', 'работа, занятость'], ['unemployment', 'безработица']
  ],
  homework: [
    { type: 'tfns', ex: 'Упр. 3a, стр. 6', task: 'Прочитай текст «Teenage Life Swap» на стр. 7. Для каждого утверждения выбери: T — верно, F — неверно, NS — в тексте не сказано.',
      rule: 'Найди в тексте место, о котором говорится в утверждении, и сравни. Сказано то же самое — T. Сказано обратное — F. Об этом в тексте вообще нет — NS.',
      items: [
        { t: '1. Annabel doesn’t like staying in bed.', a: 'F', hint: 'Найди Day 2 у Аннабель на ферме. Что она делает, когда мама Сары приносит ей чай в постель?', why: 'Аннабель снова засыпает, когда ей приносят чай, — значит, поваляться в постели она как раз любит.' },
        { t: '2. Sarah can’t sleep well.', a: 'NS', hint: 'Найди у Сары место про ночь в Лондоне. Там сказано, что ей слышно, — но сказано ли, как она спит?', why: 'Сара пишет, что ночью слышен транспорт, но не пишет, что плохо спит. Об этом в тексте нет.' },
        { t: '3. Sarah’s new school has lots of facilities.', a: 'T', hint: 'Day 4 у Сары: что она пишет про школу Аннабель и что ей нравится больше всего?', why: 'Сара пишет, что больше всего любит facilities — компьютерный класс и бассейн.' },
        { t: '4. Annabel travels five miles to reach the school.', a: 'F', hint: 'Day 4 у Аннабель: куда именно они едут пять миль — до школы или до чего-то другого?', why: 'Пять миль они едут до школьного автобуса, а не до самой школы.' }],
      practice: { q: 'Похожее утверждение: «Sarah loves the swimming pool.» По тексту Day 4 Сары это…', options: [
        { t: 'T — верно', ok: true, why: 'В конце Day 4 Сара называет своими любимыми местами компьютерный класс и бассейн.' },
        { t: 'F — неверно', why: 'Перечитай последнее предложение Day 4 у Сары: какие места она называет любимыми?' },
        { t: 'NS — не сказано', why: 'Об этом в тексте сказано прямо — в конце Day 4 у Сары.' }] } },
    { ex: 'Упр. 6, стр. 7', task: 'Поставь глаголы в скобках в Present Simple или Present Continuous и объясни, почему выбрал это время.',
      rule: 'Спроси себя: это происходит сейчас, временно или уже договорено → Present Continuous. Это обычно, по расписанию или это мнение → Present Simple. Жалоба на надоедливую привычку → is always + -ing.',
      items: [
        { t: '1. Why … (you/be) in such a hurry? — I’m worried. My exam … (start) in ten minutes.', hint: 'be — глагол состояния, в -ing его обычно не ставят. А экзамен начинается по расписанию.', opts: [{ t: 'are you … starts', ok: true, why: 'be обычно не ставят в -ing, а экзамен идёт по расписанию.' },{ t: 'are you being … is starting', ok: false, why: 'be — глагол состояния, «are you being» здесь не подходит. А экзамен — по расписанию: starts.' },{ t: 'do you be … start', ok: false, why: 'С be вопрос строится без do: are you. И exam — он, нужно starts.' }], ans: 'are you … starts' },
        { t: '2. I … (think) of changing school. — I … (not/think) it’s a good idea.', hint: 'Одно think значит «обдумываю» (процесс), другое — «считаю» (мнение). Какое где?', opts: [{ t: 'am thinking … don’t think', ok: true, why: 'Первое think — «обдумываю» (процесс), второе — «считаю» (мнение).' },{ t: 'think … am not thinking', ok: false, why: 'Наоборот: обдумываю — процесс (am thinking), считаю — мнение (don’t think).' },{ t: 'am thinking … am not thinking', ok: false, why: 'Во второй части think значит «считаю» — это мнение, его не ставят в -ing: don’t think.' }], ans: 'am thinking … don’t think' },
        { t: '3. Why … (you/be) angry? — My sister … (always/take) my clothes.', hint: 'Вторая часть — жалоба на надоедливую привычку. Вспомни хитрый случай с always из объяснения.', opts: [{ t: 'are you … is always taking', ok: true, why: 'Жалоба на надоедливую привычку — is always + -ing.' },{ t: 'are you … always takes', alt: true, why: 'Так тоже говорят, и это не ошибка. Но в учебнике для жалобы нужно is always taking — в школе пиши так.' },{ t: 'do you be … is always taking', ok: false, why: 'С be вопрос строится без do: Why are you angry?' }], ans: 'are you … is always taking' },
        { t: '4. Why … (you/leave) now? — My train … (leave) in an hour.', hint: 'Первый leave — то, что происходит прямо сейчас. Второй — поезд, который ходит по расписанию.', opts: [{ t: 'are you leaving … leaves', ok: true, why: 'Уходишь прямо сейчас — Continuous; поезд по расписанию — Simple.' },{ t: 'are you leaving … is leaving', alt: true, why: 'В жизни так тоже говорят о конкретном поезде. Но учебник учит правилу расписаний: My train leaves — в школе пиши так.' },{ t: 'do you leave … is leaving', ok: false, why: 'now — значит, прямо сейчас: are you leaving.' }], ans: 'are you leaving … leaves' }],
      practice: { q: 'Похожий пример: Why ___ (you/laugh)? Look at this funny video!', options: [
        { t: 'are you laughing', ok: true, why: 'Смеются прямо сейчас, на наших глазах — Present Continuous.' },
        { t: 'do you laugh', why: 'Вопрос о том, что происходит в эту минуту, — нужен Present Continuous: are you laughing.' }] } },
    { ex: 'Упр. 7, стр. 7 (письмо)', task: 'Напиши письмо другу по переписке: где ты живёшь, какой у тебя обычный день и чем ты занят в эти дни или сегодня вечером.',
      rule: 'Где живёшь и обычный день — Present Simple. Чем занят в эти дни и планы на вечер — Present Continuous. Образец — письмо Jim на стр. 7.',
      items: [
        { t: 'Начало письма', hint: 'Hi, …! Thanks for your email. — поздоровайся и поблагодари за письмо.' },
        { t: 'Где ты живёшь', hint: 'I live in … It is a big city / a small town. — Present Simple.' },
        { t: 'Твой обычный день', hint: 'I usually get up at … My lessons start at … After school I … — Present Simple со словами usually, always, every day.' },
        { t: 'Что сейчас и сегодня', hint: 'These days I am … Tonight I am … — Present Continuous.' },
        { t: 'Конец письма', hint: 'Write again soon. — и твоё имя.' }] }
  ],
  theory: [
    {
      title: 'Два настоящих времени',
      html: `
        <div class="duo">
          <div><span class="kicker">Present Simple</span>
            <p>То, что бывает <mark>обычно, всегда, регулярно</mark>. Привычки, расписания, факты.</p>
            <p class="ex" data-say="Everyone gets up at 5 am on the farm.">Everyone <b>gets up</b> at 5 am on the farm.</p>
            <p class="tr">На ферме все встают в 5 утра (каждый день).</p></div>
          <div><span class="kicker">Present Continuous</span>
            <p>То, что происходит <mark>прямо сейчас</mark> или <mark>временно</mark>, в эти дни.</p>
            <p class="ex" data-say="Today we are milking the cows.">Today we <b>are milking</b> the cows.</p>
            <p class="tr">Сегодня мы доим коров (сейчас, а не всегда).</p></div>
        </div>
        <p class="note">Оба примера — из дневника Аннабель в тексте «Teenage Life Swap» на стр. 7.</p>`,
      check: { q: '«Sarah lives on a farm.» Что здесь описано?', options: [
        { t: 'Обычное положение дел: Сара всегда живёт на ферме', ok: true, why: 'Верно. Это постоянный факт о Саре, поэтому Present Simple: lives.' },
        { t: 'Действие, которое идёт прямо сейчас', why: 'Сара не «живёт прямо в эту минуту» — это постоянный факт. Для фактов берём Present Simple.' }] }
    },
    {
      title: 'Как строится',
      html: `
        <div class="duo">
          <div><span class="kicker">Present Simple</span>
            <table class="forms"><tr><td>I / you / we / they</td><td><b>play</b></td></tr>
              <tr><td>he / she / it</td><td><b>plays</b> <i>← не забудь -s</i></td></tr>
              <tr><td>вопрос</td><td><b>Do</b> you play? <b>Does</b> she play?</td></tr>
              <tr><td>отрицание</td><td>I <b>don’t</b> play. She <b>doesn’t</b> play.</td></tr></table></div>
          <div><span class="kicker">Present Continuous</span>
            <table class="forms"><tr><td>I</td><td><b>am</b> play<b>ing</b></td></tr>
              <tr><td>he / she / it</td><td><b>is</b> play<b>ing</b></td></tr>
              <tr><td>you / we / they</td><td><b>are</b> play<b>ing</b></td></tr>
              <tr><td>вопрос / отрицание</td><td><b>Are</b> you playing? She <b>isn’t</b> playing.</td></tr></table></div>
        </div>
        <p class="note">Главное правило Continuous: всегда две части — <span class="f">am / is / are</span> + <span class="f">глагол-ing</span>. Одной части мало.</p>`,
      check: { q: 'She ___ to school by bus every day.', options: [
        { t: 'goes', ok: true, why: 'Верно: every day — это привычка, а после she в Present Simple нужно окончание: go → goes.' },
        { t: 'go', why: 'После he / she / it в Present Simple глагол получает окончание -s (-es): she goes.' },
        { t: 'is go', why: 'Так не бывает: после is нужен глагол с -ing. А здесь every day — привычка, значит Present Simple: goes.' }] }
    },
    {
      title: 'Слова-подсказки',
      html: `
        <div class="duo">
          <div><span class="kicker">Чаще с Present Simple</span>
            <div class="chips"><span>always</span><span>usually</span><span>often</span><span>sometimes</span><span>never</span><span>every day</span><span>on Mondays</span></div></div>
          <div><span class="kicker">Чаще с Present Continuous</span>
            <div class="chips"><span>now</span><span>right now</span><span>at the moment</span><span>today</span><span>these days</span><span>Look!</span><span>Listen!</span></div></div>
        </div>
        <p class="ex" data-say="At the moment I am studying really hard.">At the moment I <b>am studying</b> really hard.</p>
        <p class="tr">Сейчас я очень много занимаюсь (из письма Jim, стр. 7).</p>
        <p class="note">Подсказки помогают, но решает смысл: обычно — или прямо сейчас.</p>`,
      check: { q: 'Listen! Somebody ___ in the next room.', options: [
        { t: 'is singing', ok: true, why: 'Верно: Listen! — значит, это слышно прямо сейчас. Present Continuous: is singing.' },
        { t: 'sings', why: 'Listen! показывает, что действие идёт в эту минуту. Нужно is + -ing: is singing.' }] }
    },
    {
      title: 'Хитрые случаи',
      html: `
        <ul class="cases">
          <li><mark>Расписание</mark> → Present Simple. Даже если речь о будущем.
            <p class="ex" data-say="My lessons start at 8:30.">My lessons <b>start</b> at 8:30.</p></li>
          <li><mark>Договорились на ближайшее будущее</mark> → Present Continuous.
            <p class="ex" data-say="Tonight I am meeting my friends.">Tonight I <b>am meeting</b> my friends.</p></li>
          <li><mark>Кто-то постоянно делает что-то раздражающее</mark> → <span class="f">is always + -ing</span>
            <p class="ex" data-say="My sister is always taking my clothes!">My sister <b>is always taking</b> my clothes!</p></li>
          <li><mark>Глаголы состояния</mark> обычно не ставим в -ing: like, love, hate, want, need, know, understand, think (= считаю).
            <p class="ex" data-say="I don't think it's a good idea.">I <b>don’t think</b> it’s a good idea. <span class="tr">— Я не считаю…</span></p>
            <p class="ex" data-say="I am thinking of changing school.">I <b>am thinking</b> of changing school. <span class="tr">— Я обдумываю… (это процесс)</span></p></li>
        </ul>
        <div class="life"><span class="kicker">В жизни говорят и так</span><p>My train <b>is leaving</b> in an hour — так тоже говорят о конкретном поезде, это не ошибка. My sister <b>always takes</b> my clothes — тоже правильно, просто спокойнее. В школе пиши по правилу учебника: расписание — Present Simple, жалоба — is always + -ing.</p></div>`,
      life: 'Про расписание в разговоре часто говорят и в Continuous: <i>My train is leaving in an hour</i> — это не ошибка. А про надоедливые привычки можно и нейтрально: <i>My sister always takes my clothes</i>. В школе отвечай так, как в правилах учебника.',
      check: { q: 'Tonight I ___ my friends. We have tickets for the cinema.', options: [
        { t: 'am meeting', ok: true, why: 'Верно: встреча уже договорена на сегодня вечером — это Present Continuous.' },
        { t: 'meet', why: 'Когда о встрече уже договорились на ближайшее время (tonight), используем Present Continuous: am meeting.' }] }
    },
    {
      title: 'Слова урока',
      html: `
        <div class="words">
          <span data-say="heavy traffic"><b>heavy traffic</b>плотное движение</span>
          <span data-say="crowded streets"><b>crowded streets</b>людные улицы</span>
          <span data-say="constant noise"><b>constant noise</b>постоянный шум</span>
          <span data-say="high cost of living"><b>high cost of living</b>дорогая жизнь</span>
          <span data-say="convenient public transport"><b>convenient public transport</b>удобный транспорт</span>
          <span data-say="fresh air"><b>fresh air</b>свежий воздух</span>
          <span data-say="peace and quiet"><b>peace and quiet</b>тишина и покой</span>
          <span data-say="beautiful landscapes"><b>beautiful landscapes</b>красивые пейзажи</span>
          <span data-say="feeling isolated"><b>feeling isolated</b>чувство оторванности</span>
          <span data-say="the hustle and bustle"><b>the hustle and bustle</b>суета большого города</span>
        </div>
        <p class="note"><b>Как образуются слова:</b> глагол + <span class="f">-ment</span> = существительное: employ → employment (работа, занятость), develop → development (развитие).
          Приставка <span class="f">un-</span> даёт противоположный смысл: unemployment — безработица.</p>
        <p class="note">Нажми на слово, чтобы услышать, как оно звучит.</p>`,
      check: { q: 'I can’t stand ___ . I love quiet places.', options: [
        { t: 'crowded streets', ok: true, why: 'Верно: тот, кто любит тишину, не выносит людных улиц.' },
        { t: 'peace and quiet', why: 'peace and quiet — это тишина и покой. Если любишь тихие места, их как раз нравится, а не «не выносишь».' }] }
    }
  ],
  tasks: [
    { type: 'choice', prompt: 'Выбери правильную форму', text: 'Look! Sarah ___ the cows in the barn.', options: [
      { t: 'is milking', ok: true, why: 'Look! — действие происходит на наших глазах: is + -ing.' },
      { t: 'milks', why: 'Look! показывает, что это происходит прямо сейчас. Нужно Present Continuous: is milking.' },
      { t: 'are milking', why: 'Почти! Но Sarah — она одна, значит is, а не are: Sarah is milking.' }] },
    { type: 'sort', prompt: 'Разложи слова-подсказки по корзинам', groups: ['Present Simple', 'Present Continuous'], items: [
      { t: 'always', g: 0, why: 'always — «всегда», это привычка. Present Simple.' },
      { t: 'now', g: 1, why: 'now — «сейчас». Present Continuous.' },
      { t: 'every day', g: 0, why: 'every day — «каждый день», регулярно. Present Simple.' },
      { t: 'at the moment', g: 1, why: 'at the moment — «в данный момент». Present Continuous.' },
      { t: 'usually', g: 0, why: 'usually — «обычно». Present Simple.' },
      { t: 'today', g: 1, why: 'today — «сегодня», временно, не как всегда. Present Continuous.' },
      { t: 'on Sundays', g: 0, why: 'on Sundays — «по воскресеньям», это повторяется. Present Simple.' },
      { t: 'these days', g: 1, why: 'these days — «в эти дни», временная ситуация. Present Continuous.' }] },
    { type: 'build', prompt: 'Собери предложение из письма Jim', hint: 'Сейчас я очень много занимаюсь.',
      words: ['really', 'am', 'the', 'I', 'at', 'studying', 'moment', 'hard'],
      answer: 'I am studying really hard at the moment',
      alt: ['At the moment I am studying really hard'],
      why: 'Порядок такой: кто (I) → am → глагол с -ing (studying) → как (really hard) → когда (at the moment).' },
    { type: 'choice', prompt: 'Выбери правильную форму', text: 'The school bus ___ at 7 am every morning.', options: [
      { t: 'leaves', ok: true, why: 'Это расписание автобуса, оно повторяется каждое утро: Present Simple, bus → leaves.' },
      { t: 'is leaving', alt: true, why: 'В разговоре про сегодняшний автобус так скажут: The bus is leaving at 7 — это не ошибка. Но every morning и расписание по учебнику — Present Simple: leaves.' },
      { t: 'leave', why: 'bus — это «он» (it), значит нужно окончание -s: leaves.' }] },
    { type: 'choice', prompt: 'Выбери правильную форму', text: 'Tonight I ___ my friends at the cinema. We bought the tickets yesterday.', options: [
      { t: 'am meeting', ok: true, why: 'Встреча уже договорена на сегодня (билеты куплены): Present Continuous.' },
      { t: 'meet', why: 'Когда о встрече на ближайшее время уже договорились, говорим Present Continuous: am meeting.' },
      { t: 'am meet', why: 'После am глагол всегда с -ing: am meeting.' }] },
    { type: 'error', prompt: 'Нажми на слово с ошибкой', tokens: ['I', 'am', 'knowing', 'the', 'answer', 'to', 'this', 'question.'], bad: [1, 2],
      fix: 'I know the answer to this question.',
      why: 'know — глагол состояния, его не ставят в -ing. Правильно: I know the answer.' ,
      miss: 'Это слово стоит правильно. Подумай: можно ли «знать» как процесс, который идёт прямо сейчас?' },
    { type: 'choice', prompt: 'Выбери правильную форму', text: 'My sister ___ my clothes without asking! It’s so annoying!', options: [
      { t: 'is always taking', ok: true, why: 'Жалуемся на надоедливую привычку — is always + -ing, как в упр. 6 на стр. 7.' },
      { t: 'always takes', alt: true, why: 'Так тоже говорят, и это не ошибка. Но по учебнику для жалобы нужно is always taking — в школе выбирай его.' },
      { t: 'is taking always', why: 'always стоит между is и глаголом: is always taking.' }] },
    { type: 'match', prompt: 'Соедини слово и перевод', pairs: [
      ['heavy traffic', 'плотное движение'], ['fresh air', 'свежий воздух'], ['peace and quiet', 'тишина и покой'],
      ['crowded streets', 'людные улицы'], ['high cost of living', 'дорогая жизнь']],
      why: 'Посмотри ещё раз на слова урока: каждое выражение переводится целиком, не по одному слову.' },
    { type: 'choice', prompt: 'Образуй слово', text: 'There are no jobs in this town. The rate of ___ is very high.', options: [
      { t: 'unemployment', ok: true, why: 'Работы нет — значит безработица: un + employ + ment = unemployment.' },
      { t: 'employment', why: 'employment — это занятость, работа. А здесь работы нет, поэтому нужна приставка un-: unemployment.' },
      { t: 'unemployed', why: 'unemployed — «безработный», так говорят о человеке. После the rate of нужно существительное: unemployment.' }] },
    { type: 'listen', prompt: 'Послушай и выбери, что прозвучало', say: 'Annabel’s mum is making breakfast now.', options: [
      { t: 'Annabel’s mum is making breakfast now.', ok: true, why: 'Верно: is making — Present Continuous, и now это подтверждает.' },
      { t: 'Annabel’s mum makes breakfast now.', why: 'Прислушайся: в фразе есть is и making — это Present Continuous. И now тоже подсказывает.' },
      { t: 'Annabel’s mum is make breakfast now.', why: 'is make — так не бывает. После is нужен глагол с -ing: is making.' }] }
  ]
};
(window.ICE_LESSONS = window.ICE_LESSONS || {})[window.ICE_LESSON.id] = window.ICE_LESSON;
