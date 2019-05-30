const alumnos =[{
    nombre : "Juan",
    edad : 25
},
{
    nombre : "Carlos",
    edad : 15
},
{
    nombre : "Juan",
    edad : 75
}
];

function edadMayor(alumnos){

    let edadMax=0;
    let index=0;
    console.log(alumnos[1].edad)
    for(let i=0; i<alumnos.length;i++){
        if(alumnos[i].edad>edadMax){
            edadMax=alumnos[i].edad
            index=i;
        }
    }
    console.log(`El alumno con mas edad es: ${alumnos[index].nombre} y tiene
    ${alumnos[index].edad} años
    `)

  
}

edadMayor(alumnos)