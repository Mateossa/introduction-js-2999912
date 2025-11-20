// FETCH API: es una funcion de javascript que permite realizar peticiónes HTTP, incluyendo 
// GET, POST, PUT, DELETE, etc...
// y sobre todo es una API moderna

function getEmployees(){
    // Aquí se copiaria la url en la vida real, ej, https://www.ricoprogramar.com
    const file = 'employees.json';
    
    fetch(file)
    // Se obtienen los datos
    .then( result => {
        return result.json();
    })
    // Se muestran los datos 
    .then(data => {
        console.log(data);
        // Desestructuración de objetos
        const{ employees } = data;
        console.log(employees);
        // Se itera por el arreglo
        employees.forEach( employe =>{
            console.log(employe.id);
            console.log(employe.username);
            console.log(employe.job);

            document.querySelector('.content').textContent += employe.username;
        })
    })
    
}

getEmployees();