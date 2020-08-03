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
function mostrar()
{
	var respuesta;
	var numeroIngresado;
	var contador;
	var cantidadPositivos;
	var cantidadNegativos;
	var cantidadDePares;
	var promedioPositivos;
	var promedioNegativos;
	var sumaPositivos;
	var sumaNegativos;
	var diferenciaPositivoNegativo;

	contador = 0;
	cantidadNegativos = 0;
	cantidadPositivos = 0;
	cantidadDePares = 0;
	respuesta = true;
	sumaPositivos = 0;

	while(respuesta == true) {
		do {
			numeroIngresado = parseInt(prompt("Ingrese un numero"));	
		} while(isNaN(numeroIngresado));

		if (numeroIngresado >= 0) {
			sumaPositivos = sumaPositivos + numeroIngresado;
			cantidadPositivos++;
			promedioPositivos = sumaPositivos / cantidadPositivos;
		} else if (numeroIngresado < 0 && contador == 0) {
			sumaNegativos = numeroIngresado;
			contador++;
			cantidadNegativos++;
			promedioNegativos = sumaNegativos / cantidadNegativos;
		} else {
			sumaNegativos = numeroIngresado + sumaNegativos;
			cantidadNegativos++;
			promedioNegativos = sumaNegativos / cantidadNegativos;
		}
		/* CANTIDAD DE CEROS*/
		if ((numeroIngresado % 2) == 0) {
			cantidadDePares++;
		}
		diferenciaPositivoNegativo = (sumaPositivos) + (sumaNegativos);
		respuesta = confirm("Desea continuar?");
	}

	document.write("la suma de positivos es : "+sumaPositivos);
	document.write(" la suma de negativos es : "+sumaNegativos);
	document.write(" la cantidad de negativos es : "+cantidadNegativos);
	document.write(" la cantidad de positivos es : "+cantidadPositivos);
	document.write(" la cantidad de pares es : "+cantidadDePares);
	document.write(" el promedio de positivos es : "+promedioPositivos);
	document.write(" el promedio de negativos es : "+promedioNegativos);
	document.write(" la diferencia de positivos y negativos es : "+diferenciaPositivoNegativo);
}//FIN DE LA FUNCIÓN