
function mostrar()
{
	var contador = 0;
	var tipoDeProducto;
	var precio;
	var cantidadUnidades;
	var marca;
	var fabricante;
	var contadorAlcoholMasBarato = 0;
	var alcoholMasBarato;
	var fabricanteAlcoholMasBarato;
	var unidadesAlcoholMasBarato;
	var contadorMayorUnidades = 0;
	var tipoMayorUnidades;
	var mayorUnidades;
	var promedioPorCompra;
	var acumuladorParaUnidades = 0;
	var acumuladorParaPrecio = 0;


	var acumuladorJabon = 0;

	do {
		do {
			tipoDeProducto = prompt("Ingrese tipo de producto: jabon, barbijo o alcohol.")
		}while(tipoDeProducto != 'barbijo' && tipoDeProducto != 'jabon' && tipoDeProducto != 'alcohol');

		precio = parseInt(prompt("Ingrese precio"))
		while (!(precio >= 100 && precio <= 300) || isNaN(precio)){
			alert("Ingrese entre 100 y 300");
			precio = parseInt(prompt("Ingrese precio"));
		}
		do {
			cantidadUnidades = parseInt(prompt("Ingrese la cantidad de unidades"));
		} while(isNaN(cantidadUnidades) || cantidadUnidades <= 0 || cantidadUnidades > 1000);

		do {
			marca = prompt("Ingrese marca");
		} while (marca == false);

		do{
            fabricante = prompt("Ingrese un fabricante");
        } while (fabricante == false);

		//A
		if (tipoDeProducto == 'alcohol'){ 
			if(contadorAlcoholMasBarato < 1){
				alcoholMasBarato = precio;
				unidadesAlcoholMasBarato = cantidadUnidades;
				fabricanteAlcoholMasBarato = fabricante;
				contadorAlcoholMasBarato++;
			} else {
				if(precio < alcoholMasBarato){
					alcoholMasBarato = precio;
					unidadesAlcoholMasBarato = cantidadUnidades;
					fabricanteAlcoholMasBarato = fabricante;
				}
			}
		}

		//B
		if(contadorMayorUnidades < 1){
			mayorUnidades = cantidadUnidades;
			tipoMayorUnidades = tipoDeProducto;
			contadorMayorUnidades++;
		} else {
			if (cantidadUnidades > mayorUnidades) {
				mayorUnidades = cantidadUnidades;
				tipoMayorUnidades = tipoDeProducto;
			}
		}
		//B.2
		if(tipoMayorUnidades == tipoDeProducto){
			acumuladorParaPrecio += precio;
			acumuladorParaUnidades += cantidadUnidades;
		}

		//C
		if (tipoDeProducto == 'jabon'){
			acumuladorJabon = cantidadUnidades + acumuladorJabon;
		}

		contador++;
	}while(contador < 2)
	
	//A
	if(contadorAlcoholMasBarato == 0){
		console.log ('No se compro alcohol');
	} else {
		console.log ('El alcohol mas barato-> precio: ' + alcoholMasBarato + ' unidades: ' + unidadesAlcoholMasBarato + ' fabricante: ' + fabricanteAlcoholMasBarato);
	}
	
	//B
	promedioPorCompra =  ((precio * acumuladorParaUnidades) / acumuladorParaPrecio);	
	console.log ('El promedio de compra es: ' + promedioPorCompra);

	//C
	if (acumuladorJabon == 0){
		console.log('No hay unidades de jabon')
	} else {
		console.log('Las unidades de jabon son: ' + acumuladorJabon);
	}
}


/*
if(contadorAlcoholMasBarato < 1 && tipoDeProducto == 'alcohol'){
	alcoholMasBarato = precio;
	unidadesAlcoholMasBarato = cantidadUnidades;
	fabricanteAlcoholMasBarato = fabricante;
	contadorAlcoholMasBarato++;
	} else {
		if(precio < alcoholMasBarato && tipoDeProducto == 'alcohol'){
		alcoholMasBarato = precio;
		unidadesAlcoholMasBarato = cantidadUnidades;
		abricanteAlcoholMasBarato = fabricante;
		}
	}
*/