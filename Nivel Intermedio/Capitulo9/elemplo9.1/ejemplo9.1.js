alumnos = [{
    nombre: "Artur letona",
    email: "soyartur@gmail.com",
    materia: "fisica 5"
},{
    nombre: "Rancio",
    email: "rancioxd@gmail.com",
    materia: "fisica 0"
},{
    nombre: "lupez",
    email: "lupe@gmail.com",
    materia: "comunicacion"
},{
    nombre: "perez",
    email: "soyperes@gmail.com",
    materia: "quimica"
},{
    nombre: "cofla",
    email: "soycofla@gmail.com",
    materia: "recreo"
}];
// mostrar en consola
// for (alumno  in alumnos ) {  //recorremos el arreglo 
//     for(datos in alumnos[alumno]){ // optenemos elementos 
//         console.log(alumnos[alumno][datos])
//     }    
// }

const boton = document.querySelector(".boton-confirmar");
const contenedor =document.querySelector(".grid-container");

for (alumno  in alumnos ) {
    datos = alumnos[alumno];
    nombre = datos["nombre"];
    email = datos["email"];
    materia = datos["Materia"];
    htmlCode = `
    <div class="grid-item nombre">${nombre}</div>
    <div class="grid-item email">${email}</div>
    <div class="grid-item materia">${materia}</div>
    <div class="grid-item semana">
        <select class="semana-elegida">
            <option value="1">Semana 1</option>
            <option value="2">Semana 2</option>
        </select>
    </div>`;
    contenedor.innerHTML += htmlCode;

}

boton.addEventListener("clik",()=>{
    let confirmar = confirm("¿real mente quieres confirmar las mesas?");
    if(confirmar){
        document.body.removeChild(boton);
        let elementos = document.querySelectorAll(".semana");
        let semanasElegidas = document.querySelectorAll(".semana-elegida");
        for(elemento in elementos){
            semana = elementos[elemento];
            semana.innerHTML = semanasElegidas[elemento].value
        }
    }
})