const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const materia = document.getElementById("materia");
const boton = document.getElementById("btn-enviar");
const resultado = document.querySelector(".resultado");
boton.addEventListener("click",(e)=>{
    e.preventDefault()
    let error = Validarcampos();
    if(error[0]){
        resultado.innerHTML = error[1];
        resultado.classList.add("red")
    }else{
        resultado.innerHTML = "Solicitud enviada correctamente ";
        resultado.classList.add("green") //agregamos una clase llamada green
        resultado.classList.remove("red")
    }
})

const Validarcampos = ()=>{
    let error = [];
    if(nombre.value.length<5 || nombre.value.length>40){
        error[0] = true;
        error[1] = "el nonbre es invalido";
        return error;
    }else if(email.value.length<5 ||
             email.value.length>40 ||
             email.value.indexOf("@") == -1 ||
             email.value.indexOf(".") == -1 
             ){
        error[0] = true;
        error[1] = "el email es invalido";
        return error;
    }else if(materia.value <4 || materia.value>40  ){
        error[0] = true;
        error[1] = "la materia no existe ";
        return error;
    }



    error[0] = false;

    return error;

}