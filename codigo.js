// Clase que define el objeto vehiculo, para permitir crear multiples vehiculos y generar todos los reportes

class vehiculo {

    constructor(fechaPuestaMarcha, promKmDiarios, placa, fechaLimite) {
        this.fechaPuestaMarcha = fechaPuestaMarcha;
        this.promKmDiarios = promKmDiarios;
        this.placa = placa; 
        this.fechaLimite = fechaLimite;
    }

}

// Toma de variables desde la pantalla

var boton_guardarVehiculo = document.getElementById("ingresoDatos_guardar");
var boton_generarReporte = document.getElementById("ingresoDatos_generar");

let placa = document.getElementById("ingresoDatos_placa")
let marcha = document.getElementById("ingresoDatos_PM");
let recorridoDiario = document.getElementById("ingresoDatos_promKM");
let fechaLimite = document.getElementById("ingresoDatos_limite");


let bandera = 0;
let arrayVehiculos = [];

// funcion que permite agregar un objeto de la clase vehiculo al array de vehiculos en la ultima posición

boton_guardarVehiculo.onclick = function() {
   
    let marcha1 = marcha.value.split("-");
    let rD1 = recorridoDiario.value;
    let placa1 = placa.value;
    let limite = fechaLimite.value.split("-");

    const vehiculo1 = new vehiculo(marcha1, rD1, placa1, limite);    

    arrayVehiculos[bandera] = vehiculo1;

    bandera++;
}


//Lee el boton de generar reporte y calcula las reparaciones correspondientes

boton_generarReporte.onclick = function() {

    for (let i = 0; i < arrayVehiculos.length; i++) {
        let kilometros = parseInt(arrayVehiculos[i].promKmDiarios);
        let fechaInicio = arrayVehiculos[i].fechaPuestaMarcha;
        let fechaLimite1 = arrayVehiculos[i].fechaLimite;
        
        document.write(`Las fechas de reparación para el vehiculo de placa ${arrayVehiculos[i].placa} son: <br> `);
        reparaciones(kilometros, fechaInicio, 5000, 50, fechaLimite1);

        document.write(`Las fechas de mantenimiento de la caja de transmisión del vehiculo ${arrayVehiculos[i].placa} son: <br> `);
        reparaciones(kilometros, fechaInicio, 50000, 5, fechaLimite1);
    }
}

// Se utilizan las fechas como objetos date para facilitar el manejo y calculo de los datos
// Calcula la fecha de las reparaciones siguientes

function reparaciones(kilometros, fechaInicio, maxRecorrido, numReparaciones, fechaLimite1) {
    
    let primeraFecha = new Date();
    let proxFecha = new Date();
    let fechaLimite2 = new Date();

    primeraFecha.setDate(parseInt(fechaInicio[2]));
    primeraFecha.setFullYear(parseInt(fechaInicio[0]));
    primeraFecha.setMonth(parseInt(fechaInicio[1])-1);

    fechaLimite2.setDate(parseInt(fechaLimite1[2]));
    fechaLimite2.setFullYear(parseInt(fechaLimite1[0]));
    fechaLimite2.setMonth(parseInt(fechaLimite1[1])-1);

    proxFecha = primeraFecha;

    let dias = parseInt(maxRecorrido / kilometros); 
    
    for (let i = 0; i < numReparaciones; i++) {
        if (fechaLimite2 >= primeraFecha) {
            proxFecha.setDate(proxFecha.getDate() + dias);
            document.write(`Reparación ${i+1} = Día: ${proxFecha.getDate()}, mes: ${proxFecha.getMonth()+1}, año: ${proxFecha.getFullYear()} <br>`);
        }
    }

}

