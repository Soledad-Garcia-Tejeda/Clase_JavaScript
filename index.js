  //Lista de precios:
const abrazaderas = 10;
const accesoriosAgua = 15;
const descuento = 0.5;


let unidadesAbrazadera2 = 1;
let precioAbrazaderaMay = 1;
let precioAbrazaderaMin = 1;
let consulta = 0;
let unidadesAgua2 = 1;
let precioAguaMay = 1;
let precioAguaMin = 1;
let consulta2 = 0;

function totalMinorista(cantidad, precio) {
    let resultado = cantidad * precio;
    return resultado;
}

function totalMayorista(cantidad, precio, descuento) {
    let resultado = cantidad * precio * descuento;
    return resultado;
}


function unidadesAbrazadera() {
    unidadesAbrazadera2 = parseInt(prompt("El precio minorista por unidad es de $" + abrazaderas + "\n ¿Cuántas unidades quiere comprar?"));
    precioAbrazaderaMay = totalMayorista(unidadesAbrazadera2, abrazaderas, descuento);
    precioAbrazaderaMin = totalMinorista(unidadesAbrazadera2, abrazaderas);
    if (unidadesAbrazadera2 > 10) {
        alert("Aplica descuento mayorista del " + (descuento * 100) + "% \n Su total es de $" + precioAbrazaderaMay);
    } else {
        alert("La cantidad ingresada corresponde al precio minorista \n Su total es de $" + precioAbrazaderaMin);
    }

    consulta = parseInt(prompt("¿Desea seguir comprando? \n Presione 1 para continuar o 2 para terminar"));

    if (consulta == 2 && unidadesAbrazadera2 > 10) {
        alert("¡Gracias por su compra! \n Su total de Abrazaderas es de $" + precioAbrazaderaMay);
    } else if (consulta == 2 && unidadesAbrazadera2 < 10) {
        alert("¡Gracias por su compra! \n Su total de Abrazaderas es de $" + precioAbrazaderaMin);
    } else if (consulta == 1) {
        alert("Prosiga con su compra");
    } else {
        alert("Opción inválida");
    }
}



function unidadesAgua() {
    unidadesAgua2 = parseInt(prompt("El precio minorista por unidad es de $" + accesoriosAgua + "\n ¿Cuántas unidades quiere comprar?"));
    precioAguaMay = totalMayorista(unidadesAgua2, accesoriosAgua, descuento);
    precioAguaMin = totalMinorista(unidadesAgua2, accesoriosAgua);
    if (unidadesAgua2 > 10) {
        alert("Aplica descuento mayorista del " + (descuento * 100) + "% \n Su total es de $" + precioAguaMay);
    } else {
        alert("La cantidad ingresada corresponde al precio minorista \n Su total es de $" + precioAguaMin);
    }

    consulta2 = parseInt(prompt("¿Desea seguir comprando? \n Presione 1 para continuar o 2 para terminar"));

    if (consulta2 == 2 && unidadesAgua2 > 10) {
        alert("¡Gracias por su compra! \n Su total de Accesorios en Bronce Fundido es de $" + precioAguaMay);
    } else if (consulta2 == 2 && unidadesAgua2 < 10) {
        alert("¡Gracias por su compra! \n Su total de Accesorios en Bronce Fundido es de $" + precioAguaMin);
    } else if (consulta2 == 1) {
        alert("Prosiga con su compra.");
    } else {
        alert("Opción inválida");
    }
}



function total() {
    while (consulta == 1 || consulta2 == 1 || consulta == 2 || consulta2 == 2 ) {
        switch (true) {

            case (unidadesAbrazadera2 > 10 && unidadesAgua2 > 10):
                let suma1 = precioAbrazaderaMay + precioAguaMay;
                alert("¡Gracias por su compra! \n Su total es de $" + suma1);
                break;
            case (unidadesAbrazadera2 > 10 && unidadesAgua2 < 10):
                let suma2 = precioAbrazaderaMay + precioAguaMin;
                alert("¡Gracias por su compra! \n Su total es de $" + suma2);
                break;
            case (unidadesAbrazadera2 < 10 && unidadesAgua2 < 10):
                let suma3 = precioAbrazaderaMin + precioAguaMin;
                alert("¡Gracias por su compra! \n Su total es de $" + suma3);
                break;
            case (unidadesAbrazadera2 < 10 && unidadesAgua2 > 10):
                let suma4 = precioAbrazaderaMin + precioAguaMay;
                alert("¡Gracias por su compra! \n Su total es de $" + suma4);
                break;
                
            default:
                break;
        }
        break;
    }
}

