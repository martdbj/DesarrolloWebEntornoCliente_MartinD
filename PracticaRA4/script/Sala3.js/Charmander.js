class Charmander extends Pokemon {
    constructor(name = "Charmander", hp, attacks) {
        super(name, hp, attacks);

    }
    
    quemar(status) {
        return status = "quemado";
    }
}