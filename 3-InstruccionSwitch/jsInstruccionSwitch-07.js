function mostrar()
{
	var destinoIngresado;
	destinoIngresado = txtIdDestino.value;

	switch (destinoIngresado) {
		case 'Bariloche':
			alert("Punto cardinal Oeste");
			break;
		case 'Cataratas':
			alert("Punto cardinal Norte");
			break;
		case 'Mar del plata':
			alert("Punto cardinal Este");
			break;
		default:
			alert("Punto Cardinal Sur");
			break;
	}
	
}//FIN DE LA FUNCIÓN