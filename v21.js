
const $=id=>document.getElementById(id);
const params=new URLSearchParams(location.search);
const titleMap={'1a':'A city mouse or a country mouse?','1b':'Better safe than sorry','1c':'Hanging out','1d':'Landmarks of the British Isles'};
const topic=params.get('topic')||'1a';
const route=(()=>{try{return JSON.parse(localStorage.getItem('ice_school_demo')||'{}')}catch{return {}}})();
$('crumb').textContent=`SCHOOL / CLASS ${route.grade||7} / ${route.book||'Spotlight 7'} / ${route.unit||'Module 1'} / ${topic.toUpperCase()}`;
$('title').textContent=titleMap[topic]||'Тренировка английского';
const tasks=[
 {q:'Какое предложение выражает регулярное действие?',opts:['I am skating now.','I skate every weekend.','I skating every day.'],ok:1,why:'Every weekend означает повторение. Поэтому используем Present Simple.'},
 {q:'Выбери действие, происходящее сейчас.',opts:['They read after school.','They are reading now.','They reading now.'],ok:1,why:'Now — действие в настоящий момент. Используем are + глагол с -ing.'},
 {q:'Как правильно сказать «Она живёт в городе»?',opts:['She live in the city.','She is live in the city.','She lives in the city.'],ok:2,why:'В Present Simple после she к смысловому глаголу добавляем -s.'}
];
let index=0,studyIndex=0;
const stateKey='ice_v21_progress_'+topic;
let state={chosen:{},solved:{},wrong:{}};
try{let old=JSON.parse(localStorage.getItem(stateKey)||'{}');if(old&&old.chosen)state=old}catch{}
const started=Date.now();
function save(){localStorage.setItem(stateKey,JSON.stringify(state));localStorage.setItem('ice_last_lesson','lesson.html?topic='+topic)}
function scoreboard(){const done=Object.values(state.solved).filter(Boolean).length;const review=Object.keys(state.wrong).filter(i=>!state.solved[i]).length;$('done').textContent=`${done} / ${tasks.length}`;$('review').textContent=review;$('meter').style.width=(done/tasks.length*100)+'%'}
function fireGoal(){const x=$('goal');x.classList.remove('fire');void x.offsetWidth;x.classList.add('fire')}
function draw(){const t=tasks[index];$('qn').textContent=`ЗАДАНИЕ ${index+1} / ${tasks.length}`;$('question').textContent=t.q;const list=$('options');list.replaceChildren();const chosen=state.chosen[index];t.opts.forEach((v,i)=>{const b=document.createElement('button');b.className='option';b.textContent=v;if(chosen===i)b.classList.add('selected');if(chosen!==undefined&&chosen===i)b.classList.add(i===t.ok?'correct':'wrong');b.onclick=()=>{const first=!state.solved[index];state.chosen[index]=i;if(i===t.ok){state.solved[index]=true;if(first)fireGoal()}else{state.wrong[index]=true}save();draw()};list.appendChild(b)});$('feedback').textContent=chosen===undefined?'Выбери ответ, затем прочитай разбор.':chosen===t.ok?'Верно. '+t.why:'Пока неверно. '+(chosen===0?'Проверь, обозначает ли предложение привычку или процесс.':'Вспомни правило и попробуй снова.');$('prev').disabled=index===0;$('next').disabled=index===tasks.length-1;scoreboard()}
$('prev').onclick=()=>{index--;draw()};$('next').onclick=()=>{index++;draw()};
const learn=[
 ['01 / НАБЛЮДЕНИЕ','Сравни две ситуации','I play hockey every day.','I am playing hockey now.','Первое предложение говорит о том, что происходит регулярно. Второе — о действии в данный момент. Попробуй назвать слова-подсказки.'],
 ['02 / ОБЪЯСНЕНИЕ','Когда использовать каждое время','Present Simple','Present Continuous','Present Simple — привычки, расписания и факты. Present Continuous — действия, которые происходят сейчас, и временные ситуации.'],
 ['03 / СХЕМА','Как строятся предложения','I / you / we / they + play','He / she / it + plays','В Present Simple после he, she, it обычно добавляем -s/-es. В Continuous: am/is/are + глагол с окончанием -ing.'],
 ['04 / ПРАКТИКА','Проверь себя','She plays hockey on Mondays.','She is playing hockey now.','В каком предложении можно поставить every Monday, а в каком right now? Попробуй объяснить.']
];
function phase(){const a=learn[studyIndex];$('phase').textContent=a[0];$('ptitle').textContent=a[1];$('ex1').textContent=a[2];$('ex2').textContent=a[3];$('rule').textContent=a[4];$('phasePrev').disabled=studyIndex===0;$('phaseNext').textContent=studyIndex===learn.length-1?'К тренировке →':'Следующий шаг →'}
$('phasePrev').onclick=()=>{studyIndex=Math.max(0,studyIndex-1);phase()};$('phaseNext').onclick=()=>{if(studyIndex===learn.length-1){document.getElementById('questionCard').scrollIntoView({behavior:'smooth'});return}studyIndex++;phase()};
$('fullExplain').onclick=()=>location.href='explain.html?topic='+encodeURIComponent(topic);
function toggleHomework(yes){$('homeworkBox').hidden=!yes;$('learningBox').hidden=yes;$('homeworkBtn').classList.toggle('active',yes);$('studyBtn').classList.toggle('active',!yes)}
$('homeworkBtn').onclick=()=>toggleHomework(true);$('studyBtn').onclick=()=>toggleHomework(false);
const homeworkIndex={
 '7-5':{title:'Страница 7, упражнение 5 — Present Simple / Continuous',desc:'На этой странице учебник предлагает раскрыть скобки, используя два настоящих времени. Ниже — авторская тренировка того же типа, а не копия упражнения.',items:[{q:'I usually ___ (play) hockey on Sundays.',a:'play',why:'Usually — привычка, I + play.'},{q:'She ___ (study) English right now.',a:'is studying',why:'Right now — процесс сейчас: is + studying.'}]},
 '7-6':{title:'Страница 7, упражнение 6 — выбор времени',desc:'Применяем различие привычного действия и происходящего сейчас. Упражнения составлены для платформы.',items:[{q:'They ___ (read) a book now.',a:'are reading',why:'Now → are reading.'}]}
};
$('hwLoad').onclick=()=>{const p=+$('page').value;const ex=$('exercise').value.trim();const record=homeworkIndex[`${p}-${ex}`];$('hwWork').replaceChildren();if(!record){$('hwStatus').textContent=`Для страницы ${p}, упражнения ${ex||'—'} интерактивная проверка ещё не подготовлена. Выбери стр. 7, № 5 или 6; исходный учебник при этом остаётся справочником.`;return}$('hwStatus').textContent=record.title+' — '+record.desc;record.items.forEach((item,j)=>{const wrap=document.createElement('div');wrap.className='hwitem';wrap.style.margin='16px 0';const t=document.createElement('p');t.textContent=`${j+1}. ${item.q}`;const inp=document.createElement('input');inp.className='inp';inp.placeholder='Введи ответ';inp.setAttribute('aria-label',item.q);const btn=document.createElement('button');btn.className='btn';btn.textContent='Проверить';const result=document.createElement('p');btn.onclick=()=>{let norm=s=>s.trim().toLowerCase().replace(/[’]/g,"'").replace(/\s+/g,' ');const ok=norm(inp.value)===norm(item.a);result.textContent=ok?'Верно. '+item.why:'Пока неверно. Подумай, есть ли указатель времени. Подсказка: '+(item.a.includes('ing')?'сейчас происходит процесс.':'обычное действие.');result.style.color=ok?'#24654c':'#94523c';if(ok){fireGoal()}};wrap.append(t,inp,btn,result);$('hwWork').append(wrap)})};
$('playAudio').onclick=()=>{const audio=new Audio('audio/i_play_hockey_every_day.mp3');audio.play().catch(()=>{$('audioStatus').textContent='Аудиозапись пока не загружена. Помести файл i_play_hockey_every_day.mp3 в папку audio проекта.'})};
$('reset').onclick=()=>{if(confirm('Начать тренировку заново?')){state={chosen:{},solved:{},wrong:{}};save();index=0;draw()}};
setInterval(()=>{const s=Math.floor((Date.now()-started)/1000);$('elapsed').textContent=String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0')},1000);
if(location.hash==='#homework')toggleHomework(true);phase();draw();
