/*
//lo que en realidad hace 
let cade = new String("Cadena de prueba") //su sintaccis original
//lo que javascript automaticamente lo hace 
let cadena = "HOLA COMO ";//sintaxis resumido
let cadena1 = "Estas Hoy"
resul = cadena.concat("Estas") // une las cadenas 
resul1 = cadena.concat(cadena1);// 2 manera de unir las cadenas 
document.write(cade); // mostrando el resultado de la cadena

let cadena = "Pedro es un cojudo tarado e inmaduro, tarado tarado tarado";
let cadena2 = "tiene que estudir para poder corregirse";
let dato = "cojudo "
let cadena3 = " Hola,como,estas,hoy "
let cadena4 = "ABCDEFG"
let cadena5 = "A maria se le escapo un pedo "
let cadena6 = 2485
let cadena7 = ["Pepe","Matias","Andrez"];
// resultado = cadena.startsWith("Pedro"); //si una cadena comienza con los caracteres de otra cadena, devuelve true, sino devuelve fase
// resultado = cadena.endsWith("inmaduro ") //si una cadema termina con los caracteres de otra cadena, devuelve true, sino devuelvve false
// resultado = cadena.includes("cojudo") //busca cadenas
// resultado = cadena.indexOf("e ") //nos devuelve el indice, caso contrario nos devuelve -1 es como fase
// document.write(cadena[26]);// nos devuelve el texto 
// resultado = cadena.lastIndexOf("tarado"); //devuelve el ultomo indice del primer caracter de la cadena, si no existe devuelve -1
// resultado = dato.padStart(20,"mal ") //rrellena al principio de la cadena
// resultado = dato.padEnd(19," Ja ") // el 19 nos dice la longitud de cadena y el que esta entre comilla "" se rrellena, rrellena al ultimo
// resultado = dato.repeat(3)//repite la cadena cuantas veses ceramos
// document.write(resultado);

// resultado = cadena3.split(",")// se esta dividiendo por coma , y lo comvierte al Array 
// resultado = cadena2.split(" ")// divide por espacio, combierte al arreglo o Array
// document.write(resultado[0]); // lo muestra el string del primer arreglo que esta en la pocicion 0
// resultado = cadena4.substring(0,4); // 0 es el caracter que cominza y 4 es el caracter que termina
// resultado = cadena5.toLocaleLowerCase(); // combierte una cadena a misnuscula 
// resultado = cadena5.toUpperCase(); //combierte una cadena a mayuscula  
// resultado = cadena6.toString();// lo comvierte a un string
// resultado = cadena7.toString();//array se comvirtiop en string
// document.write(resultado[2]);//llamando cadena en pocicon 2
// document.write(cadena5.length); // length nos dice la cantida de caracteres hay en un string

// resultado = cadena3.trim(); // saca los espacios de los extremos 
// resultado = cadena3.trimStart(); //elimina los espacion del comienzo
// resultado = cadena3.trimEnd(); //elimina los espacion del final
resultado = cadena.valueOf();
document.write(resultado);
*/
// -- Arrays---
/* 
// Tranformadores__
// - pop() - Elimina el ultimo elemento del array y lo devuelve
// - shift() - elimina el primer elemento de un array y lo devuelve
// - push() - agrega un elemento al array al final de la lista
// - reverse() - invierte el orden de los elementos de un array
// - unchift() - agrega uno o mas elementos (array) localmente y devuelve la nueva longitud del array
// - sort() - ordena los elementos de un arreglo (array) localmento y devuelve el arreglo ordenado
// - splice() - cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos
let nombres = ["Pepe","Matias","Andrez"];
let numeros = [6,2,5,4,3,1];
let letras = ["b","d","f","a","c","e"]

document.write(numeros + "<br>") //mostrar elñ arreglo normal
// let resultado = nombres.pop(); // ellimina el ultimo arreglo
// let resultado1 = nombres.push("Artur"); //agrega al final
// let resultado = numeros.reverse();
// let resultado  = numeros.unshift(9,8,7) // agrega al inicio numeros
// let resultado = letras.sort(); // ordena
// let resultado = numeros.splice(1,2,3); // 1 pocicion de donde inicia y 2 el fin termina de eliminar,y el 3 se agrregaal arreglo
let resultado1 = numeros.splice(1,0,3); // 1 pocicion de donde inicia y 0 no elimina ningunelemento,y el 3 se agrregaal arreglo

// document.write(resultado1 +"<br>"); //nos devuelve el elemento del arreglo que fue eliminado
document.write(numeros) //nos muestra el nuevo arrglo

let nombre = ["Pepe","Matias","Andrez","pedro","juan","Anjelino","Lupe"];

document.write(nombre +"<br>"); // mostrando elemento del arreglo
// let resultado = nombre.join(" - "); // nos da bentajas con en las comas separar con estacio,saltos de linea, etc;
// let resultado = nombre.join(" <br>Elemento: "); //ordenando
// let resultado = nombre.slice(0,2)//nos muestra los elementos del erreglo 0 inicio y 2 fin
let resultado = nombre.slice(0,-1)//nos muestra todos los elementos del arreglo excepto el ultimo por el -1

document.write(resultado); // mostrando el resultado del arreglo 
// document.write("El Elemento: "+resultado);

let nombre = ["Pepe","Matias","Andrez","pedro","juan","Anjelino","Lupe"];
//el filter() y forEach() resiben una funcion 
// nombre.filter( nomb => document.write(nomb+"<br>") //dentro de filter hay una funcion flecha =>
    
//     )

resultado = nombre.filter( nombre => nombre.length > 5 ) //funcion que nos muestra el elemento que tenga una longitud de 5 a mas
document.write(resultado);

// -- metodos Math basico
// let numero = Math.round(9.88);
// document.write(numero)

//generar numeros aleatorios entre 1y 100
// let num = Math.random()*99;
// resul = Math.floor(num +1);
// document.write(resul)

for(var i=0;i<10;i++){
    let num = Math.random()*99;
    resul = Math.floor(num +1);
    document.write(resul+"  ")
}
*/
let num = Math.E
document.write(num)