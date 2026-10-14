const prompt = require('prompt-sync')();



let val1 = Number(prompt("Ingrese valor 1: "));
if (val1 >= 1000) {
    console.log("El número es mayor o igual a 1000 ");
} else {
    console.log("El número es menor a 1000");
}



let text = prompt("Ingrese texto: ");
if(text == "Hola") {
    console.log("El texto es igual a Hola");
} else {
    console.log("El texto es diferente de Hola");
}

 

let compararNumeros = prompt("Ingrese numero: ");
if (compararNumeros >= 10 && compararNumeros < 51) {
    console.log("El numero está entre 10 y 50")
} else {
    console.log("El numero NO está entre 10 y 50")
}
