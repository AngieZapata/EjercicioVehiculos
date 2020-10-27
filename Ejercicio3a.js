// Mostrar las partidularidades de los tres celulares
// Cada uno debe tener color peso, resolución de pantalla, camara y memoria rAM
// Deben poder prender, reiniciar, tomar fotos y grabar 

// parte B: implementar en un subclass alta gama
// grabar lento, camara extra, reconocimiento facial

// parte C: Crear un sistema que ayude a elegir una aplicacion
// debe contener la cantidad de descargas, puntuación y peso
// se debe poder instalar cerrar y desinstalar

class celulares {

    constructor(color, peso, resoPant, camara, ram) {
        this.color = color;
        this.peso = peso; 
        this.resoPant = resoPant;
        this.camara = camara;
        this.ram = ram;
    }

    informacionCel(){

        return `el color del celular es: ${this.color} <br>
        el peso del celular es: ${this.peso} <br>
        la resolución de pantalla del celular es: ${this.resoPant} <br>
        la camara del celular es: ${this.camara} <br>
        la ram del celular es: ${this.ram} <br> `;
        
    }

    prender() {document.write("Celular prendido"); }
    reiniciar() {document.write("Celular reiniciado")};
    tomarFotos() {document.write("tomar fotos")};
    grabar() {document.write("grabar")}
}

class celGamaAlta extends celulares{

    constructor(color, peso, resoPant, camara, ram, camLenta, camExtra, recFacial){
        super(color, peso, resoPant, camara, ram);
        this.camLenta = camLenta;
        this.camExtra = camExtra;
        this.recFacial = recFacial;        
    }


}

const cel1 = new celulares("negro", "100gr", "1080px", "30Mpx", "2gb");
const cel2 = new celulares("negro1", "120gr", "1080px", "40Mpx", "2gb");
const cel3 = new celulares("negro2", "140gr", "1080px", "50Mpx", "2gb");

document.write(`${cel1.informacionCel()} <br> ${cel2.informacionCel()} <br> ${cel3.informacionCel()}` );

const cel1GA = new celGamaAlta("negro", "100gr", "1080px", "30Mpx", "2gb", "2ms", "15ps", "preciso");
