function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
	
	contador=0;
	acumulador=0;

	while (contador < 5) {
		numeroIngresado = parseInt(prompt("Ingrese 5 numeros"));
		if (isNaN(numeroIngresado)) {
			numeroIngresado = prompt("Ingrese un numero valido");
			numeroIngresado = parseInt(numeroIngresado);
		}
		console.log(acumulador = numeroIngresado + parseInt(acumulador));
		contador++;
	}

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;
}//FIN DE LA FUNCIÓN


/*
while (contador < 5) {
	numeroIngresado = parseInt(prompt("Ingrese 5 numeros"));
	if (isNaN(numeroIngresado)) {
		alert ("Ingrese un numero valido");
		continue;
	}
	contador++;
	
}
console.log(acumulador = numeroIngresado + parseInt(acumulador));
*/