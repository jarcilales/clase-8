const alumno = {
	nombre: "John Doe",
calificaciones: [7, 10, 9, 6]
}

function calificacionAlta(alumno) {
    let calificacionMasAlta=0;
    for(let i=0; i<alumno.calificaciones.length;i++){
        if(calificacionMasAlta<alumno.calificaciones[i]){
            calificacionMasAlta=alumno.calificaciones[i];
        }
    }
    console.log(`La calificacion mas alta de ${alumno.nombre} es ${calificacionMasAlta}`)
}

calificacionAlta(alumno);