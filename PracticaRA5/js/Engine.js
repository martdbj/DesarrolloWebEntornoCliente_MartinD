import Player from "./Player.js";
import Laser from "./Laser.js";

const collider = {
    mainCollider: new Player({x: 0, y: 700}),
    staticCollider: [],
    laser: []
}


document.addEventListener("keydown", (e) => {
    // Detenemos la propagación
    e.preventDefault();
    let player = collider.mainCollider;
    let speed = e.shiftKey ? 7 : 10;
    let playerPosition = player.ref.getBoundingClientRect();
    switch (e.key) {
        // Teclas especiales
        case "ArrowLeft":
            if (playerPosition.left == 0) speed = 0;
            player.movePlayer(-speed, 0);
            break;
        case "ArrowUp":
            if (playerPosition.top == 0) speed = 0;
            player.movePlayer(0, -speed);
            break;
        case "ArrowRight":
            if (playerPosition.right == 0) speed = 0;
            player.movePlayer(speed, 0);
            break;
        case "ArrowDown":
            if (playerPosition.bottom == 0) speed = 0;
            player.movePlayer(0, speed);
            break;
        // Caracteres alfanuméricos
        case "a":
            if (playerPosition.left == 0) speed = 0;
            player.movePlayer(-speed, 0);
            break;
        case "w":
            if (playerPosition.top == 0) speed = 0;
            player.movePlayer(0, -speed);
            break;
        case "d":
            if (playerPosition.right == 0) speed = 0;
            player.movePlayer(speed, 0);
            break;
        case "s":
            if (playerPosition.bottom == 0) speed = 0;
            player.movePlayer(0, speed);
            break;
    }
})

// Evento de raton
collider.mainCollider.ref.onclick = (e) => {
    // Detenemos la propagación
    e.stopPropagation();
    collider.mainCollider.miau();
    
}

document.addEventListener("click", () => {
    let laser = new Laser({x: `${collider.mainCollider.getPositionX()}`, y: `${collider.mainCollider.getPositionY()}`});
    collider.laser.push(laser);
    laser.shoot(1, 1);
})