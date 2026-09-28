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
  const root = document.documentElement;
  const journey = document.querySelector('.journey');
  const stage = document.querySelector('.journey-stage');
  const items = [...document.querySelectorAll('.timeline li')];
  const layers = [...document.querySelectorAll('.layer-stack i')];
  const written = document.querySelector('#written-code');
  const status = document.querySelector('.code-status');
  const fullCode = "create({ foundations, curiosity,\n  collaborator: 'AI' });";
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  const compact = matchMedia('(max-height: 600px), (max-width: 800px) and (max-height: 740px)');
  let chapterIndex = 0, chapterAnimation;
  let language = 'en', activeAI = false, rafPending = false, typingFrame = 0, typed = false;
  const clamp = value => Math.max(0, Math.min(1, value));
  function setLanguage(next) {
    language = next;
    root.lang = next;
    document.querySelectorAll('[data-copy]').forEach(el => { el.innerHTML = copy[next][el.dataset.copy]; });
    document.querySelectorAll('[data-language]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === next)));
    document.querySelector('.timeline').setAttribute('aria-label', copy[next].timeline);
    document.querySelector('#profile').setAttribute('aria-label', copy[next].profileLabel);
    document.querySelector('.identity').setAttribute('aria-label', next === 'en' ? 'Jorge Beraun — Home' : 'Jorge Beraun — Inicio');
    document.title = copy[next].title;
    status.textContent = copy[next][activeAI ? 'screenActive' : 'screenIdle'];
    render();
  }
  function typeCode() {
    cancelAnimationFrame(typingFrame);
    if (reduced.matches) { written.textContent = fullCode; return; }
    const start = performance.now();
    function tick(now) {
      if (!activeAI) return;
      const progress = clamp((now - start) / 1150);
      written.textContent = fullCode.slice(0, Math.floor(fullCode.length * progress));
      if (progress < 1) typingFrame = requestAnimationFrame(tick);
      else typed = true;
    }
    typingFrame = requestAnimationFrame(tick);
  }
  function render() {
    rafPending = false;
    const box = journey.getBoundingClientRect();
    // A shorter viewport uses document flow, avoiding an oversized sticky scene.
    const progress = reduced.matches ? 1 : compact.matches
      ? clamp((innerHeight * .2 - box.top) / Math.max(1, box.height * .65))
      : clamp(-box.top / Math.max(1, box.height - innerHeight));
    const index = Math.min(4, Math.floor(progress / .1625));
    const ai = index === 4;
    items.forEach((item, i) => { item.classList.toggle('reached', i <= index); item.classList.toggle('current', i === index); });
    layers.forEach((layer, i) => layer.classList.toggle('on', i <= index));
    stage.style.setProperty('--progress', index / 4);
    document.querySelector('.monitor').style.transform = reduced.matches ? 'none' : `translateY(${Math.round(6 * (1 - progress))}px)`;
    document.querySelector('#chapter-number').textContent = ['2002','2005','2010','2020',copy[language].today][index];
    const chapter = document.querySelector('#chapter-name');
    if (index !== chapterIndex) {
      chapterIndex = index;
      chapter.textContent = ['SYSTEMS','CODE','DATA','AUTOMATION','AI'][index];
      chapter.classList.toggle('typing-cursor', index > 0 && index < 4);
      if (chapterAnimation) chapterAnimation.cancel();
      if (!reduced.matches && chapter.animate) {
        chapterAnimation = chapter.animate([
          {opacity:0, transform:'translateY(7px)'},
          {opacity:1, transform:'translateY(0)'}
        ], {duration:520, easing:'cubic-bezier(.2,.7,.2,1)'});
      }
    }
    if (reduced.matches && chapterAnimation) chapterAnimation.cancel();
    stage.classList.toggle('ai-active', ai);
    if (ai !== activeAI) {
      activeAI = ai;
      status.textContent = copy[language][ai ? 'screenActive' : 'screenIdle'];
      if (ai) { if (!typed) typeCode(); else written.textContent = fullCode; }
      else { cancelAnimationFrame(typingFrame); written.textContent = ''; typed = false; }
    }
    if (reduced.matches) written.textContent = fullCode;
    const revealBox = document.querySelector('.reveal').getBoundingClientRect();
    const second = reduced.matches || revealBox.top < -innerHeight * .15;
    document.querySelector('.reveal').classList.toggle('second-visible', second);
  }
  function schedule() { if (!rafPending) { rafPending = true; requestAnimationFrame(render); } }
  document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language)));
  const reveal = document.querySelector('.reveal');
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) reveal.classList.add('is-visible'); }), {threshold:.15}).observe(reveal);
  } else { reveal.classList.add('is-visible'); }
  written.textContent = '';
  root.classList.add('animated');
  addEventListener('scroll', schedule, {passive:true});
  addEventListener('resize', schedule);
  reduced.addEventListener('change', schedule);
  compact.addEventListener('change', schedule);
  render();
})();

