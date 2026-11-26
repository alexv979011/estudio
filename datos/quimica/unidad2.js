/* Unidad 2 · Estructura atómica y enlace químico */
window.UNIDADES = window.UNIDADES || [];
window.UNIDADES.push({
  materia: 'quimica',
  id: 2,
  titulo: 'Estructura atómica y enlace químico',
  corto: 'Átomo y enlace',
  color: '#bf5af2',
  resultado: 'construir configuraciones electrónicas y explicar la formación de enlaces.',
  temas: [
    {
      t: 'Número atómico y número de masa', min: 5,
      sub: 'Dos números bastan para saber qué hay dentro de un átomo.',
      html: `
<h3>Las tres partículas</h3>
<div class="tabla"><table>
  <tr><th>Partícula</th><th>Carga</th><th>Masa (uma)</th><th>Ubicación</th></tr>
  <tr><td><b>Protón</b> (p⁺)</td><td>+1</td><td>≈ 1</td><td>Núcleo</td></tr>
  <tr><td><b>Neutrón</b> (n⁰)</td><td>0</td><td>≈ 1</td><td>Núcleo</td></tr>
  <tr><td><b>Electrón</b> (e⁻)</td><td>−1</td><td>≈ 1/1836</td><td>Alrededor del núcleo</td></tr>
</table></div>
<p>Casi toda la masa del átomo está en el núcleo; casi todo su volumen es la región donde se mueven los electrones.</p>

<h3>Z y A</h3>
<figure class="fig">
  <div class="notacion"><div class="az"><b>23</b><b>11</b></div><div class="x">Na</div></div>
  <div class="leyenda"><span><i style="background:var(--accent)"></i>A = número de masa (protones + neutrones)</span><span><i style="background:var(--naranja)"></i>Z = número atómico (protones)</span></div>
</figure>
<ul>
  <li><strong>Número atómico (Z):</strong> número de protones. Identifica al elemento: todo átomo con 11 protones es sodio.</li>
  <li><strong>Número de masa (A):</strong> protones más neutrones.</li>
  <li><strong>Neutrones:</strong> n = A − Z.</li>
  <li>En un átomo <strong>neutro</strong>, electrones = protones = Z.</li>
</ul>
<div class="ejemplo"><span class="et">Ejemplo</span>Sodio-23: Z = 11, A = 23. Tiene 11 protones, 11 electrones y 23 − 11 = 12 neutrones.</div>

<h3>Iones</h3>
<p>Un átomo que pierde o gana electrones se convierte en un <strong>ion</strong>. Los protones no cambian.</p>
<ul>
  <li><strong>Catión</strong> (carga +): perdió electrones. Na⁺ tiene 11 protones y 10 electrones.</li>
  <li><strong>Anión</strong> (carga −): ganó electrones. Cl⁻ tiene 17 protones y 18 electrones.</li>
</ul>
<p class="formula">e⁻ = Z − carga<small>Ca²⁺: 20 − 2 = 18 e⁻ · O²⁻: 8 − (−2) = 10 e⁻</small></p>`
    },
    {
      t: 'Isótopos', min: 4,
      sub: 'Mismo elemento, distinta masa.',
      html: `
<h3>Definición</h3>
<p>Los <strong>isótopos</strong> son átomos del mismo elemento (mismo Z) con distinto número de masa (A), porque tienen diferente número de <strong>neutrones</strong>. Sus propiedades químicas son prácticamente iguales; cambian su masa y su estabilidad nuclear.</p>
<div class="tabla"><table>
  <tr><th>Isótopo</th><th>Protones</th><th>Neutrones</th><th>Nota</th></tr>
  <tr><td>Protio (¹H)</td><td>1</td><td>0</td><td>El más abundante</td></tr>
  <tr><td>Deuterio (²H)</td><td>1</td><td>1</td><td>Agua pesada</td></tr>
  <tr><td>Tritio (³H)</td><td>1</td><td>2</td><td>Radiactivo</td></tr>
  <tr><td>Carbono-12</td><td>6</td><td>6</td><td>Referencia de la uma</td></tr>
  <tr><td>Carbono-14</td><td>6</td><td>8</td><td>Datación de fósiles</td></tr>
</table></div>

<h3>Masa atómica promedio</h3>
<p>La masa atómica de la tabla periódica es el <strong>promedio ponderado</strong> de las masas de los isótopos naturales, según su abundancia. Por eso casi nunca es un número entero.</p>
<p class="formula">masa = Σ (masa del isótopo × abundancia)</p>
<div class="ejemplo"><span class="et">Ejemplo</span>El cloro tiene 75.8 % de Cl-35 y 24.2 % de Cl-37.<p class="calc">(35 × 0.758) + (37 × 0.242) = 26.5 + 9.0 = 35.5 uma</p></div>

<h3>Usos</h3>
<ul>
  <li><strong>Carbono-14:</strong> datación de restos orgánicos.</li>
  <li><strong>Cobalto-60:</strong> radioterapia contra el cáncer.</li>
  <li><strong>Yodo-131:</strong> diagnóstico y tratamiento de la tiroides.</li>
  <li><strong>Uranio-235:</strong> combustible de reactores nucleares.</li>
</ul>`
    },
    {
      t: 'Teoría mecánica ondulatoria', min: 6,
      sub: 'Del átomo como bola maciza al orbital como nube de probabilidad.',
      html: `
<h3>Los modelos anteriores</h3>
<ul class="linea-t">
  <li><time>1808 · Dalton</time>Esfera maciza e indivisible.</li>
  <li><time>1897 · Thomson</time>«Budín con pasas»: masa positiva con electrones incrustados.</li>
  <li><time>1911 · Rutherford</time>Núcleo pequeño, denso y positivo; electrones girando alrededor.</li>
  <li><time>1913 · Bohr</time>Electrones en órbitas circulares con energía fija (niveles).</li>
</ul>
<p>El modelo de Bohr solo explicaba bien el hidrógeno. Hacía falta una idea nueva.</p>

<h3>Tres ideas que lo cambiaron todo</h3>
<ul>
  <li><strong>De Broglie (1924) · dualidad onda-partícula:</strong> el electrón se comporta como partícula y también como onda.</li>
  <li><strong>Heisenberg (1927) · principio de incertidumbre:</strong> es imposible conocer a la vez, con exactitud, la posición y la velocidad de un electrón. No tiene sentido hablar de órbitas definidas.</li>
  <li><strong>Schrödinger (1926) · ecuación de onda:</strong> describe al electrón como una onda y permite calcular dónde es más probable encontrarlo.</li>
</ul>

<h3>Órbita y orbital no son lo mismo</h3>
<p>Una <strong>órbita</strong> (Bohr) es una trayectoria fija. Un <strong>orbital</strong> (modelo actual) es una <strong>región del espacio donde hay alta probabilidad</strong> de encontrar al electrón. Se representa como una nube: más densa donde la probabilidad es mayor.</p>
<div class="clave"><span class="et">Modelo actual</span>El átomo tiene un núcleo con protones y neutrones, rodeado de electrones que ocupan orbitales. Cada electrón queda descrito por cuatro <b>números cuánticos</b>, que salen de resolver la ecuación de Schrödinger (el cuarto, el espín, lo añadió Dirac).</div>`
    },
    {
      t: 'Números cuánticos', min: 6,
      sub: 'La «dirección» de cada electrón en el átomo.',
      html: `
<h3>Los cuatro números</h3>
<div class="tabla"><table>
  <tr><th>Número</th><th>Nombre</th><th>Indica</th><th>Valores</th></tr>
  <tr><td><b>n</b></td><td>Principal</td><td>Nivel de energía y tamaño</td><td>1, 2, 3, 4…</td></tr>
  <tr><td><b>l</b></td><td>Secundario o azimutal</td><td>Subnivel y forma del orbital</td><td>0 hasta n − 1</td></tr>
  <tr><td><b>m</b></td><td>Magnético</td><td>Orientación del orbital</td><td>−l … 0 … +l</td></tr>
  <tr><td><b>s</b></td><td>Espín</td><td>Sentido de giro del electrón</td><td>+½ o −½</td></tr>
</table></div>

<h3>Subniveles</h3>
<div class="tabla"><table>
  <tr><th>l</th><th>Subnivel</th><th>Orbitales (2l + 1)</th><th>Electrones máx.</th></tr>
  <tr><td>0</td><td><b>s</b> (esférico)</td><td>1</td><td>2</td></tr>
  <tr><td>1</td><td><b>p</b> (lobular)</td><td>3</td><td>6</td></tr>
  <tr><td>2</td><td><b>d</b></td><td>5</td><td>10</td></tr>
  <tr><td>3</td><td><b>f</b></td><td>7</td><td>14</td></tr>
</table></div>
<p>Cada orbital admite como máximo <strong>2 electrones</strong>. La capacidad de un nivel completo es <strong>2n²</strong>: 2, 8, 18, 32.</p>

<h3>Cómo leer un conjunto</h3>
<div class="ejemplo"><span class="et">Ejemplo</span>¿Qué números cuánticos tiene el último electrón del nitrógeno (1s² 2s² 2p³)?<br>Está en 2p, así que n = 2 y l = 1. Los tres orbitales p tienen m = −1, 0, +1. Con tres electrones, uno en cada orbital, el tercero ocupa m = +1 con s = +½.<p class="calc">(2, 1, +1, +½)</p></div>
<div class="ojo"><span class="et">Combinaciones imposibles</span>l nunca puede ser igual o mayor que n, y m nunca puede salirse del rango −l a +l. El conjunto (2, 2, 0, +½) no existe: con n = 2, l solo puede ser 0 o 1.</div>`
    },
    {
      t: 'Aufbau, Hund y Pauli', min: 5,
      sub: 'Las tres reglas para acomodar electrones.',
      html: `
<h3>Principio de Aufbau (construcción)</h3>
<p>Los electrones ocupan primero los orbitales de <strong>menor energía</strong>. El orden se obtiene con la regla de las diagonales:</p>
<figure class="fig">
  <div class="moeller">
    <span class="s">1s</span><span class="v"></span><span class="v"></span><span class="v"></span>
    <span class="s">2s</span><span class="p">2p</span><span class="v"></span><span class="v"></span>
    <span class="s">3s</span><span class="p">3p</span><span class="d">3d</span><span class="v"></span>
    <span class="s">4s</span><span class="p">4p</span><span class="d">4d</span><span class="f">4f</span>
    <span class="s">5s</span><span class="p">5p</span><span class="d">5d</span><span class="f">5f</span>
    <span class="s">6s</span><span class="p">6p</span><span class="d">6d</span><span class="v"></span>
    <span class="s">7s</span><span class="p">7p</span><span class="v"></span><span class="v"></span>
  </div>
  <div class="orden">1s<i>→</i>2s<i>→</i>2p<i>→</i>3s<i>→</i>3p<i>→</i>4s<i>→</i>3d<i>→</i>4p<i>→</i>5s<i>→</i>4d<i>→</i>5p<i>→</i>6s<i>→</i>4f<i>→</i>5d<i>→</i>6p<i>→</i>7s<i>→</i>5f<i>→</i>6d<i>→</i>7p</div>
  <div class="pie-fig">Se lee en diagonales, de arriba a la derecha hacia abajo a la izquierda. Fíjate que 4s se llena antes que 3d.</div>
</figure>

<h3>Principio de exclusión de Pauli</h3>
<p>En un átomo no puede haber dos electrones con los <strong>cuatro números cuánticos iguales</strong>. Consecuencia: en un orbital caben máximo dos electrones, y con espines opuestos (↑↓).</p>

<h3>Regla de Hund (máxima multiplicidad)</h3>
<p>En orbitales de la misma energía, los electrones se colocan <strong>uno en cada orbital, con el mismo espín</strong>, antes de formar parejas.</p>
<figure class="fig">
  <div class="orbitales">
    <div class="grupo"><div class="cajas"><span>↑</span><span>↑</span><span>↑</span></div>2p³ correcto</div>
    <div class="grupo"><div class="cajas"><span>↑↓</span><span>↑</span><span></span></div>2p³ incorrecto</div>
  </div>
</figure>
<div class="clave"><span class="et">Resumen</span><b>Aufbau</b> dice en qué orden. <b>Pauli</b> dice cuántos caben (2 por orbital, espines opuestos). <b>Hund</b> dice cómo repartirlos dentro de un subnivel (primero uno en cada orbital).</div>`
    },
    {
      t: 'Configuración electrónica', min: 6,
      sub: 'Escribir dónde está cada electrón, y leer la tabla periódica con eso.',
      html: `
<h3>Cómo se escribe</h3>
<p>Se siguen las diagonales y se va llenando cada subnivel hasta agotar los electrones (Z en un átomo neutro). El exponente indica cuántos electrones hay en el subnivel.</p>
<div class="ejemplo"><span class="et">Ejemplos</span>
<p>Oxígeno (Z = 8): 1s² 2s² 2p⁴</p>
<p>Sodio (Z = 11): 1s² 2s² 2p⁶ 3s¹</p>
<p>Hierro (Z = 26): 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶</p></div>

<h3>Pruébalo tú</h3>
<div data-widget="config"></div>

<h3>Configuración con kernel</h3>
<p>Para abreviar, se escribe entre corchetes el gas noble anterior y solo se detallan los electrones que siguen: Na = [Ne] 3s¹; Fe = [Ar] 4s² 3d⁶.</p>

<h3>Lo que te dice la configuración</h3>
<ul>
  <li><strong>Periodo:</strong> el nivel más alto ocupado. Na termina en 3s¹ → periodo 3.</li>
  <li><strong>Electrones de valencia:</strong> los del nivel más externo; son los que participan en los enlaces. En los grupos principales indican el grupo: Na tiene 1 → grupo 1; Cl (3s² 3p⁵) tiene 7 → grupo 17.</li>
  <li><strong>Bloque:</strong> el subnivel donde cae el último electrón (s, p, d o f).</li>
</ul>
<div class="ojo"><span class="et">Excepciones clásicas</span>Cromo: [Ar] 4s¹ 3d⁵. Cobre: [Ar] 4s¹ 3d¹⁰. Un subnivel d semilleno o lleno es más estable, y un electrón de 4s pasa a 3d.</div>`
    },
    {
      t: 'Estructuras de Lewis', min: 5,
      sub: 'Los electrones de valencia dibujados como puntos.',
      html: `
<h3>Símbolo de Lewis</h3>
<p>Se escribe el símbolo del elemento rodeado de puntos, uno por cada <strong>electrón de valencia</strong>. En los grupos principales, el número de puntos coincide con la última cifra del grupo.</p>
<div class="tabla"><table>
  <tr><th>Grupo</th><th>1</th><th>2</th><th>13</th><th>14</th><th>15</th><th>16</th><th>17</th><th>18</th></tr>
  <tr><td><b>Ejemplo</b></td><td>Na</td><td>Mg</td><td>Al</td><td>C</td><td>N</td><td>O</td><td>Cl</td><td>Ne</td></tr>
  <tr><td><b>Puntos</b></td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td><td>6</td><td>7</td><td>8</td></tr>
</table></div>

<h3>Estructura de una molécula, paso a paso</h3>
<ol>
  <li>Suma los electrones de valencia de todos los átomos.</li>
  <li>Coloca en el centro el átomo menos electronegativo (nunca el hidrógeno).</li>
  <li>Une los átomos con enlaces sencillos (cada enlace = 2 electrones).</li>
  <li>Reparte los electrones restantes como pares libres hasta completar octetos, empezando por los átomos de afuera.</li>
  <li>Si al átomo central le faltan electrones, convierte pares libres en enlaces dobles o triples.</li>
</ol>
<div class="ejemplo"><span class="et">Agua, H₂O</span>Electrones: 1 + 1 + 6 = 8. El oxígeno va al centro con dos enlaces O–H (4 e⁻) y le quedan <b>dos pares libres</b> (4 e⁻). El oxígeno completa 8; cada hidrógeno, 2.</div>
<div class="ejemplo"><span class="et">Dióxido de carbono, CO₂</span>Electrones: 4 + 6 + 6 = 16. Con enlaces sencillos el carbono no completa el octeto, así que se forman <b>dos enlaces dobles</b>: O=C=O, con dos pares libres en cada oxígeno.</div>
<div class="clave"><span class="et">Para recordar</span>Par compartido = enlace (se dibuja como raya). Par libre = dos puntos sobre un átomo. N₂ tiene un enlace triple; O₂, uno doble; H₂ y Cl₂, uno sencillo.</div>`
    },
    {
      t: 'Propiedades periódicas', min: 5,
      sub: 'Cuatro tendencias que se leen directamente en la tabla.',
      html: `
<h3>Las propiedades</h3>
<ul>
  <li><strong>Radio atómico:</strong> tamaño del átomo.</li>
  <li><strong>Energía de ionización:</strong> energía necesaria para arrancar un electrón a un átomo gaseoso.</li>
  <li><strong>Afinidad electrónica:</strong> energía que se libera cuando un átomo gana un electrón.</li>
  <li><strong>Electronegatividad:</strong> capacidad de un átomo para atraer los electrones de un enlace. El flúor es el más electronegativo (4.0 en la escala de Pauling).</li>
</ul>

<h3>Las tendencias</h3>
<figure class="fig"><svg viewBox="0 0 560 250" width="560">
  <defs><marker id="mp" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" style="fill:var(--accent)"/></marker>
  <marker id="mn" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0 0L9 4.5L0 9z" fill="#ff9f0a"/></marker></defs>
  <rect class="g-caja" x="110" y="50" width="340" height="150" rx="16" style="stroke:var(--tenue)"/>
  <text class="g-tx2" x="280" y="118" text-anchor="middle" font-size="13">Tabla periódica</text>
  <text class="g-tx" x="134" y="186" font-size="14">Fr</text><text class="g-tx" x="424" y="76" font-size="14" text-anchor="end">F</text>
  <path d="M120 34H440" class="g-fri" marker-end="url(#mp)" style="stroke-width:2.5"/><path d="M92 190V62" class="g-fri" marker-end="url(#mp)" style="stroke-width:2.5"/>
  <text class="g-fri-t" x="280" y="24" text-anchor="middle" font-size="12.500">Aumentan: electronegatividad, energía de ionización, afinidad electrónica</text>
  <path d="M440 218H120" stroke="#ff9f0a" stroke-width="2.5" fill="none" marker-end="url(#mn)"/><path d="M468 62V190" stroke="#ff9f0a" stroke-width="2.5" fill="none" marker-end="url(#mn)"/>
  <text x="280" y="240" text-anchor="middle" font-size="12.500" fill="#ff9f0a" font-weight="600" style="font-family:var(--fuente)">Aumentan: radio atómico y carácter metálico</text>
</svg></figure>
<div class="tabla"><table>
  <tr><th>Propiedad</th><th>En un periodo (→)</th><th>En un grupo (↓)</th></tr>
  <tr><td>Radio atómico</td><td>Disminuye</td><td>Aumenta</td></tr>
  <tr><td>Energía de ionización</td><td>Aumenta</td><td>Disminuye</td></tr>
  <tr><td>Afinidad electrónica</td><td>Aumenta</td><td>Disminuye</td></tr>
  <tr><td>Electronegatividad</td><td>Aumenta</td><td>Disminuye</td></tr>
  <tr><td>Carácter metálico</td><td>Disminuye</td><td>Aumenta</td></tr>
</table></div>

<h3>El porqué</h3>
<p><strong>Al bajar en un grupo</strong> se añaden niveles: el átomo es más grande y el electrón externo está más lejos y menos atraído. <strong>Al avanzar en un periodo</strong> aumentan los protones sin añadir niveles: el núcleo atrae con más fuerza, el átomo se encoge y cuesta más quitarle un electrón.</p>
<div class="clave"><span class="et">Atajo</span>El radio y el carácter metálico crecen hacia el <b>francio</b> (abajo a la izquierda). Todo lo demás crece hacia el <b>flúor</b> (arriba a la derecha).</div>`
    },
    {
      t: 'Regla del octeto', min: 3,
      sub: 'Por qué los átomos se enlazan.',
      html: `
<h3>La regla</h3>
<p>Los gases nobles casi no reaccionan porque tienen su nivel externo completo: ocho electrones (ns² np⁶). La <strong>regla del octeto</strong> dice que los demás átomos tienden a <strong>ganar, perder o compartir electrones</strong> hasta tener ocho en su capa de valencia y parecerse al gas noble más cercano.</p>
<ul>
  <li>Los <strong>metales</strong>, con pocos electrones de valencia, los pierden: Na → Na⁺ (queda como el neón).</li>
  <li>Los <strong>no metales</strong>, con muchos, los ganan o los comparten: Cl → Cl⁻ (queda como el argón).</li>
</ul>
<div class="ejemplo"><span class="et">Ejemplo</span>El sodio (1 e⁻ de valencia) le cede su electrón al cloro (7 e⁻). Ambos completan su octeto y los iones Na⁺ y Cl⁻ se atraen: se forma NaCl.</div>

<h3>Excepciones</h3>
<ul>
  <li><strong>Regla del dueto:</strong> H, He, Li y Be se estabilizan con 2 electrones.</li>
  <li><strong>Octeto incompleto:</strong> el boro en BF₃ se queda con 6.</li>
  <li><strong>Octeto expandido:</strong> elementos del periodo 3 en adelante pueden pasar de 8. PCl₅ (10) y SF₆ (12).</li>
  <li><strong>Número impar de electrones:</strong> NO y NO₂.</li>
</ul>`
    },
    {
      t: 'Tipos de enlaces', min: 7,
      sub: 'Transferir, compartir o poner en común los electrones.',
      html: `
<h3>Enlace iónico</h3>
<p>Se forma entre un <strong>metal y un no metal</strong> por <strong>transferencia</strong> de electrones: el metal queda como catión y el no metal como anión, y se atraen. Diferencia de electronegatividad alta (≥ 1.7).</p>
<p><em>Propiedades:</em> sólidos cristalinos, puntos de fusión altos, solubles en agua, conducen la electricidad fundidos o disueltos. Ejemplos: NaCl, CaO, KBr.</p>

<h3>Enlace covalente</h3>
<p>Se forma entre <strong>no metales</strong> que <strong>comparten</strong> pares de electrones.</p>
<ul>
  <li><strong>No polar:</strong> átomos iguales o de electronegatividad casi igual (diferencia &lt; 0.4). Comparten por igual. H₂, Cl₂, O₂, CH₄.</li>
  <li><strong>Polar:</strong> diferencia entre 0.4 y 1.7. El par se desplaza hacia el átomo más electronegativo y aparecen cargas parciales. H₂O, HCl, NH₃.</li>
  <li><strong>Coordinado o dativo:</strong> un solo átomo aporta el par completo. NH₄⁺, H₃O⁺.</li>
  <li>Según los pares compartidos: <strong>sencillo</strong> (H–H), <strong>doble</strong> (O=O) o <strong>triple</strong> (N≡N).</li>
</ul>
<p><em>Propiedades:</em> puntos de fusión bajos, muchos son gases o líquidos, malos conductores.</p>

<h3>Enlace metálico</h3>
<p>Se forma entre <strong>átomos de metales</strong>. Sus electrones de valencia quedan libres y se mueven por toda la red: el «mar de electrones». Explica el brillo, la conductividad eléctrica y térmica, la maleabilidad y la ductilidad. Ejemplos: Cu, Fe, bronce.</p>

<h3>Cómo predecir el tipo</h3>
<figure class="fig">
  <div class="flujo"><div class="nodo">0 – 0.4<small>Covalente no polar</small></div><div class="nodo">0.4 – 1.7<small>Covalente polar</small></div><div class="nodo a">≥ 1.7<small>Iónico</small></div></div>
  <div class="pie-fig">Diferencia de electronegatividad (ΔEN). Los límites varían un poco de un libro a otro.</div>
</figure>
<div class="ejemplo"><span class="et">Ejemplos</span>NaCl: 3.0 − 0.9 = 2.1 → iónico. HCl: 3.0 − 2.1 = 0.9 → covalente polar. Cl₂: 3.0 − 3.0 = 0 → covalente no polar.</div>

<h3>Fuerzas intermoleculares</h3>
<p>Son atracciones <em>entre</em> moléculas, más débiles que un enlace. La más importante es el <strong>puente de hidrógeno</strong>: aparece cuando el hidrógeno está unido a F, O o N. Explica que el agua hierva a 100 °C y que el hielo flote.</p>`
    }
  ],
  tarjetas: [
    ['¿Qué indica el número atómico (Z)?', 'El número de <b>protones</b>. Identifica al elemento. En un átomo neutro también es el número de electrones.'],
    ['¿Cómo se calculan los neutrones?', '<b>n = A − Z</b> (número de masa menos número atómico).'],
    ['¿Qué es un isótopo?', 'Átomos del mismo elemento (mismo Z) con distinto número de <b>neutrones</b> y, por tanto, distinto A.'],
    ['Catión y anión', '<b>Catión:</b> ion positivo, perdió electrones. <b>Anión:</b> ion negativo, ganó electrones.'],
    ['Principio de incertidumbre de Heisenberg', 'No se pueden conocer a la vez, con exactitud, la posición y la velocidad de un electrón.'],
    ['¿Qué es un orbital?', 'La región del espacio donde hay <b>alta probabilidad</b> de encontrar a un electrón.'],
    ['¿Qué indica cada número cuántico?', '<b>n:</b> nivel. <b>l:</b> subnivel y forma. <b>m:</b> orientación. <b>s:</b> espín (+½ o −½).'],
    ['Electrones máximos en s, p, d y f', '<b>2, 6, 10 y 14.</b> Tienen 1, 3, 5 y 7 orbitales, con 2 electrones cada uno.'],
    ['Principio de exclusión de Pauli', 'No puede haber dos electrones con los cuatro números cuánticos iguales: máximo 2 por orbital, con espines opuestos.'],
    ['Regla de Hund', 'En orbitales de igual energía, los electrones se colocan uno por orbital con el mismo espín antes de aparearse.'],
    ['Orden de llenado hasta 4p', '1s → 2s → 2p → 3s → 3p → <b>4s → 3d</b> → 4p'],
    ['Configuración del sodio (Z = 11) con kernel', '<b>[Ne] 3s¹</b>'],
    ['¿Qué son los electrones de valencia?', 'Los del nivel más externo. Participan en los enlaces y, en los grupos principales, indican el grupo.'],
    ['¿Cómo varía la electronegatividad en la tabla?', 'Aumenta hacia la <b>derecha</b> y hacia <b>arriba</b>. El flúor es el más electronegativo.'],
    ['¿Cómo varía el radio atómico?', 'Aumenta hacia <b>abajo</b> y hacia la <b>izquierda</b>.'],
    ['Regla del octeto', 'Los átomos ganan, pierden o comparten electrones hasta tener 8 en su capa de valencia, como un gas noble.'],
    ['Enlace iónico', 'Metal + no metal. Hay <b>transferencia</b> de electrones y atracción entre iones. ΔEN ≥ 1.7.'],
    ['Enlace covalente polar vs. no polar', '<b>No polar:</b> comparten por igual (H₂). <b>Polar:</b> el par se desplaza al átomo más electronegativo (H₂O).'],
    ['¿Qué explica el «mar de electrones»?', 'El <b>enlace metálico</b> y sus propiedades: conductividad, brillo, maleabilidad y ductilidad.']
  ],
  preguntas: [
    ['Un átomo tiene Z = 17 y A = 35. ¿Cuántos neutrones tiene?', ['18', '17', '35', '52'], 'n = A − Z = 35 − 17 = 18.'],
    ['El ion Ca²⁺ (Z = 20) tiene:', ['20 protones y 18 electrones', '18 protones y 20 electrones', '20 protones y 22 electrones', '22 protones y 20 electrones'], 'Un catión 2+ perdió dos electrones; los protones no cambian.'],
    ['Los isótopos de un elemento se diferencian en su número de:', ['Neutrones', 'Protones', 'Electrones', 'Niveles de energía'], 'Tienen el mismo Z y distinto A porque cambian los neutrones.'],
    ['¿Quién propuso que el electrón se comporta también como onda?', ['De Broglie', 'Rutherford', 'Dalton', 'Thomson'], 'La dualidad onda-partícula es de Louis de Broglie (1924).'],
    ['El número cuántico que indica la forma del orbital es:', ['l (secundario)', 'n (principal)', 'm (magnético)', 's (espín)'], 'l define el subnivel: 0 = s, 1 = p, 2 = d, 3 = f.'],
    ['¿Cuántos electrones caben como máximo en el subnivel d?', ['10', '6', '14', '2'], 'El subnivel d tiene 5 orbitales con 2 electrones cada uno.'],
    ['¿Cuál conjunto de números cuánticos es imposible?', ['(2, 2, 0, +½)', '(3, 1, −1, −½)', '(1, 0, 0, +½)', '(4, 3, +2, −½)'], 'l debe ser menor que n. Con n = 2, l solo puede ser 0 o 1.'],
    ['«En un orbital caben máximo dos electrones con espines opuestos» corresponde a:', ['Principio de exclusión de Pauli', 'Regla de Hund', 'Principio de Aufbau', 'Principio de incertidumbre'], 'Pauli: no hay dos electrones con los cuatro números cuánticos iguales.'],
    ['La configuración electrónica del cloro (Z = 17) es:', ['1s² 2s² 2p⁶ 3s² 3p⁵', '1s² 2s² 2p⁶ 3s² 3p⁶', '1s² 2s² 2p⁶ 3s¹ 3p⁶', '1s² 2s² 2p⁵ 3s² 3p⁶'], 'Suma de exponentes: 2 + 2 + 6 + 2 + 5 = 17.'],
    ['Según las diagonales, después de 3p se llena:', ['4s', '3d', '4p', '3f'], '4s tiene menor energía que 3d.'],
    ['Un elemento termina su configuración en 3s² 3p⁴. Pertenece al:', ['Periodo 3, grupo 16', 'Periodo 4, grupo 16', 'Periodo 3, grupo 14', 'Periodo 6, grupo 3'], 'Nivel externo 3 → periodo 3; 6 electrones de valencia → grupo 16 (es el azufre).'],
    ['¿Cuántos pares de electrones libres tiene el oxígeno en la molécula de agua?', ['2', '1', '3', '4'], 'El oxígeno tiene 6 e⁻ de valencia: 2 en enlaces y 4 en dos pares libres.'],
    ['¿Cuál elemento es el más electronegativo?', ['Flúor', 'Francio', 'Oxígeno', 'Cloro'], 'La electronegatividad aumenta hacia arriba y a la derecha.'],
    ['Al bajar en un grupo de la tabla periódica, el radio atómico:', ['Aumenta', 'Disminuye', 'No cambia', 'Primero baja y luego sube'], 'Se añaden niveles de energía.'],
    ['El enlace del NaCl es:', ['Iónico', 'Covalente polar', 'Covalente no polar', 'Metálico'], 'Metal + no metal, con transferencia de electrones (ΔEN = 2.1).'],
    ['La molécula de Cl₂ presenta un enlace:', ['Covalente no polar', 'Covalente polar', 'Iónico', 'Coordinado'], 'Dos átomos iguales comparten el par por igual (ΔEN = 0).'],
    ['La conductividad eléctrica de los metales se explica por:', ['El mar de electrones libres', 'La transferencia de electrones a un no metal', 'Los puentes de hidrógeno', 'Los pares libres'], 'En el enlace metálico los electrones de valencia se mueven por toda la red.'],
    ['El experimento de la lámina de oro de Rutherford demostró la existencia de:', ['El núcleo atómico', 'El electrón', 'El neutrón', 'Los orbitales'], 'Algunas partículas alfa rebotaban: la carga positiva y la masa están concentradas en un núcleo.'],
    ['El cloro tiene 75.8 % de Cl-35 y 24.2 % de Cl-37. Su masa atómica promedio es aproximadamente:', ['35.5 uma', '36.0 uma', '35.0 uma', '37.0 uma'], '(35 × 0.758) + (37 × 0.242) = 26.5 + 9.0 = 35.5.'],
    ['La capacidad máxima de electrones del nivel n = 3 es:', ['18', '8', '9', '32'], 'Se calcula con 2n²: 2 × 3² = 18.'],
    ['La configuración con kernel del calcio (Z = 20) es:', ['[Ar] 4s²', '[Ne] 4s²', '[Ar] 3d²', '[Kr] 4s²'], 'El argón tiene 18 electrones; los dos restantes van a 4s, que se llena antes que 3d.'],
    ['El enlace entre el hidrógeno y el oxígeno dentro de una molécula de agua es:', ['Covalente polar', 'Iónico', 'Covalente no polar', 'Metálico'], 'Dos no metales comparten electrones, y el oxígeno, más electronegativo, los atrae más.']
  ]
});
