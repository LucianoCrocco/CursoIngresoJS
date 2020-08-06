/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
// REHACER DE OTRA MANERA DISTINTA
function mostrar()
{
	var respuesta;
	var numeroIngresado;
	var sumaNegativos;
	var sumaPositivos;
	var cantidadPositivos;
	var cantidadNegativos;
	var cantidadDeCeros;
	var cantidadDePares;
	var promedioPositivos;
	var promedioNegativos;
	var diferenciaPositivoNegativo;

	cantidadDeCeros = 0;
	cantidadDePares = 0;
	cantidadPositivos = 0;
	cantidadNegativos = 0;
	sumaNegativos = 0;
	sumaPositivos = 0;

	do{
		do{
			numeroIngresado = parseInt(prompt("Ingrese un numero"));
		} while(isNaN(numeroIngresado));

		if (numeroIngresado > 0){
			sumaPositivos += numeroIngresado;; // sumaPositivos = numeroIngresado + sumaPositivos; 
			cantidadPositivos++;
			promedioPositivos = sumaPositivos / cantidadPositivos;
		} else if(numeroIngresado < 0){
			sumaNegativos += numeroIngresado; // sumaNegativos = numeroIngresado + sumaNegativos;
			cantidadNegativos++;
			promedioNegativos = sumaNegativos / cantidadNegativos;
		} else if(numeroIngresado == 0){
			cantidadDeCeros++;
		}

		if(numeroIngresado % 2 == 0){
			cantidadDePares++;
		}
		diferenciaPositivoNegativo = sumaPositivos - sumaNegativos;
		
		respuesta = confirm("Desea ingresar otro numero?");
	} while(respuesta==true);

	

	document.write("la suma de positivos es : "+sumaPositivos);
	document.write("<br> la suma de negativos es : "+sumaNegativos);
	document.write("<br> la cantidad de negativos es : "+cantidadNegativos);
	document.write("<br> la cantidad de positivos es : "+cantidadPositivos);
	document.write("<br> la cantidad de ceros es : "+cantidadDeCeros);
	document.write("<br> la cantidad de pares es : "+cantidadDePares);
	document.write("<br> el promedio de positivos es : "+promedioPositivos);
	document.write("<br> el promedio de negativos es : "+promedioNegativos);
	document.write("<br> la diferencia de positivos y negativos es : "+diferenciaPositivoNegativo);

}//FIN DE LA FUNCIÓN




/* REVISAR Y REHACER LO QUE ESTA MAL
var respuesta;
	var numeroIngresado;
	var contador;
	var cantidadPositivos;
	var cantidadNegativos;
	var cantidadDePares;
	var cantidadDeCeros;
	var promedioPositivos;
	var promedioNegativos;
	var sumaPositivos;
	var sumaNegativos;
	var diferenciaPositivoNegativo;

	contador = 0;
	cantidadNegativos = 0;
	cantidadPositivos = 0;
	cantidadDePares = 0;
	cantidadDeCeros = 0;
	respuesta = true;
	sumaPositivos = 0;

	while(respuesta == true) {
		do {
			numeroIngresado = parseInt(prompt("Ingrese un numero"));	
		} while(isNaN(numeroIngresado));

		if (numeroIngresado > 0) {
			sumaPositivos = sumaPositivos + numeroIngresado;
			cantidadPositivos++;
		} else if (numeroIngresado < 0 && contador == 0) {
			sumaNegativos = numeroIngresado;
			contador++;
			cantidadNegativos++;
		} else {
			sumaNegativos = numeroIngresado + sumaNegativos;
			cantidadNegativos++;
		}
		/* CANTIDAD DE CEROS
		if(numeroIngresado == 0){
			cantidadDeCeros++;
		}
		if ((numeroIngresado % 2) == 0) {
			cantidadDePares++;
		}
		if(cantidadNegativos > 0){
			promedioNegativos = sumaNegativos / cantidadNegativos;
		}
		if(cantidadPositivos > 0 ) {
			promedioPositivos = sumaPositivos / cantidadPositivos;
		}
		diferenciaPositivoNegativo = sumaPositivos - sumaNegativos;

		respuesta = confirm("Desea continuar?");
	}

	document.write("la suma de positivos es : "+sumaPositivos);
	document.write("<br> la suma de negativos es : "+sumaNegativos);
	document.write("<br> la cantidad de negativos es : "+cantidadNegativos);
	document.write("<br> la cantidad de positivos es : "+cantidadPositivos);
	document.write("<br> la cantidad de ceros es : "+cantidadDeCeros);
	document.write("<br> la cantidad de pares es : "+cantidadDePares);
	document.write("<br> el promedio de positivos es : "+promedioPositivos);
	document.write("<br> el promedio de negativos es : "+promedioNegativos);
	document.write("<br> la diferencia de positivos y negativos es : "+diferenciaPositivoNegativo);

*/