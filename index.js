//LISTADO DE PRODUCTOS

function mayorQue (i){ return (a) => a>i};

let mayorQueCero = mayorQue (0);

 function Producto (id, nombre, precio, cantidadMayorista, stock){
    this. id=id;
    this. nombre= nombre;
    this. precio= precio;
    this. cantidadMayorista= cantidadMayorista;
    this. stock= stock;
    this. enStock= mayorQueCero (stock); 
}

const producto1= new Producto (1, "ABRAZADERAS", 5, 20,100);
const producto2= new Producto (2, "ACCESORIOS EN BRONCE FUNDIDO ROSCADO", 10, 50, 200);
const producto3= new Producto (3, "ACCESORIOS EN BRONCE PARA GAS", 15, 25, 0);


const listaProductos = [producto1, producto2, producto3]; 


//DESCUENTO MAYORISTA

let descuentoMayorista= 0.5;

const listaProductosMayorista = listaProductos.map((el) => {
    return {
        nombre: el.nombre,
        precio: el.precio * descuentoMayorista
    }
})



//COMPRA

let unidadesProducto1=0;
let unidadesProducto2=0;
let unidadesProducto3=0;
let consulta=0;



//COMPRA DEL PRODUCTO 1

function fProducto1() {
    if (listaProductos[0].stock > 0) {
        unidadesProducto1 = parseInt(prompt("El precio por unidad de " + listaProductos[0].nombre + " es de $" + listaProductos[0].precio + ".\n Para acceder a un descuento mayorista del " + (descuentoMayorista * 100) + "%, debe comprar un mínimo de " + listaProductos[0].cantidadMayorista + " unidades.\n ¿Cuántas unidades quiere comprar?"));

        if (unidadesProducto1 < listaProductos[0].stock) {

            if (unidadesProducto1 >= listaProductos[0].cantidadMayorista) {
                alert("Aplica descuento mayorista del " + (descuentoMayorista * 100) + "% \n Su total es de $" + (listaProductosMayorista[0].precio * unidadesProducto1));
            } else {
                alert("La cantidad ingresada corresponde al precio minorista \n Su total es de $" + (listaProductos[0].precio * unidadesProducto1));
            }

            consulta = parseInt(prompt("¿Desea seguir comprando? \n Presione 1 para continuar o 2 para terminar"));

            if (consulta == 2 && unidadesProducto1 > listaProductos[0].cantidadMayorista) {
                alert("¡Gracias por su compra! \n Su total de " + listaProductos[0].nombre + " es de $" + (listaProductosMayorista[0].precio * unidadesProducto1) + ".\n Si compró otros productos presione el botón de TOTAL");
            } else if (consulta == 2 && unidadesProducto1 < listaProductos[0].cantidadMayorista) {
                alert("¡Gracias por su compra! \n Su total de " + listaProductos[0].nombre + " es de $" + (listaProductos[0].precio * unidadesProducto1) + ".\n Si compró otros productos presione el botón de TOTAL");
            } else if (consulta == 1) {
                alert("Prosiga con su compra");
            } else {
                alert("Opción inválida");
            }
        } else {alert("Lo sentimos, no tenemos la cantidad solicitada. \n Por favor, ingrese una cantidad menor.");
    }} else {
        alert("Lo sentimos, el producto está fuera de Stock")
    }
}



//COMPRA DEL PRODUCTO 2

function fProducto2() {
    if (listaProductos[1].stock > 0) {
        unidadesProducto2 = parseInt(prompt("El precio por unidad de " + listaProductos[1].nombre + " es de $" + listaProductos[1].precio + ".\n Para acceder a un descuento mayorista del " + (descuentoMayorista * 100) + "%, debe comprar un mínimo de " + listaProductos[1].cantidadMayorista + " unidades.\n ¿Cuántas unidades quiere comprar?"));

        if (unidadesProducto2 < listaProductos[1].stock) {

            if (unidadesProducto2 >= listaProductos[1].cantidadMayorista) {
                alert("Aplica descuento mayorista del " + (descuentoMayorista * 100) + "% \n Su total es de $" + (listaProductosMayorista[1].precio * unidadesProducto2));
            } else {
                alert("La cantidad ingresada corresponde al precio minorista \n Su total es de $" + (listaProductos[1].precio * unidadesProducto2));
            }

            consulta = parseInt(prompt("¿Desea seguir comprando? \n Presione 1 para continuar o 2 para terminar"));

            if (consulta == 2 && unidadesProducto2 > listaProductos[1].cantidadMayorista) {
                alert("¡Gracias por su compra! \n Su total de " + listaProductos[1].nombre + " es de $" + (listaProductosMayorista[1].precio * unidadesProducto2) + ".\n Si compró otros productos presione el botón de TOTAL");
            } else if (consulta == 2 && unidadesProducto2 < listaProductos[1].cantidadMayorista) {
                alert("¡Gracias por su compra! \n Su total de " + listaProductos[1].nombre + " es de $" + (listaProductos[1].precio * unidadesProducto2) + ".\n Si compró otros productos presione el botón de TOTAL");
            } else if (consulta == 1) {
                alert("Prosiga con su compra");
            } else {
                alert("Opción inválida");
            }
        } else {alert("Lo sentimos, no tenemos la cantidad solicitada. \n Por favor, ingrese una cantidad menor.")
    }}else {
        alert("Lo sentimos, el producto está fuera de Stock")
    }
}


//COMPRA DEL PRODUCTO 3

function fProducto3() {
    if (listaProductos[2].stock > 0) {
        unidadesProducto3 = parseInt(prompt("El precio por unidad de " + listaProductos[2].nombre + " es de $" + listaProductos[2].precio + ".\n Para acceder a un descuento mayorista del " + (descuentoMayorista * 100) + "%, debe comprar un mínimo de " + listaProductos[2].cantidadMayorista + " unidades.\n ¿Cuántas unidades quiere comprar?"));

        if (unidadesProducto3 < listaProductos[2].stock) {

            if (unidadesProducto3 >= listaProductos[2].cantidadMayorista) {
                alert("Aplica descuento mayorista del " + (descuentoMayorista * 100) + "% \n Su total es de $" + (listaProductosMayorista[2].precio * unidadesProducto3));
            } else {
                alert("La cantidad ingresada corresponde al precio minorista \n Su total es de $" + (listaProductos[2].precio * unidadesProducto3));
            }

            consulta = parseInt(prompt("¿Desea seguir comprando? \n Presione 1 para continuar o 2 para terminar"));

            if (consulta == 2 && unidadesProducto3 > listaProductos[2].cantidadMayorista) {
                alert("¡Gracias por su compra! \n Su total de " + listaProductos[2].nombre + " es de $" + (listaProductosMayorista[2].precio * unidadesProducto3) + ".\n Si compró otros productos presione el botón de TOTAL");
            } else if (consulta == 2 && unidadesProducto3 < listaProductos[2].cantidadMayorista) {
                alert("¡Gracias por su compra! \n Su total de " + listaProductos[2].nombre + " es de $" + (listaProductos[2].precio * unidadesProducto3) + ".\n Si compró otros productos presione el botón de TOTAL");
            } else if (consulta == 1) {
                alert("Prosiga con su compra");
            } else {
                alert("Opción inválida");
            }
        } else { alert("Lo sentimos, no tenemos la cantidad solicitada. \n Por favor, ingrese una cantidad menor.")
    }} else {
        alert("Lo sentimos, el producto está fuera de Stock")
    }
}



//TOTAL DE LA COMPRA

function total() {
    while (consulta == 1  || consulta == 2 ) {
        switch (true) {
            case (unidadesProducto1> listaProductos[0].cantidadMayorista && unidadesProducto2 > listaProductos[1].cantidadMayorista && unidadesProducto3 > listaProductos[2].cantidadMayorista):
                let suma1 = (listaProductosMayorista[0].precio*unidadesProducto1) + (listaProductosMayorista[1].precio*unidadesProducto2)+ (listaProductosMayorista[2].precio*unidadesProducto3);
                alert("¡Gracias por su compra! \n Su total es de $" + suma1);
                break;
            case (unidadesProducto1> listaProductos[0].cantidadMayorista && unidadesProducto2 > listaProductos[1].cantidadMayorista && unidadesProducto3 < listaProductos[2].cantidadMayorista):
                let suma2 = (listaProductosMayorista[0].precio*unidadesProducto1) + (listaProductosMayorista[1].precio*unidadesProducto2)+ (listaProductos[2].precio*unidadesProducto3);
                alert("¡Gracias por su compra! \n Su total es de $" + suma2);
                break;
            case (unidadesProducto1> listaProductos[0].cantidadMayorista && unidadesProducto2 < listaProductos[1].cantidadMayorista && unidadesProducto3 < listaProductos[2].cantidadMayorista):
                let suma3 = (listaProductosMayorista[0].precio*unidadesProducto1) + (listaProductos[1].precio*unidadesProducto2)+ (listaProductos[2].precio*unidadesProducto3);
                alert("¡Gracias por su compra! \n Su total es de $" + suma3);
                break;
            case (unidadesProducto1< listaProductos[0].cantidadMayorista && unidadesProducto2 < listaProductos[1].cantidadMayorista && unidadesProducto3 < listaProductos[2].cantidadMayorista):
                let suma4 = (listaProductos[0].precio*unidadesProducto1) + (listaProductos[1].precio*unidadesProducto2)+ (listaProductos[2].precio*unidadesProducto3);
                alert("¡Gracias por su compra! \n Su total es de $" + suma4);
                break;
            case (unidadesProducto1< listaProductos[0].cantidadMayorista && unidadesProducto2 < listaProductos[1].cantidadMayorista && unidadesProducto3 > listaProductos[2].cantidadMayorista):
                let suma5 = (listaProductos[0].precio*unidadesProducto1) + (listaProductos[1].precio*unidadesProducto2)+ (listaProductosMayorista[2].precio*unidadesProducto3);
                alert("¡Gracias por su compra! \n Su total es de $" + suma5);
                break;
            case (unidadesProducto1< listaProductos[0].cantidadMayorista && unidadesProducto2 > listaProductos[1].cantidadMayorista && unidadesProducto3 > listaProductos[2].cantidadMayorista):
                let suma6 = (listaProductos[0].precio*unidadesProducto1) + (listaProductosMayorista[1].precio*unidadesProducto2)+ (listaProductosMayorista[2].precio*unidadesProducto3);
                alert("¡Gracias por su compra! \n Su total es de $" + suma6);
                break;
            case (unidadesProducto1> listaProductos[0].cantidadMayorista && unidadesProducto2 < listaProductos[1].cantidadMayorista && unidadesProducto3 > listaProductos[2].cantidadMayorista):
                let suma7 = (listaProductosMayorista[0].precio*unidadesProducto1) + (listaProductos[1].precio*unidadesProducto2)+ (listaProductosMayorista[2].precio*unidadesProducto3);
                alert("¡Gracias por su compra! \n Su total es de $" + suma7);
                break;
            case (unidadesProducto1< listaProductos[0].cantidadMayorista && unidadesProducto2 > listaProductos[1].cantidadMayorista && unidadesProducto3 < listaProductos[2].cantidadMayorista):
                let suma8 = (listaProductos[0].precio*unidadesProducto1) + (listaProductosMayorista[1].precio*unidadesProducto2)+ (listaProductos[2].precio*unidadesProducto3);
                alert("¡Gracias por su compra! \n Su total es de $" + suma8);
                break;           
            default:
                break;
        }
        break;
    }
}











 
