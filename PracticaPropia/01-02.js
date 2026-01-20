let alumno = {
    edad: 18,
    admin: false,
    stats: {
        post: 0,
        followers: 0
    }
}

let output = document.getElementById("output");

// Incrementar post
alumno.stats.post = 2;
alumno.stats.followers = 3;

// Cambiar permiso
alumno.admin = true;

output.innerHTML += `Incremento post ${alumno.stats.post} y followers ${alumno.stats.followers} <br>`
output.innerHTML += `Propiedad admin cambiada: ${alumno.admin} <br>`

// Eliminar propiedad admin
delete alumno.admin;

// Mostra objeto
mostrarObjeto(alumno);

// Clonación completa
let alumnoClon = Object.assign({}, alumno);
alumnoClon = structuredClone(alumno);
// Incrementamos post en 1 del clon
alumnoClon.stats.post += 1;

mostrarObjeto(alumnoClon)

function mostrarObjeto(obj) {
    for (let key in obj) {
        if (typeof obj[key] == "object") {
            output.innerHTML += `<br>Propiedad ${key} es un objeto con los siguientes valores:`;
            for (let subkey in obj[key]) {
                output.innerHTML += `<br>${subkey}: ${obj[key][subkey]}`
            }
        } else {
            output.innerHTML += `<br><br>${key}: ${obj[key]}`;
        }
    }
}
