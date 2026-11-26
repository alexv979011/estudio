/* Lista de materias que aparecen en el selector (arriba a la izquierda).
   Para añadir contenido a una materia: crea datos/<id>/unidad1.js, unidad2.js…
   con el mismo formato que datos/quimica/ y con  materia: '<id>'  dentro,
   y agrega su <script> en index.html. */
window.MATERIAS = [
  { id: 'quimica', nombre: 'Química I', ic: 'matraz' },
  { id: 'mate', nombre: 'Matemáticas I', ic: 'suma' },
  { id: 'orienta', nombre: 'Orientación Educativa', ic: 'brujula' }
];
