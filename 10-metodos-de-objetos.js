// Metodos de objetos

const product = {
productName : "Multimetro",
price : 150,
available : true,
}

// Con el metodo o función freeze bloqueamos el objetyo para que no se puedan agregar, eliminar, modificar las propiedades propiedades 
Object.freeze(product);

// eliminar ´propiedades 
// delete product.price;
// Agregar propiedades 
// product.color = "Yellow";
// product.quantity = 10;
// Modificar propiedades 
// product.price = 500;

// El metodo seal no permite eliminar ni agregar pero si permite modificar las propiedades del objeto
Object.seal(product);
// eliminar propiedades 
delete product.price;
// Agregar propiedades 
product.color = "Yellow";
// Modificar propiedades 
product.price = 500;
console.log(product);

console.log(Object.isFrozen(product));
console.log(Object.isSealed(product));

