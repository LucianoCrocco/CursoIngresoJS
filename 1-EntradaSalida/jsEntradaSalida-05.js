/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	var nombre;
	var edad;

	nombre = txtIdNombre.value
	edad = txtIdEdad.value

	//OPERADOR DE CONCATENACION ENTRE OTROS => + 
	//OPERADORES A ARITMETICOS => + - / *
	
	alert("Usted se llama " + nombre + " Y tiene " + edad + " años.")
}

