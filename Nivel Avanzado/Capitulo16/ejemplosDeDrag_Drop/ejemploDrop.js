"user strict";

const zona = document.querySelector(".zona");

zona.addEventListener("dragover",(e)=>{
   e.preventDefault();
})
zona.addEventListener("drop",(e)=>{
    let n = e.dataTransfer.getData("textura");
    zona.style.background = `url(textura${n}.png)`;
})


for (let i = 1;i < document.querySelector(".texturas").children.length+1;i++) {
    // console.log(i);
    document.querySelector(`.textura${i}`).addEventListener("dragstart",(e)=>transferirTextura(i,e))
    
}

const transferirTextura = (n,e) =>{
  e.dataTransfer.setData("textura",n);
}