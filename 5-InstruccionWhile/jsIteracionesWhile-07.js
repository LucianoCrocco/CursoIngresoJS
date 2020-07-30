/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numeroIngresado;
	contador=0;
	acumulador=0;

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN

/*
	var contador;
	var acumulador;
	var respuesta;
	var numeroIngresado;
	contador=0;
	acumulador=0;

	numeroIngresado = parseInt(prompt('Ingrese un numero'));
	while (respuesta == true) {
		if (isNaN(numeroIngresado)) {
			alert("Ingrese solo numeros.");
			continue;
		}
		numeroIngresado = parseInt(prompt('Ingrese un numero'));
		acumulador = parseInt(numeroIngresado) + parseInt(acumulador);
		contador ++;
		respuesta = confirm("Si desea continuar acepte, sino, cancele.");
	}

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;


*/