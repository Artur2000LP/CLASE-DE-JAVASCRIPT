"use strict";
// const IDBRequest = window.indexedDB;
const IDBRequests = indexedDB.open("Arturbase",1);

// console.log(IDBRequest);
IDBRequests.addEventListener("upgradeneeded",()=>{
    const db = IDBRequests.result;
    db.createObjectStore("nombres",{
        autoIncrement: true
    })

})

IDBRequests.addEventListener("success",()=>{
    console.log("todo salio bien ");
})

IDBRequests.addEventListener("error", ()=>{
    console.log("ocurrio un error al abrir la base de datos");
})

const addObjeto = objeto =>{
    const db = IDBRequests.result;
    const IDBtransaction = db.transaction("nombres","readwrite") // readwrite para leer y escribir 
    const objectStore = IDBtransaction.objectStore("nombres");
    objectStore.add(objeto);
    IDBtransaction.addEventListener("complete", ()=>{
        console.log("objeto agregado correctamente");
    })

}

const leerObjetos = ()=>{
    /*const db = IDBRequests.result;
    const IDBtransaction = db.transaction("nombres","readonly");
    const objectStore = IDBtransaction.objectStore("nombres");
    const cursor  = objectStore.openCursor();
    cursor.addEventListener("success",()=>{
        if(cursor.result){
            console.log(cursor.result.value);
            cursor.result.continue();
        }else console.log("todos los datos fueron leidos");
    })*/
    const IDBdata = getIDBdata("readonly","todos los datos fueron leidos")
    const cursor = IDBdata.openCursor();
}

const modificarObjeto = (key, objeto) =>{
   /* const db = IDBRequests.result;
    const IDBtransaction = db.transaction("nombres","readwrite") // readwrite para leer y escribir 
    const objectStore = IDBtransaction.objectStore("nombres");
    objectStore.put(objeto,key);
    IDBtransaction.addEventListener("complete", ()=>{
        console.log("objeto modificado correctamente");
    })*/
    const IDBdata = getIDBdata("readwrite","modificado dorrecta mente")
    IDBdata.put(objeto,key);
}

const deleteObjeto = (key) =>{
    // const db = IDBRequests.result;
    // const IDBtransaction = db.transaction("nombres","readwrite") // readwrite para leer y escribir 
    // const objectStore = IDBtransaction.objectStore("nombres");
    // objectStore.delete(key);
    // IDBtransaction.addEventListener("complete", ()=>{
    //     console.log("objeto Eliminado correctamente");
    // })
    //-----------------optimisado
    const IDBdata = getIDBdata("readwrite","eliminado dorrecta mente")
    IDBdata.delete(key);
}

// optimizando el codigo 
const getIDBdata =(mode,mensaje)=>{
    const db = IDBRequests.result;
    const IDBtransaction = db.transaction("nombres",mode) // readonly solo para leer ; readwrite para leer y escribir 
    const objectStore = IDBtransaction.objectStore("nombres");
    IDBtransaction.addEventListener("complete", ()=>{
        console.log(mensaje);
    })
    return objectStore;
}