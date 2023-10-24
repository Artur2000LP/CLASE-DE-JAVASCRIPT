"use strict"
/*
 // para  localStorage
// localStorage.setItem("nombre","Pedro") // insertando un dato al local storag
// console.log(localStorage) 
// let nombre = localStorage.getItem("nombre") // obtenemos el valor 
// console.log(nombre) 
 // para  sessionStorage
 sessionStorage.setItem("nombre","Pedro Pico") // insertando un dato al local storag
 console.log(sessionStorage) 
 let nombre = sessionStorage.getItem("nombre") // obtenemos el valor
  
 console.log(nombre) 

 // i si quisiera eliminar 
 setTimeout(()=>{
    let nombre = sessionStorage.removeItem("nombre") // eleimina el valor
 },2000)
// vamos a limpir todo localStorage

setTimeout(()=>{
    let nombre = localStorage.clear() 
 },2000)
--*/
// ejemplo para  cambiar idioma
const modal = document.querySelector(".modal-overlay");
const definirIdioma = ()=>{
    document.querySelector(".en").addEventListener("click",()=>{
        localStorage.setItem("idioma","en");
    })
    
    document.querySelector(".es").addEventListener("click",()=>{
        localStorage.setItem("idioma","es");
    })
}

const cerrarModal =()=>{
   
    modal.style.animation ="desaparecer 1s forwards";
    setTimeout(()=>modal.style.display = "none",1000);
}

const idioma = localStorage.getItem("idioma");

if( idioma === null) definirIdioma();
else {
    console.log(`Idioma: ${idioma}`);
    modal.style.display = "none";
}

