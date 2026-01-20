export default class Pokemon {
    name;
    hp;
    status;

    constructor(name, hp, dmg, status = "normal") {
        this.name = name;
        this.hp = hp;
        this.dmg = dmg;
        this.status = status;
    } 

    heal() {
        let healPercentage = this.hp * 0.2;
        this.hp += healPercentage;
    }

    getName() {
        return this.name;
    }

    set name(value) {
        this.name = value;
    }

    static compareHealth(pokemon1, pokemon2) {
        if (pokemon1.hp == pokemon2.hp) {
            return "Igualados"
        }
        return pokemon1.hp > pokemon2.hp ? pokemon1.getName() : pokemon2.getName();
    }

    static attack(pokemon1, pokemon2) {
        let finalHp = pokemon1.dmg - pokemon2.hp;
        pokemon2.hp = finalHp;
    }

    quemadoStatus(pokemon) {
        pokemon.hp -= 10;
    }

    confundidoStatus(pokemon) {
        let dmg = pokemon.dmg;
        pokemon.hp -= dmg;
    }
}