import Pokemon from "./Pokemon.js";

export default class Charmander extends Pokemon {
    constructor(name, hp, dmg) {
        super(name, hp, dmg);
    }
    
    quemar(status) {
        return status = "quemado";
    }
}

