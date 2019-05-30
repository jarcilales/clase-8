const stores = [{
    name: "Amazon",
    stock: [
            { marca: "Huawei", modelo: "P30", precio: 11999 },
            { marca: "Apple", modelo: "iPhone x", precio: 18000 },
            { marca: "Motorola", modelo: "Moto X", precio: 9000 }
    ]
    },
    {
    name: "Liverpool",
    stock: [
            { marca: "Huawei", modelo: "P30", precio: 13500 },
            { marca: "Apple", modelo: "iPhone x", precio: 20000 },
            { marca: "Motorola", modelo: "Moto X", precio: 10000 }
    ]
    }
    ]

    function cotizarCelularTiendas(stores){
        let precioMasbarato=stores[0].stock[0].precio
        let indextienda=0;
        let indexCelular=0;
        for(let i=0; i<stores.length;i++){
            for(let j=0; j<stores[i].stock.length; j++ ){
                if(stores[i].stock[j].precio<precioMasbarato){
                    indexCelular=j;
                    indextienda=i;
                    precioMasbarato=stores[i].stock[j].precio;
                }
            }
        }

        console.log(`El celular mas barato esta en ${stores[indextienda].name}`)
        console.log(`Marca ${stores[indextienda].stock[indexCelular].marca}`)
        console.log(`Marca ${stores[indextienda].stock[indexCelular].modelo}`)
        console.log(`Marca ${stores[indextienda].stock[indexCelular].precio}`)

    }
    
    cotizarCelularTiendas(stores)