'use strict';
(() => {
  const copy = {
    en: {
      graduation:'Systems Engineering graduate', today:'PRESENT', skip:'Skip to experience', role:'DEVELOPER & TECHNOLOGIST', intro:'20+ years creating with technology.<br>AI Engineering in training. Data. Automation.', scroll:'Follow the curiosity', layers:'LAYERS, NOT REPLACEMENTS.', present:'A CONTINUING EVOLUTION', build:'Everything learned.<br>Nothing left behind.', codeLabel:'AN ONGOING PRACTICE', screenIdle:'Built through curiosity.', screenActive:'The same foundations. Accelerated.', screenDescription:'At the present, AI connects the accumulated layers and the code begins writing itself. Illustrative code.', now:'NOW', layerNote:'A new layer. The same curiosity.', continuation:'THE NEXT CHAPTER', premiseFirst:"I've always created<br>with technology.", premiseNow:'Now, technology<br>creates with me.', curiosity:"A curiosity that hasn't changed.", profileTitle:'Experience that evolves.', profile:'Developer and technologist with <strong>20+ years of experience.</strong> Currently training in <strong>AI Engineering</strong>, with a focus on <strong>Data and Automation.</strong>', timeline:'Technological journey from 2002 to the present; accumulated layers', profileLabel:'Professional profile', title:'Jorge Beraun — A continuing curiosity'
    },
    es: {
      graduation:'Graduado en Ingeniería en Sistemas', today:'ACTUALIDAD', skip:'Ir a la experiencia', role:'DESARROLLADOR Y TECNÓLOGO', intro:'Más de 20 años creando con tecnología.<br>AI Engineering en formación. Data. Automation.', scroll:'Sigue la curiosidad', layers:'CAPAS, NO REEMPLAZOS.', present:'UNA EVOLUCIÓN CONSTANTE', build:'Todo lo aprendido.<br>Nada queda atrás.', codeLabel:'UNA PRÁCTICA CONSTANTE', screenIdle:'Creado desde la curiosidad.', screenActive:'La misma base. Con más impulso.', screenDescription:'Al llegar al presente, la IA conecta las capas acumuladas y el código comienza a escribirse solo. Código ilustrativo.', now:'HOY', layerNote:'Una nueva capa. La misma curiosidad.', continuation:'EL SIGUIENTE CAPÍTULO', premiseFirst:'Siempre he creado<br>con tecnología.', premiseNow:'Ahora, la tecnología<br>crea conmigo.', curiosity:'Una curiosidad que sigue igual.', profileTitle:'Experiencia que evoluciona.', profile:'Desarrollador y tecnólogo con <strong>más de 20 años de experiencia.</strong> Actualmente en formación en <strong>AI Engineering</strong>, con foco en <strong>Data y Automation.</strong>', timeline:'Trayectoria tecnológica desde 2002 hasta la actualidad; capas acumuladas', profileLabel:'Perfil profesional', title:'Jorge Beraun — Una curiosidad constante'
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
  Object.assign(copy.en, {finaleLabel:'FINALE'});
  Object.assign(copy.es, {finaleLabel:'CIERRE'});

  const $ = selector => document.querySelector(selector);
  const root = document.documentElement;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const clamp = n => Math.max(0, Math.min(1, n));
  let language = 'en';

  /* ---------- Language ---------- */
  function refreshDynamicCopy() {
    // Texts the JS types or updates itself, outside data-copy.
    const status = $('.code-status');
    if (status) status.textContent = copy[language][aiActive ? 'screenActive' : 'screenIdle'];
    if (aboutDone) {
      human.textContent = copy[language].stillHuman;
      colorGoogle(copy[language].joke);
    }
  }
  function setLanguage(next) {
    language = next;
    root.lang = next;
    document.querySelectorAll('[data-copy]').forEach(el => {
      if (copy[next][el.dataset.copy] !== undefined) el.innerHTML = copy[next][el.dataset.copy];
    });
    document.querySelectorAll('[data-language]').forEach(el => el.setAttribute('aria-pressed', String(el.dataset.language === next)));
    $('.timeline').setAttribute('aria-label', copy[next].timeline);
    $('.identity').setAttribute('aria-label', next === 'en' ? 'Jorge Beraun — Home' : 'Jorge Beraun — Inicio');
    $('.about-portrait img').alt = copy[next].portraitAlt;
    $('.contact-links').setAttribute('aria-label', copy[next].socialLabel);
    document.title = copy[next].title;
    $('.site-nav').setAttribute('aria-label', next === 'en' ? 'Main navigation' : 'Navegación principal');
    refreshDynamicCopy();
    measureSections();
  }

  /* ---------- Starfield (level 3): twinkle + drift + shooting stars ---------- */
  const canvas = $('#starfield');
  const ctx = canvas ? canvas.getContext('2d') : null;
  let stars = [], shooters = [], starWidth = 0, starHeight = 0, starRaf = null, nextShooter = Infinity;
  function newStar(anywhere) {
    return {
      x: Math.random() * starWidth,
      y: anywhere ? Math.random() * starHeight : -4,
      r: Math.random() * 1.1 + .3,
      phase: Math.random() * Math.PI * 2,
      speed: .3 + Math.random() * .9,
      drift: (Math.random() - .5) * .06,
      fall: .02 + Math.random() * .05
    };
  }
  function sizeStars() {
    if (!ctx) return;
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    starWidth = canvas.clientWidth;
    starHeight = canvas.clientHeight;
    canvas.width = Math.floor(starWidth * dpr);
    canvas.height = Math.floor(starHeight * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const count = Math.min(190, Math.floor(starWidth * starHeight / 9000));
    stars = Array.from({length: count}, () => newStar(true));
  }
  function drawStars(now) {
    if (!ctx) return;
    ctx.clearRect(0, 0, starWidth, starHeight);
    for (const s of stars) {
      const tw = .35 + .65 * (.5 + .5 * Math.sin(now / 1000 * s.speed + s.phase));
      ctx.globalAlpha = tw * .9;
      ctx.fillStyle = '#fff';
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
      ctx.fill();
      if (!reduced.matches) {
        s.x += s.drift;
        s.y += s.fall;
        if (s.y > starHeight + 4) { Object.assign(s, newStar(false)); s.y = -4; }
        if (s.x < -4) s.x = starWidth + 4;
        if (s.x > starWidth + 4) s.x = -4;
      }
    }
    if (!reduced.matches && now >= nextShooter) {
      shooters.push({
        x: starWidth * (.15 + Math.random() * .7),
        y: starHeight * Math.random() * .3,
        vx: -(4 + Math.random() * 4),
        vy: 2 + Math.random() * 2,
        life: 1
      });
      nextShooter = now + 4000 + Math.random() * 5000;
    }
    shooters = shooters.filter(sh => sh.life > 0);
    for (const sh of shooters) {
      sh.x += sh.vx;
      sh.y += sh.vy;
      sh.life -= .02;
      const tail = 12;
      const grad = ctx.createLinearGradient(sh.x, sh.y, sh.x - sh.vx * tail, sh.y - sh.vy * tail);
      grad.addColorStop(0, 'rgba(255,255,255,' + (.9 * sh.life).toFixed(3) + ')');
      grad.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.globalAlpha = 1;
      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(sh.x, sh.y);
      ctx.lineTo(sh.x - sh.vx * tail, sh.y - sh.vy * tail);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
  }
  function starLoop(now) {
    drawStars(now);
    if (!document.hidden && !reduced.matches) starRaf = requestAnimationFrame(starLoop);
    else starRaf = null;
  }
  function startStars() {
    if (!ctx || starRaf !== null || reduced.matches) return;
    nextShooter = performance.now() + 2500;
    starRaf = requestAnimationFrame(starLoop);
  }
  function stopStars() {
    if (starRaf !== null) { cancelAnimationFrame(starRaf); starRaf = null; }
  }

  /* ---------- Progress bar + scroll parallax ---------- */
  const progressFill = $('#progress-fill');
  let ticking = false;
  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      ticking = false;
      const max = document.documentElement.scrollHeight - innerHeight;
      progressFill.style.width = (max > 0 ? (scrollY / max) * 100 : 0) + '%';
      root.style.setProperty('--scroll-p', clamp(scrollY / innerHeight).toFixed(3));
      updateNavigation();
    });
  }
  addEventListener('scroll', onScroll, {passive: true});

  /* ---------- Pointer parallax (starfield drifts against the pointer) ---------- */
  let pointerQueued = false;
  addEventListener('pointermove', event => {
    if (reduced.matches || pointerQueued) return;
    pointerQueued = true;
    requestAnimationFrame(() => {
      pointerQueued = false;
      root.style.setProperty('--px', ((event.clientX / innerWidth) * 2 - 1).toFixed(3));
      root.style.setProperty('--py', ((event.clientY / innerHeight) * 2 - 1).toFixed(3));
    });
  }, {passive: true});

  /* ---------- Scroll-triggered reveals ---------- */
  const revealEls = [...document.querySelectorAll('[data-reveal]')];
  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {threshold: .12, rootMargin: '0px 0px -8% 0px'});
    revealEls.forEach(el => revealObserver.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('is-visible'));
  }

  /* ---------- Journey sequence: layers light up one by one ---------- */
  const journey = $('.journey'), stage = $('.journey-stage');
  const chapter = $('#chapter-name'), written = $('#written-code');
  const items = [...document.querySelectorAll('.timeline li')];
  const layers = [...document.querySelectorAll('.layer-stack i')];
  const names = ['SYSTEMS', 'CODE', 'WEB', 'DATA', 'AUTOMATION', 'AI'];
  const fullCode = "create({ foundations, curiosity,\n  collaborator: 'AI' });";
  const LAYER_STEP = 650, CODE_TIME = 2400;
  let aiActive = false, journeyDone = false, chapterIndex = 0, chapterAnimation;
  function setLayer(index) {
    items.forEach((el, i) => {
      el.classList.toggle('reached', i <= index);
      el.classList.toggle('current', i === index);
    });
    layers.forEach((el, i) => el.classList.toggle('on', i <= index));
    stage.style.setProperty('--progress', (index / 5).toFixed(3));
    if (chapterIndex !== index) {
      chapterIndex = index;
      chapter.textContent = names[index];
      if (chapterAnimation) chapterAnimation.cancel();
      if (!reduced.matches) {
        chapterAnimation = chapter.animate(
          [{opacity: 0, transform: 'translateY(7px)'}, {opacity: 1, transform: 'none'}],
          {duration: 520, easing: 'ease-out'});
      }
    }
  }
  function typeCode(start) {
    const tick = now => {
      const p = clamp((now - start) / CODE_TIME);
      written.textContent = fullCode.slice(0, Math.floor(p * fullCode.length));
      if (p < 1) requestAnimationFrame(tick);
      else {
        stage.classList.remove('ai-arrival');
        stage.classList.add('story-complete');
        journeyDone = true;
      }
    };
    requestAnimationFrame(tick);
  }
  function runJourney() {
    if (journeyDone) return;
    if (reduced.matches) {
      setLayer(5);
      aiActive = true;
      stage.classList.add('ai-active', 'story-complete');
      written.textContent = fullCode;
      $('.code-status').textContent = copy[language].screenActive;
      journeyDone = true;
      return;
    }
    let index = 0;
    setLayer(0);
    const step = () => {
      index++;
      if (index > 5) return;
      setLayer(index);
      if (index === 5) {
        aiActive = true;
        stage.classList.add('ai-active', 'ai-arrival');
        $('.code-status').textContent = copy[language].screenActive;
        typeCode(performance.now() + 250);
      } else {
        setTimeout(step, LAYER_STEP);
      }
    };
    setTimeout(step, LAYER_STEP);
  }
  if ('IntersectionObserver' in window) {
    const journeyObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { runJourney(); journeyObserver.disconnect(); }
      });
    }, {threshold: .25});
    journeyObserver.observe(journey);
  } else {
    runJourney();
  }

  /* ---------- Experience chapter flows ---------- */
  const chapters = [...document.querySelectorAll('.experience-chapter')];
  function animateFlow(el) {
    if (reduced.matches) { el.style.setProperty('--flow', '1'); return; }
    const start = performance.now();
    const tick = now => {
      const p = clamp((now - start) / 2200);
      el.style.setProperty('--flow', p.toFixed(4));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }
  if ('IntersectionObserver' in window) {
    const flowObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateFlow(entry.target);
          flowObserver.unobserve(entry.target);
        }
      });
    }, {threshold: .3});
    chapters.forEach(el => {
      el.style.setProperty('--flow', '0');
      flowObserver.observe(el);
    });
  }

  /* ---------- About typing sequence ---------- */
  const about = $('.about');
  const human = $('#human-typed'), joke = $('#joke-typed');
  let aboutDone = false, lastJoke = '';
  function colorGoogle(text) {
    if (text === lastJoke) return;
    lastJoke = text;
    joke.replaceChildren();
    const start = text.indexOf('Google');
    if (start < 0) { joke.textContent = text; return; }
    joke.append(document.createTextNode(text.slice(0, start)));
    const colors = ['#4285f4', '#ea4335', '#fbbc05', '#4285f4', '#34a853', '#ea4335'];
    [...'Google'].forEach((letter, i) => {
      const span = document.createElement('span');
      span.textContent = letter;
      span.style.color = colors[i];
      joke.append(span);
    });
    joke.append(document.createTextNode(text.slice(start + 6)));
  }
  function typeText(el, getText, duration, done) {
    const start = performance.now();
    const tick = now => {
      const text = getText();
      const p = clamp((now - start) / duration);
      const slice = text.slice(0, Math.floor(p * text.length));
      if (el === joke) colorGoogle(slice);
      else el.textContent = slice;
      if (p < 1) requestAnimationFrame(tick);
      else if (done) done();
    };
    requestAnimationFrame(tick);
  }
  function runAbout() {
    if (aboutDone) return;
    if (reduced.matches) {
      human.textContent = copy[language].stillHuman;
      colorGoogle(copy[language].joke);
      aboutDone = true;
      return;
    }
    typeText(human, () => copy[language].stillHuman, 1000, () => {
      typeText(joke, () => copy[language].joke, 1350, () => { aboutDone = true; });
    });
  }
  if ('IntersectionObserver' in window) {
    const aboutObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { runAbout(); aboutObserver.disconnect(); }
      });
    }, {threshold: .25});
    aboutObserver.observe(about);
  } else {
    runAbout();
  }

  /* ---------- Navigation: active section + mobile menu ---------- */
  const header = $('.header'), menu = $('.menu-toggle'), panel = $('#header-panel');
  const mobileNav = matchMedia('(max-width: 900px)');
  const navLinks = [...document.querySelectorAll('.site-nav a')];
  let activeSection = 'top', sectionTops = [], headerHeight = 64;
  function measureSections() {
    headerHeight = header.getBoundingClientRect().height;
    sectionTops = navLinks.map(link => ({
      id: link.dataset.section,
      top: document.getElementById(link.dataset.section).getBoundingClientRect().top + scrollY
    }));
  }
  function updateNavigation() {
    if (!sectionTops.length) measureSections();
    const readingLine = scrollY + headerHeight + Math.min(96, (innerHeight - headerHeight) * .18);
    const oldIndex = sectionTops.findIndex(s => s.id === activeSection);
    let index = 0;
    sectionTops.forEach((s, i) => { if (s.top <= readingLine) index = i; });
    if (index < oldIndex && readingLine > sectionTops[oldIndex].top - 16) return;
    const id = sectionTops[index].id;
    if (id === activeSection) return;
    activeSection = id;
    navLinks.forEach(link => {
      if (link.dataset.section === id) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
  function setMenu(open, restoreFocus) {
    const expanded = mobileNav.matches && open;
    menu.setAttribute('aria-expanded', String(expanded));
    panel.hidden = mobileNav.matches && !expanded;
    if (restoreFocus) menu.focus({preventScroll: true});
  }
  menu.addEventListener('click', () => setMenu(menu.getAttribute('aria-expanded') !== 'true'));
  header.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menu.getAttribute('aria-expanded') === 'true') setMenu(false, true);
  });
  header.addEventListener('focusout', event => {
    if (event.relatedTarget && !header.contains(event.relatedTarget)) setMenu(false);
  });
  document.addEventListener('click', event => { if (!header.contains(event.target)) setMenu(false); });
  [...navLinks, $('.identity')].forEach(link => link.addEventListener('click', () => {
    setMenu(false);
    const target = document.getElementById(link.getAttribute('href').slice(1));
    requestAnimationFrame(() => { target.focus({preventScroll: true}); onScroll(); });
  }));
  mobileNav.addEventListener('change', () => {
    const focusInside = panel.contains(document.activeElement);
    setMenu(false, mobileNav.matches && focusInside);
    measureSections();
  });

  /* ---------- Init ---------- */
  document.querySelectorAll('[data-language]').forEach(el => el.addEventListener('click', () => setLanguage(el.dataset.language)));
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopStars();
    else startStars();
  });
  reduced.addEventListener('change', () => {
    if (reduced.matches) { stopStars(); drawStars(performance.now()); }
    else startStars();
  });
  let resizeTimer;
  addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      sizeStars();
      drawStars(performance.now());
      measureSections();
    }, 150);
  }, {passive: true});
  addEventListener('pageshow', () => { measureSections(); onScroll(); });

  root.classList.add('nav-ready', 'animated');
  setMenu(false);
  // Typing targets start empty; the HTML holds the full text for no-JS.
  written.textContent = '';
  human.textContent = '';
  joke.textContent = '';
  lastJoke = '';
  measureSections();
  sizeStars();
  drawStars(performance.now());
  startStars();
  onScroll();
})();
