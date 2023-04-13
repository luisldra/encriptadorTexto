var msgEncriptado = "";
var msgDesEncriptado = "";

function borrarContenido() {
    var textarea = document.getElementById('texto');
    var placeholderValue = textarea.getAttribute('placeholder');

    var textareaRespuesta = document.getElementById('respuesta');

    textarea.value = '';
    textarea.setAttribute('placeholder', placeholderValue);

    textareaRespuesta.value = '';
}

function encriptarTexto() {

    var texto = document.getElementById("texto").value;

    for (let letra = 0; letra < texto.length; letra++) {
        if (texto[letra] == "a") {
            msgEncriptado = msgEncriptado + "ai";
        } else if (texto[letra] == "e") {
            msgEncriptado = msgEncriptado + "enter";
        } else if (texto[letra] == "i") {
            msgEncriptado = msgEncriptado + "imes";
        } else if (texto[letra] == "o") {
            msgEncriptado = msgEncriptado + "ober";
        } else if (texto[letra] == "u") {
            msgEncriptado = msgEncriptado + "ufat";
        } else {
            msgEncriptado = msgEncriptado + texto[letra];
        }
    }

    borrarContenido();
    mostrarRespuesta(msgEncriptado);

    msgEncriptado = "";
    texto = "";
};

function desEncriptarTexto() {

    var texto = document.getElementById("texto").value;

    for (let letra = 0; letra < texto.length; letra++) {

        if (texto[letra] == "a") {
            msgDesEncriptado = msgDesEncriptado + "a";
            letra++;
        } else if (texto[letra] == "e") {
            msgDesEncriptado = msgDesEncriptado + "e";
            letra = letra + 4;
        } else if (texto[letra] == "i") {
            msgDesEncriptado = msgDesEncriptado + "i";
            letra = letra + 3;
        } else if (texto[letra] == "o") {
            msgDesEncriptado = msgDesEncriptado + "o";
            letra = letra + 3;
        } else if (texto[letra] == "u") {
            msgDesEncriptado = msgDesEncriptado + "u";
            letra = letra + 3;
        } else {
            msgDesEncriptado = msgDesEncriptado + texto[letra];
        }
    }

    borrarContenido();
    mostrarRespuesta(msgDesEncriptado);
    texto = "";
    msgDesEncriptado = "";

}

function mostrarRespuesta(texto) {
    document.getElementById('imagenMostrarmsg').style.display = 'none';
    document.getElementById('respuesta').style.display = 'block';
    document.getElementById('copiarTexto').style.display = 'block'

    document.getElementById('respuesta').value = texto;
}

function copiar() {
    var copiar = document.getElementById('respuesta').value;
    copiar.select();
    document.execCommand("copy");

    alert("copiado")
}

document.addEventListener('DOMContentLoaded', () => {
    const btnDesEncriptar = document.getElementById('bDesencriptar');
    btnDesEncriptar.addEventListener('click', desEncriptarTexto);

    const btnEncriptar = document.getElementById('bEncriptar');
    btnEncriptar.addEventListener('click', encriptarTexto);

    const btnCopiarTexto = document.getElementById('copiarTexto')
    

    const areaTextoRespuesta = document.getElementById('respuesta')
    btnCopiarTexto.addEventListener("click", function(){

        function copiar() {
            areaTextoRespuesta.select();
            document.execCommand("copy");
        }

        navigator.clipboard.writeText(areaTextoRespuesta.value)
                    .then(function() {
                    })
                    .catch(function(err) {
                    });

        copiar();
    });
});
