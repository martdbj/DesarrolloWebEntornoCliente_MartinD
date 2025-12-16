let hervidorSucio = {
    liquido1: "Petróleo",
    liquido2: "Aceite",
    liquido3: "Agua"
};

let hervidorLimpio = {

}

// Screens
const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");

// Botones
//Screen1
const screen1Analizar = document.getElementById("screen1Analizar");
const limpiar = document.getElementById("limpiar");
const finalScreen1 = document.getElementById("finalScreen1");
//Screen2
const respuestaIncorrectaScreen2 = document.getElementsByClassName("respuestaIncorrectaScreen2");
const respuestaCorrectaScreen2 = document.getElementById("respuestaCorrectaScreen2");

// Screen 1
screen1Analizar.addEventListener("click", () => {
    let analizadoParrafo = document.getElementById("analizado");
    let continuacionParrafo = document.getElementById("continuacionScreen1");
    // Mostramos los elementos del hervidor
    for (let key in hervidorSucio) {
        analizadoParrafo.innerText += `${hervidorSucio[key]} \n`;
    }
    continuacionParrafo.style.display = "block";
    screen1Analizar.style.display = "none";
});

let counter = 0;
limpiar.addEventListener("click", () => {
    let mensaje = document.getElementById("mensajeScreen1");
    mensaje.style.display = "block";
    mensaje.innerText = "Intentalo un poco más"
    switch (counter) {
        case 0:
            mensaje.innerText = "Halgo ha salido mal, intentalo otra vez";
            break;
        case 1:
            mensaje.innerText = "Vaya, no funciona. Vuelve a probar";
            break;
        case 2:
            mensaje.innerText = "Estas cosas fallan a veces. Vuelve a intentarlo";
            break;
        case 3:
            mensaje.innerText = "Está tomando un poco más de la cuenta";
            break;
        case 4:
            mensaje.innerText = "Huelo que el final esta cerca";
            break;
        case 5:
            // AÑadimos al hervidor limpio el liquido a través de la desestructuración
            let {liquido3: agua} = hervidorSucio;
            hervidorLimpio.Liquido = agua;
            finalScreen1.style.display = "block";
        default:
            mensaje.innerText = "";
    }
    counter++;
});


// Screen 2
let mapaDeCablesSecuencial = new Map();

mapaDeCablesSecuencial.set('cable1', 'Rojo');
mapaDeCablesSecuencial.set('cable2', 'Azul');
mapaDeCablesSecuencial.set('cable3', 'Verde');
mapaDeCablesSecuencial.set('cable4', 'Amarillo');
mapaDeCablesSecuencial.set('cable5', 'Negro');
mapaDeCablesSecuencial.set('cable6', 'Rojo');       
mapaDeCablesSecuencial.set('cable7', 'Verde');      
mapaDeCablesSecuencial.set('cable8', 'Azul');       
mapaDeCablesSecuencial.set('cable9', 'Blanco');
mapaDeCablesSecuencial.set('cable10', 'Negro');    

respuestaCorrectaScreen2.addEventListener("click", () => {
    let parrafoCorrecto = document.getElementById("parrafoRespuestaScreen2");
    parrafoCorrecto.innerText = "Muy bien, al desenredarlos has visto que un cable no estaba enchufado. Al enchufarlo ha vuelto la luz y ya puedes finalmente cocinar tus fideos instantáneos";
});

// Usamos el array from para convertir la lista que nos devuelve el getElementsByClassName en Array para poder aplicar un foreach
Array.from(respuestaIncorrectaScreen2).forEach(botonIncorrecto => {
    let parrafoIncorrecto = document.getElementById("parrafoRespuestaScreen2");
    botonIncorrecto.addEventListener("click", () => {
        parrafoIncorrecto.innerText = "No ha pasado nada, a lo mejor este no es";
    });
});