let edad = 25;
let precio = 99.9;
let nombre = 'Pablo Cardona'
let saludo = "Bienvenido a esta página web"
let esMayor = true;
let esMenor = false;
let numerosEnteros = null

console.log(nombre)

let frutas = ["Manzana","Pera","Uva"]

let persona = {
    nombre: "Susana",
    edad: 28,
    saludar: function() {
        return `Hola, tu nombre es ${nombre}`;
    }
}

console.log(persona.saludar())

console.log("Hola mundo")
console.log(2026)

console.log("Su nombre es "+nombre+" y tienes "+edad+" años de edad.")


function sumar (a,b) {
    console.log("El resultado es ")
    return a + b;
}

console.log(sumar(6,7))

let name = "Pablito";
let age = "26";
let city = "Medellín"

console.log("Su nombre es "+ name + ", tienes "+ age + " años de edad, y vives en "+ city)


let carro = {
    marca: "Honda",
    tipoCarro: "4x4",
    tipoCombustible: "Diesel",
    encender: function() {
        return `Su carro marca ${this.marca} es de tipo ${this.tipoCarro} y se maneja con ${this.tipoCombustible} `
    }
}

console.log(carro.encender())


const fruits = ["Manzana","Banano","Pera"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}


let personaEjercicio = {
    nameEjercicio: "Sara",
    alturaEjercicio: "1.74 metros",
    edadEjercicio:"29 años"
}

console.log(personaEjercicio.nameEjercicio)

const numbers = [1,2,3,4,5,6,7,8,9];

for (i=0; i < numbers.length; i++){
    if (i % 2){
        console.log(numbers[i])
    }
}


const dato1 = prompt("Ingrese su dato 1");

alert("Hola mundo")