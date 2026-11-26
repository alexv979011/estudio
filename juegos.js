/* ==========================================================
   Juegos de estudio — pensados para disfrutarse, sin presión:
   no hay "game over" brusco, siempre se termina la partida y
   siempre se ganan puntos y al menos una estrella.
   Usan el banco de preguntas de la materia activa.
   app.js llama a window.Juegos(api) y obtiene { menu, jugar, existe }.
   ========================================================== */
window.Juegos = function (app) {
  'use strict';
  const { vista, ic, barajar, acciones } = app;
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  const LISTA = [
    { id: 'globos', t: 'Globos', ic: 'foco', d: 'Adivina la palabra letra por letra. Cada fallo revienta un globo, pero tienes pistas.', o: 'Ahorcado renovado' },
    { id: 'memorama', t: 'Memorama', ic: 'tarjetas', d: 'Voltea las cartas y encuentra cada pregunta con su respuesta. Sin reloj.', o: 'Memoria' },
    { id: 'sopa', t: 'Sopa de letras', ic: 'libro', d: 'Encuentra los términos escondidos en la cuadrícula. A tu ritmo.', o: 'Relajado' },
    { id: 'burbujas', t: 'Burbujas', ic: 'matraz', d: 'Las respuestas suben flotando: revienta la burbuja correcta.', o: 'Dinámico' },
    { id: 'vf', t: 'Verdadero o falso', ic: 'check', d: 'Diez tarjetas, sin reloj. Decide si la respuesta que ves es la correcta.', o: 'Rápido de jugar' },
    { id: 'reto', t: 'Reto contrarreloj', ic: 'rayo', d: 'Para cuando quieras presión: 60 segundos y las rachas multiplican tus puntos.', o: 'Opcional · con reloj' }
  ];

  /* ---------------- Datos ---------------- */
  const banco = () => { const b = []; app.unidades().forEach(u => u.preguntas.forEach(p => b.push({ q: p[0], ok: p[1][0], ops: p[1], e: p[2] }))); return b; };
  const plano = s => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toUpperCase();
  const esPalabra = s => /^[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]{4,12}$/.test(s);
  const unicas = (lista, clave) => { const v = new Set(); return lista.filter(x => !v.has(clave(x)) && v.add(clave(x))); };
  const palabras = () => unicas(banco().filter(x => esPalabra(x.ok)), x => plano(x.ok));
  const paresCortos = () => unicas(banco().filter(x => x.q.length <= 78 && x.ok.length <= 30), x => x.ok);
  const paraBurbujas = () => banco().filter(x => x.ops.every(o => o.length <= 26));
  const disponible = id => ({ globos: () => palabras().length >= 4, sopa: () => palabras().filter(x => x.ok.length <= 10).length >= 5, memorama: () => paresCortos().length >= 6, burbujas: () => paraBurbujas().length >= 8 }[id] || (() => banco().length >= 8))();

  let J = null; // partida en curso
  const parar = () => { if (J) { clearInterval(J.iv); J.vivo = false; if (J.tecla) removeEventListener('keydown', J.tecla); } };
  const luego = (ms, fn) => { const yo = J; setTimeout(() => { if (yo === J && yo.vivo) fn(); }, ms); };
  const cola = lista => { let c = []; return () => { if (!c.length) c = barajar(lista); return c.pop(); }; };
  const pon = (id, v) => { const el = document.getElementById(id); if (el) el.innerHTML = v; };
  const ANIMO = ['¡Bien!', '¡Eso!', '¡Exacto!', '¡Genial!', '¡Así se hace!', '¡Correcto!'];
  const animo = () => ANIMO[Math.floor(Math.random() * ANIMO.length)];

  /* ---------------- Efectos ---------------- */
  function confeti() {
    if (!app.animar()) return;
    const c = document.createElement('div'); c.className = 'confeti';
    const col = ['#ff6b6b', '#ffd166', '#06d6a0', '#4dabf7', '#b197fc', '#ff9f1c'];
    c.innerHTML = Array.from({ length: 46 }, (_, k) => `<i style="left:${Math.random() * 100}%;background:${col[k % col.length]};animation-delay:${(Math.random() * .5).toFixed(2)}s;animation-duration:${(1.6 + Math.random() * 1.3).toFixed(2)}s;--giro:${Math.round(Math.random() * 720 - 360)}deg"></i>`).join('');
    document.body.appendChild(c); setTimeout(() => c.remove(), 3400);
  }
  function aviso(txt, bien = true) { // mensajito flotante sobre la zona de juego
    const z = $('.juego'); if (!z) return;
    const a = document.createElement('div'); a.className = 'jg-aviso ' + (bien ? 'bien' : 'mal'); a.textContent = txt;
    z.appendChild(a); setTimeout(() => a.remove(), 900);
  }

  /* ---------------- Menú ---------------- */
  function menu() {
    parar(); J = null;
    const pts = app.puntos(), nivel = Math.floor(pts / 1000) + 1;
    vista.innerHTML = `<div class="col ancha entra">
      <header><div class="sobre">Aprende jugando</div><h1 class="titulo">Juegos</h1>
      <p class="bajada">Para repasar ${app.materia()} sin presión. Aquí no se reprueba: siempre ganas puntos.</p></header>
      <section class="glass jg-nivel">
        <div><small>Nivel</small><b>${nivel}</b></div>
        <div class="jg-nivel-barra"><div class="fc-barra" style="margin:0"><i style="width:${pts % 1000 / 10}%"></i></div><span>${pts.toLocaleString('es-MX')} puntos · faltan ${1000 - pts % 1000} para el nivel ${nivel + 1}</span></div>
        <div><small>Partidas</small><b>${app.jugadas()}</b></div>
      </section>
      <section class="jg-rejilla">${LISTA.map(j => {
        const ok = disponible(j.id), rec = app.record(j.id);
        return `<${ok ? `a href="#/juegos/${j.id}"` : 'div'} class="glass jg-card ${ok ? '' : 'off'}">
          <div class="jg-card-cab"><span class="burb">${ic(j.ic)}</span><span class="jg-et">${ok ? j.o : 'Falta contenido'}</span></div>
          <b>${j.t}</b><p>${j.d}</p>
          <div class="jg-card-pie"><span>${rec ? 'Récord: ' + rec.toLocaleString('es-MX') : 'Sin jugar todavía'}</span><span class="jg-ir">Jugar ${ic('chev')}</span></div>
        </${ok ? 'a' : 'div'}>`;
      }).join('')}</section>
    </div>`;
  }

  /* ---------------- Piezas comunes ---------------- */
  function marco(j, hud, ayuda) {
    vista.innerHTML = `<div class="col juego">
      <div class="jg-cab"><a class="chip" href="#/juegos">${ic('izq')} Juegos</a><b>${j.t}</b><span></span></div>
      <div class="jg-hud">${hud.map(h => `<div class="glass"><small>${h[0]}</small><b id="${h[1]}">${h[2]}</b></div>`).join('')}</div>
      ${ayuda ? `<p class="jg-ayuda">${ayuda}</p>` : ''}
      <div id="jgZona"></div>
    </div>`;
  }
  function fin(j, pts, ratio, detalle) {
    parar();
    pts = Math.max(50, Math.round(pts));
    const r = app.terminar(j.id, pts), est = ratio >= .8 ? 3 : ratio >= .5 ? 2 : 1;
    const msg = est === 3 ? '¡Excelente partida!' : est === 2 ? '¡Muy bien!' : '¡Buen intento! Cada partida te deja algo.';
    vista.innerHTML = `<div class="col juego entra"><div class="glass fin" style="margin-top:0">
      ${r.nuevo ? '<div class="sello si">Nuevo récord</div>' : ''}
      <div class="estrellas">${[1, 2, 3].map(k => `<span class="${k <= est ? 'on' : ''}" style="animation-delay:${k * .18}s">${ic('estrella')}</span>`).join('')}</div>
      <div class="jg-puntos">+${pts.toLocaleString('es-MX')}</div>
      <h2>${msg}</h2><p>${detalle}<br>Tu récord en ${j.t}: ${r.record.toLocaleString('es-MX')} puntos.</p>
      <div class="fila"><button class="btn" data-accion="jg-otra" data-id="${j.id}">${ic('reinicio')} Jugar otra vez</button><a class="btn sec" href="#/juegos">Otros juegos</a></div>
    </div></div>`;
    if (est >= 2) confeti();
  }

  /* ---------------- 1. Globos (ahorcado sin ahorcado) ---------------- */
  const COLG = ['#ff6b6b', '#ffd166', '#06d6a0', '#4dabf7', '#b197fc', '#ff9f1c'];
  function globos(j) {
    const sig = cola(palabras()), MAX = 6, total = Math.min(5, palabras().length);
    Object.assign(J, { pts: 0, n: 0, bien: 0, lock: false });
    marco(j, [['Puntos', 'jgPts', '0'], ['Palabra', 'jgR', '1/' + total], ['Globos', 'jgT', MAX]], 'Usa el teclado o toca las letras. Si te atoras, pide una pista.');
    const escena = () => {
      const estado = J.gano ? 'gano' : J.perdio ? 'perdio' : '';
      return `<svg class="globos ${estado}" viewBox="0 0 320 210" aria-hidden="true">
        <g class="racimo">${COLG.map((c, i) => {
          const x = 70 + i * 36, y = 44 + Math.abs(2.5 - i) * 9, ido = i >= MAX - J.fallos;
          return `<g class="globo ${ido ? (i === MAX - J.fallos && J.recien ? 'pop' : 'ido') : ''}" style="--d:${i * .25}s">
            <path class="hilo" d="M${x} ${y + 24} Q${(x + 160) / 2} ${y + 70} 160 150"/>
            <ellipse cx="${x}" cy="${y}" rx="17" ry="22" fill="${c}"/><path d="M${x - 4} ${y + 22}h8l-4 6z" fill="${c}"/>
            <ellipse cx="${x - 6}" cy="${y - 8}" rx="4" ry="7" fill="#fff" opacity=".45"/></g>`;
        }).join('')}
        <g class="bicho"><circle cx="160" cy="168" r="22"/><circle class="ojo" cx="152" cy="163" r="3.200"/><circle class="ojo" cx="168" cy="163" r="3.200"/>
          <path class="boca" d="${J.perdio ? 'M151 178q9-7 18 0' : 'M151 174q9 8 18 0'}"/></g></g>
      </svg>`;
    };
    const pinta = () => {
      const letras = [...J.w].map((c, i) => { const v = J.usadas.has(J.p[i]) || J.perdio; return `<span class="${v ? 'on' : ''} ${J.perdio && !J.usadas.has(J.p[i]) ? 'rev' : ''}">${v ? c.toUpperCase() : ''}</span>`; }).join('');
      $('#jgZona').innerHTML = `<section class="glass pregunta globos-caja">${escena()}
        <div class="uni">Pista</div><h2>${J.q.q}</h2>
        <div class="oculta">${letras}</div>
        <div class="teclado">${'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map(l => `<button data-accion="jg-letra" data-l="${l}" class="${J.usadas.has(l) ? (J.p.includes(l) ? 'ok' : 'no') : ''}" ${J.usadas.has(l) || J.lock ? 'disabled' : ''}>${l}</button>`).join('')}</div>
        <button class="btn sec jg-pista" data-accion="jg-pista" ${J.lock || J.pistas >= 2 ? 'disabled' : ''}>${ic('foco')} Dame una letra (${2 - J.pistas})</button></section>`;
      pon('jgT', MAX - J.fallos); J.recien = false;
    };
    const nueva = () => { J.q = sig(); J.w = J.q.ok; J.p = plano(J.w); J.usadas = new Set(); J.fallos = 0; J.pistas = 0; J.gano = J.perdio = false; J.lock = false; J.n++; pon('jgR', J.n + '/' + total); pinta(); };
    const cierre = () => J.n >= total ? fin(j, J.pts, J.bien / total, `Salvaste ${J.bien} de ${total} palabras.`) : nueva();
    J.letra = (l, esPista) => {
      if (J.lock || J.usadas.has(l) || !/^[A-Z]$/.test(l)) return;
      J.usadas.add(l);
      if (!J.p.includes(l)) { J.fallos++; J.recien = true; }
      if ([...J.p].every(c => J.usadas.has(c))) {
        J.lock = true; J.gano = true; J.bien++; J.pts += 120 + (MAX - J.fallos) * 20 - J.pistas * 20; pon('jgPts', J.pts); pinta(); aviso(animo());
        return luego(1500, cierre);
      }
      if (J.fallos >= MAX) { J.lock = true; J.perdio = true; J.pts += 20; pon('jgPts', J.pts); pinta(); aviso('Era «' + J.w + '»', false); return luego(2200, cierre); }
      pinta(); if (esPista) aviso('Pista: ' + l);
    };
    J.pista = () => { if (J.lock || J.pistas >= 2) return; const f = [...new Set(J.p)].filter(c => !J.usadas.has(c)); if (!f.length) return; J.pistas++; J.letra(f[Math.floor(Math.random() * f.length)], true); };
    J.tecla = e => { if (!e.ctrlKey && !e.metaKey && e.key.length === 1) J.letra(plano(e.key)); };
    addEventListener('keydown', J.tecla);
    nueva();
  }

  /* ---------------- 2. Memorama ---------------- */
  function memorama(j) {
    const pares = barajar(paresCortos()).slice(0, 6);
    const cartas = barajar(pares.flatMap((p, k) => [{ k, t: 'P', tx: p.q }, { k, t: 'R', tx: p.ok }]));
    Object.assign(J, { mov: 0, hechas: 0, abiertas: [], lock: false });
    marco(j, [['Parejas', 'jgR', '0/' + pares.length], ['Intentos', 'jgT', '0'], ['Puntos', 'jgPts', '0']], 'Cada pregunta (P) tiene su respuesta (R). Encuéntralas.');
    $('#jgZona').innerHTML = `<div class="memo">${cartas.map((c, i) => `<button class="memo-carta" data-accion="jg-memo" data-i="${i}" aria-label="Carta ${i + 1}">
      <span class="memo-in"><span class="glass memo-dorso">${ic('matraz')}</span><span class="glass memo-frente ${c.t === 'R' ? 'resp' : ''}"><i>${c.t}</i>${c.tx}</span></span></button>`).join('')}</div>`;
    J.memo = (i, el) => {
      if (J.lock || el.classList.contains('arriba') || el.classList.contains('hecha')) return;
      el.classList.add('arriba'); J.abiertas.push({ i, el });
      if (J.abiertas.length < 2) return;
      J.mov++; pon('jgT', J.mov);
      const [a, b] = J.abiertas; J.abiertas = [];
      if (cartas[a.i].k === cartas[b.i].k) {
        J.hechas++; pon('jgR', J.hechas + '/' + pares.length); pon('jgPts', J.hechas * 100);
        luego(350, () => { a.el.classList.add('hecha'); b.el.classList.add('hecha'); aviso(animo()); });
        if (J.hechas === pares.length) {
          const extra = J.mov - pares.length, pts = Math.max(300, 1200 - extra * 50);
          luego(1100, () => fin(j, pts, extra <= 4 ? 1 : extra <= 9 ? .6 : .3, `Encontraste las ${pares.length} parejas en ${J.mov} intentos.`));
        }
      } else { J.lock = true; luego(1100, () => { a.el.classList.remove('arriba'); b.el.classList.remove('arriba'); J.lock = false; }); }
    };
  }

  /* ---------------- 3. Sopa de letras ---------------- */
  function sopa(j) {
    const N = 10, DIR = [[0, 1], [1, 0], [1, 1], [-1, 1]];
    const g = Array.from({ length: N }, () => Array(N).fill(''));
    const puestas = [];
    for (const c of barajar(palabras().filter(x => x.ok.length <= N))) {
      if (puestas.length >= 6) break;
      const w = plano(c.ok);
      for (let t = 0; t < 120; t++) {
        const [dr, dc] = DIR[Math.floor(Math.random() * DIR.length)], r = Math.floor(Math.random() * N), k = Math.floor(Math.random() * N);
        const fr = r + dr * (w.length - 1), fc = k + dc * (w.length - 1);
        if (fr < 0 || fr >= N || fc < 0 || fc >= N) continue;
        if (![...w].every((ch, i) => { const v = g[r + dr * i][k + dc * i]; return !v || v === ch; })) continue;
        [...w].forEach((ch, i) => { g[r + dr * i][k + dc * i] = ch; });
        puestas.push({ w, c, hecha: false }); break;
      }
    }
    for (let r = 0; r < N; r++) for (let k = 0; k < N; k++) if (!g[r][k]) g[r][k] = 'ABCDEFGHIJKLMNOPRSTUV'[Math.floor(Math.random() * 21)];
    Object.assign(J, { ini: null, hechas: 0, t0: Date.now() });
    marco(j, [['Encontradas', 'jgR', '0/' + puestas.length], ['Puntos', 'jgPts', '0'], ['Tiempo', 'jgT', '0:00']], 'Toca la primera letra de una palabra y luego la última. Pueden ir en horizontal, vertical o diagonal.');
    const lista = () => puestas.map(p => `<li class="${p.hecha ? 'hecha' : ''}"><b>${p.hecha ? p.c.ok : p.w.length + ' letras'}</b><span>${p.c.q}</span></li>`).join('');
    $('#jgZona').innerHTML = `<div class="sopa-caja"><div class="glass sopa" style="--n:${N}">${g.map((f, r) => f.map((ch, k) => `<button data-accion="jg-sopa" data-r="${r}" data-k="${k}">${ch}</button>`).join('')).join('')}</div>
      <ul class="glass sopa-lista" id="sopaLista">${lista()}</ul></div>`;
    const celda = (r, k) => $(`.sopa button[data-r="${r}"][data-k="${k}"]`);
    J.sopa = (r, k, el) => {
      if (!J.ini) { J.ini = { r, k, el }; el.classList.add('sel'); return; }
      const a = J.ini; J.ini = null; a.el.classList.remove('sel');
      const dr = r - a.r, dk = k - a.k, len = Math.max(Math.abs(dr), Math.abs(dk));
      if (!len || (dr && dk && Math.abs(dr) !== Math.abs(dk))) { if (len) { J.ini = { r, k, el }; el.classList.add('sel'); } return; }
      const sr = Math.sign(dr), sk = Math.sign(dk), cs = Array.from({ length: len + 1 }, (_, i) => celda(a.r + sr * i, a.k + sk * i));
      const txt = cs.map(c => c.textContent).join(''), rev = [...txt].reverse().join('');
      const p = puestas.find(x => !x.hecha && (x.w === txt || x.w === rev));
      if (!p) { cs.forEach(c => { c.classList.add('mal'); setTimeout(() => c.classList.remove('mal'), 450); }); return; }
      p.hecha = true; J.hechas++; cs.forEach(c => c.classList.add('hecha'));
      pon('jgR', J.hechas + '/' + puestas.length); pon('jgPts', J.hechas * 150); pon('sopaLista', lista()); aviso(animo());
      if (J.hechas === puestas.length) { const s = Math.round((Date.now() - J.t0) / 1000); luego(900, () => fin(j, J.hechas * 150 + Math.max(0, 300 - s), 1, `Encontraste las ${puestas.length} palabras en ${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}.`)); }
    };
    J.iv = setInterval(() => { const s = Math.round((Date.now() - J.t0) / 1000); pon('jgT', Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0')); }, 500);
  }

  /* ---------------- 4. Burbujas ---------------- */
  function burbujas(j) {
    const sig = cola(paraBurbujas()), RONDAS = 8;
    Object.assign(J, { pts: 0, n: 0, bien: 0, racha: 0, lock: false });
    marco(j, [['Puntos', 'jgPts', '0'], ['Ronda', 'jgR', '1/' + RONDAS], ['Racha', 'jgT', '0']], 'Revienta la burbuja con la respuesta correcta. Si fallas, solo desaparece: sigue intentando.');
    const nueva = () => {
      J.q = sig(); J.ops = barajar(J.q.ops); J.lock = false; J.fallo = false; J.n++; pon('jgR', J.n + '/' + RONDAS);
      $('#jgZona').innerHTML = `<section class="glass burb-caja"><h2>${J.q.q}</h2>
        <div class="burb-mar">${J.ops.map((o, k) => `<button class="burbuja" data-accion="jg-burb" data-k="${k}" style="left:${3 + k * 24.500}%;animation-duration:${(9 + Math.random() * 4).toFixed(1)}s;animation-delay:-${(Math.random() * 6).toFixed(1)}s"><span>${o}</span></button>`).join('')}</div></section>`;
    };
    J.burb = (k, el) => {
      if (J.lock || el.classList.contains('fuera')) return;
      if (J.ops[k] === J.q.ok) {
        J.lock = true; el.classList.add('pum'); $$('.burbuja').forEach(b => b !== el && b.classList.add('fuera'));
        if (!J.fallo) { J.racha++; J.bien++; } else J.racha = 0;
        J.pts += (J.fallo ? 50 : 100) + Math.min(J.racha, 5) * 10; pon('jgPts', J.pts); pon('jgT', J.racha); aviso(animo());
        luego(750, () => J.n >= RONDAS ? fin(j, J.pts, J.bien / RONDAS, `Acertaste ${J.bien} de ${RONDAS} a la primera.`) : nueva());
      } else { J.fallo = true; el.classList.add('fuera'); aviso('Esa no', false); }
    };
    nueva();
  }

  /* ---------------- 5. Verdadero o falso (sin reloj) ---------------- */
  function vf(j) {
    const sig = cola(banco()), TOTAL = 10;
    Object.assign(J, { pts: 0, racha: 0, ok: 0, n: 0, lock: false });
    marco(j, [['Puntos', 'jgPts', '0'], ['Tarjeta', 'jgR', '1/' + TOTAL], ['Racha', 'jgT', '0']], 'Sin prisa. También puedes usar las flechas ← y → del teclado.');
    const nueva = () => {
      J.q = sig(); J.verdad = Math.random() < .5; J.lock = false; J.n++; pon('jgR', J.n + '/' + TOTAL);
      J.muestra = J.verdad ? J.q.ok : barajar(J.q.ops.filter(o => o !== J.q.ok))[0];
      $('#jgZona').innerHTML = `<section class="glass pregunta jg-entra vf"><h2>${J.q.q}</h2>
        <div class="vf-resp"><small>¿Esta es la respuesta?</small><b>${J.muestra}</b></div>
        <div class="vf-bot"><button class="no" data-accion="jg-vf" data-v="0">${ic('x')} Falso</button><button class="si" data-accion="jg-vf" data-v="1">${ic('check')} Verdadero</button></div>
        <p class="vf-nota" id="jgNota"></p></section>`;
    };
    J.vf = v => {
      if (J.lock) return; J.lock = true;
      const bien = !!v === J.verdad, z = $('#jgZona .pregunta');
      if (bien) { J.racha++; J.ok++; J.pts += 60 + Math.min(J.racha, 5) * 10; aviso(animo()); } else { J.racha = 0; J.pts += 10; pon('jgNota', 'La correcta es: <b>' + J.q.ok + '</b>'); }
      if (z) z.classList.add(bien ? 'acierto' : 'fallo', v ? 'sale-der' : 'sale-izq');
      pon('jgPts', J.pts); pon('jgT', J.racha);
      luego(bien ? 650 : 1900, () => J.n >= TOTAL ? fin(j, J.pts, J.ok / TOTAL, `Acertaste ${J.ok} de ${TOTAL} tarjetas.`) : nueva());
    };
    J.tecla = e => { if (e.key === 'ArrowLeft') J.vf(0); else if (e.key === 'ArrowRight') J.vf(1); };
    addEventListener('keydown', J.tecla);
    nueva();
  }

  /* ---------------- 6. Reto contrarreloj (opcional) ---------------- */
  function reto(j) {
    const sig = cola(banco());
    Object.assign(J, { pts: 0, racha: 0, ok: 0, n: 0, fin: Date.now() + 60000, lock: false });
    marco(j, [['Puntos', 'jgPts', '0'], ['Tiempo', 'jgT', '60'], ['Racha', 'jgR', '×1.0']]);
    $('.jg-hud').insertAdjacentHTML('afterend', '<div class="jg-barra"><i id="jgBarra"></i></div>');
    const nueva = () => {
      J.q = sig(); J.ops = barajar(J.q.ops); J.t0 = Date.now(); J.lock = false;
      $('#jgZona').innerHTML = `<section class="glass pregunta jg-entra"><h2>${J.q.q}</h2><div class="opciones">${J.ops.map((o, k) => `<button class="opcion" data-accion="jg-op" data-k="${k}"><span class="l">${'ABCD'[k]}</span><span>${o}</span></button>`).join('')}</div></section>`;
    };
    J.op = k => {
      if (J.lock || !J.ops[k]) return; J.lock = true; J.n++;
      const bien = J.ops[k] === J.q.ok;
      if (bien) { const mult = 1 + Math.min(J.racha, 5) * .2; J.pts += Math.round((100 + Math.max(0, 50 - Math.floor((Date.now() - J.t0) / 100))) * mult); J.racha++; J.ok++; } else J.racha = 0;
      $$('#jgZona .opcion').forEach((b, i) => { b.classList.add('bloq'); if (J.ops[i] === J.q.ok) b.classList.add('ok'); else if (i === k) b.classList.add('no'); });
      pon('jgPts', J.pts); pon('jgR', '×' + (1 + Math.min(J.racha, 5) * .2).toFixed(1));
      luego(bien ? 380 : 1000, nueva);
    };
    J.iv = setInterval(() => {
      const s = (J.fin - Date.now()) / 1000, b = $('#jgBarra'); pon('jgT', Math.max(0, Math.ceil(s))); if (b) b.style.width = Math.max(0, s / 60 * 100) + '%';
      if (s <= 0) fin(j, J.pts, J.n ? J.ok / J.n : 0, `${J.ok} aciertos de ${J.n} en 60 segundos.`);
    }, 150);
    nueva();
  }

  const MOTOR = { globos, memorama, sopa, burbujas, vf, reto };
  function jugar(id) {
    parar();
    const j = LISTA.find(x => x.id === id);
    if (!j || !disponible(id)) return menu();
    J = { id, vivo: true };
    MOTOR[id](j);
    app.alLimpiar(() => { parar(); J = null; });
  }

  Object.assign(acciones, {
    'jg-op': el => { if (J && J.op) J.op(+el.dataset.k); },
    'jg-vf': el => { if (J && J.vf) J.vf(+el.dataset.v); },
    'jg-letra': el => { if (J && J.letra) J.letra(el.dataset.l); },
    'jg-pista': () => { if (J && J.pista) J.pista(); },
    'jg-memo': el => { if (J && J.memo) J.memo(+el.dataset.i, el); },
    'jg-sopa': el => { if (J && J.sopa) J.sopa(+el.dataset.r, +el.dataset.k, el); },
    'jg-burb': el => { if (J && J.burb) J.burb(+el.dataset.k, el); },
    'jg-otra': el => jugar(el.dataset.id)
  });

  return { menu, jugar, existe: id => LISTA.some(x => x.id === id), lista: LISTA };
};
