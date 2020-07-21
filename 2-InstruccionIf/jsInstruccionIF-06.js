function mostrar()
{
	var edad;
	
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if(edad >= 18){
		alert("Mayor de edad")
	} else {
		if(edad <= 17 && edad >= 13){
			alert("Adolescente")
		} else {
			alert("Niño")
		}
	}
}