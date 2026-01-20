let output = document.getElementById("output");

// Alternativa para escribir en el div de salida con una función
function log(msg){
    output.innerHTML += msg + "<br>";
} 

// Función para mostrar el contenido de un Map de películas
// Recorremos directamente los valores
function mostrarMapPeliculas(peliculas){
    for (const valor of peliculas.values()) {     
        log(`Título: ${valor.titulo}`);
        log(`Año: ${valor.año}`);
        log(`Director: ${valor.director}`);
        log(`Género: ${valor.genero}<br>`);
    }
    log("<br>")
}

// Crear un Map con Symbol como clave y objetos como valor
let peliculas = new Map();

// Objetos de prueba (normalmente vendrían en JSON)
let peli1 = { titulo: "Inception", año: 2010, director: "Christopher Nolan", genero: "Ciencia-ficción" };
let peli2 = { titulo: "Titanic", año: 1997, director: "James Cameron", genero: "Romance" };
let peli3 = { titulo: "Matrix", año: 1999, director: "Lana Wachowski", genero: "Acción" };

// Claves tipo Symbol (con descripción de título)
const key1 = Symbol("Inception");
const key2 = Symbol("Titanic");
const key3 = Symbol("Matrix");

// Añadir las películas al Map
peliculas.set(key1, peli1);
peliculas.set(key2, peli2);
peliculas.set(key3, peli3);

log("Listado completo del catálogo de películas:");
mostrarMapPeliculas(peliculas)

// Crear un Set con los géneros del Map
let generosArray = Array.from(peliculas.values(), peli => peli.genero);
let generos = new Set(generosArray);

// Mostramos el Set sin necesidad de recorrerlo, aunque también se podría con for...of
log("Géneros únicos del catálogo: " + Array.from(generos).join(", ") + "<br>");

// Crear un WeakMap con información privada (claves = objetos)
let infoPrivada = new WeakMap();
infoPrivada.set(peli1, "Copias disponibles: 12");
infoPrivada.set(peli2, "Copias disponibles: 5");
infoPrivada.set(peli3, "Copias disponibles: 8");

// Crear un WeakSet para películas en cartelera
let enCartelera = new WeakSet();
enCartelera.add(peli1);
enCartelera.add(peli2);

// Eliminar una referencia y observar diferencias
log("Asignamos 'null' a la película 'Titanic'...");

// Eliminamos referencia de la segunda película que existe en el WeakMap y WeakSet
peli2 = null;

log("Contenido actual del Map tras asignar 'null' a Titanic:");
mostrarMapPeliculas(peliculas);

// No podemos recorrer ni imprimir directamente WeakMap/WeakSet porque no son iterables
log("WeakMap y WeakSet eliminarán automáticamente la referencia a Titanic al quedar sin uso en memoria.");
log("¿Titanic contiene información confidencial? " + infoPrivada.has(peli2));
log("¿Titanic está en cartelera? " + enCartelera.has(peli2) + "<br>");

// Eliminamos la clave con la película con objeto null y ahora sí que debería desaparecer del Map
log("Contenido actual del Map tras eliminar Titanic:");
peliculas.delete(key2);
mostrarMapPeliculas(peliculas);



