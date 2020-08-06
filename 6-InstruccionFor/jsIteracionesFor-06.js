function mostrar()
{
	var numeroIngresado;
	var contadorDePares;
	contadorDePares = 0;

	do{
		numeroIngresado = parseInt(prompt("Ingrese un numero mayor a 1."));
	}while(isNaN(numeroIngresado) || numeroIngresado <= 1);

	for(let cantidad = 1; cantidad < numeroIngresado; cantidad++){
		if(cantidad % 2 == 0){ // ES PAR
			console.log(cantidad);
			contadorDePares++;
		}
	}
	console.log('Cantidad de numeros pares: ' + contadorDePares);
}//FIN DE LA FUNCIÓN
/* OTRA FORMA.
for(let cantidad = 2; cantidad < numeroIngresado; cantidad+=2){
	contadorDePares++;
	console.log(cantidad)
}*/