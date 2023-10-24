"use strict";

const circulo = document.querySelector(".circulo");
const rectangulo = document.querySelector(".rectangulo");

// circulo.addEventListener("dragstart",()=>console.log(1));
// circulo.addEventListener("drag",()=>console.log(2));
// circulo.addEventListener("dragend",()=>console.log(3));

// para pasaar datos del a otro objeto
circulo.addEventListener("dragstart",(e)=>{
        e.dataTransfer.setData("clase",e.target); // se esta enviando
        // console.log( e.dataTransfer.getData("clase")); 
});


rectangulo.addEventListener("dragenter",()=>console.log(1))
// rectangulo.addEventListener("dragover",()=>console.log(2)) // se ejecuta pero no pa pase al drop
rectangulo.addEventListener("dragover",(e)=>{
    e.preventDefault(); // uno de sus metodos de dragover que da pase al drop
    console.log(2)
}) //
rectangulo.addEventListener("drop",(e)=>{
    // console.log(3) // este no se ejecuta a menos que de pase el dragover
    console.log( e.dataTransfer.getData("clase"));// se esta resiviendo
})
rectangulo.addEventListener("dragleave",()=>console.log(4))


