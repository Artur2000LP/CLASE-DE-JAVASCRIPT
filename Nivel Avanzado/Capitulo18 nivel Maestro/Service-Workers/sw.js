// this o self
self.addEventListener("install",()=>{
    console.log("instalando service worker");
})
self.addEventListener("activate",()=>{
    console.log("el servicio Worker esta activo");
})
self.addEventListener("fetch",()=>{
    console.log("service-worker interseptando peticion");
})
self.addEventListener("message",(e)=>{
    console.log("mensage resibido del navegador: ");
    console.log(e.data);
    e.source.postMessage("hola man que tal");
}) 