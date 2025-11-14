// El objeto literal es la forma directa de crear un objeto usando las {} pares clave y valor

// const person = {
//     userName : "Peter",
// };

// Objeto constructor: crea objetos mediante una funcion o clase usando new
// const person1 = new Person("Maria", 25, true);

// =================================================================================
// Objeto constructor 
// function Product(productName, price){
//     this.productName = productName;
//     this.price = price;
// }

// const product = new Product('Monitor curvo 24"', 600000);
// const product1 = new Product('Mouse', 600000);
// const product2 = new Product('Keyboard', 600000);

// console.log(product);
// console.log(product1);
// console.log(product2);

// // =================================================================================

// // Prototype: EL prototipo es como un molde o modelo base
// // Cuando se crea muchos obejetos que se parecen no se quieren describir lo mismo muchas veces.

// function Car(brand, color){
//     this.color = color;
//     this.brand = brand;
// }

// // Se define una funcion comun para los carros
// Car.prototype.slowDown = function(){
//     console.log(this.brand + ' está frenando');
// } 

// const car1 = new Car('Kia' , 'Gray');
// const car2 = new Car('Toyota' , 'White');

// car1.slowDown();
// car2.slowDown();

function Person(personName, Age, email){
    this.personName = personName;
    this.Age = Age;
    this.email = email;
}

Person.prototype.textFormat = function(){
    console.log(this.personName + ' es su nombre');
    console.log(this.Age + ' es su edad');
    console.log(this.email + ' es su correo electronico');
}

const person = new Person('Mateo', 18 , 'mateo.ossa101@gmail.com');
const person1 = new Person('Luis', 20, 'luisguevara@gmail.com');
const person2 = new Person('Ashly', 27, 'ashly_1@gmail.com');

person.textFormat();
person1.textFormat();
person2.textFormat();
