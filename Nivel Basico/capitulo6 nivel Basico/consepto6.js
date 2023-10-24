/*        CAOPITULO 6
27)  DOM
definicion
consepto extendido
- Nodo - un nodo en el DOM es cualquier etiqueta del cuerpo como un parrafo, el mismo body e incluso las etiquetas de una lista  
*document: el nodo documen es el nodo raiz, apartir del cual derivan el resto de nudos 
*element: nodos definidos por etiquetas html
*text: el texto dentro de un nodo element se considera un nuevo nodo hijo de tipo text (texto)
*Attribute: los atrivutos de las etiquetas definen nodos 
*comentarios y otros: los comentarios y otros documentos como las declaraciones doctype en cabesera de los documentos html generan nodos 


28) ___Document__ metodos de seleccion de elementos 
- getElementById() - selecciona un elemnto por ID
- getElementsByTagName() - seleciona todos los elementos que coencidan con el nombre de la etiqueta especificada 
- querySelector() - devuelve el primer elemento que coensida con el grupo espesificado  de selectores.
- querySelectorAll() - devuelve todos los elementos que considan con el grupo espesificado de selectores 


29) __ Metodo para definir, objeto y eliminar valores de atrivutos.
- setAttribute() - modifica el valor del atributo
- getAttribute() - obtiene el valor del atributo
- removeAttribute()- remueve o elimina el valor del atributo

30 _______Atributos Globales_______
- contentEditable - indica si el elmento puede ser modificable por el usuario (bool) true o false
- dir - indica la direccionalidad del texto  
- hidden - indica si el elemento aun no es, o ya no es, relevante
- style - continene declaraciones de estolos css para ser aplicadas al elemento
- tabindex - indica si el elemento puede optener un focus de input
- title - contiene un texto con informacion relacionada al elemento al que pertenece



31) __Atributos de Inputs__
- className
- value 
- type 
- accept
- form
- minlength - la minima cantidadde caracteres que tiene un imput
- placeholder
- requered

32) ___Atributo Style___
- usos y ejemplos
- propiedades Camel Case

35) __clases classList y Metodos de clasList
- definicion y uso
- add() - aññade una clase
- remove() - elimina o remueve la clase
- item() - devuelve la clase del indice especificado
- contins() - verifica si este elemento posee o no, la clase especificada
- replace() - renplaza una clase por otra 
- toggle() - si no tiene la clase espesificada, la agrega,si ya la tiene, la elimina

36)__ obtencion y modificacion de elementos __
- textContent - devuelve el texto de cualquier nodo
- innerText - devuelve el nodo visivle de un nodo element
- outerText - devuelve el texto que se encuentra en html incluidas las etiquetas 

- innerHTML - devuelve el contenido html de un elemento
- outerHTML - devuelve el codigo html completo del elemento

37)__ creacion de Elementos
- createElements() -
- createTextNode() -
- appendChild() -
-createDocumentFragment() -

38) ___optencion y modificacion de childs(hijo) se les llama con la variavle
clisd se les dise hijo
- firstChild 
- lastChild 
- firstElementChild
- lastElementChild
- childNodes
- children

39) ___Metodo de childs (hijos)
- appendChild() -
- replaceChild() -
- removeChild() -
- hasChildNodes() -

41) __Propiedades de parents (padres)
- parentElement
- parentNode 

42)__propiedades de siblings (hermanos)
- nextSibling
- previousSibling
- nextElementSibling
- previusElementSibling

43) __ nodos extras _
- closest()
____________________________________________________________


*/