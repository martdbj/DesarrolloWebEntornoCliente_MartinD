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

    generate() {
        let windowHeight = window.innerHeight;
        let windowWidth = window.innerWidth;

        let randomHeight = Math.max(0, Math.min((windowHeight), Math.random() * windowHeight));
        let randomWidth = Math.max(0, Math.min((maxHeight - windowWidth), Math.random() * windowWidth));

        this.position.x = randomWidth;
        this.position.y = randomHeight;

        this.refreshPosition
    }

    refreshPosition() {
        this.ref.style.left = `${this.position.x}px`;
        this.ref.style.top = `${this.position.y}px`;

        
    }
}

