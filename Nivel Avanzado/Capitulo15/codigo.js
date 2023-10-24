/*
_______PROTOTIPOS________
let objeto = { //objeto
    "nombre" : "lucas"
}
console.log(objeto)

let variable = 34 // "estirn " 
console.log(variable.__proto__)

let variable1 = function(){}; // cada ves que creamos una funcion el trototipo lo creamos nosotros mismos 
console.log(variable1.prototype.__proto__)
*//*
let variable = ["predro",21,"lucas",32,null];
variable.reverse(); // nos hace saber que el arreglo ereda del prototipo arreglo que podemos obtener sus metodos como el reverse() que es una funcion 
console.log(variable);

//craamos una clase para saber como se comporta el prototipo
class Objeto {
    constructor(){};
    // metodo
    hablar(){
        console.log("Hola")
    }
}
let objeto = new Objeto();

console.log(objeto.__proto__);
*/
// diferencia entre sobre escribir __proto__ y un metodo 
class Objeto {
    constructor(){};
    // metodo
    hablar(){
        console.log("Hola")
    }
}
let objeto = new Objeto();
objeto.hablar = ()=>{ // a qui lo estoy agregando una funcion al objeto 
    console.log("modificado de afuera ");
}
// objeto.__proto__.hablar = ()=>{ // sobreescribir al objeto hablar
//     console.log("modificado de afuera ");
// }
// console.log(objeto.__proto__)
// objeto.hablar();
// como hacer para que erede sus propiedasdes si no es un pbjeto 
let arr=[];
arr.__proto__ = objeto; // exedemos a sus prototipos de hablar 

console.log(arr)
arr.__proto__.hablar(); // acede al globar al primero que toma 
arr.__proto__.__proto__.hablar(); //axesed al prototipo de su prototipo
// otra manera de axeders al pototipo de su prototipo, al metodo hablar(){} de la clase Ojeto 
arr.__proto__ = objeto.__proto__;
arr.hablar();

//modo estricto es reconmendadiciomo para los desarrolladores 
// ------Medo Estrictos("strict mode")-----------
/* 
"use strict"; // para activar el modo estricto
 let nombre = "lucas";
console.log(nombre)

const obj = {};
Object.defineProperty(obj,'nombre',{value: "pedro",writeable: false});

obj.nombre ="robertico";

console.log(obj.nombre)
*/
   
