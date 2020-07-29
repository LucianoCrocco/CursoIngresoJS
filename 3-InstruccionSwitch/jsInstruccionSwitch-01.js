function mostrar()
{
	//tomo el mes
	var mesDelAño =txtIdMes.value;
	alert(mesDelAño);
/* equivalente del switch
	if (mesDelAño == 'Enero'){
	} else if (mesDelAño == 'Febrero'){
	} else (default) {
	} */

	switch (mesDelAño) {
		case 'Enero':
			alert("Que comiences bien el año!!!");
			break;
		case 'Marzo':
			alert("A clases!!!");
			break;
		case 'Julio':
			alert("Se vienen las vacaciones!!!");
			break;
		case 'Diciembre':
			alert("Felices fiesta!!!");
			break;
		default:
			alert ("Otro mes.")
			break;
	}

}//FIN DE LA FUNCIÓN