/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	// contador: varibale mas una constante
	/* contador = contador + 1;
	   contador +=1; abreviado de arriba
	   contador ++; pos incremento, evalúa el valor (1º intento de loop) después de incrementar (2º loop)
	   ++contador; pre incremento
	   Aplica para - tambien.

	   acumulador: Variable mas otra varibale.
	   acumulador = acumulador + otraVariable;
	   acumulador += otraVariable;

	   bandera/flag.
	*/
	var contador;
	contador = 0;

	while (contador < 11) {;
		console.log('contador ', contador++);
	}
}//FIN DE LA FUNCIÓN

/*	var contador;
	var acumulador = 0;
	var numero;
	var promedio;

	contador = 0;
	while (contador < 11) {;
		numero = prompt("Ingrese un numero");
		numero = parseInt(numero);

		acumulador = acumulador + numero;
	}
	promedio = acumulador / contador;
	console.log("El promedio es", promedio);
}
*//*
var contador = 0;
while (contador < 100) {
	contador++;
	if(contador % 3 == 0){
		//break;
		console.log('Numero divisible', contador);
		continue; // continua a partir de donde lo dejamos arriba
	}
}
*/