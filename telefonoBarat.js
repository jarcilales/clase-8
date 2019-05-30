const stock = [
	{ marca: "Huawei", modelo: "P30", precio: 13500 },
	{ marca: "Apple", modelo: "iPhone x", precio: 20000 },
	{ marca: "Motorola", modelo: "Moto X", precio: 10000 }
]

function traeCelMasBarato(stock) {
    let precioMasbarato=stock[0].precio;
    let index=0;
    for(let i=0; i<stock.length;i++) {  
        if(stock[i].precio<precioMasbarato){
            precioMasbarato=stock[i].precio;
            index=i
        }
    }
    console.log(`El celular mas barato es ${stock[index].marca} ${stock[index].modelo}  ${stock[index].precio} `)
}

traeCelMasBarato(stock)