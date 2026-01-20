let output = document.getElementById("output");

// Alternativa para escribir en el div de salida con una función
function log(msg) {
  output.innerHTML += msg + "<br>";
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

// Función para mostrar el contenido de un Map de películas
// Recorremos directamente los valores
function mostrarMapPeliculas(peliculas) {
  for (const [clave,valor] of peliculas.entries()) {
    // Asignación desestructurante en el objeto que contiene el map
    let {año, director, genero} = valor;

    log(`Título: ${clave}`);
    log(`Año: ${año}`);
    log(`Director: ${director}`);
    log(`Género: ${genero}<br>`);
  }
  log("<br>")
}

// Convertimos el Map para que las claves sean los títulos (descripciones de los Symbol)
const peliculasPorTitulo = new Map();
for (const [clave, valor] of peliculas.entries()) {
  const { titulo, ...resto } = valor;
  peliculasPorTitulo.set(titulo, resto);
}

mostrarMapPeliculas(peliculasPorTitulo);

// Obtenemos las películas anteriores al 2000 (sin incluir la clave)
const recientes = Array.from(peliculasPorTitulo.values()).filter(({año}) => año < 2000);

// Sin asignación desestructurante sería de la siguiente manera
//const recientes = Array.from(peliculasPorTitulo.values()).filter(item => item.año < 2000);

// Obtenemos el primero de los recientes y creamos variables para sus propiedades
const objPrimeroAntiguo = recientes[0];
const { año, director, genero } = objPrimeroAntiguo;

log(`Primera película encontrada anterior al 2000: (${año}), dirigida por ${director}, género: ${genero}`);