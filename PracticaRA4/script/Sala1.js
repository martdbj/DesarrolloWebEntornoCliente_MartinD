"use strict";
// Claves
let clave = Symbol("clave")
let nevera = Symbol("nevera")

let cajaFuerte = {
    modelo: "SergioScript Max Ultra Seguridad",
    fabricacion: 1998,

    [nevera]: {
        modelo: "bosch",
        clave: 1234,
        stock: ["Lechuga", "Muesli", "Platanos", "Tomates Podridos", "Fideos Instantaneos", "Chocolate"]
    },

    desbloquear: function () {

    },

    [clave]: "2356"
}

// Screens de la sala
let screen1 = document.getElementById("screen1");
let screen2 = document.getElementById("screen2");
let screen3 = document.getElementById("screen3");

// Constantes
let MAX_ATTEMPS = 3;


// Botones del juego
const siguiente = document.getElementById("siguiente");
const screen2Incorrecto = document.getElementsByClassName("screen2Incorrecto");
const screen2Correcto = document.getElementById("screen2Correcto");
const screen3Script = document.getElementById("screen3ScriptEnviar");
const screen3Enviar = document.getElementById("screen3RespuestaEnviar");

// Ocultar Screen1 y mostrar Screen2 
siguiente.addEventListener("click", () => {

    screen1.style.display = "none";
    screen2.style.display = "block";
})

// screen2 Resultado correcto/incorrecto 
for (const botonIncorrecto of screen2Incorrecto) {
    botonIncorrecto.addEventListener("click", () => {
        let respuestaIncorrecta = document.getElementById("screen2RespuestaIncorrecta");
        respuestaIncorrecta.style.display = "block";
        screen3.style.display = "block";
    })
}

screen2Correcto.addEventListener("click", () => {
    let respuestaCorrecta = document.getElementById("screen2RespuestaCorrecta");
    respuestaCorrecta.style.display = "block";
    screen3.style.display = "block";
    let cloneSoftwareCajaFuerte = Object.assign({}, cajaFuerte);
});

// screen3 Comprobación comando introducido por el usuario
screen3Script.addEventListener("click", () => {
    let inputUsuario = document.getElementById("inputListarObjeto").value.trim();
    try {
        let comandoIntroducido = eval(inputUsuario);
        console.log(comandoIntroducido);
    } catch (err) {
        console.log("Tu comando ha lanzado un error");
    }
});

screen3Enviar.addEventListener("click", () => {
    let inputAnyo = document.getElementById("anyoFabricacion").value.trim();
    if (inputAnyo == cajaFuerte["fabricacion"]) {
        console.log("Correcto")
    } else {
        let mensajeError = document.getElementById("errorScreen3");
        mensajeError.style.display = "block";
    }
})