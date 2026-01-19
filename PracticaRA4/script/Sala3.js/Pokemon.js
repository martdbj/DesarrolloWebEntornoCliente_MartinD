class Pokemon {
    name;
    hp;
    attacks = {}
    status;

    constructor(name, hp, attacks, status = "normal") {
        this.name = name;
        this.hp = hp;
        this.attacks = attacks;
        this.status = status;
    } 

    heal() {
        let healPercentage = this.hp * 0.2;
        this.hp += healPercentage;
    }
}