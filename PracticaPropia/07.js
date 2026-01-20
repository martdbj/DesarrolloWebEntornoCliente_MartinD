let output = document.getElementById("output");

let colores = "rojo,verde,azul,amarillo";
let coloresArray = colores.split(",");

if (Array.isArray(coloresArray)) {
    output.innerHTML += `Array colores: ${coloresArray}`

    output.innerHTML += `<br>Cada color en mayúsculas: `;
    coloresArray.forEach(color => output.innerHTML += `<br>Color: ${color.toUpperCase()}`)

    let coloresInfo = coloresArray.map(item => ({
        nombre: item,
        longitud: item.length
    }));
    output.innerHTML += `<br><br>Array con lingitud: ${coloresInfo}`

    // Ordenar los colores del array alfabeticamente
    output.innerHTML += `<br><br>Colores por orden alfabético: ${coloresArray.sort()}`
    output.innerHTML += `<br><br>Colores por orden alfabético reverso: ${coloresArray.reverse()}`

    // Suma total de letras
    let totalLetras = coloresArray.reduce((acum, color) => acum + color.length, 0);
    output.innerHTML += `<br>Total de letras: ${totalLetras}`;

    // Array en cadena
    let cadenaNueva = coloresArray.join("|");
    output.innerHTML += `<br>Cadena: ${cadenaNueva}`;
} else {
    output.innerHTML = "El texto no era un array";
}