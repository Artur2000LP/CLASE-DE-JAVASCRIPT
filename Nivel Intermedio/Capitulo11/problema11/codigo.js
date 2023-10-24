const materiasHtml = document.querySelector(".materias")

let materias = [
    {
        nombre: "Calculo 1",
        nota: 6
    },
    {
        nombre: "fisica 3",
        nota: 8
    },{
        nombre: "Calculo 5",
        nota: 5
    },{
        nombre: "Lenguage",
        nota: 3
    },{
        nombre: "Programacion",
        nota: 9
    },
];
// let materia = [];
const obtenerMateria = (id)=>{
    return new Promise((resolve,reject)=>{
        materia = materias[id];
        if(materia == undefined) reject("La materia no existe");
        else setTimeout(()=>{resolve(materia)},Math.random()*1000)
    })
}
// obtenerMateria(1).then(res =>console.log(res))
const devolverMateria = async ()=>{
    let materia = [];
    for (let i = 0; i < materias.length ;i++) {
        materia[i] = await obtenerMateria(i);
        // console.log(materia[i]);
        let newHTMLCode =`
        <div class="materia">
            <div class="nombre">${materia[i].nombre}</div>
            <div class="nota">${materia[i].nota}</div>
        </div>`;
        materiasHtml.innerHTML += newHTMLCode;        
    }

}
devolverMateria();