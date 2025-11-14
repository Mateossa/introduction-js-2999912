// try chatc
// Es una estructura utilizada para manejar errores en tiempo de ejecución, permitiendo que el programa continue ejecutandoce 
// sin fallar completamente.
// try: Dentro de este bloquee, se coloca el código que puede generar error.
// catch: Captura el rerror si ocurre dentro del bloque try y permite manejarlo.
// finalle(opcional): Ejecuta el código siempre, ocurra o no un error.

const num1 = 20;
const num3 = 30;

console.log(num1);
console.log(num3);

try{
    console.log(num2);
}catch (error){
    console.log('Error, variable no ha sido creada');
}

// ================================================================
 
try {
    console.log(x);
}catch(error){
    console.log('Ocurrio un error' , error.message);
}

// ================================================================

// Un try catch con error personalizado throw

try{
    const age = 18;

    if (isNaN(age)) throw 'La edad dehe ser un número'
    console.log("EDAD VÁLIDA")
}catch (error){
    console.log("Error personalizado", error);
}

// ======================================================================

// Captura en funciones

function divide(a, b){
    try{
        if(b === 0) throw "No se puede dividir sobre cero";
        return a /b;
    }catch(error){
        return "Error" + error;
    }
}

console.log(divide(10, 2));