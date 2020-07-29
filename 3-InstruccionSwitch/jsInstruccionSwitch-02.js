function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	alert(mesDelAño);

	switch (mesDelAño) {
		case 'Julio':
			alert("Abrigate que hace frio.");
			break;
		case 'Agosto':
			alert("Abrigate que hace frio.");
			break;
		case 'Septiembre':
			alert("Ya pasamos el frio, ahora calor!!");
			break;
		case 'Octubre':
			alert ("Ya pasamos el frio, ahora calor!!");
			break;
		case 'Noviembre':
			alert("Ya pasamos el frio, ahora calor!!");
			break;
		case 'Diciembre':
			alert("Ya pasamos el frio, ahora calor!!");
			break;
		default:
			alert("Falta para el invierno.")
			break;
	}

}//FIN DE LA FUNCIÓN
/*
	switch (mesDelAño) {
		case 'Julio':
		case 'Agosto':
			alert("Abrigate que hace frio.");
			break;
		case 'Septiembre':
		case 'Octubre':
		case 'Noviembre':
		case 'Diciembre':
			alert("Ya pasamos el frio, ahora calor!!");
			break;
		default:
			alert("Falta para el invierno.")
			break;
	}
Iterando los switches
*/