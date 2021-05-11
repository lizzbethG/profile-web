const enlace= document.createElement('A');

//Agregandole el texto
enlace.textContent= 'nuevo uwu';

//Añadiendo href

enlace.href ='/nuevo-enlace';
 console.log(enlace);

//  

 //Seleccionar la navegacion
 const navegacion = document.querySelector('.menu');

 navegacion.insertBefore(enlace, navegacion.children[1]);


//  function miFuncion(){
//      alert('diste click')
//  }


// crear una imagen

const imagen= document.createElement('img');
imagen.src= 'img/2.jpg';

//crear el card

const card = document.createElement('div');
card.classList.add('card');

// Asignar la imagen

card.appendChild(imagen);

//Asignar info

card.appendChild(imagen);

//Insertar en el HTML
const contenedor = document.querySelector('.galeria');
console.log(card)
contenedor.insertBefore(card, contenedor.children[1]);
