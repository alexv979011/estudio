/* Matemáticas I · Unidad 3 · Introducción al álgebra */
(() => {
  // f(numerador, denominador) dibuja una fracción apilada
  const f = (a, b) => '<span class="frac"><span>' + a + '</span><span>' + b + '</span></span>';

  window.UNIDADES = window.UNIDADES || [];
  window.UNIDADES.push({
    materia: 'mate',
    id: 3,
    titulo: 'Introducción al álgebra',
    corto: 'Álgebra',
    color: '#ff9f0a',
    resultado: 'traducir al lenguaje algebraico, aplicar las leyes de los exponentes, operar polinomios, desarrollar productos notables, factorizar y simplificar fracciones algebraicas.',
    temas: [
      {
        t: 'Simbología y lenguaje algebraico', min: 6,
        sub: 'Traducir palabras a expresiones.',
        html: `
<h3>Partes de un término</h3>
<p>Un <strong>término algebraico</strong> tiene signo, coeficiente, literal y exponente. En −7x³y²: el signo es negativo, el coeficiente es 7, las literales son x e y, y los exponentes son 3 y 2.</p>
<ul>
  <li><strong>Grado de un término:</strong> la suma de los exponentes de sus literales. −7x³y² es de grado 5.</li>
  <li><strong>Términos semejantes:</strong> tienen las mismas literales con los mismos exponentes. 3a²b y −5a²b lo son; 3a²b y 3ab² no.</li>
  <li><strong>Según el número de términos:</strong> monomio (1), binomio (2), trinomio (3), polinomio (varios).</li>
</ul>

<h3>Diccionario de traducción</h3>
<div class="tabla"><table>
  <tr><th>Enunciado</th><th>Expresión</th></tr>
  <tr><td>Un número cualquiera</td><td>x</td></tr>
  <tr><td>El doble, el triple de un número</td><td>2x, 3x</td></tr>
  <tr><td>La mitad, la tercera parte de un número</td><td>${f('x', '2')}, ${f('x', '3')}</td></tr>
  <tr><td>Dos terceras partes de un número</td><td>${f('2', '3')}x</td></tr>
  <tr><td>Un número aumentado en 5</td><td>x + 5</td></tr>
  <tr><td>Un número disminuido en 5</td><td>x − 5</td></tr>
  <tr><td>El cuadrado, el cubo de un número</td><td>x², x³</td></tr>
  <tr><td>La suma de dos números</td><td>a + b</td></tr>
  <tr><td>El cuadrado de la suma de dos números</td><td>(a + b)²</td></tr>
  <tr><td>La suma de los cuadrados de dos números</td><td>a² + b²</td></tr>
  <tr><td>Dos números consecutivos</td><td>x, x + 1</td></tr>
</table></div>

<h3>Problema tipo de examen</h3>
<div class="ejemplo"><span class="et">Primer parcial</span>Traducir: «El cubo de la tercera parte de un número al cuadrado, disminuido dos terceras partes del mismo número».
<p><b>Paso 1.</b> Un número al cuadrado: x².</p>
<p><b>Paso 2.</b> Su tercera parte: ${f('x²', '3')}.</p>
<p><b>Paso 3.</b> El cubo de eso: (${f('x²', '3')})³.</p>
<p><b>Paso 4.</b> Disminuido en dos terceras partes del número: − ${f('2', '3')}x.</p>
<p class="calc"><b>(${f('x²', '3')})³ − ${f('2', '3')}x</b></p></div>
<div class="clave"><span class="et">Método</span>Lee el enunciado de atrás hacia adelante: la última operación que se nombra al principio («el cubo de…») es la que envuelve a todo lo demás.</div>
<div class="ojo"><span class="et">No es lo mismo</span>«El cuadrado de la suma» es (a + b)². «La suma de los cuadrados» es a² + b².</div>`
      },
      {
        t: 'Leyes de los exponentes', min: 7,
        sub: 'Siete reglas para simplificar potencias.',
        html: `
<h3>Las leyes</h3>
<div class="tabla"><table>
  <tr><th>Ley</th><th>Regla</th><th>Ejemplo</th></tr>
  <tr><td>Producto de la misma base</td><td>aᵐ · aⁿ = aᵐ⁺ⁿ</td><td>x³ · x⁵ = x⁸</td></tr>
  <tr><td>Cociente de la misma base</td><td>aᵐ ÷ aⁿ = aᵐ⁻ⁿ</td><td>x⁷ ÷ x² = x⁵</td></tr>
  <tr><td>Potencia de una potencia</td><td>(aᵐ)ⁿ = aᵐⁿ</td><td>(x²)⁴ = x⁸</td></tr>
  <tr><td>Potencia de un producto</td><td>(ab)ⁿ = aⁿbⁿ</td><td>(2m⁴n²)³ = 8m¹²n⁶</td></tr>
  <tr><td>Potencia de un cociente</td><td>(a/b)ⁿ = aⁿ/bⁿ</td><td>(x/y)³ = x³/y³</td></tr>
  <tr><td>Exponente cero</td><td>a⁰ = 1, con a ≠ 0</td><td>(5xy)⁰ = 1</td></tr>
  <tr><td>Exponente negativo</td><td>a⁻ⁿ = 1/aⁿ</td><td>x⁻³ = 1/x³</td></tr>
</table></div>
<div class="clave"><span class="et">Fracción con exponente negativo</span>Una fracción elevada a un exponente negativo se <b>invierte</b> y el exponente se vuelve positivo: (a/b)⁻ⁿ = (b/a)ⁿ.</div>

<h3>Problema tipo de examen</h3>
<div class="ejemplo"><span class="et">Primer parcial</span>Simplificar ${f('(x²y³)²', '(2m⁴n²)³')} · (${f('x³y', '4m²n³')})⁻²
<p><b>Paso 1.</b> Potencias del primer factor: (x²y³)² = x⁴y⁶ y (2m⁴n²)³ = 8m¹²n⁶.</p>
<p><b>Paso 2.</b> El exponente negativo invierte la segunda fracción: (${f('4m²n³', 'x³y')})² = ${f('16m⁴n⁶', 'x⁶y²')}.</p>
<p><b>Paso 3.</b> Se multiplica: ${f('x⁴y⁶ · 16m⁴n⁶', '8m¹²n⁶ · x⁶y²')}.</p>
<p><b>Paso 4.</b> Se restan exponentes de cada base: 16/8 = 2; x⁴⁻⁶ = x⁻²; y⁶⁻² = y⁴; m⁴⁻¹² = m⁻⁸; n⁶⁻⁶ = 1.</p>
<p class="calc"><b>${f('2y⁴', 'x²m⁸')}</b></p></div>
<div class="ojo"><span class="et">Errores típicos</span>Sumar exponentes al elevar una potencia a otra (se multiplican) y olvidar elevar también el coeficiente: (2m⁴)³ es 8m¹², no 2m¹².</div>`
      },
      {
        t: 'Operaciones con polinomios', min: 7,
        sub: 'Sumar, restar, multiplicar y dividir, y quitar signos de agrupación.',
        html: `
<h3>Suma y resta</h3>
<p>Solo se reducen los <strong>términos semejantes</strong>: se suman o restan sus coeficientes y la parte literal queda igual.</p>
<div class="ejemplo"><span class="et">Ejemplos</span>
<p>(3x² − 2x + 5) + (x² + 4x − 7) = 4x² + 2x − 2</p>
<p>(5x − 3) − (2x − 8) = 5x − 3 − 2x + 8 = 3x + 5</p></div>

<h3>Signos de agrupación</h3>
<p>Se eliminan de adentro hacia afuera. Si delante hay un signo <strong>+</strong>, el contenido sale igual. Si hay un signo <strong>−</strong>, cambian todos los signos de adentro.</p>
<div class="ejemplo"><span class="et">Primer parcial</span>Simplificar a³b² − [2a³b² − (3ab³ − 5a³b²)] − 4ab³
<p><b>Paso 1.</b> Paréntesis, precedido de menos: 2a³b² − 3ab³ + 5a³b².</p>
<p><b>Paso 2.</b> Se reduce dentro del corchete: 7a³b² − 3ab³.</p>
<p><b>Paso 3.</b> Corchete, precedido de menos: a³b² − 7a³b² + 3ab³ − 4ab³.</p>
<p><b>Paso 4.</b> Términos semejantes: (1 − 7)a³b² + (3 − 4)ab³.</p>
<p class="calc"><b>−6a³b² − ab³</b></p></div>

<h3>Multiplicación</h3>
<p>Se multiplican coeficientes y se <strong>suman</strong> los exponentes de las literales iguales. Cada término de un factor se multiplica por cada término del otro.</p>
<div class="ejemplo"><span class="et">Ejemplos</span>
<p>2x (3x² − 4x + 1) = 6x³ − 8x² + 2x</p>
<p>(x + 3)(x − 5) = x² − 5x + 3x − 15 = x² − 2x − 15</p></div>

<h3>División</h3>
<p>Se dividen coeficientes y se <strong>restan</strong> exponentes. Un polinomio entre un monomio se divide término a término.</p>
<div class="ejemplo"><span class="et">Ejemplo</span>(6x³ − 9x²) ÷ 3x = 2x² − 3x</div>
<div class="ojo"><span class="et">Cuidado</span>a³b² y ab³ <b>no</b> son semejantes aunque tengan las mismas letras: los exponentes son distintos y no se pueden sumar.</div>`
      },
      {
        t: 'Productos notables', min: 8,
        sub: 'Multiplicaciones que se resuelven con una fórmula.',
        html: `
<h3>Las fórmulas</h3>
<div class="tabla"><table>
  <tr><th>Producto notable</th><th>Desarrollo</th></tr>
  <tr><td>Binomio al cuadrado</td><td>(a ± b)² = a² ± 2ab + b²</td></tr>
  <tr><td>Binomios conjugados</td><td>(a + b)(a − b) = a² − b²</td></tr>
  <tr><td>Binomios con término común</td><td>(x + a)(x + b) = x² + (a + b)x + ab</td></tr>
  <tr><td>Binomio al cubo</td><td>(a ± b)³ = a³ ± 3a²b + 3ab² ± b³</td></tr>
</table></div>
<div class="clave"><span class="et">En palabras</span><b>Cuadrado:</b> el cuadrado del primero, más el doble del primero por el segundo, más el cuadrado del segundo. <b>Conjugados:</b> el cuadrado del primero menos el cuadrado del segundo.</div>

<h3>Problemas del segundo parcial</h3>
<div class="ejemplo"><span class="et">Binomio al cuadrado</span>(2x² − yz³)²
<p>Primero al cuadrado: (2x²)² = 4x⁴. Doble producto: 2(2x²)(yz³) = 4x²yz³. Segundo al cuadrado: (yz³)² = y²z⁶.</p>
<p class="calc"><b>4x⁴ − 4x²yz³ + y²z⁶</b></p></div>
<div class="ejemplo"><span class="et">Binomio al cubo</span>(3x³ − y²)³
<p>a³ = 27x⁹ · 3a²b = 3(9x⁶)(y²) = 27x⁶y² · 3ab² = 3(3x³)(y⁴) = 9x³y⁴ · b³ = y⁶. Los signos se alternan.</p>
<p class="calc"><b>27x⁹ − 27x⁶y² + 9x³y⁴ − y⁶</b></p></div>
<div class="ejemplo"><span class="et">Término común</span>(m² − 8)(2 + m²) = (m² − 8)(m² + 2)
<p>Cuadrado del común: m⁴. Suma de los otros por el común: (−8 + 2)m² = −6m². Producto de los otros: (−8)(2) = −16.</p>
<p class="calc"><b>m⁴ − 6m² − 16</b></p></div>
<div class="ejemplo"><span class="et">Conjugados</span>(${f('3', '2')}x + ${f('4', '3')}y)(−${f('4', '3')}y + ${f('3', '2')}x)
<p>Reordenando el segundo: (${f('3', '2')}x + ${f('4', '3')}y)(${f('3', '2')}x − ${f('4', '3')}y). Cuadrado del primero menos cuadrado del segundo.</p>
<p class="calc"><b>${f('9', '4')}x² − ${f('16', '9')}y²</b></p></div>
<div class="ejemplo"><span class="et">Cuadrado con fracciones</span>(${f('2', '3')}x − ${f('1', '4')}y)²
<p>(${f('2', '3')}x)² = ${f('4', '9')}x². Doble producto: 2 · ${f('2', '3')} · ${f('1', '4')} = ${f('4', '12')} = ${f('1', '3')}. (${f('1', '4')}y)² = ${f('1', '16')}y².</p>
<p class="calc"><b>${f('4', '9')}x² − ${f('1', '3')}xy + ${f('1', '16')}y²</b></p></div>
<div class="ojo"><span class="et">El error más común</span>(a + b)² <b>no</b> es a² + b². Siempre falta el doble producto 2ab.</div>`
      },
      {
        t: 'Factorización', min: 9,
        sub: 'El camino inverso: de la suma al producto.',
        html: `
<h3>Qué es</h3>
<p><strong>Factorizar</strong> es escribir una expresión como producto de factores. Es la operación inversa de multiplicar. Antes de aplicar cualquier otro método, revisa si hay <strong>factor común</strong>.</p>

<h3>Cómo elegir el método</h3>
<div class="tabla"><table>
  <tr><th>Si la expresión tiene…</th><th>Método</th><th>Forma</th></tr>
  <tr><td>Algo que se repite en todos los términos</td><td>Factor común</td><td>ab + ac = a(b + c)</td></tr>
  <tr><td>4 términos</td><td>Agrupación</td><td>ax + ay + bx + by = (a + b)(x + y)</td></tr>
  <tr><td>2 cuadrados que se restan</td><td>Diferencia de cuadrados</td><td>a² − b² = (a + b)(a − b)</td></tr>
  <tr><td>2 cubos</td><td>Suma o diferencia de cubos</td><td>a³ ± b³ = (a ± b)(a² ∓ ab + b²)</td></tr>
  <tr><td>3 términos, dos de ellos cuadrados perfectos</td><td>Trinomio cuadrado perfecto</td><td>a² ± 2ab + b² = (a ± b)²</td></tr>
  <tr><td>3 términos, x² + bx + c</td><td>Dos números que sumen b y multipliquen c</td><td>(x + p)(x + q)</td></tr>
  <tr><td>3 términos, ax² + bx + c</td><td>Tanteo o producto a·c</td><td>(mx + p)(nx + q)</td></tr>
</table></div>

<h3>Problemas del segundo parcial</h3>
<div class="ejemplo"><span class="et">Factor común</span>2m²nx + 4ym²n − 6nzm²
<p>Coeficientes: máximo común divisor de 2, 4 y 6 → 2. Literales comunes con su menor exponente: m²n.</p>
<p class="calc"><b>2m²n (x + 2y − 3z)</b></p></div>
<div class="ejemplo"><span class="et">Agrupación</span>2x² − 3xy − 4x + 6y
<p>Se agrupa de dos en dos: x(2x − 3y) − 2(2x − 3y). El binomio se repite y sale como factor.</p>
<p class="calc"><b>(2x − 3y)(x − 2)</b></p></div>
<div class="ejemplo"><span class="et">Diferencia de cuadrados</span>49x⁶y⁴ − ${f('25', '9')}m⁸
<p>Raíces: √(49x⁶y⁴) = 7x³y² y √(${f('25', '9')}m⁸) = ${f('5', '3')}m⁴.</p>
<p class="calc"><b>(7x³y² + ${f('5', '3')}m⁴)(7x³y² − ${f('5', '3')}m⁴)</b></p></div>
<div class="ejemplo"><span class="et">Suma de cubos</span>64 + m⁶n³
<p>Raíces cúbicas: ∛64 = 4 y ∛(m⁶n³) = m²n. Se aplica a³ + b³ = (a + b)(a² − ab + b²).</p>
<p class="calc"><b>(4 + m²n)(16 − 4m²n + m⁴n²)</b></p></div>
<div class="ejemplo"><span class="et">Trinomio ax² + bx + c</span>5x² + 18x − 8
<p>Se multiplica a·c = 5(−8) = −40. Se buscan dos números que multipliquen −40 y sumen 18: 20 y −2.</p>
<p>5x² + 20x − 2x − 8 = 5x(x + 4) − 2(x + 4).</p>
<p class="calc"><b>(5x − 2)(x + 4)</b></p></div>
<div class="clave"><span class="et">Comprueba siempre</span>Multiplica tus factores: si recuperas la expresión original, la factorización es correcta.</div>
<div class="ojo"><span class="et">Ojo</span>La <b>suma</b> de cuadrados a² + b² no se factoriza en los reales. La suma de <b>cubos</b> sí.</div>`
      },
      {
        t: 'Fracciones algebraicas', min: 8,
        sub: 'Simplificar, sumar, restar, multiplicar y dividir.',
        html: `
<h3>Simplificar</h3>
<p>Se factorizan numerador y denominador y se cancelan los <strong>factores</strong> comunes. Nunca se cancelan sumandos.</p>
<div class="ejemplo"><span class="et">Ejemplo</span>${f('x² − 9', 'x² + 6x + 9')} = ${f('(x + 3)(x − 3)', '(x + 3)²')} = ${f('x − 3', 'x + 3')}</div>

<h3>Suma y resta</h3>
<ol>
  <li>Encuentra el <strong>mínimo común denominador</strong> (m. c. d.).</li>
  <li>Divide el m. c. d. entre cada denominador y multiplica por su numerador.</li>
  <li>Reduce términos semejantes en el numerador y simplifica.</li>
</ol>
<div class="ejemplo"><span class="et">Tercer parcial</span>Simplifica ${f('a + x', 'a')} − ${f('a', 'a − x')}
<p><b>Paso 1.</b> m. c. d. = a(a − x).</p>
<p><b>Paso 2.</b> ${f('(a + x)(a − x) − a · a', 'a(a − x)')}</p>
<p><b>Paso 3.</b> (a + x)(a − x) = a² − x², así que el numerador es a² − x² − a² = −x².</p>
<p class="calc"><b>${f('−x²', 'a(a − x)')}</b></p></div>
<div class="ejemplo"><span class="et">Tercer parcial</span>Simplifica ${f('2x', 'x + 1')} − 1
<p>El 1 se escribe con el mismo denominador: ${f('x + 1', 'x + 1')}.</p>
<p>${f('2x − (x + 1)', 'x + 1')} = ${f('2x − x − 1', 'x + 1')}</p>
<p class="calc"><b>${f('x − 1', 'x + 1')}</b></p></div>
<div class="ojo"><span class="et">El signo menos</span>Al restar una fracción, el signo afecta a <b>todo</b> su numerador: −(x + 1) = −x − 1. Es el error que más puntos cuesta en este tema.</div>

<h3>Multiplicación y división</h3>
<p><strong>Multiplicar:</strong> numerador por numerador y denominador por denominador, simplificando antes si se puede. <strong>Dividir:</strong> se multiplica por el recíproco de la segunda fracción.</p>
<div class="ejemplo"><span class="et">Ejemplos</span>
<p>${f('2x', '3y')} · ${f('9y²', '4x²')} = ${f('18xy²', '12x²y')} = ${f('3y', '2x')}</p>
<p>${f('x', 'y')} ÷ ${f('a', 'b')} = ${f('x', 'y')} · ${f('b', 'a')} = ${f('bx', 'ay')}</p></div>`
      },
      {
        t: 'Fracciones algebraicas complejas', min: 5,
        sub: 'Fracciones dentro de fracciones.',
        html: `
<h3>Qué son</h3>
<p>Una <strong>fracción compleja</strong> tiene fracciones en su numerador, en su denominador o en ambos. Simplificarla es convertirla en una fracción simple.</p>

<h3>Método 1: resolver arriba y abajo</h3>
<ol>
  <li>Reduce el numerador a una sola fracción.</li>
  <li>Reduce el denominador a una sola fracción.</li>
  <li>Divide: multiplica la de arriba por el recíproco de la de abajo («extremos por extremos, medios por medios»).</li>
</ol>
<div class="ejemplo"><span class="et">Tercer parcial</span>Simplifica ${f('x + ' + f('x', '2'), 'x − ' + f('x', '4'))}
<p><b>Numerador:</b> x + ${f('x', '2')} = ${f('2x + x', '2')} = ${f('3x', '2')}.</p>
<p><b>Denominador:</b> x − ${f('x', '4')} = ${f('4x − x', '4')} = ${f('3x', '4')}.</p>
<p><b>División:</b> ${f('3x', '2')} · ${f('4', '3x')} = ${f('12x', '6x')}.</p>
<p class="calc"><b>2</b></p></div>

<h3>Método 2: multiplicar por el m. c. d.</h3>
<p>Multiplica el numerador y el denominador de la fracción grande por el mínimo común denominador de todas las fracciones pequeñas. Desaparecen de un golpe.</p>
<div class="ejemplo"><span class="et">El mismo problema</span>El m. c. d. de 2 y 4 es 4. Se multiplica arriba y abajo por 4:
<p class="calc">${f('4x + 2x', '4x − x')} = ${f('6x', '3x')} = <b>2</b></p></div>
<div class="clave"><span class="et">Cuál usar</span>El método 2 es más corto cuando los denominadores pequeños son números o monomios sencillos. El método 1 es más seguro cuando hay binomios.</div>`
      }
    ],
    tarjetas: [
      ['¿Qué son términos semejantes?', 'Los que tienen las <b>mismas literales con los mismos exponentes</b>. Solo ellos se pueden sumar o restar.'],
      ['«El cuadrado de la suma de dos números»', '<b>(a + b)²</b> — no confundir con a² + b².'],
      ['aᵐ · aⁿ', '<b>aᵐ⁺ⁿ</b>: se suman los exponentes.'],
      ['(aᵐ)ⁿ', '<b>aᵐⁿ</b>: se multiplican los exponentes.'],
      ['a⁻ⁿ', '<b>1/aⁿ</b>. Una fracción con exponente negativo se invierte.'],
      ['a⁰', '<b>1</b>, siempre que a ≠ 0.'],
      ['¿Qué pasa con un signo menos delante de un paréntesis?', 'Cambian <b>todos</b> los signos de adentro.'],
      ['(a + b)²', '<b>a² + 2ab + b²</b>'],
      ['(a − b)²', '<b>a² − 2ab + b²</b>'],
      ['(a + b)(a − b)', '<b>a² − b²</b> (binomios conjugados).'],
      ['(a + b)³', '<b>a³ + 3a²b + 3ab² + b³</b>'],
      ['(x + a)(x + b)', '<b>x² + (a + b)x + ab</b>'],
      ['a² − b² factorizado', '<b>(a + b)(a − b)</b>'],
      ['a³ + b³ factorizado', '<b>(a + b)(a² − ab + b²)</b>'],
      ['a³ − b³ factorizado', '<b>(a − b)(a² + ab + b²)</b>'],
      ['Primer paso al factorizar cualquier expresión', 'Buscar el <b>factor común</b>.'],
      ['¿Cómo se suman fracciones algebraicas?', 'Con el <b>mínimo común denominador</b>; luego se reducen los numeradores.'],
      ['¿Cómo se dividen fracciones algebraicas?', 'Se multiplica la primera por el <b>recíproco</b> de la segunda.'],
      ['¿Qué se puede cancelar en una fracción algebraica?', 'Solo <b>factores</b> comunes, nunca sumandos.']
    ],
    preguntas: [
      ['La expresión algebraica de «el cubo de la tercera parte de un número al cuadrado, disminuido dos terceras partes del mismo número» es:', ['(x²/3)³ − 2x/3', '(x/3)³ − 2/3', '3x² − 2x/3', '(x³/3)² − 2x/3'], 'Número al cuadrado: x²; su tercera parte: x²/3; al cubo: (x²/3)³; menos dos tercios del número: 2x/3.'],
      ['«El doble de un número aumentado en cinco» se escribe:', ['2x + 5', '2(x + 5)', 'x² + 5', '2x − 5'], 'Primero el doble (2x) y a eso se le suma 5.'],
      ['«El cuadrado de la suma de dos números» se escribe:', ['(a + b)²', 'a² + b²', '2(a + b)', 'a²b²'], 'Primero se suman y después se eleva al cuadrado.'],
      ['El grado del término −7x³y² es:', ['5', '3', '6', '7'], 'Se suman los exponentes de las literales: 3 + 2.'],
      ['¿Cuál término es semejante a 3a²b?', ['−5a²b', '3ab²', '3a²b²', '3a²'], 'Debe tener las mismas literales con los mismos exponentes.'],
      ['El resultado de x³ · x⁵ es:', ['x⁸', 'x¹⁵', 'x²', '2x⁸'], 'En el producto de la misma base se suman los exponentes.'],
      ['El resultado de (a²b³)⁴ es:', ['a⁸b¹²', 'a⁶b⁷', 'a²b¹²', 'a⁸b³'], 'Cada exponente se multiplica por 4.'],
      ['El resultado de x⁷ ÷ x² es:', ['x⁵', 'x⁹', 'x¹⁴', 'x³·⁵'], 'En el cociente de la misma base se restan los exponentes.'],
      ['La expresión x⁻³ equivale a:', ['1/x³', '−x³', '−3x', 'x³'], 'El exponente negativo indica el recíproco.'],
      ['El resultado de (2m⁴n²)³ es:', ['8m¹²n⁶', '2m¹²n⁶', '6m⁷n⁵', '8m⁷n⁵'], 'Se eleva el coeficiente (2³ = 8) y se multiplican los exponentes por 3.'],
      ['El valor de (5xy)⁰, con x e y distintos de cero, es:', ['1', '0', '5', '5xy'], 'Toda cantidad distinta de cero elevada a cero vale 1.'],
      ['Al simplificar (x²y³)² ÷ (xy)³ se obtiene:', ['xy³', 'x²y²', 'x⁷y⁹', 'xy²'], 'x⁴y⁶ ÷ x³y³ = x¹y³.'],
      ['La expresión (x³y / 4m²n³)⁻² equivale a:', ['16m⁴n⁶ / x⁶y²', 'x⁶y² / 16m⁴n⁶', '−x⁶y² / 16m⁴n⁶', '8m⁴n⁶ / x⁶y²'], 'El exponente negativo invierte la fracción; después se eleva al cuadrado.'],
      ['Al simplificar a³b² − [2a³b² − (3ab³ − 5a³b²)] − 4ab³ se obtiene:', ['−6a³b² − ab³', '−6a³b² − 7ab³', '4a³b² − ab³', '−8a³b² + ab³'], 'a³b² − [7a³b² − 3ab³] − 4ab³ = a³b² − 7a³b² + 3ab³ − 4ab³.'],
      ['El resultado de (3x² − 2x + 5) + (x² + 4x − 7) es:', ['4x² + 2x − 2', '4x² − 6x + 12', '3x⁴ + 2x − 2', '2x² − 6x + 12'], 'Se reducen términos semejantes: 3x² + x², −2x + 4x, 5 − 7.'],
      ['El resultado de (5x − 3) − (2x − 8) es:', ['3x + 5', '3x − 11', '7x − 11', '3x − 5'], 'El menos cambia los signos: 5x − 3 − 2x + 8.'],
      ['El producto 2x (3x² − 4x + 1) es:', ['6x³ − 8x² + 2x', '6x² − 8x + 2', '5x³ − 6x² + 3x', '6x³ − 4x + 1'], 'Se multiplica 2x por cada término.'],
      ['El producto (x + 3)(x − 5) es:', ['x² − 2x − 15', 'x² − 15', 'x² + 2x − 15', 'x² − 8x − 15'], 'Término común: x² + (3 − 5)x + (3)(−5).'],
      ['El cociente (6x³ − 9x²) ÷ 3x es:', ['2x² − 3x', '2x² − 9x²', '3x² − 6x', '2x³ − 3x²'], 'Se divide cada término entre 3x.'],
      ['Al desarrollar (2x² − yz³)² se obtiene:', ['4x⁴ − 4x²yz³ + y²z⁶', '4x⁴ + y²z⁶', '4x⁴ − 2x²yz³ + y²z⁶', '2x⁴ − 4x²yz³ + yz⁶'], 'Cuadrado del primero, menos el doble producto, más el cuadrado del segundo.'],
      ['Al desarrollar (3x³ − y²)³ se obtiene:', ['27x⁹ − 27x⁶y² + 9x³y⁴ − y⁶', '27x⁹ − y⁶', '9x⁹ − 27x⁶y² + 9x³y⁴ − y⁶', '27x⁹ + 27x⁶y² + 9x³y⁴ + y⁶'], 'a³ − 3a²b + 3ab² − b³ con a = 3x³ y b = y².'],
      ['Al desarrollar (m² − 8)(2 + m²) se obtiene:', ['m⁴ − 6m² − 16', 'm⁴ − 16', 'm⁴ + 6m² − 16', 'm⁴ − 10m² + 16'], 'Término común m²: m⁴ + (−8 + 2)m² + (−8)(2).'],
      ['Al desarrollar (3/2 x + 4/3 y)(−4/3 y + 3/2 x) se obtiene:', ['9/4 x² − 16/9 y²', '9/4 x² + 16/9 y²', '3/2 x² − 4/3 y²', '9/4 x² − 4xy + 16/9 y²'], 'Son binomios conjugados: cuadrado del primero menos cuadrado del segundo.'],
      ['Al desarrollar (2/3 x − 1/4 y)² se obtiene:', ['4/9 x² − 1/3 xy + 1/16 y²', '4/9 x² + 1/16 y²', '4/9 x² − 1/6 xy + 1/16 y²', '4/9 x² − 1/3 xy − 1/16 y²'], 'El doble producto es 2(2/3)(1/4) = 4/12 = 1/3.'],
      ['El desarrollo de (x + 5)² es:', ['x² + 10x + 25', 'x² + 25', 'x² + 5x + 25', 'x² + 10x + 10'], 'a² + 2ab + b² con a = x y b = 5.'],
      ['El producto (a + b)(a − b) es igual a:', ['a² − b²', 'a² + b²', 'a² − 2ab + b²', 'a² + 2ab − b²'], 'Los términos cruzados se cancelan.'],
      ['Al factorizar 2m²nx + 4ym²n − 6nzm² se obtiene:', ['2m²n (x + 2y − 3z)', '2m² (nx + 2y − 3z)', '2mn (x + 2y − 3z)', '2m²n (x + 4y − 6z)'], 'El factor común es 2m²n.'],
      ['Al factorizar 2x² − 3xy − 4x + 6y se obtiene:', ['(2x − 3y)(x − 2)', '(2x + 3y)(x − 2)', '(2x − 3y)(x + 2)', '(x − 3y)(2x − 2)'], 'Por agrupación: x(2x − 3y) − 2(2x − 3y).'],
      ['Al factorizar 49x⁶y⁴ − 25/9 m⁸ se obtiene:', ['(7x³y² + 5/3 m⁴)(7x³y² − 5/3 m⁴)', '(7x³y² − 5/3 m⁴)²', '(7x²y² + 5/3 m⁴)(7x⁴y² − 5/3 m⁴)', '(49x³y² + 25/9 m⁴)(x³y² − m⁴)'], 'Diferencia de cuadrados: se saca raíz a cada término.'],
      ['Al factorizar 64 + m⁶n³ se obtiene:', ['(4 + m²n)(16 − 4m²n + m⁴n²)', '(4 + m²n)(16 + 4m²n + m⁴n²)', '(8 + m³n)(8 − m³n)', '(4 + m²n)³'], 'Suma de cubos: a³ + b³ = (a + b)(a² − ab + b²), con a = 4 y b = m²n.'],
      ['Al factorizar 5x² + 18x − 8 se obtiene:', ['(5x − 2)(x + 4)', '(5x + 2)(x − 4)', '(5x − 4)(x + 2)', '(5x − 8)(x + 1)'], '5x² + 20x − 2x − 8 = 5x(x + 4) − 2(x + 4).'],
      ['Al factorizar x² + 7x + 12 se obtiene:', ['(x + 3)(x + 4)', '(x + 2)(x + 6)', '(x + 1)(x + 12)', '(x − 3)(x − 4)'], 'Dos números que sumen 7 y multipliquen 12: 3 y 4.'],
      ['Al factorizar x² − 10x + 25 se obtiene:', ['(x − 5)²', '(x + 5)(x − 5)', '(x − 25)(x + 1)', '(x + 5)²'], 'Es un trinomio cuadrado perfecto.'],
      ['Al factorizar x³ − 27 se obtiene:', ['(x − 3)(x² + 3x + 9)', '(x − 3)(x² − 3x + 9)', '(x − 3)³', '(x + 3)(x² − 3x + 9)'], 'Diferencia de cubos: a³ − b³ = (a − b)(a² + ab + b²).'],
      ['Al simplificar (a + x)/a − a/(a − x) se obtiene:', ['−x² / [a(a − x)]', 'x² / [a(a − x)]', 'x / [a(a − x)]', '(2a + x) / (2a − x)'], 'Numerador: (a + x)(a − x) − a² = a² − x² − a² = −x².'],
      ['Al simplificar 2x/(x + 1) − 1 se obtiene:', ['(x − 1)/(x + 1)', '(2x − 1)/(x + 1)', '(x + 1)/(x − 1)', 'x/(x + 1)'], '[2x − (x + 1)] / (x + 1) = (x − 1)/(x + 1).'],
      ['Al simplificar la fracción compleja (x + x/2) / (x − x/4) se obtiene:', ['2', '1/2', '3x/4', '6'], '(3x/2) ÷ (3x/4) = (3x/2)(4/3x) = 2.'],
      ['Al simplificar (x² − 9)/(x² + 6x + 9) se obtiene:', ['(x − 3)/(x + 3)', '(x + 3)/(x − 3)', '−1/(6x)', '(x − 9)/(x + 9)'], '(x + 3)(x − 3) / (x + 3)².'],
      ['El producto (2x/3y) · (9y²/4x²) simplificado es:', ['3y/(2x)', '2x/(3y)', '18xy²/12', '3x/(2y)'], '18xy² / 12x²y = 3y / 2x.'],
      ['La suma 1/x + 1/y es igual a:', ['(x + y)/(xy)', '2/(x + y)', '1/(x + y)', '2/(xy)'], 'El común denominador es xy.']
    ]
  });
})();
