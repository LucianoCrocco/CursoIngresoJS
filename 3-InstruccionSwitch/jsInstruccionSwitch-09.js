function mostrar()
{
	var estacionIngresada ;
	var costeBaseViaje;
	var localidadIngresada;
	var precioFinal;

	costeBaseViaje = 15000;
	estacionIngresada = txtIdEstacion.value;
	localidadIngresada = txtIdDestino.value;
	precioFinal = parseInt(precioFinal);

	switch (estacionIngresada) {
		case 'Invierno':
			switch (localidadIngresada) {
				case 'Bariloche':
					precioFinal = costeBaseViaje * 1.20
					break;
				case 'Mar del plata':
					precioFinal = costeBaseViaje - (costeBaseViaje * 0.20);
					break;
				default:
					precioFinal = costeBaseViaje - (costeBaseViaje * 0.10);
					break;
				}
				break;
		case 'Verano':
			switch (localidadIngresada) {
				case 'Bariloche':
					precioFinal = costeBaseViaje - (costeBaseViaje * 0.20);
					break;
				case 'Mar del plata':
					precioFinal = costeBaseViaje * 1.20;
					break;
				default:
					precioFinal = costeBaseViaje * 1.10;
					break;
			}
			break;
		default:
			switch (localidadIngresada) {
				case 'Cordoba':
					precioFinal = costeBaseViaje;
					break;
				default:
					precioFinal = costeBaseViaje * 1.10;
					break;
			}
			break;
	}
	alert(precioFinal);
}//FIN DE LA FUNCIÓN