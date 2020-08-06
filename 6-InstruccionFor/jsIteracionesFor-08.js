function mostrar()
{
	var numeroIngresado;
	var numeroPrimo;
	
	do {
		numeroIngresado = parseInt(prompt("Ingrese un numero"));
	} while(isNaN(numeroIngresado));
	
	for(let i = 0 ; ;i++){
		if(numeroIngresado / i == 1 && numeroIngresado % i == 0){
			console.log ('El numero ' + numeroIngresado + ' es numero primo');
			break;
		}
	}
}//FIN DE LA FUNCIÓN

/*
	for(let i = numeroIngresado;;){
		if(numeroIngresado / i == 1 ){
			numerosPrimo = numeroIngresado;
			console.log ('El numero ' + numeroIngresado + ' es numero primo');
			break;
		} else {
			console.log (numeroIngresado + ' no es un numero primo');
			break;
		}
	}
*/


/*
	for(let i = numeroIngresado ;;){
		if(numeroIngresado % i == 0){
			console.log(numeroIngresado + ' es numero primo');
			break;
		} else {
			console.log(numeroIngresado + ' no es numero primo');
			break;
		}
	}
*/