/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numero1;
	var numero2;
	var suma;

	numero1 = txtIdNumeroUno.value;
	numero2 = txtIdNumeroDos.value;

	suma = parseInt(numero1) + parseInt(numero2);

	alert("La suma entre ambos numeros es: " + suma);

	//alert("La suma es: parseInt(numero1) + parseInt(numero2)); -> NO,
	//Se concatena como string y no integer
	//alert("La suma es: parseInt(numero1 + numero2) -> NO, suma 2 str 
	//alert("La suma es: (parseInt(numero1) + parseInt(numero2))); -> SI

}

