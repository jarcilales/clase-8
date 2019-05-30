const boletas = [
    {
        nombre :"Jorge",
        materias: [
            {
                nombre: "matematicas",
                calificacion : 9
            },
            {
                nombre: "programacion",
                calificacion : 7
            },
            {
                nombre: "estructura de datos",
                calificacion : 7
            }
        ]
           
        },
        {
            nombre :"Pedrito Fernandez",
            materias: [
                {
                    nombre: "matematicas",
                    calificacion : 5
                },
                {
                    nombre: "programacion",
                    calificacion : 9
                },
                {
                    nombre: "estructura de datos",
                    calificacion : 7
                }
            ]
               
            },
            {
                nombre :"Eva",
                materias: [
                    {
                        nombre: "matematicas",
                        calificacion : 8
                    },
                    {
                        nombre: "programacion",
                        calificacion : 9
                    },
                    {
                        nombre: "estructura de datos",
                        calificacion : 9
                    }
                ]
                   
                }
    ]

    function alumnoMejorPromedio(boletas){
        let mejorPromedio = 0;
        let indexAlumno = 0;
        let promedio=0;
        let total=0;


        console.log(boletas[0].materias.length);

        for(let i=0; i<boletas.length;i++){
            let total=0;
            for(let j=0;j<boletas[i].materias.length;j++){
                console.log(boletas[0].materias[0].calificacion);
                total+=boletas[i].materias[j].calificacion;
            }
            promedio=total/3
            if(promedio>mejorPromedio){
                mejorPromedio=promedio
                indexAlumno=i
            }
        }
    console.log(`El mejor alumno de Joel es ${boletas[indexAlumno].nombre} su promedio es
    ${mejorPromedio}
    `)
    }
    
    alumnoMejorPromedio(boletas)