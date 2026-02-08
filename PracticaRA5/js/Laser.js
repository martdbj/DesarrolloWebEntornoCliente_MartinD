export default class Laser {
    ref;
    position;
    constructor(position) {
        this.position = position;
        this.ref = document.createElement("div");
        this.ref.classList.add("laser");
        this.ref.style.left = `${this.position.x}px`;
        this.ref.style.top = `${this.position.y}px`;
        document.body.appendChild(this.ref);
    }

    shoot(dx, dy) {
        this.position.x += dx;
        this.position.y += dy;
        this.refreshPosition();
    }

    refreshPosition() {
        this.ref.style.left = `${this.position.x}px`;
        this.ref.style.top = `${this.position.y}px`;
    }
}