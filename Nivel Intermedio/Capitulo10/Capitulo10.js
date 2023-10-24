/*
let nombre = "pedro"
// if(2>2){ //sentencia con condicional 
//     alert(nombre);
// }
alert(nombre);
{ //sentencia de bloques  la ejecucion es concitniua primero el padre luego los hijos 
    let nombre = "Pepe";
    alert(nombre);
    {
        let nombre = "Artur";
        alert(nombre);
    }
}

//sentencia switch
let exp = "banaana";

switch(exp){
    case 
    "banana": document.write("la fruta es banana <br>");
        break;
    case 
    "pera": document.write("la fruta es pera <br>");
        break;
    case 
    "Manzana": document.write("la fruta es Manzana <br>");
        break;
    default: document.write("no pertenese a ningua de las frutas");
   
}


// su sintaxis de try catch

try { //si dentro de try hay un error ejecuta catch
    efege

} catch (error) { // el 'error' es reservado 
    if(3>5){
        console.log("Haocurrido un error ");
    }else{
        console.log("Pito");
    }   
    
}finally{  // se ejecuta si o si || pase lo que pase 
    console.log("Me muestar igual");
        
}


const pruebaTry = ()=>{
    try {
        return 1;
    } catch (e) {
        return 2;        
    }finally{ // aunque el valor de los primeros sea verdaro el fanaly lo sobre escribe al valor retornado 
        return 3;
    }
}
console.log(pruebaTry());
*/
try {
    // throw "Pito"; // el throw nos lansa una exepcion  o nos tira un erro al programa tanbien lansa objetos 
    // throw{ // objeto
    //     error: "NombreDelError",
    //     info:"Informacion del error"
    // }
    throw ["Pedro","Jorge"] // tambien acepta array

} catch (e) { // desde qui puedo acceder al objeto throw // (e ó error) solo asepta esos dos estan reservados 
    // console.log(e)  
    // console.log(e.error) 
    // console.log(e.info)   
    console.log(e[0]) 
}