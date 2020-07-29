function mostrar()
{
	var estacionIngresada;
	var destinoDelViaje;

	estacionIngresada = txtIdEstacion.value;
	destinoDelViaje = txtIdDestino.value;

	switch(estacionIngresada){
		case 'Invierno':
			switch(destinoDelViaje){
				case 'Bariloche':
					alert("Se viaja");
					break;
				default:
					alert("No se viaja");
					break;
			}
			break;
		case 'Verano':
			switch(destinoDelViaje){
				case 'Mar del plata':
				case 'Cataratas':
					alert("Se viaja");
					break;
				default:
					alert("No se viaja");
					break;
			}
			break;
		case 'Otoño':
			switch(destinoDelViaje){
				default:
					alert("Se viaja");
					break;
			}
			break;
		default:
			switch(destinoDelViaje){
				case 'Bariloche':
					alert ("No se viaja");
					break;
				default:
					alert("Se viaja");
					break;
			}
			break;
	}
}//FIN DE LA FUNCIÓN