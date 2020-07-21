function mostrar()
{
	var edad;

	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if(edad >= 18 || edad <= 12){
		alert("Usted NO es adolescente.");
	}

}
//FIN DE LA FUNCIÓN

/*
if(!(edad > 12 && edad < 18)){
		alert("Usted NO es adolescente.");
	}
*/