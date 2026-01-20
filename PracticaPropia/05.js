const id = Symbol("id"); // Symbol único
const estadoGlobal = Symbol.for("estado"); // Symbol global

let alumno = {
    edad: 18,
    admin: false,
    stats: {
        post: 0,
        followers: 0
    },

    [id]: 123,
    [estadoGlobal]: "activo",

    incrementarStats(tipo, n) {
        if (this.stats?.[tipo] != undefined) {
            this.stats[tipo] += n;
        }
    }
}

alumno.stats.post += 3;
alumno.stats.followers += 6;

let alumnoClon = Object.assign({}, alumno); // No clona objetos
alumnoClon.stats = structuredClone(alumno.stats); // Clonamos los parámetros del objeto stats

delete alumnoClon[id];

const id2 = Symbol("id2");
alumnoClon[id2] = Math.floor(Math.random() * 10000);

let output = document.getElementById("output");

mostrarObjeto(alumnoClon)


function mostrarObjeto(obj) {
    // Recorrer todas las propiedades del objeto
    // La etiqueta <br> no se recomienda pero se hace para añadir saltos de línea y ahorrar código
    for (let key in obj) {
        // Si la propiedad es un objeto (como stats)
        if (typeof obj[key] == "object") {
            output.innerHTML += `<br>Propiedad "${key}" es un objeto con los siguientes valores:`;
            for (let subKey in obj[key]) {
                output.innerHTML += `<br>${subKey}: ${obj[key][subKey]}`;
            }
        } else if (typeof obj[key] != "function") {
            // Si no es un objeto, mostrar su valor directamente
            output.innerHTML += `<br>${key}: ${obj[key]}`;
        }
    }

    // Recorremos las propiedades que son Symbol
    let symbols = Object.getOwnPropertySymbols(obj);
    for (let s of symbols) {
        output.innerHTML += `<br>${s.description}: ${obj[s]}`;
    }
        
    // Para recorrer todas las propiedades, incluidas las de tipo Symbol
    /* let claves = Reflect.ownKeys(obj);

    for (let key of claves) { // Importante para mostrar todos
        // Si la propiedad es un objeto (como stats)
        if (typeof obj[key] == "object") {
            output.innerHTML += `<br>Propiedad "${key}" es un objeto con los siguientes valores:`;
            for (let subKey in obj[key]) {
                output.innerHTML += `<br>${subKey}: ${obj[key][subKey]}`;
            }
        } else if (typeof obj[key] != "function") {
            // Si no es un objeto, mostrar su valor directamente
            output.innerHTML += `<br>${key.toString()}: ${obj[key]}`;
        }
    }*/
}