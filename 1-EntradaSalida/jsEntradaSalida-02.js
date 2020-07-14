/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	var dato;
	dato = prompt("Ingrese un dato");
	alert(dato);
	// alert(prompt("Ingrese un dato")); // NO
}

// var dato; // undefined = no tiene valor - nunca tuvo valor
// nombre = "Mario" // string
// nombre = null; // null = tuvo valor pero se lo saque
// nombre = 12 // number -> Nan Infinity
// nombre = true; // boolean (True/False)
// typeof // me dice que tipo de dato estoy utilizando