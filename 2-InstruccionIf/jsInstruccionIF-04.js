function mostrar()
{
	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if(edad <= 17){
		if(edad >= 13){
			alert("Eres adolescente");
		}
	}
}
//FIN DE LA FUNCIÓN
/*
OPERADORES LOGICOS, &&(Y)  ||(OR) !(NOT)

if(edad <=17 && edad >= 13){
	alert("Eres adolescente");
}

A		B		||		&&		!
true    true    true    true    false
true    false   true    false   false
false	true    true    false   true
false	false   false   false   true			 
*/
/* DADO 3 NUMEROS MOSTRAR POR ALERT EL MAYOR

function mostrar()
{
	var numeroUno;
	var numeroDos;
	var numeroTres;

	numeroUno = 5;
	numeroDos = 0;
	numeroTres = 3;
	
	if(numeroDos > numeroUno && numeroDos > numeroTres){
		alert(numeroDos);
	} else {
		if(numeroUno > numeroDos && numeroUno > numeroTres){
			alert(numeroUno);}
		} else {
			if (numeroTres > numeroUno && numeroTres > numeroDos){
				alert(numeroTres); }
			}
}//FIN DE LA FUNCIÓN
MANERA CORRECTA EJERCICIO 6
*/