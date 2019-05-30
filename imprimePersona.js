const persona = {
	nombre : "John doe"
}

function imprimirNombre(persona) {
    console.log(persona["nombre"])
    console.log(persona.nombre)
}

imprimirNombre(persona);