// const primerEnlace= document.querySelector('a');
// primerEnlace.remove('a');


// Eliminar desde el padre...
const navegacion = document.querySelector('.nav');

console.log(navegacion.children);

navegacion.removeChild( navegacion.children[1]);
