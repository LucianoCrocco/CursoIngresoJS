/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var respuesta;
	var numeroIngresado;
	var acumulador;
	var contador;
	var promedio;

	respuesta = true;
	acumulador = 0;
	contador = 0;

	while (respuesta == true){

	do {
		numeroIngresado = parseInt(prompt("Ingrese un numero"));
		contador++;
	} while(isNaN(numeroIngresado));

	acumulador = parseInt(acumulador) + numeroIngresado;
	promedio = acumulador / contador;

	respuesta = confirm("Desea continar?");
	}
	txtIdSuma.value = acumulador;
	txtIdPromedio.value = promedio; 
}



//FIN DE LA FUNCIÓN

/*
while (isNan(numeroIngresado)) {
	// alert("SOLO NUMEROS")
	// REPITO LA LINEA DE CODIGO DEL OTRO WHILE.

}*/
/*
	var contador;
	var acumulador;
	var respuesta;
	var numeroIngresado;
	
	contador=0;
	acumulador=0;
	//respuesta='si'; (si utilizo el de abajo)
	
	while (respuesta != 'no'){ //respuesta == 'si'(si utilizo el de arriba) 
		respuesta = prompt("Desea continuar?")
		
	}

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;
*/
/*
	var contador;
	var acumulador;
	var respuesta;
	var numeroIngresado;

	contador=0;
	acumulador=0;
	// numeroIngresado = parseInt(prompt('Ingrese un numero'));
	respuesta = confirm("Ingrese solo numeros.");
	while (respuesta == true) {
		respuesta = confirm("Si desea continuar acepte, sino, cancele.");
		numeroIngresado = parseInt(prompt('Ingrese un numero'));
		if (isNaN(numeroIngresado)) {
			alert("Ingrese solo numeros.");
			continue;
		}
		acumulador = parseInt(numeroIngresado) + parseInt(acumulador);
		contador ++;
	}

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;
*/