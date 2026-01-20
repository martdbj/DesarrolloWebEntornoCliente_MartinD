import Pokemon from "./Pokemon.js";
import Abra from "./Abra.js";
import Charmander from "./Charmander.js";

let abra = new Abra("Abra", 320, 25)
let charmander = new Charmander("Charmander", 300, 15)

console.log(Pokemon.compareHealth(abra, charmander));

// Código principal

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
let healBtn = document.getElementById("heal");
healBtn.addEventListener("click", () => {
    charmander.heal();
    vida.innerText = `Health: ${charmander.hp}`
});

let attackBtn = document.getElementById("attack");
attackBtn.addEventListener("click", () => {
    Pokemon.attack(charmander, abra);
    vidaEnemeigo.innerText = `Health: ${abra.hp}`
});

let specialAttckBtn = document.getElementById("special");
specialAttckBtn.addEventListener("click", () => {
    
})