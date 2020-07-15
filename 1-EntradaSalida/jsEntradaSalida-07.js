/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numeroUno;
	var numeroDos;
	
	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	suma = parseInt(numeroUno) + parseInt(numeroDos);

	alert("La suma de ambos numeros es: " + suma);
}

function restar()
{
	var numeroUno;
	var numeroDos;
	
	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	resta = parseInt(numeroUno) - parseInt(numeroDos);

	alert("La resta de ambos numeros es: " + resta);
}

function multiplicar()
{ 
	var numeroUno;
	var numeroDos;
	
	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	multiplicacion = parseInt(numeroUno) * parseInt(numeroDos);

	alert("La multiplicación de ambos numeros es: " + multiplicacion);
}

function dividir()
{
	var numeroUno;
	var numeroDos;

	numeroUno = txtIdNumeroUno.value;
	numeroDos = txtIdNumeroDos.value;

	division = parseInt(numeroUno) / parseInt(numeroDos);
	
	alert("El resultado de la division es: " + division);
	
}

