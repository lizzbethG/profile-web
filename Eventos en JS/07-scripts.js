const contacto = document.querySelector('.acerca-de') 

contacto.addEventListener('click', e=>{
    if(e.target.classList.contains('foto')){
        console.log('Diste click en foto')
    }
    if(e.target.classList.contains('info')){
        console.log('diste click en info')
    }
});