// El párrafo donde se muestra la salida
// Emplearemos algún <br> aunque no se recomienda si se emplea CSS
let output = document.getElementById("output");

 // Crear dos arrays con 4 calificaciones numéricas cada uno (usando Array.from)
let notas1 = Array.from({ length: 4 }, () => Math.floor(Math.random() * 10) + 1);
let notas2 = Array.from({ length: 4 }, () => Math.floor(Math.random() * 10) + 1);

// Función con parámetros variables (rest)
function mostrarNotas(...notas) {
    output.innerHTML += "Mostrando notas con función rest: <br>";
    for (const nota of notas) {
        output.innerHTML += ` - ${nota}\n<br>`;
    }
    output.innerHTML += "<br>";
}

// Llamamos a la función pasando el array con spread
mostrarNotas(...notas1);
mostrarNotas(...notas2);

// Combinar los dos arrays con spread y calcular promedio con for...of
const todasLasNotas = [...notas1, ...notas2];
let suma = 0;

for (const n of todasLasNotas) {
    suma += n;
}
const promedio = (suma / todasLasNotas.length);

// Mostramos el promedio por pantalla
output.innerHTML += `Promedio total: ${promedio}<br>`;
