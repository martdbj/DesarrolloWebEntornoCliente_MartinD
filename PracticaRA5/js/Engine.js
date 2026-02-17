import Player from "./Player.js";
import Laser from "./Laser.js";

// Tiempo al comenzar el minijuego
let comienzo = Date.now();

let nombre = document.getElementById("name")
let gameDiv = document.getElementById("game");
gameDiv.style.opacity = 0;
// Botón inicio formulario
const botonInicio = document.getElementById("inicioBoton");
let formulario = document.getElementById("contenedorFormulario");
// Validación formulario
// Formulario
let formInicio = document.forms.inicioSesion;
// Nuevo evento submit
formInicio.addEventListener("submit", (e) => {
    e.preventDefault();
    let nombreUsuario = formInicio.elements.nombre;
    let email = formInicio.elements.email;
    let regex = /.+@.+\..+/;
    if (!regex.test(email.value)) {
        document.getElementById("error").innerHTML = "El email no tiene un formato valido";
        email.focus();
        return;
    }

    nombre.innerHTML = "Nombre de usuario: " + nombreUsuario.value;
    formulario.hidden = true;

    // Mostramos los elementos del juego
    gameDiv.style.opacity = 1;
    // Introducción al minijuego
    alert("Bienvenido al minijuego. Si le das click al gato maulla, el objetivo es darle click a todos los laseres");

    // Medidas de la pantalla de cada jugador
    let windowHeight = window.innerHeight - 70;
    let windowWidth = window.innerWidth - 70;

    const collider = {
        mainCollider: new Player({ x: 0, y: 200 }),
        laser: []
    }


    document.addEventListener("keydown", (e) => {
        // Detenemos la propagación
        e.preventDefault();
        let player = collider.mainCollider;
        let speed = e.shiftKey ? 15 : 7;
        let playerPosition = player.ref.getBoundingClientRect();
        switch (e.key.toLowerCase()) {
            // Teclas especiales
            case "ArrowLeft":
                if (playerPosition.left == 0 || playerPosition.left < 0) speed = 0;
                player.movePlayer(-speed, 0);
                break;
            case "ArrowUp":
                if (playerPosition.top == 0 || playerPosition.top < 0) speed = 0;
                player.movePlayer(0, -speed);
                break;
            case "ArrowRight":
                if (playerPosition.right == 0 || playerPosition.right > windowWidth) speed = 0;
                player.movePlayer(speed, 0);
                break;
            case "ArrowDown":
                if (playerPosition.bottom == 0 || playerPosition.bottom > windowHeight) speed = 0;
                player.movePlayer(0, speed);
                break;
            // Caracteres alfanuméricos
            case "a":
                if (playerPosition.left == 0 || playerPosition.left < 0) speed = 0;
                player.movePlayer(-speed, 0);
                break;
            case "w":
                if (playerPosition.top == 0 || playerPosition.top < 0) speed = 0;
                player.movePlayer(0, -speed);
                break;
            case "d":
                if (playerPosition.right == 0 || playerPosition.right > windowWidth) speed = 0;
                player.movePlayer(speed, 0);
                break;
            case "s":
                if (playerPosition.bottom == 0 || playerPosition.bottom > windowHeight) speed = 0;
                player.movePlayer(0, speed);
                break;
        }
    })

    // Evento de raton para hacer maullar al gato
    collider.mainCollider.ref.onclick = (e) => {
        // Detenemos la propagación
        e.stopPropagation();
        collider.mainCollider.miau();
    }

    // Evento mouseover de gato al pasar el raton por encima (cambio de background)
    collider.mainCollider.ref.addEventListener("mouseover", () => {
        collider.mainCollider.ref.style.backgroundColor = "lightblue";
    });

    collider.mainCollider.ref.addEventListener("mouseout", () => {
        collider.mainCollider.ref.style.backgroundColor = "";
    });
    for (let i = 1; i < 1; i++) {
        new Laser({
            x: Math.floor(Math.random() * windowWidth),
            y: Math.floor(Math.random() * windowHeight)
        })
    }

    // Contador para el número de lasers que ha borrado el jugador
    let win_counter = 0
    // Delegación de eventos + evento de raton
    document.body.onclick = (e) => {
        let target = e.target;

        if (target.className != "laser") return;

        win_counter++;
        if (win_counter == 1) {
            tiempoFinal(comienzo);
            // El gato maulla cuando terminas
            collider.mainCollider.miau();
            alert("Has pasado esta fase en " + tiempoFinal(comienzo) + " segundos. Ahora tienes que mover el gato a la caja");


            let draggedCat = null;

            // Eventos Arrastrar y soltar
            // Evento dragstart
            collider.mainCollider.ref.addEventListener("dragstart", (e) => {
                draggedCat = e.target;
                e.target.style.opacity = 0;
            });

            let finalBox = document.querySelector("#finalBox");
            finalBox.style.display = "block";

            // Permitimos al navegador que podamos soltar a nuestro gato en la caja
            finalBox.addEventListener("dragover", (e) => {
                e.preventDefault();
            });

            // Evento drop
            finalBox.addEventListener("drop", (e) => {
                e.preventDefault();
                if (draggedCat) {
                    draggedCat.style.opacity = 1;
                    finalBox.appendChild(draggedCat);
                    alert("Enhorabuena, has ganado!")
                }
            });
        }
        hide(target);
    }
});

function tiempoFinal(comienzo) {
    let final = Date.now();
    let totalSec = (final - comienzo) / 1000;
    return totalSec;
}

function hide(laser) {
    laser.hidden = true;
}