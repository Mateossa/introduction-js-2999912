// Se va a realizar un reproductor de canciones

// Métodos de propiedad
const player = {
    play : function(id){
        return (`Reproducinedo cancion ${id}`);
    },

    pause : function(){
        console.log('Pausando canción...');
    },
}

player.delete = function(id){
    return `Eliminando cancion ${id}`


}
player.create = function(id){
    return `Creando lista de reproduccion ${id}`
}

console.log(player.play(12));
console.log(player.pause);
console.log(player.delete(34));
console.log(player.create('Pop'));

