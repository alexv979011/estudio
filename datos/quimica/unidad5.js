/* Unidad 5 · Disoluciones y pH */
window.UNIDADES = window.UNIDADES || [];
window.UNIDADES.push({
  materia: 'quimica',
  id: 5,
  titulo: 'Disoluciones y pH',
  corto: 'Disoluciones y pH',
  color: '#ff375f',
  resultado: 'interpretar concentraciones y resolver ejercicios básicos de disoluciones y pH.',
  temas: [
    {
      t: 'Concepto y clasificación de soluciones', min: 5,
      sub: 'Soluto, disolvente y cuánto cabe.',
      html: `
<h3>Qué es una disolución</h3>
<p>Una <strong>disolución</strong> o solución es una <strong>mezcla homogénea</strong> de dos o más sustancias. Tiene dos partes:</p>
<ul>
  <li><strong>Soluto:</strong> lo que se disuelve; está en menor cantidad.</li>
  <li><strong>Disolvente:</strong> lo que disuelve; está en mayor cantidad. El agua es el «disolvente universal».</li>
</ul>
<p class="formula">Disolución = soluto + disolvente</p>

<h3>Por estado físico</h3>
<div class="tabla"><table>
  <tr><th>Disolución</th><th>Ejemplo</th></tr>
  <tr><td>Sólido en líquido</td><td>Sal en agua</td></tr>
  <tr><td>Líquido en líquido</td><td>Alcohol en agua</td></tr>
  <tr><td>Gas en líquido</td><td>CO₂ en un refresco</td></tr>
  <tr><td>Gas en gas</td><td>Aire</td></tr>
  <tr><td>Sólido en sólido</td><td>Aleaciones: bronce, acero</td></tr>
</table></div>

<h3>Por concentración</h3>
<ul>
  <li><strong>Diluida:</strong> poco soluto.</li>
  <li><strong>Concentrada:</strong> mucho soluto.</li>
  <li><strong>Saturada:</strong> tiene el máximo de soluto que puede disolver a esa temperatura.</li>
  <li><strong>Sobresaturada:</strong> tiene más soluto que la saturada; es inestable y cristaliza con facilidad.</li>
</ul>

<h3>Solubilidad</h3>
<p>La <strong>solubilidad</strong> es la cantidad máxima de soluto que se disuelve en una cantidad dada de disolvente a cierta temperatura. Depende de:</p>
<ul>
  <li><strong>Naturaleza:</strong> «lo semejante disuelve a lo semejante». Lo polar disuelve a lo polar (sal en agua); lo no polar, a lo no polar (grasa en gasolina).</li>
  <li><strong>Temperatura:</strong> al subir, casi todos los sólidos se disuelven más; los gases, menos.</li>
  <li><strong>Presión:</strong> solo afecta a los gases; a mayor presión, más se disuelven.</li>
</ul>
<p>Agitar o moler el soluto hace que se disuelva más rápido, pero no cambia cuánto se disuelve.</p>
<div class="clave"><span class="et">Electrolitos</span>Los solutos que se separan en iones (sales, ácidos, bases) forman disoluciones que <b>conducen la electricidad</b>. El azúcar se disuelve pero no forma iones: es un no electrolito.</div>`
    },
    {
      t: 'Porcentaje en peso y volumen', min: 5,
      sub: 'La forma más cotidiana de expresar una concentración.',
      html: `
<h3>Concentración</h3>
<p>La <strong>concentración</strong> indica cuánto soluto hay en una cantidad dada de disolución. Las unidades porcentuales son las llamadas unidades físicas.</p>

<h3>Porcentaje en masa (% m/m)</h3>
<p class="formula">% m/m = (masa de soluto / masa de disolución) × 100</p>
<div class="ejemplo"><span class="et">Ejemplo</span>Se disuelven 20 g de sal en 180 g de agua.
<p class="calc">Masa de disolución = 20 + 180 = 200 g</p>
<p class="calc">% m/m = (20 / 200) × 100 = 10 %</p></div>
<div class="ojo"><span class="et">El error clásico</span>Dividir entre la masa del disolvente (180 g) en lugar de la masa total de la disolución (200 g).</div>

<h3>Porcentaje en volumen (% v/v)</h3>
<p class="formula">% v/v = (volumen de soluto / volumen de disolución) × 100</p>
<p>Se usa cuando soluto y disolvente son líquidos. Es el dato de las bebidas alcohólicas y del alcohol de farmacia.</p>
<div class="ejemplo"><span class="et">Ejemplo</span>Una botella de 250 mL contiene 50 mL de alcohol.
<p class="calc">% v/v = (50 / 250) × 100 = 20 %</p></div>

<h3>Porcentaje masa-volumen (% m/v)</h3>
<p class="formula">% m/v = (gramos de soluto / mL de disolución) × 100</p>
<p>Es el de los sueros: el suero fisiológico es NaCl al 0.9 % m/v, es decir, 0.9 g de sal por cada 100 mL.</p>
<div class="ejemplo"><span class="et">Problema inverso</span>¿Cuántos gramos de azúcar hay en 400 g de una disolución al 15 % m/m?
<p class="calc">masa de soluto = 400 × 0.15 = 60 g</p></div>`
    },
    {
      t: 'Partes por millón (ppm)', min: 3,
      sub: 'Para concentraciones muy pequeñas.',
      html: `
<h3>Definición</h3>
<p>Las <strong>partes por millón</strong> indican cuántas partes de soluto hay por cada millón de partes de disolución. Se usan para cantidades muy pequeñas: contaminantes en el aire, metales en el agua, flúor en la pasta de dientes.</p>
<p class="formula">ppm = mg de soluto / L de disolución<small>equivalente a mg de soluto por kg de disolución</small></p>
<p>En disoluciones acuosas diluidas, un litro tiene una masa de 1 kg, y por eso mg/L y mg/kg son lo mismo.</p>
<div class="ejemplo"><span class="et">Ejemplo 1</span>Una muestra de 2 L de agua contiene 3 mg de plomo.
<p class="calc">ppm = 3 mg / 2 L = 1.5 ppm</p></div>
<div class="ejemplo"><span class="et">Ejemplo 2 · con conversión</span>Se encuentran 0.005 g de flúor en 500 mL de agua.
<p class="calc">0.005 g = 5 mg · 500 mL = 0.5 L</p>
<p class="calc">ppm = 5 mg / 0.5 L = 10 ppm</p></div>
<div class="clave"><span class="et">Relación con el porcentaje</span>1 % equivale a 10 000 ppm. Una concentración de 1 ppm es como un gramo de soluto en una tonelada de disolución.</div>`
    },
    {
      t: 'Molaridad y normalidad', min: 8,
      sub: 'Las unidades químicas: concentración en moles y en equivalentes.',
      html: `
<h3>Molaridad (M)</h3>
<p>Es el número de <strong>moles de soluto por litro de disolución</strong>. Es la unidad de concentración más usada en química.</p>
<p class="formula">M = n / V<small>moles de soluto / litros de disolución</small></p>
<div class="ejemplo"><span class="et">Ejemplo</span>Se disuelven 20 g de NaOH (40 g/mol) hasta tener 500 mL de disolución.
<p class="calc">n = 20 g / 40 g/mol = 0.50 mol</p>
<p class="calc">M = 0.50 mol / 0.500 L = 1.0 M</p></div>
<div class="ejemplo"><span class="et">Problema inverso</span>¿Cuántos gramos de NaCl (58.5 g/mol) se necesitan para preparar 250 mL de disolución 0.2 M?
<p class="calc">n = M × V = 0.2 × 0.250 = 0.05 mol</p>
<p class="calc">m = 0.05 × 58.5 = 2.93 g</p></div>

<h3>Normalidad (N)</h3>
<p>Es el número de <strong>equivalentes de soluto por litro de disolución</strong>.</p>
<p class="formula">N = equivalentes / V &nbsp;·&nbsp; N = M × e</p>
<p>El factor <strong>e</strong> es el número de equivalentes por mol:</p>
<div class="tabla"><table>
  <tr><th>Tipo de soluto</th><th>e es el número de…</th><th>Ejemplo</th></tr>
  <tr><td>Ácido</td><td>H⁺ que cede</td><td>HCl: 1 · H₂SO₄: 2 · H₃PO₄: 3</td></tr>
  <tr><td>Base</td><td>OH⁻ que cede</td><td>NaOH: 1 · Ca(OH)₂: 2 · Al(OH)₃: 3</td></tr>
  <tr><td>Sal</td><td>Cargas totales del catión</td><td>NaCl: 1 · CaCl₂: 2 · Al₂(SO₄)₃: 6</td></tr>
</table></div>
<p>El <strong>peso equivalente</strong> es la masa molar dividida entre e. Para el H₂SO₄: 98 / 2 = 49 g por equivalente.</p>
<div class="ejemplo"><span class="et">Ejemplo</span>Se disuelven 49 g de H₂SO₄ (98 g/mol) en 1 L de disolución.
<p class="calc">M = (49 / 98) / 1 = 0.5 M</p>
<p class="calc">N = M × e = 0.5 × 2 = 1.0 N</p></div>

<h3>Dilución</h3>
<p>Al añadir disolvente, la cantidad de soluto no cambia; solo baja la concentración.</p>
<p class="formula">C₁ V₁ = C₂ V₂</p>
<div class="ejemplo"><span class="et">Ejemplo</span>¿Qué volumen de HCl 6 M se necesita para preparar 300 mL de HCl 2 M?
<p class="calc">V₁ = (2 × 300) / 6 = 100 mL</p>Se toman 100 mL del ácido concentrado y se completa con agua hasta 300 mL.</div>
<div class="ojo"><span class="et">Litros, no mililitros</span>En la fórmula de molaridad el volumen va en litros. 500 mL son 0.500 L.</div>`
    },
    {
      t: 'Ácidos y bases', min: 6,
      sub: 'Tres teorías y sus propiedades.',
      html: `
<h3>Propiedades</h3>
<div class="tabla"><table>
  <tr><th></th><th>Ácidos</th><th>Bases</th></tr>
  <tr><td><b>Sabor</b></td><td>Agrio</td><td>Amargo</td></tr>
  <tr><td><b>Tacto</b></td><td>Punzante</td><td>Jabonoso, resbaloso</td></tr>
  <tr><td><b>Papel tornasol</b></td><td>Lo vuelven rojo</td><td>Lo vuelven azul</td></tr>
  <tr><td><b>Con metales</b></td><td>Liberan H₂</td><td>—</td></tr>
  <tr><td><b>pH</b></td><td>Menor que 7</td><td>Mayor que 7</td></tr>
  <tr><td><b>Ejemplos</b></td><td>Limón, vinagre, HCl</td><td>Jabón, sosa, amoniaco</td></tr>
</table></div>
<p>Ambos conducen la electricidad en disolución y se <strong>neutralizan</strong> entre sí.</p>

<h3>Las tres teorías</h3>
<div class="tabla"><table>
  <tr><th>Teoría</th><th>Ácido</th><th>Base</th></tr>
  <tr><td><b>Arrhenius</b> (1884)</td><td>Libera H⁺ en agua</td><td>Libera OH⁻ en agua</td></tr>
  <tr><td><b>Brønsted-Lowry</b> (1923)</td><td>Dona un protón (H⁺)</td><td>Acepta un protón</td></tr>
  <tr><td><b>Lewis</b> (1923)</td><td>Acepta un par de electrones</td><td>Dona un par de electrones</td></tr>
</table></div>
<p>Cada teoría es más general que la anterior. Arrhenius solo sirve en agua y no explica por qué el amoniaco (NH₃), que no tiene OH, es una base. Brønsted-Lowry sí: el NH₃ acepta un protón del agua.</p>
<div class="ejemplo"><span class="et">Pares conjugados</span>NH₃ + H₂O ⇌ NH₄⁺ + OH⁻<br>El NH₃ acepta un protón (base) y se convierte en NH₄⁺, su <b>ácido conjugado</b>. El agua lo cede (ácido) y queda OH⁻, su <b>base conjugada</b>.</div>

<h3>Fuertes y débiles</h3>
<ul>
  <li><strong>Fuertes:</strong> se ionizan por completo. Ácidos: HCl, HNO₃, H₂SO₄. Bases: NaOH, KOH.</li>
  <li><strong>Débiles:</strong> se ionizan solo en parte. Ácido acético (vinagre), ácido carbónico, amoniaco.</li>
</ul>
<div class="clave"><span class="et">No confundas</span>«Fuerte» no significa «concentrado». Fuerte se refiere a cuánto se ioniza; concentrado, a cuánto soluto hay.</div>`
    },
    {
      t: 'Indicadores', min: 3,
      sub: 'Sustancias que cambian de color con la acidez.',
      html: `
<h3>Qué son</h3>
<p>Un <strong>indicador</strong> es una sustancia, normalmente un ácido o base débil orgánico, que <strong>cambia de color</strong> según el pH del medio. El intervalo de pH en el que cambia se llama <strong>zona de vire</strong>.</p>
<div class="tabla"><table>
  <tr><th>Indicador</th><th>En medio ácido</th><th>En medio básico</th><th>Vire (pH)</th></tr>
  <tr><td><b>Papel tornasol</b></td><td>Rojo</td><td>Azul</td><td>≈ 5 – 8</td></tr>
  <tr><td><b>Fenolftaleína</b></td><td>Incolora</td><td>Rosa fucsia</td><td>8.2 – 10</td></tr>
  <tr><td><b>Anaranjado de metilo</b></td><td>Rojo</td><td>Amarillo</td><td>3.1 – 4.4</td></tr>
  <tr><td><b>Azul de bromotimol</b></td><td>Amarillo</td><td>Azul</td><td>6.0 – 7.6</td></tr>
</table></div>
<p>El azul de bromotimol se ve verde alrededor de pH 7, por eso es útil para detectar la neutralidad.</p>

<h3>Otros recursos</h3>
<ul>
  <li><strong>Indicador universal:</strong> mezcla de varios indicadores que da un color distinto para cada valor de pH, del rojo al violeta.</li>
  <li><strong>Indicadores naturales:</strong> el extracto de col morada es rojo en ácido y verde amarillento en base.</li>
  <li><strong>Potenciómetro o pHmetro:</strong> instrumento que mide el pH con precisión mediante un electrodo. Es el método más exacto.</li>
</ul>
<div class="clave"><span class="et">El más preguntado</span>La fenolftaleína es <b>incolora en ácido</b> y <b>rosa en base</b>. Se usa en las titulaciones ácido-base para detectar el punto final.</div>`
    },
    {
      t: 'pH', min: 7,
      sub: 'Una escala del 0 al 14 para medir la acidez.',
      html: `
<h3>El agua se ioniza</h3>
<p>Una fracción mínima del agua se separa en iones: H₂O ⇌ H⁺ + OH⁻. En agua pura a 25 °C, las dos concentraciones valen 1 × 10⁻⁷ mol/L, y su producto es constante:</p>
<p class="formula">[H⁺][OH⁻] = 1 × 10⁻¹⁴<small>producto iónico del agua, K<sub>w</sub></small></p>

<h3>Definición de pH</h3>
<p>Como esas concentraciones son números muy pequeños, se usa una escala logarítmica:</p>
<p class="formula">pH = −log [H⁺] &nbsp;·&nbsp; pOH = −log [OH⁻]<small>pH + pOH = 14</small></p>

<h3>Explora la escala</h3>
<div data-widget="ph"></div>
<ul>
  <li><strong>pH &lt; 7:</strong> ácido. Hay más H⁺ que OH⁻.</li>
  <li><strong>pH = 7:</strong> neutro.</li>
  <li><strong>pH &gt; 7:</strong> básico o alcalino. Hay más OH⁻ que H⁺.</li>
</ul>
<div class="clave"><span class="et">Escala logarítmica</span>Cada unidad de pH es un factor de 10. Una disolución de pH 3 es 10 veces más ácida que una de pH 4 y 100 veces más que una de pH 5.</div>

<h3>Cálculos</h3>
<p>Cuando la concentración es 1 × 10⁻ⁿ, el pH es simplemente n.</p>
<div class="ejemplo"><span class="et">A partir de [H⁺]</span>[H⁺] = 1 × 10⁻³ M → pH = 3 (ácido).</div>
<div class="ejemplo"><span class="et">Ácido fuerte</span>HCl 0.01 M. Se ioniza por completo, así que [H⁺] = 0.01 = 1 × 10⁻² M.
<p class="calc">pH = 2</p></div>
<div class="ejemplo"><span class="et">Base fuerte</span>NaOH 0.001 M → [OH⁻] = 1 × 10⁻³ M.
<p class="calc">pOH = 3 → pH = 14 − 3 = 11</p></div>
<div class="ejemplo"><span class="et">Al revés</span>Si el pH es 5, [H⁺] = 10⁻⁵ M y [OH⁻] = 10⁻⁹ M.</div>
<div class="ojo"><span class="et">En las bases</span>Con una base calculas primero el <b>pOH</b>. No olvides restarlo de 14 para obtener el pH.</div>`
    },
    {
      t: 'Neutralización', min: 5,
      sub: 'Ácido más base: sal más agua.',
      html: `
<h3>La reacción</h3>
<p class="formula">Ácido + Base → Sal + Agua<small>HCl + NaOH → NaCl + H₂O</small></p>
<p>En el fondo, lo que ocurre es que los iones H⁺ del ácido se unen a los OH⁻ de la base para formar agua: <strong>H⁺ + OH⁻ → H₂O</strong>. Los otros iones forman la sal. Es una reacción de doble sustitución y es exotérmica.</p>
<div class="tabla"><table>
  <tr><th>Ácido</th><th>Base</th><th>Sal</th></tr>
  <tr><td>HCl</td><td>NaOH</td><td>NaCl, cloruro de sodio</td></tr>
  <tr><td>H₂SO₄</td><td>2 NaOH</td><td>Na₂SO₄, sulfato de sodio</td></tr>
  <tr><td>2 HCl</td><td>Ca(OH)₂</td><td>CaCl₂, cloruro de calcio</td></tr>
  <tr><td>HNO₃</td><td>KOH</td><td>KNO₃, nitrato de potasio</td></tr>
</table></div>
<p>Si el ácido y la base son fuertes y se mezclan en cantidades equivalentes, la disolución final es neutra (pH 7).</p>

<h3>Titulación</h3>
<p>La <strong>titulación</strong> o valoración permite conocer la concentración de un ácido (o una base) añadiéndole poco a poco una base (o un ácido) de concentración conocida, hasta la neutralización exacta. El <strong>punto de equivalencia</strong> se detecta con un indicador, como la fenolftaleína.</p>
<p class="formula">N<sub>a</sub> V<sub>a</sub> = N<sub>b</sub> V<sub>b</sub><small>equivalentes de ácido = equivalentes de base</small></p>
<div class="ejemplo"><span class="et">Ejemplo</span>Para neutralizar 25 mL de HCl se gastan 20 mL de NaOH 0.1 N. ¿Cuál es la concentración del ácido?
<p class="calc">N<sub>a</sub> = (N<sub>b</sub> V<sub>b</sub>) / V<sub>a</sub> = (0.1 × 20) / 25 = 0.08 N</p></div>
<div class="ejemplo"><span class="et">Con un ácido diprótico</span>¿Qué volumen de NaOH 0.5 M neutraliza 50 mL de H₂SO₄ 0.25 M?
<p>El H₂SO₄ 0.25 M es 0.50 N (e = 2). El NaOH 0.5 M es 0.5 N.</p>
<p class="calc">V<sub>b</sub> = (0.50 × 50) / 0.5 = 50 mL</p></div>

<h3>En la vida diaria</h3>
<ul>
  <li>Los <strong>antiácidos</strong>, como Mg(OH)₂ o NaHCO₃, neutralizan el exceso de HCl del estómago.</li>
  <li>La <strong>cal</strong> se añade a los suelos ácidos para corregir su pH.</li>
  <li>El bicarbonato alivia una picadura de abeja (ácida); el vinagre, una de avispa (básica).</li>
</ul>`
    }
  ],
  tarjetas: [
    ['Soluto y disolvente', '<b>Soluto:</b> lo que se disuelve, en menor cantidad. <b>Disolvente:</b> lo que disuelve, en mayor cantidad.'],
    ['¿Qué es una disolución saturada?', 'La que contiene la máxima cantidad de soluto que puede disolverse a esa temperatura.'],
    ['¿Qué significa «lo semejante disuelve a lo semejante»?', 'Los disolventes polares disuelven solutos polares o iónicos; los no polares, solutos no polares.'],
    ['Fórmula del porcentaje en masa', '<b>% m/m = (masa de soluto / masa de disolución) × 100</b>'],
    ['¿Qué es la masa de la disolución?', 'Masa de soluto <b>más</b> masa de disolvente.'],
    ['Fórmula de ppm', '<b>ppm = mg de soluto / L de disolución</b> (o mg/kg).'],
    ['Fórmula de la molaridad', '<b>M = moles de soluto / litros de disolución</b>'],
    ['Fórmula de la normalidad a partir de la molaridad', '<b>N = M × e</b>, donde e es el número de H⁺, de OH⁻ o de cargas del catión.'],
    ['Normalidad de H₂SO₄ 1 M', '<b>2 N</b>, porque cede 2 H⁺.'],
    ['Fórmula de dilución', '<b>C₁V₁ = C₂V₂</b>'],
    ['Ácido y base según Arrhenius', 'Ácido: libera <b>H⁺</b> en agua. Base: libera <b>OH⁻</b> en agua.'],
    ['Ácido y base según Brønsted-Lowry', 'Ácido: <b>dona</b> un protón. Base: <b>acepta</b> un protón.'],
    ['Ácido y base según Lewis', 'Ácido: <b>acepta</b> un par de electrones. Base: <b>dona</b> un par de electrones.'],
    ['Color de la fenolftaleína', '<b>Incolora</b> en medio ácido y <b>rosa</b> en medio básico.'],
    ['Color del papel tornasol', '<b>Rojo</b> en ácido y <b>azul</b> en base.'],
    ['Definición de pH', '<b>pH = −log [H⁺]</b>. Menor que 7 es ácido, 7 es neutro, mayor que 7 es básico.'],
    ['Relación entre pH y pOH', '<b>pH + pOH = 14</b>'],
    ['pH de una disolución con [H⁺] = 1 × 10⁻⁴ M', '<b>pH = 4</b> (ácida).'],
    ['¿Qué produce una neutralización?', '<b>Sal + agua.</b> En esencia: H⁺ + OH⁻ → H₂O.'],
    ['Fórmula de la titulación', '<b>N<sub>a</sub>V<sub>a</sub> = N<sub>b</sub>V<sub>b</sub></b>: equivalentes de ácido = equivalentes de base.']
  ],
  preguntas: [
    ['En una disolución de sal en agua, la sal es el:', ['Soluto', 'Disolvente', 'Precipitado', 'Coloide'], 'Es la sustancia que se disuelve y está en menor cantidad.'],
    ['Una disolución que ya no admite más soluto a esa temperatura está:', ['Saturada', 'Diluida', 'Concentrada', 'Insaturada'], 'Contiene el máximo de soluto que puede disolver.'],
    ['Al aumentar la temperatura, la solubilidad de un gas en un líquido:', ['Disminuye', 'Aumenta', 'No cambia', 'Se duplica'], 'Por eso un refresco tibio pierde el gas más rápido.'],
    ['Se disuelven 30 g de azúcar en 170 g de agua. El % m/m es:', ['15 %', '17.6 %', '30 %', '85 %'], '(30 / 200) × 100 = 15 %. La disolución pesa 30 + 170 = 200 g.'],
    ['¿Cuántos mL de alcohol hay en 500 mL de una disolución al 70 % v/v?', ['350 mL', '70 mL', '150 mL', '714 mL'], '500 × 0.70 = 350 mL.'],
    ['Una muestra de 4 L de agua contiene 2 mg de arsénico. Su concentración es:', ['0.5 ppm', '2 ppm', '8 ppm', '0.002 ppm'], 'ppm = mg / L = 2 / 4 = 0.5.'],
    ['Se disuelven 40 g de NaOH (40 g/mol) en 2 L de disolución. La molaridad es:', ['0.5 M', '1 M', '2 M', '20 M'], 'n = 1 mol; M = 1 mol / 2 L = 0.5 M.'],
    ['¿Cuántos moles de soluto hay en 250 mL de una disolución 2 M?', ['0.5 mol', '500 mol', '8 mol', '0.125 mol'], 'n = M × V = 2 × 0.250 = 0.5 mol.'],
    ['La normalidad de una disolución de H₂SO₄ 0.5 M es:', ['1.0 N', '0.25 N', '0.5 N', '2.0 N'], 'N = M × e = 0.5 × 2 = 1.0 N.'],
    ['¿Qué volumen de HCl 12 M se necesita para preparar 600 mL de HCl 2 M?', ['100 mL', '3600 mL', '50 mL', '200 mL'], 'V₁ = (2 × 600) / 12 = 100 mL.'],
    ['Según Brønsted-Lowry, una base es una sustancia que:', ['Acepta protones', 'Dona protones', 'Libera OH⁻ en agua', 'Acepta un par de electrones'], 'Arrhenius habla de OH⁻; Lewis, de pares de electrones.'],
    ['¿Cuál de los siguientes es un ácido fuerte?', ['HCl', 'Ácido acético', 'NH₃', 'Ácido carbónico'], 'El HCl se ioniza por completo en agua.'],
    ['La fenolftaleína en una disolución de NaOH se ve:', ['Rosa', 'Incolora', 'Amarilla', 'Azul'], 'Es incolora en medio ácido y rosa en medio básico.'],
    ['Una disolución tiene [H⁺] = 1 × 10⁻⁹ M. Su pH es:', ['9, básica', '9, ácida', '5, ácida', '−9, ácida'], 'pH = −log(10⁻⁹) = 9, mayor que 7.'],
    ['El pH de una disolución de NaOH 0.01 M es:', ['12', '2', '10', '14'], '[OH⁻] = 10⁻² → pOH = 2 → pH = 14 − 2 = 12.'],
    ['Una disolución de pH 3 comparada con una de pH 5 es:', ['100 veces más ácida', '2 veces más ácida', '100 veces menos ácida', '20 veces más ácida'], 'Cada unidad de pH es un factor de 10: dos unidades son 10² = 100.'],
    ['Los productos de la reacción entre HNO₃ y KOH son:', ['KNO₃ y H₂O', 'KNO₂ y H₂', 'K₂O y NH₃', 'KH y NO₃'], 'Ácido + base → sal + agua.'],
    ['Para neutralizar 30 mL de HCl se usan 15 mL de NaOH 0.2 N. La normalidad del ácido es:', ['0.1 N', '0.4 N', '0.2 N', '0.05 N'], 'Nₐ = (0.2 × 15) / 30 = 0.1 N.'],
    ['El aire es una disolución de tipo:', ['Gas en gas', 'Gas en líquido', 'Sólido en gas', 'Líquido en gas'], 'Oxígeno y otros gases están disueltos en nitrógeno, también gaseoso.'],
    ['¿Cuántos gramos de NaCl hay en 500 mL de suero al 0.9 % m/v?', ['4.5 g', '0.9 g', '45 g', '9 g'], '0.9 g por cada 100 mL: 0.9 × 5 = 4.5 g.'],
    ['Según Arrhenius, un ácido es una sustancia que en agua:', ['Libera iones H⁺', 'Libera iones OH⁻', 'Acepta protones', 'Dona un par de electrones'], 'Arrhenius define ácidos y bases por los iones H⁺ y OH⁻ que liberan en agua.'],
    ['Una disolución con pH = 4 tiene un pOH de:', ['10', '4', '7', '18'], 'pH + pOH = 14, así que pOH = 14 − 4 = 10.'],
    // --- Problemas en el estilo de la guía del tercer parcial del profesor ---
    ['Calcula el número de moles de soluto presentes en 49 mL de solución 5 M de H₃PO₄.', ['0.245 mol', '245 mol', '0.0098 mol', '102 mol'], 'n = M × V = 5 × 0.049 L = 0.245 mol.'],
    ['¿Cuántos gramos de HCl (36.46 g/mol) se necesitan para preparar 150 mL de solución 0.5 N?', ['2.73 g', '27.3 g', '5.47 g', '0.075 g'], 'Equivalentes: 0.5 × 0.150 = 0.075; el HCl cede 1 H⁺, así que 0.075 × 36.46 = 2.73 g.'],
    ['¿Cuántos gramos de H₂CO₃ (62 g/mol) se necesitan para preparar 1.5 L de solución 0.75 N?', ['34.9 g', '69.8 g', '46.5 g', '17.4 g'], 'Equivalentes: 0.75 × 1.5 = 1.125; peso equivalente 62/2 = 31; 1.125 × 31 = 34.9 g.'],
    ['¿Cuántos gramos de NaOH (40 g/mol) se necesitan para preparar 750 mL de solución 3 N?', ['90 g', '160 g', '30 g', '9 g'], 'Equivalentes: 3 × 0.750 = 2.25; 2.25 × 40 = 90 g.'],
    ['Se requieren 1500 mL de una solución de glucosa al 40 % m/v. ¿Cuántos gramos de soluto se deben adicionar?', ['600 g', '37.5 g', '60 g', '3750 g'], '40 g por cada 100 mL: 1500 × 0.40 = 600 g.'],
    ['¿Qué volumen de jugo de limón se necesita para preparar 2000 mL de una disolución al 15 % v/v?', ['300 mL', '133 mL', '30 mL', '1700 mL'], '2000 × 0.15 = 300 mL.']
  ]
});
