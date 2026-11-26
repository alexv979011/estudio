/* Matemáticas I · Unidad 1 · Historia de la matemática */
window.UNIDADES = window.UNIDADES || [];
window.UNIDADES.push({
  materia: 'mate',
  id: 1,
  titulo: 'Historia de la matemática',
  corto: 'Historia',
  color: '#0a84ff',
  resultado: 'ubicar el origen de la aritmética y el álgebra, a sus autores principales y las fuentes que lo documentan.',
  temas: [
    {
      t: 'Historia de la aritmética y el álgebra', min: 6,
      sub: 'De contar con marcas a calcular con letras.',
      html: `
<h3>Aritmética y álgebra</h3>
<p>La <strong>aritmética</strong> (del griego <em>arithmos</em>, número) estudia los números y sus operaciones: suma, resta, multiplicación, división, potencias y raíces. El <strong>álgebra</strong> generaliza la aritmética: usa letras para representar cantidades desconocidas o cualesquiera, y así puede expresar reglas que valen para todos los números.</p>
<div class="ejemplo"><span class="et">La diferencia en un ejemplo</span>Aritmética: 3 + 5 = 5 + 3. Álgebra: a + b = b + a, que vale para cualquier par de números.</div>

<h3>Las civilizaciones antiguas</h3>
<ul class="linea-t">
  <li><time>Babilonia · ≈ 1800 a. C.</time>Sistema <b>sexagesimal</b> (base 60), del que heredamos los 60 minutos y los 360°. En tablillas de arcilla resolvían ecuaciones de primer y segundo grado.</li>
  <li><time>Egipto · ≈ 1650 a. C.</time>Sistema decimal no posicional. El <b>papiro de Rhind</b>, copiado por el escriba Ahmes, reúne 87 problemas; a la incógnita la llamaban «aha» (montón).</li>
  <li><time>Grecia · siglos VI a III a. C.</time>Pitágoras, y <b>Euclides</b> con <em>Los Elementos</em>, convierten la matemática en ciencia demostrativa. Su álgebra era geométrica.</li>
  <li><time>India · siglo VII</time><b>Brahmagupta</b> da reglas para operar con el cero y los números negativos. De la India procede el sistema decimal posicional.</li>
  <li><time>Mundo árabe · siglo IX</time><b>Al-Juarismi</b> escribe el tratado que da nombre al álgebra y difunde los números indoarábigos.</li>
  <li><time>Europa · siglos XIII a XVII</time>Fibonacci, Cardano, Viète y Descartes llevan el álgebra a su forma simbólica actual.</li>
</ul>

<h3>Las tres etapas del álgebra</h3>
<div class="tabla"><table>
  <tr><th>Etapa</th><th>Cómo se escribía</th><th>Representantes</th></tr>
  <tr><td><b>Retórica</b></td><td>Todo con palabras, sin símbolos</td><td>Babilonios, egipcios, Al-Juarismi</td></tr>
  <tr><td><b>Sincopada</b></td><td>Palabras con algunas abreviaturas</td><td>Diofanto</td></tr>
  <tr><td><b>Simbólica</b></td><td>Letras y signos, como hoy</td><td>Viète, Descartes</td></tr>
</table></div>
<div class="clave"><span class="et">Para el examen</span>Retórica = palabras. Sincopada = abreviaturas (Diofanto). Simbólica = letras y signos (Viète y Descartes).</div>`
    },
    {
      t: 'Autores y fundadores del álgebra', min: 5,
      sub: 'Los nombres que hay que asociar con una aportación.',
      html: `
<h3>Los fundadores</h3>
<div class="tabla"><table>
  <tr><th>Autor</th><th>Época</th><th>Aportación</th></tr>
  <tr><td><b>Euclides</b></td><td>≈ 300 a. C.</td><td><em>Los Elementos</em>: geometría y aritmética demostradas a partir de axiomas</td></tr>
  <tr><td><b>Diofanto de Alejandría</b></td><td>Siglo III</td><td><em>Arithmetica</em>: primeras abreviaturas para la incógnita. Se le llama «padre del álgebra»</td></tr>
  <tr><td><b>Brahmagupta</b></td><td>Siglo VII</td><td>Reglas del cero y de los números negativos</td></tr>
  <tr><td><b>Al-Juarismi</b></td><td>≈ 820</td><td><em>Al-jabr wa'l-muqabala</em>: de «al-jabr» viene la palabra <b>álgebra</b>; de su nombre, <b>algoritmo</b></td></tr>
  <tr><td><b>Fibonacci</b></td><td>1202</td><td><em>Liber Abaci</em>: introduce los números indoarábigos en Europa</td></tr>
  <tr><td><b>Cardano y Tartaglia</b></td><td>1545</td><td><em>Ars Magna</em>: solución de las ecuaciones de tercer y cuarto grado</td></tr>
  <tr><td><b>François Viète</b></td><td>1591</td><td>Usa letras para incógnitas y coeficientes: nace el álgebra simbólica</td></tr>
  <tr><td><b>René Descartes</b></td><td>1637</td><td>Notación moderna: x, y, z para incógnitas y exponentes como x²</td></tr>
  <tr><td><b>Gauss</b></td><td>1799</td><td>Teorema fundamental del álgebra</td></tr>
</table></div>

<h3>Qué significa «al-jabr»</h3>
<p>«Al-jabr» quiere decir <em>restauración</em>: pasar un término al otro lado de la ecuación cambiándole el signo. «Al-muqabala» es <em>reducción</em>: simplificar términos semejantes. Son las dos operaciones con las que hoy sigues resolviendo ecuaciones.</p>
<div class="clave"><span class="et">Dos «padres» distintos</span>A <b>Diofanto</b> se le llama padre del álgebra por ser el primero en usar símbolos. A <b>Al-Juarismi</b> se le debe el nombre y el método sistemático. Si te preguntan por el origen de la <em>palabra</em>, es Al-Juarismi.</div>`
    },
    {
      t: 'Fuentes de la historia en aritmética y álgebra', min: 3,
      sub: 'Cómo sabemos lo que sabemos.',
      html: `
<h3>Fuentes primarias y secundarias</h3>
<p>Una <strong>fuente primaria</strong> es un documento u objeto de la época que se estudia: lo escribió alguien que vivió entonces. Una <strong>fuente secundaria</strong> es un trabajo posterior que analiza o resume las fuentes primarias, como un libro de texto o una enciclopedia.</p>

<h3>Las principales fuentes primarias</h3>
<div class="tabla"><table>
  <tr><th>Fuente</th><th>Civilización</th><th>Contenido</th></tr>
  <tr><td>Tablilla Plimpton 322</td><td>Babilonia</td><td>Tabla de números relacionados con el teorema de Pitágoras</td></tr>
  <tr><td>Papiro de Rhind (o de Ahmes)</td><td>Egipto</td><td>87 problemas de aritmética, fracciones y geometría</td></tr>
  <tr><td>Papiro de Moscú</td><td>Egipto</td><td>25 problemas, entre ellos el volumen de una pirámide truncada</td></tr>
  <tr><td><em>Los Elementos</em></td><td>Grecia</td><td>13 libros de geometría y teoría de números</td></tr>
  <tr><td><em>Arithmetica</em></td><td>Grecia (Alejandría)</td><td>Problemas resueltos con ecuaciones</td></tr>
  <tr><td><em>Al-jabr wa'l-muqabala</em></td><td>Mundo árabe</td><td>Método para resolver ecuaciones de primer y segundo grado</td></tr>
</table></div>
<div class="clave"><span class="et">Cómo distinguirlas</span>Si el documento es de la época (papiro, tablilla, tratado original), es primaria. Si habla <em>sobre</em> esa época desde después, es secundaria.</div>`
    }
  ],
  tarjetas: [
    ['¿Qué estudia la aritmética?', 'Los <b>números y sus operaciones</b>.'],
    ['¿Qué hace el álgebra que no hace la aritmética?', 'Usa <b>letras</b> para representar cantidades y así generaliza las reglas a todos los números.'],
    ['¿De dónde viene la palabra «álgebra»?', 'De <b>al-jabr</b>, en el título del tratado de <b>Al-Juarismi</b> (≈ 820).'],
    ['¿A quién se llama «padre del álgebra»?', 'A <b>Diofanto de Alejandría</b>, autor de <em>Arithmetica</em>.'],
    ['Sistema de numeración de los babilonios', '<b>Sexagesimal</b>, de base 60.'],
    ['¿Qué es el papiro de Rhind?', 'Un documento <b>egipcio</b> (≈ 1650 a. C.) con 87 problemas, copiado por el escriba Ahmes.'],
    ['Las tres etapas del álgebra', '<b>Retórica</b> (palabras), <b>sincopada</b> (abreviaturas) y <b>simbólica</b> (letras y signos).'],
    ['Aportación de Viète', 'Usar <b>letras</b> para incógnitas y coeficientes: el álgebra simbólica.'],
    ['Aportación de Descartes al álgebra', 'La <b>notación moderna</b>: x, y, z para las incógnitas y los exponentes.'],
    ['¿Quién escribió <em>Liber Abaci</em> y qué logró?', '<b>Fibonacci</b> (1202). Difundió los números indoarábigos en Europa.'],
    ['Aportación de Brahmagupta', 'Reglas para operar con el <b>cero</b> y los <b>números negativos</b>.'],
    ['Fuente primaria vs. secundaria', '<b>Primaria:</b> documento de la época. <b>Secundaria:</b> estudio posterior sobre esa época.']
  ],
  preguntas: [
    ['La palabra «álgebra» proviene del título de una obra de:', ['Al-Juarismi', 'Diofanto', 'Euclides', 'Descartes'], 'De «al-jabr», en el tratado Al-jabr wa\'l-muqabala.'],
    ['Se le considera «padre del álgebra» por su obra Arithmetica:', ['Diofanto', 'Pitágoras', 'Fibonacci', 'Gauss'], 'Diofanto de Alejandría fue el primero en usar abreviaturas para la incógnita.'],
    ['El papiro de Rhind pertenece a la civilización:', ['Egipcia', 'Babilónica', 'Griega', 'Hindú'], 'Fue copiado por el escriba Ahmes hacia 1650 a. C.'],
    ['El sistema de numeración de los babilonios era:', ['Sexagesimal', 'Decimal', 'Binario', 'Vigesimal'], 'Usaban la base 60; de ahí vienen los 60 minutos de una hora.'],
    ['Introdujo el uso de letras para incógnitas y coeficientes, dando origen al álgebra simbólica:', ['Viète', 'Euclides', 'Brahmagupta', 'Ahmes'], 'François Viète lo hizo en 1591.'],
    ['El autor de Liber Abaci, que difundió los números indoarábigos en Europa, fue:', ['Fibonacci', 'Cardano', 'Descartes', 'Tartaglia'], 'Leonardo de Pisa, llamado Fibonacci, lo publicó en 1202.'],
    ['La etapa del álgebra en la que todo se expresaba con palabras se llama:', ['Retórica', 'Sincopada', 'Simbólica', 'Geométrica'], 'No se usaba ningún símbolo ni abreviatura.'],
    ['El matemático hindú que dio reglas para operar con el cero y los negativos fue:', ['Brahmagupta', 'Diofanto', 'Tartaglia', 'Arquímedes'], 'Lo hizo en el siglo VII.'],
    ['La aritmética estudia:', ['Los números y sus operaciones', 'Las figuras y sus medidas', 'La generalización con letras', 'El azar y la probabilidad'], 'Su nombre viene de arithmos, número.'],
    ['¿Cuál de las siguientes es una fuente primaria de la historia de las matemáticas?', ['El papiro de Rhind', 'Un libro de texto actual', 'Una enciclopedia', 'Un documental'], 'Es un documento escrito en la época que se estudia.'],
    ['La notación moderna con x, y, z para las incógnitas se debe a:', ['Descartes', 'Fibonacci', 'Al-Juarismi', 'Euclides'], 'La introdujo en 1637.'],
    ['El autor de Los Elementos es:', ['Euclides', 'Diofanto', 'Pitágoras', 'Tales'], 'Obra en 13 libros, de alrededor del 300 a. C.'],
    ['La palabra «algoritmo» deriva del nombre de:', ['Al-Juarismi', 'Arquímedes', 'Aristóteles', 'Ahmes'], 'Es la latinización de su nombre.'],
    ['La obra Ars Magna, con la solución de las ecuaciones de tercer grado, es de:', ['Cardano', 'Viète', 'Gauss', 'Brahmagupta'], 'Girolamo Cardano la publicó en 1545.'],
    ['La etapa del álgebra que usa palabras con algunas abreviaturas es la:', ['Sincopada', 'Retórica', 'Simbólica', 'Moderna'], 'Su representante es Diofanto.']
  ]
});
