const persona = {
	"nombre completo": {
		nombre: "John",
		apellidos: "Doe"
}
}

function imprimeNombreCompleto(persona){
    console.log(`El nombre completo de la persona es ${persona["nombre completo"].nombre} ${persona["nombre completo"].apellidos}`)
}

imprimeNombreCompleto(persona)