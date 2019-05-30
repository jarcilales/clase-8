const persona = {
	nombre: "John Doe",
bonos: [100, 500, 1300]
}

function sumarBonos(persona){
    let total=0
    for(let i = 0; i<persona.bonos.length;i++){
        total+=persona.bonos[i]
    }
    console.log(`${persona.nombre} tiene ${total} en bonos`)
}

sumarBonos(persona)