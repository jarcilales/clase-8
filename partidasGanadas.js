const jugador = {
	nombre: "John Doe",
	partidas: [true, false, false, true]
}

function partidasGanadas(jugador) {
    let contadorGanadas=0;
    for(let i = 0; i<jugador.partidas.length;i++){
        if(jugador.partidas[i] == true){
            contadorGanadas++
        }
    }
    
    console.log("El jugador: "+jugador.nombre+" gano: "+contadorGanadas+" partidas")
}

partidasGanadas(jugador);