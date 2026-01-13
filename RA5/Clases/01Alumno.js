class Vehiculo {
    #kilometros = 0;
    static totalVehiculos = 0;

    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        Vehiculo.totalVehiculos++;
    }

    get kilometros() {
        return this.#kilometros; 
    }

    set kilometros(value) {
        if (value > 0) this.#kilometros = value;
    }

    mostrarInfo() {
        return (`Marca: ${this.marca} <br>\nModelo: ${this.modelo} <br>\nAño: ${this.ano}`);
    }

    calcularAntiguedad() {
        const now = new Date().getFullYear();
        return now - this.ano;
    }

    static mostrarTotalVehiculos() {
        return Vehiculo.totalVehiculos;
    }
}

class Coche extends Vehiculo {
    constructor(marca, modelo, ano, puertas, combustible) {
        super(marca, modelo, ano);
        this.puertas = puertas;
        this.combustible = combustible;
    }
    
    mostrarInfo() {
        return `${super.mostrarInfo()} <br>\nPuertas: ${this.puertas} <br>\nCombustible: ${this.combustible}`
    }
}

let parrafo = document.querySelector("#output");

let test1 = new Vehiculo("Ford", "Fiesta", 2005);
let test2 = new Vehiculo("Toyota", "Yaris", 2017);
let test3 = new Vehiculo("Toyota", "Corola", 2025);


parrafo.innerHTML += `${test1.mostrarInfo()} <br>Antigüedad: ${test1.calcularAntiguedad()} años<br><br>`;
parrafo.innerHTML += `${test2.mostrarInfo()} <br>Antigüedad: ${test2.calcularAntiguedad()} años<br><br>`;
parrafo.innerHTML += `${test3.mostrarInfo()} <br>Antigüedad: ${test3.calcularAntiguedad()} años<br><br>`;  


let coche1 = new Coche("Ford", "Fiesta", 2010, 4, "60L");
parrafo.innerHTML += `${coche1.mostrarInfo()} <br>Antigüedad: ${coche1.calcularAntiguedad()} años<br><br>`;  

coche1.kilometros = 200;
alert("Nuevos kilometros coche: " + coche1.kilometros);

alert("Total de vehículos: " + Vehiculo.mostrarTotalVehiculos());