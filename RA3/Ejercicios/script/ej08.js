let boton = document.querySelector('button');
let left = screen.width - 500;
let param = `width=500, height=300, left=${left}, top=0`;

let inputText = document.querySelector('input');

let newWin = window.open("about:blank", "Mensaje", param);
boton.onclick = () => window.open("about:blank", "Juan Carlos", param);
if (inputText != null) {
    newWin.document.writeln(inputText.textContent);
}





boton.addEventListener('click', popUp);