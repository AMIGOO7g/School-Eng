/* Содержание Spotlight 7 (Ваулина и др., 2023). Названия уроков и страницы — по оглавлению учебника. */
window.ICE_BOOK = (() => {
  const M = [
    ['Lifestyles', 'Образ жизни', 'Present Simple и Present Continuous, should / shouldn’t',
      ['A city mouse or a country mouse?', 'Город или деревня: как живут люди. Present Simple и Present Continuous, слова с -ment и un-'],
      ['Better safe than sorry', 'Правила безопасности дома и на улице. should / shouldn’t, наречия на -ly'],
      ['Hanging out', 'Чем заняться в свободное время: тексты о Сиднее'],
      ['Landmarks of the British Isles', 'Достопримечательности Британских островов, местоимение both'],
      'Покупаем билет в метро. Числа: hundred, thousand, million',
      'География: Мехико'],
    ['Tale time', 'Время историй', 'Past Simple, used to',
      ['Bookworms', 'Литературные жанры и писатели. Past Simple'],
      ['A classic read', 'Отрывок из «Путешествия к центру Земли». Past Simple и used to'],
      ['Vanished!', 'Рассказ «Vanished». Сложное дополнение'],
      ['The Gift of Storytelling', 'Мифические персонажи и народные сказки'],
      'Рассказываем о прошлом', 'Литература'],
    ['Profiles', 'Портреты', 'Относительные местоимения, -ed / -ing, порядок прилагательных',
      ['Lead the way!', 'Увлечения и характер. Относительные местоимения и наречия'],
      ['Who’s who?', 'Внешность. Причастия на -ed / -ing, порядок прилагательных'],
      ['Against all odds', 'Черты характера, фразовый глагол give'],
      ['The Yeoman Warders', 'Стражи Тауэра. Относительные местоимения: практика'],
      'Говорим о хобби и профессиях', 'История: дети викторианской эпохи'],
    ['In the news', 'В новостях', 'Past Continuous, Past Simple и Past Continuous',
      ['News stories', 'Виды СМИ. Past Continuous'],
      ['Did you hear about…?', 'Эмоции, фразовый глагол go. Past Simple и Past Continuous'],
      ['Take action!', 'Новости и заголовки'],
      ['Teenage magazines', 'Британские журналы для подростков'],
      'Выбираем, что посмотреть', 'Медиа'],
    ['What the future holds', 'Что ждёт в будущем', 'Future Simple, условные предложения 0 и 1 типа',
      ['Predictions', 'Прогнозы на будущее. Future Simple (will), фразовый глагол look'],
      ['Gadget madness', 'Гаджеты. Способы выразить будущее, условные 0 и 1 типа, if / unless'],
      ['What’s your opinion?', 'Компьютеры. Слова-связки в тексте'],
      ['High-tech teens', 'Любимые гаджеты подростков'],
      'Даём инструкции', 'Информатика'],
    ['Having fun', 'Развлечения', 'Present Perfect',
      ['The fun starts here!', 'Места для отдыха. Present Perfect, фразовый глагол come'],
      ['Teen camps', 'Лагеря для подростков. Present Perfect: already, yet, just, ever, never'],
      ['A whale of a time!', 'Каникулы. has gone и has been'],
      ['Theme Parks', 'Тематические парки. Приставки un-, il-, im-, in-, ir-'],
      'Бронируем место в летнем лагере', 'Безопасность на воде'],
    ['In the spotlight', 'В центре внимания', 'Сравнение прилагательных, пассивный залог',
      ['Walk of fame', 'Знаменитости. Степени сравнения прилагательных'],
      ['Streaming frenzy!', 'Фильмы. Пассивный залог, Present Perfect и Past Simple'],
      ['In the charts!', 'Музыка. Суффиксы -less и -ful'],
      ['The National Sport of England', 'Футбол — национальный вид спорта Англии'],
      'Покупаем билеты в кино', 'Музыка'],
    ['Green issues', 'Экология', 'Present Perfect Continuous, разделительные вопросы, have to / must',
      ['Save the Earth', 'Загрязнение планеты. Present Perfect Continuous'],
      ['Eco-helpers', 'Экопомощники. Разделительные вопросы, have to / must / mustn’t'],
      ['Born free', 'Животные и места их обитания. Слова-связки'],
      ['Scotland’s National Nature Reserves', 'Заповедники Шотландии'],
      'Жертвуем на доброе дело', 'Природоведение: пищевая цепочка'],
    ['Shopping time', 'Покупки', 'Слова количества, Present Perfect Continuous',
      ['You are what you eat!', 'Еда и упаковка. Слова количества: some, any, much, many'],
      ['Can I help you?', 'Магазины. Present Perfect и Present Perfect Continuous, to + глагол и -ing'],
      ['Gifts for everyone!', 'Описываем предметы. Порядок прилагательных'],
      ['Idioms and sayings about food', 'Идиомы и поговорки о еде'],
      'Благодарим и восхищаемся', 'Твой выбор'],
    ['Healthy body, healthy mind', 'В здоровом теле — здоровый дух', 'should, возвратные местоимения, might',
      ['Stress free', 'Стресс и как с ним справиться. should, if / unless'],
      ['Accident-prone', 'Несчастные случаи и травмы. Возвратные местоимения, might'],
      ['Doctor, doctor!', 'Болезни и самочувствие. Условные 1 типа: практика'],
      ['RFDSA, Australia', 'Летающие доктора Австралии'],
      'У школьной медсестры', 'Литература: Робинзон Крузо']
  ];
  return M.map((m, i) => {
    const n = i + 1, s = 5 + 10 * i;
    const L = [];
    ['a', 'b', 'c', 'd'].forEach((k, j) => {
      const pages = j < 2 ? `${s + 1 + 2 * j}–${s + 2 + 2 * j}` : `${s + 3 + j}`;
      L.push({ id: `${n}${k}`, code: `${n}${k}`, en: m[3 + j][0], ru: m[3 + j][1], pages });
    });
    L.push({ id: `${n}eu`, code: 'EU', en: `English in Use ${n}`, kind: 'Речь в жизни', ru: m[7], pages: `${s + 7}` });
    L.push({ id: `${n}ac`, code: 'AC', en: 'Across the Curriculum', kind: 'Связь с другими предметами', ru: m[8], pages: `${s + 8}` });
    L.push({ id: `${n}pc`, code: 'PC', en: `Progress Check ${n}`, kind: 'Проверка модуля', ru: 'Проверь себя по всему модулю', pages: `${s + 9}` });
    return { n, en: m[0], ru: m[1], grammar: m[2], pages: `${s}–${s + 9}`, lessons: L };
  });
})();

/* Уроки, у которых уже есть содержание */
window.ICE_READY = { '1a': true, '2b': true };

/* Куда ведёт «Продолжить»: первый непройденный урок текущего модуля */
window.ICE_NEXT = st => {
  const m = window.ICE_BOOK[(st.module || 1) - 1];
  const l = m.lessons.find(x => !st.done[x.id]) || m.lessons[0];
  return { m, l, href: window.ICE_READY[l.id] ? `lesson.html?l=${l.id}` : `module.html?m=${m.n}` };
};

window.ICE_STORE = {
  key: 'ice_english_progress_v1',
  load() { let s; try { s = JSON.parse(localStorage.getItem(this.key)); } catch (e) {} s = s || {}; s.done = s.done || {}; s.lp = s.lp || {}; s.module = s.module || 1; return s; },
  save(s) { try { localStorage.setItem(this.key, JSON.stringify(s)); } catch (e) {} }
};

/* Загрузить содержание готовых уроков (все или перечисленные) */
window.ICE_LOAD = (ids) => Promise.all((ids || Object.keys(window.ICE_READY)).map(id => new Promise(res => {
  if (window.ICE_LESSONS && window.ICE_LESSONS[id]) return res();
  const s = document.createElement('script'); s.src = `lessons/${id}.js`; s.onload = res; s.onerror = res; document.head.appendChild(s);
})));
