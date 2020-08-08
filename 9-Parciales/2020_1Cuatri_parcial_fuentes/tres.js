function mostrar()
{
	var respuesta;
	var nombre;
	var edad;
	var sexo;
	var estadoCivil;
	var temperaturaCorporal;
	var contadorTemperatura = 0;
	var temperaturaMaxima;
	var nombreTemperatura;
	var contadorViudos = 0;
	var contadorSolterosOViudos = 0;
	var contadorTerceraEdad = 0;
	var acumuladorPromedio = 0;
	var contadorPromedio = 0;
	var promedioEdad;

	do {
		nombre = prompt('Ingrese su nombre');
		while (!(isNaN(nombre))){
			alert ('Ingrese correctamente su nombre');
			nombre = prompt('Ingrese su nombre');
		}
		do {
			edad = parseInt(prompt('Ingrese su edad'));
		} while (edad < 0 || edad > 120 || isNaN(edad));
		
		do {
			sexo = prompt ('Ingrese F o M segun su sexo');
		} while (sexo != 'F' && sexo != 'M');

		do {
			estadoCivil = prompt('Ingrese su estado civil: casado, soltero o viudo');
		} while(estadoCivil != 'casado' && estadoCivil != 'soltero' && estadoCivil != 'viudo');

		do {
			temperaturaCorporal = parseInt(prompt('Ingrese su temperatura corporal'));
		} while (temperaturaCorporal < 29 || isNaN(temperaturaCorporal));

		//A
		if (contadorTemperatura < 1) {
			contadorTemperatura++;
			temperaturaMaxima = temperaturaCorporal
			nombreTemperatura = nombre;
		} else {
			if (temperaturaCorporal > temperaturaMaxima) {
				temperaturaMaxima = temperaturaCorporal
				nombreTemperatura = nombre;
			}
		}
		//B
		if (estadoCivil == 'viudo' && edad >= 18) {
			contadorViudos++;
		}
		//C
		if( sexo == 'M' && (estadoCivil == 'viudo' || estadoCivil == 'soltero')) {
			contadorSolterosOViudos++;
		}
		//D
		if(edad > 60 && temperaturaCorporal > 38) {
			contadorTerceraEdad++;
		}
		//E
		if (estadoCivil == 'soltero' && sexo == 'M') {
			contadorPromedio++;
			acumuladorPromedio += edad;
		}

		respuesta = confirm('Desea continuar?');
	} while (respuesta == true);
	
	//A
	console.log ('La persona con mas temperatura (' + temperaturaMaxima + 'º) se llama ' + nombreTemperatura);
	//B
	console.log('Los mayores de edad viudos son: ' + contadorViudos);
	//C
	console.log('La cantidad de hombres solteros o viudos es: ' + contadorSolterosOViudos);
	//D
	console.log('La cantidad  de personas de la tercera edad con +38º son: ' + contadorTerceraEdad);
	//E
	if (contadorPromedio == 0) {
		console.log ('No hay hombres solteros')
	} else { 
		promedioEdad = acumuladorPromedio / contadorPromedio;
		console.log ('El promedio de edad entre hombres solteros es ' + promedioEdad)
	}

}