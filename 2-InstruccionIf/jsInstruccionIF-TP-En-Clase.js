function mostrar()
{
/* Calcular dos numeros random entre 1 y 51:
a)Si los dos son pares: Multiplicarlos. Mostrar dato.
b)Si los dos son impares: Restarlos. Mostrar dato.
c)Si alguno es divisible por 5 elevarlo al cubo. Mostrar dato.
d)Si no ocurrio ningun caso anterior mostrar "No paso nada"
e)Mostrar el resultado en un solo alert.
*/
var numeroRandomUno;
var numeroRandomDos;
var max;
var min;
var numeroUno;
var numeroDos;
var alerta;
var alertaResultadoUno;
var alertaResultadoDos;
var alertaResultadoTres;
var alertaResultadoCuatro;
var suma1;
var suma2;
var suma3;
var suma4;

max = 51
min = 1
numeroRandomUno = Math.floor(Math.random() * (max - min)) + min;
numeroRandomDos = Math.floor(Math.random() * (max - min)) + min;

numeroUno = parseInt(numeroRandomUno);
numeroDos = parseInt(numeroRandomDos);

console.log(numeroUno);
console.log(numeroDos);

if((numeroUno % 2) == 0 && (numeroDos % 2) == 0){
	console.log("Ambos son pares.");
	console.log((alertaResultadoUno = (numeroUno * numeroDos)) + " Ambos multiplicados");
} else {
	if((numeroUno % 2) != 0 && (numeroDos % 2) != 0){
		console.log(("Ambos son impares ") + (alertaResultadoDos = (numeroUno - numeroDos)));
	}
}
if((numeroUno % 5) == 0){
	console.log("El numero uno divisible elevado a la quinta es: " + (alertaResultadoTres = Math.pow(numeroUno, 3)));
}
if((numeroDos % 5) == 0){
	console.log("El numero dos divisible elevado a la quinta es: " + (alertaResultadoCuatro = Math.pow(numeroDos, 3)));
}

if (!((numeroUno % 2) == 0 && (numeroDos % 2) == 0) && (!((numeroUno % 2) != 0 && (numeroDos % 2) != 0))
&& (!((numeroUno % 5) == 0)) && (!((numeroDos % 5) == 0))){
	console.log("No pasa nada.");
	}

if((numeroUno % 2) == 0 && (numeroDos % 2) == 0){
		suma1 = alertaResultadoUno;
} else {
	suma1 = 0;
}

if((numeroUno % 2) != 0 && (numeroDos % 2) != 0){
			suma2 = alertaResultadoDos;
	} else {
		suma2 = 0;
	}

if((numeroUno % 5) == 0){
	suma3 =	alertaResultadoTres;
} else {
	suma3 = 0;
}

if((numeroDos % 5) == 0){
	suma4 = alertaResultadoCuatro;
} else {
	suma4 = 0;
}

alerta = suma1 + suma2 + suma3 + suma4;

if (alerta != 0){
alert ("El resultado cuando se cumple alguna de las condiciones es: " + alerta);
}
 

}//FIN DE LA FUNCIÓN