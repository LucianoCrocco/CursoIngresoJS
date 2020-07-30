/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	var contador;
	
	contador = 1;

	numeroIngresado = prompt("ingrese un número entre 0 y 9 inclusive.");

	while (!(numeroIngresado >= 0 && numeroIngresado < 10) && contador < 3) {
		console.log("Numeros unicamente entre 0 y 9");
		numeroIngresado = prompt("Ingrese un número entre 0 y 9 inclusive.")
		contador++;
	}
	if(numeroIngresado >= 0 && numeroIngresado < 10){
		txtIdNumero.value = numeroIngresado;
	}
}//FIN DE LA FUNCIÓN