/*RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */
function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
	var estadoCivilIngresado;
	var sueldoBruto;
	var numeroDeLegajo;
	var nacionalidad;

	// A
	edadIngresada = parseInt(prompt("Ingrese su edad"));
	while(!(edadIngresada >= 18 && edadIngresada <= 90) || isNaN(edadIngresada)){ // Ó (edadIngresada < 18 || edadIngresada > 90)
		alert("Ingrese solo edad entre 18 y 90 años");
		edadIngresada = parseInt(prompt("Ingrese su edad"));
	}
	txtIdEdad.value = edadIngresada;

	//B
	sexoIngresado = prompt("Ingrese sexo: F o M");
	sexoIngresado = sexoIngresado.toLocaleUpperCase();
	while(sexoIngresado !='F' && sexoIngresado != 'M'){
		alert("Ingrese solamente F o M");
		sexoIngresado = prompt("Ingrese sexo: f o m");
		sexoIngresado = sexoIngresado.toLocaleUpperCase();
	} 
	txtIdSexo.value = sexoIngresado;

	//C
	estadoCivilIngresado = parseInt(prompt("Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos"));
	while (estadoCivilIngresado !=1 && estadoCivilIngresado !=2 && estadoCivilIngresado !=3 && estadoCivilIngresado !=4){
		alert("Ingresar solo numeros correctos segun corresponda");
		estadoCivilIngresado = parseInt(prompt("Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos"));
	}
	switch (estadoCivilIngresado) {
		case 1:
			txtIdEstadoCivil.value = 'Soltero';
			break;
		case 2:
			txtIdEstadoCivil.value = 'Casado';
			break;
		case 3:
			txtIdEstadoCivil.value = 'Divorciado';
			break;
		default:
			txtIdEstadoCivil.value = 'Viudo';
			break;
	}
	
	//D
	sueldoBruto = parseInt(prompt("Ingrese su sueldo bruto (+=8000)"));
	while (sueldoBruto < 8000 || isNaN(sueldoBruto)){
		alert("No ingreso los datos correctamente, vuelva a ingresar sueldo bruto");
		sueldoBruto = parseInt(prompt("Ingrese su sueldo bruto (+=8000)"));
	}
	txtIdSueldo.value = sueldoBruto;

	//E
	numeroDeLegajo = parseFloat(prompt("Ingrese su numero de legajo"));
	while ((numeroDeLegajo < 1000 || numeroDeLegajo > 9999) || isNaN(numeroDeLegajo)){
		alert("El numero de legajo tiene que ser superior a 1000 y menor a 9999");
		numeroDeLegajo = parseFloat(prompt("Ingrese su numero de legajo"));
	}
	txtIdLegajo.value = numeroDeLegajo;

	//F
	nacionalidad = prompt("Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados");
	nacionalidad = nacionalidad.toLocaleUpperCase();
	while(nacionalidad !='A' && nacionalidad != 'E' && nacionalidad != 'N'){
		alert("Ingrese solamente las letras indicadas segun corresponda");
		nacionalidad = prompt("Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados");
		nacionalidad.toLocaleUpperCase();
	}
	switch (nacionalidad) {
		case 'A':
			txtIdNacionalidad.value = 'Argentina';
			break;
		case 'E':
			txtIdNacionalidad.value = 'Extranjero';
			break;
		default:
			txtIdNacionalidad.value = 'Nacionalizado';
			break;
	}
}








	 
	/*edadIngresada = prompt("Ingrese su edad, entre 18 y 90");
	sexoIngresado = prompt("Ingrese F o M segun su sexo.");
	estadoCivilIngresado = prompt("soltero, casado, divorciado, viudo");
	sueldoBruto = prompt("Ingrese su sueldo bruto, no menor a 8000.");
	nacionalidad = prompt ("Ingrese su nacionalidad: A (argentino), E (extranjero) o N (Nacionalizado)")
	
	sexoIngresado = toUpperCase(sexoIngresado);
	nacionalidad = toUpperCase(nacionalidad);

	USO || para RANGOS NUMERICOS ASI -> while(edadIngresada <18 || edadIngresada > 90)
	estadoCivilIngresado = toLowerCase(estadoCivilIngresado);
	edadIngresada = parseInt(prompt("Ingrese su edad"));
	while (!(edadIngresada >= 18 && edadIngresada <=90) || isNaN(edadIngresada)) {
		alert("Ingrese solamente edades entre 18 y 90.");
		edadIngresada = parseInt(prompt("Ingrese su edad"));
	}
	txtIdEdad.value = edadIngresada;

	sexoIngresado = prompt("Ingrese F o M segun su sexo.");
	sexoIngresado = sexoIngresado.toUpperCase() //toLocaleLowerCase() 
	while (sexoIngresado != 'F' && sexoIngrsado !='M') {
		alert("Ingrese solamente M o F");
		sexoIngresado = prompt("Ingrese F o M segun su sexo.");
	}
	txtIdSexo.value = sexoIngresado; 

	PASAR DE NUMERO A STRING EN EL ESTADO CIVIL.
	estadoCivilIngresado = prompt("Ingrese el numero de Estado Civil segun corresponda: 1-soltero, 2-casado, 3-divorciado, 4-viudo");
	while (estadoCivilIngresado != 1 && estadoCivilIngresado != 2 && estadoCivilIngresado != 3 && estadoCivilIngresado != 4) {
		alert("Solamente estados civiles validos")
		estadoCivilIngresado = prompt("Estado Civil: 1-soltero, 2-casado, 3-divorciado, 4-viudo");
	}
	txtIdEstadoCivil.value = estadoCivilIngresado

	sueldoBruto = prompt("Ingrese su sueldo bruto, no menor a 8000.");
*/
/*
do{
	sexoIngresado = prompt("Ingrese F o M segun su sexo.");
	sexoIngresado = sexoIngresado.toUpperCase() //toLocaleLowerCase() 
} while (!(edadIngresada >= 18 && edadIngresada <=90) || isNaN(edadIngresada));*/