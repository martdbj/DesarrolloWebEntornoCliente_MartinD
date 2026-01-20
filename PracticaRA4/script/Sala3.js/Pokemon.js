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
        this.hp += 20;
    }

    getName() {
        return this.name;
    }

    set name(value) {
        this.name = value;
    }

    static checkGanador(pokemon1, pokemon2) {
        if (pokemon1.hp <= 0 && pokemon2.hp <= 0) {
            alert("Empate, ambos pokemons se han quedado kao a la vez");
            if (confirm("Volver a empezar?")) {
                window.location.reload();
            }
        } else if (pokemon1.hp <= 0) {
            alert(`${pokemon2.name()} ha ganado!!!`)
            if (confirm("Volver a empezar?")) {
                window.location.reload();
            }
        } else if (pokemon2.hp <= 0) {
            alert(`${pokemon1.name} ha ganado!!!`)
            if (confirm("Volver a empezar?")) {
                window.location.reload();
            }
        } 
    }

    static attack(pokemon1, pokemon2) {
        let finalHp = pokemon2.hp - pokemon1.dmg;
        pokemon2.hp = finalHp;
    }

    quemadoStatus(pokemon) {
        pokemon.hp -= 50;
    }

    confundidoStatus(pokemon) {
        let dmg = pokemon.dmg;
        pokemon.hp -= dmg;
    }
}