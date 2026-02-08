import Player from "./Player.js";
import Laser from "./Laser.js";

// Introducción al minijuego
alert("Bienvenido al minijuego. Si le das click al gato maulla, el objetivo es darle click a todos los laseres");

// Medidas de la pantalla de cada jugador
let windowHeight = window.innerHeight - 70;
let windowWidth = window.innerWidth - 70;

const collider = {
    mainCollider: new Player({ x: 0, y: 200 }),
    staticCollider: [],
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

// Delegación de eventos + evento de raton
for (let i = 1; i < 10; i++) {
    new Laser({
        x: Math.floor(Math.random() * windowWidth),
        y: Math.floor(Math.random() * windowHeight)
    })
}

// Contador para el número de lasers que ha borrado el jugador
let win_counter = 0
document.body.onclick = (e) => {
    let target = e.target;

    if (target.className != "laser") return;

    win_counter ++;
    if (win_counter == 10) alert("Has ganado. Pulsa aceptar para pasar al siguiente nivel");
    hide(target);
}

function hide(laser) {
    laser.hidden = true;
}