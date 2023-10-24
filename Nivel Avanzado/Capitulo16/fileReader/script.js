"use strict";

const archivo = document.getElementById('archivo');
archivo.addEventListener("change", (e) => {
	// leerArchivo(archivo.files[0]);
	leerArchivos(archivo.files);
})

// estamos leeendo un archiovo 
// const leerArchivo = ar =>{
//     const reader =  new FileReader();
//     reader.readAsText(ar);
//     reader.addEventListener("load", (e) => {
//         console.log(JSON.parse(e.currentTarget.result));

//     });
// }
// para leer muchos archivos 
// const leerArchivos = (ar) =>{
//     for (var i = 0; i < ar.length; i++) {
//         const reader = new FileReader();
//         reader.readAsText(ar[i]); //leeemos un txt readAsText
//         reader.addEventListener("load", (e)=>{
//             console.log(JSON.parse(e.currentTarget.result));
//         })

//     }
// }
// cargamos imagenes o lo leemos los imagenes
const leerArchivos = (ar) => {
	for (var i = 0; i < ar.length; i++) {
		const reader = new FileReader();
		reader.readAsDataURL(ar[i]); // leemos un video o imagenes  readAsDataURL
		reader.addEventListener("load", (e) => {
			let newImg = `<img src='${e.currentTarget.result}'>`;
			document.querySelector(".resultado").innerHTML += newImg;
		})

	}
}

