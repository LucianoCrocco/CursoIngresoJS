function mostrar()
{	
	var edad;
	var estadoCivilIngresado;

	edad = txtIdEdad.value;
	edad = parseInt(edad);
	estadoCivilIngresado = estadoCivil.value

	if(edad <= 17 && estadoCivilIngresado != "Soltero"){
		alert("Es muy pequeño para NO ser soltero.");
	}

}//FIN DE LA FUNCIÓN
/*
if(edad <= 17 && !(estadoCivilIngresado == "Soltero")){
		alert("Es muy pequeño para NO ser soltero.");
*/

/*
var edad;
var estadoCivilIngresado;

edad = txtIdEdad.value;
estadoCivilIngresado = estadoCivilIngresado.value;

console.log(edad);
console.log(estadoCivilIngresado);
*/