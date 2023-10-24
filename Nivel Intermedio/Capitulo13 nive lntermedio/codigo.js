/*AJAX 
_ objeto XMLTTpRquest
_ Enviar Peticiones GET
_ Trabajar el resultado de las Peticiones 
_ objeto ActiveXobject 
_ nnuva forma de trvajar el resultado
_ enviar peticiones POST
_ objeto FormData

x)Libreria Axios
- https://github.com/axios/axios
- Basado en promesas
- objeto axios
- metodo get() y post()
- forma de enviar los datos
- ventajas

const peticion = new XMLHttpRequest();

peticion.addEventListener("load",()=>{
    let respueta;
    if(peticion.status ==200) respueta = peticion.response;
    else respueta = "Lo sinto, no se encontro el resultado";
    // console.log( respueta); // typeof hay se encuentra serializado o esta en estring 
    console.log(JSOM.parse(respueta).nombre);
    // console.log(JSON.parse(respueta))//lo desserialozamos

})

peticion.open("GET","informacion.txt");
peticion.send();

peticion = fetch("https:/reqres.in/api/unknown/2");// el fetch viene por defecto con GET
peticion
    .then(res => res.text())
    .then(res => console.log(JSON.parse(res)))

console.log(peticion);

fetch("https://reqres.in/api/users",{
    method: "POST",
    body: JSON.stringify({
        "nombre" : "Artur",
        "apellido" : "Letona"
    }),
    headers:{"content-type" : "application/json"}
})
.then(res=>res.json)
.then(res => console.log(res));


fetch("https://reqres.in/api/users",{
    method: "POST",
    body:`{ "nombre" : "Artur", "apellido" : "Letona"}`,
    headers:{"content-type" : "application/json"}
})
.then(res=>res.json)
.then(res => console.log(res));

const imagen = document.querySelector(".imagen")
fetch("IMGPrueva.png")
.then(res=>res.blob())
.then(img => imagen.src=URL.createObjectURL(img));



// axios.get("informacion.txt")
axios.post("https://reqres.in/api/users",{
    "nombre" : "Artur"})
.then(res=>console.log(res.data));


const getName =  ()=>{
    fetch("informacion.txt")
    .then(res =>{
        if (res.ok) Promise.resolve(res);
        else Promise.reject(res);
    })
    // .then(res => console.log(res)) //como llamamos antes no se ejecuta para solucionar 
    .catch(e =>console.log(e));
}
getName();
*/
//para solucionar 
const getName = async ()=>{
    let peticion = await fetch("informacion.txt");
    let resultado = await peticion.json();
    console.log(resultado)
    
};
getName() 