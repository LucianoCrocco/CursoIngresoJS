function mostrar()
{
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if(edad >= 18){
		alert("Eres mayor de edad");
	} else {
		alert("No eres mayor de edad");
	}

}//FIN DE LA FUNCIÓN