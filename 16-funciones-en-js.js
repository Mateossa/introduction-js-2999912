// Funciónes en JV
// Hoisting, es el comportamiento por defecto en el que intérprete mueve las declaraciones de
// // (variables y funciones) a la parte superior de su ámbito(scope), esto se hace antes de ejecutar 
// // el código.

// // Declaración de una función

// function add(){
//     console.log(10 + 20);
// }

// add();

// La exprecion de la funcion 

// const add2 = function(){
//     console.log(30 + 40);
// }
// add2();

// // Función IIFE, ésta funcion se invoca asi misma 
// // Son utiles para propteger variables, para que no se mezclen con las variables de otros archivos 

// (function(){
//     console.log('Esto es una funcion IIFE');
// })();

// console.log(client);

// Diferencia entre funcion y metodo

const num1 = 20;
const num2 = '10';

console.log(num1);
console.log(num2);

// Funcion que convierte String a número

console.log(parseInt(num2));
console.log(num2);

// Un metodo simepre colocamos una variable y despues un punto.
// Método que convierte de numero a String
console.log(num1.toString());