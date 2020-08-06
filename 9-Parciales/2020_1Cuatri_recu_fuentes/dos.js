function mostrar()
{
  var respuesta;
  var tipo;
  var precio;
  var precioConDescuento;
  var cantidad;
  var acumuladorprecioBruto = 0;
  var acumuladorDeCantidadDeBolsas = 0;
  var descuento;
  var bolsasMaximas = 0;
  var tipoBolsasMaximas;
  var precioMaximo = 0;
  var tipoMasCaro;

  do{
    do {
      tipo = prompt("Ingrese el tipo");
      tipo = tipo.toLocaleLowerCase();
    }while(tipo != 'arena' && tipo != 'cal' && tipo != 'cemento');

    do {
      precio = parseInt(prompt("Ingrese un precio"))
    }while(isNaN(precio) || precio < 0);

    do{
      cantidad = parseInt(prompt("Ingrese un precio"))
    } while(isNaN(precio) || cantidad < 0);

    //A
    acumuladorprecioBruto += precio * cantidad;

    //B
    acumuladorDeCantidadDeBolsas += cantidad;

    //D
    if(cantidad > bolsasMaximas){
      bolsasMaximas = cantidad;
      tipoBolsasMaximas = tipo;
    }

    //F
    if(precio > precioMaximo){
      precioMaximo = precio;
      tipoMasCaro = tipo;
    }

    respuesta = confirm('Desea continuar?');
  }while(respuesta == true); //TERMINA WHILE
  
  //A
  console.log('El precio bruto a pagar es: ' + acumuladorprecioBruto)

  //B
  if(acumuladorDeCantidadDeBolsas > 10 && acumuladorDeCantidadDeBolsas < 30){
    descuento = 0.15;
    precioConDescuento = acumuladorprecioBruto - (acumuladorprecioBruto * descuento);
  } else if(acumuladorDeCantidadDeBolsas > 30){
    descuento = 0.25;
    precioConDescuento = acumuladorprecioBruto - (acumuladorprecioBruto * descuento);
  }
  //D
  console.log('El tipo es: ' + tipoBolsasMaximas + ' y la cantidad es ' + tipoBolsasMaximas);

  //F
  console.log('El tipo es mas caro es ' + tipoMasCaro + ' con un precio de ' + precioMaximo);
}




























/* MAL

  var respuesta;
  var bolsaArena;
  var bolsaCemento;
  var bolsaCal;
  var bolsasTotal;
  var precioArena;
  var precioCemento;
  var precioCal;
  var precioTotalArena;
  var precioTotalCemento;
  var precioTotalCal;
  var acumuladorPrecioBolsa;
  var totalConDescuento;

  precioArena = 200;
  precioCemento = 250;
  precioCal = 350;
  
  do {
    do{
      alert("El precio de cada bolsa de arena es: 200")
      bolsaArena = parseInt(prompt('Ingrese cuantas bolsas de arena quiere llevar'));
    }while(isNaN(bolsaArena));
    precioTotalArena = precioArena * bolsaArena;
    do {
      alert("El precio de cada bolsa de cemento es: 250 ")
      bolsaCemento = parseInt(prompt('Ingrese cuantas bolsas de cemento quiere llevar'));
    } while(isNaN(bolsaCemento));
    precioTotalCemento = precioCemento * bolsaCemento;
     
    do {
      alert("El precio de cada bolsa de cal es: 350")
      bolsaCal = parseInt(prompt('Ingrese cuantas bolsas de cal quiere llevar'));
    } while (isNaN(bolsaCal));
    precioTotalCal = precioCal + bolsaCal;
    
    respuesta = confirm("Desea continuar?")
  }while(respuesta == true)

  bolsasTotal = (bolsaCal + bolsaArena + bolsaCemento);
  acumuladorPrecioBolsa = precioTotalCal + precioTotalArena + precioTotalCemento;

  //A
  console.log('El total a pagar bruto sin descuento es: ' + acumuladorPrecioBolsa);
  //B
  if(bolsasTotal > 10 && bolsasTotal < 30){
    totalConDescuento =  (acumuladorPrecioBolsa - (acumuladorPrecioBolsa * 0.15));
    console.log('El total a pagar con descuento por comprar mas de 10 bolsas es: ' + totalConDescuento);
  } else if (bolsasTotal > 30){
    totalConDescuento =  (acumuladorPrecioBolsa - (acumuladorPrecioBolsa * 0.25));
    console.log('El total a pagar con descuento por comprar mas de 30 bolsas es: ' + totalConDescuento);
  } else {
    console.log('Compro menos de 10 bolsas, no tiene descuento, precio total: ' + acumuladorPrecioBolsa);
  }
  //D



*/
