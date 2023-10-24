const canvas = document.getElementById("canvas");

const ctx = canvas.getContext("2d");

ctx.lineWidth = "5";
ctx.strokeStyle = "#48e";
ctx.fillStyle = "#26a";
ctx.strokeRect(30,40,400,200);
ctx.fillRect(10,20,400,200);
ctx.lineTo(100,300); // estamos creando los puntos 
ctx.lineTo(120,400);
ctx.lineTo(300,600); // estamos creando los puntos 
ctx.lineTo(120,400);
ctx.stroke(); // dame la linea _____
ctx.closePath(); // estamos frenando la linea
ctx.beginPath(); // estamos abriendo otra linea separa la linea  
ctx.lineTo(80,240); // estamos creando los puntos 
ctx.lineTo(100,400);
ctx.stroke();
ctx.beginPath(); // estamos abriendo otra linea separa la linea
ctx.arc(330,350,100,10,30); // se dibuja un circulo o arco
ctx.stroke();