class celulares{
    constructor(color,peso,tamaño,ResDeCamara,ram){
        this.color = color;
        this.peso = peso;
        this.resolucionDePantalla = tamaño;
        this.resolucionDeCamara  = ResDeCamara;
        this.Mram=ram;
        this.ensendido = false;

    }
    botonDeEncendido(){
        if(this.ensendido == false){
            alert("Celular Prendido");
            this.ensendido = true;
        }else{
            alert("El Celular Apagado");
        }
    }
    reiniciar(){
        if(this.ensendido == true){
            alert("Reiniciando Celular");
        }else{
            alert("El Celular esta Apagado");
        }
    }
    tomarFoto(){
        alert(`Foto tomada en una resolucion de:  ${this.resolucionDeCamara}`)
    }
    grabarVideo(){
        alert(`Grabando Video en ${this.resolucionDeCamara}`)
    }
    mobileInfo(){
        return `
        color: <b> ${this.color}</b></br>
        Peso: <b> ${this.peso}</b></br> 
        Tamaño: <b> ${this.tamaño}</b></br> 
        Resulocion de Video: <b> ${this.ResDeCamara}</b></br> 
        Memoria Ram: <b> ${this.ram}</b></br>  `;
    }
}
class celularDeAltaGama extends celulares{
    constructor(color,peso,tamaño,ResDeCamara,ram,rdce){
        super(color,peso,tamaño,ResDeCamara,ram);
        this.rdcExtra = rdce;
    }
    grabarVideoLento(){
        alert("Esta Grabando en Camara Lenta");
    }
    reconocimientoFacial(){
        alert("Vamos iniciar un reconocimiento Facial")
    }
    infoAltaGama(){
        return  this.mobileInfo() + `Resolucion de Camara Extra; ${this.rdcExtra}`
    }
}
// celular1 = new celulares("Rojo","150g","5","Full HD","2GB");
// celular2 = new celulares("verde","130g","5","HD","8GB");
// celular3 = new celulares("Azul","180g","5","Full HD","16GB");
// celular1 .mobileInfo(); // no nos muestra porque no nos debuelve nada para poder mostra se hace de la cigiente manera 
// document.write(` 
//     ${celular1 .mobileInfo()} <br>
//     ${celular2 .mobileInfo()} <br>
//     ${celular3 .mobileInfo()} <br>
    
// `)


celular1 = new celularDeAltaGama("Rojo","140g","5.2","4k","4GB","Full hd");
celular2 = new celularDeAltaGama("verde","120g","3.2","5k","8GB","hd");
celular3 = new celularDeAltaGama("Amarillo","146g","6.2","3k","16GB","Full hd")
celular4 = new celularDeAltaGama("Azul","150g","5.8","7k","12GB","hd")

document.write(` 
    ${celular1 .infoAltaGama()} <br> <br>
    ${celular2 .infoAltaGama()} <br> <br>
    ${celular3 .infoAltaGama()} <br> <br>
    
`)
