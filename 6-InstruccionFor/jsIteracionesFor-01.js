function mostrar()
{
	var numero;

	for (/*puedo declarar var dentro de for*/numero = 1; numero < 11; numero++) {
		console.log(numero);
		// document.write(numero + "<br>")

	}
	//La primera iteracion no cambia el numero del contador, la segunda si.
}

 /*
	//SE EJECUTAN AMBOS FOR
	for (contador = 1; contador < 11; contador++) {
		console.log(contador);
	}
	for (contador = 1; contador < 11; contador++) {
		console.log(contador);
	}
	// SE EJECUTA UN SOLO WHILE
	contador = 0;
	while(contador <3){
		contador++;
	}
	while(contador <3){
		contador++;
	}
*/