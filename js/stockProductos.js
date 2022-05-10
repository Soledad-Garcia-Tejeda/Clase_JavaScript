//PORCENTAJE DE DESCUENTO POR COMPRA MAYORISTA
let descuentoMayorista = 0.5;



//FUNCIÓN CONSTRUCTORA
function Producto(id, nombre, tipo, precioMinorista, cantidadMayorista, unidadesStock, compraCantidad, precioTotal, precioMayorista) {
    this.id = id;
    this.nombre = nombre;
    this.tipo=tipo;
    this.precioMinorista = precioMinorista;
    this.cantidadMayorista = cantidadMayorista;
    this.unidadesStock = unidadesStock;
    this.compraCantidad=0;
    this.precioTotal=0;
    this.precioMayorista = precioMinorista * descuentoMayorista;
}


//LISTADO DE PRODUCTOS
const producto1 = new Producto(1, "ABRAZADERAS", "accesorios varios", 5, 20, 0);
const producto2 = new Producto(2, "ACCESORIOS EN BRONCE FUNDIDO ROSCADO", "accesorios varios",  10, 50, 200);
const producto3 = new Producto(3, "ACCESORIOS EN BRONCE PARA GAS", "accesorios gas", 15, 25, 1000);
const producto4 = new Producto(4, "ACCESORIOS EN POLIETILENO", "accesorios varios", 5, 20, 100);
const producto5 = new Producto(5, "ACCESORIOS EN POLIPROPILENO", "accesorios varios",  10, 50, 200);
const producto6 = new Producto(6, "ACCESORIOS EPOXI", "accesorios gas", 15, 25, 1000);
const producto7 = new Producto(7, "ACCESORIOS PARA FUSIÓN DE AGUA", "accesorios agua", 5, 20, 100);
const producto8 = new Producto(8, "ACOPLES DE COMPRESIÓN", "accesorios varios",  10, 50, 200);
const producto9 = new Producto(9, "AGARRADERAS", "accesorios varios", 15, 25, 1000);
const producto10 = new Producto(10, "ALARGUES PARA CANILLA TRAFILADOS", "accesorios agua", 5, 20, 100);
const producto11 = new Producto(11, "ARANDELAS VARIAS Y O´RINGS", "arandelas y tornillos",  10, 50, 200);
const producto12 = new Producto(12, "BOTONES PARA DEPÓSITO PARED Y MOCHILA", "accesorios inodoro", 15, 25, 1000);

let stockProductos=[producto1, producto2, producto3, producto4, producto5, producto6, producto7, producto8, producto9, producto10, producto11, producto12]







