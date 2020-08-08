//NO USAR TOLOCALUPPERCASE();
//Salvo que use esto por ej: estadoCivil = estadoCivil !=null ? estadoCivil.toLocaleLowerCase():'';

function mostrar()
{
	var nombre;
	var nacionalidad;
	var edad;
	var sexoIngresado;
	var estadoCivil;
	var temperaturaCorporal;
	var respuesta;
	var contadorTemperatura;
	var temperaturaMasAlta;
	var nacionalidadTemperaturaMasAlta;
	var contadorSolterosYMayores;
	var contadorSolterasOViudas;
	var promedioMujeresCasadasEdad;
	var contadorMujeresCasadasEdad;
	var acumuladorMujeresCasadasEdad;

	contadorTemperatura = 0;
	contadorSolterosYMayores = 0;
	contadorSolterasOViudas = 0;
	contadorTemperaturaTerceraEdad = 0;
	promedioMujeresCasadasEdad = 0;
	contadorMujeresCasadasEdad = 0;
	acumuladorMujeresCasadasEdad = 0;

	do {
		nombre = prompt('Ingrese su nombre');
		while(!(isNaN(nombre))){
			alert("Ingrese correctamente su nombre");
			nombre = prompt('Ingrese su nombre');
		}

		nacionalidad = prompt("Ingrese su nacionalidad");
		while(!(isNaN(nacionalidad))){
			alert("Ingrese su nacionalidad correctamente");
			nacionalidad = prompt("Ingrese su nacionalidad");
		}

		do {
			edad = parseInt(prompt("Ingrese su edad"));
		} while(isNaN(edad) || edad < 0);

		do {
			sexoIngresado = prompt("Ingrese su sexo F O M");
			/*if(sexoIngresado != null){
				sexoIngresado = sexoIngresado.toLocaleUpperCase();
			} else {
				sexoIngresado = '';
			}*/
			/* sexoIngresado = sexoIngresado != null ? sexoIngresado.toLocaleUpperCase():''; */
			//variable = condicion ? valorSiEsTrue:ValorSiEsFalse;
		} while(sexoIngresado != 'F' && sexoIngresado != 'M');

		estadoCivil = prompt ('Ingrese su estado civil: soltero, casado o viudo');
		/*estadoCivil = estadoCivil !=null ? estadoCivil.toLocaleLowerCase():'';
		estadoCivil = estadoCivil.toLocaleLowerCase();*/
		while (estadoCivil != 'casado' && estadoCivil != 'soltero' && estadoCivil != 'viudo'){
			alert("Ingrese estado civil valido");
			estadoCivil = prompt ('Ingrese su estado civil: soltero, casado o viudo')
			estadoCivil = estadoCivil.toLocaleLowerCase();
		}

		do {
			temperaturaCorporal = parseInt(prompt("Ingrese su temperatura corporal"));
		}while(isNaN(temperaturaCorporal) || temperaturaCorporal < 1);

		//A
		if(contadorTemperatura < 1){
			temperaturaMasAlta = temperaturaCorporal;
			nacionalidadTemperaturaMasAlta = nacionalidad;
			contadorTemperatura++;
		} else {
			if (temperaturaCorporal > temperaturaMasAlta){
				temperaturaMasAlta = temperaturaCorporal;
				nacionalidadTemperaturaMasAlta = nacionalidad;
			}
		}
		//B
		if(edad > 17 && estadoCivil == 'soltero'){
			contadorSolterosYMayores++;
		}

		//C
		if(sexoIngresado = 'F' && (estadoCivil == 'viudo' || estadoCivil == 'soltero')){
			contadorSolterasOViudas++;
		}

		//D
		if(edad > 60 && temperaturaCorporal > 38){
			contadorTemperaturaTerceraEdad++;
		}

		//E
		if(estadoCivil == 'casado' && sexoIngresado == 'F'){
			contadorMujeresCasadasEdad++;
			acumuladorMujeresCasadasEdad =+ edad;
		}

		respuesta = confirm("Desea continuar ingresando datos?")
	}while(respuesta == true);

	if(contadorMujeresCasadasEdad == 0){
		promedioMujeresCasadasEdad = 'No hay mujeres casadas'
	} else {
		promedioMujeresCasadasEdad = acumuladorMujeresCasadasEdad / contadorMujeresCasadasEdad;
	}

	console.log('La nacionalidad de la persona con mas temperatura ('+ temperaturaMasAlta + 'º) es ' + nacionalidad);
	console.log(contadorSolterosYMayores + ' es la cantidad de solteros y mayores de edad');
	console.log(contadorSolterasOViudas + ' es la cantidad de mujeres solteras o viudas');
	console.log(contadorTemperaturaTerceraEdad + ' es la cantidad de personas mayores a 60 y con mas de 38º de temperatura');
	console.log(promedioMujeresCasadasEdad + ' es el promedio entre las mujeres casadas')

}
