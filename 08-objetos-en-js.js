// Objetos en java script


const productName = "Multimetro";
const price = 150;
const available = true;

console.log(productName);
console.log(price);
console.log(available);

const product = {
    productName : "Multimetro",
    price : 150,
    available : true,

}

console.log(typeof product);

// Acceder a las propiedades de un objeto

console.log("The product name is: " + product.productName);
console.log("The price product is: " + product.price);
console.log("is available the product?: " + product.available);

// Agregar propiedades a un objeto

product.image = "multimetro.png"



// Eliminar propiedad de un objeto

delete product.price;

console.log(product);