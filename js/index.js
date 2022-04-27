//CONTENEDORES DEL HTML
const productos = document.getElementById("productos");

const modalContenedor= document.getElementById("modalContenedor");

const modalContenedorCarrito= document.getElementById("modalContenedorCarrito");


//ARRAY CARRITO DE COMPRAS
let carritoDeCompras = []

let comprarProducto = []




//CARRITO VACÍO
modalContenedorCarrito.innerHTML = 
`<p>No se agregaron productos al carrito</p>`;




//SELECCIONAR PRODUCTOS Y CANTIDADES A COMPRAR
Productos(stockProductos);

function Productos (array){
    array.forEach(element => {
        let div = document.createElement("div");
        div.className = `mainProductos__div_categoria-${element.id}` 
        div.innerHTML += 
        `<a id="comprarProducto${element.id}"  type="button" data-bs-toggle="modal" data-bs-target="#modalComprar"  style="cursor:pointer">
            <div class="mainProductos__div_categoria--desaparecer">
                <p class="mainProductos__p">${element.nombre}</p>
            </div>    
        </a>`
        
        productos.appendChild(div);

        //EVENTO CLICK_COMPRAR PRODUCTO
        document.getElementById(`comprarProducto${element.id}`).addEventListener("click",()=>{
            document.querySelector("#modalComprarTitle").innerHTML=`${element.nombre}`
           
            //SI HAY STOCK
            if (element.unidadesStock > 0) {

                //PEDIR CANTIDAD QUE SE QUIERE COMPRAR A TRAVÉS DE UN MODAL
                modalContenedor.innerHTML=
                `<p> El precio por unidad de ${element.nombre} es de $${element.precioMinorista}. <br> Para acceder a un descuento mayorista del ${descuentoMayorista*100}%, debe comprar un mínimo de ${element.cantidadMayorista} unidades. <br> ¿Cuántas unidades quiere comprar?</p>
            
                    <input type="number" id="compraCantidad${element.id}">
                    <input class="btn btn-primary" id="btnComprar" data-bs-dismiss="modal" value="COMPRAR">
                `

                let compraCantidad= document.querySelector(`#compraCantidad${element.id}`).value;

                //EVENTO CLICK_COMPRAR DENTRO DEL MODAL
                document.querySelector("#btnComprar").addEventListener("click", () => {
                    
                    //SI LAS UNIDADES A COMPRAR SUPERAN AL STOCK
                    if (compraCantidad>element.unidadesStock){
                        alert("Lo sentimos, no tenemos la cantidad solicitada. \n Por favor, ingrese una cantidad menor.");
                        
                    //SI LAS UNIDADES A COMPRAR NO SUPERAN AL STOCK
                    }else{

                        element.compraCantidad= parseInt(document.querySelector(`#compraCantidad${element.id}`).value);

                        //SI LA COMPRA ES MAYORISTA
                        if (element.compraCantidad>=element.cantidadMayorista){
                            element.precioTotal=(element.precioMayorista*element.compraCantidad);
                         
                        //SI LA COMPRA ES MINORISTA
                        }else{
                            element.precioTotal=(element.precioMinorista*element.compraCantidad);
                          
                        }                    
                        agregarCarrito(element.id);
                    }
                })            

            //SI NO HAY STOCK
            }else{
                modalContenedor.innerHTML=
                "<p> Lo sentimos, el producto está fuera de Stock</p>"              
            }
        })
    });
}




//CARRITO
function agregarCarrito(id){
    comprarProducto = stockProductos.find(element => element.id == id);

    carritoDeCompras.push(comprarProducto);
  
 
    console.log(carritoDeCompras); 


    mostrarCarrito(comprarProducto); 

}



//FUNCIÓN PARA MOSTRAR EL CARRITO
 function mostrarCarrito (array){
  
    document.querySelector("#btnCarrito").addEventListener("click", ()=>{
        document.querySelector("#modalContenedorCarrito p").innerText = 
        "PRODUCTOS SELECCIONADOS"

        let div2 = document.createElement("div");
        div2.innerHTML = `<p>${array.compraCantidad} unidades de ${array.nombre} = $${array.precioTotal}</p>`
        modalContenedorCarrito.appendChild(div2);

      
    
    })
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



















