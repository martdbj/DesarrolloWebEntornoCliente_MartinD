let clave = Symbol("clave")

let cajaFuerte = {
    modelo: "SergioScript Max Ultra Seguridad",
    fabricacion: 1998,
    
    nevera: {
        modelo: "bosch",
        clave: 1234,
        stock: ["Lechuga", "Muesli", "Platanos", "Tomates Podridos", "Fideos Instantaneos", "Chocolate"]
    },

    desbloquear: function() {

    },

    [clave]: "2356"
}

let MAX_ATTEMPS = 3

// Botones del juego
const siguiente = document.getElementById("siguiente");

// Ocultar Screen1 y mostrar Screen2 
siguiente.addEventListener("click", () => {
    let screen1 = document.getElementById("screen1");
    let screen2 = document.getElementById("screen2");
    screen1.style.display = "none";
    screen2.style.display = "block";
})