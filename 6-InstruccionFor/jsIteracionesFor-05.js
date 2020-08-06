function mostrar()
{

    for (let numero;numero != 9;) {
		numero = parseInt(prompt("Ingrese un numero"));
		if (isNaN(numero)){
			alert("Utilizar solo numeros");
			continue;
		}
	}
}//FIN DE LA FUNCIÓN


/*
for(;;){
	var numero;
	numero= prompt("Ingrese un numero");
	if(numero == 9){
		break;
	}
}*/