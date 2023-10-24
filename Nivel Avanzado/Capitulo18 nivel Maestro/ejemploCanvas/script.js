
const canvas = document.getElementById("canvas");
const dif = canvas.getBoundingClientRect();
const ctx = canvas.getContext("2d");

let painting,color,linewdth,difx,dify;

canvas.addEventListener("mousedown",(e)=>{
    difx = e.clientX - dif.left;
    dify = e.clientY - dif.top;
    painting = true;
    color = document.getElementById("color").value;
    linewdth = document.getElementById("lw").value;
    ctx.beginPath();
})

canvas.addEventListener("mousemove", e=>{
    if(painting){
        dibujar(difx,dify,e.clientX - dif.left,e.clientY - dif.top)
        difx = e.clientX - dif.left;
        dify = e.clientY - dif.top;
    }
})
canvas.addEventListener("mouseup",()=>{
    ctx.closePath();
    painting = false;
})
const dibujar = (x1,y1,x2,y2)=>{
    ctx.strokeStyle = color;
    ctx.lineWidth = linewdth;
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
    // ctx.clearPath();
    // ctx.closePath();
    // ctx.beginPath();
}

