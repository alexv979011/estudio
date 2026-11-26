/* Unidad 4 · Estequiometría */
window.UNIDADES = window.UNIDADES || [];
window.UNIDADES.push({
  materia: 'quimica',
  id: 4,
  titulo: 'Estequiometría',
  corto: 'Estequiometría',
  color: '#30b955',
  resultado: 'entender las relaciones cuantitativas de las reacciones químicas y resolver problemas básicos de cada tipo.',
  temas: [
    {
      t: 'Tipos de reacciones', min: 5,
      sub: 'Cinco patrones que cubren casi todas las reacciones del curso.',
      html: `
<h3>Qué es una reacción</h3>
<p>En una <strong>reacción química</strong> unas sustancias (reactivos) se transforman en otras (productos): se rompen enlaces y se forman otros nuevos. Suele notarse por un cambio de color, un gas, un precipitado, o luz y calor.</p>

<h3>Los cinco tipos</h3>
<div class="tabla"><table>
  <tr><th>Tipo</th><th>Patrón</th><th>Ejemplo</th></tr>
  <tr><td><b>Síntesis</b> o combinación</td><td>A + B → AB</td><td>2 Mg + O₂ → 2 MgO</td></tr>
  <tr><td><b>Descomposición</b></td><td>AB → A + B</td><td>2 H₂O → 2 H₂ + O₂</td></tr>
  <tr><td><b>Sustitución simple</b></td><td>A + BC → AC + B</td><td>Zn + 2 HCl → ZnCl₂ + H₂</td></tr>
  <tr><td><b>Doble sustitución</b></td><td>AB + CD → AD + CB</td><td>AgNO₃ + NaCl → AgCl + NaNO₃</td></tr>
  <tr><td><b>Combustión</b></td><td>Combustible + O₂ → CO₂ + H₂O</td><td>CH₄ + 2 O₂ → CO₂ + 2 H₂O</td></tr>
</table></div>
<ul>
  <li><strong>Síntesis:</strong> varias sustancias dan <em>una sola</em>.</li>
  <li><strong>Descomposición:</strong> <em>una sola</em> da varias. Suele necesitar calor o electricidad.</li>
  <li><strong>Sustitución simple:</strong> un elemento desplaza a otro de un compuesto.</li>
  <li><strong>Doble sustitución:</strong> dos compuestos intercambian sus partes. La <strong>neutralización</strong> (ácido + base → sal + agua) es un caso.</li>
  <li><strong>Combustión:</strong> reacción rápida con oxígeno que libera luz y calor.</li>
</ul>

<h3>Otras clasificaciones</h3>
<ul>
  <li>Por la energía: <strong>exotérmicas</strong> (liberan calor) y <strong>endotérmicas</strong> (lo absorben).</li>
  <li>Por los electrones: <strong>redox</strong>, cuando cambian los números de oxidación.</li>
  <li>Por el sentido: <strong>irreversibles</strong> (→) y <strong>reversibles</strong> (⇌).</li>
</ul>
<div class="clave"><span class="et">Para identificar rápido</span>Cuenta las sustancias. Un solo producto → síntesis. Un solo reactivo → descomposición. Elemento + compuesto → sustitución simple. Compuesto + compuesto → doble sustitución.</div>`
    },
    {
      t: 'Lenguaje químico', min: 4,
      sub: 'Leer una ecuación como una frase.',
      html: `
<h3>Símbolo, fórmula y ecuación</h3>
<ul>
  <li><strong>Símbolo:</strong> representa un elemento (Fe).</li>
  <li><strong>Fórmula:</strong> representa una sustancia e indica qué átomos tiene y cuántos (H₂O).</li>
  <li><strong>Ecuación química:</strong> representa una reacción.</li>
</ul>

<h3>Anatomía de una ecuación</h3>
<p class="formula">2 H₂(g) + O₂(g) → 2 H₂O(l)<small>reactivos → productos</small></p>
<ul>
  <li><strong>Coeficiente</strong> (el 2 de adelante): cuántas moléculas o moles participan. Es lo único que puedes cambiar al balancear.</li>
  <li><strong>Subíndice</strong> (el 2 pequeño): cuántos átomos hay en la molécula. <em>Nunca se modifica</em>, porque cambiaría la sustancia.</li>
</ul>
<div class="tabla"><table>
  <tr><th>Símbolo</th><th>Significado</th></tr>
  <tr><td>→</td><td>Produce, reacción irreversible</td></tr>
  <tr><td>⇌</td><td>Reacción reversible</td></tr>
  <tr><td>(s) (l) (g) (ac)</td><td>Sólido, líquido, gas, disolución acuosa</td></tr>
  <tr><td>↑</td><td>Se desprende un gas</td></tr>
  <tr><td>↓</td><td>Se forma un precipitado (sólido insoluble)</td></tr>
  <tr><td>Δ</td><td>Se aplica calor</td></tr>
  <tr><td>Sobre la flecha</td><td>Catalizador o condiciones (Pt, luz, 300 °C)</td></tr>
</table></div>
<div class="ejemplo"><span class="et">Cómo se lee</span>CaCO₃(s) → CaO(s) + CO₂(g)↑ con Δ: «el carbonato de calcio sólido, al calentarse, se descompone en óxido de calcio sólido y dióxido de carbono gaseoso que se desprende».</div>
<div class="ojo"><span class="et">Cuidado</span>2 H₂O son dos moléculas de agua. H₂O₂ es otra sustancia distinta (agua oxigenada). Coeficiente y subíndice no son intercambiables.</div>`
    },
    {
      t: 'Balanceo por tanteo y redox', min: 9,
      sub: 'Igualar los átomos de cada lado sin tocar las fórmulas.',
      html: `
<h3>Por qué se balancea</h3>
<p>Por la ley de la conservación de la masa: debe haber <strong>el mismo número de átomos de cada elemento</strong> en reactivos y productos. Solo se ajustan los coeficientes.</p>

<h3>Método de tanteo</h3>
<p>Orden recomendado: <strong>metales → no metales → hidrógeno → oxígeno</strong>.</p>
<div class="ejemplo"><span class="et">Ejemplo 1</span>Fe + O₂ → Fe₂O₃
<p>Oxígeno: hay 2 y 3; el mínimo común es 6 → 3 O₂ y 2 Fe₂O₃.<br>Hierro: ahora hay 4 a la derecha → 4 Fe.</p>
<p class="calc"><b>4 Fe + 3 O₂ → 2 Fe₂O₃</b></p></div>
<div class="ejemplo"><span class="et">Ejemplo 2 · combustión</span>C₃H₈ + O₂ → CO₂ + H₂O
<p>Carbono: 3 → 3 CO₂. Hidrógeno: 8 → 4 H₂O. Oxígeno: 6 + 4 = 10 → 5 O₂.</p>
<p class="calc"><b>C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O</b></p></div>

<h3>Conceptos redox</h3>
<div class="tabla"><table>
  <tr><th></th><th>Oxidación</th><th>Reducción</th></tr>
  <tr><td><b>Electrones</b></td><td>Se pierden</td><td>Se ganan</td></tr>
  <tr><td><b>Número de oxidación</b></td><td>Aumenta</td><td>Disminuye</td></tr>
  <tr><td><b>La sustancia es el…</b></td><td>Agente reductor</td><td>Agente oxidante</td></tr>
</table></div>
<p>Siempre ocurren juntas: los electrones que pierde una especie los gana otra. El <strong>agente oxidante</strong> es el que se reduce; el <strong>agente reductor</strong>, el que se oxida.</p>

<h3>Método redox, paso a paso</h3>
<ol>
  <li>Asigna números de oxidación a todos los átomos.</li>
  <li>Identifica el elemento que se oxida y el que se reduce.</li>
  <li>Calcula los electrones perdidos y ganados.</li>
  <li><strong>Cruza</strong> esos números como coeficientes para igualar los electrones.</li>
  <li>Termina por tanteo (H y O al final).</li>
</ol>
<div class="ejemplo"><span class="et">Ejemplo</span>HNO₃ + H₂S → NO + S + H₂O
<p>N pasa de +5 a +2: <b>gana 3 e⁻</b> (se reduce). S pasa de −2 a 0: <b>pierde 2 e⁻</b> (se oxida).</p>
<p>Se cruzan: 2 para el nitrógeno y 3 para el azufre → 2 HNO₃ + 3 H₂S → 2 NO + 3 S + H₂O.</p>
<p>Hidrógeno: 2 + 6 = 8 → 4 H₂O. Oxígeno: 6 = 2 + 4. Correcto.</p>
<p class="calc"><b>2 HNO₃ + 3 H₂S → 2 NO + 3 S + 4 H₂O</b></p>
<p>Agente oxidante: HNO₃. Agente reductor: H₂S.</p></div>
<div class="clave"><span class="et">Verifica siempre</span>Al terminar, cuenta los átomos de cada elemento en ambos lados. Si no coinciden, la ecuación no está balanceada.</div>`
    },
    {
      t: 'Concepto de mol', min: 3,
      sub: 'La «docena» de los químicos.',
      html: `
<h3>El problema que resuelve</h3>
<p>Los átomos son demasiado pequeños para contarlos de uno en uno. El <strong>mol</strong> es la unidad de <strong>cantidad de sustancia</strong> del Sistema Internacional: permite contar partículas pesándolas.</p>
<p class="formula">1 mol = 6.022 × 10²³ partículas<small>Número de Avogadro (N<sub>A</sub>)</small></p>
<p>Igual que una docena son 12 cosas, sean huevos o lápices, un mol son 6.022 × 10²³ entidades, sean átomos, moléculas, iones o electrones.</p>
<div class="ejemplo"><span class="et">Ejemplos</span>1 mol de átomos de hierro = 6.022 × 10²³ átomos de Fe.<br>1 mol de agua = 6.022 × 10²³ moléculas de H₂O, que contienen 2 mol de átomos de H y 1 mol de átomos de O.</div>

<h3>Por qué es útil</h3>
<p>Los coeficientes de una ecuación balanceada indican <strong>moles</strong>. En 2 H₂ + O₂ → 2 H₂O, dos moles de hidrógeno reaccionan con un mol de oxígeno y forman dos moles de agua. El mol es el puente entre lo que se ve en la balanza y lo que pasa entre los átomos.</p>
<div class="clave"><span class="et">Dimensión del número</span>6.022 × 10²³ es tan grande que un mol de granos de arena cubriría todo México con una capa de decenas de metros de espesor. Un mol de moléculas de agua, en cambio, cabe en una cucharada: 18 mL.</div>`
    },
    {
      t: 'Masa molar y número de Avogadro', min: 6,
      sub: 'Convertir entre gramos, moles y partículas.',
      html: `
<h3>Masa molar</h3>
<p>La <strong>masa molar (M)</strong> es la masa de un mol de una sustancia, en g/mol. Numéricamente es igual a la masa atómica o molecular de la tabla periódica.</p>
<div class="ejemplo"><span class="et">Cómo calcularla</span>H₂SO₄: 2(1) + 32 + 4(16) = <b>98 g/mol</b><br>CaCO₃: 40 + 12 + 3(16) = <b>100 g/mol</b><br>H₂O: 2(1) + 16 = <b>18 g/mol</b></div>

<h3>Calculadora</h3>
<div data-widget="molar"></div>

<h3>El mapa de conversiones</h3>
<figure class="fig">
  <div class="flujo"><div class="nodo">Gramos<small>masa (m)</small></div><div class="fl doble">÷ M<br>× M</div><div class="nodo a">Moles<small>n</small></div><div class="fl doble">× N<sub>A</sub><br>÷ N<sub>A</sub></div><div class="nodo">Partículas<small>N</small></div></div>
  <div class="pie-fig">Todo pasa por los moles. De gramos a partículas son dos pasos.</div>
</figure>
<p class="formula">n = m / M &nbsp;·&nbsp; N = n × N<sub>A</sub></p>
<div class="ejemplo"><span class="et">Gramos → moles → moléculas</span>¿Cuántas moléculas hay en 36 g de agua?
<p class="calc">n = 36 g / 18 g/mol = 2.0 mol</p>
<p class="calc">N = 2.0 × 6.022 × 10²³ = 1.20 × 10²⁴ moléculas</p></div>
<div class="ejemplo"><span class="et">Moles → gramos</span>¿Qué masa tienen 0.25 mol de CaCO₃?
<p class="calc">m = n × M = 0.25 × 100 = 25 g</p></div>
<div class="ojo"><span class="et">Elementos diatómicos</span>El oxígeno gaseoso es O₂: su masa molar es 32 g/mol, no 16. Lo mismo con H₂ (2), N₂ (28) y Cl₂ (71).</div>`
    },
    {
      t: 'Composición porcentual', min: 4,
      sub: 'Qué porcentaje de la masa aporta cada elemento.',
      html: `
<h3>Definición</h3>
<p>La <strong>composición porcentual</strong> indica el porcentaje en masa de cada elemento en un compuesto. Como la proporción de un compuesto es fija (ley de Proust), es la misma en cualquier muestra.</p>
<p class="formula">% = (masa del elemento / masa molar) × 100</p>

<h3>Pasos</h3>
<ol>
  <li>Calcula la masa molar del compuesto.</li>
  <li>Multiplica la masa atómica de cada elemento por su subíndice.</li>
  <li>Divide entre la masa molar y multiplica por 100.</li>
  <li>Comprueba que los porcentajes sumen 100.</li>
</ol>
<div class="ejemplo"><span class="et">Agua, H₂O (18 g/mol)</span>
<p class="calc">% H = (2 / 18) × 100 = 11.1 %</p>
<p class="calc">% O = (16 / 18) × 100 = 88.9 %</p></div>
<div class="ejemplo"><span class="et">Carbonato de calcio, CaCO₃ (100 g/mol)</span>
<p class="calc">% Ca = 40 % · % C = 12 % · % O = 48 %</p></div>
<p>La calculadora del tema anterior te muestra la composición de cualquier fórmula.</p>

<h3>Fórmula empírica y fórmula molecular</h3>
<p>La <strong>fórmula empírica</strong> es la proporción más simple de átomos. La <strong>fórmula molecular</strong> es la real, y siempre es un múltiplo entero de la empírica. Es el problema que abre la guía del tercer parcial.</p>
<ol>
  <li>Toma los porcentajes como gramos (base de 100 g).</li>
  <li>Divide cada uno entre su masa atómica: obtienes moles.</li>
  <li>Divide todos entre el menor.</li>
  <li>Si queda .5, .33 o .25, multiplica todos por 2, 3 o 4 para tener enteros.</li>
  <li>Para la molecular: divide la masa molar real entre la masa de la fórmula empírica y multiplica los subíndices por ese número.</li>
</ol>
<div class="ejemplo"><span class="et">Guía del tercer parcial</span>El arseniuro de galio tiene 48.2 % de Ga y 51.8 % de As.
<p class="calc">Ga: 48.2 / 69.7 = 0.691 · As: 51.8 / 74.9 = 0.691</p>
<p>Proporción 1 : 1 → fórmula empírica <b>GaAs</b>.</p></div>
<div class="ejemplo"><span class="et">Guía del tercer parcial</span>La aspirina tiene 60 % de C, 4.48 % de H y 35.5 % de O, y masa molar de 180.2 g/mol.
<p class="calc">C: 60 / 12.01 = 5.00 · H: 4.48 / 1.008 = 4.44 · O: 35.5 / 16 = 2.22</p>
<p>Entre el menor: 2.25 : 2 : 1. Se multiplica por 4 → C₉H₈O₄, que pesa 180 g/mol.</p>
<p>180.2 / 180 = 1, así que la fórmula molecular es <b>C₉H₈O₄</b>.</p></div>

<h3>Para qué sirve</h3>
<p>Permite saber cuánto de un elemento hay en una muestra y, al revés, deducir la <strong>fórmula empírica</strong> (la proporción más simple de átomos) a partir de un análisis.</p>
<div class="ejemplo"><span class="et">Aplicación</span>¿Cuánto hierro hay en 500 g de Fe₂O₃ (160 g/mol)? % Fe = (112 / 160) × 100 = 70 %. Entonces 500 × 0.70 = <b>350 g de hierro</b>.</div>`
    },
    {
      t: 'Relaciones estequiométricas', min: 10,
      sub: 'Mol-mol, masa-masa, masa-volumen y volumen-volumen.',
      html: `
<h3>La idea</h3>
<p>La <strong>estequiometría</strong> calcula cuánto reactivo se necesita o cuánto producto se obtiene. La clave es que los <strong>coeficientes</strong> de la ecuación balanceada son una <strong>proporción en moles</strong>.</p>
<figure class="fig">
  <div class="flujo"><div class="nodo">Dato<small>g, L o partículas de A</small></div><div class="fl"></div><div class="nodo a">Moles de A</div><div class="fl">coeficientes</div><div class="nodo a">Moles de B</div><div class="fl"></div><div class="nodo">Resultado<small>g, L o partículas de B</small></div></div>
  <div class="pie-fig">Todos los problemas siguen esta ruta. Cambia solo cómo entras y cómo sales.</div>
</figure>
<div class="ojo"><span class="et">Antes que nada</span>Verifica que la ecuación esté <b>balanceada</b>. Con una ecuación sin balancear, todo el cálculo sale mal.</div>

<h3>Mol-mol</h3>
<p>Solo se usa la proporción de coeficientes.</p>
<div class="ejemplo"><span class="et">N₂ + 3 H₂ → 2 NH₃</span>¿Cuántos moles de NH₃ se obtienen con 6 mol de H₂?
<p class="calc">6 mol H₂ × (2 mol NH₃ / 3 mol H₂) = 4 mol NH₃</p></div>

<h3>Masa-masa</h3>
<p>Gramos → moles → moles → gramos.</p>
<div class="ejemplo"><span class="et">2 H₂ + O₂ → 2 H₂O</span>¿Cuántos gramos de agua se forman con 8 g de H₂?
<p class="calc">8 g ÷ 2 g/mol = 4 mol H₂</p>
<p class="calc">4 mol H₂ × (2 / 2) = 4 mol H₂O</p>
<p class="calc">4 mol × 18 g/mol = 72 g de H₂O</p></div>

<h3>Masa-volumen</h3>
<p>Igual, pero el gas se expresa en litros. En condiciones normales, 1 mol de gas = 22.4 L.</p>
<div class="ejemplo"><span class="et">CaCO₃ → CaO + CO₂</span>¿Qué volumen de CO₂ (CNPT) se desprende al descomponer 50 g de CaCO₃?
<p class="calc">50 g ÷ 100 g/mol = 0.50 mol CaCO₃ → 0.50 mol CO₂</p>
<p class="calc">0.50 mol × 22.4 L/mol = 11.2 L de CO₂</p></div>

<h3>Volumen-volumen</h3>
<p>Entre gases a la misma presión y temperatura, los coeficientes son también una proporción de <strong>volúmenes</strong> (ley de Gay-Lussac de los volúmenes de combinación). No hace falta pasar por moles.</p>
<div class="ejemplo"><span class="et">N₂ + 3 H₂ → 2 NH₃</span>¿Cuántos litros de NH₃ se obtienen con 6 L de H₂?
<p class="calc">6 L H₂ × (2 L NH₃ / 3 L H₂) = 4 L NH₃</p></div>
<h3>Reactivo limitante</h3>
<p>Cuando te dan las cantidades de <strong>dos reactivos</strong>, uno se acaba primero: es el <strong>reactivo limitante</strong> y determina cuánto producto se forma. El otro queda en exceso.</p>
<ol>
  <li>Convierte ambos reactivos a moles.</li>
  <li>Calcula cuánto producto daría cada uno por separado.</li>
  <li>El que dé <strong>menos</strong> producto es el limitante, y ese es el resultado.</li>
</ol>
<div class="ejemplo"><span class="et">Guía del tercer parcial</span>¿Cuántos gramos de BaSO₄ se forman con 200 g de Ba(NO₃)₂ y 100 g de Na₂SO₄?
<p class="calc">Ba(NO₃)₂ + Na₂SO₄ → BaSO₄ + 2 NaNO₃</p>
<p>Ba(NO₃)₂: 200 / 261.3 = 0.765 mol. Na₂SO₄: 100 / 142.0 = 0.704 mol. La proporción es 1 a 1, así que el Na₂SO₄ es el limitante.</p>
<p class="calc">0.704 mol × 233.4 g/mol = 164.3 g de BaSO₄</p></div>

<div class="clave"><span class="et">Método único</span>1) Balancea. 2) Convierte el dato a moles. 3) Aplica la proporción de coeficientes. 4) Convierte los moles a la unidad que te piden.</div>`
    },
    {
      t: 'Volumen de Avogadro', min: 3,
      sub: 'Un mol de cualquier gas, 22.4 litros.',
      html: `
<h3>Ley de Avogadro</h3>
<p>Volúmenes iguales de gases distintos, medidos a la misma presión y temperatura, contienen el <strong>mismo número de moléculas</strong>. El volumen de un gas depende de cuántas moléculas hay, no de cuáles son.</p>

<h3>Volumen molar</h3>
<p class="formula">1 mol de gas = 22.4 L<small>en condiciones normales: 0 °C (273 K) y 1 atm</small></p>
<p>Un mol de H₂ (2 g), un mol de O₂ (32 g) y un mol de CO₂ (44 g) tienen masas distintas, pero los tres ocupan 22.4 L en CNPT y contienen 6.022 × 10²³ moléculas.</p>
<figure class="fig">
  <div class="flujo"><div class="nodo">Litros de gas<small>en CNPT</small></div><div class="fl doble">÷ 22.4<br>× 22.4</div><div class="nodo a">Moles</div><div class="fl doble">× M<br>÷ M</div><div class="nodo">Gramos</div></div>
</figure>
<div class="ejemplo"><span class="et">Litros → moles → gramos</span>¿Qué masa tienen 44.8 L de O₂ en CNPT?
<p class="calc">44.8 L ÷ 22.4 L/mol = 2.0 mol</p>
<p class="calc">2.0 mol × 32 g/mol = 64 g</p></div>
<div class="ejemplo"><span class="et">Gramos → litros</span>¿Qué volumen ocupan 11 g de CO₂ en CNPT?
<p class="calc">11 g ÷ 44 g/mol = 0.25 mol → 0.25 × 22.4 = 5.6 L</p></div>
<div class="ojo"><span class="et">Solo en condiciones normales</span>El valor 22.4 L vale únicamente a 0 °C y 1 atm, y solo para gases. En otras condiciones se usa PV = nRT.</div>`
    }
  ],
  tarjetas: [
    ['Patrón de una reacción de síntesis', '<b>A + B → AB.</b> Varias sustancias forman una sola. Ej.: 2 Mg + O₂ → 2 MgO.'],
    ['Patrón de una sustitución simple', '<b>A + BC → AC + B.</b> Un elemento desplaza a otro. Ej.: Zn + 2 HCl → ZnCl₂ + H₂.'],
    ['Patrón de una doble sustitución', '<b>AB + CD → AD + CB.</b> Dos compuestos intercambian sus partes.'],
    ['Productos de la combustión completa de un hidrocarburo', '<b>CO₂ y H₂O</b>, además de luz y calor.'],
    ['Diferencia entre coeficiente y subíndice', 'El <b>coeficiente</b> indica cuántas moléculas hay y se puede ajustar. El <b>subíndice</b> indica cuántos átomos tiene la molécula y nunca se cambia.'],
    ['¿Qué significan ↑, ↓ y Δ?', 'Se desprende un gas, se forma un precipitado y se aplica calor.'],
    ['Orden recomendado para balancear por tanteo', 'Metales → no metales → hidrógeno → oxígeno.'],
    ['Oxidación y reducción', '<b>Oxidación:</b> pérdida de electrones, sube el número de oxidación. <b>Reducción:</b> ganancia, baja.'],
    ['¿Quién es el agente oxidante?', 'La sustancia que <b>se reduce</b> (gana electrones) y provoca la oxidación de la otra.'],
    ['¿Qué es un mol?', 'La cantidad de sustancia que contiene <b>6.022 × 10²³</b> partículas.'],
    ['¿Qué es la masa molar?', 'La masa de un mol de sustancia, en <b>g/mol</b>. Numéricamente igual a la masa atómica o molecular.'],
    ['Masa molar de H₂O, CO₂ y H₂SO₄', '<b>18, 44 y 98</b> g/mol.'],
    ['Fórmula para pasar de gramos a moles', '<b>n = m / M</b>'],
    ['Fórmula de la composición porcentual', '% = (masa del elemento en la fórmula / masa molar) × 100'],
    ['¿Qué representan los coeficientes de una ecuación balanceada?', 'La <b>proporción en moles</b> (y, entre gases, en volúmenes) de reactivos y productos.'],
    ['Ruta de un problema masa-masa', 'Gramos de A → moles de A → moles de B (coeficientes) → gramos de B.'],
    ['Volumen molar', '<b>22.4 L/mol</b> para cualquier gas a 0 °C y 1 atm.'],
    ['Ley de Avogadro', 'Volúmenes iguales de gases, a la misma P y T, contienen el mismo número de moléculas.']
  ],
  preguntas: [
    ['La reacción 2 KClO₃ → 2 KCl + 3 O₂ es de:', ['Descomposición', 'Síntesis', 'Sustitución simple', 'Doble sustitución'], 'Un solo reactivo se separa en dos sustancias.'],
    ['La reacción Zn + CuSO₄ → ZnSO₄ + Cu es de:', ['Sustitución simple', 'Doble sustitución', 'Síntesis', 'Combustión'], 'El zinc desplaza al cobre de su compuesto.'],
    ['La reacción HCl + NaOH → NaCl + H₂O es de:', ['Doble sustitución (neutralización)', 'Síntesis', 'Descomposición', 'Sustitución simple'], 'Dos compuestos intercambian sus iones; ácido + base dan sal y agua.'],
    ['En una ecuación química, el símbolo ↓ indica:', ['Formación de un precipitado', 'Desprendimiento de un gas', 'Aplicación de calor', 'Reacción reversible'], 'La flecha hacia abajo señala un sólido insoluble que se deposita.'],
    ['Al balancear una ecuación solo se pueden modificar los:', ['Coeficientes', 'Subíndices', 'Símbolos', 'Estados de agregación'], 'Cambiar un subíndice cambiaría la sustancia.'],
    ['Al balancear Al + O₂ → Al₂O₃, los coeficientes son:', ['4, 3, 2', '2, 3, 1', '2, 1, 1', '4, 2, 3'], '4 Al + 3 O₂ → 2 Al₂O₃: 4 Al y 6 O en cada lado.'],
    ['Al balancear C₃H₈ + O₂ → CO₂ + H₂O, el coeficiente del O₂ es:', ['5', '3', '4', '10'], 'C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O: 10 oxígenos de cada lado.'],
    ['Una sustancia que pierde electrones:', ['Se oxida y es el agente reductor', 'Se reduce y es el agente oxidante', 'Se oxida y es el agente oxidante', 'Se reduce y es el agente reductor'], 'Oxidación es pérdida de electrones; quien se oxida reduce a la otra especie.'],
    ['En Zn + Cu²⁺ → Zn²⁺ + Cu, el agente oxidante es:', ['Cu²⁺', 'Zn', 'Zn²⁺', 'Cu'], 'El Cu²⁺ gana electrones (se reduce), por lo que oxida al zinc.'],
    ['¿Cuántas partículas hay en un mol?', ['6.022 × 10²³', '6.022 × 10⁻²³', '22.4', '1.66 × 10²⁴'], 'Es el número de Avogadro.'],
    ['La masa molar del CaCO₃ (Ca = 40, C = 12, O = 16) es:', ['100 g/mol', '68 g/mol', '84 g/mol', '116 g/mol'], '40 + 12 + 3(16) = 100.'],
    ['¿Cuántos moles hay en 36 g de agua (18 g/mol)?', ['2 mol', '0.5 mol', '18 mol', '648 mol'], 'n = m / M = 36 / 18 = 2.'],
    ['El porcentaje de carbono en el CO₂ (C = 12, O = 16) es:', ['27.3 %', '72.7 %', '12 %', '42.9 %'], '(12 / 44) × 100 = 27.3 %.'],
    ['En N₂ + 3 H₂ → 2 NH₃, ¿cuántos moles de NH₃ se forman con 9 mol de H₂?', ['6 mol', '13.5 mol', '3 mol', '18 mol'], '9 × (2 / 3) = 6 mol.'],
    ['En 2 H₂ + O₂ → 2 H₂O, ¿cuántos gramos de agua se obtienen con 4 g de H₂?', ['36 g', '18 g', '72 g', '4 g'], '4 g ÷ 2 = 2 mol H₂ → 2 mol H₂O × 18 = 36 g.'],
    ['¿Qué volumen ocupan 2 mol de CO₂ en condiciones normales?', ['44.8 L', '22.4 L', '11.2 L', '88 L'], '2 mol × 22.4 L/mol = 44.8 L.'],
    ['En CaCO₃ → CaO + CO₂, ¿qué volumen de CO₂ (CNPT) producen 200 g de CaCO₃ (100 g/mol)?', ['44.8 L', '22.4 L', '88 L', '4.48 L'], '200 g = 2 mol CaCO₃ → 2 mol CO₂ × 22.4 = 44.8 L.'],
    ['La reacción CH₄ + 2 O₂ → CO₂ + 2 H₂O se clasifica como:', ['Combustión', 'Síntesis', 'Descomposición', 'Neutralización'], 'Un combustible reacciona con oxígeno y produce CO₂, agua y energía.'],
    ['En la reacción 2 Mg + O₂ → 2 MgO, el magnesio:', ['Se oxida: pasa de 0 a +2', 'Se reduce: pasa de +2 a 0', 'No cambia su número de oxidación', 'Gana dos electrones'], 'Pierde dos electrones; su número de oxidación aumenta.'],
    ['¿Cuántas moléculas hay en 0.5 mol de CO₂?', ['3.011 × 10²³', '6.022 × 10²³', '1.204 × 10²⁴', '0.5 × 10²³'], '0.5 × 6.022 × 10²³ = 3.011 × 10²³.'],
    ['¿Qué masa tienen 0.25 mol de H₂SO₄ (98 g/mol)?', ['24.5 g', '392 g', '98 g', '49 g'], 'm = n × M = 0.25 × 98 = 24.5 g.'],
    ['En N₂ + 3 H₂ → 2 NH₃, a la misma presión y temperatura, ¿cuántos litros de H₂ reaccionan con 5 L de N₂?', ['15 L', '5 L', '10 L', '1.67 L'], 'Entre gases los coeficientes son proporción de volúmenes: 5 × 3 = 15 L.'],
    // --- Problemas en el estilo de la guía del tercer parcial del profesor ---
    ['El arseniuro de galio contiene 48.2 % de Ga y 51.8 % de As. ¿Cuál es su fórmula empírica? (Ga = 69.7, As = 74.9)', ['GaAs', 'Ga₂As', 'GaAs₂', 'Ga₂As₃'], '48.2/69.7 = 0.691 y 51.8/74.9 = 0.691: proporción 1 a 1.'],
    ['La aspirina tiene masa molar de 180.2 g/mol y contiene 60 % de C, 4.48 % de H y 35.5 % de O. Su fórmula molecular es:', ['C₉H₈O₄', 'C₆H₁₂O₆', 'C₈H₈O₅', 'C₁₀H₁₂O₃'], 'Moles: C 5.0, H 4.44, O 2.22 → 2.25 : 2 : 1 → ×4 = C₉H₈O₄, que pesa 180 g/mol.'],
    ['Un compuesto de carbono y cloro tiene 10.13 % de C, 89.87 % de Cl y masa molecular de 236.7 g. Su fórmula molecular es:', ['C₂Cl₆', 'CCl₃', 'CCl₄', 'C₆Cl₆'], 'Empírica CCl₃ (118.4 g); 236.7 / 118.4 = 2, así que es C₂Cl₆.'],
    ['Una muestra de 3.054 g de vanadio se combinó con oxígeno y formó 5.454 g de producto. Su fórmula empírica es: (V = 50.94)', ['V₂O₅', 'VO₂', 'V₂O₃', 'VO'], 'Oxígeno: 2.400 g. Moles: V 0.0600, O 0.150 → 1 : 2.5 → V₂O₅.'],
    ['El análisis de un compuesto dio K 26.57 %, Cr 35.36 % y O 38.07 %. Su fórmula empírica es:', ['K₂Cr₂O₇', 'K₂CrO₄', 'KCrO₃', 'KCr₂O₇'], 'Moles: K 0.68, Cr 0.68, O 2.38 → 1 : 1 : 3.5 → ×2 = K₂Cr₂O₇.'],
    ['Una sustancia de fórmula A₂O tiene 60 % de A y 40 % de O. La masa atómica de A es:', ['12', '24', '40', '6'], 'Si 16 g de O son el 40 %, la masa molar es 40; quedan 24 g para dos átomos de A.'],
    ['Una muestra de cloruro de etileno contiene 6 g de C, 1 g de H y 17.75 g de Cl. El porcentaje de cloro es:', ['71.7 %', '17.75 %', '24.2 %', '4.0 %'], 'Masa total: 24.75 g. 17.75 / 24.75 × 100 = 71.7 %.'],
    ['Al balancear Al₂(CO₃)₃ → Al₂O₃ + CO₂, el coeficiente del CO₂ y el tipo de reacción son:', ['3, descomposición', '3, síntesis', '2, descomposición', '1, sustitución simple'], 'Al₂(CO₃)₃ → Al₂O₃ + 3 CO₂: un solo reactivo se separa en dos sustancias.'],
    ['La reacción 2 NH₄I + Cl₂ → 2 NH₄Cl + I₂ se clasifica como:', ['Sustitución simple', 'Doble sustitución', 'Síntesis', 'Descomposición'], 'El cloro desplaza al yodo de su compuesto.'],
    ['Al balancear CrCl₃ + AgNO₃ → Cr(NO₃)₃ + AgCl, los coeficientes son:', ['1, 3, 1, 3', '1, 1, 1, 1', '3, 1, 3, 1', '2, 3, 2, 3'], 'Se necesitan 3 NO₃ y 3 Cl: CrCl₃ + 3 AgNO₃ → Cr(NO₃)₃ + 3 AgCl.'],
    ['Al balancear Al + C → Al₄C₃, los coeficientes son:', ['4, 3, 1', '1, 1, 1', '4, 1, 3', '3, 4, 1'], '4 Al + 3 C → Al₄C₃. Es una reacción de síntesis.'],
    ['En 4 Al + 3 MnO₂ → 3 Mn + 2 Al₂O₃, el agente oxidante es:', ['MnO₂', 'Al', 'Mn', 'Al₂O₃'], 'El manganeso pasa de +4 a 0: se reduce, por lo que MnO₂ oxida al aluminio.'],
    ['En Fe₂O₃ + 3 CO → 2 Fe + 3 CO₂, la especie que se oxida es:', ['El carbono, de +2 a +4', 'El hierro, de +3 a 0', 'El oxígeno, de −2 a 0', 'El hierro, de 0 a +3'], 'El carbono pierde electrones; el CO es el agente reductor.'],
    ['¿Cuántos gramos de AgNO₃ (169.9 g/mol) se requieren para producir 1.25 mol de Ag₂S? 2 AgNO₃ + H₂S → Ag₂S + 2 HNO₃', ['424.7 g', '212.4 g', '849.5 g', '135.9 g'], '1.25 mol Ag₂S × 2 = 2.5 mol AgNO₃ × 169.9 = 424.7 g.'],
    ['¿Qué masa de CO₂ se produce al quemar 75 g de pentano (C₅H₁₂, 72.15 g/mol)? C₅H₁₂ + 8 O₂ → 5 CO₂ + 6 H₂O', ['228.7 g', '45.7 g', '375 g', '122.9 g'], '75 / 72.15 = 1.04 mol × 5 = 5.20 mol CO₂ × 44.01 = 228.7 g.'],
    ['¿Cuántos gramos de NaOH se producen a partir de 500 g de Ca(OH)₂ (74.1 g/mol)? Ca(OH)₂ + Na₂CO₃ → 2 NaOH + CaCO₃', ['540 g', '270 g', '1000 g', '926 g'], '500 / 74.1 = 6.75 mol × 2 = 13.5 mol NaOH × 40 = 540 g.'],
    ['¿Cuántos moles de aluminio se necesitan para producir 1.3 mol de Al₂O₃? 4 Al + 3 O₂ → 2 Al₂O₃', ['2.6 mol', '1.3 mol', '0.65 mol', '5.2 mol'], '1.3 × (4/2) = 2.6 mol.'],
    ['Se mezclan 200 g de Ba(NO₃)₂ (261.3 g/mol) y 100 g de Na₂SO₄ (142.0 g/mol). ¿Cuántos gramos de BaSO₄ (233.4 g/mol) se forman?', ['164.3 g', '178.6 g', '300 g', '82.2 g'], 'Moles: 0.765 y 0.704. El Na₂SO₄ es el reactivo limitante: 0.704 × 233.4 = 164.3 g.'],
    ['Para obtener 15 L de CO₂ en condiciones normales según Na₂CO₃ + 2 HCl → CO₂ + H₂O + 2 NaCl, ¿qué masa de Na₂CO₃ (106 g/mol) se necesita?', ['71.0 g', '142 g', '35.5 g', '1590 g'], '15 / 22.4 = 0.670 mol CO₂ = 0.670 mol Na₂CO₃ × 106 = 71.0 g.']
  ]
});
