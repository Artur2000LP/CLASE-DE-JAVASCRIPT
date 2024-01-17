function ajax(){
    const http = new XMLHttpRequest();
    const url = 'http://127.0.0.1:5500/cargadePagina.html';
    

    http.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(this.responseText);
            document.querySelector(".result").innerHTML = this.responseText;
        }
    }
    
    setTimeout(()=>{
        http.open("GET", url);
        http.send();
    },2000);

}

const button = document.getElementById("button");
button.addEventListener("click",()=>{
    ajax();
});