// This en JS, es una palabra reservada del sistema y no podemos usarla para nombrar variables o funciones 

const reservation3 = {
    userName : "Edwar",
    lastName : "Velásquez",
    userAge : 42,
    totalPay : 420000,
    isPayed : true,


    information : (){
        return(`El cliente ${this.userName} reservó y la cantidad a pagar es ${this.totalPay}`);
    }
}

console.log(reservation3.information());