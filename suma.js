const arreglo = [2, 3, 4, 5]

function sumarArreglo(arreglo) {
    let resultado=0;
    for(let i=0; i<arreglo.length;i++){
        resultado+=arreglo[i];
    }
    console.log(resultado);
}

sumarArreglo(arreglo);