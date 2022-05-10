//CONTENEDORES DEL HTML
const productos = document.getElementById("productos");
const productoDetalle = document.getElementById("productoDetalle");
const carritoBody= document.getElementById("carritoBody");
let div=document.createElement("div");


//ARRAY CARRITO DE COMPRAS
let comprarProducto = []
let carritoDeCompras = []


//VARIABLES GLOBALES
let btnEliminar;
let totalAPagar;
let btnComprar;
let unidades;
let baseDeUsuarios;




//CARRITO VACÍO
carritoBody.innerHTML = 
`<p id="carritoVacio" class="carritoDeCompras_vacio carritoVacio">El carrito de compras está vacío</p>`;


mostrarProductos(stockProductos);
btnComprarProducto (stockProductos);





//IMPRIMIR EL MAIN PRODUCTOS
function mostrarProductos (array){
    array.forEach(e => {
        let div = document.createElement("div");
        div.className = `mainProductos__div_categoria-${e.id}`;
        div.setAttribute ("id",`comprarProducto${e.id}`);
        div.innerHTML += 
        `<div type="button" style="cursor:pointer" class="mainProductos__div_categoria--desaparecer">
            <p class="mainProductos__p">${e.nombre}</p>
        </div>`
        
        productos.appendChild(div);
    })
}



//ACCEDER AL DETALLE DE CADA PRODUCTO
function btnComprarProducto (array){
    array.forEach(e=>{
        document.querySelector(`#comprarProducto${e.id}`).addEventListener("click", ()=>{
            //OCULTAR EL MAIN DE PRODUCTOS
            productos.style.display="none";
            
            div.className = `mainProductos__div_detalle`;

            //MOSTRAR DETALLE DEL PRODUCTO_OPCIÓN 1: SI NO HAY STOCK
            if (e.unidadesStock==0){
            div.innerHTML = 
            `<img src="/imagenes/productos-${e.id}.png" class="mainProductos__div_div-img">         
            <div class="mainProductos__div_div-detalle">
                <h2 class="mainProductos__detalle-titulo"><strong>PRODUCTO:</strong> ${e.nombre}</h2>
                <p class="mainProductos__detalle-p"><strong>SIN STOCK</strong></p>          
                <button type="button" id="btnVolver" class="btn btn-secondary mt-3">VOLVER</button>
            </div>
            `

            productoDetalle.style.display="flex";
            productoDetalle.appendChild(div);
            //BOTÓN PARA VOLVER AL MAIN DE PRODUCTOS
            volver();

            }else{
                //MOSTRAR DETALLE DEL PRODUCTO_OPCIÓN 2: SI HAY STOCK
                div.innerHTML = 
                ` <img src="/imagenes/productos-${e.id}.png" class="mainProductos__div_div-img">         
                <div class="mainProductos__div_div-detalle">
                    <h2 class="mainProductos__detalle-titulo"><strong>PRODUCTO:</strong> ${e.nombre}</h2>
                    <p class="mainProductos__detalle-p">Precio unitario: $${e.precioMinorista}</p>
                    <p class="mainProductos__detalle-p-color">Descuento mayorista: ${descuentoMayorista*100}% </p>
                    <p class="mainProductos__detalle-p">Para acceder al descuento mayorista se tiene que comprar un mínimo de <strong>${e.cantidadMayorista} unidades</strong>. </p>
                    
                    <p class="mainProductos__detalle-p-chico">Cantidad:</p>
                    <input class="mainProductos__div_input"  pattern="^[0-9]"  min="1" step="1" type="number" id="compraCantidad${e.id}">
                                 
                    <button type="button" id="btnComprar${e.id}" class="btn btn-primary mt-3">COMPRAR</button>
                    <button type="button" id="btnVolver" class="btn btn-secondary mt-3">VOLVER</button>
                </div>
                `
    
                productoDetalle.style.display="flex";
                productoDetalle.appendChild(div);
                //BOTÓN PARA VOLVER AL MAIN DE PRODUCTOS
                volver();
           

                //BOTÓN DE COMPRAR
                btnComprar= document.querySelector(`#btnComprar${e.id}`)
                btnComprar.addEventListener("click", ()=>{
                    //CAPTURAR EL VALOR DE LAS UNIDADES QUE SE QUIEREN COMPRAR
                    unidades = document.querySelector(`#compraCantidad${e.id}`).value;

                    //SI LAS UNIDADES A COMPRAR SUPERAN AL STOCK
                    if (unidades>e.unidadesStock){
                        Swal.fire({
                            icon: 'warning',
                            title: 'Stock insuficiente',
                            text: `Vuelva a realizar su compra por una cantidad menor a ${e.unidadesStock} unidades.`,
                        })
        
                    }else{
                        //SI LAS UNIDADES A COMPRAR NO SUPERAN AL STOCK

                        //INCORPORAR EL VALOR DE LAS UNIDADES QUE SE QUIEREN COMPRAR
                        e.compraCantidad+= parseInt(unidades);
        
                        //SI LA COMPRA ES MAYORISTA O MINORISTA
                        e.compraCantidad>=e.cantidadMayorista ? e.precioTotal=(e.precioMayorista*e.compraCantidad):e.precioTotal=(e.precioMinorista*e.compraCantidad); 

                        //FUNCIÓN PARA AGREGAR EL PRODUCTO SELECCIONADO AL CARRITO
                        agregarCarrito(e.id);   
                    }                    
                })                         
            }           
        })
    })    
}


                  



//FUNCIÓN PARA ACTIVAR EL BOTÓN PARA VOLVER AL MAIN DE PRODUCTOS
function volver(){
    document.querySelector("#btnVolver").addEventListener("click", ()=>{
        productoDetalle.style.display="none";
        productos.style.display="grid";
    })
}




//FUNCIÓN PARA AGREGAR AL CARRITO
function agregarCarrito(id) {
    //BUSCAR LOS PRODUCTOS SELECCIONADOS PARA COMPRAR
    comprarProducto = stockProductos.find(e => e.id == id);

    //AGREGAR LOS PRODUCTOS SELECCIONADOS AL ARRAY DE CARRITO DE COMPRAS
    carritoDeCompras.push(comprarProducto);

    //ELIMINAR LOS PRODUCTOS REPETIDOS
    carritoDeCompras = carritoDeCompras.filter((item, index) => {
        return carritoDeCompras.indexOf(item) === index;
    })
 

    mostrarCarrito ();  
    contadorCarrito(carritoDeCompras)

}


//FUNCIÓN PARA IMPRIMIR EL NÚMERO DE CANTIDADES DE PRODUCTOS QUE SE ESTÁN INCORPRANDO AL CARRITO
function contadorCarrito(array){
    let cantidadesTotales= array.reduce((ac,e)=>ac+e.compraCantidad,0);
    document.querySelector("#cantidadesCarrito").innerText=cantidadesTotales;
}



//FUNCIÓN PARA IMPRIMIR EL CARRITO DE COMPRAS
function mostrarCarrito (){
    //LIMPIAR LO ESCRITO AL PRINCIPIO DE "CARRITO VACÍO"
    carritoBody.innerHTML=""

    //IMPRIMIR EL DETALLE DE CADA PRODUCTO INCORPORADO AL CARRITO   
    carritoDeCompras.forEach(e=>{
    
        let compra=document.createElement("div");
        compra.setAttribute ("id",`compra${e.id}`);
        compra.innerHTML=
        `
        <div class="mainProductos__div_carrito">
            <p class="mainProductos__carrito-nombre">${e.nombre}</p>
            <p class="mainProductos__carrito-und">Und:${e.compraCantidad}</p>
            <p class="mainProductos__carrito-precio">$${e.precioTotal}</p>
            <a class="btn mainProductos__btn--eliminar" type="button"  id="btnEliminar${e.id}"></a>
        </div>
        `
        carritoBody.appendChild(compra);

        //ELIMINAR PRODUCTO DEL CARRITO
        btnEliminar=document.querySelector(`#btnEliminar${e.id}`);
        eliminarProducto(e.id);                 
    })

    //IMPRIMIR EL TOTAL DE LA COMPRA
    let divTotal= document.createElement("div");
    divTotal.className = `mainProductos__div_carritoTotal`
    divTotal.innerHTML=
    `<hr class="hr2">
    <p  id="totalComprado" class="mainProductos__carrito-total"></p>
    <a class="btn mainProductos__carrito-inciarCompra" type="button"  id="btnInciarCompra">INICIAR COMPRA</a>`

    carritoBody.appendChild(divTotal);

    totalPrecio(carritoDeCompras);
    inciarCompra()
} 



//FUNCIÓN PARA CALCULAR EL TOTAL DE LA COMPRA
function totalPrecio(array){
    totalAPagar= carritoDeCompras.reduce((ac,array)=>ac+array.precioTotal,0);

    document.querySelector("#totalComprado").innerText=
    `Total: $${totalAPagar}`
}


//FUNCIÓN PARA BORRAR ALGÚN PRODUCTO DEL CARRITO DE COMPRAS
function eliminarProducto(id){
    btnEliminar.addEventListener("click",()=>{

        //MODIFICAR LA CANTIDAD DE UNIDADES DEL PRODUCTO ELIMINADO
        stockProductos[id-1].compraCantidad=0;

        //SACAR DEL ARRAY DEL CARRITO DE COMPRAS EL PRODUCTO ELIMINADO
        carritoDeCompras= carritoDeCompras.filter(item=> item.id != id); 
    
        //ACTUALIZAR EL CONTADOR DE UNIDADES AGREGADAS AL CARRITO
        contadorCarrito(carritoDeCompras)

        //BORRAR EL DETALLE DEL PRODUCTO ELIMINADO, DE LA IMPRESIÓN DEL CARRITO 
        document.querySelector(`#compra${id}`).style.display="none"; 

        //SI EL CARRITO SE QUEDA SIN PRODUCTOS, PONER QUE EL CARRITO ESTÁ VACÍO
        if (carritoDeCompras.length==0){
            carritoBody.innerHTML = 
        `<p id="carritoVacio" class="carritoDeCompras_vacio carritoVacio">El carrito de compras está vacío</p>`;

        }else{
            //SI EL CARRITO TIENE PRODUCTOS, CALCULAR EL TOTAL
            totalPrecio(carritoDeCompras);  
        }
    })
}


//FUNCIÓN PARA LOGUEARSE E INICIAR LA COMPRA
function inciarCompra(){
    document.querySelector("#btnInciarCompra").addEventListener("click",()=>{
        document.querySelector("#offcanvasRightLabel").innerText="INICIAR SESIÓN";

        //INGRESAR USUARIO Y CONTRASEÑA O CREAR UNA CUENTA PARA REALIZAR LA COMPRA
        carritoBody.innerHTML =  
        `<div class="mainProductos__div_carrito-formulario">
            <div class="mainProductos__div_carrito-formulario-div">
                <p class="mainProductos__carrito-formulario">Ingrese su usuario:</p>
                <input  type="text" id="cUsuario">             
            </div>
            <div class="mainProductos__div_carrito-formulario-div">
                <p class="mainProductos__carrito-formulario">Ingrese su contraseña:</p>
                <input type="password" id="cContrasenia">
            </div> 
            <a data-bs-dismiss="offcanvas" class="btn mainProductos__carrito-inciarSesion" type="button"  id="cIniciarSesion">INCIAR SESIÓN</a>
            <a class="btn mainProductos__carrito-crearCuenta" type="button"  id="cCrearCuenta">CREAR CUENTA</a>           
        </div>`

        //SE USA UNA BASE DE USUARIOS FICTICIA A PARTIR DE UNA API
        pedirUsuarios ();

        document.querySelector("#cIniciarSesion").addEventListener("click",()=>{
            //SE TOMA EL VALOR QUE SE DA COMO USUARIO
            let usuario= document.querySelector("#cUsuario").value;
            //SE TOMA EL VALOR QUE SE DA COMO CONTRASEÑA
            let contrasenia= document.querySelector("#cContrasenia").value;

            //SE BUSCA SI LOS VALORES DADOS COMO USUARIO Y CONTRASEÑA ESTÁN EN LA BASE DE DATOS
            //(SE USA COMO USUARIO EL MAIL Y COMO CONTRASEÑA EL USERNAME, A MODO DE EJEMPLO)
            let usuarioEsta=baseDeUsuarios.find((e)=>e.email==usuario);
            let contraseniaEsta=baseDeUsuarios.find((e)=>e.username==contrasenia);

            //SI COINCIDEN EL USUARIO Y CONTRASEÑA
            if(usuarioEsta && contraseniaEsta){
                //SE BUSCA EL OBJETO QUE CORRESPONDE AL USUARIO INGRESADO
                let usuarioIngresado=baseDeUsuarios.filter((e)=>e.email.includes(usuario))

                //SE LE DA LA BIENVENIDA AL USUARIO Y LUEGO SE VA A SEGUIR CON EL RESUMEN DEL CARRITO Y LOS DATOS DE DIRECCIÓN PARA TERMINAR LA COMPRA
                document.querySelector("#productosTitulo").innerText=`¡Hola ${usuarioIngresado[0].name}!`;
                productoDetalle.innerHTML="";
            }else{
                //SI NO COINCIDEN EL USUARIO Y CONTRASEÑA
                Swal.fire({
                    icon: 'warning',
                    title: 'Usuario y contraseña INCORRECTOS',
                    text: `Por favor, vuelva a ingresar su usuario y contraseña.`,
                })
            }
        })
    })

}



//FUNCIÓN PARA LLAMAR A LA BASE DE USUARIOS FICTICIA
async function pedirUsuarios ()  {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json()

    baseDeUsuarios= data;
}






