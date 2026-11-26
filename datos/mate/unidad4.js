/* Matemáticas I · Unidad 4 · Ecuaciones lineales */
(() => {
  const f = (a, b) => '<span class="frac"><span>' + a + '</span><span>' + b + '</span></span>';

  window.UNIDADES = window.UNIDADES || [];
  window.UNIDADES.push({
    materia: 'mate',
    id: 4,
    titulo: 'Ecuaciones lineales',
    corto: 'Ecuaciones',
    color: '#30b955',
    resultado: 'aplicar las propiedades de la igualdad para resolver ecuaciones de primer grado, plantear problemas y despejar fórmulas.',
    temas: [
      {
        t: 'Propiedades de la igualdad', min: 4,
        sub: 'Lo que se le hace a un lado se le hace al otro.',
        html: `
<h3>Igualdad y ecuación</h3>
<p>Una <strong>igualdad</strong> afirma que dos expresiones valen lo mismo. Una <strong>ecuación</strong> es una igualdad con una o más incógnitas que solo se cumple para ciertos valores. Lo que está a la izquierda del signo igual es el <strong>primer miembro</strong>; lo de la derecha, el <strong>segundo miembro</strong>.</p>

<h3>Las propiedades</h3>
<div class="tabla"><table>
  <tr><th>Propiedad</th><th>Enunciado</th></tr>
  <tr><td><b>Reflexiva</b></td><td>a = a</td></tr>
  <tr><td><b>Simétrica</b></td><td>Si a = b, entonces b = a</td></tr>
  <tr><td><b>Transitiva</b></td><td>Si a = b y b = c, entonces a = c</td></tr>
  <tr><td><b>Aditiva</b></td><td>Si a = b, entonces a + c = b + c</td></tr>
  <tr><td><b>Multiplicativa</b></td><td>Si a = b, entonces ac = bc</td></tr>
</table></div>
<p>Las dos últimas justifican el método para resolver ecuaciones: puedes sumar, restar, multiplicar o dividir <strong>ambos miembros</strong> por la misma cantidad y la igualdad se mantiene.</p>
<div class="clave"><span class="et">La «transposición»</span>«Pasar al otro lado con la operación contraria» es un atajo de estas propiedades: lo que suma pasa restando, lo que multiplica pasa dividiendo, y viceversa.</div>`
      },
      {
        t: 'Resolución de ecuaciones de primer grado', min: 8,
        sub: 'Un método de cinco pasos que sirve siempre.',
        html: `
<h3>Qué es</h3>
<p>Una <strong>ecuación de primer grado</strong> o lineal es aquella en la que el mayor exponente de la incógnita es 1. Tiene una sola solución, llamada <strong>raíz</strong>.</p>

<h3>El método</h3>
<ol>
  <li>Si hay <strong>denominadores</strong>, multiplica toda la ecuación por el mínimo común denominador.</li>
  <li>Elimina <strong>paréntesis</strong>.</li>
  <li>Pasa los términos con <strong>x</strong> a un lado y los números al otro.</li>
  <li><strong>Reduce</strong> términos semejantes.</li>
  <li><strong>Despeja</strong> x dividiendo entre su coeficiente.</li>
</ol>
<div class="ejemplo"><span class="et">Ejemplo sencillo</span>5(x − 2) = 3x + 4
<p>5x − 10 = 3x + 4 → 5x − 3x = 4 + 10 → 2x = 14</p>
<p class="calc"><b>x = 7</b></p></div>

<h3>Problema tipo de examen</h3>
<div class="ejemplo"><span class="et">Tercer parcial</span>Resuelve ${f('27 + x', '4')} = 3 + x
<p><b>Paso 1.</b> Se multiplican ambos miembros por 4: 27 + x = 4(3 + x).</p>
<p><b>Paso 2.</b> Se elimina el paréntesis: 27 + x = 12 + 4x.</p>
<p><b>Paso 3.</b> Las x a un lado y los números al otro: 27 − 12 = 4x − x.</p>
<p><b>Paso 4.</b> 15 = 3x.</p>
<p class="calc"><b>x = 5</b></p>
<p><b>Comprobación:</b> (27 + 5)/4 = 8 y 3 + 5 = 8.</p></div>
<div class="ojo"><span class="et">El error del 4</span>Al quitar el denominador hay que multiplicar <b>todo</b> el otro miembro: 4(3 + x) = 12 + 4x, no 12 + x ni 3 + 4x.</div>
<div class="ejemplo"><span class="et">Con dos fracciones</span>${f('x + 1', '2')} = ${f('x − 1', '3')}
<p>Se multiplica en cruz: 3(x + 1) = 2(x − 1) → 3x + 3 = 2x − 2.</p>
<p class="calc"><b>x = −5</b></p></div>
<div class="clave"><span class="et">Comprueba</span>Sustituye tu resultado en la ecuación original. Si los dos miembros dan lo mismo, es correcto.</div>`
      },
      {
        t: 'Problemas de planteo', min: 7,
        sub: 'Del enunciado a la ecuación.',
        html: `
<h3>El método</h3>
<ol>
  <li><strong>Lee</strong> el problema completo e identifica qué se pregunta.</li>
  <li><strong>Nombra</strong> la incógnita: «sea x el número…».</li>
  <li><strong>Traduce</strong> cada frase al lenguaje algebraico.</li>
  <li><strong>Plantea</strong> la ecuación: busca la palabra «es», «igual a» o «equivale»; ahí va el signo =.</li>
  <li><strong>Resuelve</strong> y <strong>comprueba</strong> con el enunciado.</li>
</ol>

<h3>Problema tipo de examen</h3>
<div class="ejemplo"><span class="et">Tercer parcial</span>El doble de un número aumentado en 12 es igual a su triple disminuido en 5. ¿Cuál es el número?
<p><b>Incógnita:</b> x = el número.</p>
<p><b>Traducción:</b> «el doble aumentado en 12» → 2x + 12. «su triple disminuido en 5» → 3x − 5.</p>
<p><b>Ecuación:</b> 2x + 12 = 3x − 5.</p>
<p><b>Solución:</b> 12 + 5 = 3x − 2x.</p>
<p class="calc"><b>x = 17</b></p>
<p><b>Comprobación:</b> 2(17) + 12 = 46 y 3(17) − 5 = 46.</p></div>

<h3>Otros modelos frecuentes</h3>
<div class="ejemplo"><span class="et">Números consecutivos</span>La suma de tres números consecutivos es 72. ¿Cuáles son?
<p>x + (x + 1) + (x + 2) = 72 → 3x + 3 = 72 → x = 23. Son <b>23, 24 y 25</b>.</p></div>
<div class="ejemplo"><span class="et">Edades</span>Ana tiene el triple de la edad de Luis y entre los dos suman 48 años.
<p>Luis: x. Ana: 3x. x + 3x = 48 → x = 12. Luis tiene <b>12</b> y Ana <b>36</b>.</p></div>
<div class="ejemplo"><span class="et">Geometría</span>El largo de un rectángulo mide 3 m más que el doble de su ancho y el perímetro es 54 m.
<p>Ancho: x. Largo: 2x + 3. 2(x + 2x + 3) = 54 → 6x + 6 = 54 → x = 8. Mide <b>8 m por 19 m</b>.</p></div>
<div class="clave"><span class="et">Responde lo que se pregunta</span>A veces x no es la respuesta final: si piden la edad de Ana, hay que calcular 3x.</div>`
      },
      {
        t: 'Despejes de fórmulas', min: 5,
        sub: 'Dejar sola la variable que te interesa.',
        html: `
<h3>La idea</h3>
<p><strong>Despejar</strong> es dejar una variable sola en un miembro de la igualdad. Se hace igual que al resolver una ecuación, solo que con letras: se «deshacen» las operaciones en orden inverso.</p>
<div class="tabla"><table>
  <tr><th>Si la variable está…</th><th>Pasa al otro lado…</th></tr>
  <tr><td>Sumando</td><td>Restando</td></tr>
  <tr><td>Restando</td><td>Sumando</td></tr>
  <tr><td>Multiplicando</td><td>Dividiendo</td></tr>
  <tr><td>Dividiendo</td><td>Multiplicando</td></tr>
  <tr><td>Elevada al cuadrado</td><td>Como raíz cuadrada</td></tr>
</table></div>
<p><strong>Orden:</strong> primero se quita lo que suma o resta, después lo que multiplica o divide, y al final las potencias.</p>

<h3>Ejemplos</h3>
<div class="ejemplo"><span class="et">Área del triángulo</span>De A = ${f('b · h', '2')}, despejar h.
<p>El 2 divide: pasa multiplicando → 2A = b · h. La b multiplica: pasa dividiendo.</p>
<p class="calc"><b>h = ${f('2A', 'b')}</b></p></div>
<div class="ejemplo"><span class="et">Velocidad</span>De v = ${f('d', 't')}, despejar t.
<p>t divide: pasa multiplicando → v · t = d. Ahora v multiplica: pasa dividiendo.</p>
<p class="calc"><b>t = ${f('d', 'v')}</b></p></div>
<div class="ejemplo"><span class="et">Temperatura</span>De F = ${f('9', '5')}C + 32, despejar C.
<p>Primero lo que suma: F − 32 = ${f('9', '5')}C. Luego la fracción: se multiplica por 5 y se divide entre 9.</p>
<p class="calc"><b>C = ${f('5(F − 32)', '9')}</b></p></div>
<div class="ejemplo"><span class="et">De Química</span>De PV = nRT, despejar T.
<p>n y R multiplican a T: pasan dividiendo.</p>
<p class="calc"><b>T = ${f('PV', 'nR')}</b></p></div>
<div class="ojo"><span class="et">Cuidado</span>Lo que suma no puede pasar dividiendo. En y = mx + b, primero se resta b y solo después se divide entre m: x = (y − b)/m.</div>`
      }
    ],
    tarjetas: [
      ['¿Qué es una ecuación de primer grado?', 'Una igualdad con incógnita cuyo <b>mayor exponente es 1</b>. Tiene una sola solución.'],
      ['Propiedad reflexiva de la igualdad', '<b>a = a</b>'],
      ['Propiedad simétrica de la igualdad', 'Si a = b, entonces <b>b = a</b>.'],
      ['Propiedad transitiva de la igualdad', 'Si a = b y b = c, entonces <b>a = c</b>.'],
      ['Propiedad aditiva de la igualdad', 'Si a = b, entonces <b>a + c = b + c</b>. Permite sumar o restar lo mismo en ambos miembros.'],
      ['Pasos para resolver una ecuación lineal', '1) Quitar denominadores. 2) Quitar paréntesis. 3) Agrupar x y números. 4) Reducir. 5) Despejar.'],
      ['¿Cómo se quitan los denominadores de una ecuación?', 'Multiplicando <b>todos</b> los términos por el mínimo común denominador.'],
      ['¿Cómo se comprueba la solución de una ecuación?', 'Sustituyéndola en la ecuación original: ambos miembros deben dar lo mismo.'],
      ['Tres números consecutivos en lenguaje algebraico', '<b>x, x + 1, x + 2</b>'],
      ['«El triple de un número disminuido en 5»', '<b>3x − 5</b>'],
      ['¿En qué orden se despeja una variable?', 'Primero lo que suma o resta, luego lo que multiplica o divide, y al final potencias y raíces.'],
      ['Despeja h de A = bh/2', '<b>h = 2A/b</b>'],
      ['Despeja x de y = mx + b', '<b>x = (y − b)/m</b>']
    ],
    preguntas: [
      ['La solución de la ecuación (27 + x)/4 = 3 + x es:', ['x = 5', 'x = 6', 'x = 8', 'x = −5'], '27 + x = 12 + 4x → 15 = 3x → x = 5.'],
      ['El doble de un número aumentado en 12 es igual a su triple disminuido en 5. ¿Cuál es el número?', ['17', '7', '−17', '3.4'], '2x + 12 = 3x − 5 → x = 17.'],
      ['La solución de 3x − 7 = 11 es:', ['x = 6', 'x = 4/3', 'x = 18', 'x = −6'], '3x = 18 → x = 6.'],
      ['La solución de 5(x − 2) = 3x + 4 es:', ['x = 7', 'x = 3', 'x = −3', 'x = 14'], '5x − 10 = 3x + 4 → 2x = 14.'],
      ['La solución de x/3 + 2 = 5 es:', ['x = 9', 'x = 1', 'x = 21', 'x = 7/3'], 'x/3 = 3 → x = 9.'],
      ['La solución de 2x + 3 = 5x − 9 es:', ['x = 4', 'x = −4', 'x = 2', 'x = 12/7'], '3 + 9 = 5x − 2x → 12 = 3x.'],
      ['La solución de 4 − (x − 3) = 2x − 8 es:', ['x = 5', 'x = 3', 'x = −5', 'x = 1'], '7 − x = 2x − 8 → 15 = 3x.'],
      ['La solución de (x + 1)/2 = (x − 1)/3 es:', ['x = −5', 'x = 5', 'x = −1', 'x = 1'], '3(x + 1) = 2(x − 1) → 3x + 3 = 2x − 2.'],
      ['La solución de 0.5x + 2 = 0.25x + 5 es:', ['x = 12', 'x = 4', 'x = 28', 'x = 0.75'], '0.25x = 3 → x = 12.'],
      ['«Si a = b, entonces a + c = b + c» es la propiedad:', ['Aditiva', 'Reflexiva', 'Simétrica', 'Transitiva'], 'Se puede sumar la misma cantidad en ambos miembros.'],
      ['La propiedad «a = a» de la igualdad se llama:', ['Reflexiva', 'Simétrica', 'Transitiva', 'Aditiva'], 'Toda cantidad es igual a sí misma.'],
      ['«Si a = b, entonces b = a» es la propiedad:', ['Simétrica', 'Reflexiva', 'Transitiva', 'Multiplicativa'], 'Los miembros de una igualdad se pueden intercambiar.'],
      ['«Si a = b y b = c, entonces a = c» es la propiedad:', ['Transitiva', 'Simétrica', 'Reflexiva', 'Distributiva'], 'Dos cantidades iguales a una tercera son iguales entre sí.'],
      ['En una ecuación de primer grado, el mayor exponente de la incógnita es:', ['1', '0', '2', 'Cualquiera'], 'Por eso también se llama ecuación lineal.'],
      ['La suma de tres números consecutivos es 72. El menor de ellos es:', ['23', '24', '25', '22'], 'x + (x + 1) + (x + 2) = 72 → 3x = 69.'],
      ['Ana tiene el triple de la edad de Luis y entre los dos suman 48 años. La edad de Luis es:', ['12 años', '36 años', '16 años', '24 años'], 'x + 3x = 48 → x = 12.'],
      ['El largo de un rectángulo mide 3 m más que el doble de su ancho y su perímetro es 54 m. El ancho mide:', ['8 m', '19 m', '9 m', '17 m'], '2(x + 2x + 3) = 54 → 6x + 6 = 54 → x = 8.'],
      ['Un número más su mitad es igual a 36. El número es:', ['24', '18', '12', '54'], 'x + x/2 = 36 → 3x/2 = 36 → x = 24.'],
      ['Al despejar h de A = bh/2 se obtiene:', ['h = 2A/b', 'h = Ab/2', 'h = A/(2b)', 'h = 2b/A'], 'El 2 pasa multiplicando y la b pasa dividiendo.'],
      ['Al despejar t de v = d/t se obtiene:', ['t = d/v', 't = v/d', 't = dv', 't = v − d'], 'vt = d → t = d/v.'],
      ['Al despejar T de PV = nRT se obtiene:', ['T = PV/(nR)', 'T = nR/(PV)', 'T = PVnR', 'T = PV − nR'], 'n y R multiplican a T, así que pasan dividiendo.'],
      ['Al despejar C de F = (9/5)C + 32 se obtiene:', ['C = 5(F − 32)/9', 'C = 9(F − 32)/5', 'C = 5F/9 − 32', 'C = (5F + 32)/9'], 'Primero se resta 32 y después se multiplica por 5/9.'],
      ['Al despejar x de y = mx + b se obtiene:', ['x = (y − b)/m', 'x = y/m − b', 'x = (y + b)/m', 'x = m(y − b)'], 'Primero se resta b y luego se divide entre m.']
    ]
  });
})();
