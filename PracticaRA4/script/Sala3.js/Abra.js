import Pokemon from "./Pokemon.js";

export default class Abra extends Pokemon {
    constructor(name, hp, dmg) {
        super(name, hp, dmg);
    }
    
    special(status) {
        return status = "confundido";
    }
}

export {Abra}