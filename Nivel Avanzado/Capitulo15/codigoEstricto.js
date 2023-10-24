// ------Medo Estrictos("strict mode")-----------

// "use strict"; // para activar el modo estricto
/*
 let nombre = "lucas";
console.log(nombre)
--
const obj = {};
Object.defineProperty(obj,'nombre',{value: "pedro",writeable: false}); // lo estamos definiendo al objeto

obj.nombre ="robertico";

console.log(obj.nombre)
--
const obj = { nombre : "lucas"};
Object.preventExtensions(obj) // con el preventeExtencions decimos que no lo agrege al objeto
obj.apellido = "letona";

console.log(obj)

--
const str = "hola como estas ";
str.canal = "soy Artur";
console.log(str.canal)
--
function hablar(texto,texto){ // sin usar modo estricto este normal se ejecuta pero usando no nos permite porque la funcion contiene en sus parametros dos variables iguales 
console.log(texto)
}   
hablar("lucas","Artur");
--
let variable = "nombre";
// delete variable; // el delete se usa para eliminar propiedades del objeto no de esa manera 
console.log(variable);
--
const obj = {
    nombre : "Artur"
}
delete obj.nombre

console.log(obj.nombre);
--
// "use strict"; // para activar el modo estricto

function saludar(){
    this.nombre = "Artur";
    this.saludar = function(){
        console.log(`Hola ${this.nombre}`)
    }
}
obj = saludar();
obj.saludar();
--
// "use strict"; // para activar el modo estricto
console.log(0o24) // numeros octales 


arguments = "hola";
eval = "holas"
console.log(arguments)
console.log(eval)
--
// ##  funciones flecha -----

const saludar = ()=>{ // este es una funcion flecha con sentencia 
    console.log("hola")
}
const salud = ()=> console.log("Artur "); //funcion con esxprecion
saludar();
salud();
--
"use strict"; // para activar el modo estricto

const obj ={//utilizando la fincion normal
    nombre : "Artur",
    apellido : "Letona",
    saludar: function (){console.log(`Hola ${this.nombre} ${this.apellido}`)}
}
const obj2 ={//utilizando la funcion flecha
    nombre : "Artur",
    apellido : "Letona",
   
    saludar : ()=>{console.log(`Hola ${this.nombre}`)}
}
window.nombre = "Lupe"
obj.saludar();
obj2.saludar();
--
function construcPresona(nombre,apellido){ // funcion normal
    this.nombre =nombre;
    this.apellido = apellido;
}

const persona = new construcPresona("Artur","Letona");

console.log(persona.nombre);
--
const construcPresona = (nombre,apellido)=>{ // funcion flecha  no puede ser un constructor
    this.nombre =nombre;
    this.apellido = apellido;
}
const persona = new construcPresona("Artur","Letona");
console.log(persona.nombre);
--
this.nombre="Artur"
console.log(window.nombre) // this se esta referenciando a windouns
--
//funciones recursivas - que es una funcion que se llama asi misma 
"strict mode";

const validarEdad = (msg) =>{
    let edad
    try{
        if(msg) edad = prompt(msg);
        else edad = prompt("Introduce tu edad");
        edad = parseInt(edad) //lo estamos convirtiendo a numero
        // isNAN = en caso de que eda no sea un numero thorow = lansa un error o un mensaje 
        if(isNaN(edad)) throw "Introduce un numero para la edad "; // en este caso lo estamos lansando un mensaje msg
        if(edad>18) console.log("sos de mayor de edad")
        else  console.log("sos de menor de edad")
    }catch(e){
        validarEdad(e)
    }
}
    
validarEdad()

--
"use strict"; // para activar el modo estricto

const suma = (frase,...num)=>{ // ...num nos da un arreglo puede resibir n parametros y ...num tiene que estar defimido en el ultimo como parametro 
    let resultado =0;
    for (let i = 0; i < num.length; i++) {
        resultado += num[i];         
    }
    console.log(`${frase} ${resultado} `)
}

suma("Artur",12,32,54) // ba sumar todos los numeros 
--
//84) operacion condicional (ternario)--
//sintaxis
// (condicion) ? ( // si es verdadera
//             elemento1,
//             elemento2
// )
// : (//caso contrario o si es falso 

// ) 
// ejemplo 
let edad = 24;
if(edad>18) console.log("mayor de edad ");
else console.log("Es menor de edad");

// operador ternario
(edad>18) ? console.log("mayor de edad ")
            : console.log("Es menor de edad")
//y si queremos poner mas aciones 
(edad>18) ? ( // si es verdadera true
                console.log("mayor de edad "),
                console.log("puede pasar ")            
                )
                : (//caso contrario o si es falso  false
                console.log("menor de edad "),
                console.log("no puede pasar ") 
                ) 

--
"use strict";
let valor1 = "Valor 1";
let valor2 = "Valor 2";
let valor3 = "Valor 3";
//...expecion  conbierte un array a sus expreciones 
let arr = ["Valor 1","Valor 2","Valor 3"];
console.log(valor1,valor2,valor3); // nos lele un string
console.log(arr) // nos lele un array
console.log(...arr) // ...arr destruye array
--
"use strict";
let arr =["manzana","pera","banana"];
let arr2 =["rojo","verde","amarillo"];
// arr.push(arr2); // lo estamos agregando un array dendro de otro array 
// arr.push(arr2[0],arr2[2]); // un solo array agregando sus elementos del array2
// y si nustro array 2 contiene muchos elementos el codigo alterior seria muy obsoleto para agregar para eso se utilisa en ...elemn
arr.push(...arr2); // lo estamos convirtiendo el array 2 en sus expreciones luego lo estamos agregando 

console.log(arr)
--*/
// para concatenar arrays en otro array distinto
"use strict";
let arr =["manzana","pera","banana"];
let arr2 =["rojo","verde","amarillo"];

let arr3 = [...arr,...arr2];
console.log(arr)
console.log(arr2)
console.log(arr3)