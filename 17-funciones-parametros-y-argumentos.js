// funciones parametros y argumentos

// Los parametros se pasan en los parentesis de la funcion
function add(num1 , num2){
    console.log(num1 + num2);
};

add(7, 10); //Estos son los argumentos y solo actuan en tiempo de ejecucion
add(4, 10); //Estos son los argumentos y solo actuan en tiempo de ejecucion
add(5, 10); //Estos son los argumentos y solo actuan en tiempo de ejecucion
add(8, 10); //Estos son los argumentos y solo actuan en tiempo de ejecucion
add(9, 10); //Estos son los argumentos y solo actuan en tiempo de ejecucion

const add2 = function(num3, num4){
    const suma = num3 + num4;
    return(suma);
};

add2(5, 1);

const result = add2(5, 1) + 8;
console.log(result);

// Funcion con valores por defecto
function add3(num5 = 9, num6 = 3){
    console.log(num5 + num6);
}
add3();