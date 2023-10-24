/*
Datos de estructura (JSOM)
para emviar o resivir datos a servidor se tiene que enviar o resivir (des)serializada 
- serialisacion y desserializacion
- Método parse()- combiente un string con estructura JSOM(Deserializar)
- Método Stringify()- combiente un dato de javaScript en un cadena de texto JSOM (Serializa)
- Jsom PolyFill - https://developer.mozilla.org.en-US/docs/web/javaScript/reference/global/JSOM/parse
objeto ={ // este es un objeto
    variable1 : "Pedro",
    variable2 : "Jorge"
};
// este es ESTRUCTURA (JSON) jeysom
objeto ={ //JSOM
   " variable1" : "Pedro",
   " variable2" : "Jorge"
};
// para trabajar con el servidor envios y retornos
const objeto1 ='{ " variable1" : "Pedro", " variable2" : "Jorge" }'; // JSOM serialisado porque es un string
const objeto2 ={ " variable1" : "Pedro", " variable2" : "Jorge" }; //JSOM Desserializado porque tiene un objeto

console.log(typeof objeto1);
console.log(typeof objeto2);
*/
// de que manera podemos serialisar o desserializar 
const objeto ={ " variable1" : "Pedro", " variable2" : "Jorge" };

const serializado = JSON.stringify(objeto);
console.log(typeof serializado);
