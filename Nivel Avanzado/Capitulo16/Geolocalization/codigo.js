"use strict";
// const geolocation  = navigator.geolocation;
// console.log(geolocation);
// ----
const geolocation = navigator.geolocation;
const posicion = (pos)=>{
    console.log(pos); //.coords.latitude
}

const err = ()=> console.log(e);
const options = {
    maximumAge: 0,
    timeout: 3000,
    enableHightAccuracy: true
}
geolocation.getCurrentPosition(posicion,err,options);
