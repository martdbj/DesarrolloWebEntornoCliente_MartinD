"use strict";
// Claves
let clave = Symbol("clave")
let desbloquear = Symbol("desbloquear")

let cajaFuerte = {
    modelo: "SergioScript Max Ultra Seguridad",
    fabricacion: 1998,

    nevera: {
        modelo: "bosch",
        stock: ["Lechuga", "Muesli", "Platanos", "Tomates Podridos", "Chocolate", "Fideos Instantaneos"]
    },

    [desbloquear]: function () {
        alert("La clave de esta caja fuerte es: (10 * 200) + (30 / 2) + 100 + 41 + 200")
    },

    [clave]: "2356",

    limiteIntentos: 3
}

// Screens de la sala
let screen1 = document.getElementById("screen1");
let screen2 = document.getElementById("screen2");
let screen3 = document.getElementById("screen3");
let screen4 = document.getElementById("screen4");
let screen5 = document.getElementById("screen5");
let finalSala1 = document.getElementById("finalSala1");

// Mensajes Error/Success
let respuestaIncorrectaScreen2 = document.getElementById("screen2RespuestaIncorrecta");
let respuestaCorrectaScreen2 = document.getElementById("screen2RespuestaCorrecta");
let respuestaIncorrectaScreen5 = document.getElementById("screen5RespuestaIncorrecta")

// Botones del juego
const siguiente = document.getElementById("siguiente");
const screen2Incorrecto = document.getElementsByClassName("screen2Incorrecto");
const screen2Correcto = document.getElementById("screen2Correcto");
const screen3Script = document.getElementById("screen3ScriptEnviar");
const screen3Enviar = document.getElementById("screen3RespuestaEnviar");
const screen4DesbloquearFuncion = document.getElementById("ejecutarDesbloquear");
const screen4Desbloquear = document.getElementById("desbloquear");
const screen5Incorrecto = document.getElementsByClassName("screen5Incorrecto");
const screen5Correcto = document.getElementById("screen5Correcto");

// Ocultar Screen1 y mostrar Screen2 
siguiente.addEventListener("click", () => {
    screen1.style.display = "none";
    screen2.style.display = "block";
})

// screen2 Resultado correcto/incorrecto 
let clonRealizado = false;
for (const botonIncorrecto of screen2Incorrecto) {
    botonIncorrecto.addEventListener("click", () => {
        respuestaIncorrectaScreen2.style.display = "block";
        screen3.style.display = "block";
        screen2.style.display = "none";
    })
}

let cloneSoftwareCajaFuerte = {}; // Objeto cloneCajaFuerte

screen2Correcto.addEventListener("click", () => {
    respuestaCorrectaScreen2.style.display = "block";
    screen3.style.display = "block";
    screen2.style.display = "none";
    cloneSoftwareCajaFuerte = Object.assign({}, cajaFuerte);
    cloneSoftwareCajaFuerte["limiteIntentos"] = 100000;
    clonRealizado = true;
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
        screen3.style.display = "none";
        respuestaCorrectaScreen2.style.display = "none";
        respuestaIncorrectaScreen2.style.display = "none";
        screen4.style.display = "block";
    } else {
        let mensajeError = document.getElementById("errorScreen3");
        mensajeError.style.display = "block";
    }
})

// screen4 Ejecutar función desbloquear
screen4DesbloquearFuncion.addEventListener("click", () => {
    cajaFuerte[desbloquear]();
})

// Screen 4 counter intentos y desbloqueo
let counter = 1;
screen4Desbloquear.addEventListener("click", () => {
    let limitCounter = 0;
    let inputClave = document.getElementById("clave").value.trim();
    if (clonRealizado) {
        limitCounter = cloneSoftwareCajaFuerte["limiteIntentos"];
    } else {
        limitCounter = cajaFuerte["limiteIntentos"];
    }
    if (counter == limitCounter) {
        alert("Te has quedado sin intentos y muerto de hambre como consecuencia.");
        window.location.reload();
    }
    if (inputClave == cajaFuerte[clave]) {
        screen4.style.display = "none";
        screen5.style.display = "block";
    }
    counter++;
})

// Screen 5 selección final
for (const botonIncorrecto of screen5Incorrecto) {
    botonIncorrecto.addEventListener("click", () => {
        respuestaIncorrectaScreen5.style.display = "block";
    })
}

screen5Correcto.addEventListener("click", () => {
    respuestaIncorrectaScreen5.style.display = "none";
    screen5.style.display = "none";
    finalSala1.style.display = "block";
})