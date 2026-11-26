/* ==========================================================
   Química I · Estudio — lógica de la aplicación
   Contenido: datos/unidadN.js (window.UNIDADES)
   Simuladores: widgets.js (window.montarWidgets)
   El progreso se guarda en este navegador (localStorage).
   ========================================================== */
(() => {
  'use strict';

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  // Todas las unidades de todas las materias; U son las de la materia activa.
  const TODAS = (window.UNIDADES || []).slice().sort((a, b) => a.id - b.id);
  TODAS.forEach(u => { u.materia = u.materia || 'quimica'; u.color = 'var(--accent)'; });
  const MATERIAS = window.MATERIAS || [{ id: 'quimica', nombre: 'Química I', ic: 'matraz' }];
  let U = [];
  const vista = $('#vista'), lateral = $('#lateral'), tabbar = $('#tabbar');

  /* ---------------- Estado persistente ---------------- */
  const CLAVE = 'quimica-estudio-v1';
  const fecha = (d = new Date()) => d.toLocaleDateString('sv'); // AAAA-MM-DD local
  const base = () => ({ hechos: {}, cajas: {}, examenes: [], foco: {}, ciclos: {}, racha: { ultimo: null, n: 0 }, tema: 'auto', paleta: 'neutro', materia: 'quimica', minLeccion: 15, minLibre: 50, pedir: true, formales: {}, puntos: 0, jugadas: 0, records: {}, fx: { reloj: true, rachas: true, sonido: true, historias: true, lectura: true, animar: true } });
  let S = base();
  try { S = Object.assign(base(), JSON.parse(localStorage.getItem(CLAVE) || '{}')); } catch (e) { /* sin almacenamiento */ }
  const guardar = () => { try { localStorage.setItem(CLAVE, JSON.stringify(S)); } catch (e) { /* ignorar */ } };
  S.fx = Object.assign(base().fx, S.fx);
  if (!MATERIAS.some(m => m.id === S.materia)) S.materia = MATERIAS[0].id;
  const unidadesDe = id => TODAS.filter(u => u.materia === id);
  const matActual = () => MATERIAS.find(m => m.id === S.materia);
  const exMat = () => S.examenes.filter(e => (e.mat || 'quimica') === S.materia);
  U = unidadesDe(S.materia);

  function actividad() {
    const h = fecha();
    if (S.racha.ultimo === h) return;
    const ayer = fecha(new Date(Date.now() - 864e5));
    S.racha.n = S.racha.ultimo === ayer ? S.racha.n + 1 : 1;
    S.racha.ultimo = h;
    guardar();
  }
  const rachaViva = () => (S.racha.ultimo === fecha() || S.racha.ultimo === fecha(new Date(Date.now() - 864e5))) ? S.racha.n : 0;

  /* ---------------- Utilidades ---------------- */
  const idTema = (u, i) => u.materia + ':' + u.id + '-' + i;
  const progU = u => { const h = u.temas.filter((_, i) => S.hechos[idTema(u, i)]).length; return { h, t: u.temas.length, p: h / u.temas.length }; };
  const barajar = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const mmss = s => { s = Math.max(0, Math.round(s)); const h = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60); return (h ? h + ':' : '') + String(m).padStart(2, '0') + ':' + String(s % 60).padStart(2, '0'); };
  const hhmm = d => d.toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' });
  const uni = id => U.find(u => u.id === id);
  const totalTemas = () => U.reduce((n, u) => n + u.temas.length, 0);
  const temasHechos = () => U.reduce((n, u) => n + progU(u).h, 0);
  const totalTarjetas = () => U.reduce((n, u) => n + u.tarjetas.length, 0);
  const totalPreguntas = () => U.reduce((n, u) => n + u.preguntas.length, 0);
  const dominadas = () => Object.keys(S.cajas).filter(k => k.startsWith(S.materia + ':') && S.cajas[k] >= 2).length;

  const P = {
    inicio: 'M4 11l8-7 8 7v8a1 1 0 0 1-1 1h-4v-6h-6v6H5a1 1 0 0 1-1-1z',
    libro: 'M5 4.5A1.5 1.5 0 0 1 6.5 3H19v15H6.5A1.5 1.5 0 0 0 5 19.5zM5 19.5A1.5 1.5 0 0 0 6.5 21H19',
    tarjetas: 'M7 4h11a2 2 0 0 1 2 2v9M4 9a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z',
    examen: 'M9 4h6l1 2h3v14H5V6h3zM9 12l2 2 4-4',
    progreso: 'M5 20v-8M12 20V4M19 20v-6',
    rayo: 'M13 3L5 13h6l-1 8 8-10h-6z',
    birrete: 'M3 9l9-5 9 5-9 5zM7 11.5V16c0 1.5 2.5 3 5 3s5-1.5 5-3v-4.5M21 9v6',
    play: 'M8 5.5v13l11-6.5z', pausa: 'M8 5v14M16 5v14',
    reinicio: 'M4 12a8 8 0 1 0 2.6-5.9M4 4v5h5',
    check: 'M5 12.5l4.5 4.5L19 7.5', chev: 'M9 6l6 6-6 6', izq: 'M15 6l-6 6 6 6', abajo: 'M6 9l6 6 6-6', x: 'M6 6l12 12M18 6L6 18',
    sol: 'M12 4V2M12 22v-2M4 12H2M22 12h-2M6.3 6.3L4.9 4.9M19.1 19.1l-1.4-1.4M6.3 17.7l-1.4 1.4M19.1 4.9l-1.4 1.4M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z',
    luna: 'M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z',
    auto: 'M12 3a9 9 0 1 0 0 18zM12 3a9 9 0 0 1 0 18',
    enfoque: 'M4 9V5h4M20 9V5h-4M4 15v4h4M20 15v4h-4',
    llama: 'M12 3c1 4 5 5.5 5 10a5 5 0 0 1-10 0c0-2 1-3 2-4 0 2 1 3 2 3 0-3-1-5 1-9z',
    reloj: 'M12 7v5l3 2M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z',
    alarma: 'M12 9v4l2.5 2M12 5a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM5.5 3L3 5.5M18.5 3L21 5.500',
    bandera: 'M6 21V4M6 4h11l-2 4 2 4H6',
    matraz: 'M9 3h6M10 3v6l-5 9a2 2 0 0 0 1.8 3h10.4a2 2 0 0 0 1.8-3l-5-9V3M7.5 15h9',
    taza: 'M5 8h11v6a5 5 0 0 1-5 5h-1a5 5 0 0 1-5-5zM16 10h2a2 2 0 0 1 0 5h-2M8 3v2M12 3v2',
    juego: 'M7 8h10a4 4 0 0 1 4 4v2a3 3 0 0 1-5.5 1.5L14.5 14h-5l-1 1.5A3 3 0 0 1 3 14v-2a4 4 0 0 1 4-4zM8 10.5v3M6.5 12h3M16 11h.01M18 13h.01',
    ajustes: 'M4 7h10M18 7h2M4 17h4M12 17h8M16 5v4M10 15v4',
    corazon: 'M12 20s-7-4.5-7-10a4 4 0 0 1 7-2.5A4 4 0 0 1 19 10c0 5.5-7 10-7 10z',
    suma: 'M4 7h6M7 4v6M14 7h6M5 15l4 4M9 15l-4 4M14 15.5h6M14 18.5h6',
    brujula: 'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM15.5 8.5l-2 5-5 2 2-5z',
    calendario: 'M5 6h14a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1zM4 10.5h16M8 4v4M16 4v4',
    foco: 'M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.300 1 2.100h5c0-.800.4-1.600 1-2.100A6 6 0 0 0 12 3z',
    estrella: 'M12 3.5l2.6 5.4 5.9.8-4.3 4.1 1 5.900L12 16.900 6.800 19.700l1-5.900L3.500 9.700l5.900-.800z',
    trofeo: 'M8 4h8v5a4 4 0 0 1-8 0zM8 6H5a3 3 0 0 0 3 4M16 6h3a3 3 0 0 1-3 4M12 13v4M8.5 20h7M10 17h4'
  };
  const ic = n => `<svg class="ic" viewBox="0 0 24 24" aria-hidden="true"><path d="${P[n]}"/></svg>`;

  function anillo(p, color, tam = 54, gr = 6) {
    const r = (tam - gr) / 2, c = 2 * Math.PI * r;
    return `<svg class="anillo" width="${tam}" height="${tam}" viewBox="0 0 ${tam} ${tam}"><circle class="pista" cx="${tam / 2}" cy="${tam / 2}" r="${r}" stroke-width="${gr}"/><circle cx="${tam / 2}" cy="${tam / 2}" r="${r}" stroke-width="${gr}" stroke="${color}" stroke-dasharray="${c}" stroke-dashoffset="${c * (1 - Math.max(0, Math.min(1, p)))}"/></svg>`;
  }

  let toastT;
  function toast(msg) {
    const t = $('#toast'); t.textContent = msg; t.classList.add('ver');
    clearTimeout(toastT); toastT = setTimeout(() => t.classList.remove('ver'), 3200);
  }

  /* ---------------- Tema claro / oscuro ---------------- */
  const TEMAS = ['auto', 'light', 'dark'], TEMA_NOM = { auto: 'Automático', light: 'Claro', dark: 'Oscuro' }, TEMA_IC = { auto: 'auto', light: 'sol', dark: 'luna' };
  const PALETAS = [['neutro', 'Predeterminado', 'Gris neutro'], ['rosa', 'Rosa pastel', 'Suave y cálido'], ['japon', 'Japonés', 'Blanco con rojo'], ['salvia', 'Salvia', 'Verde apagado'], ['arena', 'Arena', 'Beige cálido'], ['pizarra', 'Pizarra', 'Azul grisáceo']];
  const FX = [
    ['reloj', 'Reloj', 'Muestra el reloj y pregunta el tiempo al abrir una lección'],
    ['rachas', 'Rachas', 'Cuenta los días seguidos que estudias'],
    ['sonido', 'Sonidos', 'Aviso sonoro cuando se acaba el tiempo'],
    ['historias', 'Accesos rápidos', 'Fila de círculos en la pantalla de inicio'],
    ['lectura', 'Barra de lectura', 'Línea superior que marca cuánto llevas de la lección'],
    ['animar', 'Animaciones', 'Transiciones y movimiento de la interfaz']
  ];
  const mqOscuro = matchMedia('(prefers-color-scheme: dark)');
  function aplicarTema() {
    const d = document.documentElement;
    d.setAttribute('data-theme', S.tema === 'auto' ? (mqOscuro.matches ? 'dark' : 'light') : S.tema);
    d.setAttribute('data-paleta', PALETAS.some(p => p[0] === S.paleta) ? S.paleta : 'neutro');
    document.body.classList.toggle('sin-reloj', !S.fx.reloj);
    document.body.classList.toggle('sin-lectura', !S.fx.lectura);
    document.body.classList.toggle('sin-animar', !S.fx.animar);
  }
  if (mqOscuro.addEventListener) mqOscuro.addEventListener('change', aplicarTema);

  /* ---------------- Rutas ---------------- */
  function ruta() {
    const p = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
    if (p[0] === 'u' && uni(+p[1])) {
      const u = uni(+p[1]);
      if (p[2] && u.temas[+p[2] - 1]) return { v: 'tema', nav: 'temario', u, i: +p[2] - 1 };
      return { v: 'unidad', nav: 'temario', u };
    }
    if (p[0] === 'temario') return { v: 'temario', nav: 'temario' };
    if (p[0] === 'tarjetas') return { v: 'tarjetas', nav: 'tarjetas', sel: uni(+p[1]) ? +p[1] : 0 };
    if (p[0] === 'examen') return { v: 'examen', nav: 'examen', formal: p[1] === 'formal' };
    if (p[0] === 'progreso') return { v: 'progreso', nav: 'progreso' };
    if (p[0] === 'juegos') return { v: 'juegos', nav: 'juegos', id: p[1] };
    if (p[0] === 'ajustes') return { v: 'ajustes', nav: 'ajustes' };
    if (p[0] === 'calendario') return { v: 'calendario', nav: 'calendario' };
    return { v: 'inicio', nav: 'inicio' };
  }

  let limpiar = null; // función de limpieza de la vista actual
  function pintar() {
    const r = ruta();
    if (limpiar) { limpiar(); limpiar = null; }
    $('#barraLectura').style.width = '0';
    pintarNav(r);
    cerrarMenuMat();
    if (!U.length && r.v !== 'ajustes' && r.v !== 'calendario') vVacia();
    else ({ calendario: vCalendario, inicio: vInicio, temario: vTemario, unidad: vUnidad, tema: vTema, tarjetas: vTarjetas, examen: vExamen, progreso: vProgreso, juegos: vJuegos, ajustes: vAjustes })[r.v](r);
    window.scrollTo(0, 0);
  }

  /* ---------------- Navegación: lateral, riel y barra inferior ---------------- */
  const NAV = [
    { id: 'inicio', href: '#/', ic: 'inicio', t: 'Inicio' },
    { id: 'temario', href: '#/temario', ic: 'libro', t: 'Temario' },
    { id: 'tarjetas', href: '#/tarjetas', ic: 'tarjetas', t: 'Flashcards' },
    { id: 'juegos', href: '#/juegos', ic: 'juego', t: 'Juegos' },
    { id: 'examen', href: '#/examen', ic: 'examen', t: 'Exámenes' },
    { id: 'progreso', href: '#/progreso', ic: 'progreso', t: 'Progreso' },
    { id: 'calendario', href: '#/calendario', ic: 'calendario', t: 'Calendario' },
    { id: 'ajustes', href: '#/ajustes', ic: 'ajustes', t: 'Ajustes' }
  ];
  function pintarNav(r) {
    lateral.innerHTML = `
      <button class="marca" data-accion="materias" title="Cambiar de materia"><span class="logo">${ic(matActual().ic)}</span><span><b>${matActual().nombre}</b><small>Cambiar materia</small></span>${ic('abajo')}</button>
      ${NAV.map(n => `<a class="nav-item ${r.nav === n.id && r.v !== 'unidad' && r.v !== 'tema' ? 'activo' : ''}" href="${n.href}" title="${n.t}">${ic(n.ic)}<span class="nom">${n.t}</span></a>`).join('')}
      <div class="nav-tit">Unidades</div>
      ${U.map(u => {
        const act = r.u && r.u.id === u.id, pr = progU(u);
        return `<a class="nav-item ${act ? 'activo' : ''}" href="#/u/${u.id}" title="Unidad ${u.id} · ${u.titulo}">
            <span class="punto" style="background:${u.color}">${u.id}</span><span class="nom">${u.corto}</span><span class="pct">${Math.round(pr.p * 100)}%</span></a>
          ${act ? `<div class="sub-nav">${u.temas.map((t, i) => `<a href="#/u/${u.id}/${i + 1}" class="${r.v === 'tema' && r.i === i ? 'activo' : ''}"><span class="ok ${S.hechos[idTema(u, i)] ? 'si' : ''}"></span>${t.t}</a>`).join('')}</div>` : ''}`;
      }).join('')}
      <div class="lateral-pie">
        <button data-accion="tema" title="Cambiar apariencia">${ic(TEMA_IC[S.tema])}<span class="nom">${TEMA_NOM[S.tema]}</span></button>
      </div>`;
    $('#materiaBtn').innerHTML = `<span class="logo">${ic(matActual().ic)}</span><b>${matActual().nombre}</b>${ic('abajo')}`;
    tabbar.innerHTML = NAV.filter(n => !['tarjetas', 'ajustes', 'calendario'].includes(n.id)).map(n => `<a class="${r.nav === n.id ? 'activo' : ''}" href="${n.href}">${ic(n.ic)}<span>${n.t}</span></a>`).join('');
  }

  /* ---------------- Inicio: menú principal ---------------- */
  function siguiente() {
    for (const u of U) for (let i = 0; i < u.temas.length; i++) if (!S.hechos[idTema(u, i)]) return { u, i };
    return null;
  }
  function vInicio() {
    const ahora = new Date(), h = ahora.getHours();
    const saludo = h < 12 ? 'Buenos días' : h < 19 ? 'Buenas tardes' : 'Buenas noches';
    const sig = siguiente(), total = totalTemas(), hechos = temasHechos();
    const minHoy = Math.floor((S.foco[fecha()] || 0) / 60), ult = exMat()[0];
    const historias = [
      ...U.map(u => ({ href: `#/u/${u.id}`, c: u.color, p: Math.round(progU(u).p * 100), in: u.id, t: u.corto })),
      { href: '#/tarjetas', c: 'var(--accent)', in: ic('tarjetas'), t: 'Flashcards' },
      { href: '#/juegos', c: 'var(--accent)', in: ic('juego'), t: 'Juegos' },
      { href: '#/examen', c: 'var(--accent)', in: ic('rayo'), t: 'Simulacro' },
      { href: '#/examen/formal', c: 'var(--accent)', in: ic('birrete'), t: 'Examen formal' }
    ];
    const hub = [
      { href: '#/temario', c: 'var(--accent)', ic: 'libro', t: 'Temario', s: `${total} temas en ${U.length} unidades` },
      { href: '#/tarjetas', c: 'var(--accent)', ic: 'tarjetas', t: 'Flashcards', s: `${dominadas()} de ${totalTarjetas()} dominadas` },
      { href: '#/examen', c: 'var(--accent)', ic: 'rayo', t: 'Simulacro rápido', s: 'De 5 a 20 preguntas' },
      { href: '#/examen/formal', c: 'var(--accent)', ic: 'birrete', t: 'Examen formal', s: S.formales[S.materia] ? 'Tienes uno en curso' : U.reduce((n, u) => n + Math.min(20, u.preguntas.length), 0) + ' reactivos · 120 min' },
      { href: '#/progreso', c: 'var(--accent)', ic: 'progreso', t: 'Progreso', s: 'Racha, historial y ajustes' },
      { href: '#/juegos', c: 'var(--accent)', ic: 'juego', t: 'Juegos', s: S.puntos.toLocaleString('es-MX') + ' puntos acumulados' }
    ];
    vista.innerHTML = `<div class="col ancha entra">
      <header>
        <div class="sobre">${ahora.toLocaleDateString('es-MX', { weekday: 'long', day: 'numeric', month: 'long' })}</div>
        <h1 class="titulo">${saludo}.</h1>
      </header>
      ${!S.fx.historias ? '' : `<nav class="historias" aria-label="Accesos rápidos">${historias.map(x => `<a class="historia" href="${x.href}" style="--c:${x.c};--p:${x.p === undefined ? 100 : x.p}">
        <span class="aro ${x.p === undefined ? 'lleno' : ''}"><span>${x.in}</span></span><span class="tx">${x.t}</span></a>`).join('')}</nav>`}
      <section class="glass continuar">
        ${anillo(hechos / total, 'var(--accent)', 74, 8)}
        <div class="txt">${sig
          ? `<small>${hechos ? 'Continúa donde te quedaste' : 'Empieza aquí'} · Unidad ${sig.u.id}</small><h3>${sig.u.temas[sig.i].t}</h3><p>${hechos} de ${total} temas estudiados</p>`
          : `<small>Temario completo</small><h3>Terminaste los ${total} temas</h3><p>Ahora toca consolidar: tarjetas y exámenes.</p>`}</div>
        <a class="btn" href="${sig ? `#/u/${sig.u.id}/${sig.i + 1}` : '#/examen/formal'}">${ic('play')} ${sig ? 'Iniciar lección' : 'Hacer examen'}</a>
      </section>
      ${tarjetaProximo()}
      <h2 class="seccion-tit">Menú</h2>
      <section class="hub">${hub.map(x => `<${x.acc ? `button data-accion="${x.acc}"` : `a href="${x.href}"`} class="glass hub-item" style="--c:${x.c}">
        <span class="burb">${ic(x.ic)}</span><b>${x.t}</b><span>${x.s}</span></${x.acc ? 'button' : 'a'}>`).join('')}</section>
      <h2 class="seccion-tit">Hoy</h2>
      <section class="stats">
        ${statRacha()}
        <div class="glass stat">${ic('reloj')}<b>${minHoy}<small>min</small></b><span>Tiempo de estudio hoy</span></div>
        <div class="glass stat">${ic('check')}<b>${S.ciclos[fecha()] || 0}</b><span>Sesiones completadas</span></div>
        <div class="glass stat">${ic('examen')}<b>${ult ? (ult.ok / ult.n * 10).toFixed(1) : '–'}</b><span>Último examen</span></div>
      </section>
      <h2 class="seccion-tit">Unidades</h2>
      <section class="unidades">${U.map(tarjetaUnidad).join('')}</section>
    </div>`;
  }
  function tarjetaUnidad(u) {
    const pr = progU(u);
    return `<a class="glass u-card" href="#/u/${u.id}">
      <div class="cab"><div><div class="num" style="color:${u.color}">Unidad ${u.id}</div><h3>${u.titulo}</h3></div>${anillo(pr.p, u.color, 46, 5)}</div>
      <p>${u.temas.slice(0, 4).map(t => t.t).join(' · ')}…</p>
      <div class="pie"><span>${pr.h} de ${pr.t} temas</span><span>${u.tarjetas.length} tarjetas · ${u.preguntas.length} preguntas</span></div></a>`;
  }

  /* ---------------- Temario ---------------- */
  const filaTema = (u, t, i) => {
    const ok = S.hechos[idTema(u, i)];
    return `<a class="tema-fila ${ok ? 'hecho' : ''}" href="#/u/${u.id}/${i + 1}"><span class="n">${ok ? ic('check') : i + 1}</span><span class="t">${t.t}</span><span class="m">${t.min} min</span>${ic('chev')}</a>`;
  };
  function vTemario() {
    vista.innerHTML = `<div class="col entra">
      <header><div class="sobre">${temasHechos()} de ${totalTemas()} temas estudiados</div><h1 class="titulo">Temario</h1>
      <p class="bajada">Toca un tema para iniciar la lección. Antes de empezar podrás fijar cuánto tiempo le vas a dedicar.</p></header>
      ${U.map(u => `<section style="--accent:${u.color}">
        <a class="unidad-cab" href="#/u/${u.id}">${anillo(progU(u).p, u.color, 40, 5)}<span><small style="color:${u.color}">Unidad ${u.id}</small><b>${u.titulo}</b></span>${ic('chev')}</a>
        <div class="glass temas">${u.temas.map((t, i) => filaTema(u, t, i)).join('')}</div></section>`).join('')}
    </div>`;
  }

  /* ---------------- Unidad ---------------- */
  function vUnidad({ u }) {
    const pr = progU(u), min = u.temas.reduce((n, t) => n + t.min, 0);
    vista.innerHTML = `<div class="col entra">
      <header>
        <div class="sobre"><a href="#/temario">Temario</a> › Unidad ${u.id}</div>
        <h1 class="titulo">${u.titulo}</h1>
        <p class="bajada">${u.temas.length} temas · ${min} min de lectura · ${Math.round(pr.p * 100)}% completado</p>
      </header>
      <div class="glass resultado"><b>Resultado esperado:</b> ${u.resultado}</div>
      <section class="glass temas">${u.temas.map((t, i) => filaTema(u, t, i)).join('')}</section>
      <div class="fila" style="margin-top:22px">
        <a class="btn" href="#/tarjetas/${u.id}">${ic('tarjetas')} Flashcards de la unidad</a>
        <button class="btn sec" data-accion="examen-u" data-u="${u.id}">${ic('rayo')} Simulacro de la unidad</button>
      </div>
    </div>`;
  }

  /* ---------------- Tema (lección) ---------------- */
  function vTema({ u, i }) {
    const t = u.temas[i], ok = S.hechos[idTema(u, i)];
    const ant = i > 0 ? { u, i: i - 1 } : (uni(u.id - 1) ? { u: uni(u.id - 1), i: uni(u.id - 1).temas.length - 1 } : null);
    const sig = i < u.temas.length - 1 ? { u, i: i + 1 } : (uni(u.id + 1) ? { u: uni(u.id + 1), i: 0 } : null);
    vista.innerHTML = `<article class="col entra">
      <header>
        <div class="sobre"><a href="#/temario">Temario</a> › <a href="#/u/${u.id}">Unidad ${u.id}</a> › Tema ${i + 1} de ${u.temas.length}</div>
        <h1 class="titulo">${t.t}</h1>
        <p class="bajada">${t.sub || ''}</p>
        <nav class="indice-tema" id="indiceTema"></nav>
      </header>
      <div class="contenido" id="contenido">${t.html}</div>
      <section class="glass pie-tema">
        <div class="txt"><h4>${ok ? 'Tema estudiado' : '¿Lo entendiste?'}</h4><p>${ok ? 'Puedes repasarlo cuando quieras.' : 'Márcalo para registrar tu avance y pasar al siguiente.'}</p></div>
        <button class="btn ${ok ? 'sec' : ''}" data-accion="hecho" data-id="${idTema(u, i)}" data-sig="${sig ? `#/u/${sig.u.id}/${sig.i + 1}` : `#/u/${u.id}`}">${ic('check')} ${ok ? 'Desmarcar' : 'Marcar como estudiado'}</button>
      </section>
      <nav class="nav-tema">
        ${ant ? `<a class="glass" href="#/u/${ant.u.id}/${ant.i + 1}"><small>Anterior</small>${ant.u.temas[ant.i].t}</a>` : '<span></span>'}
        ${sig ? `<a class="glass der" href="#/u/${sig.u.id}/${sig.i + 1}"><small>Siguiente</small>${sig.u.temas[sig.i].t}</a>` : '<span></span>'}
      </nav>
    </article>`;
    const hs = $$('#contenido h3');
    if (hs.length > 1) $('#indiceTema').innerHTML = hs.map((h, k) => { h.id = 'sub' + k; return `<button class="chip" data-accion="ir" data-id="sub${k}">${h.textContent}</button>`; }).join('');
    if (window.montarWidgets) window.montarWidgets($('#contenido'));
    const alScroll = () => {
      const max = document.documentElement.scrollHeight - innerHeight;
      $('#barraLectura').style.width = (max > 0 ? Math.min(100, scrollY / max * 100) : 0) + '%';
    };
    addEventListener('scroll', alScroll, { passive: true });
    limpiar = () => { removeEventListener('scroll', alScroll); cerrarHoja(); };
    pedirTiempo(u, i);
  }

  /* ---------------- Hoja: tiempo de la lección ---------------- */
  const hoja = $('#hoja');
  const omitidos = new Set();
  let HJ = null;
  function pedirTiempo(u, i) {
    // Solo pregunta si no hay ya un reloj corriendo, en pausa o sonando.
    if (!S.fx.reloj || !S.pedir || T.on || T.sonando || T.rest < T.total || omitidos.has(idTema(u, i))) return;
    HJ = { u, i, min: S.minLeccion };
    pintarHoja(); hoja.hidden = false;
  }
  function pintarHoja() {
    const t = HJ.u.temas[HJ.i], pre = [...new Set([t.min, 10, 15, 25, 50])].sort((a, b) => a - b);
    hoja.innerHTML = `<div class="glass hoja-caja" role="dialog" aria-modal="true" aria-label="Tiempo para la lección">
      <div class="sobre" style="justify-content:center">${ic('reloj')} Tiempo para esta lección</div>
      <h3>${t.t}</h3>
      <p class="hoja-nota">Lectura estimada: ${t.min} min. Ajusta el tiempo y empieza; el reloj corre a la par de la lección.</p>
      <div class="paso">
        <button data-accion="hj-aj" data-d="-5" aria-label="Quitar 5 minutos">−5</button><button data-accion="hj-aj" data-d="-1" aria-label="Quitar 1 minuto">−1</button>
        <div class="val"><b>${HJ.min}</b><small>minutos</small></div>
        <button data-accion="hj-aj" data-d="1" aria-label="Añadir 1 minuto">+1</button><button data-accion="hj-aj" data-d="5" aria-label="Añadir 5 minutos">+5</button>
      </div>
      <div class="fila" style="justify-content:center">${pre.map(m => `<button class="chip ${HJ.min === m ? 'on' : ''}" data-accion="hj-pre" data-m="${m}">${m} min</button>`).join('')}</div>
      <button class="btn grande-btn" data-accion="hj-ini">${ic('play')} Iniciar lección</button>
      <button class="btn sec grande-btn" data-accion="hj-sin">Entrar sin reloj</button>
      <label class="hoja-sw"><span>Preguntar siempre al abrir una lección</span><button class="sw ${S.pedir ? 'on' : ''}" data-accion="hj-sw" aria-label="Preguntar siempre"></button></label>
    </div>`;
  }
  function cerrarHoja() { hoja.hidden = true; HJ = null; }

  /* ---------------- Flashcards ---------------- */
  let FC = null;
  function nuevaSesion(sel) {
    let c = [];
    U.forEach(u => { if (!sel || u.id === sel) u.tarjetas.forEach((x, i) => c.push({ id: u.materia + ':' + u.id + '.' + i, q: x[0], a: x[1], u })); });
    c = barajar(c).sort((a, b) => (S.cajas[a.id] || 0) - (S.cajas[b.id] || 0)).slice(0, 20);
    return { sel, cola: c, total: c.length, hechas: 0, bien: 0, repasos: 0 };
  }
  function vTarjetas({ sel }) {
    if (!FC || FC.sel !== sel || !FC.cola.length) FC = nuevaSesion(sel);
    vista.innerHTML = `<div class="col entra">
      <header>
        <div class="sobre">Repaso activo</div>
        <h1 class="titulo">Flashcards</h1>
        <p class="bajada">Intenta responder en voz alta antes de voltear. Las que falles regresan en esta misma sesión.</p>
        <nav class="indice-tema">
          <a class="chip ${!sel ? 'on' : ''}" href="#/tarjetas">Todas</a>
          ${U.map(u => `<a class="chip ${sel === u.id ? 'on' : ''}" href="#/tarjetas/${u.id}">U${u.id} · ${u.corto}</a>`).join('')}
        </nav>
      </header>
      <section id="fcZona"></section>
    </div>`;
    pintarCarta();
    const tecla = e => {
      if (e.target.matches('input, textarea') || !hoja.hidden) return;
      const carta = $('.carta'); if (!carta) return;
      if (e.code === 'Space' || e.key === 'Enter') { e.preventDefault(); voltear(); }
      else if (carta.classList.contains('volteada') && ['1', '2', '3'].includes(e.key)) calificar(+e.key - 1);
    };
    addEventListener('keydown', tecla);
    limpiar = () => removeEventListener('keydown', tecla);
  }
  function pintarCarta() {
    const z = $('#fcZona'); if (!z) return;
    if (!FC.cola.length) {
      const p = FC.total ? FC.bien / FC.total : 0;
      z.innerHTML = `<div class="glass fin"><div class="anillo-caja">${anillo(p, 'var(--verde)', 140, 12)}<b>${Math.round(p * 100)}%</b></div>
        <h2>Sesión terminada</h2><p>Supiste ${FC.bien} de ${FC.total} tarjetas a la primera${FC.repasos ? ` y repasaste ${FC.repasos} ${FC.repasos > 1 ? 'veces' : 'vez'} las difíciles` : ''}.</p>
        <div class="fila"><button class="btn" data-accion="fc-nueva">Otra sesión</button><a class="btn sec" href="#/examen">Hacer un simulacro</a></div></div>`;
      return;
    }
    const c = FC.cola[0];
    z.innerHTML = `
      <div class="fc-barra"><i style="width:${FC.hechas / FC.total * 100}%"></i></div>
      <div class="fc-info"><span>${FC.hechas} de ${FC.total} dominadas</span><span>${FC.cola.length} en cola</span></div>
      <div class="escena"><div class="carta" data-accion="voltear" tabindex="0" role="button" aria-label="Voltear tarjeta">
        <div class="glass cara frente"><span class="lado">Pregunta</span><span class="uni" style="background:${c.u.color}">U${c.u.id}</span><div class="q">${c.q}</div><span class="pista-t">Toca la tarjeta para ver la respuesta</span></div>
        <div class="glass cara dorso"><span class="lado">Respuesta</span><span class="uni" style="background:${c.u.color}">U${c.u.id}</span><div class="a">${c.a}</div></div>
      </div></div>
      <div class="fc-acciones" id="fcAcc"></div>`;
  }
  function voltear() {
    const c = $('.carta'); if (!c) return;
    c.classList.toggle('volteada');
    if (c.classList.contains('volteada') && !$('#fcAcc').children.length) {
      $('#fcAcc').innerHTML = `
        <button class="mal" data-accion="calificar" data-n="0">No la sabía<small>vuelve pronto</small></button>
        <button class="casi" data-accion="calificar" data-n="1">Casi<small>vuelve al final</small></button>
        <button class="bien" data-accion="calificar" data-n="2">La sabía<small>dominada</small></button>`;
    }
  }
  function calificar(n) {
    const c = FC.cola.shift(); if (!c) return;
    const caja = S.cajas[c.id] || 0;
    if (n === 2) { S.cajas[c.id] = Math.min(3, Math.max(2, caja + 1)); FC.hechas++; if (!c.visto) FC.bien++; }
    else {
      S.cajas[c.id] = n; c.visto = true; FC.repasos++;
      if (n === 0) FC.cola.splice(Math.min(3, FC.cola.length), 0, c); else FC.cola.push(c);
    }
    actividad(); guardar(); pintarCarta();
  }

  /* ---------------- Exámenes: simulacro rápido y examen formal ---------------- */
  const POR_UNIDAD = 20; // reactivos por unidad en el examen formal
  let EXS = {
    rapido: { fase: 'cfg', us: new Set(U.map(u => u.id)), n: 10, crono: true, inmediato: false },
    formal: { formal: true, fase: 'cfg', min: 120, ver: 'mal' }
  };
  let EA = EXS.rapido; // examen que se está mostrando
  function reiniciarEx() { // se llama al arrancar y al cambiar de materia
    EXS = { rapido: { fase: 'cfg', us: new Set(U.map(u => u.id)), n: 10, crono: true, inmediato: false }, formal: { formal: true, fase: 'cfg', min: 120, ver: 'mal' } };
    const f = S.formales[S.materia];
    if (f && f.qs) Object.assign(EXS.formal, f, { fase: 'curso', crono: true });
    EA = EXS.rapido;
  }
  reiniciarEx();
  const acierto = q => q.r !== null && q.ops[q.r].ok;
  const guardarFormal = () => { const E = EXS.formal; S.formales[S.materia] = E.fase === 'curso' ? { qs: E.qs, i: E.i, fin: E.fin, min: E.min } : null; guardar(); };

  function vExamen(r) {
    EA = r.formal ? EXS.formal : EXS.rapido;
    if (EA.fase === 'curso') return exCurso(EA);
    if (EA.fase === 'fin') return exFin(EA);
    const tabs = `<nav class="subtabs"><a class="${r.formal ? '' : 'on'}" href="#/examen">${ic('rayo')} Simulacro rápido</a><a class="${r.formal ? 'on' : ''}" href="#/examen/formal">${ic('birrete')} Examen formal</a></nav>`;
    if (r.formal) {
      const n = U.reduce((s, u) => s + Math.min(POR_UNIDAD, u.preguntas.length), 0);
      vista.innerHTML = `<div class="col entra">
        <header><div class="sobre">Evaluación completa</div><h1 class="titulo">Exámenes</h1></header>${tabs}
        <section class="glass tarjeta" style="margin-top:22px">
          <h3 style="font-size:24px">Examen formal de ${n} reactivos</h3>
          <p class="vacio" style="margin-top:8px">Cubre las cinco unidades con teoría y problemas, ${POR_UNIDAD} reactivos por unidad, en secciones. No hay pistas ni respuestas hasta que lo entregues.</p>
          <div class="reglas">
            <div>${ic('examen')}<span><b>${n} reactivos</b>de opción múltiple</span></div>
            <div>${ic('reloj')}<span><b>${EA.min} minutos</b>con reloj a la vista</span></div>
            <div>${ic('bandera')}<span><b>Marca y regresa</b>con el mapa de reactivos</span></div>
            <div>${ic('check')}<span><b>Se guarda solo</b>puedes salir y continuar</span></div>
          </div>
          <div class="cfg-bloque"><h4>Tiempo límite</h4><div class="seg">${[90, 120, 150, 180].map(m => `<button class="${EA.min === m ? 'on' : ''}" data-accion="fx-min" data-m="${m}">${m} min</button>`).join('')}</div></div>
          <div class="fila" style="margin-top:24px"><button class="btn" data-accion="fx-ini">${ic('play')} Comenzar examen</button><span class="vacio" style="font-size:14px">Aprobatorio: 6.0 · ${totalPreguntas()} reactivos en el banco</span></div>
        </section></div>`;
      return;
    }
    const disp = U.filter(u => EA.us.has(u.id)).reduce((n, u) => n + u.preguntas.length, 0);
    vista.innerHTML = `<div class="col entra">
      <header><div class="sobre">Ponte a prueba</div><h1 class="titulo">Exámenes</h1></header>${tabs}
      <section class="glass tarjeta" style="margin-top:22px">
        <div class="cfg-bloque" style="margin-top:0"><h4>Unidades</h4><div class="fila">
          ${U.map(u => `<button class="chip ${EA.us.has(u.id) ? 'on' : ''}" data-accion="ex-u" data-u="${u.id}" style="${EA.us.has(u.id) ? `background:${u.color}` : ''}">U${u.id} · ${u.corto}</button>`).join('')}</div></div>
        <div class="cfg-bloque"><h4>Número de preguntas</h4><div class="seg">
          ${[5, 10, 15, 20].map(n => `<button class="${EA.n === n ? 'on' : ''}" data-accion="ex-n" data-n="${n}">${n}</button>`).join('')}</div></div>
        <div class="cfg-bloque">
          <div class="interruptor"><span>Cronómetro<small>90 segundos por pregunta</small></span><button class="sw ${EA.crono ? 'on' : ''}" data-accion="ex-sw" data-k="crono" aria-label="Cronómetro"></button></div>
          <div class="interruptor"><span>Modo práctica<small>Muestra la respuesta correcta después de cada pregunta</small></span><button class="sw ${EA.inmediato ? 'on' : ''}" data-accion="ex-sw" data-k="inmediato" aria-label="Modo práctica"></button></div>
        </div>
        <div class="fila" style="margin-top:22px"><button class="btn" data-accion="ex-ini" ${disp ? '' : 'disabled'}>${ic('play')} Comenzar</button><span class="vacio" style="font-size:14px">${Math.min(EA.n, disp)} de ${disp} preguntas disponibles</span></div>
      </section>
    </div>`;
  }
  const armar = (u, p) => ({ uid: u.id, q: p[0], ops: barajar(p[1].map((t, k) => ({ t, ok: k === 0 }))), e: p[2], r: null, m: false });
  function exIniciar() {
    const E = EXS.rapido; let qs = [];
    U.forEach(u => { if (E.us.has(u.id)) u.preguntas.forEach(p => qs.push(armar(u, p))); });
    E.qs = barajar(qs).slice(0, E.n); E.i = 0; E.fase = 'curso';
    E.fin = E.crono ? Date.now() + E.qs.length * 90 * 1000 : 0;
    pintar();
  }
  function fxIniciar() {
    const E = EXS.formal; E.qs = [];
    U.forEach(u => barajar(u.preguntas).slice(0, POR_UNIDAD).forEach(p => E.qs.push(armar(u, p))));
    E.i = 0; E.fase = 'curso'; E.crono = true; E.ver = 'mal'; E.fin = Date.now() + E.min * 60000;
    guardarFormal(); pintar();
  }
  function exCurso(E) {
    const q = E.qs[E.i], u = uni(q.uid), ult = E.i === E.qs.length - 1, rev = E.inmediato && q.r !== null;
    const resp = E.qs.filter(x => x.r !== null).length;
    const tarjeta = `<section class="glass pregunta">
        <div class="uni" style="color:${u.color}">${E.formal ? `Sección ${u.id}` : `Unidad ${u.id}`} · ${u.corto}</div>
        <h2>${q.q}</h2>
        <div class="opciones">${q.ops.map((o, k) => {
          let cl = '';
          if (rev) cl = (o.ok ? 'ok ' : k === q.r ? 'no ' : '') + 'bloq'; else if (k === q.r) cl = 'sel';
          return `<button class="opcion ${cl}" data-accion="ex-r" data-k="${k}"><span class="l">${'ABCD'[k]}</span><span>${o.t}</span></button>`;
        }).join('')}</div>
        ${rev ? `<div class="explica"><b>${q.ops[q.r].ok ? 'Correcto.' : 'Incorrecto.'}</b> ${q.e}</div>` : ''}
      </section>
      <div class="ex-pie">
        <button class="btn sec" data-accion="ex-ant" ${E.i === 0 ? 'disabled' : ''}>${ic('izq')} Anterior</button>
        <div class="fila">${E.formal ? `<button class="btn sec ${q.m ? 'marcada' : ''}" data-accion="ex-marca">${ic('bandera')} ${q.m ? 'Marcada' : 'Marcar'}</button>` : '<button class="btn sec" data-accion="ex-salir">Salir</button>'}
        <button class="btn" data-accion="${ult ? 'ex-fin' : 'ex-sig'}">${ult ? (E.formal ? 'Entregar' : 'Terminar') : 'Siguiente'} ${ic(ult ? 'check' : 'chev')}</button></div>
      </div>`;
    vista.innerHTML = `<div class="col ${E.formal ? 'ancha' : ''}">
      <div class="ex-cab"><span>${E.formal ? 'Examen formal · reactivo' : 'Pregunta'} ${E.i + 1} de ${E.qs.length}</span>${E.crono ? '<span class="ex-reloj" id="exReloj"></span>' : '<span>Sin límite de tiempo</span>'}</div>
      ${E.formal ? `<div class="fc-barra" style="margin:14px 0 0"><i style="width:${resp / E.qs.length * 100}%"></i></div>
        <div class="ex-formal"><div>${tarjeta}</div>
          <aside class="glass mapa-caja"><div class="mapa-cab"><b>Mapa de reactivos</b><span>${resp} de ${E.qs.length} respondidos</span></div>
            <div class="mapa">${E.qs.map((x, k) => `<button class="${k === E.i ? 'a' : x.r !== null ? 'r' : ''} ${x.m ? 'm' : ''}" data-accion="ex-ir" data-k="${k}" aria-label="Reactivo ${k + 1}">${k + 1}</button>`).join('')}</div>
            <div class="mapa-ley"><span><i class="r"></i>Respondido</span><span><i class="m"></i>Marcado</span></div>
            <button class="btn grande-btn" data-accion="ex-fin">${ic('check')} Entregar examen</button>
            <button class="btn sec grande-btn" data-accion="fx-salir">Guardar y salir</button>
          </aside></div>`
        : `<div class="puntos">${E.qs.map((x, k) => `<i class="${k === E.i ? 'a' : x.r !== null ? 'r' : ''}"></i>`).join('')}</div>${tarjeta}`}
    </div>`;
    let iv;
    if (E.crono) {
      const tic = () => {
        const s = Math.max(0, Math.round((E.fin - Date.now()) / 1000)), el = $('#exReloj');
        if (el) { el.textContent = mmss(s); el.classList.toggle('poco', s <= (E.formal ? 300 : 60)); }
        if (s === 0) { toast('Se acabó el tiempo del examen'); exTerminar(E); }
      };
      tic(); iv = setInterval(tic, 500);
    }
    const tecla = e => {
      if (!hoja.hidden) return;
      const k = ['1', '2', '3', '4', 'a', 'b', 'c', 'd'].indexOf(e.key.toLowerCase());
      if (k >= 0) exResponder(k % 4);
      else if (e.key === 'ArrowRight' && !ult) exMover(E.i + 1);
      else if (e.key === 'ArrowLeft' && E.i > 0) exMover(E.i - 1);
    };
    addEventListener('keydown', tecla);
    limpiar = () => { clearInterval(iv); removeEventListener('keydown', tecla); };
  }
  function repintar() { const y = scrollY; pintar(); window.scrollTo(0, y); }
  function exMover(k) { EA.i = Math.max(0, Math.min(EA.qs.length - 1, k)); if (EA.formal) guardarFormal(); repintar(); }
  function exResponder(k) {
    const q = EA.qs[EA.i]; if (!q.ops[k] || (EA.inmediato && q.r !== null)) return;
    q.r = EA.formal && q.r === k ? null : k; // en el formal, tocar de nuevo borra la respuesta
    if (EA.formal) guardarFormal();
    repintar();
  }
  function exTerminar(E) {
    const ok = E.qs.filter(acierto).length;
    const us = [...new Set(E.qs.map(q => q.uid))].sort();
    S.examenes.unshift({ f: new Date().toLocaleDateString('es-MX', { day: 'numeric', month: 'short' }), ok, n: E.qs.length, tipo: E.formal ? 'Examen formal' : 'Simulacro', mat: S.materia, que: us.length === U.length ? 'Todas las unidades' : 'Unidad ' + us.join(', ') });
    S.examenes = S.examenes.slice(0, 30);
    E.fase = 'fin'; if (E.formal) S.formales[S.materia] = null;
    actividad(); guardar(); pintar();
  }
  function exFin(E) {
    const n = E.qs.length, ok = E.qs.filter(acierto).length, p = ok / n, cal = (p * 10).toFixed(1);
    const msg = p >= .9 ? 'Excelente. Dominas el temario.' : p >= .7 ? 'Bien. Repasa lo que fallaste y estarás listo.' : p >= .6 ? 'Aprobado por poco. Refuerza las secciones más bajas.' : 'Todavía falta. Relee los temas y vuelve a intentarlo.';
    const porU = U.filter(u => E.qs.some(q => q.uid === u.id)).map(u => { const qs = E.qs.filter(q => q.uid === u.id); return { u, b: qs.filter(acierto).length, t: qs.length }; });
    const ver = E.formal ? E.ver : 'todas';
    const lista = E.qs.map((q, k) => ({ q, k })).filter(x => ver === 'todas' || !acierto(x.q));
    vista.innerHTML = `<div class="col entra">
      <div class="glass fin" style="margin-top:0">
        <div class="anillo-caja">${anillo(p, p >= .7 ? 'var(--verde)' : p >= .6 ? 'var(--naranja)' : 'var(--rojo)', 150, 13)}<b>${cal}</b></div>
        <h2>${ok} de ${n} correctas</h2>
        ${E.formal ? `<div class="sello ${p >= .6 ? 'si' : 'no'}">${p >= .6 ? 'Aprobado' : 'No aprobado'}</div>` : ''}
        <p>${msg}</p>
        <div class="desglose">${porU.map(x => `<div class="barra-el" style="grid-template-columns:84px 1fr 48px"><span>Unidad ${x.u.id}</span><span class="pista"><i style="width:${x.b / x.t * 100}%;background:${x.u.color}"></i></span><span class="v">${x.b}/${x.t}</span></div>`).join('')}</div>
        <div class="fila"><button class="btn" data-accion="ex-otro">${E.formal ? 'Nuevo examen' : 'Nuevo simulacro'}</button><a class="btn sec" href="#/">Ir al inicio</a></div>
      </div>
      <h2 class="seccion-tit">Revisión</h2>
      ${E.formal ? `<div class="fila" style="margin-bottom:6px"><button class="chip ${ver === 'mal' ? 'on' : ''}" data-accion="fx-ver" data-v="mal">Incorrectas (${n - ok})</button><button class="chip ${ver === 'todas' ? 'on' : ''}" data-accion="fx-ver" data-v="todas">Todas (${n})</button></div>` : ''}
      ${lista.length ? lista.map(({ q, k }) => {
        const bien = acierto(q), cor = q.ops.find(o => o.ok).t;
        return `<div class="glass repaso"><h4>${k + 1}. ${q.q}</h4>
          <p class="r ${bien ? 'bien' : 'mal'}">${bien ? '✓ ' + cor : (q.r === null ? '✗ Sin responder' : '✗ Tu respuesta: ' + q.ops[q.r].t)}</p>
          ${bien ? '' : `<p class="r bien">✓ Correcta: ${cor}</p>`}<p class="e">${q.e}</p></div>`;
      }).join('') : '<p class="vacio">No fallaste ninguna. Nada que revisar aquí.</p>'}
    </div>`;
  }

  /* ---------------- Progreso (estilo perfil) ---------------- */
  let PT = 'unidades';
  function vProgreso() {
    const ex = exMat(), mejor = ex.length ? Math.max(...ex.map(e => e.ok / e.n * 10)).toFixed(1) : '–';
    const minTot = Math.floor(Object.values(S.foco).reduce((a, b) => a + b, 0) / 60);
    const cuerpo = {
      unidades: `<div class="unidades" style="margin-top:20px">${U.map(tarjetaUnidad).join('')}</div>`,
      examenes: `<section class="glass tarjeta" style="margin-top:20px">${ex.length
        ? `<div class="historial">${ex.map(e => `<div><b>${(e.ok / e.n * 10).toFixed(1)} · ${e.ok}/${e.n}</b><span>${e.tipo || 'Simulacro'} · ${e.que} · ${e.f}</span></div>`).join('')}</div>`
        : '<p class="vacio">Todavía no has hecho ningún examen.</p>'}</section>`,
      ajustes: `<section class="glass tarjeta" style="margin-top:20px">
        <div class="interruptor"><span>Apariencia<small>Automática sigue la de tu sistema</small></span><div class="seg">${TEMAS.map(t => `<button class="${S.tema === t ? 'on' : ''}" data-accion="tema-set" data-t="${t}">${TEMA_NOM[t]}</button>`).join('')}</div></div>
        <div class="interruptor"><span>Preguntar el tiempo al abrir una lección<small>Muestra el reloj editable antes de empezar</small></span><button class="sw ${S.pedir ? 'on' : ''}" data-accion="aj-pedir" aria-label="Preguntar el tiempo"></button></div>
        <div class="interruptor"><span>Borrar mi progreso<small>Temas, tarjetas, exámenes y racha</small></span><button class="btn sec" data-accion="borrar">${ic('reinicio')} Reiniciar</button></div>
      </section>`
    };
    vista.innerHTML = `<div class="col ancha entra">
      <header class="perfil">
        <div class="avatar"><span>${ic('matraz')}</span></div>
        <div>
          <h1 class="titulo" style="font-size:clamp(26px,4vw,38px)">Mi progreso</h1>
          <div class="contadores">
            <div><b>${temasHechos()}<small>/${totalTemas()}</small></b><span>temas</span></div>
            <div><b>${dominadas()}<small>/${totalTarjetas()}</small></b><span>tarjetas</span></div>
            <div><b>${ex.length}</b><span>exámenes</span></div>
          </div>
        </div>
      </header>
      <section class="stats">
        ${statRacha()}
        <div class="glass stat">${ic('reloj')}<b>${minTot}<small>min</small></b><span>Tiempo total con reloj</span></div>
        <div class="glass stat">${ic('check')}<b>${Object.values(S.ciclos).reduce((a, b) => a + b, 0)}</b><span>Sesiones completadas</span></div>
        <div class="glass stat">${ic('birrete')}<b>${mejor}</b><span>Mejor calificación</span></div>
      </section>
      <nav class="subtabs">${[['unidades', 'libro', 'Unidades'], ['examenes', 'examen', 'Exámenes'], ['ajustes', 'auto', 'Ajustes']].map(x => `<button class="${PT === x[0] ? 'on' : ''}" data-accion="pt" data-t="${x[0]}">${ic(x[1])} ${x[2]}</button>`).join('')}</nav>
      ${cuerpo[PT]}
    </div>`;
  }

  /* ==========================================================
     Reloj / temporizador
     Al terminar NO ejecuta ninguna acción: solo vibra y espera
     a que lo pospongas o lo canceles. La lección sigue abierta.
     ========================================================== */
  const T = { tipo: 'libre', et: 'Enfoque', total: S.minLibre * 60, rest: S.minLibre * 60, on: false, fin: 0, sonando: false };
  const tEl = $('#temporizador'), tPanel = $('#tPanel');
  const tColor = () => T.sonando ? 'var(--rojo)' : T.tipo === 'descanso' ? 'var(--verde)' : 'var(--accent)';

  function tMontar() {
    tEl.innerHTML = `<button class="t-main" data-accion="t-panel" aria-label="Abrir el reloj"><span class="t-anillo" id="tAnillo"></span><span class="t-txt"><b id="tHora"></b><small id="tFase"></small></span></button>
      <button class="t-btn pri" data-accion="t-play" id="tPlay" aria-label="Iniciar o pausar"></button>
      <button class="t-btn" data-accion="t-panel" aria-label="Ajustar el reloj">${ic('abajo')}</button>`;
    tPintar();
  }
  function tPintar() {
    tEl.style.setProperty('--t-color', tColor());
    tEl.classList.toggle('activo', T.on);
    tEl.classList.toggle('sonando', T.sonando);
    $('#tAnillo').innerHTML = anillo(T.total ? 1 - T.rest / T.total : 1, tColor(), 40, 4) + ic(T.sonando ? 'alarma' : T.tipo === 'descanso' ? 'taza' : 'reloj');
    $('#tHora').textContent = mmss(T.rest);
    $('#tFase').textContent = T.sonando ? 'Se acabó' : T.et;
    $('#tPlay').innerHTML = ic(T.sonando ? 'alarma' : T.on ? 'pausa' : 'play');
    document.title = (T.sonando ? '⏰ Se acabó el tiempo — ' : T.on ? mmss(T.rest) + ' · ' + T.et + ' — ' : '') + matActual().nombre;
    tPanelTic();
  }
  function tPanelPintar() {
    if (tPanel.hidden) return;
    if (T.sonando) {
      tPanel.innerHTML = `<div class="alarma">
        <div class="alarma-ic">${ic('alarma')}</div>
        <h4>Se acabó el tiempo</h4>
        <p>${T.et}. Tu lección sigue abierta: pospón el reloj o cancélalo y continúa a tu ritmo.</p>
        <button class="btn grande-btn" data-accion="t-posponer" data-m="5">Posponer 5 min</button>
        <div class="fila dos"><button class="btn sec" data-accion="t-posponer" data-m="10">Posponer 10</button><button class="btn sec" data-accion="t-descanso">${ic('taza')} Descanso 10</button></div>
        <button class="btn sec grande-btn" data-accion="t-cancel">Cancelar</button>
      </div>`;
      return;
    }
    const usado = T.rest < T.total;
    tPanel.innerHTML = `<div class="tp-cab"><b>Reloj</b><button class="t-btn" data-accion="t-cerrar" aria-label="Cerrar">${ic('x')}</button></div>
      <div class="tp-reloj"><span id="tpAnillo"></span><div><b id="tpHora"></b><small>${T.et}</small></div></div>
      <div class="tp-info"><div><small>Transcurrido</small><b id="tpTrans"></b></div><div><small>Hora actual</small><b id="tpAhora"></b></div><div><small>Termina</small><b id="tpFin"></b></div></div>
      <div class="paso chico">
        <button data-accion="t-aj" data-d="-5" aria-label="Quitar 5 minutos">−5</button><button data-accion="t-aj" data-d="-1" aria-label="Quitar 1 minuto">−1</button>
        <div class="val"><b>${Math.ceil(T.total / 60)}</b><small>min en total</small></div>
        <button data-accion="t-aj" data-d="1" aria-label="Añadir 1 minuto">+1</button><button data-accion="t-aj" data-d="5" aria-label="Añadir 5 minutos">+5</button>
      </div>
      <div class="fila" style="justify-content:center">${[10, 15, 25, 50].map(m => `<button class="chip" data-accion="t-pre" data-m="${m}">${m} min</button>`).join('')}</div>
      <button class="btn grande-btn" data-accion="t-play">${ic(T.on ? 'pausa' : 'play')} ${T.on ? 'Pausar' : usado ? 'Continuar' : 'Iniciar'}</button>
      <div class="fila dos"><button class="btn sec" data-accion="t-reset">${ic('reinicio')} Reiniciar</button><button class="btn sec" data-accion="t-cancel">Detener</button></div>
      <button class="tp-link" data-accion="enfoque">${ic('enfoque')} Modo enfoque: ocultar los menús</button>`;
    tPanelTic();
  }
  function tPanelTic() {
    if (tPanel.hidden || T.sonando || !$('#tpHora')) return;
    const ahora = new Date();
    $('#tpAnillo').innerHTML = anillo(T.total ? 1 - T.rest / T.total : 0, tColor(), 132, 10);
    $('#tpHora').textContent = mmss(T.rest);
    $('#tpTrans').textContent = mmss(T.total - T.rest);
    $('#tpAhora').textContent = hhmm(ahora);
    $('#tpFin').textContent = hhmm(new Date(ahora.getTime() + T.rest * 1000));
  }
  const tAbrir = v => { tPanel.hidden = !v; tPanelPintar(); };
  function tPoner(min, tipo, et, arrancar) {
    T.tipo = tipo; T.et = et; T.total = T.rest = Math.max(1, min) * 60; T.sonando = false; T.on = !!arrancar; T.fin = Date.now() + T.rest * 1000;
    clearInterval(tRepite); audio(); tPintar(); tPanelPintar();
  }
  let ctx, tRepite;
  function audio() { try { ctx = ctx || new (window.AudioContext || window.webkitAudioContext)(); ctx.resume(); } catch (e) { /* sin audio */ } }
  function sonar() {
    if (!S.fx.sonido) { if (navigator.vibrate) navigator.vibrate([300, 150, 300]); return; }
    try {
      audio();
      [0, .22, .44].forEach((d, k) => {
        const o = ctx.createOscillator(), g = ctx.createGain();
        o.type = 'sine'; o.frequency.value = [660, 880, 1100][k];
        g.gain.setValueAtTime(0.0001, ctx.currentTime + d);
        g.gain.exponentialRampToValueAtTime(.25, ctx.currentTime + d + .03);
        g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + d + .5);
        o.connect(g).connect(ctx.destination); o.start(ctx.currentTime + d); o.stop(ctx.currentTime + d + .55);
      });
      if (navigator.vibrate) navigator.vibrate([300, 150, 300, 150, 300]);
    } catch (e) { /* sin audio */ }
  }
  function tTic() {
    if (!T.on) { if (!tPanel.hidden && !T.sonando) tPanelTic(); return; }
    const r = Math.max(0, Math.round((T.fin - Date.now()) / 1000));
    if (T.tipo !== 'descanso' && r < T.rest) { const h = fecha(); S.foco[h] = (S.foco[h] || 0) + (T.rest - r); if (r % 15 === 0) guardar(); }
    T.rest = r;
    if (r === 0) {
      // Fin del tiempo: solo avisa. No navega, no cierra nada, no arranca otra fase.
      T.on = false; T.sonando = true;
      if (T.tipo !== 'descanso') { const h = fecha(); S.ciclos[h] = (S.ciclos[h] || 0) + 1; actividad(); }
      guardar(); sonar();
      let veces = 0; clearInterval(tRepite);
      tRepite = setInterval(() => { if (!T.sonando || ++veces > 2) return clearInterval(tRepite); sonar(); }, 30000);
      tPintar(); tAbrir(true);
      return;
    }
    tPintar();
  }
  setInterval(tTic, 500);

  /* ---------------- Materias: selector y cambio ---------------- */
  const menuMat = $('#menuMat');
  function abrirMenuMat() {
    menuMat.innerHTML = `<div class="menu-tit">Materias</div>
      ${MATERIAS.map(m => {
        const us = unidadesDe(m.id), tot = us.reduce((n, u) => n + u.temas.length, 0), he = us.reduce((n, u) => n + u.temas.filter((_, i) => S.hechos[idTema(u, i)]).length, 0);
        return `<button class="menu-item ${m.id === S.materia ? 'activo' : ''}" data-accion="mat-set" data-m="${m.id}">
          <span class="logo">${ic(m.ic)}</span><span class="tx"><b>${m.nombre}</b><small>${tot ? `${he} de ${tot} temas · ${Math.round(he / tot * 100)}%` : 'Sin contenido todavía'}</small></span>${m.id === S.materia ? ic('check') : ''}</button>`;
      }).join('')}
      <a class="menu-item pie" href="#/ajustes">${ic('ajustes')}<span class="tx"><b>Ajustes</b><small>Apariencia y funciones</small></span></a>`;
    menuMat.hidden = false;
  }
  function cerrarMenuMat() { menuMat.hidden = true; }
  function cambiarMateria(id) {
    cerrarMenuMat();
    if (id === S.materia || !MATERIAS.some(m => m.id === id)) return;
    S.materia = id; U = unidadesDe(id); FC = null; guardar(); reiniciarEx();
    if (location.hash && location.hash !== '#/') location.hash = '#/'; else pintar();
    tPintar(); toast('Materia: ' + matActual().nombre);
  }
  function vVacia() {
    vista.innerHTML = `<div class="col entra">
      <header><div class="sobre">${matActual().nombre}</div><h1 class="titulo">Aún no hay contenido</h1>
      <p class="bajada">Esta materia ya está en tu lista, pero todavía no tiene temas, tarjetas ni preguntas. En cuanto se cargue su temario, aquí aparecerán sus lecciones, juegos y exámenes.</p></header>
      <div class="fila" style="margin-top:28px"><button class="btn" data-accion="materias">${ic('abajo')} Cambiar de materia</button><a class="btn sec" href="#/ajustes">${ic('ajustes')} Ajustes</a></div>
    </div>`;
  }
  const statRacha = () => S.fx.rachas
    ? `<div class="glass stat">${ic('llama')}<b>${rachaViva()}<small>${rachaViva() === 1 ? 'día' : 'días'}</small></b><span>Racha de estudio</span></div>`
    : `<div class="glass stat">${ic('trofeo')}<b>${S.puntos.toLocaleString('es-MX')}</b><span>Puntos en juegos</span></div>`;

  /* ---------------- Calendario de exámenes ---------------- */
  const EXA = (window.EXAMENES || []).map(e => Object.assign({}, e, { d: new Date(e.fecha + 'T00:00:00') })).sort((a, b) => a.d - b.d);
  const hoy0 = () => new Date(new Date().toDateString());
  const diasPara = d => Math.round((d - hoy0()) / 864e5);
  const enDias = n => n < 0 ? 'Ya pasó' : n === 0 ? 'Hoy' : n === 1 ? 'Mañana' : 'En ' + n + ' días';
  const pendientes = id => { const us = unidadesDe(id); return us.reduce((n, u) => n + u.temas.filter((_, i) => !S.hechos[idTema(u, i)]).length, 0); };
  function tarjetaProximo() {
    const p = EXA.find(e => diasPara(e.d) >= 0); if (!p) return '';
    const n = diasPara(p.d);
    return `<a class="glass proximo" href="#/calendario">${ic('calendario')}<span class="tx"><small>Próximo examen</small><b>${p.materia}</b></span><span class="cuando ${n <= 2 ? 'urge' : ''}">${enDias(n)}</span></a>`;
  }
  function vCalendario() {
    const fut = EXA.filter(e => diasPara(e.d) >= 0), prox = fut[0], hoy = hoy0();
    if (!EXA.length) { vista.innerHTML = '<div class="col"><h1 class="titulo">Calendario</h1><p class="bajada">No hay exámenes cargados en datos/calendario.js.</p></div>'; return; }
    // Semanas completas (lunes a domingo) desde esta semana hasta la del último examen
    const ini = new Date(hoy); ini.setDate(ini.getDate() - (ini.getDay() + 6) % 7);
    const ult = new Date(Math.max(EXA[EXA.length - 1].d, hoy)); const fin = new Date(ult); fin.setDate(fin.getDate() + (7 - ult.getDay()) % 7);
    const dias = []; for (let d = new Date(ini); d <= fin; d.setDate(d.getDate() + 1)) dias.push(new Date(d));
    const corto = s => s.split(' ')[0].slice(0, 5);
    vista.innerHTML = `<div class="col entra">
      <header><div class="sobre">Semestre 1 · Grupo 7 · 08:00 a 10:00</div><h1 class="titulo">Calendario</h1></header>
      ${prox ? `<section class="glass cal-hero">
        <div class="cal-num"><b>${diasPara(prox.d)}</b><small>${diasPara(prox.d) === 1 ? 'día' : 'días'}</small></div>
        <div class="tx"><small>Tu próximo examen</small><h3>${prox.materia}</h3>
          <p>${prox.d.toLocaleDateString('es-MX', { weekday: 'long', day: 'numeric', month: 'long' })} · ${prox.hora} · ${prox.salon}</p>
          <p class="cal-nota">${fut.length} exámenes en los próximos ${diasPara(fut[fut.length - 1].d)} días.</p></div>
      </section>` : '<section class="glass tarjeta" style="margin-top:28px"><p class="vacio">Ya pasaron todos los exámenes del calendario.</p></section>'}
      <section class="glass cal-mes">
        <div class="cal-sem">${['L', 'M', 'M', 'J', 'V', 'S', 'D'].map(x => `<span>${x}</span>`).join('')}</div>
        <div class="cal-grid">${dias.map(d => {
          const e = EXA.find(x => +x.d === +d), n = diasPara(d);
          return `<div class="${n === 0 ? 'hoy' : n < 0 ? 'pasado' : ''} ${e ? 'ex' : ''}"><b>${d.getDate()}</b>${e ? `<small>${corto(e.materia)}</small>` : ''}</div>`;
        }).join('')}</div>
      </section>
      <h2 class="seccion-tit">Exámenes</h2>
      <section class="glass temas">${EXA.map(e => {
        const n = diasPara(e.d), tiene = e.id && unidadesDe(e.id).length, pen = tiene ? pendientes(e.id) : 0;
        const plan = !tiene ? 'Sin contenido en la página todavía' : pen === 0 ? 'Todos los temas estudiados' : n > 0 ? `${pen} temas pendientes · ${Math.ceil(pen / n)} por día para llegar` : `${pen} temas pendientes`;
        return `<${tiene ? `button data-accion="cal-ir" data-m="${e.id}"` : 'div'} class="tema-fila cal-fila ${n < 0 ? 'pasado' : ''}">
          <span class="cal-dia"><b>${e.d.getDate()}</b><small>${e.d.toLocaleDateString('es-MX', { month: 'short' }).replace('.', '')}</small></span>
          <span class="t">${e.materia}<small>${e.d.toLocaleDateString('es-MX', { weekday: 'long' })} · ${e.salon} · ${plan}</small></span>
          <span class="cuando ${n >= 0 && n <= 2 ? 'urge' : ''}">${enDias(n)}</span>${tiene ? ic('chev') : ''}
        </${tiene ? 'button' : 'div'}>`;
      }).join('')}</section>
    </div>`;
  }

  /* ---------------- Juegos ---------------- */
  let JG = null;
  function vJuegos(r) {
    if (!JG) { vista.innerHTML = '<div class="col"><h1 class="titulo">Juegos no disponibles</h1><p class="bajada">Falta el archivo juegos.js junto a index.html.</p></div>'; return; }
    if (r.id && JG.existe(r.id)) JG.jugar(r.id); else JG.menu();
  }

  /* ---------------- Ajustes ---------------- */
  function vAjustes() {
    const sw = (on, acc, k, et) => `<button class="sw ${on ? 'on' : ''}" data-accion="${acc}" ${k ? `data-k="${k}"` : ''} aria-label="${et}" aria-pressed="${on}"></button>`;
    vista.innerHTML = `<div class="col entra">
      <header><div class="sobre">Personaliza tu espacio</div><h1 class="titulo">Ajustes</h1>
      <p class="bajada">Tus preferencias se guardan en este dispositivo y navegador.</p></header>

      <h2 class="seccion-tit">Apariencia</h2>
      <section class="glass tarjeta">
        <div class="interruptor"><span>Modo<small>Automático sigue el de tu sistema</small></span><div class="seg">${TEMAS.map(t => `<button class="${S.tema === t ? 'on' : ''}" data-accion="tema-set" data-t="${t}">${ic(TEMA_IC[t])} ${TEMA_NOM[t]}</button>`).join('')}</div></div>
        <div class="aj-sub">Tema de color</div>
        <div class="paletas">${PALETAS.map(p => `<button class="paleta ${S.paleta === p[0] ? 'on' : ''}" data-accion="paleta" data-p="${p[0]}" data-paleta="${p[0]}" aria-pressed="${S.paleta === p[0]}">
          <span class="muestra"><i></i><i></i><i></i></span><b>${p[1]}</b><small>${p[2]}</small></button>`).join('')}</div>
      </section>

      <h2 class="seccion-tit">Funciones</h2>
      <section class="glass tarjeta">
        ${FX.map(f => `<div class="interruptor"><span>${f[1]}<small>${f[2]}</small></span>${sw(S.fx[f[0]], 'fx', f[0], f[1])}</div>`).join('')}
        <div class="interruptor ${S.fx.reloj ? '' : 'apagado'}"><span>Preguntar el tiempo antes de cada lección<small>Muestra el reloj editable al abrir un tema</small></span>${sw(S.pedir && S.fx.reloj, 'aj-pedir', '', 'Preguntar el tiempo')}</div>
      </section>

      <h2 class="seccion-tit">Materia y datos</h2>
      <section class="glass tarjeta">
        <div class="interruptor"><span>Materia activa<small>${matActual().nombre}</small></span><button class="btn sec" data-accion="materias">Cambiar</button></div>
        <div class="interruptor"><span>Borrar mi progreso<small>Temas, tarjetas, exámenes, puntos y racha de todas las materias</small></span><button class="btn sec" data-accion="borrar">${ic('reinicio')} Reiniciar</button></div>
      </section>
    </div>`;
  }

  /* ---------------- Acciones (delegación de eventos) ---------------- */
  const A = {
    tema: () => { S.tema = TEMAS[(TEMAS.indexOf(S.tema) + 1) % 3]; aplicarTema(); guardar(); pintarNav(ruta()); },
    'tema-set': el => { S.tema = el.dataset.t; aplicarTema(); guardar(); pintarNav(ruta()); vAjustes(); },
    paleta: el => { S.paleta = el.dataset.p; aplicarTema(); guardar(); vAjustes(); },
    fx: el => { const k = el.dataset.k; S.fx[k] = !S.fx[k]; aplicarTema(); guardar(); if (k === 'reloj' && !S.fx.reloj) tAbrir(false); vAjustes(); },
    'aj-pedir': () => { S.pedir = !S.pedir; guardar(); vAjustes(); },
    pt: el => { if (el.dataset.t === 'ajustes') { location.hash = '#/ajustes'; return; } PT = el.dataset.t; vProgreso(); },
    materias: () => { if (menuMat.hidden) abrirMenuMat(); else cerrarMenuMat(); },
    'mat-set': el => cambiarMateria(el.dataset.m),
    'cal-ir': el => { const m = el.dataset.m; if (m !== S.materia) { S.materia = m; U = unidadesDe(m); FC = null; guardar(); reiniciarEx(); tPintar(); } location.hash = '#/temario'; },
    borrar: () => { if (confirm('¿Borrar todo tu progreso (temas, tarjetas, exámenes y racha)? No se puede deshacer.')) { const k = { tema: S.tema, paleta: S.paleta, fx: S.fx, materia: S.materia, pedir: S.pedir }; S = Object.assign(base(), k); guardar(); FC = null; reiniciarEx(); pintar(); toast('Progreso reiniciado'); } },
    enfoque: () => { const on = document.body.classList.toggle('enfoque'); tAbrir(false); toast(on ? 'Modo enfoque activado · toca el reloj para salir' : 'Modo enfoque desactivado'); },
    ir: el => { const h = document.getElementById(el.dataset.id); if (h) h.scrollIntoView({ behavior: 'smooth', block: 'start' }); },
    hecho: el => {
      const id = el.dataset.id;
      if (S.hechos[id]) { delete S.hechos[id]; guardar(); repintar(); }
      else { S.hechos[id] = 1; actividad(); guardar(); toast('Tema completado'); location.hash = el.dataset.sig; }
    },
    // Hoja de tiempo de la lección
    'hj-aj': el => { HJ.min = Math.max(1, Math.min(240, HJ.min + +el.dataset.d)); pintarHoja(); },
    'hj-pre': el => { HJ.min = +el.dataset.m; pintarHoja(); },
    'hj-sw': () => { S.pedir = !S.pedir; guardar(); pintarHoja(); },
    'hj-ini': () => { const t = HJ.u.temas[HJ.i]; S.minLeccion = HJ.min; guardar(); tPoner(HJ.min, 'leccion', t.t, true); cerrarHoja(); toast('Reloj en marcha: ' + S.minLeccion + ' min'); },
    'hj-sin': () => { omitidos.add(idTema(HJ.u, HJ.i)); cerrarHoja(); },
    // Flashcards
    voltear, calificar: el => calificar(+el.dataset.n),
    'fc-nueva': () => { FC = nuevaSesion(FC.sel); pintarCarta(); },
    // Exámenes
    'examen-u': el => { Object.assign(EXS.rapido, { fase: 'cfg', us: new Set([+el.dataset.u]) }); location.hash = '#/examen'; },
    'ex-u': el => { const u = +el.dataset.u; EA.us.has(u) ? EA.us.delete(u) : EA.us.add(u); vExamen(ruta()); },
    'ex-n': el => { EA.n = +el.dataset.n; vExamen(ruta()); },
    'ex-sw': el => { EA[el.dataset.k] = !EA[el.dataset.k]; vExamen(ruta()); },
    'ex-ini': exIniciar,
    'fx-min': el => { EXS.formal.min = +el.dataset.m; vExamen(ruta()); },
    'fx-ini': fxIniciar,
    'fx-ver': el => { EXS.formal.ver = el.dataset.v; exFin(EXS.formal); },
    'fx-salir': () => { guardarFormal(); toast('Examen guardado. El tiempo sigue corriendo.'); location.hash = '#/'; },
    'ex-r': el => exResponder(+el.dataset.k),
    'ex-ir': el => exMover(+el.dataset.k),
    'ex-marca': () => { const q = EA.qs[EA.i]; q.m = !q.m; guardarFormal(); repintar(); },
    'ex-sig': () => exMover(EA.i + 1), 'ex-ant': () => exMover(EA.i - 1),
    'ex-fin': () => {
      const f = EA.qs.filter(q => q.r === null).length;
      const msg = f ? 'Tienes ' + f + ' reactivo' + (f > 1 ? 's' : '') + ' sin responder. ¿Entregar de todos modos?' : (EA.formal ? '¿Entregar el examen? Ya no podrás cambiar tus respuestas.' : '');
      if (!msg || confirm(msg)) exTerminar(EA);
    },
    'ex-salir': () => { if (confirm('¿Salir del simulacro? Se perderán tus respuestas.')) { EA.fase = 'cfg'; pintar(); } },
    'ex-otro': () => { EA.fase = 'cfg'; pintar(); },
    // Reloj
    't-panel': () => { if (document.body.classList.contains('enfoque') && tPanel.hidden && !T.sonando) document.body.classList.remove('enfoque'); tAbrir(tPanel.hidden); },
    't-cerrar': () => tAbrir(false),
    't-play': () => {
      if (T.sonando) return tAbrir(true);
      T.on = !T.on; audio();
      if (T.on) T.fin = Date.now() + T.rest * 1000; else guardar();
      tPintar(); tPanelPintar();
    },
    't-aj': el => {
      const d = +el.dataset.d * 60;
      T.rest = Math.max(60, T.rest + d); T.total = Math.max(T.rest, T.total + d);
      if (T.on) T.fin = Date.now() + T.rest * 1000;
      if (T.tipo === 'libre' && T.rest === T.total) { S.minLibre = Math.round(T.total / 60); guardar(); }
      tPintar(); tPanelPintar();
    },
    't-pre': el => { const m = +el.dataset.m; if (T.tipo === 'libre') { S.minLibre = m; guardar(); } tPoner(m, T.tipo, T.et, T.on); },
    't-reset': () => tPoner(T.total / 60, T.tipo, T.et, false),
    't-posponer': el => { tPoner(+el.dataset.m, T.tipo === 'descanso' ? 'descanso' : T.tipo, T.et, true); tAbrir(false); toast('Pospuesto ' + el.dataset.m + ' min'); },
    't-descanso': () => { tPoner(10, 'descanso', 'Descanso', true); tAbrir(false); toast('Descanso de 10 min'); },
    't-cancel': () => { tPoner(S.minLibre, 'libre', 'Enfoque', false); tAbrir(false); }
  };
  document.addEventListener('click', e => {
    if (!tPanel.hidden && !e.target.closest('#tPanel, #temporizador, [data-accion="t-panel"]')) tAbrir(false);
    if (!menuMat.hidden && !e.target.closest('#menuMat, [data-accion="materias"]')) cerrarMenuMat();
    if (e.target === hoja && HJ) { A['hj-sin'](); return; }
    const el = e.target.closest('[data-accion]');
    if (el && A[el.dataset.accion]) A[el.dataset.accion](el);
  });
  addEventListener('keydown', e => {
    if (e.key !== 'Escape') return;
    if (!hoja.hidden && HJ) A['hj-sin'](); else if (!tPanel.hidden) tAbrir(false); else document.body.classList.remove('enfoque');
  });

  /* ---------------- Arranque ---------------- */
  aplicarTema();
  tMontar();
  addEventListener('hashchange', pintar);
  if (window.Juegos) JG = window.Juegos({
    vista, ic, barajar, acciones: A, animar: () => S.fx.animar,
    unidades: () => U, materia: () => matActual().nombre,
    puntos: () => S.puntos, jugadas: () => S.jugadas,
    record: id => (S.records[S.materia] || {})[id] || 0,
    terminar: (id, pts) => {
      const r = S.records[S.materia] = S.records[S.materia] || {}, nuevo = pts > (r[id] || 0);
      if (nuevo) r[id] = pts;
      S.puntos += pts; S.jugadas++; actividad(); guardar();
      return { record: r[id] || 0, nuevo };
    },
    alLimpiar: fn => { limpiar = fn; }
  });
  if (!TODAS.length) vista.innerHTML ='<div class="col"><h1 class="titulo">No se encontró el contenido</h1><p class="bajada">Revisa que la carpeta <b>datos</b> esté junto a index.html.</p></div>';
  else pintar();
})();
