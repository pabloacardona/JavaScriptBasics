

// // EXERCISE NUMBER 1

// let myName = "Juan Pablo Arroyave";
// let myAge = 26;

// console.log(`Hola ${myName}, tienes ${myAge} años!`)



// EXERCISE NUMBER 2

const phoneNumber = 3245151814;
const nameExercise2 = "Pablo Cardona";
const booleanExercise2 = true;

console.log(`Nombre: ${nameExercise2} ! ¿Tiene número de telefono: ${booleanExercise2} ! ¿Cuál es? : ${phoneNumber}`);

console.log(phoneNumber);
console.log(nameExercise2);
console.log(typeof(booleanExercise2));


// // EXERCISE NUMBER 3 

// function suma (a, b) {
//     return a + b;
// }

// function resta (a,b) {
//     return a - b;
// }

// function multiplicacion (a,b) {
//     return a * b;
// }

// function division (a, b) {
//     return a / b;
// }

// suma1 = suma(5,4);
// resta1 = resta(847,24);
// multiplicacion1 = multiplicacion(4,5);
// division1 = division(50,2);

// console.log(`Su suma es igual a: ${suma1}`);
// console.log(`El resultado de su resta es: ${resta1}`);
// console.log(`El resultado de su multiplicación es: ${multiplicacion1}`);
// console.log(`El resultado de su división es: ${division1}`);



// // EXERCISE NUMBER 4


// let nameExercise4 = prompt("Ingrese su nombre: ");


// alert(`¡Bienvenid@ ${nameExercise4}!`);
// console.log(`bibibienvenido a la consola viejo ${nameExercise4}!`);


// // EXERCISE NUMBER 5


// function comprobacionExercise5 (a, b) {
//     switch (true) {
//         case a > b:
//             console.log(`El número A: ${a} es mayor al número B:  ${b} `);
//             alert(`El número A: ${a} es mayor al número B: ${b} `);
//             break;
//         case a < b:
//             console.log(`El número A: ${a} es menor que el número B: ${b}`);
//             alert(`El número A: ${a} es menor que el número B: ${b}`);
//             break;
//         default:
//             console.log(`El número A: ${a} es igual que el número B: ${b}`);
//             alert(`El número A: ${a} es igual que el número B: ${b}`);
//             break;
//     }
// }


// let a = Number(prompt("Ingrese PRIMER número: "));
// let b = Number(prompt("Por favor ingrese el SEGUNDO número: "));

// comprobacionExercise5(a,b);


// // EXERCISE NUMBER 6 


// let numberExercise6 = Number(prompt("Ingrese número: "));

// if (numberExercise6 < 0) {
//     console.log(`El número ${numberExercise6} es negativo.`);
// } else if (numberExercise6 > 0) {
//     console.log(`El número ${numberExercise6} es positivo.`)
// } else {
//     console.log(`El número es 0`);
// }


// // EXERCISE NUMBER 7

// let nota = Number(prompt("Ingrese una nota en el rango de 0 a 100"));

// if (nota >= 0 && nota < 101) {
//     if(nota >= 0 && nota < 25) {75
//         alert(`Su nota es D: Reprobado`);
//     } else if (nota > 24 && nota < 50) {
//         alert(`Su nota es C: Pasa raspado`);
//     } else if (nota > 49 && nota < 75) {
//         alert(`Su nota es S: Sobresaliente`);
//     } else if (nota > 74 && nota < 91){
//         alert(`Su nota es A: Gran trabajo`);
//     } else if (nota > 90 && nota < 101) {
//         alert(`Su nota es F: ¡Estudiante destacado, posible BECA!`);
//     }
// } else {
//     alert(`La nota ${nota} está fuera del rango entre 0 y 100`);
// }


// // EXERCISE NUMBER 8 


// let dia = Number(prompt("Ingrese un número del 1(Lunes) al 7(Domingo)"));

// switch (dia) {
//     case dia = 1:
//         console.log("Su día es Lunes");
//         alert("Su día es Lunes");
//         break;
//     case dia = 2:
//         console.log("Su día es Martes");
//         alert("Su día es Martes");
//         break;
//     case dia = 3:
//         console.log("Su día es Miércoles");
//         alert("Su día es Miércoles");
//         break;
//     case dia = 4:
//         console.log("Su día es Jueves");
//         alert("Su día es Jueves");
//         break;
//    case dia = 5:
//         console.log("Su día es Viernes");
//         alert("Su día es Viernes");
//         break;
//     case dia = 6:
//         console.log("Su día es Lunes");
//         alert("Su día es Lunes");
//         break;
//     case dia = 7:
//         console.log("Su día es Domingo");
//         alert("Su día es Domingo");
//         break;
//     default:
//         console.log("Valor inválido: inserte un número entero del 1 al 7.");
//         alert("Valor inválido: inserte un número entero del 1 al 7");
//         break;
// }


// // EXCERCISE NUMBER 9


// let promptUser = Number(prompt("Ingrese numero del 1 al 4: "));

// switch (promptUser) {
//     case promptUser = 1:
//         console.log("Opción 1 seleccionada satisfactoriamente.");
//         alert("Opción 1 seleccionada satisfactoriamente.");
//         break;
//     case promptUser = 2:
//         console.log("Opción 2 seleccionada satisfactoriamente.");
//         alert("Opción 2 seleccionada satisfactoriamente.");
//         break;
//     case promptUser = 3:
//         console.log("Opción 3 seleccionada satisfactoriamente.");
//         alert("Opción 3 seleccionada satisfactoriamente.");
//         break;  
//     case promptUser = 4:
//         console.log("Opción 4 seleccionada satisfactoriamente.");
//         alert("Opción 4 seleccionada satisfactoriamente.");
//         break;
//     default:
//         console.log("Ninguna opción seleccionada: valor inválido.");
//         alert("Ninguna opción seleccionada: valor inválido.");
//         break;
// }