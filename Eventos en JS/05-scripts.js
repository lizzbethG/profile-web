window.addEventListener('scroll',() =>{
    // console.log('scrolling'); ----- este solo es para las veces que dimos scroll

    // const scrollPX = window.scrollY;
    // console.log(scrollPX);-----este nos muestra el numero de pixeles que hemos bajado y se restan al subir

    const contacto= document.querySelector('.contacto');
    const ubicacion= contacto.getBoundingClientRect();

    if(ubicacion.top < 100){
        console.log('El elemento ya esta vicible');
    } else{
        console.log('Aun no esta vicible');
    }
})