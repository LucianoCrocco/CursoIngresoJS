function mostrar()
{
/* Calcular dos numeros random entre 1 y 51:
a)Si los dos son pares: Multiplicarlos. Mostrar dato.
b)Si los dos son impares: Restarlos. Mostrar dato.
c)Si alguno es divisible por 5 elevarlo al cubo. Mostrar dato. Elevar uno solo
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
		console.log(("Ambos son impares ") + (alertaResultadoUno = (numeroUno - numeroDos)));
	}
}
if((numeroUno % 5) == 0){
		console.log("El numero uno divisible elevado a la quinta es: " + (alertaResultadoDos = Math.pow(numeroUno, 3)));
	} else {
		if((numeroDos % 5) == 0){
		console.log("El numero dos divisible elevado a la quinta es: " + (alertaResultadoDos = Math.pow(numeroDos, 3)));
		}
	}

if (alertaResultadoUno == 0 && alertaResultadoDos == 0){
	console.log("No pasa nada.");
	}

}//FIN DE LA FUNCIÓN