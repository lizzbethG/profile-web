const contacto= document.querySelector('.form-group');

// ---Validaciones----
// keydown----- se ejecuta cuando presiono la tecla
// keyup---- se ejecuta cuando suelta la tecla
//blur---- se ejecuta cuando se clikea en el imput
// copy--- se ejecuta cuando copio
// paste---se ejecuta cuando se pega algo
// cut---- se ejecuta cuando se corta
// imput--- se ejecuta cuando se realiza todas las validaciones anteriores excepto el BLUR
// 

contacto.addEventListener('input',(e) => {
    if(e.target.value===''){
        console.log('falló la validacion');}    
})