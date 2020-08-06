
function mostrar()
{
    var contador = 0;
    var tipoDeProducto;
    var precio;
    var cantidadDeUnidades;
    var fabricante;
    var precioMaximoJabon;
    var contadorDeJabones = 0;
    var cantidadDeUnidadesJabonMaximas;
    var fabricanteDeJabonesMaximo;
    var cantidadesMaximasTotales = 0;
    var acumuladorCantidadesBarbijo = 0;
    var acumuladorCantidadesJabon = 0;
    var acumuladorCantidadesAlcohol = 0;
    var promedioPorCompra;
    var contadorCompraDeJabones = 0;
    var contadorCompraDeBarbijos = 0;
    var contadorCompraDeAlcohol = 0;


    while(contador < 5){
        contador++;

        do{
            tipoDeProducto = prompt('Ingrese tipo de producto, jabon, barbijo o alcohol');
            tipoDeProducto = tipoDeProducto.toLocaleLowerCase();
        }while(tipoDeProducto != 'barbijo' && tipoDeProducto != 'jabon' && tipoDeProducto != 'alcohol')
        //si es true el boolean que retorna while se ejecuta de nuevo el do

        do {
            precio = parseInt(prompt("Ingrese un precio"));
        } while(isNaN(precio) || (!(precio >= 100 && precio <= 300))); // o precio < 100 || precio > 300

        do {
            cantidadDeUnidades = parseInt(prompt('Ingrese cantidad de unidades'));
        }while(isNaN(cantidadDeUnidades) || cantidadDeUnidades < 1 || cantidadDeUnidades > 1000);

        do{
            fabricante = prompt("Ingrese un fabricante");
        }while(fabricante == false)

        //A -> Del mas caro de los jabones, cantidad de unidades y el fabricante.
        if(tipoDeProducto == 'jabon'){
            contadorDeJabones++;
            if(contadorDeJabones == 1){
                precioMaximoJabon = precio;
                cantidadDeUnidadesJabonMaximas = cantidadDeUnidades;
                fabricanteDeJabonesMaximo = fabricante;
            } else if(precio > precioMaximoJabon){
                precioMaximoJabon = precio;
                cantidadDeUnidadesJabonMaximas = cantidadDeUnidades;
                fabricanteDeJabonesMaximo = fabricante;
            }
        }
        //B -> Del tipo de producto con más unidades en total de la compra, el promedio por compra
        //Maximo cantidad producto
        switch(tipoDeProducto){
            case 'alcohol':
                acumuladorCantidadesAlcohol += cantidadDeUnidades;
                contadorCompraDeAlcohol++;
                break;
            case 'barbijo':
                acumuladorCantidadesBarbijo += cantidadDeUnidades;
                contadorCompraDeBarbijos++;
                break;
            case 'jabon':
                acumuladorCantidadesJabon += cantidadDeUnidades;
                contadorCompraDeJabones++;
                break;
            }
        /*if(cantidadDeUnidades > cantidadesMaximasTotales){
            cantidadesMaximasTotales = cantidadDeUnidades;
        }*/

    }// end while

    //B -> Del tipo de producto con más unidades en total de la compra, el promedio por compra
    //Maximo cantidad producto
    if(acumuladorCantidadesAlcohol > acumuladorCantidadesBarbijo && acumuladorCantidadesAlcohol > acumuladorCantidadesJabon){
        promedioPorCompra = acumuladorCantidadesAlcohol / contadorCompraDeAlcohol;
    } else if(acumuladorCantidadesBarbijo > acumuladorCantidadesJabon){
        promedioPorCompra = acumuladorCantidadesBarbijo / contadorCompraDeBarbijos;
    } else {//Jabon es mayor
        promedioPorCompra = acumuladorCantidadesJabon / contadorCompraDeJabones;
    }
    
    //C -> Cuántas unidades de Barbijos se compraron en total
    console.log(acumuladorCantidadesBarbijo);
}
