/* Progress Check 1. Spotlight 7, стр. 14 — проверка всего модуля 1:
   слова (упр. 1–3), Present Simple / Present Continuous (упр. 4), диалог в метро (упр. 5), «Now I can…». */
window.ICE_LESSON = {
  id: '1pc', module: 1, code: 'PC', pages: '14',
  en: 'Progress Check 1',
  ru: 'Проверка модуля 1',
  minutes: 15,
  learn: ['Проверить слова всего модуля', 'Проверить Present Simple и Present Continuous', 'Проверить фразы в метро и предлоги'],
  words: [
    ['alarm system', 'сигнализация'], ['heavy traffic', 'плотное движение'], ['beautiful landscapes', 'красивые пейзажи'],
    ['crowded streets', 'людные улицы'], ['public transport', 'общественный транспорт'], ['door chain', 'дверная цепочка'],
    ['feel isolated', 'чувствовать себя оторванным'], ['fresh air', 'свежий воздух'], ['homesick', 'скучающий по дому'],
    ['the hustle and bustle', 'суета'], ['convenient', 'удобный'], ['close at hand', 'под рукой, рядом']
  ],
  homework: [
    { ex: 'Упр. 1, стр. 14', task: 'Соедини слова 1–8 с A–H, чтобы получились словосочетания.',
      rule: 'Все пары — из уроков 1a и 1b. Сначала соедини те, в которых уверен, — остальные встанут сами.',
      items: [
        { t: '1 alarm …', hint: 'Урок 1b: то, что ставят от грабителей.' },
        { t: '2 heavy …', hint: 'Урок 1a: про машины в большом городе.' },
        { t: '3 beautiful …', hint: 'Урок 1a: что красиво в деревне.' },
        { t: '4 crowded …', hint: 'Урок 1a: людные…' },
        { t: '5 public …', hint: 'Автобусы, метро — общественный…' },
        { t: '6 door …', hint: 'Урок 1b: что надеть на дверь перед тем, как открыть.' },
        { t: '7 feel …', hint: 'Урок 1a: как себя чувствуешь вдали от всех.' },
        { t: '8 fresh …', hint: 'Урок 1a: чем дышат в деревне.' }
      ],
      practice: { q: 'heavy ___', options: [
        { t: 'traffic', ok: true, why: 'heavy traffic — плотное движение.' }, { t: 'air', why: 'Пара — fresh air. С heavy — traffic.' }] } },
    { ex: 'Упр. 2, стр. 14', task: 'Выбери правильное слово в каждом предложении 1–14.',
      rule: 'Прочитай предложение целиком и переведи оба варианта. Подходит тот, что даёт смысл и правильную пару слов (look into ≠ break into).',
      items: [
        { t: '1. unhealthy / unwelcome lifestyle', hint: 'Образ жизни бывает вредным для здоровья.' },
        { t: '4. look / break into a house', hint: 'Урок 1b: что делает грабитель с домом?' },
        { t: '5. the hustle and noise / bustle', hint: 'Устойчивое выражение из урока 1a.' },
        { t: '7. convenient / heavy public transport', hint: 'Какой транспорт хорошо иметь в городе?' },
        { t: '8. hometown / homesick', hint: 'Когда скучаешь по дому, ты…' },
        { t: '13. do / play beach volleyball', hint: 'Урок 1c: в игры с мячом мы…' },
        { t: '14. close / easy at hand', hint: 'Всё рядом, под рукой.' }
      ] },
    { ex: 'Упр. 3, стр. 14', task: 'Выбери правильное слово: предлоги из урока 1c и 1b.',
      rule: 'hang out, run after, choose from, crazy about — учили парами.',
      items: [
        { t: '1. hang on / out at shopping centres', hint: 'Урок 1c: «тусоваться» — hang …' },
        { t: '2. running into / after a burglar', hint: 'Урок 1b: гнаться за кем-то.' },
        { t: '3. choose from / in', hint: 'Урок 1c: выбирать из…' },
        { t: '4. crazy of / about football', hint: 'Урок 1c: обожать что-то.' }
      ] },
    { ex: 'Упр. 4, стр. 14', task: 'Поставь глаголы в Present Simple или Present Continuous.',
      rule: 'Сначала найди подсказку: every day, at 80°C, at 6:30pm (расписание, факт) → Present Simple. now, Be quiet!, this weekend, next week (сейчас или уже договорились) → Present Continuous. always + жалоба → is always + -ing. like, think (мнение) не ставят в -ing.',
      items: [
        { t: '1. John … (visit) his parents this weekend.', hint: 'Уже договорился на эти выходные.' },
        { t: '2. He … (take) me to school every day.', hint: 'every day — регулярно.' },
        { t: '3. Be quiet. The baby … (sleep).', hint: 'Be quiet — потому что это происходит прямо сейчас.' },
        { t: '4. He … (always/bite) his nails.', hint: 'Жалоба на надоедливую привычку.' },
        { t: '5. Water … (not/boil) at 80°C.', hint: 'Факт природы.' },
        { t: '6. The bus … (leave) at 6:30pm.', hint: 'Расписание.' },
        { t: '7. … (he/do) his homework now?', hint: 'now — сейчас. Вопрос: Is he …?' },
        { t: '10. She … (not/like) flying by plane.', hint: 'like — глагол чувства, без -ing.' },
        { t: '12. I … (not/think) he’s in.', hint: 'think здесь — «считаю», мнение.' }
      ],
      practice: { q: 'Be quiet. The baby ___ .', options: [
        { t: 'is sleeping', ok: true, why: 'Прямо сейчас — Present Continuous.' }, { t: 'sleeps', why: 'Be quiet показывает, что ребёнок спит сейчас: is sleeping.' }] } },
    { ex: 'Упр. 5, стр. 14', task: 'Дополни диалог фразами: Which line do I take, please? Thanks a lot. One ticket please. That’s £3.00. Return to Oxford Circus.',
      rule: 'Вспомни диалоги из English in Use на стр. 12: кто что говорит и в каком порядке.',
      items: [
        { t: 'A: Next, please. B: 1) …', hint: 'Пассажир просит один билет.' },
        { t: 'A: Single or return? B: 2) … How much is it?', hint: 'Пассажир выбирает билет туда и обратно до станции.' },
        { t: 'A: 3) …', hint: 'Кассир называет цену.' },
        { t: 'B: Here you are. 4) …', hint: 'Пассажир спрашивает, на какой линии ехать.' },
        { t: 'B: 5) …', hint: 'Пассажир благодарит.' }
      ] }
  ],
  theory: [
    {
      title: 'Что проверяем в модуле 1',
      html: `
        <div class="duo">
          <div><span class="kicker">грамматика</span>
            <p>Present Simple ↔ Present Continuous (урок 1a)</p>
            <p class="ex" data-say="He takes me to school every day.">He <b>takes</b> me to school every day.</p><p class="tr">Он возит меня в школу каждый день.</p>
            <p class="ex" data-say="Be quiet. The baby is sleeping.">Be quiet. The baby <b>is sleeping</b>.</p><p class="tr">Тише. Малыш спит.</p>
            <p>should / shouldn’t (1b), both (1d), hundred / hundreds of (EU)</p></div>
          <div><span class="kicker">слова и фразы</span>
            <p>Город и деревня (1a), безопасность (1b), свободное время (1c), метро (EU)</p>
            <p class="ex" data-say="Many young people hang out at shopping centres.">Many young people <b>hang out</b> at shopping centres.</p><p class="tr">Многие подростки проводят время в торговых центрах.</p></div>
        </div>
        <p class="note">Это проверка: правил нового нет. Если ошибся — нажми «Правило» и повтори нужный урок.</p>`,
      check: { q: 'The bus ___ at 6:30pm.', options: [
        { t: 'leaves', ok: true, why: 'Расписание — Present Simple.' }, { t: 'is leaving', alt: true, why: 'Про сегодняшний автобус так скажут, но расписание в учебнике — leaves.' }] }
    }
  ],
  tasks: [
    { type: 'match', prompt: 'Соедини слова в пары (упр. 1)', pairs: [
      ['alarm', 'system'], ['heavy', 'traffic'], ['crowded', 'streets'], ['public', 'transport'], ['fresh', 'air']],
      why: 'Пары из уроков 1a и 1b.' },
    { type: 'choice', prompt: 'Выбери правильное слово', text: 'It’s a crime to ___ into a house.', options: [
      { t: 'break', ok: true, why: 'Вламываться — break into.' }, { t: 'look', why: 'look into — заглянуть, разобраться. Преступление — break into.' }] },
    { type: 'input', prompt: 'Впиши глагол в нужной форме', text: 'Be quiet. The baby ___ . (sleep)', answer: 'is sleeping', why: 'Прямо сейчас — is sleeping.' },
    { type: 'choice', prompt: 'Выбери правильное слово', text: 'You are ___ when you miss home.', options: [
      { t: 'homesick', ok: true, why: 'Скучать по дому — be homesick.' }, { t: 'hometown', why: 'hometown — родной город.' }] },
    { type: 'choice', prompt: 'Выбери правильное слово', text: 'On a hot day we ___ beach volleyball.', options: [
      { t: 'play', ok: true, why: 'Игры с мячом — play.' }, { t: 'do', why: 'В игры мы play.' }] },
    { type: 'write', prompt: 'Напиши по-английски', ru: 'Она не любит летать на самолёте.', answer: 'She doesn’t like flying by plane', alt: ['She does not like flying by plane', 'She doesn’t like flying', 'She doesnt like flying by plane'], why: 'like не ставят в -ing; отрицание — doesn’t like.' },
    { type: 'choice', prompt: 'Выбери предлог', text: 'The police are running ___ a burglar.', options: [
      { t: 'after', ok: true, why: 'Гнаться — run after.' }, { t: 'into', why: 'run into — случайно встретить.' }] },
    { type: 'build', prompt: 'Собери реплику пассажира (упр. 5)', hint: 'На какой линии мне ехать?',
      words: ['line', 'Which', 'I', 'do', 'take,', 'please'],
      answer: 'Which line do I take, please',
      why: 'Вопрос: Which line + do I take + please.' },
    { type: 'speak', prompt: 'Скажи вслух', say: 'Many young people hang out at shopping centres.', ru: 'Многие подростки проводят время в торговых центрах.', why: 'hang out — проводить время.' },
    { type: 'error', prompt: 'Нажми на слово с ошибкой', tokens: ['He', 'is', 'always', 'bite', 'his', 'nails.'], bad: [3],
      fix: 'He is always biting his nails.',
      why: 'Жалоба на привычку: is always + глагол с -ing — biting.',
      miss: 'Это слово на месте. Какая форма глагола нужна после is always?' }
  ]
};
(window.ICE_LESSONS = window.ICE_LESSONS || {})[window.ICE_LESSON.id] = window.ICE_LESSON;
