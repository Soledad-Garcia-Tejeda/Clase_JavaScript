//LISTADO DE PRODUCTOS

function mayorQue(i) { return (a) => a > i };

let mayorQueCero = mayorQue(0);

function Producto(id, nombre, precio, cantidadMayorista, stock) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.cantidadMayorista = cantidadMayorista;
    this.stock = stock;
    this.enStock = mayorQueCero(stock);
}

const producto1 = new Producto(1, "ABRAZADERAS", 5, 20, 100);
const producto2 = new Producto(2, "ACCESORIOS EN BRONCE FUNDIDO ROSCADO", 10, 50, 200);
const producto3 = new Producto(3, "ACCESORIOS EN BRONCE PARA GAS", 15, 25, 10);


const listaProductos = [producto1, producto2, producto3];



//AGREGAR NOMBRE DEL PRODUCTO AL HTML

document.querySelector("#producto1Texto").innerHTML = listaProductos[0].nombre;

document.querySelector("#producto2Texto").innerHTML = listaProductos[1].nombre;

document.querySelector("#producto3Texto").innerHTML = listaProductos[2].nombre;




//DESCUENTO MAYORISTA

let descuentoMayorista = 0.5;

const listaProductosMayorista = listaProductos.map((el) => {
    return {
        nombre: el.nombre,
        precio: el.precio * descuentoMayorista
    }
})



//COMPRA

let unidadesProducto1 = 0;
let unidadesProducto2 = 0;
let unidadesProducto3 = 0;
let consulta = 0;

let compraPto1Min = 0;
let compraPto1May = 0;
let compraPto2Min = 0;
let compraPto2May = 0;
let compraPto3Min = 0;
let compraPto3May = 0;


//COMPRA DEL PRODUCTO 1

document.querySelector("#producto1").onclick = () => {
    if (listaProductos[0].stock > 0) {
        unidadesProducto1 = parseInt(prompt("El precio por unidad de " + listaProductos[0].nombre + " es de $" + listaProductos[0].precio + ".\n Para acceder a un descuento mayorista del " + (descuentoMayorista * 100) + "%, debe comprar un mínimo de " + listaProductos[0].cantidadMayorista + " unidades.\n ¿Cuántas unidades quiere comprar?"));

        if (unidadesProducto1 <= listaProductos[0].stock) {

            if (unidadesProducto1 >= listaProductos[0].cantidadMayorista) {
                alert("Aplica descuento mayorista del " + (descuentoMayorista * 100) + "% \n Su total es de $" + (compraPto1May = unidadesProducto1 * listaProductosMayorista[0].precio));
            } else {
                alert("La cantidad ingresada corresponde al precio minorista \n Su total es de $" + (compraPto1Min = unidadesProducto1 * listaProductos[0].precio));
            }

            consulta = parseInt(prompt("¿Desea seguir comprando? \n Presione 1 para continuar o 2 para terminar"));

            if (consulta == 2 && unidadesProducto1 > listaProductos[0].cantidadMayorista) {
                alert("¡Gracias por su compra! \n Presione el botón de TOTAL");
            } else if (consulta == 2 && unidadesProducto1 < listaProductos[0].cantidadMayorista) {
                alert("¡Gracias por su compra! \n Presione el botón de TOTAL");
            } else if (consulta == 1) {
                alert("Prosiga con su compra");
            } else {
                alert("Opción inválida");
            }
        } else {
            alert("Lo sentimos, no tenemos la cantidad solicitada. \n Por favor, ingrese una cantidad menor.");
        }
    } else {
        alert("Lo sentimos, el producto está fuera de Stock")
    }
}




//COMPRA DEL PRODUCTO 2

document.querySelector("#producto2").onclick = () => {
    if (listaProductos[1].stock > 0) {
        unidadesProducto2 = parseInt(prompt("El precio por unidad de " + listaProductos[1].nombre + " es de $" + listaProductos[1].precio + ".\n Para acceder a un descuento mayorista del " + (descuentoMayorista * 100) + "%, debe comprar un mínimo de " + listaProductos[1].cantidadMayorista + " unidades.\n ¿Cuántas unidades quiere comprar?"));

        if (unidadesProducto2 <= listaProductos[1].stock) {

            if (unidadesProducto2 >= listaProductos[1].cantidadMayorista) {
                alert("Aplica descuento mayorista del " + (descuentoMayorista * 100) + "% \n Su total es de $" + (compraPto2May = unidadesProducto2 * listaProductosMayorista[1].precio));
            } else {
                alert("La cantidad ingresada corresponde al precio minorista \n Su total es de $" + (compraPto2Min = unidadesProducto2 * listaProductos[1].precio));
            }

            consulta = parseInt(prompt("¿Desea seguir comprando? \n Presione 1 para continuar o 2 para terminar"));

            if (consulta == 2 && unidadesProducto2 > listaProductos[1].cantidadMayorista) {
                alert("¡Gracias por su compra! \n Presione el botón de TOTAL");
            } else if (consulta == 2 && unidadesProducto2 < listaProductos[1].cantidadMayorista) {
                alert("¡Gracias por su compra! \n Presione el botón de TOTAL");
            } else if (consulta == 1) {
                alert("Prosiga con su compra");
            } else {
                alert("Opción inválida");
            }
        } else {
            alert("Lo sentimos, no tenemos la cantidad solicitada. \n Por favor, ingrese una cantidad menor.")
        }
    } else {
        alert("Lo sentimos, el producto está fuera de Stock")
    }
}



//COMPRA DEL PRODUCTO 3

document.querySelector("#producto3").onclick = () => {
    if (listaProductos[2].stock > 0) {
        unidadesProducto3 = parseInt(prompt("El precio por unidad de " + listaProductos[2].nombre + " es de $" + listaProductos[2].precio + ".\n Para acceder a un descuento mayorista del " + (descuentoMayorista * 100) + "%, debe comprar un mínimo de " + listaProductos[2].cantidadMayorista + " unidades.\n ¿Cuántas unidades quiere comprar?"));

        if (unidadesProducto3 <= listaProductos[2].stock) {

            if (unidadesProducto3 >= listaProductos[2].cantidadMayorista) {
                alert("Aplica descuento mayorista del " + (descuentoMayorista * 100) + "% \n Su total es de $" + (compraPto3May = unidadesProducto3 * listaProductosMayorista[2].precio));
            } else {
                alert("La cantidad ingresada corresponde al precio minorista \n Su total es de $" + (compraPto3Min = unidadesProducto3 * listaProductos[2].precio));
            }

            consulta = parseInt(prompt("¿Desea seguir comprando? \n Presione 1 para continuar o 2 para terminar"));

            if (consulta == 2 && unidadesProducto3 > listaProductos[2].cantidadMayorista) {
                alert("¡Gracias por su compra! \n Presione el botón de TOTAL");
            } else if (consulta == 2 && unidadesProducto3 < listaProductos[2].cantidadMayorista) {
                alert("¡Gracias por su compra! \n Presione el botón de TOTAL");
            } else if (consulta == 1) {
                alert("Prosiga con su compra");
            } else {
                alert("Opción inválida");
            }
        } else {
            alert("Lo sentimos, no tenemos la cantidad solicitada. \n Por favor, ingrese una cantidad menor.")
        }
    } else {
        alert("Lo sentimos, el producto está fuera de Stock")
    }

}



//CARRITO DE COMPRA

document.querySelector("#total").addEventListener("click", total);

function total() {

    //ARRAY  PRODUCTOS COMPRA

    function compraProducto(nombre, precio, cantidad, precioTotalMay, precioTotalMin, precioTotal) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.precioTotalMay = precioTotalMay;
        this.precioTotalMin = precioTotalMin;
        this.precioTotal = precioTotalMay + precioTotalMin
    }

    const compraProducto1 = new compraProducto((listaProductos[0].nombre), (listaProductos[0].precio), unidadesProducto1, compraPto1May, compraPto1Min);
    const compraProducto2 = new compraProducto((listaProductos[1].nombre), (listaProductos[1].precio), unidadesProducto2, compraPto2May, compraPto2Min);
    const compraProducto3 = new compraProducto((listaProductos[2].nombre), (listaProductos[2].precio), unidadesProducto3, compraPto3May, compraPto3Min);


    const carritoProductos = [compraProducto1, compraProducto2, compraProducto3];



    //COMPRA TOTAL

    const compraTotal = [compraPto1May, compraPto1Min, compraPto2May, compraPto2Min, compraPto3May, compraPto3Min];
    const total = compraTotal.reduce((acumulador, elemento) => acumulador + elemento, 0);



    let carrito = document.querySelector("#carritoDiv");

    carrito.innerHTML = "<h3>¡Gracias por su compra!</h3> <h4>Listado de productos comprados:</h4>";

    for (const el of carritoProductos) {
        let li = document.createElement("li");
        li.innerHTML = `${el.cantidad} unidades de ${el.nombre} : $ ${el.precioTotal}`;
        carrito.appendChild(li);
    }

    let linea = document.createElement("hr");
    carrito.appendChild(linea);


    let totalCompra = document.createElement("h4");
    totalCompra.innerHTML = `Su total es de $ ${total}`;
    carrito.appendChild(totalCompra);

    document.querySelector("#carrito").style.backgroundColor="rgb(85, 85, 85)";
    document.querySelector("#carrito").style.color="white";
    document.querySelector("#carritoDiv").style.marginLeft="25px";
}



//CREAR CUENTA

document.querySelector("#formularioEnviar").addEventListener("click", () => {
    document.querySelector("#formulario").addEventListener("submit", (event) => {

        //ALERT CHEQUEO CAMPOS LLENOS && MAYORÍA DE EDAD && CONTRASEÑA
        
        if (document.querySelector("#formularioNombre").value.length<1 || document.querySelector("#formularioApellido").value.length<1 || document.querySelector("#formularioEdad").value.length<1|| document.querySelector("#formularioTelefono").value.length<1 || document.querySelector("#formularioMail").value.length<1 || document.querySelector("#formularioPassword").value.length<1 || document.querySelector("#formularioPassword2").value.length<1)  {
            event.preventDefault();
            alert("Usted debe llenar todos los campos");
        } 

        if (document.querySelector("#formularioEdad").value < 18)  {
            event.preventDefault();
            alert("Usted debe ser mayor de edad para crear una cuenta");
        } 

        if (document.querySelector("#formularioPassword").value == "" || document.querySelector("#formularioPassword").value !== document.querySelector("#formularioPassword2").value  || document.querySelector("#formularioPassword").value.toString().charAt(0) !== document.querySelector("#formularioPassword").value.toString().charAt(0).toUpperCase() || document.querySelector("#formularioPassword").value.lenght<8 )  {
            event.preventDefault();
            alert("La contraseñas deben coincidir \nLa contraseña debe comenzar con una letra mayúscula y tener 8 caracteres");
        }   


        //ERRORES EN ROJO CHEQUEO CAMPOS LLENOS && MAYORÍA DE EDAD && CONTRASEÑA

        if (document.querySelector("#formularioNombre").value.length<1) {
            document.querySelector("#formularioNombreT").style.color="red";
        } 
        if (document.querySelector("#formularioApellido").value.length<1) {
            document.querySelector("#formularioApellidoT").style.color="red";
        }
        if (document.querySelector("#formularioEdad").value.length<1) {
            document.querySelector("#formularioEdadT").style.color="red";
        }
        if (document.querySelector("#formularioTelefono").value.length<1) {
            document.querySelector("#formularioTelefonoT").style.color="red";
        } 
        if (document.querySelector("#formularioMail").value.length<1) {
            document.querySelector("#formularioMailT").style.color="red";
        }
        if (document.querySelector("#formularioPassword").value.length<1) {
            document.querySelector("#formularioPasswordT").style.color="red";
        }
        if (document.querySelector("#formularioPassword2").value.length<1) {
            document.querySelector("#formularioPassword2T").style.color="red";
        } 
        if (document.querySelector("#formularioEdad").value < 18) {
            document.querySelector("#formularioEdadT").style.color="red";
        }
        if (document.querySelector("#formularioPassword").value !== document.querySelector("#formularioPassword2").value || document.querySelector("#formularioPassword").value.toString().charAt(0) !== document.querySelector("#formularioPassword").value.toString().charAt(0).toUpperCase() || document.querySelector("#formularioPassword").value.lenght<8){
            document.querySelector("#formularioPasswordT").style.color = "red";
            document.querySelector("#formularioPassword2T").style.color = "red";
        }
    })
})


//INICIO SESIÓN

//document.getElementById(catalogo).style.visibility = "visible"; // show
document.getElementById("catalogo").style.display = 'none'; 

document.querySelector("#inicioEnviar").addEventListener("click", () => {

    let usuario = document.getElementById("inicioMail").value;
        
    if (usuario == "sanitar@hotmail.com") {
        document.getElementById("catalogo").style.display = ''; 
        } else {
      alert("Usuario no registrado");
    }

    if (usuario != "sanitar@hotmail.com") {
        document.getElementById("inicioMailT").style.color="red";
    }

    let password = document.getElementById("inicioPassword").value;
        
    if (password == "sanitar") {
        document.getElementById("catalogo").style.display = ''; 
        } else {
      alert("Contraseña incorrecta");
    }

    if (password != "sanitar") {
        document.getElementById("inicioPasswordT").style.color="red";
    }
})





//CATALOGO DE PRECIOS

//document.getElementById(catalogo).style.visibility = "visible"; // show

/* document.getElementById("catalogo").style.display = 'none'; 

function catPrecios() {
    let password = document.getElementById("password").value;
        
    if (password == "sanitar") {
        document.getElementById("catalogo").style.display = ''; 
        } else {
      alert("Contrasena incorrecta");
    }
} */





