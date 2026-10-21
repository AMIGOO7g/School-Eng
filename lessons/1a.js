/* Урок 1a. Spotlight 7, стр. 6–7: «A city mouse or a country mouse?»
   Объяснения и задания написаны по материалу страниц учебника: текст Teenage Life Swap, письмо Jim, упр. 6, Word Formation. */
window.ICE_LESSON = {
  id: '1a', module: 1, code: '1a', pages: '6–7',
  en: 'A city mouse or a country mouse?',
  ghost: 'PRESENT',
  theory: [
    {
      title: 'Два настоящих времени',
      html: `
        <div class="duo">
          <div><span class="kicker">Present Simple</span>
            <p>То, что бывает <b>обычно, всегда, регулярно</b>. Привычки, расписания, факты.</p>
            <p class="ex" data-say="Everyone gets up at 5 am on the farm.">Everyone <b>gets up</b> at 5 am on the farm.</p>
            <p class="tr">На ферме все встают в 5 утра (каждый день).</p></div>
          <div><span class="kicker">Present Continuous</span>
            <p>То, что происходит <b>прямо сейчас</b> или <b>временно</b>, в эти дни.</p>
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
        <p class="note">Главное правило Continuous: всегда две части — <b>am / is / are</b> и глагол с <b>-ing</b>. Одной части мало.</p>`,
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
          <li><b>Расписание → Present Simple.</b> Даже если речь о будущем.
            <p class="ex" data-say="My lessons start at 8:30.">My lessons <b>start</b> at 8:30.</p></li>
          <li><b>Договорились на ближайшее будущее → Present Continuous.</b>
            <p class="ex" data-say="Tonight I am meeting my friends.">Tonight I <b>am meeting</b> my friends.</p></li>
          <li><b>Кто-то постоянно делает что-то раздражающее → is always + -ing.</b>
            <p class="ex" data-say="My sister is always taking my clothes!">My sister <b>is always taking</b> my clothes!</p></li>
          <li><b>Глаголы состояния обычно не ставим в -ing:</b> like, love, hate, want, need, know, understand, think (= считаю).
            <p class="ex" data-say="I don't think it's a good idea.">I <b>don’t think</b> it’s a good idea. <span class="tr">— Я не считаю…</span></p>
            <p class="ex" data-say="I am thinking of changing school.">I <b>am thinking</b> of changing school. <span class="tr">— Я обдумываю… (это процесс)</span></p></li>
        </ul>`,
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
        <p class="note"><b>Как образуются слова:</b> глагол + <b>-ment</b> = существительное: employ → employment (работа, занятость), develop → development (развитие).
          Приставка <b>un-</b> даёт противоположный смысл: unemployment — безработица.</p>
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
      { t: 'is leaving', why: 'every morning и расписание — это Present Simple: The bus leaves at 7 am.' },
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
      { t: 'always takes', why: 'Когда раздражает, что кто-то постоянно что-то делает, в учебнике используют is always + -ing: is always taking.' },
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
