'use strict';
(() => {
  const copy = {
    en: {
      graduation:'Systems Engineering graduate', today:'PRESENT', skip:'Skip to profile', role:'DEVELOPER & TECHNOLOGIST', intro:'20+ years creating with technology.<br>AI Engineering in training. Data. Automation.', scroll:'Follow the curiosity', layers:'LAYERS, NOT REPLACEMENTS.', present:'A CONTINUING EVOLUTION', build:'Everything learned.<br>Nothing left behind.', codeLabel:'AN ONGOING PRACTICE', screenIdle:'Built through curiosity.', screenActive:'The same foundations. Accelerated.', screenDescription:'At the present, AI connects the accumulated layers and the code begins writing itself. Illustrative code.', now:'NOW', layerNote:'A new layer. The same curiosity.', continuation:'THE NEXT CHAPTER', premiseFirst:"I've always created<br>with technology.", premiseNow:'Now, technology<br>creates with me.', curiosity:"A curiosity that hasn't changed.", profileTitle:'Experience that evolves.', profile:'Developer and technologist with <strong>20+ years of experience.</strong> Currently training in <strong>AI Engineering</strong>, with a focus on <strong>Data and Automation.</strong>', timeline:'Technological journey from 2002 to the present; accumulated layers', profileLabel:'Professional profile', title:'Jorge Beraun — A continuing curiosity'
    },
    es: {
      graduation:'Graduado en Ingeniería en Sistemas', today:'ACTUALIDAD', skip:'Ir al perfil', role:'DESARROLLADOR Y TECNÓLOGO', intro:'Más de 20 años creando con tecnología.<br>AI Engineering en formación. Data. Automation.', scroll:'Sigue la curiosidad', layers:'CAPAS, NO REEMPLAZOS.', present:'UNA EVOLUCIÓN CONSTANTE', build:'Todo lo aprendido.<br>Nada queda atrás.', codeLabel:'UNA PRÁCTICA CONSTANTE', screenIdle:'Creado desde la curiosidad.', screenActive:'La misma base. Con más impulso.', screenDescription:'Al llegar al presente, la IA conecta las capas acumuladas y el código comienza a escribirse solo. Código ilustrativo.', now:'HOY', layerNote:'Una nueva capa. La misma curiosidad.', continuation:'EL SIGUIENTE CAPÍTULO', premiseFirst:'Siempre he creado<br>con tecnología.', premiseNow:'Ahora, la tecnología<br>crea conmigo.', curiosity:'Una curiosidad que sigue igual.', profileTitle:'Experiencia que evoluciona.', profile:'Desarrollador y tecnólogo con <strong>más de 20 años de experiencia.</strong> Actualmente en formación en <strong>AI Engineering</strong>, con foco en <strong>Data y Automation.</strong>', timeline:'Trayectoria tecnológica desde 2002 hasta la actualidad; capas acumuladas', profileLabel:'Perfil profesional', title:'Jorge Beraun — Una curiosidad constante'
    }
  };
  const sectionCopy = {
  "en": {
    "experienceTitle": "Experience<br>that evolves.",
    "experienceIntro": "More than two decades turning complex processes and information into systems people can use to decide and act.",
    "realtimeLabel": "01 / REAL-TIME DATA",
    "realtimeTitle": "Data was there<br>from the beginning.",
    "realtimeBody": "At Halliburton / Real Time Operations, I worked on systems carrying drilling-well information into Halliburton’s global infrastructure: WITS transmission, data reception and processing, logs, and monitoring.",
    "realtimeOutcome": "The purpose was practical: help people at the well, in Mexico and in Houston see operational information and make decisions from it.",
    "field": "FIELD",
    "mexico": "MEXICO",
    "fieldFlow": "Operational information shared between the field, Mexico and Houston.",
    "publicLabel": "02 / PUBLIC SYSTEMS",
    "publicTitle": "Complex processes.<br>Thousands of people.<br>One system.",
    "publicBody": "I led the design and delivery of technology for public processes: structured emergency-call handling, educational staffing across more than 30,000 teachers, and the digitization of civil records.",
    "publicOutcome": "The work started before the software: understanding fragmented processes, defining requirements and coordinating implementation so information could become a decision—and a next step.",
    "input": "INPUT",
    "process": "PROCESS",
    "decision": "DECISION",
    "action": "ACTION",
    "publicFlow": "Information enters a process, informs a decision and leads to action.",
    "businessLabel": "03 / DIGITAL BUSINESS",
    "businessTitle": "Before platforms<br>made it easy.",
    "businessBody": "I helped build and lead early e-commerce solutions for local businesses, when selling online meant putting together pieces that today’s platforms often provide out of the box.",
    "businessOutcome": "The store was only the beginning. Orders, payments and delivery had to work together as a business process.",
    "store": "STORE",
    "order": "ORDER",
    "payment": "PAYMENT",
    "delivery": "DELIVERY",
    "businessFlow": "A store connects orders, payments and delivery.",
    "leadershipLabel": "04 / TECHNICAL LEADERSHIP",
    "leadershipTitle": "From building systems<br>to leading them.",
    "leadershipBody": "My role evolved from building parts of a system to understanding the whole problem: researching processes, designing solutions, defining requirements and coordinating the people who would build them.",
    "leadershipOutcome": "As a Technical Lead, I made technical decisions, supervised development and stayed involved where needed to take a solution into implementation.",
    "understand": "UNDERSTAND",
    "design": "DESIGN",
    "buildStep": "BUILD",
    "lead": "LEAD",
    "leadershipFlow": "Understand the problem, design the solution, build it and lead its implementation.",
    "experienceClose": "The tools changed.<br>The way I think didn’t.",
    "experiencePath": "Systems → information → decisions → action.",
    "aboutLabel": "ABOUT",
    "stillHuman": "STILL HUMAN.",
    "aboutThought": "After all these years,<br>technology still<br>makes me curious.",
    "aboutLearning": "I'm still learning.<br>Still building.",
    "portraitAlt": "Jorge Beraun, wearing a black shirt, against a dark background.",
    "joke": "// and yes, I still Google things.",
    "contactLabel": "CONTACT",
    "contactTitle": "Maybe we should<br>build something.",
    "socialLabel": "Social profiles",
    "footer": "© 2026 Jorge Beraun — still curious."
  },
  "es": {
    "experienceTitle": "Experiencia<br>que evoluciona.",
    "experienceIntro": "Más de dos décadas convirtiendo procesos complejos e información en sistemas que permiten decidir y actuar.",
    "realtimeLabel": "01 / DATOS EN TIEMPO REAL",
    "realtimeTitle": "Los datos estuvieron<br>desde el principio.",
    "realtimeBody": "En Halliburton / Real Time Operations, participé en sistemas que llevaban información de pozos de perforación a la infraestructura global de Halliburton: transmisión mediante WITS, recepción y procesamiento de datos, logs y monitoreo.",
    "realtimeOutcome": "El propósito era práctico: que las personas en el pozo, en México y en Houston pudieran observar información operacional y tomar decisiones basadas en datos.",
    "field": "POZO",
    "mexico": "MÉXICO",
    "fieldFlow": "Información operacional compartida entre el pozo, México y Houston.",
    "publicLabel": "02 / SISTEMAS PÚBLICOS",
    "publicTitle": "Procesos complejos.<br>Miles de personas.<br>Un sistema.",
    "publicBody": "Lideré el diseño y la implementación de soluciones para procesos públicos: registro y seguimiento de llamadas de emergencia, gestión de personal educativo para más de 30,000 docentes y digitalización de registros civiles.",
    "publicOutcome": "El trabajo empezaba antes del software: comprender procesos fragmentados, definir requerimientos y coordinar la implementación para convertir información en decisiones y acciones.",
    "input": "ENTRADA",
    "process": "PROCESO",
    "decision": "DECISIÓN",
    "action": "ACCIÓN",
    "publicFlow": "La información entra a un proceso, permite una decisión y conduce a una acción.",
    "businessLabel": "03 / NEGOCIOS DIGITALES",
    "businessTitle": "Antes de que las plataformas<br>lo hicieran fácil.",
    "businessBody": "Participé en el desarrollo y liderazgo de soluciones tempranas de comercio electrónico para negocios locales, cuando vender en línea implicaba construir piezas que hoy las plataformas suelen resolver de entrada.",
    "businessOutcome": "La tienda era solo el comienzo. Pedidos, pagos y entregas debían funcionar juntos como un proceso de negocio.",
    "store": "TIENDA",
    "order": "PEDIDO",
    "payment": "PAGO",
    "delivery": "ENTREGA",
    "businessFlow": "Una tienda conecta pedidos, pagos y entregas.",
    "leadershipLabel": "04 / LIDERAZGO TÉCNICO",
    "leadershipTitle": "De construir sistemas<br>a liderarlos.",
    "leadershipBody": "Mi papel evolucionó de construir partes de un sistema a comprender el problema completo: investigar procesos, diseñar soluciones, definir requerimientos y coordinar a quienes las desarrollarían.",
    "leadershipOutcome": "Como líder técnico, tomaba decisiones técnicas, supervisaba el desarrollo y participaba donde era necesario para llevar la solución a su implementación.",
    "understand": "ENTENDER",
    "design": "DISEÑAR",
    "buildStep": "CONSTRUIR",
    "lead": "LIDERAR",
    "leadershipFlow": "Entender el problema, diseñar la solución, construirla y liderar su implementación.",
    "experienceClose": "Las herramientas cambiaron.<br>Mi forma de pensar, no.",
    "experiencePath": "Sistemas → información → decisiones → acción.",
    "aboutLabel": "SOBRE MÍ",
    "stillHuman": "AÚN HUMANO.",
    "aboutThought": "Después de tantos años,<br>la tecnología todavía<br>me despierta curiosidad.",
    "aboutLearning": "Sigo aprendiendo.<br>Sigo construyendo.",
    "portraitAlt": "Jorge Beraun con camisa negra, frente a un fondo oscuro.",
    "joke": "// y sí, todavía busco cosas en Google.",
    "contactLabel": "CONTACTO",
    "contactTitle": "Quizá deberíamos<br>construir algo.",
    "socialLabel": "Perfiles sociales",
    "footer": "© 2026 Jorge Beraun — la curiosidad sigue."
  }
};
  Object.assign(copy.en, sectionCopy.en);
  Object.assign(copy.es, sectionCopy.es);
  Object.assign(copy.en, {timeline:'Accumulated technological layers', contactStory:'CURIOSITY BUILT<br>EVERYTHING YOU’VE<br>SEEN HERE.', contactNext:'LET’S BUILD<br>WHAT’S NEXT.', contactInvitation:'START A CONVERSATION.', socialLabel:'Contact methods'});
  Object.assign(copy.es, {timeline:'Capas tecnológicas acumuladas', contactStory:'LA CURIOSIDAD CREÓ<br>TODO LO QUE<br>HAS VISTO AQUÍ.', contactNext:'CONSTRUYAMOS<br>LO QUE SIGUE.', contactInvitation:'INICIEMOS UNA CONVERSACIÓN.', socialLabel:'Métodos de contacto'});
  Object.assign(copy.en,{navHome:'HOME',navExperience:'EXPERIENCE',navAbout:'ABOUT',navContact:'CONTACT',menuLabel:'MENU'});
  Object.assign(copy.es,{navHome:'INICIO',navExperience:'EXPERIENCIA',navAbout:'SOBRE MÍ',navContact:'CONTACTO',menuLabel:'MENÚ'});
  const $ = selector => document.querySelector(selector);
  const root = document.documentElement;
  const journey = $('.journey'), stage = $('.journey-stage'), about = $('.about'), aboutStage = $('.about-stage');
  const chapter = $('#chapter-name'), written = $('#written-code'), human = $('#human-typed'), joke = $('#joke-typed');
  const reveal = $('.reveal'), contact = $('.contact');
  const chapters = [...document.querySelectorAll('.experience-chapter')];
  const items = [...document.querySelectorAll('.timeline li')];
  const layers = [...document.querySelectorAll('.layer-stack i')];
  const names = ['SYSTEMS','CODE','WEB','DATA','AUTOMATION','AI'];
  const fullCode = "create({ foundations, curiosity,\n  collaborator: 'AI' });";
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const clamp = n => Math.max(0,Math.min(1,n));
  const segment = (n,a,b) => clamp((n-a)/(b-a));
  const timing = {code:2400, human:1000, portrait:650, joke:1350};
  let language='en', pending=false, needsMeasure=true, geometry, chapterIndex=0, chapterAnimation;
  // Time-based runs survive a stopped scroll. Only leaving the scene upwards resets them.
  let codeStart=null, humanStart=null, photoStart=null, jokeStart=null;
  let lastJoke='', lastHuman='', lastCode='';
  function setText(el,text,previous) { if(text!==previous) el.textContent=text; return text; }
  function colorGoogle(text) {
    if (text===lastJoke) return;
    lastJoke=text; joke.replaceChildren();
    const start=text.indexOf('Google');
    if(start<0){joke.textContent=text;return;}
    joke.append(document.createTextNode(text.slice(0,start)));
    const colors=['#4285f4','#ea4335','#fbbc05','#4285f4','#34a853','#ea4335'];
    [...'Google'].forEach((letter,i)=>{const span=document.createElement('span');span.textContent=letter;span.style.color=colors[i];joke.append(span);});
    joke.append(document.createTextNode(text.slice(start+6)));
  }
  function setLanguage(next) {
    language=next; root.lang=next;
    document.querySelectorAll('[data-copy]').forEach(el=>{if(copy[next][el.dataset.copy]!==undefined)el.innerHTML=copy[next][el.dataset.copy];});
    document.querySelectorAll('[data-language]').forEach(el=>el.setAttribute('aria-pressed',String(el.dataset.language===next)));
    $('.timeline').setAttribute('aria-label',copy[next].timeline);
    $('.identity').setAttribute('aria-label',next==='en'?'Jorge Beraun — Home':'Jorge Beraun — Inicio');
    $('.about-portrait img').alt=copy[next].portraitAlt;
    $('.contact-links').setAttribute('aria-label',copy[next].socialLabel);
    document.title=copy[next].title;
    $('.site-nav').setAttribute('aria-label',next==='en'?'Main navigation':'Navegación principal');
    needsMeasure=true; schedule();
  }
  function bounds(el,inner,viewport,headerHeight) {
    const height=inner.getBoundingClientRect().height;
    return {top:el.getBoundingClientRect().top+scrollY,travel:Math.max(1,el.getBoundingClientRect().height-height),pin:Math.min(headerHeight,viewport-height)};
  }
  function measure() {
    const viewport=$('.viewport-metric').getBoundingClientRect().height||innerHeight;
    const headerHeight=header.getBoundingClientRect().height;
    root.style.setProperty('--header-height',`${headerHeight}px`);
    // Each sticky child is bounded by its own wrapper, never by the next scene.
    const heights=chapters.map(el=>el.getBoundingClientRect().height);
    chapters.forEach((el,i)=>{
      el.parentElement.style.setProperty('--chapter-height',`${heights[i]}px`);
      el.style.setProperty('--chapter-pin',`${Math.min(headerHeight,viewport-heights[i])}px`);
    });
    const aboutHeight=aboutStage.getBoundingClientRect().height;
    about.style.setProperty('--about-height',`${aboutHeight}px`);
    const journeyHeight=stage.getBoundingClientRect().height;
    journey.style.setProperty('--journey-height',`${journeyHeight}px`);
    geometry={viewport,headerHeight,journey:bounds(journey,stage,viewport,headerHeight),about:bounds(about,aboutStage,viewport,headerHeight),chapters:chapters.map(el=>bounds(el.parentElement,el,viewport,headerHeight)),revealTop:reveal.getBoundingClientRect().top+scrollY};
    $('.reveal-content').style.setProperty('--reveal-pin',`${Math.min(headerHeight,viewport-$('.reveal-content').getBoundingClientRect().height)}px`);
    geometry.sections=navLinks.map(link=>({id:link.dataset.section,top:document.getElementById(link.dataset.section).getBoundingClientRect().top+scrollY}));
    stage.style.setProperty('--pin-top',`${geometry.journey.pin}px`);
    aboutStage.style.setProperty('--about-pin-top',`${geometry.about.pin}px`);
    needsMeasure=false;
  }
  const progressAt=(scene,y)=>clamp((y-scene.top+scene.pin)/scene.travel);
  function render(now) {
    pending=false;
    if(needsMeasure)measure();
    const y=scrollY, quiet=reduced.matches;
    updateNavigation(y);
    const p=quiet?1:progressAt(geometry.journey,y);
    // Six layers occupy the first 60%; the remainder is native scroll hold for AI.
    const index=quiet?5:Math.min(5,Math.floor(p/.12));
    items.forEach((el,i)=>{el.classList.toggle('reached',i<=index);el.classList.toggle('current',i===index);});
    layers.forEach((el,i)=>el.classList.toggle('on',i<=index));
    stage.style.setProperty('--progress',index/5);
    chapter.classList.toggle('typing-cursor',index<5);
    if(chapterIndex!==index){
      chapterIndex=index;chapter.textContent=names[index];
      chapterAnimation?.cancel();
      if(!quiet)chapterAnimation=chapter.animate([{opacity:0,transform:'translateY(7px)'},{opacity:1,transform:'none'}],{duration:520,easing:'ease-out'});
    }
    const ai=index===5;
    stage.classList.toggle('ai-active',ai);
    $('.code-status').textContent=copy[language][ai?'screenActive':'screenIdle'];
    if(!ai){codeStart=null;}else if(codeStart===null){codeStart=now;}
    const codeProgress=quiet?1:codeStart===null?0:clamp((now-codeStart-250)/timing.code);
    lastCode=setText(written,fullCode.slice(0,Math.floor(codeProgress*fullCode.length)),lastCode);
    stage.classList.toggle('ai-arrival',ai&&codeProgress<1);
    stage.classList.toggle('story-complete',ai&&codeProgress===1);
    if(quiet||y>geometry.revealTop+geometry.viewport*.15)reveal.classList.add('second-visible');
    if(y<geometry.revealTop-geometry.viewport)reveal.classList.remove('second-visible');
    // Actual process progress stays scroll-linked and reverses on upward scroll.
    chapters.forEach((el,i)=>{const q=progressAt(geometry.chapters[i],y);el.style.setProperty('--flow',quiet?'1':segment(q,.16,.76).toFixed(4));});
    const ap=quiet?1:progressAt(geometry.about,y);
    if(!quiet&&y<geometry.about.top-geometry.viewport*.5){humanStart=photoStart=jokeStart=null;}
    if((quiet||ap>=.04)&&humanStart===null)humanStart=now;
    const hp=quiet?1:humanStart===null?0:clamp((now-humanStart)/timing.human);
    lastHuman=setText(human,copy[language].stillHuman.slice(0,Math.floor(hp*copy[language].stillHuman.length)),lastHuman);
    aboutStage.classList.toggle('human-started',humanStart!==null||quiet);
    if((quiet||(ap>=.28&&hp===1))&&photoStart===null)photoStart=now;
    const photoDone=quiet||(photoStart!==null&&now-photoStart>=timing.portrait);
    aboutStage.classList.toggle('portrait-visible',photoStart!==null||quiet);
    if((quiet||(ap>=.50&&photoDone))&&jokeStart===null)jokeStart=now;
    const jp=quiet?1:jokeStart===null?0:clamp((now-jokeStart)/timing.joke);
    colorGoogle(copy[language].joke.slice(0,Math.floor(jp*copy[language].joke.length)));
    aboutStage.classList.toggle('joke-visible',jokeStart!==null||quiet);
    if(quiet){reveal.classList.add('is-visible');contact.classList.add('is-visible');chapterAnimation?.cancel();}
    const running=!quiet&&((ai&&codeProgress<1)||(humanStart!==null&&hp<1)||(photoStart!==null&&!photoDone)||(jokeStart!==null&&jp<1));
    if(running)schedule();
  }
  function schedule(){if(!pending){pending=true;requestAnimationFrame(render);}}
  function resize(){needsMeasure=true;schedule();}
  document.querySelectorAll('[data-language]').forEach(el=>el.addEventListener('click',()=>setLanguage(el.dataset.language)));
  if('IntersectionObserver' in window){
    const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting)entry.target.classList.add('is-visible');}),{threshold:.12});
    observer.observe(reveal);observer.observe(contact);
  }else{reveal.classList.add('is-visible');contact.classList.add('is-visible');}
  // A non-modal disclosure: normal tab order, Escape and outside-focus dismissal.
  const header=$('.header'), menu=$('.menu-toggle'), panel=$('#header-panel');
  const mobileNav=matchMedia('(max-width: 900px)');
  const navLinks=[...document.querySelectorAll('.site-nav a')];
  let activeSection='top';
  function setMenu(open,restoreFocus=false){
    const expanded=mobileNav.matches&&open;
    menu.setAttribute('aria-expanded',String(expanded));
    panel.hidden=mobileNav.matches&&!expanded;
    if(restoreFocus)menu.focus({preventScroll:true});
  }
  function updateNavigation(y){
    // The same reading line is used in both directions, with a small hysteresis.
    const readingLine=y+geometry.headerHeight+Math.min(96,(geometry.viewport-geometry.headerHeight)*.18);
    const oldIndex=geometry.sections.findIndex(s=>s.id===activeSection);
    let index=0;
    geometry.sections.forEach((s,i)=>{if(s.top<=readingLine)index=i;});
    if(index<oldIndex&&readingLine>geometry.sections[oldIndex].top-16)return;
    const id=geometry.sections[index].id;
    if(id===activeSection)return;
    activeSection=id;
    navLinks.forEach(link=>{if(link.dataset.section===id)link.setAttribute('aria-current','location');else link.removeAttribute('aria-current');});
  }
  menu.addEventListener('click',()=>setMenu(menu.getAttribute('aria-expanded')!=='true'));
  header.addEventListener('keydown',event=>{if(event.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){setMenu(false,true);}});
  header.addEventListener('focusout',event=>{if(event.relatedTarget&&!header.contains(event.relatedTarget))setMenu(false);});
  document.addEventListener('click',event=>{if(!header.contains(event.target))setMenu(false);});
  [...navLinks,$('.identity')].forEach(link=>link.addEventListener('click',()=>{
    setMenu(false);
    const target=document.getElementById(link.getAttribute('href').slice(1));
    requestAnimationFrame(()=>{target.focus({preventScroll:true});schedule();});
  }));
  mobileNav.addEventListener('change',()=>{const focusInside=panel.contains(document.activeElement);setMenu(false,mobileNav.matches&&focusInside);resize();});
  root.classList.add('nav-ready');
  setMenu(false);
  written.textContent='';human.textContent='';joke.textContent='';root.classList.add('animated');
  addEventListener('scroll',schedule,{passive:true});addEventListener('resize',resize,{passive:true});addEventListener('pageshow',resize);
  reduced.addEventListener('change',resize);
  schedule();
})();
