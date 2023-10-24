/* EJEMPLO NUMERO 1
let free = false;
// utilizando la funcion conflecha 
const validarCliente = (time)=>{
    let edad = prompt("¿cual es tu edad ?");
    if(edad>18){
        if(time>=2 &&time <7 && free == false){
            alert("Puedes pasar gratis por que sos la primer persona despues de 2pm");
            free = true
        }else{
            alert(`son las ${time}:00Hs y puedes pasar, pero tienes que pagar la entrad`);
        }
    }else{
        alert("Mira papu, sos menor de edad por ende no vas a pasar, Maquinola")
    }
}

validarCliente(23);
validarCliente(24);
validarCliente(0.2);
validarCliente(0.6);
validarCliente(1);
validarCliente(2);
validarCliente(2.4);
validarCliente(3);
*/
//EJEMPLO NUMERO 2 ASISTENSIAS

let cantidad = prompt("¿cuantos alumnos son?");
let alumnosTotales = [];

for (i = 0; i < cantidad; i++) {
	alumnosTotales[i] = [prompt("Nombre del alumno " + (i+1)),0];
}

const tomarAsistencia = (nombre,p)=>{
	let presencia = prompt(nombre);
	if (presencia == "p" || presencia == "P") {
	    alumnosTotales[p][1]++;
	}
}


for (i = 0; i < 30; i++) {
	for (alumno in alumnosTotales) {
	tomarAsistencia(alumnosTotales[alumno][0],alumno);
	}
}


for (alumno in alumnosTotales) {
	let resultado = `${alumnosTotales[alumno][0]}:<br>
    ________Presentes: <b>${alumnosTotales[alumno][1]}</b> <br>
    ________Ausencias: <b>${30 - alumnosTotales[alumno][1]} </b>`;
	if (30 - alumnosTotales[alumno][1] > 18) {
	resultado+= "<b style='color:red'>REPROBADO POR INASISTENCIAS</b><br><br>";
	} else {
	resultado+= "<br><br>"
	}
	document.write(resultado)
}