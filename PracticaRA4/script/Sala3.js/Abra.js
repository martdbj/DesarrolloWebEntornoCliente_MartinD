import Pokemon from "./Pokemon.js";

export default class Abra extends Pokemon {
    constructor(name, hp, dmg) {
        super(name, hp, dmg);
    }
    
    special(pokemon) {
        pokemon.hp -= pokemon.dmg;
        alert(`${pokemon.name} está confundido, se ha golpeado a sí mismo`);
        pokemon.status = "clean";
    }
}

export {Abra}