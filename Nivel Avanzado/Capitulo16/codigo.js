"use strict";
/*
const fecha = new Date(); // date es un a funcion que nos da la fecha
// const fecha = Date().__proto__; // bamos aceder a su prototipo

console.log(fecha.getDate()) // el dia  
console.log(fecha.getDay()) // el dia del mes

// Domingo -> 0
// Lunes  -> 1
// Martes  -> 2
// Miercoles  -> 3
// Jueves -> 4
// Viernes -> 5
// Sabado  -> 6

console.log(fecha.getMonth()) // nos devuelve el mes numerica mente enpesando de 0
console.log(fecha.getFullYear()) // nos da el año
console.log(fecha.getHours()) // nos debuelve la hora
console.log(fecha.getMinutes()) // minutos
console.log(fecha.getSeconds()) // segundos
*/
// bamos programar el relog

const addZeros = n =>{
    if(n.toString().length <2) return "0".concat(n);
    return n;
}

const actualizarHora = ()=>{
    const time = new Date();
    let hora = time.getHours();
    let minutos = time.getMinutes();
    let segundos = time.getSeconds();
    document.querySelector(".hora").textContent = hora;
    document.querySelector(".min").textContent = minutos;
    document.querySelector(".seg").textContent = segundos;
}

actualizarHora();

setInterval(actualizarHora,1000) // que se actualise la hora en cada un segundo


