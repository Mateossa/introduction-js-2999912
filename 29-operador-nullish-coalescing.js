// Operador nullish coalescing
// Sirve para dar un valor por defecto , cuando algo es null o undefined

// Estructura: valor1 ?? valor2

// 1. si valor 1 no es null ni undefined, se usa valor 1
// 2. si valor 1 es null o undefined, se usa valor 2

// Ejemplo 
let userName = null;
let user = userName ?? "Invited";
console.log(user);