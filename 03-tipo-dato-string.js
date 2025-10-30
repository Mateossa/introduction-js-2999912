// String o cadena de texto.

const userName = "Carlos";
const name1 = 'Carlos';

console.log(typeof userName);
console.log(typeof userName);

// Dos formas no tan comúnees
const userName2 = String("Vero");
// Creamos una variable mediante el contructor instanciando a partir de la palabra new.
// Instanciar es el proceso mediante el cual yo creo un objeto a partir de una clase.
const userName4 = new String("Vero");

console.log(userName2);
console.log(typeof userName4);

let product = 'Televisor de 50pg"';
console.log(product);

let product2 = "Televisor de 50pg\"";
console.log(product2);

let phrase = "Estamos aprendiendo JS en CDITI";
console.log(phrase.length);
// Busca si una cadena existe y me da una indexación.
// Si el resultado es menor que 0, la cadena No existe.
console.log(phrase.indexOf("JS"));

// Método mas moderno para buscar si existe una cadena.
console.log(phrase.includes("JS"));