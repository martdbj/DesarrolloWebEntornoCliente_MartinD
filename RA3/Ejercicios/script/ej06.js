// Pedimos al usuario los requisitos del ejercicio
let color = prompt("Introduce un nuevo color para el h1")
let resaltado = confirm("Quieres resaltar el texto del párrafo con clase descripción?");

// Seleccionamos el h1 para poder cambiarle de color
let h1Color = document.querySelector('h1');
h1Color.style.color = color;

// Si el usuario acepta resaltar el nuevo texto, añadimos la clase resaltado a la descripción y se la quitamos al texto que esta resaltado por defecto
if (resaltado) {
    // Preguntamos al usuario si quiere ocultar el contenedor
    let ocultar = confirm("Quieres ocultar el div contenedor?");
    let descripcion = document.querySelector('.descripcion');
    let resaltado = document.querySelector('.resaltado');
    
    // Añadimos a el párrafo con la clase descripción la clase resaltado para resaltar el texto
    descripcion.classList.add('resaltado');
    // Quitamos de el p con la clase resaltado la clase resaltado
    resaltado.classList.remove('resaltado');
    if (ocultar) {
        const contenedor = document.querySelector('.contenedor');
        // Ocultamos el div que contenía el p con el anterior resaltado
        contenedor.hidden = true;
    }
}