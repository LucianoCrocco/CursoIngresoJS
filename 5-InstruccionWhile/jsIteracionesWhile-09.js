/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{
	var respuesta;
	var numeroMaximo;
	var numeroMinimo;
	var numero;
	var contador;

	contador = 0;
	respuesta = true;

	while (respuesta == true) {
		do {
			numero = parseInt(prompt("Ingrese un numero"));
		} while (isNaN(numero));

		if (contador == 0) {
			contador++; //concepto de bandera/flag
			numeroMaximo = numero;
			numeroMinimo = numero;
		} else if(numero > numeroMaximo){
				numeroMaximo = numero;
			} else if (numero < numeroMinimo) {
				numeroMinimo = numero;
			} 
			respuesta = confirm("Desea continuar?");
		}
	
	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;
}//FIN DE LA FUNCIÓN