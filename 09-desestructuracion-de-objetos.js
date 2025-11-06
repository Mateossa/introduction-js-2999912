// Desestructuracion de objetos en Java Script
// Que es la desestructuracion de objetos?
// En java script es una forma de extraer los valores del objeto, y asignarlos a variables de manera directa y mas sencilla
const person = {
    userName : "Edwar",
    age : 42,
}
console.log(person);
console.log(person.userName);
console.log(person.age);

// Variables o clave son por defecto 
// Desestructuracion 
// const {userName, age } = person;

// console.log(userName);
// console.log(age);

// Desestructuracion con Renombramiento de variables 
// const {userName : personName, age : personAge} = person;

// console.log(personName);
// console.log(personAge);

// Entonces la desestrycturacion no solo simplificxa el acceso a propiedades si no que tambien permite renombrar 
// variables, segun se necesite.

const people = person.userName;

console.log(people);

// Ejemplo de extracción de datos de una respuesta de una API 

const respons = {
    responsStatus : 200,
    data : {id : 1, productName : "Tablet", price : 800},
};

const {responsStatus, data : {productName, price}} = respons;

console.log(`El estado es: ${responsStatus}`);
console.log(productName);
console.log(price); 



