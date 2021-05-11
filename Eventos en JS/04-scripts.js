const formulario= document.querySelector('#formulario');

formulario.addEventListener('submit', validarFormulario);
function validarFormulario(e) {
    e.preventDefault();
    console.log('Consultar un api')
    console.log(e.target.action);
}