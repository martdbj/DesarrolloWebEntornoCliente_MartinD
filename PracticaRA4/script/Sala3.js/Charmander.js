import Pokemon from "./Pokemon.js";

export default class Charmander extends Pokemon {
    constructor(name, hp, dmg) {
        super(name, hp, dmg);
    }
    
    especial(pokemon) {
        pokemon.hp -= 50;
        alert(`${pokemon.name} se esta quemando, pierde 50 de vida`);
        pokemon.status = "clean";
    }
}

