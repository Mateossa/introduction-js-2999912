// Notification API

// Es una interfaz del navegador que permite a las aplicaciones web, mostrar notificaciones 
// nativas del sistema operativo, incluso cuando la ventana no esta activa

// const button = document.querySelector('.button');

// button.addEventListener('click', () => {
//     console.log("You made click, over the button")
// })

// Seleccionar la clase button en el DOM
const button = document.querySelector('.button');

button.addEventListener('click', () => {
    Notification.requestPermission().then(permission => {
        if (permission === 'granted'){
            new Notification("Esta es una notificación", {
                body : "Aprendiendo JS en el SENA",
                icon : "assets/mt-09.jpg"
            })
        }else{
            console.log("Permiso denegado");
        }            
    })
    console.log("Permiso consedido");
})