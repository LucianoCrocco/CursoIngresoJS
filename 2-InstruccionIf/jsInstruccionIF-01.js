/* >,<,>=,<=, ==, !=, ===, !==
*/
function mostrar()
{
	var edad;

	edad = txtIdEdad.value;
/* El operador == compara edad (string) con 15 (if), parsea string*/
	if(edad == 15){ 
		alert("La edad es quince");
	} else {
		alert("La edad no es 15");
	}
}
//FIN DE LA FUNCIÓN

// 				OTRAS MANERAS (2º la correcta)
/*
function mostrar()
{
	var edad;

	edad = txtIdEdad.value;
	edad = parseInt(edad);

if(edad === 15){ 
	alert("La edad es quince");
} else {
	alert("La edad no es 15");
}
}

function mostrar()
{
	var edad;

	edad = txtIdEdad.value;

if(edad === '15'){ 
	alert("La edad es quince");
} else {
	alert("La edad no es 15");
}
} */