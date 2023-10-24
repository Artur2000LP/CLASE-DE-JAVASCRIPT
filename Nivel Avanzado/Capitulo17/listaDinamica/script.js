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
    leerObjetos();
})

IDBRequests.addEventListener("error", ()=>{
    console.log("ocurrio un error al abrir la base de datos");
})

document.getElementById("add").addEventListener("click", ()=>{
    let nombre = document.getElementById("nombre");
    if(nombre.value.length>0){
        if(document.querySelector(".posible") != undefined){
            if(confirm("hay elementos sin guardar: ¿ Quieres continuar?")){
                addObjeto({nombre: nombre.value});
                nombre.value = "";
                leerObjetos();
            }
        }else{
            addObjeto({nombre: nombre.value});
            nombre.value = "";
            leerObjetos();
        }

    }
})

const addObjeto = objeto =>{
    const IDBdata = getIDBdata("readwrite","agregado Correctamente")
    IDBdata.add(objeto);

}
// "readonly"
const leerObjetos = ()=>{
    const IDBData = getIDBdata("readonly");
    const cursor = IDBData.openCursor();
    const fragment = document.createDocumentFragment();
    document.querySelector(".nombres").innerHTML = "";
    cursor.addEventListener("success",()=>{
        if(cursor.result){
            let element = nombresHTML(cursor.result.key, cursor.result.value);
            fragment.appendChild(element)
            cursor.result.continue();
        }else document.querySelector(".nombres").appendChild(fragment);
    })
}

const modificarObjeto = (key, objeto) =>{
    const IDBdata = getIDBdata("readwrite","modificado dorrecta mente")
    IDBdata.put(objeto,key);
}

const deleteObjeto = (key) =>{
    const IDBdata = getIDBdata("readwrite","eliminado Correctamente")
    IDBdata.delete(key);
}


const getIDBdata = (mode,mensaje)=>{
    const db = IDBRequests.result;
    const IDBtransaction = db.transaction("nombres",mode) // readonly solo para leer ; readwrite para leer y escribir 
    const objectStore = IDBtransaction.objectStore("nombres");
    IDBtransaction.addEventListener("complete", ()=>{
        console.log(mensaje);
    })
    return objectStore;
}

const nombresHTML = (id,nam) =>{
    const container = document.createElement("div");
    const h2 = document.createElement("h2");
    const options = document.createElement("div");
    const saveButton = document.createElement("button");
    const deleteButton = document.createElement("button");

    container.classList.add("nombre");
    options.classList.add("options");
    saveButton.classList.add("imposible");
    deleteButton.classList.add("delete");

    saveButton.textContent = "Guardar";
    deleteButton.textContent = "Delete";

    h2.textContent = nam.nombre;
    h2.setAttribute("contenteditable","true")
    h2.setAttribute("spellcheck","false")

    options.appendChild(saveButton);
    options.appendChild(deleteButton);

    container.appendChild(h2);
    container.appendChild(options);

    h2.addEventListener("keyup",()=>{
        saveButton.classList.replace("imposible","posible")
    })

    saveButton.addEventListener("click", ()=>{
        if(saveButton.className == "posible"){
            modificarObjeto(id,{nombre:h2.textContent});
            saveButton.classList.replace("posible","imposible")
        }
    })

    deleteButton.addEventListener("click",()=>{
        deleteObjeto(id);
        document.querySelector(".nombres").removeChild(container);
    })
    return container;
}