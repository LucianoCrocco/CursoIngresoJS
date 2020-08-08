function mostrar()
{
    var respuesta;
    var bolsa;
    var cantidad;
    var precio;
    var totalBruto = 0;
    var descuento;
    var acumulableDescuento = 0;
    var descuentoTotal = 0;
    var acumulableCantidad = 0;
    var contadorBolsa = 0;
    var mayorTipoBolsa;
    var mayorCantidadBolsa;
    var contadorPrecio = 0;
    var mayorTipoPrecio;
    var mayorCantidadPrecio;

    do {
        do {
            bolsa = prompt('Ingrese el tipo de bolsa');
        } while (bolsa != 'cal' && bolsa != 'arena' && bolsa != 'cemento');
        do {
            cantidad = parseInt(prompt('Ingrese la cantidad'))
        } while (isNaN(cantidad) || cantidad <= 0);
        do {
            precio = parseInt(prompt('Ingrese el precio'))
        } while (isNaN(precio) || precio <= 0);

        //A
        totalBruto += precio * cantidad;

        //B
        acumulableCantidad += cantidad;

        //D
        if (contadorBolsa < 1) {
            contadorBolsa++;
            mayorCantidadBolsa = cantidad;
            mayorTipoBolsa = bolsa;
        } else {
            if (mayorCantidadBolsa < cantidad) {
                mayorCantidadBolsa = cantidad;
                mayorTipoBolsa = bolsa;
            }
        }

        //F
        if (contadorPrecio < 1) {
            contadorPrecio ++;
            mayorTipoPrecio = bolsa;
            mayorCantidadPrecio = precio;
        } else {
            if (mayorCantidadPrecio < precio) {
                mayorTipoPrecio = bolsa;
                mayorCantidadPrecio = precio;
            }
        }

        respuesta = confirm('Desea continuar?');
    } while (respuesta == true);

    //A
    console.log('El total bruto es ' + totalBruto);

    //B
    if (acumulableCantidad > 30) {
        descuento = 0.25;
        acumulableDescuento += (totalBruto * descuento);
        descuentoTotal = totalBruto - acumulableDescuento;
    } else if (acumulableCantidad < 30 && acumulableCantidad > 10) {
        descuento = 0.15;
        acumulableDescuento += (totalBruto * descuento);
        descuentoTotal = totalBruto - acumulableDescuento;
    } else {
        descuento = 0;
        acumulableDescuento += (totalBruto * descuento);
        descuentoTotal = totalBruto - acumulableDescuento;
    }
    if (descuentoTotal == totalBruto){
        console.log('No hay descuento')
    } else {
        console.log('El total con el descuento aplicado es ' + descuentoTotal);
    }

    //D
    console.log ('El mayor tipo de bolsa comprado es: ' + mayorTipoBolsa);
    
    //F
    console.log ('El tipo con mayor precio es: ' + mayorTipoPrecio);
}
