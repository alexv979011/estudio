/* Simuladores interactivos: gases, configuración electrónica, masa molar y pH.
   Se insertan en un tema con <div data-widget="gas|config|molar|ph"></div> */
(() => {
  'use strict';
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];

  /* ==========================================================
     Widgets interactivos (se insertan con <div data-widget="…">)
     ========================================================== */
  const SIMB = 'H He Li Be B C N O F Ne Na Mg Al Si P S Cl Ar K Ca Sc Ti V Cr Mn Fe Co Ni Cu Zn Ga Ge As Se Br Kr Rb Sr Y Zr Nb Mo Tc Ru Rh Pd Ag Cd In Sn Sb Te I Xe Cs Ba La Ce Pr Nd Pm Sm Eu Gd Tb Dy Ho Er Tm Yb Lu Hf Ta W Re Os Ir Pt Au Hg Tl Pb Bi Po At Rn Fr Ra Ac Th Pa U Np Pu Am Cm Bk Cf Es Fm Md No Lr Rf Db Sg Bh Hs Mt Ds Rg Cn Nh Fl Mc Lv Ts Og'.split(' ');
  const MASA = { H: 1.008, He: 4.003, Li: 6.94, Be: 9.012, B: 10.81, C: 12.011, N: 14.007, O: 15.999, F: 18.998, Ne: 20.180, Na: 22.990, Mg: 24.305, Al: 26.982, Si: 28.086, P: 30.974, S: 32.06, Cl: 35.45, Ar: 39.948, K: 39.098, Ca: 40.078, Sc: 44.956, Ti: 47.867, V: 50.942, Cr: 51.996, Mn: 54.938, Fe: 55.845, Co: 58.933, Ni: 58.693, Cu: 63.546, Zn: 65.38, Ga: 69.723, Ge: 72.630, As: 74.922, Se: 78.971, Br: 79.904, Kr: 83.798, Rb: 85.468, Sr: 87.62, Ag: 107.868, Cd: 112.414, Sn: 118.710, Sb: 121.760, I: 126.904, Xe: 131.293, Cs: 132.905, Ba: 137.327, W: 183.84, Pt: 195.084, Au: 196.967, Hg: 200.592, Pb: 207.2, Bi: 208.980, U: 238.029 };

  const W = {};

  /* --- Simulador de las leyes de los gases --- */
  W.gas = el => {
    let ley = 'boyle';
    const L = {
      boyle: { n: 'Boyle', min: 0.5, max: 4, paso: 0.1, ini: 1, et: 'Presión', calc: x => ({ P: x, V: 4 / x, T: 300 }), k: 'P · V = 4.0 atm·L', nota: 'Temperatura constante. Al subir la presión, el volumen baja en la misma proporción: es una relación inversa.' },
      charles: { n: 'Charles', min: 100, max: 600, paso: 10, ini: 300, et: 'Temperatura', calc: x => ({ P: 1, V: 4 * x / 300, T: x }), k: 'V / T = 0.0133 L/K', nota: 'Presión constante. Al calentar, las partículas se mueven más rápido y el gas se expande: relación directa.' },
      gay: { n: 'Gay-Lussac', min: 100, max: 600, paso: 10, ini: 300, et: 'Temperatura', calc: x => ({ P: x / 300, V: 4, T: x }), k: 'P / T = 0.0033 atm/K', nota: 'Volumen constante (recipiente rígido). Al calentar, los choques son más fuertes y la presión sube: relación directa.' }
    };
    el.className = 'w';
    el.innerHTML = `<div class="w-tit">Simulador · Leyes de los gases</div>
      <div class="seg">${Object.keys(L).map(k => `<button data-ley="${k}">${L[k].n}</button>`).join('')}</div>
      <div class="gas-cuerpo">
        <div class="cilindro"><div class="gasbox">${Array.from({ length: 16 }, () => `<i style="left:${6 + Math.random() * 82}%;top:${6 + Math.random() * 80}%;animation-delay:-${(Math.random() * 2).toFixed(2)}s"></i>`).join('')}</div></div>
        <div>
          <div class="lecturas"><div data-k="P"><small>Presión</small><b></b></div><div data-k="V"><small>Volumen</small><b></b></div><div data-k="T"><small>Temperatura</small><b></b></div></div>
          <input type="range" aria-label="Variable">
          <div class="calc" style="color:var(--accent);font-weight:700" data-k="const"></div>
          <p class="w-nota"></p>
        </div>
      </div>`;
    const rango = $('input', el), caja = $('.gasbox', el);
    const pinta = () => {
      const d = L[ley], v = d.calc(+rango.value), varia = ley === 'boyle' ? 'P' : 'T';
      $('[data-k=P] b', el).innerHTML = v.P.toFixed(2) + ' <small>atm</small>';
      $('[data-k=V] b', el).innerHTML = v.V.toFixed(2) + ' <small>L</small>';
      $('[data-k=T] b', el).innerHTML = Math.round(v.T) + ' <small>K</small>';
      $$('.lecturas div', el).forEach(x => x.classList.toggle('var', x.dataset.k === varia));
      caja.style.height = (v.V / 8 * 100) + '%';
      caja.style.setProperty('--vel', (1.3 * Math.sqrt(300 / v.T)).toFixed(2) + 's');
      caja.style.background = `color-mix(in srgb, var(--accent) ${Math.min(55, 8 + v.P * 11)}%, transparent)`;
      $('[data-k=const]', el).textContent = d.k + ' (constante)';
      $('.w-nota', el).textContent = 'Mueve ' + (varia === 'P' ? 'la presión' : 'la temperatura') + '. ' + d.nota;
    };
    const pon = k => { ley = k; const d = L[k]; rango.min = d.min; rango.max = d.max; rango.step = d.paso; rango.value = d.ini; $$('.seg button', el).forEach(b => b.classList.toggle('on', b.dataset.ley === k)); pinta(); };
    el.addEventListener('click', e => { const b = e.target.closest('[data-ley]'); if (b) pon(b.dataset.ley); });
    rango.addEventListener('input', pinta);
    pon('boyle');
  };

  /* --- Configuración electrónica --- */
  W.config = el => {
    const ORD = ['1s', '2s', '2p', '3s', '3p', '4s', '3d', '4p', '5s', '4d', '5p', '6s', '4f', '5d', '6p', '7s', '5f', '6d', '7p'];
    const CAP = { s: 2, p: 6, d: 10, f: 14 }, LN = { s: 0, p: 1, d: 2, f: 3 };
    const EXC = { 24: { '4s': 1, '3d': 5 }, 29: { '4s': 1, '3d': 10 }, 42: { '5s': 1, '4d': 5 }, 47: { '5s': 1, '4d': 10 }, 79: { '6s': 1, '5d': 10 } };
    const NOBLE = [2, 10, 18, 36, 54, 86];
    const llena = z => { const c = []; let r = z; for (const o of ORD) { if (r <= 0) break; const e = Math.min(CAP[o[1]], r); c.push([o, e]); r -= e; } if (EXC[z]) c.forEach(x => { if (EXC[z][x[0]] !== undefined) x[1] = EXC[z][x[0]]; }); return c; };
    const txt = c => c.map(x => `${x[0]}<sup>${x[1]}</sup>`).join(' ');
    el.className = 'w';
    el.innerHTML = `<div class="w-tit">Constructor · Configuración electrónica</div>
      <label style="font-size:14px;color:var(--muted);font-weight:500">Número atómico (Z): <b id="zVal" style="color:var(--text)"></b></label>
      <input type="range" min="1" max="118" value="11" aria-label="Número atómico">
      <div class="cfg-salida"></div>`;
    const rango = $('input', el), out = $('.cfg-salida', el);
    const pinta = () => {
      const z = +rango.value, c = llena(z), nob = NOBLE.filter(n => n < z).pop();
      $('#zVal', el).textContent = z;
      const ult = c[c.length - 1], l = LN[ult[0][1]], orb = 2 * l + 1, e = ult[1];
      const cajas = Array.from({ length: orb }, (_, k) => (k < e ? '↑' : '') + (k < e - orb ? '↓' : ''));
      const m = e <= orb ? -l + e - 1 : -l + e - orb - 1, s = e <= orb ? '+½' : '−½';
      const nMax = Math.max(...c.map(x => +x[0][0])), val = c.filter(x => +x[0][0] === nMax).reduce((n, x) => n + x[1], 0);
      let kernel = '';
      if (nob) { const k = llena(nob).length; kernel = `<div><small style="color:var(--muted);font-weight:600">CON KERNEL</small><div class="cfg-linea">[${SIMB[nob - 1]}] ${txt(c.slice(k))}</div></div>`; }
      out.innerHTML = `<div class="cfg-el"><div class="simb"><small>${z}</small>${SIMB[z - 1]}</div><div><div class="cfg-linea">${txt(c)}</div></div></div>
        ${kernel}
        <div class="lecturas"><div><small>Nivel externo</small><b>n = ${nMax}</b></div><div><small>e⁻ en ese nivel</small><b>${val}</b></div><div><small>Último subnivel</small><b>${ult[0]}<sup>${e}</sup></b></div></div>
        <div class="orbitales"><div class="grupo"><div class="cajas">${cajas.map(x => `<span>${x}</span>`).join('')}</div>Diagrama de orbitales de ${ult[0]} (regla de Hund)</div></div>
        <p class="w-nota">Electrón diferencial: n = ${ult[0][0]}, l = ${l}, m = ${m > 0 ? '+' + m : m}, s = ${s}.${EXC[z] ? ' Este elemento es una excepción a la regla de las diagonales: gana estabilidad con el subnivel d semilleno o lleno.' : z > 56 ? ' En elementos pesados hay más excepciones; aquí se muestra la predicción de la regla.' : ''}</p>`;
    };
    rango.addEventListener('input', pinta); pinta();
  };

  /* --- Masa molar y composición porcentual --- */
  W.molar = el => {
    function analiza(f) {
      const tot = {};
      const partes = f.replace(/\s+/g, '').split(/[·.*]/).filter(Boolean);
      for (let p of partes) {
        let mult = 1; const mm = p.match(/^(\d+)(.*)$/); if (mm) { mult = +mm[1]; p = mm[2]; }
        let i = 0;
        const grupo = () => {
          const g = {};
          while (i < p.length && p[i] !== ')' && p[i] !== ']') {
            let sub;
            if (p[i] === '(' || p[i] === '[') { i++; sub = grupo(); if (i >= p.length) throw 0; i++; }
            else { const m = p.slice(i).match(/^[A-Z][a-z]?/); if (!m || !MASA[m[0]]) throw 0; i += m[0].length; sub = { [m[0]]: 1 }; }
            const n = p.slice(i).match(/^\d+/); let k = 1; if (n) { k = +n[0]; i += n[0].length; }
            for (const e in sub) g[e] = (g[e] || 0) + sub[e] * k;
          }
          return g;
        };
        const g = grupo(); if (i < p.length) throw 0;
        for (const e in g) tot[e] = (tot[e] || 0) + g[e] * mult;
      }
      if (!Object.keys(tot).length) throw 0;
      return tot;
    }
    el.className = 'w';
    el.innerHTML = `<div class="w-tit">Calculadora · Masa molar y composición porcentual</div>
      <input class="campo" value="H2SO4" spellcheck="false" autocomplete="off" aria-label="Fórmula química">
      <div class="fila" style="margin-top:10px">${['H2O', 'CO2', 'NaCl', 'Ca(OH)2', 'C6H12O6', 'Al2(SO4)3', 'CuSO4·5H2O'].map(f => `<button class="chip" data-f="${f}">${f.replace(/(\d+)/g, '<sub>$1</sub>').replace('·<sub>5</sub>', '·5')}</button>`).join('')}</div>
      <div class="salida" style="margin-top:18px"></div>`;
    const inp = $('input', el), out = $('.salida', el);
    const pinta = () => {
      try {
        const t = analiza(inp.value), M = Object.keys(t).reduce((n, e) => n + t[e] * MASA[e], 0);
        out.innerHTML = `<div class="grande">${M.toFixed(2)} <small>g/mol</small></div>
          <div class="barras">${Object.keys(t).map(e => { const p = t[e] * MASA[e] / M * 100; return `<div class="barra-el"><span>${e}<sub>${t[e] > 1 ? t[e] : ''}</sub></span><span class="pista"><i style="width:${p}%"></i></span><span class="v">${p.toFixed(1)} %</span></div>`; }).join('')}</div>
          <p class="w-nota">${Object.keys(t).map(e => `${t[e]} × ${MASA[e].toFixed(2)}`).join(' + ')} = ${M.toFixed(2)} g/mol. Un mol de esta sustancia tiene esa masa y contiene 6.022 × 10²³ unidades.</p>`;
      } catch (e) { out.innerHTML = '<p class="w-nota">Escribe una fórmula válida respetando mayúsculas y minúsculas, por ejemplo <b>Ca(OH)2</b> o <b>CuSO4·5H2O</b>.</p>'; }
    };
    inp.addEventListener('input', pinta);
    el.addEventListener('click', e => { const b = e.target.closest('[data-f]'); if (b) { inp.value = b.dataset.f; pinta(); } });
    pinta();
  };

  /* --- Escala de pH --- */
  W.ph = el => {
    const EJ = [[0, 'Ácido de batería'], [1.5, 'Jugo gástrico'], [2.3, 'Jugo de limón'], [3, 'Vinagre'], [4, 'Jugo de tomate'], [5, 'Café negro'], [6.5, 'Leche'], [7, 'Agua pura'], [7.4, 'Sangre'], [8.3, 'Bicarbonato de sodio'], [9.5, 'Pasta de dientes'], [10.5, 'Leche de magnesia'], [11.5, 'Amoniaco doméstico'], [12.6, 'Blanqueador'], [14, 'Sosa cáustica']];
    const sci = x => { const e = Math.floor(Math.log10(x) + 1e-9), m = x / Math.pow(10, e); return `${m.toFixed(1)} × 10<sup>${e}</sup>`; };
    el.className = 'w';
    el.innerHTML = `<div class="w-tit">Explorador · Escala de pH</div>
      <div class="ph-top"><div class="ph-gota"></div><div><h4></h4><p></p></div></div>
      <div class="ph-escala"></div>
      <input type="range" min="0" max="14" step="0.1" value="7" aria-label="pH">
      <div class="ph-num">${Array.from({ length: 15 }, (_, k) => `<span>${k}</span>`).join('')}</div>
      <div class="lecturas" style="margin-top:16px"><div><small>[H⁺] mol/L</small><b data-k="h" style="font-size:17px"></b></div><div><small>[OH⁻] mol/L</small><b data-k="oh" style="font-size:17px"></b></div><div><small>pOH</small><b data-k="poh"></b></div></div>
      <p class="w-nota">Cada unidad de pH equivale a un cambio de 10 veces en la concentración de H⁺. Siempre se cumple pH + pOH = 14.</p>`;
    const rango = $('input', el);
    const pinta = () => {
      const p = +rango.value, tono = p <= 7 ? p / 7 * 125 : 125 + (p - 7) / 7 * 150;
      const cerca = EJ.reduce((a, b) => Math.abs(b[0] - p) < Math.abs(a[0] - p) ? b : a);
      $('.ph-gota', el).style.background = `hsl(${tono} 78% 48%)`; $('.ph-gota', el).textContent = p.toFixed(1);
      $('h4', el).textContent = p < 6.95 ? (p < 3 ? 'Ácido fuerte' : 'Ácido') : p > 7.05 ? (p > 11 ? 'Base fuerte' : 'Básico (alcalino)') : 'Neutro';
      $('.ph-top p', el).textContent = 'Parecido a: ' + cerca[1].toLowerCase() + ' (pH ≈ ' + cerca[0] + ')';
      $('[data-k=h]', el).innerHTML = sci(Math.pow(10, -p)); $('[data-k=oh]', el).innerHTML = sci(Math.pow(10, p - 14)); $('[data-k=poh]', el).textContent = (14 - p).toFixed(1);
    };
    rango.addEventListener('input', pinta); pinta();
  };

  window.montarWidgets = function (raiz) { $$('[data-widget]', raiz).forEach(el => { const f = W[el.dataset.widget]; if (f) f(el); }); };
})();
