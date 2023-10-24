const newFechaUTC = dias =>{
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + dias*1000*60*60*24);
    return fecha.toUTCString();
}

const crearCookies = (nam,dias)=>{
    expires = newFechaUTC(dias);
    document.cookie =`${nam};expires=${expires}`;
}

const obtenerCookie = cookieName =>{
    let cookies = document.cookie;
    cookies = cookies.split(";");
    for(let i = 0; cookies.length>i;i++){
        let cookie = cookies.length[i].trim();
        if(cookie.startsWith(cookieName)){
            return cookie.split("=")[1]
        }
    }
    return "no hay cookies con ese nombre "
}


