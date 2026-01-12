let peliculas = new Map();

let pelicula =  {
    titulo: "Salvese quien pueda",
    anyo: 1989,
    director: "Taranteno",
    genero: "Comedia"
}


let pelicula2 =  {
    titulo: "7 gatos y un langostino",
    anyo: 2003,
    director: "Fallini",
    genero: "Tragedia"
}

let pelicula3 = {
    titulo: "Rios de vino",
    anyo: 1955,
    director: "Wolder",
    genero: "Western"
}

const key1 = Symbol("HAHAHA");
const key2 = Symbol("MIMIMI");
const key3 = Symbol("KSKSKS");

peliculas.set(key1, pelicula);
pelicula.set(key2, pelicula2);
pelicula.set(key3, pelicula3);