
class Persona {
    nombre;
    apellido;
    edad;
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    getDetalles() {
        console.log("nombre: " + this.nombre + " " + this.apellido + " de" + this.edad + "años");
    }
}

class Jugador extends Persona {
    posicion;
    constructor(nombre, apellido, edad, posicion) {
        super(nombre, apellido, edad);
        this.posicion = posicion;
    }
    getDetalles() {
        super.getDetalles();
        console.log(" Su posición es ");
    }

}



class Entrenador extends Persona {
    añosExp;
    idFederacion;
    constructor(nombre, apellido, edad, añosExp, idFederacion);
    super(nombre, apellido, edad){
    this.añosExp = añosExp;
this.idFederacion = idFederacion;
if (idFederacion == " ") { 
    let autoId= Math.floor(Math.random() * 100);
        console.log(autoId);

    
}
    }
    getDetalles(){
        super.getDetalles();
        console.log("IdFederacion: " +this.idFederacion+ "cuenta con"+this.añosExp+ " años de experiencia");
    }
}



class Equipo extends Persona {
let team={
    posicion:"";
    añosExp:"";
    idFederacion:0;
}
 constructor   

}







