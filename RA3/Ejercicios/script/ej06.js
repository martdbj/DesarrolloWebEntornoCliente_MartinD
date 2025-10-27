let color = prompt("Introduce un nuevo color para el h1")
let resaltado = confirm("Quieres resaltar el texto del párrafo con clase descripción?");

// No hacer los cambios directamente
let h1Color = document.querySelector('h1');

h1Color.style.color = color;

if (resaltado) {
    let descripcion = document.querySelector('.descripcion');
    let resaltado = document.querySelector('.resaltado');
    descripcion.classList.add('resaltado');
    resaltado.classList.remove('resaltado');
}