const boton = document.querySelector('.submit');

// Cuando hagas click en el boton se ejecuta la función que está dentro del addEventListener
boton.addEventListener('click', () => {
    // Asignamos a una variable el nombre introducido en el input
    let inputName = document.querySelector('#inputName').value.trim();
    // Asignamos a otra variable la nota recogida en el segundo input
    let nota = document.querySelector('#inputScore').value;
    // Verificamos que la nota no sea menor que 0, mayor que 10 no que no sea un número
    if (nota < 0 || nota > 10 || isNaN(nota)) {
        alert("La nota introducida no puede ser menor que 0 o superior a 10")
    } else {
        // Seleccionamos el div con la clase mensaje
        let estado = document.querySelector('.mensaje')

        // Seleccionamos el h2 donde debe estar el nombre del estudiante
        let student = document.querySelector('h2');
        // Cambiamos el contenido del h2 por el nombre introducido en el input
        student.textContent = inputName;

        let texto = document.querySelector('#notaFinal');
        // Mostramos la nota final en negrita
        texto.innerHTML = `<strong>Nota: ${nota}</strong>`;

        // Este if comprueba y escribe el estado que va a tener el alumno en la evaluación dependiendo de que nota saque.
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
    }
})



