/*
const boton = document.querySelector(".button")
const contenedor = document.querySelector(".Contenedor")

// boton.onclick = ()=>{ //el onclick da un a accion al boton pero ya no se usas mas 
//     alert("Hola crack enora buena ....")
// }
// boton.addEventListener("click",saludar) // para este ojente la funcion flecha no aplica 
// function saludar(){ //suncion normal
//     alert("Hola")
// }
boton.addEventListener("click",(e)=>{
    console.log(e.target)//el target nos muestra codigo del boton 
});

contenedor.addEventListener("click",(e)=>{
    alert("Clik en el contenedor ")
})
boton.addEventListener("click",(e)=>{
    alert("Click en el boton")
})

const boton = document.querySelector(".button1");
const contenedor1 = document.querySelector(".contenedor-1");
const contenedor2 = document.querySelector(".contenedor-2");

// se ejecuta de menos espesifico a mas espesifico 
// contenedor1.addEventListener("click",(e)=>{
//     alert("click en el contenedor rojo")
// },true)
// contenedor2.addEventListener("click",(e) =>{
//     alert("click en el contenedor Azul")
// },true)
// boton.addEventListener("click",(e)=>{ // click
//     alert("click en el boton")
//     e.stopPropagation();//no se propaga mas  solo para boton 
// })

// boton.addEventListener("dblclick",(e)=>{ // dobleclick
//     alert("click en el boton")
//     e.stopPropagation();//no se propaga mas  solo para boton 
// })

// contenedor1.addEventListener("mouseout",(e)=>{ // mouseover,mouseOut
//     alert("click en el Contenedor rojo")
   
// })

contenedor1.addEventListener("mouseleave",(e)=>{ // contextmenu ,y otros
    alert("click en el Contenedor rojo")
   
})
*/
const input = document.querySelector(".input");
const contenedorselec = document.querySelector(".seleccionado");
const inputTeclado = document.querySelector(".input-prueva");

// inputTeclado.addEventListener("keydown",(e)=>{
//     console.log("una tecla fue preciopnada");
// });
// inputTeclado.addEventListener("keypress",(e)=>{
//     console.log("una tecla fue preciopnada y  lo solto ");
// });
// inputTeclado.addEventListener("keyup",(e)=>{
//     console.log("una tecla fue soltada");
// });

//sintaxis para Eventos de la Interfaz-
// window.addEventListener("resize",(e)=>{
//     console.log("se a actualizado la resolucion ");
// })
// input.addEventListener("select",(e)=>{
//     console.log(e.target.selectionStart)
//     console.log(e.target.selectionEnd); //muestar todos sus informacion que puede tener el selector 
// });
//ejemplo
// input.addEventListener("select",(e)=>{ //en la funcion flecha 
//     let start = e.target.selectionStart; //optenemos en indice de la pocicion inicial seleccionado
//     let end = e.target.selectionEnd; //optenemos en indice de la pocicion final seleccionado
//     let textocompleto = input.value; // optenemos toda la cadena del texto de la caja 
//     contenedorselec.innerHTML = textocompleto.substring(start,end); // creamos un html dentro del nuevo contenedor y sol pasamos la cadena seleccionada 

// });
// input.addEventListener("keyup",(e)=>{ //en la funcion flecha 
//     let teclado  = e.key;
//     contenedor = `la ultima tecla pesionada es: <b>${teclado}</b>`;
//     contenedorselec.innerHTML = contenedor;
// });
const temporizador =  setTimeout((e)=>{
document.write("hola")
},2000) // el primer parametro resibe una funcion y el segundo resive el tiempo que se ejecuta en milisengundo 

 clearTimeout(temporizador) // elimina el tenporizador 
 
const intervalo = setInterval((e)=>{ //se ejecuta la funcio infinitas veses 
    document.write("hola ")
},2000)
setTimeout((e)=>{
    clearInterval(intervalo) //eleimina la ejecucion del intervalo
},7000)



