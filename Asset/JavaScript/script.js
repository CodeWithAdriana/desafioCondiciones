//primero
var activo = false


//segundo 
function calcularStickers() {
    var sticker1 = parseInt(document.querySelector('#sticker1').value, 10);
    var sticker2 = parseInt(document.querySelector('#sticker2').value, 10);
    var sticker3 = parseInt(document.querySelector('#sticker3').value, 10);

    var totalStickers = sticker1 + sticker2 + sticker3;
    var mensaje = document.querySelector('#mensajeStickers');

    if (totalStickers <= 10) {
        mensaje.innerHTML = "Llevas " + totalStickers + " stickers.";
    } else {
        mensaje.innerHTML = "Llevas demasiados stickers.";
    }
}


//tercero 
function verificarContrasena(){

var parrafo = document.querySelector(".mensaje");
var digito1 = document.querySelector('#digito1').value;
var digito2 = document.querySelector("#digito2").value;
var digito3 = document.querySelector("#digito3").value;


var contrasena = digito1 + digito2 + digito3;
console.log(contrasena);
if(contrasena==="911") {
    parrafo.innerHTML = "Password 1 Correcto";
} else if (contrasena==="714"){
    parrafo.innerHTML = "Password 2 correcto";
}else {
    parrafo.innerHTML = "Password incorrecto";
}
}
