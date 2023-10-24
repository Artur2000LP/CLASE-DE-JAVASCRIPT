/*
alert("hola Artur bienbenido a javascript")
recipiente = "Pedro" //variable 
alert(recipiente)
String = "Cadena de texto"
Number = 19;
Boolean = true //boleanos 1 o 0 ; true,falce
// para declarear variables se declara de tres maneras 
//var, let, const
var numero1 = 12; //global
const nomb = "Arturo" //variavle constante 
let numero; // numero sin definir, let en especificado
numero =29;
alert(numero)
let n =null; //le declaeamos un vacio
alert(n)
let nombre = prompt("Dime tu nombre");//esta almacenando una variable 
alert("hola "+nombre)//concatena el variable 
*/
// ---- operaciones aritmetoica 
/*
let number = 12;
// = += -= *= /= %= 
// **=  es una potencial 
number <<= 4; // se esta desarrollando operaciones artmeticas 
document.write(number)//muestra enn la pagina 
/*
/*--- Concatenacion  */
/*saludo = "¡hola Artur !";
pregunta = "¿como estas ?";
frase = saludo + pregunta //se concatena string 
document.write(frase)
n = 12;
b = 9;
resul = ""+ n + b // se esta concatenando numeros por aver un strtring o una caderna 
document.write(resul);

//otra manera de concatenar 
numbr = "12"; //cadena
numbr1 = 17; //numero
res = numbr.concat(numbr1); //utilizamos la funcion concat
document.write(res)

//otra manera de concatenar 
nombre = "Artur letona";
frase = `soy   ${nombre} y estoy caminando `; // concatenando string con el simbolo dolar 
// y se usa utilizando bactis o asente fuerte o asento grabe
document.write(frase)

//escape de comilla dobles y comillas simples 
nombre = " Artur Letona ";
//frase = "Mi nombre es 'Artur' y soy crack ";//escape de comillas simples 
frase = 'Mi Nombre es "Artur" y soy un crack';//escape de comillas dobles 
document.write(frase)

//----operadores 

let num = 23;
let num1 = 12;
let num2 = "12"

document.write(num == num1);//== operador que compara si es igual 
document.write(num != num1);//!= op que compara si es distinto
document.write(num1 === num2);// === op que comp si es igual numero y de uigual tipo 
document.write(num1 !== num2);// lo contrario del anterior
document.write(num1 < num2); 
document.write(num1 > num2);
document.write(num1 <= num2); 
document.write(num1 >= num2);

// -- operadores logicos 
// let valor = true;
// let valor2 = true;

// let resul = valo && valor2; // ^ el i nos devuelve falso si alguno de ellos es falso
// let resul1 = valo || valor2; // o el o nos devuelve verdadero si alguno de ellos es vendadero 
// let resul2 = !valor2; // nos devuelve lo contrario 
num1 = 12;
num2 = 24;

afirmacion = num1 > num2;
afirmacion2 = num1 == num2;

document.write(afirmacion&&afirmacion2)
*/
// -- camel case
// decimeAlgoPorfavor la primera es con minuscula luego todas las palablas es con mayusculas 
// -- condisionales 
if(10>15){ // si la condision se cumple 
    alert("Hola")
}else{ //caso contrario otra condicion
    if(1<2){
        alert("Estas en caso contrario ")
    }
   
}






