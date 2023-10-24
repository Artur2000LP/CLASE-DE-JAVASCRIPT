// // console.log(navigator.serviceWorker);
// if(navigator.serviceWorker){
//     console.log("tu navegador soporta el service workers")
// }
if(navigator.serviceWorker){
    navigator.serviceWorker.register('sw.js');
}

navigator.serviceWorker.ready.then(res => res.active.postMessage("hola bro como estas"));

navigator.serviceWorker.addEventListener("message",(e)=>{
    console.log("mensaje resibido del service worker:");
    console.log(e.data);
})