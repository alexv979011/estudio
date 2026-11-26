/* Matemáticas I · Unidad 2 · El campo ordenado de los números reales */
window.UNIDADES = window.UNIDADES || [];
window.UNIDADES.push({
  materia: 'mate',
  id: 2,
  titulo: 'El campo ordenado de los números reales',
  corto: 'Números reales',
  color: '#bf5af2',
  resultado: 'operar con conjuntos, clasificar números, reconocer las propiedades de campo y de orden y aplicar la jerarquía de operaciones.',
  temas: [
    {
      t: 'Conjuntos y subconjuntos', min: 7,
      sub: 'Unión, intersección, diferencia y complemento.',
      html: `
<h3>Definiciones</h3>
<p>Un <strong>conjunto</strong> es una colección bien definida de objetos, llamados <strong>elementos</strong>. Se nombra con mayúscula y sus elementos van entre llaves.</p>
<ul>
  <li><strong>Pertenencia:</strong> 3 ∈ A significa «3 es elemento de A»; 7 ∉ A, que no lo es.</li>
  <li><strong>Por extensión:</strong> se listan los elementos. A = {2, 4, 6, 8}.</li>
  <li><strong>Por comprensión:</strong> se da la regla. A = {x | x es par y 1 &lt; x &lt; 9}.</li>
  <li><strong>Conjunto universo (U):</strong> contiene todos los elementos que se consideran.</li>
  <li><strong>Conjunto vacío (∅):</strong> no tiene elementos.</li>
  <li><strong>Subconjunto:</strong> A ⊂ B si todos los elementos de A están en B.</li>
</ul>

<h3>Operaciones</h3>
<div class="tabla"><table>
  <tr><th>Operación</th><th>Símbolo</th><th>Resultado</th></tr>
  <tr><td><b>Unión</b></td><td>A ∪ B</td><td>Elementos que están en A, en B o en ambos</td></tr>
  <tr><td><b>Intersección</b></td><td>A ∩ B</td><td>Elementos que están en A y en B a la vez</td></tr>
  <tr><td><b>Diferencia</b></td><td>A − B</td><td>Elementos de A que no están en B</td></tr>
  <tr><td><b>Complemento</b></td><td>A′</td><td>Elementos del universo que no están en A</td></tr>
</table></div>
<figure class="fig"><svg viewBox="0 0 520 190" width="520">
  <rect class="g-caja" x="10" y="10" width="500" height="170" rx="16" style="stroke:var(--tenue)"/>
  <circle cx="205" cy="95" r="68" style="fill:color-mix(in srgb,var(--accent) 22%,transparent);stroke:var(--accent);stroke-width:2"/>
  <circle cx="315" cy="95" r="68" style="fill:color-mix(in srgb,var(--accent) 22%,transparent);stroke:var(--accent);stroke-width:2"/>
  <g class="g-tx" font-size="17" text-anchor="middle"><text x="165" y="100">1</text><text x="260" y="78">2, 3</text><text x="260" y="118">4, 5</text><text x="355" y="100">6</text><text x="448" y="60">7, 8, 9</text></g>
  <g class="g-tx2" font-size="14"><text x="150" y="40">A</text><text x="360" y="40">B</text><text x="26" y="34">U</text></g>
</svg><figcaption>A = {1, 2, 3, 4, 5} y B = {2, 3, 4, 5, 6} dentro de U = {1, …, 9}. La zona común es A ∩ B.</figcaption></figure>

<h3>Problema tipo de examen</h3>
<div class="ejemplo"><span class="et">Primer parcial</span>Sea U = {1, 2, 3, 4, 5, 6, 7, 8, 9}, A = {1, 2, 3, 4, 5} y B = {2, 3, 4, 5, 6}. Definir (A ∩ B)′ ∩ A.
<p><b>Paso 1.</b> Lo de adentro: A ∩ B = {2, 3, 4, 5}.</p>
<p><b>Paso 2.</b> Su complemento respecto de U: (A ∩ B)′ = {1, 6, 7, 8, 9}.</p>
<p><b>Paso 3.</b> Intersección con A: de {1, 6, 7, 8, 9} solo el 1 está en A.</p>
<p class="calc"><b>(A ∩ B)′ ∩ A = {1}</b></p></div>
<div class="clave"><span class="et">Método</span>Trabaja de adentro hacia afuera, como con los paréntesis en aritmética, y escribe cada conjunto intermedio.</div>`
    },
    {
      t: 'Del conjunto de los naturales a los complejos', min: 5,
      sub: 'Cada conjunto de números contiene al anterior.',
      html: `
<h3>Los conjuntos de números</h3>
<div class="tabla"><table>
  <tr><th>Conjunto</th><th>Símbolo</th><th>Qué contiene</th><th>Ejemplos</th></tr>
  <tr><td><b>Naturales</b></td><td>ℕ</td><td>Los que sirven para contar</td><td>1, 2, 3, …</td></tr>
  <tr><td><b>Enteros</b></td><td>ℤ</td><td>Naturales, sus negativos y el cero</td><td>−3, 0, 7</td></tr>
  <tr><td><b>Racionales</b></td><td>ℚ</td><td>Los que se escriben como fracción a/b de enteros, con b ≠ 0</td><td>3/4, −2, 0.5, 0.333…</td></tr>
  <tr><td><b>Irracionales</b></td><td>𝕀</td><td>Decimales infinitos no periódicos; no son fracción</td><td>√2, π, e</td></tr>
  <tr><td><b>Reales</b></td><td>ℝ</td><td>Racionales e irracionales juntos</td><td>Toda la recta numérica</td></tr>
  <tr><td><b>Imaginarios</b></td><td></td><td>Raíces de números negativos; i = √−1, i² = −1</td><td>3i, −i</td></tr>
  <tr><td><b>Complejos</b></td><td>ℂ</td><td>Los de la forma a + bi</td><td>2 + 3i, 5, 4i</td></tr>
</table></div>
<figure class="fig">
  <div class="flujo"><div class="nodo">ℕ<small>naturales</small></div><div class="fl">⊂</div><div class="nodo">ℤ<small>enteros</small></div><div class="fl">⊂</div><div class="nodo">ℚ<small>racionales</small></div><div class="fl">⊂</div><div class="nodo a">ℝ<small>reales</small></div><div class="fl">⊂</div><div class="nodo">ℂ<small>complejos</small></div></div>
  <div class="pie-fig">Los reales son la unión de racionales e irracionales. Todo real es un complejo con parte imaginaria cero.</div>
</figure>

<h3>Cómo clasificar un número</h3>
<div class="ejemplo"><span class="et">Ejemplos</span>
<p><b>−5:</b> entero, racional y real (no es natural).</p>
<p><b>0.75:</b> es 3/4, así que es racional y real.</p>
<p><b>√2:</b> irracional y real.</p>
<p><b>√−9 = 3i:</b> imaginario; es complejo pero no real.</p></div>
<div class="clave"><span class="et">Racional o irracional</span>Si el decimal termina o se repite periódicamente, es racional. Si sigue sin fin y sin patrón, es irracional.</div>`
    },
    {
      t: 'Propiedades de campo y de orden', min: 6,
      sub: 'Las reglas del juego de los números reales.',
      html: `
<h3>Propiedades de campo</h3>
<p>Los números reales, con la suma y la multiplicación, forman un <strong>campo</strong> porque cumplen estas propiedades para cualesquiera a, b y c:</p>
<div class="tabla"><table>
  <tr><th>Propiedad</th><th>Suma</th><th>Multiplicación</th></tr>
  <tr><td><b>Cerradura</b></td><td>a + b es real</td><td>a · b es real</td></tr>
  <tr><td><b>Conmutativa</b></td><td>a + b = b + a</td><td>a · b = b · a</td></tr>
  <tr><td><b>Asociativa</b></td><td>(a + b) + c = a + (b + c)</td><td>(a · b) · c = a · (b · c)</td></tr>
  <tr><td><b>Elemento neutro</b></td><td>a + 0 = a</td><td>a · 1 = a</td></tr>
  <tr><td><b>Elemento inverso</b></td><td>a + (−a) = 0</td><td>a · (1/a) = 1, con a ≠ 0</td></tr>
  <tr><td><b>Distributiva</b></td><td colspan="2">a (b + c) = ab + ac</td></tr>
</table></div>
<div class="ejemplo"><span class="et">Identificar la propiedad</span>
<p>7 + 3 = 3 + 7 → conmutativa de la suma.</p>
<p>2 (x + 5) = 2x + 10 → distributiva.</p>
<p>8 + (−8) = 0 → inverso aditivo.</p>
<p>(1/4) · 4 = 1 → inverso multiplicativo.</p></div>

<h3>Propiedades de orden</h3>
<p>Además, los reales están <strong>ordenados</strong>: siempre se pueden comparar.</p>
<ul>
  <li><strong>Tricotomía:</strong> para dos reales a y b se cumple una y solo una: a &lt; b, a = b o a &gt; b.</li>
  <li><strong>Transitiva:</strong> si a &lt; b y b &lt; c, entonces a &lt; c.</li>
  <li><strong>Aditiva:</strong> si a &lt; b, entonces a + c &lt; b + c.</li>
  <li><strong>Multiplicativa:</strong> si a &lt; b y c &gt; 0, entonces ac &lt; bc. Si c &lt; 0, la desigualdad <strong>cambia de sentido</strong>: ac &gt; bc.</li>
</ul>
<div class="ojo"><span class="et">El detalle que se olvida</span>Al multiplicar o dividir una desigualdad por un número negativo, el signo se invierte: 2 &lt; 5, pero −2 &gt; −5.</div>`
    },
    {
      t: 'Operaciones básicas y jerarquía de operaciones', min: 7,
      sub: 'En qué orden se resuelve una expresión.',
      html: `
<h3>Leyes de los signos</h3>
<div class="tabla"><table>
  <tr><th>Multiplicación y división</th><th>Resultado</th></tr>
  <tr><td>(+)(+) y (−)(−)</td><td>+</td></tr>
  <tr><td>(+)(−) y (−)(+)</td><td>−</td></tr>
</table></div>
<p>En la suma: signos iguales se suman y se conserva el signo; signos distintos se restan y se pone el signo del mayor en valor absoluto.</p>

<h3>La jerarquía</h3>
<ol>
  <li><strong>Signos de agrupación</strong>, de adentro hacia afuera: paréntesis ( ), corchetes [ ], llaves { }.</li>
  <li><strong>Potencias y raíces.</strong></li>
  <li><strong>Multiplicaciones y divisiones</strong>, de izquierda a derecha.</li>
  <li><strong>Sumas y restas</strong>, de izquierda a derecha.</li>
</ol>
<div class="ejemplo"><span class="et">Ejemplo básico</span>8 + 2 · 5² − 12 ÷ 4
<p>Potencia: 8 + 2 · 25 − 12 ÷ 4. Multiplicación y división: 8 + 50 − 3. Suma y resta: <b>55</b>.</p></div>

<h3>Problema tipo de examen</h3>
<div class="ejemplo"><span class="et">Primer parcial</span>Reducir la expresión −[4·3 / {−4(4 − 4/2 + 1)}]
<p><b>Paso 1.</b> Paréntesis más interno; primero la división: 4 − 4/2 + 1 = 4 − 2 + 1 = 3.</p>
<p><b>Paso 2.</b> Llaves: −4(3) = −12.</p>
<p><b>Paso 3.</b> Corchetes: 4·3 = 12, y 12 / (−12) = −1.</p>
<p><b>Paso 4.</b> El signo de afuera: −[−1] = 1.</p>
<p class="calc"><b>Resultado: 1</b></p></div>
<div class="ojo"><span class="et">Errores típicos</span>Resolver 4 − 4/2 como (4 − 4)/2: la división va antes que la resta. Y olvidar el signo negativo que está delante del corchete.</div>
<div class="clave"><span class="et">Signo menos delante de un agrupador</span>−(a − b) = −a + b. Cambia el signo de todo lo que hay dentro.</div>`
    }
  ],
  tarjetas: [
    ['Unión de conjuntos (A ∪ B)', 'Los elementos que están en A, en B o en ambos.'],
    ['Intersección de conjuntos (A ∩ B)', 'Los elementos que están en A <b>y</b> en B a la vez.'],
    ['Complemento de A (A′)', 'Los elementos del universo que <b>no</b> están en A.'],
    ['Diferencia A − B', 'Los elementos de A que no están en B.'],
    ['¿Qué es un número racional?', 'El que puede escribirse como fracción <b>a/b</b> de enteros, con b ≠ 0.'],
    ['Da dos ejemplos de números irracionales', '<b>√2</b> y <b>π</b>: decimales infinitos no periódicos.'],
    ['Forma de un número complejo', '<b>a + bi</b>, donde i² = −1.'],
    ['Propiedad conmutativa', 'El orden no altera el resultado: a + b = b + a y ab = ba.'],
    ['Propiedad asociativa', 'La forma de agrupar no altera el resultado: (a + b) + c = a + (b + c).'],
    ['Propiedad distributiva', '<b>a (b + c) = ab + ac</b>'],
    ['Neutro e inverso de la suma', 'Neutro: <b>0</b>. Inverso de a: <b>−a</b>.'],
    ['Neutro e inverso de la multiplicación', 'Neutro: <b>1</b>. Inverso de a: <b>1/a</b> (con a ≠ 0).'],
    ['Ley de tricotomía', 'Entre dos reales se cumple una sola: a &lt; b, a = b o a &gt; b.'],
    ['¿Qué pasa con una desigualdad al multiplicarla por un negativo?', '<b>Cambia de sentido.</b>'],
    ['Jerarquía de operaciones', '1) Agrupadores, de adentro hacia afuera. 2) Potencias y raíces. 3) Multiplicación y división. 4) Suma y resta.']
  ],
  preguntas: [
    ['Sea U = {1, 2, 3, 4, 5, 6, 7, 8, 9}, A = {1, 2, 3, 4, 5} y B = {2, 3, 4, 5, 6}. (A ∩ B)′ ∩ A es:', ['{1}', '{1, 6, 7, 8, 9}', '{2, 3, 4, 5}', '∅'], 'A ∩ B = {2, 3, 4, 5}; su complemento es {1, 6, 7, 8, 9}; de ese conjunto solo el 1 está en A.'],
    ['Si A = {1, 2, 3, 4, 5} y B = {2, 3, 4, 5, 6}, entonces A ∪ B es:', ['{1, 2, 3, 4, 5, 6}', '{2, 3, 4, 5}', '{1, 6}', '{1, 2, 3, 4, 5, 6, 7, 8, 9}'], 'La unión reúne todos los elementos de ambos, sin repetir.'],
    ['Si A = {1, 2, 3, 4, 5} y B = {2, 3, 4, 5, 6}, entonces A − B es:', ['{1}', '{6}', '{1, 6}', '{2, 3, 4, 5}'], 'Elementos de A que no están en B.'],
    ['Con U = {1, 2, 3, 4, 5, 6, 7, 8, 9} y C = {3, 4, 5, 6, 7}, el complemento C′ es:', ['{1, 2, 8, 9}', '{3, 4, 5, 6, 7}', '{1, 2}', '{8, 9}'], 'Son los elementos de U que no están en C.'],
    ['Si C = {3, 4, 5, 6, 7} y D = {4, 5, 6, 7, 8, 9}, entonces C ∩ D es:', ['{4, 5, 6, 7}', '{3, 8, 9}', '{3, 4, 5, 6, 7, 8, 9}', '{3}'], 'Elementos comunes a ambos conjuntos.'],
    ['Con U = {1, …, 9}, A = {1, 2, 3, 4, 5} y B = {2, 3, 4, 5, 6}, (A ∪ B)′ es:', ['{7, 8, 9}', '{1, 6}', '{1, 6, 7, 8, 9}', '∅'], 'A ∪ B = {1, 2, 3, 4, 5, 6}; lo que falta de U es {7, 8, 9}.'],
    ['El conjunto que no tiene elementos se llama:', ['Vacío', 'Universo', 'Unitario', 'Complemento'], 'Se representa con ∅ o { }.'],
    ['El conjunto {x | x es par y 1 < x < 9} escrito por extensión es:', ['{2, 4, 6, 8}', '{2, 4, 6}', '{1, 3, 5, 7, 9}', '{2, 4, 6, 8, 10}'], 'Los pares mayores que 1 y menores que 9.'],
    ['El número √2 pertenece al conjunto de los:', ['Irracionales', 'Racionales', 'Enteros', 'Naturales'], 'Su expansión decimal es infinita y no periódica.'],
    ['El número −5 es:', ['Entero, racional y real', 'Natural, entero y real', 'Irracional y real', 'Imaginario'], 'No es natural por ser negativo, pero sí entero; todo entero es racional y real.'],
    ['El número 0.75 se clasifica como:', ['Racional', 'Irracional', 'Entero', 'Imaginario'], 'Equivale a la fracción 3/4.'],
    ['Un número complejo tiene la forma:', ['a + bi, con i² = −1', 'a/b, con b ≠ 0', 'a + b, con a > b', '√a, con a > 0'], 'a es la parte real y b la parte imaginaria.'],
    ['La igualdad a + b = b + a expresa la propiedad:', ['Conmutativa', 'Asociativa', 'Distributiva', 'Cerradura'], 'El orden de los sumandos no altera la suma.'],
    ['La igualdad a (b + c) = ab + ac expresa la propiedad:', ['Distributiva', 'Conmutativa', 'Asociativa', 'Transitiva'], 'La multiplicación se distribuye sobre la suma.'],
    ['La igualdad (a + b) + c = a + (b + c) expresa la propiedad:', ['Asociativa', 'Conmutativa', 'Distributiva', 'Tricotomía'], 'Cambia la agrupación, no el orden.'],
    ['El elemento neutro de la multiplicación es:', ['1', '0', '−1', '1/a'], 'Cualquier número multiplicado por 1 queda igual.'],
    ['El inverso aditivo de 7 es:', ['−7', '1/7', '7', '0'], 'Porque 7 + (−7) = 0.'],
    ['El inverso multiplicativo de 5 es:', ['1/5', '−5', '5', '0'], 'Porque 5 · (1/5) = 1.'],
    ['Si a < b y c < 0, entonces:', ['ac > bc', 'ac < bc', 'ac = bc', 'a + c > b + c'], 'Al multiplicar por un negativo, la desigualdad cambia de sentido.'],
    ['Al reducir −[4·3 / {−4(4 − 4/2 + 1)}] se obtiene:', ['1', '−1', '12', '−12'], '4 − 2 + 1 = 3; −4(3) = −12; 12 / (−12) = −1; −[−1] = 1.'],
    ['El resultado de 8 + 2 · 5² − 12 ÷ 4 es:', ['55', '247', '58', '14'], '8 + 2·25 − 3 = 8 + 50 − 3 = 55.'],
    ['El resultado de 3 − 2[4 − (6 − 9)] es:', ['−11', '7', '−5', '17'], '6 − 9 = −3; 4 − (−3) = 7; 3 − 2(7) = −11.'],
    ['El resultado de (−3)² − 3² es:', ['0', '18', '−18', '9'], '(−3)² = 9 y 3² = 9; 9 − 9 = 0.'],
    ['«Entre dos números reales a y b solo puede ocurrir que a < b, a = b o a > b» es la ley de:', ['Tricotomía', 'Transitividad', 'Cerradura', 'Reflexividad'], 'Es una de las propiedades de orden de los reales.']
  ]
});
