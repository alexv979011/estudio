/* Unidad 1 · Materia y estados de agregación
   Formato: temas [{t, sub, min, html}], tarjetas [[pregunta, respuesta]],
   preguntas [[enunciado, [correcta, distractor, distractor, distractor], explicación]] */
window.UNIDADES = window.UNIDADES || [];
window.UNIDADES.push({
  materia: 'quimica',
  id: 1,
  titulo: 'Materia y estados de agregación',
  corto: 'Materia',
  color: '#0a84ff',
  resultado: 'identificar, clasificar y explicar fenómenos relacionados con la materia.',
  temas: [
    {
      t: 'Historia de la química', min: 7,
      sub: 'Cómo la humanidad pasó de usar los cambios de la materia a explicarlos.',
      html: `
<h3>De oficio a ciencia</h3>
<p>La química estudia la materia: su composición, sus propiedades y las transformaciones que sufre. Antes de ser ciencia fue un oficio. Con el fuego llegaron la cerámica y la metalurgia; hacia el 3300 a. C. ya se fundía cobre con estaño para obtener bronce. Egipcios y mesopotámicos hacían vidrio, tintes y fermentados. Era un saber de recetas, sin teoría que explicara por qué funcionaban.</p>
<p>Los griegos fueron los primeros en preguntarse de qué está hecho todo. <strong>Empédocles</strong> y <strong>Aristóteles</strong> defendieron los cuatro elementos (tierra, agua, aire y fuego) y una materia continua. <strong>Leucipo y Demócrito</strong> propusieron lo contrario: la materia está hecha de partículas indivisibles, los <em>átomos</em>. Era una idea filosófica, sin experimentos, y quedó olvidada casi dos mil años.</p>

<h3>Alquimia e iatroquímica</h3>
<p>La <strong>alquimia</strong> (aprox. 300 a. C. – 1600) buscaba la <strong>piedra filosofal</strong>, capaz de convertir metales en oro, y el <strong>elixir de la vida</strong>. No lo consiguió, pero dejó técnicas (destilación, sublimación, cristalización), instrumentos como el alambique y sustancias como los ácidos minerales y el alcohol. Le faltaba método: mezclaba observación con misticismo y no medía con rigor.</p>
<p>En el siglo XVI, <strong>Paracelso</strong> cambió el objetivo: la química debía preparar medicamentos. Esa corriente se llama <strong>iatroquímica</strong>.</p>

<h3>La revolución química</h3>
<p><strong>Robert Boyle</strong> (1661) definió el elemento como la sustancia que no puede descomponerse en otras más simples y exigió experimentos reproducibles. Un siglo después dominaba la teoría del <strong>flogisto</strong> de Stahl: todo combustible liberaba un principio al arder. Su punto débil era que los metales <em>ganan</em> masa al calcinarse.</p>
<p><strong>Antoine Lavoisier</strong>, el padre de la química moderna, lo resolvió con una balanza y recipientes cerrados: la combustión es la combinación con el oxígeno del aire, y en toda reacción la masa total se conserva.</p>

<h3>Línea del tiempo</h3>
<ul class="linea-t">
  <li><time>Siglo V a. C.</time><b>Demócrito</b> propone el átomo; Aristóteles, los cuatro elementos.</li>
  <li><time>300 a. C. – 1600</time><b>Alquimia.</b> Piedra filosofal y técnicas de laboratorio.</li>
  <li><time>1661</time><b>Boyle</b> define el elemento e inicia la química experimental.</li>
  <li><time>1789</time><b>Lavoisier</b> publica la ley de la conservación de la masa.</li>
  <li><time>1799 – 1811</time><b>Proust</b> (proporciones definidas), <b>Dalton</b> (teoría atómica) y <b>Avogadro</b> (moléculas en los gases).</li>
  <li><time>1869</time><b>Mendeléiev</b> ordena los elementos en la tabla periódica y predice otros nuevos.</li>
  <li><time>1897 – 1932</time><b>Thomson</b> (electrón), <b>Rutherford</b> (núcleo), <b>Bohr</b> (niveles), <b>Schrödinger</b> (modelo cuántico), <b>Chadwick</b> (neutrón).</li>
</ul>
<div class="clave"><span class="et">Para el examen</span>Asocia cada nombre con una sola idea: Boyle → elemento; Stahl → flogisto; Lavoisier → conservación de la masa y oxígeno; Proust → proporciones definidas; Dalton → teoría atómica; Mendeléiev → tabla periódica.</div>`
    },
    {
      t: 'Materia, masa y energía', min: 5,
      sub: 'Las tres palabras sobre las que se construye todo lo demás.',
      html: `
<h3>Materia</h3>
<p><strong>Materia</strong> es todo lo que tiene masa y ocupa un lugar en el espacio (tiene volumen). El aire, el agua y tu cuerpo son materia. La luz, el calor y el sonido no lo son: son formas de energía.</p>

<h3>Masa y peso</h3>
<p>La <strong>masa</strong> es la cantidad de materia de un cuerpo y mide su inercia. Se mide con balanza, en kilogramos, y <strong>no cambia</strong> con el lugar. El <strong>peso</strong> es la fuerza con que la gravedad atrae a esa masa; se mide en newtons y <strong>sí cambia</strong> con el lugar.</p>
<p class="formula">P = m · g<small>peso (N) = masa (kg) × gravedad (m/s²)</small></p>
<div class="ejemplo"><span class="et">Ejemplo</span>Un astronauta de 70 kg pesa 70 × 9.8 = 686 N en la Tierra y 70 × 1.6 = 112 N en la Luna. Su masa es de 70 kg en ambos lugares.</div>

<h3>Energía</h3>
<p>La <strong>energía</strong> es la capacidad de realizar trabajo o producir cambios. Se mide en joules (1 cal = 4.184 J). Puede ser <strong>cinética</strong>, por el movimiento, o <strong>potencial</strong>, almacenada por la posición o la composición. La térmica, la química, la eléctrica y la luminosa son manifestaciones de esas dos.</p>
<p>La energía se transforma de una forma en otra, pero el total no cambia: es la <strong>ley de la conservación de la energía</strong>. Las reacciones que liberan energía son <strong>exotérmicas</strong> (una combustión) y las que la absorben, <strong>endotérmicas</strong> (la fotosíntesis).</p>

<h3>Relación masa-energía</h3>
<p class="formula">E = m c²<small>Einstein, 1905 · c = 3 × 10<sup>8</sup> m/s</small></p>
<p>Masa y energía son equivalentes. Un gramo de materia convertido por completo en energía daría 9 × 10<sup>13</sup> J. En las reacciones químicas el cambio de masa es indetectable; solo importa en las reacciones nucleares.</p>`
    },
    {
      t: 'Conservación de la materia', min: 4,
      sub: 'La ley de Lavoisier y por qué obliga a balancear ecuaciones.',
      html: `
<h3>La ley</h3>
<p class="formula">Σ m<sub>reactivos</sub> = Σ m<sub>productos</sub><small>La materia no se crea ni se destruye, solo se transforma</small></p>
<p>Una reacción química es una reorganización de átomos: se rompen unos enlaces y se forman otros, pero los átomos son los mismos antes y después. Por eso una ecuación debe estar <strong>balanceada</strong>.</p>
<div class="ejemplo"><span class="et">Ejemplo</span>En 2 H<sub>2</sub> + O<sub>2</sub> → 2 H<sub>2</sub>O reaccionan 4 g de hidrógeno con 32 g de oxígeno y se forman exactamente 36 g de agua.</div>

<h3>Sistemas abiertos y cerrados</h3>
<p>Las cenizas pesan menos que la leña y un clavo oxidado pesa más que el clavo nuevo. Ninguno contradice la ley: en un <strong>sistema abierto</strong> hay gases que entran o salen sin pesarse. La leña pierde CO<sub>2</sub> y vapor; el clavo gana oxígeno. La ley se comprueba en un <strong>sistema cerrado</strong>.</p>
<div class="ejemplo"><span class="et">Problema tipo</span>Se queman 12 g de carbono y se obtienen 44 g de CO<sub>2</sub>. ¿Cuánto oxígeno reaccionó?<p class="calc">12 g + x = 44 g → x = 32 g de O<sub>2</sub></p></div>`
    },
    {
      t: 'Elementos, compuestos y mezclas', min: 6,
      sub: 'Clasificar cualquier muestra en tres preguntas.',
      html: `
<h3>El mapa</h3>
<figure class="fig"><svg viewBox="0 0 640 232" width="640">
  <path class="g-ln" d="M320 44V62M160 62H480M160 62V80M480 62V80M160 122V140M80 140H240M80 140V158M240 140V158M480 122V140M400 140H560M400 140V158M560 140V158"/>
  <rect class="g-fuerte" x="240" y="6" width="160" height="38" rx="12"/><text class="g-txb" x="320" y="31" text-anchor="middle" font-size="16">Materia</text>
  <rect class="g-caja" x="80" y="80" width="160" height="42" rx="12"/><text class="g-tx" x="160" y="99" text-anchor="middle" font-size="14">Sustancias puras</text><text class="g-tx2" x="160" y="114" text-anchor="middle" font-size="10.5">composición fija</text>
  <rect class="g-caja" x="400" y="80" width="160" height="42" rx="12"/><text class="g-tx" x="480" y="99" text-anchor="middle" font-size="14">Mezclas</text><text class="g-tx2" x="480" y="114" text-anchor="middle" font-size="10.5">composición variable</text>
  <g font-size="13" text-anchor="middle">
    <rect class="g-caja" x="10" y="158" width="140" height="34" rx="10"/><text class="g-tx" x="80" y="180">Elementos</text>
    <rect class="g-caja" x="170" y="158" width="140" height="34" rx="10"/><text class="g-tx" x="240" y="180">Compuestos</text>
    <rect class="g-caja" x="330" y="158" width="140" height="34" rx="10"/><text class="g-tx" x="400" y="180">Homogéneas</text>
    <rect class="g-caja" x="490" y="158" width="140" height="34" rx="10"/><text class="g-tx" x="560" y="180">Heterogéneas</text>
  </g>
  <g font-size="10.5" text-anchor="middle" class="g-tx2"><text x="80" y="210">Fe, O₂, Au</text><text x="240" y="210">H₂O, NaCl, CO₂</text><text x="400" y="210">aire, bronce</text><text x="560" y="210">granito, agua y aceite</text>
  <text x="160" y="228">se separan por métodos químicos</text><text x="480" y="228">se separan por métodos físicos</text></g>
</svg></figure>

<h3>Elementos</h3>
<p>Un <strong>elemento</strong> está formado por átomos de un solo tipo y no puede descomponerse por métodos químicos. Se conocen 118 y cada uno tiene un símbolo: H, C, Na (<em>natrium</em>), Fe (<em>ferrum</em>), Au (<em>aurum</em>). Siete son diatómicos: H<sub>2</sub>, N<sub>2</sub>, O<sub>2</sub>, F<sub>2</sub>, Cl<sub>2</sub>, Br<sub>2</sub>, I<sub>2</sub>. Un elemento puede tener varias formas o <strong>alótropos</strong>: diamante y grafito, O<sub>2</sub> y ozono.</p>

<h3>Compuestos</h3>
<p>Un <strong>compuesto</strong> es la unión química de dos o más elementos en <strong>proporción fija</strong>, con una fórmula. Sus propiedades son distintas de las de sus elementos: el sodio (metal reactivo) y el cloro (gas tóxico) forman sal de mesa. Solo se separa por métodos químicos, como la electrólisis.</p>

<h3>Mezclas</h3>
<p>Una <strong>mezcla</strong> es una unión física en proporción variable: cada componente conserva sus propiedades y puede separarse por métodos físicos.</p>
<ul>
  <li><strong>Homogénea</strong> o disolución: una sola fase, uniforme. Agua salada, aire, aleaciones como el bronce.</li>
  <li><strong>Heterogénea:</strong> dos o más fases visibles. Granito, agua con aceite.</li>
  <li><strong>Coloide:</strong> parece uniforme pero dispersa la luz (efecto Tyndall). Leche, gelatina, niebla.</li>
  <li><strong>Suspensión:</strong> partículas grandes que sedimentan. Agua turbia.</li>
</ul>
<div class="clave"><span class="et">Tres preguntas</span>1) ¿Tiene fórmula o símbolo? Si no, es mezcla. 2) Si es mezcla, ¿se ve uniforme? Homogénea; si no, heterogénea. 3) Si es pura, ¿un solo tipo de átomo? Elemento; si hay varios, compuesto.</div>`
    },
    {
      t: 'Métodos de separación', min: 6,
      sub: 'Cada método aprovecha una propiedad física distinta.',
      html: `
<h3>La idea central</h3>
<p>Separar una mezcla es aprovechar una <strong>propiedad física en la que sus componentes difieren</strong>. Ningún método cambia la naturaleza química de las sustancias. Primero pregúntate qué tipo de mezcla es y en qué se diferencian sus partes.</p>

<h3>Mezclas heterogéneas</h3>
<ul>
  <li><strong>Decantación:</strong> por densidad. Agua y aceite en un embudo de separación.</li>
  <li><strong>Filtración:</strong> por tamaño de partícula. Un sólido insoluble queda en el papel filtro.</li>
  <li><strong>Centrifugación:</strong> por densidad, acelerada con giro. Componentes de la sangre.</li>
  <li><strong>Tamizado:</strong> por tamaño de grano. Arena y grava.</li>
  <li><strong>Imantación:</strong> por magnetismo. Limaduras de hierro.</li>
</ul>

<h3>Mezclas homogéneas</h3>
<ul>
  <li><strong>Evaporación:</strong> se calienta hasta eliminar el líquido; queda el sólido. Sal del agua de mar.</li>
  <li><strong>Cristalización:</strong> por solubilidad; el sólido forma cristales puros al enfriar.</li>
  <li><strong>Destilación:</strong> por punto de ebullición. Simple (agua y sal) o fraccionada (alcohol y agua, petróleo).</li>
  <li><strong>Sublimación:</strong> un sólido pasa directo a gas. Yodo y arena.</li>
  <li><strong>Cromatografía:</strong> por afinidad con una fase fija y una móvil. Pigmentos de una tinta.</li>
</ul>

<div class="tabla"><table>
  <tr><th>Quiero separar…</th><th>Método</th><th>Propiedad</th></tr>
  <tr><td>Arena y agua</td><td>Filtración</td><td>Tamaño de partícula</td></tr>
  <tr><td>Agua y aceite</td><td>Decantación</td><td>Densidad</td></tr>
  <tr><td>Sal y agua (solo la sal)</td><td>Evaporación</td><td>Volatilidad</td></tr>
  <tr><td>Alcohol y agua</td><td>Destilación fraccionada</td><td>Punto de ebullición</td></tr>
  <tr><td>Hierro y azufre</td><td>Imantación</td><td>Magnetismo</td></tr>
  <tr><td>Colores de una tinta</td><td>Cromatografía</td><td>Afinidad (adsorción)</td></tr>
</table></div>
<div class="ejemplo"><span class="et">Problema tipo</span>Arena + sal + limaduras de hierro: primero un imán (hierro), luego agua y filtración (la arena queda en el papel) y al final evaporación (queda la sal).</div>`
    },
    {
      t: 'Propiedades intensivas y extensivas', min: 4,
      sub: '¿Depende de cuánta materia tengo? Esa es toda la pregunta.',
      html: `
<h3>Extensivas</h3>
<p>Las propiedades <strong>extensivas</strong> dependen de la cantidad de materia: si duplicas la muestra, se duplican. Son aditivas y no sirven para identificar una sustancia. <em>Masa, volumen, peso, longitud, inercia, cantidad de calor.</em></p>

<h3>Intensivas</h3>
<p>Las <strong>intensivas</strong> no dependen de la cantidad: una gota y una alberca de agua tienen la misma densidad. Sirven para <strong>identificar</strong> sustancias. <em>Densidad, punto de fusión, punto de ebullición, temperatura, color, dureza, viscosidad, solubilidad.</em></p>
<div class="clave"><span class="et">El truco de la mitad</span>Parte la muestra en dos. Si el valor cambia en cada mitad, es extensiva. Si se queda igual, es intensiva.</div>

<h3>Densidad</h3>
<p>Dividir una propiedad extensiva entre otra da una intensiva. El caso clásico:</p>
<p class="formula">d = m / V<small>g/cm³ o g/mL</small></p>
<div class="ejemplo"><span class="et">Ejemplo</span>Una pieza de 39.5 g desplaza 5.0 mL de agua. d = 39.5 / 5.0 = 7.9 g/cm³, la densidad del hierro. Si la cortas a la mitad, cada trozo sigue teniendo 7.9 g/cm³.</div>

<h3>Físicas y químicas</h3>
<p>Otra clasificación distinta: las propiedades <strong>físicas</strong> se miden sin cambiar la composición (color, densidad); las <strong>químicas</strong> describen cómo se transforma una sustancia en otra (combustibilidad, oxidación).</p>`
    },
    {
      t: 'Estados de agregación', min: 6,
      sub: 'Cohesión contra movimiento: quién gana decide el estado.',
      html: `
<h3>El modelo</h3>
<p>Las partículas se atraen (<strong>fuerzas de cohesión</strong>) y a la vez se mueven (<strong>energía cinética</strong>, que crece con la temperatura). El estado depende de cuál domina.</p>
<div class="tabla"><table>
  <tr><th></th><th>Sólido</th><th>Líquido</th><th>Gas</th></tr>
  <tr><td><b>Forma</b></td><td>Propia</td><td>Del recipiente</td><td>Del recipiente</td></tr>
  <tr><td><b>Volumen</b></td><td>Propio</td><td>Propio</td><td>Del recipiente</td></tr>
  <tr><td><b>Cohesión</b></td><td>Muy alta</td><td>Media</td><td>Casi nula</td></tr>
  <tr><td><b>Movimiento</b></td><td>Vibración</td><td>Deslizamiento</td><td>Libre y rápido</td></tr>
  <tr><td><b>Compresible</b></td><td>No</td><td>Muy poco</td><td>Mucho</td></tr>
</table></div>
<p>El <strong>plasma</strong> es el cuarto estado: un gas tan caliente que sus átomos están ionizados. De plasma son las estrellas, los rayos y las lámparas de neón.</p>

<h3>Cambios de estado</h3>
<figure class="fig"><svg viewBox="0 0 640 214" width="640">
  <defs><marker id="mc" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0L8 4L0 8z" fill="#ff453a"/></marker>
  <marker id="mf" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0L8 4L0 8z" style="fill:var(--accent)"/></marker></defs>
  <g text-anchor="middle" font-size="16">
    <rect class="g-caja" x="30" y="84" width="130" height="50" rx="14"/><text class="g-tx" x="95" y="115">Sólido</text>
    <rect class="g-caja" x="255" y="84" width="130" height="50" rx="14"/><text class="g-tx" x="320" y="115">Líquido</text>
    <rect class="g-caja" x="480" y="84" width="130" height="50" rx="14"/><text class="g-tx" x="545" y="115">Gas</text></g>
  <g class="g-cal" marker-end="url(#mc)"><path d="M162 98H252"/><path d="M387 98H477"/><path d="M95 82C150 14 490 14 545 82"/></g>
  <g class="g-fri" marker-end="url(#mf)"><path d="M253 121H163"/><path d="M478 121H388"/><path d="M545 136C490 204 150 204 95 136"/></g>
  <g font-size="12" text-anchor="middle"><text class="g-cal-t" x="207" y="92">fusión</text><text class="g-cal-t" x="432" y="92">vaporización</text><text class="g-cal-t" x="320" y="24">sublimación</text>
  <text class="g-fri-t" x="207" y="138">solidificación</text><text class="g-fri-t" x="432" y="138">condensación</text><text class="g-fri-t" x="320" y="202">deposición</text></g>
</svg><figcaption>Rojo: absorben calor. Azul: liberan calor.</figcaption></figure>
<ul>
  <li><strong>Vaporización</strong> tiene dos formas: <em>evaporación</em> (en la superficie, a cualquier temperatura) y <em>ebullición</em> (en toda la masa, a temperatura fija).</li>
  <li><strong>Sublimación:</strong> hielo seco, yodo, naftalina. <strong>Deposición:</strong> la escarcha.</li>
</ul>
<div class="clave"><span class="et">Dato que siempre preguntan</span>Durante un cambio de estado la temperatura <b>no cambia</b>: todo el calor se usa en separar las partículas. El agua se queda en 100 °C mientras hierve.</div>`
    },
    {
      t: 'Leyes de los gases', min: 12,
      sub: 'Presión, volumen y temperatura: tres leyes y una ecuación que las reúne.',
      html: `
<h3>Variables y unidades</h3>
<ul>
  <li><strong>Presión (P):</strong> 1 atm = 760 mmHg = 760 torr = 101.325 kPa = 14.7 psi.</li>
  <li><strong>Volumen (V):</strong> 1 L = 1000 mL.</li>
  <li><strong>Temperatura (T):</strong> siempre en kelvin. K = °C + 273.</li>
  <li><strong>Cantidad (n):</strong> moles.</li>
</ul>
<div class="ojo"><span class="et">El error más caro</span>Sustituir la temperatura en grados Celsius. Convierte a kelvin antes de hacer cualquier otra cosa.</div>

<h3>Pruébalo tú</h3>
<div data-widget="gas"></div>

<h3>Las tres leyes</h3>
<div class="tabla"><table>
  <tr><th>Ley</th><th>Constante</th><th>Relación</th><th>Fórmula</th></tr>
  <tr><td><b>Boyle-Mariotte</b></td><td>T</td><td>P y V inversa</td><td>P<sub>1</sub>V<sub>1</sub> = P<sub>2</sub>V<sub>2</sub></td></tr>
  <tr><td><b>Charles</b></td><td>P</td><td>V y T directa</td><td>V<sub>1</sub>/T<sub>1</sub> = V<sub>2</sub>/T<sub>2</sub></td></tr>
  <tr><td><b>Gay-Lussac</b></td><td>V</td><td>P y T directa</td><td>P<sub>1</sub>/T<sub>1</sub> = P<sub>2</sub>/T<sub>2</sub></td></tr>
</table></div>
<p><strong>Boyle:</strong> al comprimir un gas, las mismas partículas chocan más seguido con las paredes. <strong>Charles:</strong> al calentar, el gas se expande; por eso un globo se encoge en el refrigerador. <strong>Gay-Lussac:</strong> en un recipiente rígido, calentar sube la presión; es el principio de la olla de presión.</p>
<div class="ejemplo"><span class="et">Boyle</span>4.0 L a 1.0 atm se comprimen a 2.5 atm. <p class="calc">V<sub>2</sub> = (1.0 × 4.0) / 2.5 = 1.6 L</p></div>
<div class="ejemplo"><span class="et">Charles</span>2.0 L a 27 °C (300 K) se calientan a 127 °C (400 K). <p class="calc">V<sub>2</sub> = (2.0 × 400) / 300 = 2.67 L</p></div>

<h3>Ley combinada</h3>
<p class="formula">P<sub>1</sub>V<sub>1</sub> / T<sub>1</sub> = P<sub>2</sub>V<sub>2</sub> / T<sub>2</sub><small>Si algo no cambia, se cancela y queda la ley particular</small></p>

<h3>Avogadro y el gas ideal</h3>
<p>Volúmenes iguales de gases distintos, a la misma P y T, tienen el mismo número de moléculas. En condiciones normales (0 °C y 1 atm), <strong>un mol de cualquier gas ocupa 22.4 L</strong>.</p>
<p class="formula">P V = n R T<small>R = 0.0821 L·atm/(mol·K)</small></p>
<div class="ejemplo"><span class="et">Gas ideal</span>¿Volumen de 2.0 mol a 27 °C y 1.5 atm? <p class="calc">V = (2.0 × 0.0821 × 300) / 1.5 = 32.8 L</p></div>
<div class="clave"><span class="et">¿Cuál uso?</span>Si hay un <b>antes y un después</b>, ley combinada. Si hay <b>un solo estado</b> con moles o gramos, PV = nRT.</div>

<h3>Ley de Dalton</h3>
<p>En una mezcla de gases, la presión total es la suma de las presiones parciales: P<sub>total</sub> = P<sub>1</sub> + P<sub>2</sub> + … En el aire, N<sub>2</sub> aporta 0.78 atm, O<sub>2</sub> 0.21 atm y el resto 0.01 atm.</p>`
    }
  ],
  tarjetas: [
    ['¿Quién es el padre de la química moderna y por qué?', '<b>Lavoisier.</b> Usó la balanza, enunció la conservación de la masa y explicó la combustión como combinación con el oxígeno.'],
    ['¿Qué buscaban los alquimistas?', 'La <b>piedra filosofal</b> (convertir metales en oro) y el <b>elixir de la vida</b>. Dejaron técnicas como la destilación.'],
    ['¿Qué decía la teoría del flogisto y qué la derribó?', 'Que los combustibles liberan «flogisto» al arder. La contradecía que los metales <b>ganan masa</b> al calcinarse.'],
    ['Diferencia entre masa y peso', '<b>Masa:</b> cantidad de materia, en kg, no cambia con el lugar. <b>Peso:</b> fuerza de gravedad sobre esa masa, en N, sí cambia.'],
    ['Enuncia la ley de la conservación de la masa', 'En una reacción química, la masa total de los reactivos es igual a la de los productos.'],
    ['Elemento vs. compuesto', '<b>Elemento:</b> un solo tipo de átomo. <b>Compuesto:</b> dos o más elementos unidos químicamente en proporción fija.'],
    ['Compuesto vs. mezcla', 'El compuesto tiene proporción fija y se separa por métodos químicos. La mezcla tiene proporción variable y se separa por métodos físicos.'],
    ['¿Qué es el efecto Tyndall?', 'La dispersión de la luz al atravesar un <b>coloide</b> (leche, niebla). Permite distinguirlo de una disolución.'],
    ['¿En qué propiedad se basa la destilación?', 'En la diferencia de <b>puntos de ebullición</b>.'],
    ['¿Qué método separa los pigmentos de una tinta?', 'La <b>cromatografía</b>.'],
    ['Propiedad intensiva: definición y tres ejemplos', 'No depende de la cantidad de materia. Densidad, punto de ebullición, temperatura.'],
    ['Fórmula de la densidad', '<b>d = m / V</b>. Es intensiva aunque masa y volumen son extensivas.'],
    ['Paso de sólido a gas y de gas a sólido', '<b>Sublimación</b> y <b>deposición</b> (sublimación inversa).'],
    ['¿Qué pasa con la temperatura durante un cambio de estado?', 'Permanece <b>constante</b>: el calor se usa en vencer las fuerzas de cohesión.'],
    ['Ley de Boyle', 'A T constante, P y V son inversamente proporcionales: <b>P₁V₁ = P₂V₂</b>.'],
    ['Ley de Charles', 'A P constante, V es directamente proporcional a T (en K): <b>V₁/T₁ = V₂/T₂</b>.'],
    ['Ley de Gay-Lussac', 'A V constante, P es directamente proporcional a T (en K): <b>P₁/T₁ = P₂/T₂</b>.'],
    ['Ecuación del gas ideal y valor de R', '<b>PV = nRT</b>, con R = 0.0821 L·atm/(mol·K).'],
    ['Volumen molar en condiciones normales', '<b>22.4 L</b> por mol de cualquier gas a 0 °C y 1 atm.']
  ],
  preguntas: [
    ['¿Qué científico demostró que la combustión es una combinación con el oxígeno?', ['Antoine Lavoisier', 'Georg Stahl', 'Robert Boyle', 'John Dalton'], 'Lavoisier derribó la teoría del flogisto pesando reactivos y productos en recipientes cerrados.'],
    ['El principal legado de la alquimia a la química fue:', ['Técnicas e instrumentos de laboratorio', 'La teoría atómica', 'La tabla periódica', 'La ley de las proporciones definidas'], 'Los alquimistas perfeccionaron la destilación, la sublimación y la cristalización.'],
    ['Un objeto se lleva de la Tierra a la Luna. ¿Qué ocurre?', ['Su masa no cambia y su peso disminuye', 'Su masa disminuye y su peso no cambia', 'Disminuyen masa y peso', 'No cambia ninguno'], 'La masa es la cantidad de materia; el peso depende de la gravedad, que en la Luna es menor.'],
    ['Reaccionan 46 g de sodio con cloro y se forman 117 g de NaCl. ¿Cuánto cloro reaccionó?', ['71 g', '163 g', '46 g', '58.5 g'], 'Por conservación de la masa: 117 − 46 = 71 g.'],
    ['¿Cuál de las siguientes es una sustancia pura?', ['Agua destilada', 'Aire', 'Bronce', 'Leche'], 'El agua destilada es un compuesto (H₂O). El aire y el bronce son mezclas homogéneas; la leche, un coloide.'],
    ['El bronce se clasifica como:', ['Mezcla homogénea', 'Compuesto', 'Elemento', 'Mezcla heterogénea'], 'Es una aleación de cobre y estaño: una disolución sólida.'],
    ['Para separar una mezcla de alcohol y agua se usa:', ['Destilación fraccionada', 'Filtración', 'Decantación', 'Tamizado'], 'Son líquidos miscibles con puntos de ebullición cercanos (78 °C y 100 °C).'],
    ['La decantación se basa en la diferencia de:', ['Densidad', 'Punto de ebullición', 'Solubilidad', 'Magnetismo'], 'El componente más denso queda abajo y se separa del más ligero.'],
    ['¿Cuál es una propiedad intensiva?', ['Punto de fusión', 'Volumen', 'Masa', 'Peso'], 'No depende de la cantidad de materia y sirve para identificar la sustancia.'],
    ['Un bloque de 54 g ocupa 20 cm³. Su densidad es:', ['2.7 g/cm³', '1080 g/cm³', '0.37 g/cm³', '34 g/cm³'], 'd = m / V = 54 / 20 = 2.7 g/cm³ (aluminio).'],
    ['La formación de escarcha es un ejemplo de:', ['Deposición', 'Sublimación', 'Condensación', 'Solidificación'], 'El vapor de agua pasa directamente a sólido.'],
    ['Mientras el agua hierve a presión constante, su temperatura:', ['Permanece constante', 'Sube lentamente', 'Baja', 'Sube y luego baja'], 'El calor se invierte en el cambio de estado, no en aumentar la temperatura.'],
    ['Un gas ocupa 6.0 L a 750 mmHg. A temperatura constante, ¿qué volumen ocupa a 1500 mmHg?', ['3.0 L', '12.0 L', '6.0 L', '1.5 L'], 'Boyle: V₂ = (750 × 6.0) / 1500 = 3.0 L.'],
    ['Un gas ocupa 1.5 L a 300 K. A presión constante, ¿qué volumen ocupa a 450 K?', ['2.25 L', '1.0 L', '3.0 L', '0.67 L'], 'Charles: V₂ = (1.5 × 450) / 300 = 2.25 L.'],
    ['Un tanque rígido está a 3.0 atm y 27 °C. ¿A qué temperatura la presión será 4.0 atm?', ['127 °C', '36 °C', '400 °C', '20 °C'], 'Gay-Lussac: T₂ = (300 K × 4.0) / 3.0 = 400 K = 127 °C.'],
    ['¿Cuántos moles hay en 5.6 L de un gas en condiciones normales?', ['0.25 mol', '4.0 mol', '0.50 mol', '125 mol'], 'n = 5.6 L / 22.4 L/mol = 0.25 mol.'],
    ['¿Qué presión ejercen 0.50 mol de gas en 10.0 L a 27 °C?', ['1.23 atm', '0.11 atm', '12.3 atm', '2.46 atm'], 'P = nRT / V = (0.50 × 0.0821 × 300) / 10.0 = 1.23 atm.'],
    ['La corriente impulsada por Paracelso, que orientó la química hacia la preparación de medicamentos, se llama:', ['Iatroquímica', 'Alquimia', 'Teoría del flogisto', 'Atomismo'], 'Paracelso propuso que el fin de la química era curar, no fabricar oro.'],
    ['La ecuación E = mc² establece que:', ['La masa y la energía son equivalentes', 'El peso depende de la gravedad', 'La masa nunca puede transformarse', 'La energía cinética depende de la velocidad'], 'Una pequeña cantidad de masa equivale a una enorme cantidad de energía.'],
    ['La leche y la gelatina dispersan la luz (efecto Tyndall) porque son:', ['Coloides', 'Disoluciones', 'Compuestos', 'Elementos'], 'Sus partículas son de tamaño intermedio: no sedimentan, pero dispersan la luz.'],
    ['El estado de la materia formado por gas ionizado, presente en las estrellas y los rayos, es:', ['Plasma', 'Vapor', 'Gas ideal', 'Coloide'], 'A temperaturas muy altas los átomos pierden electrones y forman plasma.'],
    ['Una mezcla contiene helio a 0.40 atm, neón a 0.35 atm y argón a 0.25 atm. La presión total es:', ['1.00 atm', '0.33 atm', '0.035 atm', '0.75 atm'], 'Ley de Dalton: la presión total es la suma de las presiones parciales.'],
    // --- Problemas en el estilo de la guía de leyes de los gases del profesor ---
    ['El volumen de una muestra de oxígeno es 2.5 L a 62 °C. ¿Qué volumen ocupará el gas a 30 °C si la presión permanece constante?', ['2.26 L', '2.76 L', '1.21 L', '5.17 L'], 'Charles con kelvin: V₂ = 2.5 × 303 / 335 = 2.26 L.'],
    ['Una determinada cantidad de neón ocupa 0.5 L a 200 °C. ¿Qué volumen ocuparía a 0 °C si la presión se mantiene constante?', ['0.289 L', '0.866 L', '0 L', '0.5 L'], 'V₂ = 0.5 × 273 / 473 = 0.289 L.'],
    ['Un tanque contiene 500 mL de aire comprimido a 1800 Torr. ¿Qué volumen ocupará a 750 Torr si no hay cambio de temperatura?', ['1200 mL', '208 mL', '2700 mL', '750 mL'], 'Boyle: V₂ = 500 × 1800 / 750 = 1200 mL.'],
    ['El oxígeno de un hospital se almacena a 2200 psi en cilindros de 60 L. ¿Qué volumen ocuparía el gas de un cilindro a presión atmosférica normal (14.7 psi)?', ['8980 L', '0.40 L', '132 000 L', '539 L'], 'Boyle: V₂ = 2200 × 60 / 14.7 ≈ 8980 L.'],
    ['Un tanque de buceo de 13 L fue llenado con aire a 115 atm. ¿Qué volumen ocupará el gas a una presión de 775 Torr?', ['1466 L', '1495 L', '1.93 L', '0.115 L'], '115 atm = 87 400 Torr; V₂ = 13 × 87 400 / 775 = 1466 L.'],
    ['¿Qué volumen ocuparán 150 mL de neón a 23 °C y 710 Torr en condiciones normales de temperatura y presión?', ['129 mL', '174 mL', '140 mL', '152 mL'], 'Ley combinada: V₂ = 150 × (710/760) × (273/296) = 129 mL.'],
    ['El argón tiene un volumen de 800 mL a 10 °C y 1 atm. ¿Cuál será la presión a 100 °C si el volumen aumenta a 850 mL?', ['1.24 atm', '0.71 atm', '9.41 atm', '1.40 atm'], 'P₂ = (1 × 800 × 373) / (283 × 850) = 1.24 atm.'],
    ['Un gas en un recipiente de volumen constante llegó a 179 °C y 770 mmHg. Si la temperatura inicial era de 50 °C, ¿a qué presión se encontraba inicialmente?', ['550 mmHg', '1078 mmHg', '215 mmHg', '2757 mmHg'], 'Gay-Lussac: P₁ = 770 × 323 / 452 = 550 mmHg.'],
    ['Un volumen constante de gas se encuentra a 950 mmHg y 25.0 °C. ¿A qué temperatura su presión será de 1 atm?', ['−34.6 °C', '20.0 °C', '99.5 °C', '31.3 °C'], 'T₂ = 298 × 760 / 950 = 238.4 K = −34.6 °C.'],
    ['Un cilindro de 23.8 L contiene oxígeno gaseoso a 20 °C y 732 Torr. ¿Cuántos moles de oxígeno hay en el cilindro?', ['0.953 mol', '724 mol', '13.96 mol', '1.05 mol'], 'P = 732/760 = 0.963 atm; n = (0.963 × 23.8) / (0.0821 × 293) = 0.953 mol.'],
    ['Calcula el volumen que ocupan 0.064 mol de gas butano a 20 °C y 1 atm.', ['1.54 L', '0.105 L', '1.43 L', '22.4 L'], 'V = nRT/P = 0.064 × 0.0821 × 293 / 1 = 1.54 L.'],
    ['Una muestra de gas ocupa 50 mL a temperatura y presión normales. ¿Cuántos moles de gas contiene?', ['2.23 × 10⁻³ mol', '2.23 mol', '1.12 mol', '448 mol'], 'n = 0.050 L / 22.4 L/mol = 0.00223 mol.']
  ]
});
