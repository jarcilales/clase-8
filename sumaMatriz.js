const arreglo = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    ]

function sumaMatriz(matriz) {
    let resultado = 0;
    for(let i = 0; i<arreglo.length; i++) {
        for(let j=0; j<arreglo[i].length;j++){
            resultado+=arreglo[i][j];
        }
    }
    console.log(resultado);
}

sumaMatriz(arreglo);