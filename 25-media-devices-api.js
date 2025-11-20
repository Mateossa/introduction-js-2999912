const buttonPermissions = document.querySelector('.button-permissions');
buttonPermissions.addEventListener('click', async() =>{
    try{
        // Solicitar los permisos para el video
        await navigator.mediaDevices.getUserMedia({video: true, audio: true})
    
    const permissions = await Notification.requestPermission();

    // Mostrar el estado del permiso
    console.log('Estado del permiso', permissions);//Ese estado puede 
    //ser 'granted', 'denied', 'default'

    if(permissions === 'granted'){
        new Notification('Permisos concedidos',{
            body: 'Cámara y microfono activados',
            icon: 'mt-09.jpg'
        });
    }else{
        console.log('Permiso de notificción denegado');
    }
    }catch(error){
        console.log(error);
    }
});
