var msgEncriptado = "";
var msgDesEncriptado = "";

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
    console.log("mensaje encriptado: " + msgEncriptado)
    texto = "";
    msgEncriptado = "";
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

    console.log("mensaje Desencriptado: " + msgDesEncriptado)

    texto = "";
    msgDesEncriptado = "";
}


document.addEventListener('DOMContentLoaded', () => {
    const btnEncriptar = document.getElementById('bEncriptar');
    btnEncriptar.addEventListener('click', encriptarTexto);
});

document.addEventListener('DOMContentLoaded', () => {
    const btnDesEncriptar = document.getElementById('bDesencriptar');
    btnDesEncriptar.addEventListener('click', desEncriptarTexto);
});
