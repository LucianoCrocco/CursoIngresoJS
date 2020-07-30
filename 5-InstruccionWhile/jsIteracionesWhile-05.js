/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	var contador;

	contador = 1;
	sexoIngresado = prompt("ingrese f ó m .");

	while ((sexoIngresado != 'f' && sexoIngresado != 'm') & contador <3) {
	console.log('Ingrese solamente f o m');	
	sexoIngresado = prompt("ingrese f ó m .");
	contador++;
	}
	if(sexoIngresado == 'f' || sexoIngresado == 'm'){
		txtIdSexo.value=sexoIngresado;
	}
}//FIN DE LA FUNCIÓN