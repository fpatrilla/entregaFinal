class Producto {
    constructor (nombre, precio, stock){
        this.nombre= nombre;
        this.precio= parseInt(precio);
        this.stock= stock;
    }

    

    actualizarStock(x){
        this.stock= this.stock - x;
    }
}

const arrayProductos = [];
arrayProductos.push(new Producto ("cafe", 300, 10));
arrayProductos.push(new Producto ("cortado", 360, 10));
arrayProductos.push(new Producto ("te", 200, 15)); 
arrayProductos.push(new Producto ("torta", 500, 10));
arrayProductos.push(new Producto ("tostado", 600, 10));
arrayProductos.push(new Producto ("medialunas", 200, 15)); 

console.log(arrayProductos);
let arrayMenu = [];
    for (i=0; i<arrayProductos.length; i++){
        arrayMenu.push(arrayProductos[i].nombre+" $"+arrayProductos[i].precio);
    }
alert("Bienvenidos a CaffeShop\n Tenemos para ofrecerle estos productos" +"\n"+arrayMenu.join("\n"));

function ordenarMenorMayor(){
    arrayProductos.sort((a,b)=> a.precio - b.precio);
    console.log(arrayProductos);
    mostrarListaOrdenada();
}




function mostrarListaOrdenada(){
    let array = [];
    for (i=0; i<arrayProductos.length; i++){
        array.push(arrayProductos[i].nombre+" $"+arrayProductos[i].precio);
    }
    alert("Lista de precios de menor a mayor:"+"\n"+array.join("\n"))
}

let total = 0;

function agregarAlCarrito() {
    let otroMas; 
    
    
    do {
        let producto = prompt ("Que pruducto queres Comprar?", "Ej: Cafe"); 
        let cantidad = parseInt(prompt ("¿Cuántos querés comprar?"));    
        let precio;

            switch (producto) {
                case arrayProductos[0].nombre:
                    arrayProductos[0].actualizarStock(cantidad);
                    if (arrayProductos[0].stock < 0 || isNaN(cantidad)){
                        alert("Lo sentimos. En este momento no tenemos stock")
                        arrayProductos[0].stock=arrayProductos[0].stock+cantidad;
                        precio = 0;
                        cantidad = 0;
                    }else{
                        precio= arrayProductos[0].precio;
                    }
                    break;
                case arrayProductos[1].nombre:
                    arrayProductos[1].actualizarStock(cantidad);
                    if (arrayProductos[1].stock<0 || isNaN(cantidad)){
                        alert("Lo sentimos. En este momento no tenemos stock")
                        arrayProductos[1].stock=arrayProductos[1].stock+cantidad;
                        precio = 0;
                        cantidad = 0;
                    }else{
                        precio= arrayProductos[1].precio;
                    }
                    break;
                case arrayProductos[2].nombre:
                    arrayProductos[2].actualizarStock(cantidad);
                    if (arrayProductos[2].stock<0 || isNaN(cantidad)){
                        alert("Lo sentimos. En este momento no tenemos stock")
                        arrayProductos[2].stock=arrayProductos[2].stock+cantidad;
                        precio = 0;
                        cantidad = 0;
                    }else{
                        precio= arrayProductos[2].precio;
                    }
                    break;
                    case arrayProductos[3].nombre:
                    arrayProductos[3].actualizarStock(cantidad);
                    if (arrayProductos[3].stock<0 || isNaN(cantidad)){
                        alert("Lo sentimos. En este momento no tenemos stock")
                        arrayProductos[3].stock=arrayProductos[3].stock+cantidad;
                        precio = 0;
                        cantidad = 0;
                    }else{
                        precio= arrayProductos[4].precio;
                    }
                    break;
                    case arrayProductos[4].nombre:
                    arrayProductos[4].actualizarStock(cantidad);
                    if (arrayProductos[4].stock<0 || isNaN(cantidad)){
                        alert("Lo sentimos. En este momento no tenemos stock")
                        arrayProductos[4].stock=arrayProductos[4].stock+cantidad;
                        precio = 0;
                        cantidad = 0;
                    }else{
                        precio= arrayProductos[4].precio;
                    }
                    break;
                    case arrayProductos[5].nombre:
                    arrayProductos[5].actualizarStock(cantidad);
                    if (arrayProductos[5].stock<0 || isNaN(cantidad)){
                        alert("Lo sentimos. En este momento no tenemos stock")
                        arrayProductos[5].stock=arrayProductos[2].stock+cantidad;
                        precio = 0;
                        cantidad = 0;
                    }else{
                        precio= arrayProductos[5].precio;
                    }
                    break;
                default:
                    alert("Alguno de los ingresados no es correcto");
                    precio= 0;
                    cantidad= 0;
            }
        total= total + precio*cantidad;
        otroMas = confirm("¿Querés agregar otro producto?");
    }while (otroMas);
}



   



let cuotas;
function cantidadCuotas(){
    let confirmacion = confirm("¿Querés pagar en cuotas?");
    if(confirmacion) {
        cuotas=  parseInt(prompt("¿En cuántas cuotas querés pagar?"));
        if (cuotas==0){
            cuotas=1;
        }else if (isNaN(cuotas)){
            cantidadCuotas();
        }
    }else {
        cuotas= 1;
    }
    return cuotas;
}


function calcularIntereses (cuotas) {
    if (cuotas==1){
        return 0;
    }else{
        let tasa = 12.3+ cuotas*0.2;
        return tasa*cuotas;
    }
}


function totalAPagar (total, cuotas, intereses) {
    total = (total+intereses)
    let valorCuota= total/cuotas;
    alert ("El total a pagar es $"+total+" en "+cuotas+" cuotas de $"+valorCuota);
}




function comprar () {
    if (confirm("¿Querés ordenar la lista de productos del más barato al más caro?")){
        ordenarMenorMayor();
    }else{
       
    }
    agregarAlCarrito();
    totalAPagar (((total)), cantidadCuotas(), calcularIntereses(cuotas)) ;
    alert("Muchas gracias por su compra\n Vuelva pronto\n CaffeShop")
}

comprar();