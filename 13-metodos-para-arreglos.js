// Métodos para arreglos 
const numbers = [2, 5, 8, 23, 56];

// Agregar elementos a mi arreglo, pero se requiere conocer la longitud del arreglo.
numbers [5] = 100;

// Agrega elementos al final del arreglo
numbers.push(1000, 500);

// Método para agregar elementos al inicio del arrreglo 
numbers.unshift(-2, -1, 0);

// Nos quita el ultimo elemento del arreglo
numbers.pop();

// Elimina el primer elemento del arreglo
numbers.shift();

// Método splice elimina todos los elementos a partir del indice asignado
numbers.splice(3);
console.table(numbers);

// ===============================================

const fruits = new Array("Apple", "Pear", "Pinneaple", "Greap");

fruits.push("Sandia");

fruits.unshift("Melocoton");

fruits.splice(3);
console.table(fruits);

