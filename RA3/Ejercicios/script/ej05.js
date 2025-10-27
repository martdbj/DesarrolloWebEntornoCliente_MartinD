let inputName = prompt("Introduce el nombre del alumno");
let nota;
do {
    nota = prompt("Introduce la nota del alumno");
} while (isNaN(nota))

let estado = document.querySelector('.mensaje')

let student = document.querySelector('h2');
student.textContent = inputName;

let texto = document.querySelector('#notaFinal');
texto.innerHTML = `<strong>Nota: ${nota}</strong>`;

if (nota < 5) {
    estado.textContent = 'Suspenso';
} else if (nota < 6) {
    estado.textContent = 'Aprobado';
} else if (nota < 7) {
    estado.textContent = 'Bien'
} else if (nota < 9) {
    estado.textContent = 'Notable';
} else {
    estado.textContent = 'Sobresaliente';
}

