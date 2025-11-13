// Métodos para arreglos 


// Arreglo de meses 
const months = ['December', 'November', 'January', 'February'];

// Crear un arreglo de objetos para un carrito de compras
 const shoppingCart = [
    {productName : 'Tablet', price : 800},
    {productName : 'Mouse', price : 50},
    {productName : 'Smart Tv', price : 1500},
    {productName : 'Computer', price : 2000},
    {productName : 'Play Station', price : 1800},
    {productName : 'X-box', price : 1800},
    {productName : 'Nintendo Wii', price : 900},
    {productName : 'KeyBoard', price : 400},
    {productName : 'Sound-bar', price : 700},
 ] 

// Recorre un arreglo y muestra todos los elementos
//  months.forEach(function(month){
//     console.log(month);
//  })

//   months.forEach(function(month){
//     if(month == 'January'){
//         console.log('January si existe');
//     }else{
//         console.log('El mes no existe');
//     }
//     console.log(month);
//  })


// const month = months.includes('December');
// console.log(month);

// El método includes no funciona bien con objetos
// const product = shoppingCart.includes('Tablet');
// console.log(product);
// const result = shoppingCart.some(function(product){
//     return product.productName === 'Tablet';
// })

// const price = shoppingCart.some(function(price){
//     return price.price === '800';
// })
// console.log(price);

// const result = shoppingCart.some(product => product.productName === 'Tablet')

// Método reduce nos sirve para realizar la sumatoriua de los precios 
// const result = shoppingCart.reduce(function(total, product){
//     return total + product.price
// }, 0)

// const result = shoppingCart.reduce((total, product) => total + product.price, 0)

// Método filter

// const result = shoppingCart.filter(product => product.price > 100)
// console.log(result);

// const product = shoppingCart.filter(product => product.productName == 'Sound-bar');
// console.log(product);

// const product = shoppingCart.filter(product => product.productName != 'Sound-bar');
// console.log(product);