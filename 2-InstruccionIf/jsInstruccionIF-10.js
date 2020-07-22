function mostrar()
{
	var max;
	var min;
	var notaRandom;

	max = 11;
	min = 1;

	notaRandom = Math.floor(Math.random() * (max - min)) + min;

	if (notaRandom >= 9){
		alert("Excelente " + notaRandom);
	} else {
		if(notaRandom <=8 && notaRandom >= 4){
			alert("Aprobó " + notaRandom);
		} else {
			alert("Vamos, la próxima se puede. " + notaRandom);
		}
	}
}//FIN DE LA FUNCIÓN 
/* 
if (notaRandom >= 9){
		alert("Excelente " + notaRandom);
	} else {
		if(notaRandom >= 4)
Puedo sacar "(notaRandom <=8" xq cuando decimos en el codigo de
arriba >= 9 damos por sentado que si no se cumple es de 8 para
abajo. 
*/