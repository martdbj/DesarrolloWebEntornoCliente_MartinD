let output = document.getElementById("output")

frutas = ["manzana", "pera", "platano"];
output.innerHTML += `Array orignal: ${frutas}` 


frutas.splice(1, 1, "sandía");

output.innerHTML += `<br>Elemento 2 cambiado: ${frutas}`;

// Copia de frutas
let copia = frutas.splice(1, 3)
output.innerHTML += `<br>Copia frutas: ${copia} `

// Concatenando
let nuevas = copia.concat(["uvas", "mango"]);
output.innerHTML += `<br>Copia nueva frutas: ${nuevas} `

// Búsqueda índice
let indiceSandia = frutas.indexOf("sandia");
output.innerHTML += `<br>Indice sandía: ${indiceSandia}`;
output.innerHTML += `<br>Contiene pera? ${frutas.includes("pera")} `;
output.innerHTML += `<br>Primera fruta con más de 5 letras: ${frutas.filter(item => item.length > 5)}`
output.innerHTML += `<br>Array con todas las frutas que contengan "m": ${frutas.filter(item => item.startsWith("m"))}`
output.innerHTML += `<br>Índice primera fruta que empieza por a: ${frutas.findIndex(item => item.includes("a"))}`