/*
window.open("https://www.youtube.com/watch?v=xOinGb2MZSk&t=1355s")

window.close();
//para la consola es ventana.close()
ventana.close();//cerrar
ventana.closed(); //verifica si la ventsa esta cerrada 
ventana.stop(); // hacese que la ventana se detenga 
window.alert("Ranncio");//o
alert(rancio);
print();
prompt("Dame un dato ")//nos devuelve sienpre  un string 
let respuesta = confirm("¿estas se gudo que seas salir del sitio web ?");
console.log(respuesta);

const screen = window.screen;
console.log(screen);
document.write(screen); nos devuelve las propiedadees del screen

const screenLeft = window.screenLeft; // es una propiedad de lectura 
const screentop = window.screenTop;
document.write("Left: " + (screenLeft)+"<br>");
document.write("Top: "+ (screentop));

const scrollx = window.scrollX;
const scrolly = window.scrollY;

alert("x: "+scrollx + "  Y: "+scrolly) // nos devuelve el desplasamiento 

const Href =  window.location.href;
document.write(Href)
*/
let href = window.location.href;;
let pathname = window.location.pathname;
let hostname = window.location.hostnamename;
let protocol = window.location.protocol;

let html =`Protocol: <b>${protocol}</b></b><br> `;
 html += `hostname: <b>${hostname}</b></b><br> `;
 html += `Pathname: <b>${pathname}</b></b><br> `;
 html += `URL completa: <b>${href}</b></b><br> `;

document.write(html)