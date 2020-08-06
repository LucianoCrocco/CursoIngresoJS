function mostrar()
{
	var repeticiones;

	do{
		repeticiones = parseFloat(prompt("Cuantas veces desea ingresar: Hola UTN FRA?"));
	} while(isNaN(repeticiones) || repeticiones <0);
	
	for(let mensaje = 0 ;mensaje < repeticiones; mensaje++){
		console.log("Hola UTN FRA");
		//document.write("Hola UTN FRA" + "<br>")
	}
}//FIN DE LA FUNCIÓN
/* OTRA MANERA DE HACERLO
do {
	repeticiones = parseInt(prompt("Ingrese cantidad de repeticiones"));
} while(isNaN(repeticiones) || repeticiones <= 0); */