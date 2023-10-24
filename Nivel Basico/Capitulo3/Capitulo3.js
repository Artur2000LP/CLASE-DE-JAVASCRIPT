//PROGRAMCION ORIENTADA A OBJETOS 
// -- POO
class animal{ // se esta construyendo una clase 
    constructor(especie,edad,color){ //es su construstor de la clase para inicializar
        this.especie = especie; //inicializando 
        this.edad = edad;
        this.color = color;
        this.informacion = `Soy Un ${this.especie}, tengo ${this.edad} años , y soy de color ${this.color} `;
    }
    //creamos metodo de la clase animal 
    verInformacion(){
        document.write(this.informacion + "<br>")
    }
}
//pa eredar extends
class Perro extends animal{
    constructor(especie,edad,color,raza){
        super(especie,edad,color)//inicializar de la instancia 
        this.raz = raza;
    }
    static ladrar(){ //metodo estatico
        alert("Waw Waw Waw¡¡!!!")
    }
    set setRaza(NvNombre){
        this.raz = NvNombre;
    }
    get getRaza(){
        return this.raz;
    }
}



const perro = new animal("Perro",5,"blanco");//llamando su constructor 
const gato = new animal("Gato",12,"Negro");
const loro = new animal("Loro",9,"verde");

// document.write(perro.informacion + "<br>");
// document.write(gato.informacion + "<br>");
// document.write(loro.informacion + "<br>");

// perro.verInformacion(); //llamando su metodo de animal o instanciando
// gato.verInformacion();
//llamando la clase Prro 
const perrito = new Perro("Perro",5,"blanco","Mimi"); 
const gatito = new animal("Gato",5,"blanco"); 
// perrito.ladrar();

//para llamar al set y get
const perro1 = new animal("Perro",5,"blanco","mimi");
perro1.setRazoa = "Doverman";
document.write(perro1.getRaza)
