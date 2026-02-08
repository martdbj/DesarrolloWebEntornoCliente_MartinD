export default class Player {
    ref;
    position;
    constructor(position) {
        this.position = position;
        this.ref = document.getElementById("player");
        this.ref.classList.add("entity");
        this.ref.style.left = `${this.position.x}px`;
        this.ref.style.top = `${this.position.y}px`
    }

    movePlayer(dx, dy) {
        this.position.x += dx;
        this.position.y += dy;
        this.refreshPosition();
    }

    sprint(dx, dy) {
        this.position.x += dx;
        this.position.y += dy;
        this.refreshPosition();
    }

    refreshPosition() {
        this.ref.style.left = `${this.position.x}px`;
        this.ref.style.top = `${this.position.y}px`;
    }

    getPositionX() {
        return this.position.x;
    }

    getPositionY() {
        return this.position.y;
    }

    miau() {
        let audio = new Audio("../miau.wav");
        audio.play();
    }
}
