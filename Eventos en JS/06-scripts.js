const fotoDiv= document.querySelector('.foto');
const infoDiv= document.querySelector('.info');
const progressDiv= document.querySelector('.acerca-de');

fotoDiv.addEventListener('click', e =>{
    e.stopPropagation()
    console.log('click en foto');
});

infoDiv.addEventListener('click', e =>{
    e.stopPropagation()
    console.log('click en info');
});
progressDiv.addEventListener('click',e =>{
    e.stopPropagation()
    console.log('click en Acerca de');
});