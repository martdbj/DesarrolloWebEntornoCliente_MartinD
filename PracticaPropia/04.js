
function classAlumno(edad, post, followers) {
    this.edad = edad;
    this.admin = false;
    this.stats = {
        post: post,
        followers: followers
    };

    this.incrementarStats = function(tipo, n) {
        if (this.stats?.[tipo] != undefined) {
            if (typeof n == "number" && !isNaN(n)) {
                this.stats[tipo] += n;
            }
        } 
    };
}

let output = document.getElementById("output");

let alumno = new classAlumno(19, 2, 3);

alumno.incrementarStats("posts", 2);
alumno.incrementarStats("followers", 3);
alumno.admin = true;

mostrarObjeto(alumno)

function mostrarObjeto(obj) {
    for (let key in obj) {
        if (typeof obj[key] == "object") {
            output.innerHTML += `<br>Propiedad ${key} es un objeto con los siguientes valores:`;
            for (let subkey in obj[key]) {
                output.innerHTML += `<br>${subkey}: ${obj[key][subkey]}`
            }
        } else if (typeof obj[key] != "function"){
            output.innerHTML += `<br><br>${key}: ${obj[key]}`;
        }
    }
}