// Apartado 12a: Clase Vehículo. 
class Vehiculo {
  // Apartado c. Nuevas propiedades
  static totalVehiculos = 0; // propiedad estática
  #kilometros = 0; // propiedad privada

  // Apartado 12a
  constructor(marca, modelo, año) {
    this.marca = marca;
    this.modelo = modelo;
    this.año = año;
    Vehiculo.totalVehiculos++;
  }

  // Apartado 12a: Método para mostrar los campos de la clase
  mostrarInfo() {
    return `Marca: ${this.marca}, Modelo: ${this.modelo}, Antigüedad: (${this.año})`;
  }

  // Apartado 12a: Método para calcular la antigüedad
  calcularAntiguedad() {
    const actual = new Date().getFullYear();
    return actual - this.año;
  }

  // Apartado 12c. getter y setter para los kilómetros
  set kilometros(km) {
    if (km >= 0) this.#kilometros = km;
  }
  get kilometros() {
    return this.#kilometros;
  }

  // Apartado 12c. Método estático para mostrar el total de vehículos
  static mostrarTotalVehiculos() {
    return `Se han creado ${Vehiculo.totalVehiculos} vehículos.`;
  }
}

// Apartado 12b: Clase Coche que hereda de Vehículo
class Coche extends Vehiculo {
  constructor(marca, modelo, año, puertas, combustible) {
    super(marca, modelo, año);
    this.puertas = puertas;
    this.combustible = combustible;
  }

  // Se sobreescribe el método mostrarInfo
  mostrarInfo() {
    return `${super.mostrarInfo()} - ${this.puertas} puertas - Combustible: ${this.combustible}`;
  }
}

let output = document.getElementById("output");

// Alternativa para escribir en el div de salida con una función flecha
const log = (msg) => output.innerHTML += msg + "<br>";

// Pruebas
let v1 = new Vehiculo("Toyota", "Corolla", 2010);
let v2 = new Vehiculo("Ford", "Focus", 2015);
let v3 = new Vehiculo("Tesla", "Model 3", 2022);

// En el apartado 12c se añaden kilómetros de algunos vehículos
v1.kilometros = 15000;
v2.kilometros = 5000;

// Mostramos información por pantalla
log("Nuestros vehículos");
log(`${v1.mostrarInfo()} - ${v1.calcularAntiguedad()} años - ${v1.kilometros} km`);
log(`${v2.mostrarInfo()} - ${v2.calcularAntiguedad()} años - ${v2.kilometros} km`);
log(`${v3.mostrarInfo()} - ${v3.calcularAntiguedad()} años - ${v3.kilometros} km`);

// Ahora creamos un coche en el apartado 12b y en el 12c le añadimos kilómetros
const coche1 = new Coche("Seat", "Ibiza", 2018, 5, "gasolina");
coche1.kilometros = 23000;
log(`${coche1.mostrarInfo()} - ${coche1.calcularAntiguedad()} años - ${coche1.kilometros} km`);

// Comprobamos las clases a las que pertenecen los vehículos
log(`¿Los vehículos y coches pertenecen a la clase vehículo? ${coche1 instanceof Vehiculo && v1 instanceof Vehiculo}`);
log(`¿Los vehículos y coches pertenecen a la clase Coche? ${coche1 instanceof Coche && v1 instanceof Coche}`);

// En el apartado 12c se muestra el total de vehículos creados
log(Vehiculo.mostrarTotalVehiculos());
