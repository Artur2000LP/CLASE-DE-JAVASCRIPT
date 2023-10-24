//-- los array
/*
// variable  = "contenido " //automatica mente se esta usando el var porque es generico
//ejem  var variable  = "contenido "
// let variable = true;
// Array = ["Artur",22,"Abancay"];

let frutas = ["papaya","Piña","manzana","Manyo"]; // arreglos 
document.write(frutas[2]) //mostrando enla pocicion "2" se empiesa de 0 la poscc

 //estos son los array asosiativos
let pc1 = { //otra manera de nombrar arreglos 
    nombre: "ArturPc",
    procesador: "intel corei7",
    ram: "32GB",
    espacio: "1TB"
}

let  nombre = pc1["nombre"];
let procesador  = pc1 ["procesador"];
let ram = pc1[ "ram"];
let espacio = pc1 [ "espacio"];
//mostrando nuestro arreglo
frase =`el nombre de mi pc es : <b> ${nombre} </b> <br>  
        el procesador es: <b> ${procesador} </b> <br>
        la memoria ram es: <b> ${ram} </b> <br> 
        el espacio de disco es de: <b> ${espacio} </b> `;
document.write(frase);

// -- bucles e interaccion

let numer = 0;
if(numer<1){ //si la condocion se cumple ejecuta solo una vez
    numer++;
    document.write(numer);
}

let numero = 0;

while(numero <10){ //mientras que la condicion se cumpla sige ejecutandose hasta que la condicion nop se cumpla 
    numero++;
    document.write(numero);
}


// let numero = 0;
// do{
//     document.write(numero);
//     numero++;
// }while(numero <6)

let numero = 0;

while(numero <100){ //mientras que la condicion se cumpla sige ejecutandose hasta que la condicion nop se cumpla 
    numero++;
    document.write(numero);
    if(numero == 10){  //esta sentencia hace que el programa salga del bucle
        break; //Finalisa el bucle
    }
}
document.write("  <br> La sentencia termio ")

for(let i=0; i<6; i++){ //para una sentencia 
    document.write(i +"<br>")

}

for(let i=0; i<=6; i++){ //para una sentencia 
   
    if(i == 3){  //esta sentencia hace que el programa pase al sigiente o se saltee
        continue; //se saltea esa operacion 
    }
    document.write(i +"<br>")
}

let animales = ["gato","Perro","Tigre","Leon"];
animales.edad=20;

for(animal in animales){ //el in, muestrame todos los indices del arreglo
    document.write(animal + "<br>")
}

document.write("<br>");

for(animal of animales){ // el of, muestrame los elementos del arreglo
    document.write(animal + "<br>")
}

document.write(animales.edad)

array1 = ["maria","peres","juan","Roberta"];
array2 = ["Pedro","Marcelo",array1,"Sofia"];

forRancio: // centendia lebel que engloba a todo el for 
for(let array in array2){
    if(array == 2){
        for(let array of array1 ){
            //break forRancio;
            continue forRancio;
            document.write(array + "<br>");
        }
    }else{
        document.write(array2[array] +"<br>");
    }
}

// -- funciones 
function saludar(){ //creacion de una funcion o estamos definindo
    respuesta = prompt("¡hola ¿como fue tu dia?");
    if(respuesta == "bien"){
        alert("Me Alegro");
    }else{
        alert("una pena ");
    }
}

saludar(); //estamos llamando la funcion

function saludar(){ // funcion sis paramnetros 
    return 3; // finalisa la funcion 
    alert("hola"); // ya no se ejecuta porque ya finaliso en el anterior 
}
let saludo =  saludar();

document.write(saludo)

//2 forma de crear una funcion
let a,b;
function sumar( num1, num2){
    let res = num1+num2;
    return res;
}
document.write("Resul: "+(sumar(12,14)));

// var es una variable global aunque este nombrado dentro de la funcion se conbierte en la variable global 
// let es definido para una funcion en espesifica solo existe dentro de una funcion ;

function saludar( nombre ){
    let nomb = `hola ${nombre} ¿como estas ?! <br>`;
    document.write(nomb);
}
saludar("Pedro")

//3 forma de crear una fiuncio 
const  saludar = function( nombre ){
    let nomb = `hola ${nombre} ¿como estas ?! <br>`;
    document.write(nomb);
}
saludar("peres")

// 4 forma de crear una funcion 
const  saludar = ( nombre )=>{ // funcion flecha =>
    let nomb = `hola ${nombre} ¿como estas ?! <br>`;
    document.write(nomb);
}
saludar("peres")
*/
//tambien tiene algunos beneficion las funciones flecha 
// const saludar = nombre => { //el parentecis se puede quitar cuando hay un solo bariable 
//     let nomb = `hola ${nombre} ¿como estas ?! <br>`;
//     document.write(nomb);
// }
//tambien se puede reducir 
// const saludar = nombre => document.write(nomb);// es una funcion y normal nos retorna 

