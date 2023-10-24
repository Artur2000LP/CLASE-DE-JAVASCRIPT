"user strict";

// let historial = window.history
// console.log(historial.length);
// console.log(historial.back());
// console.log(historial.forward());
// console.log(historial.go());
// console.log(location.href)
// history.pushState();
// history.state
addEventListener("popstate",(e)=>{
    console.log(e.state)
})