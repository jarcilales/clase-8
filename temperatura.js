const temperaturas = [
    19, 24, 45, 30, 10
    ]

function temperaturaAlta(temperaturas){
   let temperaturaMax=0
   for(let i=0; i<temperaturas.length;i++){
       if(temperaturas[i]>=temperaturaMax) {
           temperaturaMax=temperaturas[i];
       }
   }
   console.log(`La temperatura maxima es ${temperaturaMax}`)
}

temperaturaAlta(temperaturas)