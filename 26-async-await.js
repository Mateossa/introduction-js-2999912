function downloadClients(){
    return new Promise( resolve => {
        // Aquí va el código con la ruta para descargar los clientes
        console.log('Descargando clientes...');

        // Estras lineas se ejecutan despues de pasado un tiempo determinado en la programación 
        setTimeout(() => {
            resolve('Los clientes fueron descargados')
        }, 5000);
    })
}

// async function app(){
//     try {
//         // De esta manera no se ejecuntan las dos promessas al mismo tiempo
//         const clients = await(downloadClients());
//         const orders = await(downloadLastestOrders());
//         console.log('Este código si se bloquea');
//         console.log(clients);
//         console.log(orders);
//     } catch (error) {
//         console.log(error);
//     }

// }

// ====================================================================================
// Otro método
async function app(){
    try {
        // Método mas eficiente, se jecutan las dos al mismo tiempo 
        const result = await Promise.all([downloadClients(), downloadLastestOrders()])
        console.log('Este código si se bloquea');
        console.log(result[0]);
        console.log(result[1]);
    } catch (error) {
        console.log(error);
    }

}
app();
console.log('Este código no se bloquea');

function downloadLastestOrders(){
        return new Promise( resolve => {
        console.log('Descargando pedidos...');

        setTimeout(() => {
            resolve('Los pedidos fueron descargados')
        }, 10000);
    })
}
