 /*
const rangoEtario = document.querySelector(".rangoEt") //seleccionando por clase
// parrafo = document.getElementsByTagName("p") //seleccionamos un objeto
rangoEtario.setAttribute("type","text")//cabiamos el type modifica
valorDeAtributo = rangoEtario.getAttribute("type"); // obtenemos el nombre del atributo get solo obtiene 
document.write(" valor " + valorDeAtributo) // mostrando objeto

const subtitulo = document.querySelector(".subtitle")
const titulo = document.querySelector(".Titulo")
const titulo1 = document.querySelector(".Titulo1")
const input = document.querySelector(".Input_nurmal")
// subtitulo.setAttribute("contentEditable","true") // el el primero se espesifica el atributo global y en el segundo el boleano
// subtitulo.setAttribute("dir","rtl")// lo mueve la letra a la derecha 
// subtitulo.setAttribute("hidden","true")//lo hace desaparecer 
// subtitulo.removeAttribute("hidden") // lo estamos eliminando hidden para que buelva aparecer 
// titulo.setAttribute("tabindex","0") // cuando pasas el puentero te nuestra lo que pusiste en el html
titulo1.setAttribute("title","jajaj tt sad") //cundo pasas el puntero se cabia con la palabra jajaj ..

// document.write(input.value) // otra manerea de mostrar el nombre de la clase del input
// document.write(input.type = "texts") // modificamos type
// input.accept ="image/png";
// const input1 = document.querySelector(".caja");
// input1.setAttribute("minlength","6") // deja escrivir como minimo 6 caracteres
// input1.placeholder = "Escribe aqui a que no me puedes escribir" //nos peermite mostar texto dentro de la caja modificable
// input1.required = "requiret"; // el campo tiene que ser llenado es requerido
//estilos
titulo1.style.padding = "30px"; // modificando el pading
titulo1.style.backgroundColor = "#48e"; // modificando el fondo del tamaño de texto

const titulo2 = document.querySelector(".titulo2")
//el clasList tiene muchos metodos vera alguno de los metodos en el conpto6.js
titulo2.classList.add("grande"); //añanade la palabra a la clase
// titulo2.classList.remove("titulo2") // eleimina la clase
//  valor = titulo2.classList.item(0) // 0 es la pocision de la clases y ademas nos devuelve un valor 
// document.write(valor)
// nombredeClase = "grande";
// let valor = titulo2.classList.contains(nombredeClase) // nos devuelve si ese string existe en la clase false o true
// if(valor){
//     document.write(`la clase "${nombredeClase}" existe`);
// }
// else{
//     document.write(`la clase "${nombredeClase}" no existe`);
// }
//replace lo que hace es que si la clase existe elimina y si la clase no existe lo remplasa
valor = titulo2.classList.replace("grande","sol"); // el primero uvica y con el segundo se canvia el nombre unbicado ademas nos devuelve true o false
document.write(valor)

// optencion y modificacion de elementos consepto6.js
const parrafo = document.querySelector(".parrafo")
// let valor = parrafo.textContent //nos devielve el parrafo visible
let valor = parrafo.outerText //nos devuelve el parrafo visivle
let valor1 = parrafo.innerHTML //nos devuelve el sixtaxis de html sin las etiqueta
let valor2 = parrafo.outerHTML //nos devuelve el sixtaxis de html incluido la etiqueta
document.write(valor)
alert(valor)
alert(valor1)
alert(valor2)

const contenedor = document.querySelector(".contenedor") // llamando el <div> por la class
// const item = document.createElement("LI") // creando un elemento de listas y dentro de parentesis siempre ba con mayuscula 
// const textDelItem = document.createTextNode("Este el el iten del nodo"); // creando un nodo en el item
// // para crear un nodo dentro de otro nodo 
// // item.innerHTML = textDelItem;
// // para esto tenemos otro metodo para incertar un metodo dentro de otro nodo
// item.appendChild(textDelItem) 
// contenedor.appendChild(item)// lo estamos poniendo adentro del contenepor de la lista
// console.log(item) // mostrando lo que se internto un metodo dentro de un nodo
 
//otra manera de agregar para n <li> muchas listas 
const fragmento = document.createDocumentFragment();

for(i =0;i<20; i++){
    const item = document.createElement("LI")
    item.innerHTML = "Este es un item de la lista ";
    fragmento.appendChild(item) // estamos poniendo tentro del fragmento la lista
}
console.log(fragmento) // nos muestra en html lo que se añadio
contenedor.appendChild(fragmento) // añade al contenedor para recien mostrarse el la pagina

const contenedor2 = document.querySelector(".contenedor2");
// si te muestra #text es porque hay un espacio dentro del contenedor padre
// const primerHijo = contenedor2.firstChild // llamando al primer hijo del del padre puede ser text, elemento,lista,etc
// const primerHijo = contenedor2.firstElementChild // muestra al primer nodo o elemento del contenedor 
// const primerHijo = contenedor2.childNodes // nos muetra todros los hijos o nodos  del contenedor 
// const primerHijo = contenedor2.children // nos devuelve los hijos del contenedor pero solo los elementos o nodos sin el text o el espacio, solo las etiquetas 
// tambien se puede recorrer los metodos con el forEach() ya aprendido el chilNodes, pero no el children
// primerHijo.forEach(primerHijo => console.log(primerHijo) ); 
const Hijo = contenedor2.children;
//para recorrer el children
for(hijos of Hijo){
    console.log(hijos)
}
// console.log(primerHijo)
*/
const contenedor2 = document.querySelector(".contenedor2"); // uvicamos contenedor
const parrafo = document.createElement("P") // creamos un parrafo
parrafo.innerHTML = "parrafo"; // crea el codigohtml para el parrafo
const h2_nuevo = document.createElement("H2") // creamos h2 de html para remplazar
h2_nuevo.innerHTML = "titulo";
h2_antiguo = document.querySelector(".h1") // uvicamos el h2 antiguo 

contenedor2.replaceChild(h2_nuevo,h2_antiguo) // renplasamos h2nuevo que va primero al antiguo h2antiguo
contenedor2.removeChild(h2_nuevo); //para eliminar el contenedor h2 antiguo

let respuesta = contenedor2.hasChildNodes(); //berifica si tiene hijos o contenido nos devuelve true o false
if(respuesta){
    document.write("el elemento tiene hijos")
}
else{
    document.write("el elemento no tiene hijos ")
}
// console.log(contenedor2.parentElement) // nos muestra al padre en html del contenedor2 es casi lo mismo el parentNode
console.log(h2_antiguo.previousElementSibling)






