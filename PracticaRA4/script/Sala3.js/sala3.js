import Pokemon from "./Pokemon.js";
import Abra from "./Abra.js";
import Charmander from "./Charmander.js";

let abra = new Abra("Abra", 120, 30)
let charmander = new Charmander("Charmander", 100, 35)

// Código principal

// Añadimos prototipo probabilidad de golpe especial
Abra.prototype.probabilidadGolpeEspecial = function () {
    let probabilidadGolpe = Math.floor(Math.random() * 2)
    switch (probabilidadGolpe) {
        case 0:
            return true;
        case 1:
            return false;
        default:
            break;
    }
}
Charmander.prototype.probabilidadGolpeEspecial = function () {
    let probabilidadGolpe = Math.floor(Math.random() * 5)
    switch (probabilidadGolpe) {
        case 0:
            return true;
        case 2:
            return true;
        default:
            return false;
    }
}

// Establecemos los nombres de los pokemons
let nombres = document.getElementsByClassName("nombre");

for (let i = 0; i < nombres.length; i++) {
    if (i == 0) {
        nombres[i].innerHTML = abra.getName();
        continue;
    }
    nombres[i].innerHTML = charmander.getName();
}

// Añadir botones acciones jugador
let acciones = document.getElementById("acciones");
acciones.innerHTML = `
<btn id="heal"><div>${charmander.heal.name}</div></btn>
<btn id="attack"><div>${Pokemon.attack.name}</div></btn>
<btn id="special"><div>Special attack: ${charmander.quemadoStatus.name}</div></btn>
`

// Mostrar vida
let vida = document.getElementById("health");
vida.innerText = `Health: ${charmander.hp}`
let vidaEnemeigo = document.getElementById("enemyHealth");
vidaEnemeigo.innerText = `Health: ${abra.hp}`

// Listeners acciones
// Heal
let healBtn = document.getElementById("heal");
healBtn.addEventListener("click", () => {
    charmander.heal();
    alert("Te has curado 20 de vida");
    vida.innerText = `Health: ${charmander.hp}`;
    // Acción enemigo
    let randomAccion = random()
    ataqueIA(abra, randomAccion, charmander);
    Pokemon.checkGanador(charmander, abra);
});

// Attack
let attackBtn = document.getElementById("attack");
attackBtn.addEventListener("click", () => {
    Pokemon.attack(charmander, abra);
    alert("Has hecho " + charmander.dmg + " de daño");
    vidaEnemeigo.innerText = `Health: ${abra.hp}`
    // Acción enemigo
    let randomAccion = random()
    ataqueIA(abra, randomAccion, charmander);
    Pokemon.checkGanador(charmander, abra);
});

// Especial
let specialAttckBtn = document.getElementById("special");
specialAttckBtn.addEventListener("click", () => {
    let ejecutarGolpe = charmander.probabilidadGolpeEspecial();
    if (ejecutarGolpe) {
        charmander.especial(abra);
        vidaEnemeigo.innerText = `Health: ${abra.hp}`;
    } else {
        alert(`${charmander.name} ha fallado el ataque especial`);
    }
    // Acción enemigo
    let randomAccion = random()
    ataqueIA(abra, randomAccion, charmander);
    Pokemon.checkGanador(charmander, abra);
})

// Funcion ataque aleatorio enemigo
function ataqueIA(pokemon, random, pokemon2) {
    switch (random) {
        case 0:
            pokemon.heal();
            vidaEnemeigo.innerText = `Health: ${pokemon.hp}`;
            alert("El enemigo se ha curado")
            break;
        case 1:
            Pokemon.attack(pokemon, pokemon2);
            alert(`${pokemon.name} te ha quitado ${pokemon.dmg} de vida`);
            vida.innerText = `Health: ${pokemon2.hp}`
            break;
        case 2:
            let ejecutarGolpe = pokemon.probabilidadGolpeEspecial();
            if (ejecutarGolpe) {
                pokemon.special(pokemon2);
                vida.innerText = `Health: ${pokemon2.hp}`;
            } else {
                alert(`${pokemon.name} ha fallado el ataque especial`)
            }
            break;
        default:
            break;
    }
}

function random() {
    return Math.floor(Math.random() * 3)
}