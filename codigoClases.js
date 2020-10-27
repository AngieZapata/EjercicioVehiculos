class animal {

    constructor(especie, edad, color) {
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `La escepie es ${this.especie}, edad: ${this.edad} y es de color: ${this.color}`
    }

    verInformacion() {
        document.write(this.info);
    }

}

class perro extends animal {

    constructor(especie, edad, color, raza, nombre) {
        super(especie, edad, color);
        this.raza = raza;
        this.nombre = nombre;
    }

    set setRaza(newRaza){
        this.raza = newRaza;
    }

    get getRaza(){
        return this.raza;
    }
}

// Crear un método fuera de la clase con el método prototype
animal.prototype.diHola = function () {
    alert(`Hola! soy ${this.especie}`)
}

// Instancia
let gato = new animal("gato", "12", "blanco");

console.log(gato);
gato.verInformacion();
gato.diHola();

let perro1 = new perro("perro", "12", "negro", "bernes", "perritu");

perro1.verInformacion();

perro1.setRaza = "BullDog";
alert(perro1.getRaza);