console.log("2da Preentrega Javascript");
console.log(" ");

/* ------ Simulación de carrito de compras ------ */

const lista_productos = "Producto n°1 - Campera piel rosa Guess - Talle: 7 - $6000" + "\n" +
                        "Producto n°2 - Zapatillas Le Coq Sportiff - Talle: 33 - $5500" + "\n" +
                        "Producto n°3 - Remera ML Cheeky - Talle: 8 - $1500" + "\n" +
                        "Producto n°4 - Campera jean Cheeky Talle: 6 - $6800" + "\n" + 
                        "Producto n°5 - Vestido estampado Mimo - Talle: L - $2700" + "\n" +
                        "Producto n°6 - Conjunto plush Cheeky - Talle: M - $4200" + "\n"

alert(lista_productos);

class Producto{
    constructor(descripcion, talle, precio) {
    this.descripcion = descripcion;
    this.talle = talle;
    this.precio = precio;
    }
}

const producto1 = new Producto("Campera piel rosa Guess", "7", 6000);
const producto2 = new Producto("Zapatillas Le Coq Sportiff", "33", 5500);
const producto3 = new Producto("Remera ML Cheeky", "8", 1500);
const producto4 = new Producto("Campera jean Cheeky", "6", 6800);
const producto5 = new Producto("Vestido estampado Mimo", "L", 2700);
const producto6 = new Producto("Conjunto plush Cheeky", "M", 4200);

let lista_compras = [];
let lista_compras_str = "";
const recargo = 1.1; 
let total = 0;
let recargo_envio = 0;

let entrada = prompt("Ingresar número de producto (del 1 al 6), ESC para terminar");

while (entrada != "ESC") {
    switch (entrada) {
        case "1":
            lista_compras.push(producto1);
            break;
        case "2":
            lista_compras.push(producto2);
            break;
        case "3":
            lista_compras.push(producto3);
            break;
        case "4":
            lista_compras.push(producto4);
            break;
        case "5":
            lista_compras.push(producto5);
            break;
        case "6":
            lista_compras.push(producto6);
            break;
        default:
            alert("Error");
            break;
    }
    entrada = prompt("Ingresar número de producto (del 1 al 6), ESC para terminar");
}

let modo_entrega = parseInt(prompt("Elegir modo de entrega (0= retiro por local, 1= envío por Correo Argentino): "));

if (modo_entrega == 0) { 
    recargo_envio = 1;
} else if (modo_entrega == 1) {
    recargo_envio = 1.05;
} else {
    alert ("ERROR")
}

const lista_compras2 = lista_compras.map((el) => {
    return {
    descripcion: el.descripcion,
    precio: parseInt(el.precio * recargo_envio)
    }
   })

for (let index = 0; index < lista_compras2.length; index++) {
    lista_compras_str += lista_compras2[index].descripcion + " $" + lista_compras2[index].precio + "\n";
}

const subtotal = lista_compras2.reduce((acumulador, elemento) => acumulador + elemento.precio, 0)

alert("El listado de productos seleccionados es: " + "\n" + lista_compras_str);
alert("El subtotal es: $" + subtotal);

let modo_pago = prompt("Elegir modo de pago (0= efectivo/transferencia, 1= MercadoPago): ");

if (modo_pago == "0") {
    total = subtotal;
} else if (modo_pago == "1") {
    total = parseInt(subtotal*recargo);
} else {
    alert ("ERROR")
}

alert("El total de todos los productos seleccionados es: $" + total);

















