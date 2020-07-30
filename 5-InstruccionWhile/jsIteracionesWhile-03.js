/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	claveIngresada = prompt("Ingrese una clave");
	var contador;
	contador = 1;

	while (claveIngresada != 'utn750' && contador < 3) {
		console.log ('La clave es incorrecta, ingrese la correcta.');
		claveIngresada = prompt("Error, Ingrese la clave correcta");
		contador++;
	} 
	/* Podria usar el IF en el caso de abajo tranquilamente */
	while (claveIngresada == 'utn750') {
		console.log('La clave es correcta');
		break;
	}

}//FIN DE LA FUNCIÓN
