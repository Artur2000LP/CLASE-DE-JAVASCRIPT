// POMESAS Promise: es un objeto que tiene dos metodos llamados resolve,reject y son asincronas que significa que trabajan en tiempo real 
/*
// demostracion-----
let nombre = "Pedsro";
const promesa = new Promise((resolve,reject)=>{ // sintaxis de la promesa
    if(nombre !== "Pedro") reject("lo siento, en nombre no es pedro");
    else resolve(nombre)
})

promesa.then((resoltado)=>{ // sintaxis para mostra el promesa | el then sirve solo cuando accede al 'else resolve(nombre)'
    console.log(resoltado);
}).catch((e)=>{ // caso contrario el catch sirve para manejar el error 
    console.log(e);
})

//ejemplo------
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
    ["Richar lopez",]
];

let personas =[];

for (let i = 0; i < datosPersonas.length; i++) {
    personas[i] = new Persona(datosPersonas[i][0],datosPersonas[i][1]);    
}

// console.log(personas);

//obtenemos datos de la persona con calback en funcion
const obtenerPersona = (id)=>{
    return new Promise((resolve,reject) =>{ //el res,rej ó resolve,reject son palabras reservadas
        if(personas[id] == undefined) reject("No se a encontrado la persona");
        else { resolve(personas[id]) }
    })
}

const obtenerInstragram = (id)=>{ 
    return new Promise((resolve,reject) =>{ //el res,rej ó resolve,reject son palabras reservadas
        if(personas[id].instagram == undefined) reject("No se a encontrado el instagram");
        else { resolve(personas[id].instagram) }
    })
}
let id=3
obtenerPersona(id).then((persona)=>{ // para aceder a ver la promesa se utilisa el then
    console.log(persona.nombre);
    return obtenerInstragram(id);
}).then((instagram)=>{
    console.log(instagram);
}).catch((e)=>{
    console.log(e);
})

// ejem---
const objeto ={ // este es un objeto
    propiedad1 : "Valor1", // inisialisamos el objeto
    propiedad2 : "Valor2",
    propiedad3 : "Valor3"

};
const obtenerInformacion =()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve(objeto)},3000)
    })
}

// obtenerInformacion().then(resultado => console.log(resultado))
//otra manera de mostrar informacion 
const mostrarResultado = async ()=>{ // funcion acincrona para utilizar el await
    resultado = await obtenerInformacion();
    console.log(resultado);
}
mostrarResultado();
*/
//ejemp-
const obtenerInformacion = (text)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{resolve(text)},Math.random()*3000)
    })
}
//--en esta parte la informacion nos muestra desordenado 
/*
obtenerInformacion("1: Pito").then(resultado => console.log(resultado))
obtenerInformacion("2: Papaya").then(resultado => console.log(resultado))
obtenerInformacion("3: banana").then(resultado => console.log(resultado))
obtenerInformacion("4: Pera").then(resultado => console.log(resultado))
*/
// soucion para que nos muestre de manera ordenada para eso usamos las funciones asincronas  
const MostrarData = async ()=>{
    Data1 = await obtenerInformacion("1: Pito"); // el await : obtine la informacion y hasta que no la obtengas no pasas a la sigiente, si la obitubiste pasa a la sigiente 
    Data2 = await obtenerInformacion("2: banana");
    Data3 = await obtenerInformacion("3: papaya");
    Data4 = await obtenerInformacion("4: Pera");
    console.log(Data1);
    console.log(Data2);
    console.log(Data3);
    console.log(Data4);
}

MostrarData();