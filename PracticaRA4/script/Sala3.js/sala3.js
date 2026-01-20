import Pokemon from "./Pokemon.js";
import Abra from "./Abra.js";
import Charmander from "./Charmander.js";

let abra = new Abra("testAbra", 300, 25)
let charmander = new Charmander("testCharmander", 300, 15)

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
<a id="heal" href=""><div>${charmander.heal.name}</div></a>
<a id="attack" href=""><div>${Pokemon.attack.name}</div></a>
<a id="special" href=""><div>Special attack: ${charmander.quemadoStatus.name}</div></a>
`

// Listeners acciones
let healBtn = document.getElementById("heal");
healBtn.addEventListener("click", () => {
    charmander.heal();
})