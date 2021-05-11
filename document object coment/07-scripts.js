const navegacion = document.querySelector('.nav');
// console.log(navegacion.firstElementChild)
// console.log( navegacion.lastElementChild)

// console.log(navegacion.childNodes)// los espacios en blanco son considerados elementos
// console.log(navegacion.children)// los espacios en blanco son considerados elementos

// console.log(navegacion.children[1].nodeName)
// console.log(navegacion.children[1].nodeType)

const galeria= document.querySelector('.contenedor-imagen');

// galeria.children[1].children[1].textContent= 'NUEVO HEADING DESDE TRAVESING'

// galeria.children[0].src= 'img/4.jpg';
// console.log(galeria.children[0]);

// Travesong de hijo a padre

// console.log(galeria.parentNode);
// console.log(galeria.parentElement.parentElement.parentElement);

// console.log(galeria);
// console.log(galeria.nextElementSibling);
// console.log(galeria.nextElementSibling.nextElementSibling);

const ultimaimagen=document.querySelector('.contenedor-imagen:nth-child(5)');
console.log(ultimaimagen.previousElementSibling)