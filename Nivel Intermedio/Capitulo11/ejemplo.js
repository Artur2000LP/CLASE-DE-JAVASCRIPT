/* calbacks : es una funcion dentro de otra funcion; ' es una funcion que llama otra funcion*/
// function prueba(calbacks){
//     calbacks("Pepe");
// }

// prueba(nombre => console.log(nombre));

// trabajamos con calback con claase
class Persona{
    constructor(nombre,instagram){
        this.nombre = nombre;
        this.instagram = instagram;
    }
};

// un array
const datosPersonas =[
    ["Artur Letona","@soyartur"],
    ["Ricardo","@ricardo"],
    ["Riquel","@riquel"],
    ["Richar lopez","@richarlopez"]
];

let personas =[];

for (let i = 0; i < datosPersonas.length; i++) {
    personas[i] = new Persona(datosPersonas[i][0],datosPersonas[i][1]);    
}

// console.log(personas);

//obtenemos datos de la persona con calback en funcion
const obtenerPersona = (id,cb)=>{ // cb es calbak palabra reserbada 
    if(personas[id] == undefined){
        cb("No se a encontrado la persona ");

    }else{
        cb(null,personas[id],id)
    }
}

const obtenerInstragram = (id,cb)=>{ 
    if(personas[id] == undefined){
        cb("No se a encontrado el instagram ");

    }else{
        cb(null,personas[id].instagram)
    }
}

obtenerPersona(1,(err,persona,id)=>{
    if(err){
        console.log(err)
    }else{
        console.log(persona.nombre)
        obtenerInstragram(id,(err,instagram)=>{
            if(err){
                console.log(err)
            }else{
                console.log(instagram)
                
            }
        })
    }
})


