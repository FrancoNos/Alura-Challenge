function encriptar(){

var frase = document.getElementById("textoEncriptado").value.toLowerCase();


// i toma letras mayusculas y minusculas 
//m toma en cuenta multiples lineas
//g toma en cuenta toda la oracion o linea

var textoEncriptado = frase.replace(/e/img, "enter");
var textoEncriptado = textoEncriptado.replace(/i/img, "imes");
var textoEncriptado = textoEncriptado.replace(/a/img, "ai");
var textoEncriptado = textoEncriptado.replace(/o/img, "ober");
var textoEncriptado = textoEncriptado.replace(/u/img, "ufat");

document.getElementById("imagen").style.display = "none";
document.getElementById("subtitulo").style.display = "none";
document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;
}

function desencriptar(){

    var frase = document.getElementById("textoEncriptado").value.toLowerCase();
    
    var textoEncriptado = frase.replace(/enter/img, "e");
    var textoEncriptado = textoEncriptado.replace(/imes/img, "i");
    var textoEncriptado = textoEncriptado.replace(/ai/img, "a");
    var textoEncriptado = textoEncriptado.replace(/ober/img, "o");
    var textoEncriptado = textoEncriptado.replace(/ufat/img, "u");
    
    document.getElementById("textoDesencriptado").innerHTML = textoEncriptado;


document.getElementById("imagen").style.display = "none";
document.getElementById("subtitulo").style.display = "none";
document.getElementById("botonCopiar").style.display = "show";
document.getElementById("botonCopiar").style.display = "inherit";

    }

    function copiar(){

        var contenido = document.querySelector("#textoDesencriptado");
        contenido.select();
        document.exeeCommand("copy");
        
            }


