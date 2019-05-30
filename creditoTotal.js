const persona = {
	nombre: "John Doe",
tarjetas: [
 {
	credito: 19000 
},
{
	credito: 50000
}]
};

function sumarCredito(persona) {
    let creditoTotal=0;
    for(let i=0; i<persona.tarjetas.length;i++){
        creditoTotal+=persona.tarjetas[i].credito;
    }

    console.log(`${persona.nombre} tiene ${creditoTotal} como credito total`)
}

sumarCredito(persona)


