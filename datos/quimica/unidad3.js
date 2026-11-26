/* Unidad 3 · Nomenclatura */
window.UNIDADES = window.UNIDADES || [];
window.UNIDADES.push({
  materia: 'quimica',
  id: 3,
  titulo: 'Nomenclatura',
  corto: 'Nomenclatura',
  color: '#ff9f0a',
  resultado: 'reconocer los compuestos y entender las reglas para nombrarlos y formularlos.',
  temas: [
    {
      t: 'Tradicional, Stock e IUPAC', min: 8,
      sub: 'Tres maneras de nombrar el mismo compuesto y las reglas que comparten.',
      html: `
<h3>Número de oxidación</h3>
<p>Para nombrar o formular necesitas el <strong>número de oxidación</strong>: la carga que tendría un átomo si todos sus enlaces fueran iónicos. Reglas básicas:</p>
<ul>
  <li>Un elemento libre vale 0 (Fe, O₂, H₂).</li>
  <li>El <strong>oxígeno</strong> vale −2 (en peróxidos, −1).</li>
  <li>El <strong>hidrógeno</strong> vale +1 (en hidruros metálicos, −1).</li>
  <li>Grupo 1: +1. Grupo 2: +2. Aluminio: +3.</li>
  <li>La suma en un compuesto neutro es 0; en un ion, su carga.</li>
</ul>
<div class="ejemplo"><span class="et">Ejemplo</span>¿Número de oxidación del azufre en H₂SO₄? 2(+1) + x + 4(−2) = 0 → x = <b>+6</b>.</div>

<h3>Cómo se arma una fórmula</h3>
<p>Se escribe primero el elemento positivo y después el negativo, y se <strong>cruzan las valencias</strong> como subíndices. Si se puede, se simplifica.</p>
<div class="ejemplo"><span class="et">Ejemplo</span>Al³⁺ y O²⁻ → Al₂O₃. Ca²⁺ y O²⁻ → Ca₂O₂ → se simplifica a CaO.</div>

<h3>Los tres sistemas</h3>
<div class="tabla"><table>
  <tr><th>Sistema</th><th>Cómo indica la valencia</th><th>Fe₂O₃</th></tr>
  <tr><td><b>Tradicional</b></td><td>Prefijos y sufijos</td><td>Óxido férrico</td></tr>
  <tr><td><b>Stock</b></td><td>Número romano entre paréntesis</td><td>Óxido de hierro (III)</td></tr>
  <tr><td><b>IUPAC (sistemática)</b></td><td>Prefijos numéricos</td><td>Trióxido de dihierro</td></tr>
</table></div>

<h4>Tradicional: sufijos según cuántas valencias tenga el elemento</h4>
<div class="tabla"><table>
  <tr><th>Valencias</th><th>Menor →</th><th></th><th></th><th>→ Mayor</th></tr>
  <tr><td>Una</td><td colspan="4">-ico (o solo «de …»)</td></tr>
  <tr><td>Dos</td><td>-oso</td><td></td><td></td><td>-ico</td></tr>
  <tr><td>Tres</td><td>hipo- -oso</td><td>-oso</td><td></td><td>-ico</td></tr>
  <tr><td>Cuatro</td><td>hipo- -oso</td><td>-oso</td><td>-ico</td><td>per- -ico</td></tr>
</table></div>
<p>Algunos elementos usan su raíz latina: hierro → <em>ferr-</em>, cobre → <em>cupr-</em>, plomo → <em>plumb-</em>, oro → <em>aur-</em>, azufre → <em>sulfur-</em>.</p>

<h4>Stock</h4>
<p>Nombre de la función + «de» + elemento + valencia en romano. Si el elemento solo tiene una valencia, el número se omite: óxido de sodio.</p>

<h4>Sistemática</h4>
<p>Prefijos mono-, di-, tri-, tetra-, penta-, hexa-, hepta- para indicar cuántos átomos hay de cada elemento: CO₂ = dióxido de carbono.</p>

<h3>Valencias que conviene saber</h3>
<div class="tabla"><table>
  <tr><th>Elementos</th><th>Números de oxidación</th></tr>
  <tr><td>Li, Na, K, Ag</td><td>+1</td></tr>
  <tr><td>Mg, Ca, Ba, Zn</td><td>+2</td></tr>
  <tr><td>Al</td><td>+3</td></tr>
  <tr><td>Cu, Hg</td><td>+1, +2</td></tr>
  <tr><td>Fe, Co, Ni</td><td>+2, +3</td></tr>
  <tr><td>Pb, Sn</td><td>+2, +4</td></tr>
  <tr><td>C</td><td>+2, +4 (−4)</td></tr>
  <tr><td>N, P</td><td>+3, +5 (−3)</td></tr>
  <tr><td>S</td><td>+2, +4, +6 (−2)</td></tr>
  <tr><td>Cl, Br, I</td><td>+1, +3, +5, +7 (−1)</td></tr>
</table></div>`
    },
    {
      t: 'Óxidos y peróxidos', min: 4,
      sub: 'Metal más oxígeno.',
      html: `
<h3>Mapa de familias</h3>
<figure class="fig">
  <div class="flujo"><div class="nodo">Metal</div><div class="fl">+ O₂</div><div class="nodo a">Óxido básico</div><div class="fl">+ H₂O</div><div class="nodo">Hidróxido</div></div>
  <div class="flujo"><div class="nodo">No metal</div><div class="fl">+ O₂</div><div class="nodo">Anhídrido</div><div class="fl">+ H₂O</div><div class="nodo">Oxiácido</div></div>
  <div class="flujo"><div class="nodo">Hidróxido + ácido</div><div class="fl"></div><div class="nodo">Sal + agua</div></div>
  <div class="pie-fig">Toda la unidad cabe en este esquema. Ahora estás en el recuadro resaltado.</div>
</figure>

<h3>Óxidos básicos (metálicos)</h3>
<p>Son compuestos binarios de un <strong>metal con oxígeno</strong> (O²⁻). Se llaman básicos porque con agua forman hidróxidos. Fórmula general: M₂Oₓ.</p>
<div class="tabla"><table>
  <tr><th>Fórmula</th><th>Tradicional</th><th>Stock</th><th>Sistemática</th></tr>
  <tr><td>Na₂O</td><td>Óxido de sodio</td><td>Óxido de sodio</td><td>Monóxido de disodio</td></tr>
  <tr><td>CaO</td><td>Óxido de calcio</td><td>Óxido de calcio</td><td>Monóxido de calcio</td></tr>
  <tr><td>FeO</td><td>Óxido ferroso</td><td>Óxido de hierro (II)</td><td>Monóxido de hierro</td></tr>
  <tr><td>Fe₂O₃</td><td>Óxido férrico</td><td>Óxido de hierro (III)</td><td>Trióxido de dihierro</td></tr>
  <tr><td>Cu₂O</td><td>Óxido cuproso</td><td>Óxido de cobre (I)</td><td>Monóxido de dicobre</td></tr>
  <tr><td>CuO</td><td>Óxido cúprico</td><td>Óxido de cobre (II)</td><td>Monóxido de cobre</td></tr>
</table></div>

<h3>Peróxidos</h3>
<p>Contienen el grupo <strong>peróxido O₂²⁻</strong>, en el que cada oxígeno vale <strong>−1</strong>. Se nombran «peróxido de…». El subíndice 2 del oxígeno <strong>no se simplifica</strong>.</p>
<div class="tabla"><table>
  <tr><th>Fórmula</th><th>Nombre</th><th>Uso</th></tr>
  <tr><td>H₂O₂</td><td>Peróxido de hidrógeno</td><td>Agua oxigenada</td></tr>
  <tr><td>Na₂O₂</td><td>Peróxido de sodio</td><td>Blanqueador</td></tr>
  <tr><td>BaO₂</td><td>Peróxido de bario</td><td>Pirotecnia</td></tr>
</table></div>
<div class="ojo"><span class="et">No confundas</span>Na₂O es óxido de sodio (O con −2). Na₂O₂ es peróxido de sodio (O con −1). BaO₂ no es «dióxido de bario»: el bario solo tiene valencia +2.</div>`
    },
    {
      t: 'Anhídridos', min: 4,
      sub: 'No metal más oxígeno: los óxidos ácidos.',
      html: `
<h3>Definición</h3>
<p>Los <strong>anhídridos</strong> u <strong>óxidos ácidos</strong> son compuestos binarios de un <strong>no metal con oxígeno</strong>. Se llaman ácidos porque con agua forman oxiácidos. En nomenclatura tradicional se usa la palabra «anhídrido»; en Stock y sistemática, «óxido».</p>
<div class="tabla"><table>
  <tr><th>Fórmula</th><th>Tradicional</th><th>Stock</th><th>Sistemática</th></tr>
  <tr><td>CO</td><td>Anhídrido carbonoso</td><td>Óxido de carbono (II)</td><td>Monóxido de carbono</td></tr>
  <tr><td>CO₂</td><td>Anhídrido carbónico</td><td>Óxido de carbono (IV)</td><td>Dióxido de carbono</td></tr>
  <tr><td>SO₂</td><td>Anhídrido sulfuroso</td><td>Óxido de azufre (IV)</td><td>Dióxido de azufre</td></tr>
  <tr><td>SO₃</td><td>Anhídrido sulfúrico</td><td>Óxido de azufre (VI)</td><td>Trióxido de azufre</td></tr>
  <tr><td>N₂O₃</td><td>Anhídrido nitroso</td><td>Óxido de nitrógeno (III)</td><td>Trióxido de dinitrógeno</td></tr>
  <tr><td>N₂O₅</td><td>Anhídrido nítrico</td><td>Óxido de nitrógeno (V)</td><td>Pentóxido de dinitrógeno</td></tr>
  <tr><td>P₂O₅</td><td>Anhídrido fosfórico</td><td>Óxido de fósforo (V)</td><td>Pentóxido de difósforo</td></tr>
</table></div>

<h3>El caso del cloro: cuatro valencias</h3>
<div class="tabla"><table>
  <tr><th>Valencia</th><th>Fórmula</th><th>Tradicional</th></tr>
  <tr><td>+1</td><td>Cl₂O</td><td>Anhídrido <b>hipo</b>clor<b>oso</b></td></tr>
  <tr><td>+3</td><td>Cl₂O₃</td><td>Anhídrido clor<b>oso</b></td></tr>
  <tr><td>+5</td><td>Cl₂O₅</td><td>Anhídrido clór<b>ico</b></td></tr>
  <tr><td>+7</td><td>Cl₂O₇</td><td>Anhídrido <b>per</b>clór<b>ico</b></td></tr>
</table></div>
<div class="clave"><span class="et">Cómo distinguirlos</span>Mira el primer elemento. Si es <b>metal</b>, es óxido básico. Si es <b>no metal</b>, es anhídrido.</div>`
    },
    {
      t: 'Hidróxidos', min: 3,
      sub: 'Metal más grupo OH: las bases.',
      html: `
<h3>Definición</h3>
<p>Los <strong>hidróxidos</strong> o <strong>bases</strong> están formados por un <strong>metal y el grupo hidroxilo (OH⁻)</strong>, que vale −1. Se obtienen al reaccionar un óxido básico con agua.</p>
<p class="formula">Óxido básico + H₂O → Hidróxido<small>CaO + H₂O → Ca(OH)₂</small></p>
<p>Fórmula general: <strong>M(OH)ₓ</strong>, donde x es la valencia del metal. Si x es mayor que 1, el OH va entre paréntesis.</p>
<div class="tabla"><table>
  <tr><th>Fórmula</th><th>Tradicional</th><th>Stock</th><th>Sistemática</th></tr>
  <tr><td>NaOH</td><td>Hidróxido de sodio</td><td>Hidróxido de sodio</td><td>Hidróxido de sodio</td></tr>
  <tr><td>Ca(OH)₂</td><td>Hidróxido de calcio</td><td>Hidróxido de calcio</td><td>Dihidróxido de calcio</td></tr>
  <tr><td>Al(OH)₃</td><td>Hidróxido de aluminio</td><td>Hidróxido de aluminio</td><td>Trihidróxido de aluminio</td></tr>
  <tr><td>Fe(OH)₂</td><td>Hidróxido ferroso</td><td>Hidróxido de hierro (II)</td><td>Dihidróxido de hierro</td></tr>
  <tr><td>Fe(OH)₃</td><td>Hidróxido férrico</td><td>Hidróxido de hierro (III)</td><td>Trihidróxido de hierro</td></tr>
  <tr><td>Cu(OH)₂</td><td>Hidróxido cúprico</td><td>Hidróxido de cobre (II)</td><td>Dihidróxido de cobre</td></tr>
</table></div>
<p>Nombres comunes: NaOH es la sosa cáustica; KOH, la potasa; Ca(OH)₂, la cal apagada; Mg(OH)₂, la leche de magnesia.</p>
<div class="clave"><span class="et">Para reconocerlos</span>Una fórmula que empieza con metal y termina en <b>OH</b> es un hidróxido. El subíndice del OH te da la valencia del metal.</div>`
    },
    {
      t: 'Oxiácidos', min: 5,
      sub: 'Hidrógeno, no metal y oxígeno.',
      html: `
<h3>Definición</h3>
<p>Los <strong>oxiácidos</strong> son ácidos ternarios con <strong>hidrógeno, un no metal y oxígeno</strong>, siempre en ese orden: HₐXOᵦ. Se forman al reaccionar un anhídrido con agua, y conservan el nombre del anhídrido cambiando la palabra por «ácido».</p>
<p class="formula">Anhídrido + H₂O → Oxiácido<small>SO₃ + H₂O → H₂SO₄ · anhídrido sulfúrico → ácido sulfúrico</small></p>
<div class="tabla"><table>
  <tr><th>Fórmula</th><th>Nombre tradicional</th><th>Valencia del no metal</th></tr>
  <tr><td>H₂CO₃</td><td>Ácido carbónico</td><td>C +4</td></tr>
  <tr><td>HNO₂</td><td>Ácido nitroso</td><td>N +3</td></tr>
  <tr><td>HNO₃</td><td>Ácido nítrico</td><td>N +5</td></tr>
  <tr><td>H₂SO₃</td><td>Ácido sulfuroso</td><td>S +4</td></tr>
  <tr><td>H₂SO₄</td><td>Ácido sulfúrico</td><td>S +6</td></tr>
  <tr><td>H₃PO₄</td><td>Ácido fosfórico</td><td>P +5</td></tr>
  <tr><td>HClO</td><td>Ácido hipocloroso</td><td>Cl +1</td></tr>
  <tr><td>HClO₂</td><td>Ácido cloroso</td><td>Cl +3</td></tr>
  <tr><td>HClO₃</td><td>Ácido clórico</td><td>Cl +5</td></tr>
  <tr><td>HClO₄</td><td>Ácido perclórico</td><td>Cl +7</td></tr>
</table></div>

<h3>Cómo nombrar uno que no conoces</h3>
<ol>
  <li>Calcula el número de oxidación del no metal.</li>
  <li>Ubícalo entre las valencias de ese elemento.</li>
  <li>Asigna el prefijo y sufijo: hipo-oso, -oso, -ico, per-ico.</li>
</ol>
<div class="ejemplo"><span class="et">Ejemplo</span>HBrO₃: (+1) + x + 3(−2) = 0 → x = +5. El bromo tiene +1, +3, +5, +7; el +5 es la tercera → <b>ácido brómico</b>.</div>
<p>En los otros sistemas, H₂SO₄ es «tetraoxosulfato (VI) de hidrógeno». En la práctica casi siempre se usa el nombre tradicional.</p>`
    },
    {
      t: 'Oxisales', min: 5,
      sub: 'Metal, no metal y oxígeno: las sales de los oxiácidos.',
      html: `
<h3>Definición</h3>
<p>Las <strong>oxisales</strong> resultan de sustituir los hidrógenos de un oxiácido por un <strong>metal</strong>. Se forman en la neutralización de un oxiácido con un hidróxido.</p>
<p class="formula">Oxiácido + Hidróxido → Oxisal + Agua<small>H₂SO₄ + 2 NaOH → Na₂SO₄ + 2 H₂O</small></p>

<h3>La regla de oro</h3>
<p>El anión toma el nombre del ácido cambiando la terminación:</p>
<figure class="fig">
  <div class="flujo"><div class="nodo">ácido …<b>oso</b></div><div class="fl"></div><div class="nodo a">…<b>ito</b></div></div>
  <div class="flujo"><div class="nodo">ácido …<b>ico</b></div><div class="fl"></div><div class="nodo a">…<b>ato</b></div></div>
  <div class="pie-fig">Los prefijos hipo- y per- se conservan. Truco: «el <b>oso</b> toca el p<b>ito</b>, el p<b>ico</b> del p<b>ato</b>».</div>
</figure>
<div class="tabla"><table>
  <tr><th>Ácido</th><th>Anión</th><th>Nombre del anión</th></tr>
  <tr><td>H₂CO₃ carbónico</td><td>CO₃²⁻</td><td>Carbonato</td></tr>
  <tr><td>HNO₂ nitroso</td><td>NO₂⁻</td><td>Nitrito</td></tr>
  <tr><td>HNO₃ nítrico</td><td>NO₃⁻</td><td>Nitrato</td></tr>
  <tr><td>H₂SO₃ sulfuroso</td><td>SO₃²⁻</td><td>Sulfito</td></tr>
  <tr><td>H₂SO₄ sulfúrico</td><td>SO₄²⁻</td><td>Sulfato</td></tr>
  <tr><td>H₃PO₄ fosfórico</td><td>PO₄³⁻</td><td>Fosfato</td></tr>
  <tr><td>HClO hipocloroso</td><td>ClO⁻</td><td>Hipoclorito</td></tr>
  <tr><td>HClO₄ perclórico</td><td>ClO₄⁻</td><td>Perclorato</td></tr>
</table></div>

<h3>Nombrar la sal</h3>
<p>Nombre del anión + «de» + metal, con su terminación o número romano si tiene varias valencias.</p>
<div class="tabla"><table>
  <tr><th>Fórmula</th><th>Tradicional</th><th>Stock</th></tr>
  <tr><td>Na₂SO₄</td><td>Sulfato de sodio</td><td>Sulfato de sodio</td></tr>
  <tr><td>CaCO₃</td><td>Carbonato de calcio</td><td>Carbonato de calcio</td></tr>
  <tr><td>KNO₃</td><td>Nitrato de potasio</td><td>Nitrato de potasio</td></tr>
  <tr><td>NaClO</td><td>Hipoclorito de sodio</td><td>Hipoclorito de sodio</td></tr>
  <tr><td>FeSO₄</td><td>Sulfato ferroso</td><td>Sulfato de hierro (II)</td></tr>
  <tr><td>Fe₂(SO₄)₃</td><td>Sulfato férrico</td><td>Sulfato de hierro (III)</td></tr>
  <tr><td>Cu(NO₃)₂</td><td>Nitrato cúprico</td><td>Nitrato de cobre (II)</td></tr>
</table></div>
<p><strong>Sales ácidas:</strong> conservan algún hidrógeno. NaHCO₃ es el bicarbonato de sodio (o hidrogenocarbonato de sodio).</p>`
    },
    {
      t: 'Hidrácidos', min: 3,
      sub: 'Hidrógeno más no metal, sin oxígeno.',
      html: `
<h3>Definición</h3>
<p>Los <strong>hidrácidos</strong> son ácidos binarios: <strong>hidrógeno + un no metal</strong> de los grupos 16 o 17, <strong>sin oxígeno</strong>, disueltos en agua. El no metal actúa con su valencia negativa.</p>
<p class="formula">Ácido + raíz del no metal + -hídrico</p>
<div class="tabla"><table>
  <tr><th>Fórmula</th><th>En disolución acuosa</th><th>Como gas puro</th></tr>
  <tr><td>HF</td><td>Ácido fluorhídrico</td><td>Fluoruro de hidrógeno</td></tr>
  <tr><td>HCl</td><td>Ácido clorhídrico</td><td>Cloruro de hidrógeno</td></tr>
  <tr><td>HBr</td><td>Ácido bromhídrico</td><td>Bromuro de hidrógeno</td></tr>
  <tr><td>HI</td><td>Ácido yodhídrico</td><td>Yoduro de hidrógeno</td></tr>
  <tr><td>H₂S</td><td>Ácido sulfhídrico</td><td>Sulfuro de hidrógeno</td></tr>
</table></div>
<p>El HCl es el ácido del jugo gástrico y, en su forma comercial, el ácido muriático.</p>
<div class="clave"><span class="et">Hidrácido u oxiácido</span>Los dos empiezan con H. Si la fórmula <b>tiene oxígeno</b>, es oxiácido (-oso, -ico). Si <b>no lo tiene</b>, es hidrácido (-hídrico).</div>`
    },
    {
      t: 'Sales haloideas', min: 3,
      sub: 'Metal más no metal: las sales binarias.',
      html: `
<h3>Definición</h3>
<p>Las <strong>sales haloideas</strong> o binarias están formadas por un <strong>metal y un no metal</strong>, sin oxígeno. Resultan de neutralizar un hidrácido con un hidróxido.</p>
<p class="formula">Hidrácido + Hidróxido → Sal haloidea + Agua<small>HCl + NaOH → NaCl + H₂O</small></p>
<p>Se nombran con la raíz del no metal terminada en <strong>-uro</strong>, seguida del metal: <em>-hídrico</em> se convierte en <em>-uro</em>.</p>
<div class="tabla"><table>
  <tr><th>Fórmula</th><th>Tradicional</th><th>Stock</th><th>Sistemática</th></tr>
  <tr><td>NaCl</td><td>Cloruro de sodio</td><td>Cloruro de sodio</td><td>Monocloruro de sodio</td></tr>
  <tr><td>CaF₂</td><td>Fluoruro de calcio</td><td>Fluoruro de calcio</td><td>Difluoruro de calcio</td></tr>
  <tr><td>K₂S</td><td>Sulfuro de potasio</td><td>Sulfuro de potasio</td><td>Monosulfuro de dipotasio</td></tr>
  <tr><td>AgBr</td><td>Bromuro de plata</td><td>Bromuro de plata</td><td>Monobromuro de plata</td></tr>
  <tr><td>FeCl₂</td><td>Cloruro ferroso</td><td>Cloruro de hierro (II)</td><td>Dicloruro de hierro</td></tr>
  <tr><td>FeCl₃</td><td>Cloruro férrico</td><td>Cloruro de hierro (III)</td><td>Tricloruro de hierro</td></tr>
</table></div>
<div class="clave"><span class="et">Resumen de terminaciones</span>-hídrico → <b>-uro</b> · -oso → <b>-ito</b> · -ico → <b>-ato</b>. Si el nombre termina en -uro, la sal no tiene oxígeno.</div>`
    },
    {
      t: 'Hidruros e hidratos', min: 4,
      sub: 'Compuestos con hidrógeno y sales con agua atrapada.',
      html: `
<h3>Hidruros metálicos</h3>
<p>Son compuestos de un <strong>metal con hidrógeno</strong>. Aquí el hidrógeno es la parte negativa y vale <strong>−1</strong>. Se nombran «hidruro de…».</p>
<div class="tabla"><table>
  <tr><th>Fórmula</th><th>Tradicional</th><th>Stock</th></tr>
  <tr><td>NaH</td><td>Hidruro de sodio</td><td>Hidruro de sodio</td></tr>
  <tr><td>CaH₂</td><td>Hidruro de calcio</td><td>Hidruro de calcio</td></tr>
  <tr><td>FeH₃</td><td>Hidruro férrico</td><td>Hidruro de hierro (III)</td></tr>
</table></div>

<h3>Hidruros no metálicos</h3>
<p>El hidrógeno se une a no metales de los grupos 13 a 15. Tienen nombres especiales que hay que memorizar:</p>
<div class="tabla"><table>
  <tr><th>Fórmula</th><th>Nombre</th></tr>
  <tr><td>NH₃</td><td>Amoniaco</td></tr>
  <tr><td>CH₄</td><td>Metano</td></tr>
  <tr><td>PH₃</td><td>Fosfina</td></tr>
  <tr><td>SiH₄</td><td>Silano</td></tr>
  <tr><td>BH₃</td><td>Borano</td></tr>
</table></div>
<p>Los hidruros de los grupos 16 y 17 (H₂S, HCl) son los hidrácidos del tema anterior.</p>

<h3>Hidratos</h3>
<p>Un <strong>hidrato</strong> es una sal que tiene <strong>moléculas de agua atrapadas</strong> en su cristal (agua de cristalización), en proporción fija. Se escribe con un punto y el número de moléculas de agua, y se nombra añadiendo el prefijo + «hidratado».</p>
<div class="tabla"><table>
  <tr><th>Fórmula</th><th>Nombre</th></tr>
  <tr><td>CuSO₄·5H₂O</td><td>Sulfato de cobre (II) pentahidratado</td></tr>
  <tr><td>CaSO₄·2H₂O</td><td>Sulfato de calcio dihidratado (yeso)</td></tr>
  <tr><td>Na₂CO₃·10H₂O</td><td>Carbonato de sodio decahidratado</td></tr>
  <tr><td>MgSO₄·7H₂O</td><td>Sulfato de magnesio heptahidratado</td></tr>
</table></div>
<p>Al calentarlo, el hidrato pierde el agua y queda la sal <strong>anhidra</strong>. El CuSO₄·5H₂O es azul; anhidro, es blanco.</p>

<h3>Tabla resumen de toda la unidad</h3>
<div class="tabla"><table>
  <tr><th>Familia</th><th>Formada por</th><th>Ejemplo</th></tr>
  <tr><td>Óxido básico</td><td>Metal + O</td><td>CaO</td></tr>
  <tr><td>Peróxido</td><td>Metal o H + O₂²⁻</td><td>H₂O₂</td></tr>
  <tr><td>Anhídrido</td><td>No metal + O</td><td>SO₃</td></tr>
  <tr><td>Hidróxido</td><td>Metal + OH</td><td>NaOH</td></tr>
  <tr><td>Oxiácido</td><td>H + no metal + O</td><td>H₂SO₄</td></tr>
  <tr><td>Oxisal</td><td>Metal + no metal + O</td><td>Na₂SO₄</td></tr>
  <tr><td>Hidrácido</td><td>H + no metal</td><td>HCl</td></tr>
  <tr><td>Sal haloidea</td><td>Metal + no metal</td><td>NaCl</td></tr>
  <tr><td>Hidruro</td><td>Metal + H</td><td>NaH</td></tr>
</table></div>`
    }
  ],
  tarjetas: [
    ['Fe₂O₃ en los tres sistemas', '<b>Tradicional:</b> óxido férrico. <b>Stock:</b> óxido de hierro (III). <b>Sistemática:</b> trióxido de dihierro.'],
    ['Sufijos tradicionales para un elemento con 2 valencias', '<b>-oso</b> para la menor, <b>-ico</b> para la mayor.'],
    ['Prefijos y sufijos para 4 valencias', 'hipo- -oso, -oso, -ico, per- -ico (de menor a mayor).'],
    ['¿Qué es un óxido básico?', 'Metal + oxígeno. Con agua forma un <b>hidróxido</b>.'],
    ['¿Qué es un anhídrido?', 'No metal + oxígeno (óxido ácido). Con agua forma un <b>oxiácido</b>.'],
    ['¿Cuánto vale el oxígeno en un peróxido?', '<b>−1</b>. El grupo es O₂²⁻ y su subíndice no se simplifica. Ejemplo: H₂O₂.'],
    ['Nombre de Ca(OH)₂', '<b>Hidróxido de calcio</b> (cal apagada).'],
    ['Nombre de H₂SO₄ y de H₂SO₃', 'Ácido <b>sulfúrico</b> (S +6) y ácido <b>sulfuroso</b> (S +4).'],
    ['Nombre de HClO₄', 'Ácido <b>perclórico</b> (cloro con +7).'],
    ['¿Cómo cambian las terminaciones del ácido a la sal?', '-oso → <b>-ito</b> · -ico → <b>-ato</b> · -hídrico → <b>-uro</b>'],
    ['Fórmula del sulfato de sodio', '<b>Na₂SO₄</b>'],
    ['Nombre de CaCO₃', '<b>Carbonato de calcio</b>.'],
    ['Nombre de HCl en disolución acuosa', '<b>Ácido clorhídrico</b>. Como gas es cloruro de hidrógeno.'],
    ['¿Qué es una sal haloidea? Da un ejemplo.', 'Metal + no metal, sin oxígeno, terminada en -uro. <b>NaCl</b>, cloruro de sodio.'],
    ['Nombre de FeCl₃ en Stock', '<b>Cloruro de hierro (III)</b>.'],
    ['Número de oxidación del H en un hidruro metálico', '<b>−1</b>. Ejemplo: NaH, hidruro de sodio.'],
    ['Nombres de NH₃, CH₄ y PH₃', 'Amoniaco, metano y fosfina.'],
    ['¿Qué es un hidrato? Nombra CuSO₄·5H₂O', 'Sal con agua de cristalización. <b>Sulfato de cobre (II) pentahidratado</b>.'],
    ['¿Cómo distinguir un hidrácido de un oxiácido?', 'Ambos empiezan con H. El <b>oxiácido</b> tiene oxígeno; el <b>hidrácido</b> no.']
  ],
  preguntas: [
    ['El nombre Stock de Fe₂O₃ es:', ['Óxido de hierro (III)', 'Óxido de hierro (II)', 'Trióxido de dihierro', 'Óxido ferroso'], 'El hierro actúa con +3: 2(+3) + 3(−2) = 0.'],
    ['¿Cuál es el número de oxidación del azufre en H₂SO₄?', ['+6', '+4', '−2', '+2'], '2(+1) + x + 4(−2) = 0 → x = +6.'],
    ['El compuesto CO₂ se clasifica como:', ['Anhídrido', 'Óxido básico', 'Peróxido', 'Hidróxido'], 'Es un no metal (carbono) unido a oxígeno: óxido ácido o anhídrido.'],
    ['¿Cuál de los siguientes es un peróxido?', ['H₂O₂', 'H₂O', 'Na₂O', 'CO₂'], 'En H₂O₂ el oxígeno tiene número de oxidación −1.'],
    ['El nombre tradicional de Cu₂O es:', ['Óxido cuproso', 'Óxido cúprico', 'Óxido de cobre (II)', 'Peróxido de cobre'], 'El cobre actúa con +1, su valencia menor: terminación -oso.'],
    ['La fórmula del hidróxido de aluminio es:', ['Al(OH)₃', 'AlOH', 'Al₃OH', 'Al₂O₃'], 'El aluminio tiene valencia +3 y necesita tres grupos OH⁻.'],
    ['Al reaccionar un anhídrido con agua se forma un:', ['Oxiácido', 'Hidróxido', 'Hidrácido', 'Hidruro'], 'Ejemplo: SO₃ + H₂O → H₂SO₄.'],
    ['El nombre de HNO₃ es:', ['Ácido nítrico', 'Ácido nitroso', 'Ácido nitrhídrico', 'Nitrato de hidrógeno (I)'], 'El nitrógeno actúa con +5, su valencia mayor: -ico.'],
    ['El nombre de HClO es:', ['Ácido hipocloroso', 'Ácido cloroso', 'Ácido clórico', 'Ácido clorhídrico'], 'El cloro actúa con +1, la menor de cuatro valencias: hipo- -oso.'],
    ['La sal que proviene del ácido sulfúrico se llama:', ['Sulfato', 'Sulfito', 'Sulfuro', 'Persulfato'], 'La terminación -ico del ácido pasa a -ato en la sal.'],
    ['La fórmula del nitrato de potasio es:', ['KNO₃', 'KNO₂', 'K₃N', 'K₂NO₃'], 'El nitrato es NO₃⁻ y el potasio K⁺.'],
    ['El nombre de NaClO, el componente del blanqueador, es:', ['Hipoclorito de sodio', 'Clorato de sodio', 'Cloruro de sodio', 'Perclorato de sodio'], 'Viene del ácido hipocloroso: -oso → -ito y se conserva el prefijo.'],
    ['¿Cuál de los siguientes es un hidrácido?', ['HCl', 'HNO₃', 'NaOH', 'NaH'], 'Hidrógeno + no metal, sin oxígeno.'],
    ['El nombre de H₂S en disolución acuosa es:', ['Ácido sulfhídrico', 'Ácido sulfúrico', 'Ácido sulfuroso', 'Hidruro de azufre'], 'Los hidrácidos terminan en -hídrico.'],
    ['El compuesto CaF₂ se llama:', ['Fluoruro de calcio', 'Fluorato de calcio', 'Fluorito de calcio', 'Hidruro de calcio'], 'Sal haloidea: metal + no metal, terminación -uro.'],
    ['En el hidruro de sodio (NaH), el hidrógeno tiene número de oxidación:', ['−1', '+1', '0', '−2'], 'En los hidruros metálicos el hidrógeno es la parte negativa.'],
    ['El nombre de CuSO₄·5H₂O es:', ['Sulfato de cobre (II) pentahidratado', 'Sulfito de cobre (II) pentahidratado', 'Sulfato de cobre (I) hidratado', 'Sulfuro de cobre pentahidratado'], 'SO₄²⁻ es sulfato; el cobre tiene +2; cinco moléculas de agua → penta.'],
    ['El nombre sistemático (IUPAC) de N₂O₅ es:', ['Pentóxido de dinitrógeno', 'Óxido de nitrógeno (II)', 'Dióxido de pentanitrógeno', 'Anhídrido nitroso'], 'Los prefijos indican el número de átomos: di- para el nitrógeno y penta- para el oxígeno.'],
    ['La fórmula del óxido de aluminio es:', ['Al₂O₃', 'AlO', 'Al₃O₂', 'AlO₃'], 'Se cruzan las valencias: Al³⁺ y O²⁻ dan Al₂O₃.'],
    ['El nombre tradicional de SO₃ es:', ['Anhídrido sulfúrico', 'Anhídrido sulfuroso', 'Óxido de azufre (IV)', 'Sulfato'], 'El azufre actúa con +6, su valencia mayor: terminación -ico.'],
    ['La fórmula del ácido fosfórico es:', ['H₃PO₄', 'H₃PO₃', 'H₂PO₄', 'HPO₂'], 'El fósforo actúa con +5: 3(+1) + 5 + 4(−2) = 0.'],
    ['El nombre de NaHCO₃ es:', ['Bicarbonato de sodio', 'Carbonato de sodio', 'Carburo de sodio', 'Hidróxido de sodio'], 'Es una sal ácida: conserva un hidrógeno del ácido carbónico.'],
    // --- Compuestos tomados de la guía de nomenclatura del profesor ---
    ['El nombre de CsHCO₃ es:', ['Bicarbonato de cesio', 'Carbonato de cesio', 'Carburo de cesio', 'Hidróxido de cesio'], 'Sal ácida del ácido carbónico: hidrogenocarbonato o bicarbonato.'],
    ['El nombre Stock de Cu(BrO)₂ es:', ['Hipobromito de cobre (II)', 'Bromato de cobre (II)', 'Bromuro de cobre (II)', 'Hipobromito de cobre (I)'], 'BrO⁻ es hipobromito (bromo +1) y hay dos, así que el cobre es +2.'],
    ['El nombre de CaCr₂O₇ es:', ['Dicromato de calcio', 'Cromato de calcio', 'Cromito de calcio', 'Peróxido de calcio y cromo'], 'El anión Cr₂O₇²⁻ es el dicromato.'],
    ['El nombre de Sr(OH)₂ es:', ['Hidróxido de estroncio', 'Óxido de estroncio', 'Hidruro de estroncio', 'Peróxido de estroncio'], 'Metal + grupo OH.'],
    ['El nombre tradicional de FeBr₃ es:', ['Bromuro férrico', 'Bromuro ferroso', 'Bromato férrico', 'Bromito ferroso'], 'El hierro actúa con +3, su valencia mayor: -ico. Sin oxígeno: -uro.'],
    ['El nombre de H₃PO₃ es:', ['Ácido fosforoso', 'Ácido fosfórico', 'Ácido fosfhídrico', 'Ácido hipofosforoso'], 'El fósforo actúa con +3: 3(+1) + 3 + 3(−2) = 0.'],
    ['El nombre de CaO₂ es:', ['Peróxido de calcio', 'Óxido de calcio', 'Dióxido de calcio', 'Hidróxido de calcio'], 'El calcio solo tiene valencia +2, así que el oxígeno vale −1: es un peróxido.'],
    ['El nombre tradicional de Cl₂O₅ es:', ['Anhídrido clórico', 'Anhídrido cloroso', 'Anhídrido perclórico', 'Anhídrido hipocloroso'], 'El cloro actúa con +5, la tercera de sus cuatro valencias: -ico.'],
    ['El nombre Stock de Pb(SO₄)₂ es:', ['Sulfato de plomo (IV)', 'Sulfato de plomo (II)', 'Sulfito de plomo (IV)', 'Sulfuro de plomo (IV)'], 'Dos sulfatos (2−) suman −4, así que el plomo es +4.'],
    ['El nombre de CaCl₂·2H₂O es:', ['Cloruro de calcio dihidratado', 'Clorato de calcio dihidratado', 'Hipoclorito de calcio hidratado', 'Cloruro de calcio dibásico'], 'Sal haloidea con dos moléculas de agua de cristalización.'],
    ['El nombre de LiClO₄ es:', ['Perclorato de litio', 'Clorato de litio', 'Clorito de litio', 'Hipoclorito de litio'], 'ClO₄⁻ viene del ácido perclórico (cloro +7).'],
    ['El nombre de H₂Te en disolución acuosa es:', ['Ácido telurhídrico', 'Ácido telúrico', 'Ácido teluroso', 'Hidruro de telurio'], 'Hidrácido: hidrógeno + no metal sin oxígeno, terminación -hídrico.'],
    ['La fórmula del cloruro de oro (III) es:', ['AuCl₃', 'Au₃Cl', 'AuClO₃', 'AuCl'], 'Au³⁺ y Cl⁻: se cruzan las valencias.'],
    ['La fórmula del nitrito de plata es:', ['AgNO₂', 'AgNO₃', 'Ag₃N', 'Ag₂NO₂'], 'El nitrito es NO₂⁻ y la plata es +1.'],
    ['La fórmula del sulfato áurico es:', ['Au₂(SO₄)₃', 'AuSO₄', 'Au₂SO₄', 'Au₃(SO₄)₂'], 'Áurico es oro +3; con SO₄²⁻ se cruzan las valencias.'],
    ['El compuesto llamado trioxonitrato (V) de hidrógeno es:', ['HNO₃', 'HNO₂', 'NH₃', 'H₃NO₃'], 'Tres oxígenos, nitrógeno +5 e hidrógeno: el ácido nítrico.'],
    ['La fórmula del hidróxido de amonio es:', ['NH₄OH', 'NH₃OH', '(NH₄)₂O', 'NH₂OH'], 'El ion amonio NH₄⁺ se une a un OH⁻.'],
    ['La fórmula del permanganato de potasio es:', ['KMnO₄', 'K₂MnO₄', 'KMnO₂', 'K₂Mn₂O₇'], 'El permanganato es MnO₄⁻, con manganeso +7.'],
    ['El tetraoxosulfato (VI) de magnesio es:', ['MgSO₄', 'MgSO₃', 'MgS', 'Mg(SO₄)₂'], 'Cuatro oxígenos y azufre +6: sulfato. Con Mg²⁺ queda MgSO₄.'],
    ['La fórmula del pentacloruro de fósforo es:', ['PCl₅', 'P₅Cl', 'PCl₃', 'P₂Cl₅'], 'El prefijo penta- indica cinco átomos de cloro.'],
    ['La fórmula del sulfato de amonio es:', ['(NH₄)₂SO₄', 'NH₄SO₄', '(NH₄)₂SO₃', 'NH₄(SO₄)₂'], 'Se necesitan dos NH₄⁺ para un SO₄²⁻.'],
    ['La estibina tiene por fórmula:', ['SbH₃', 'SnH₄', 'SiH₄', 'BiH₃'], 'Es el hidruro del antimonio (Sb), análogo al amoniaco y la fosfina.'],
    ['La fórmula del peróxido de litio es:', ['Li₂O₂', 'Li₂O', 'LiO₂', 'LiO'], 'Dos Li⁺ con el grupo peróxido O₂²⁻; el subíndice no se simplifica.']
  ]
});
