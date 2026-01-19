class Abra extends Pokemon {
    constructor(name = "Abra", hp, attacks) {
        super(name, hp, attacks);

    }
    
    confundir(status) {
        return status = "confundido";
    }
}