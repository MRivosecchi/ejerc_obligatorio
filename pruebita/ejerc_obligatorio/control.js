var form = document.querySelector('form');
var usuario = document.getElementById('fusuario');
var clave = document.getElementById('fclave');
var submit = document.getElementById('submit');
var mensaje = document.querySelector('p');

form.onsubmit = function(a){

    if(usuario.value === '' || clave.value === ''){
        a.preventDefault();
        mensaje.textContent = "Faltan completar datos";
    }

    else if(!/\S+@\S+/.test(usuario.value)){
        a.preventDefault();
        mensaje.textContent = "Por favor, ingrese un usuario correcto";
    }
}










