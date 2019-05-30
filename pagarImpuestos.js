const listaDeIngresosGastos = {
    ingresos : [14434,2444,2535,35,355,244],
    gastos : [
        {
            concepto : "chelas",
            total : 555
        },
        {
            concepto : "salud",
            total : 535
        },
        {
            concepto : "salud",
            total : 555
        },
        {
            concepto : "salud",
            total : 554
        }
    ]
}

function pagarImpuestos(listaDeIngresosGastos) {
    let ingresos = 0;
    let gastosSalud=0;
    for(let i=0; i<listaDeIngresosGastos.ingresos.length; i++) {
        ingresos+=listaDeIngresosGastos.ingresos[i]
    }

    for(let i=0; i<listaDeIngresosGastos.gastos.length;i++) {
        if(listaDeIngresosGastos.gastos[i].concepto == "salud") {
            gastosSalud+=listaDeIngresosGastos.gastos[i].total;
        }
    }
    console.log(`Joel tiene que pagar ${(ingresos-gastosSalud)*.16} pesos de impuestos`)

}

pagarImpuestos(listaDeIngresosGastos)