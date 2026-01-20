// Definición del objeto alumno
// Le pasamos al constructor algunos valores iniciales
function classAlumno(edad, posts, followers) {
    this.edad = edad;
    this.admin = false;

    this.stats = {
        posts: posts,
        followers: followers
    };

    /* Posible sintaxis abreviada si el parámetro tiene el mismo nombre que la propiedad del objeto
    this.stats = {
        posts,
        followers
    };*/

    // Método para incrementar stats solo si se reciben los valores adecuados
    this.incrementarStats = function(tipo, n) {
        if (this.stats?.[tipo] != undefined) {
            if (typeof n == "number" && !isNaN(n)) {
                this.stats[tipo] += n;
            }
        } 
    };

    // El return va implícito
    // return this
}

// La función que muestra un objeto en el párrafo de la página
function mostrarObjeto(obj){
    // Recorrer todas las propiedades del objeto
    // La etiqueta <br> no se recomienda pero se hace para añadir saltos de línea y ahorrar código
    for (let key in obj) {
        // Si la propiedad es un objeto (como stats)
        if (typeof obj[key] == "object") {
            output.innerHTML += `<br>Propiedad "${key}" es un objeto con los siguientes valores:`;
            for (let subKey in obj[key]) {
            output.innerHTML += `<br>${subKey}: ${obj[key][subKey]}`;
            }
        } else if (typeof obj[key] != "function"){
            // Si no es un objeto, mostrar su valor directamente
            output.innerHTML += `<br>${key}: ${obj[key]}`;
        }
    }
}

// ---------------------------
// PRUEBAS DEL OBJETO
// ---------------------------

let alumno = new classAlumno(18, 0, 0);

// Incrementar número de posts y followers
alumno.incrementarStats("posts", 2);
alumno.incrementarStats("followers", 3);

// Cambiamos la propiedad "admin"
alumno.admin = true;

let output = document.getElementById("output");
output.innerHTML += `Propiedad admin (después del cambio): ${alumno.admin}`; // true

// Quitar propiedad admin
// En una función no se puede eliminar
delete alumno.admin;

// Mostramos el objeto por pantalla
// Las etiquetas <br> y <b> deberían reemplazarse con CSS pero en este caso se ahorra código
output.innerHTML += "<br><br><b>Recorriendo el objeto alumno después de eliminar admin:</b>";
mostrarObjeto(alumno);

// Clonamos objeto 
// Ahora no se puede clonar con "structuredClone" porque hay una propiedad del tipo función
// let alumno2 = structuredClone(alumno);

// Lo más parecido es assign, pero no clona objetos y tenemos que clonar las estadísticas manualmente
let alumno2 = Object.assign({}, alumno);
alumno2.stats = structuredClone(alumno.stats);

// Mostramos el resultado por pantalla
alumno2.incrementarStats("posts", 1);

output.innerHTML += "<br><br><b>Recorriendo el objeto original</b>:";
mostrarObjeto(alumno);
output.innerHTML += "<br><b>Ahora el objeto clonado</b>:";
mostrarObjeto(alumno2);

