/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var temperaturaFahrenheit;
    var temperaturaCelsius;

    temperaturaFahrenheit = txtIdTemperatura.value;
    temperaturaFahrenheit =  parseInt(temperaturaFahrenheit);

    /* Ahora tengo que pasar de F a C */
    temperaturaCelsius = (temperaturaFahrenheit - 32) * 5/9;
    
    alert(temperaturaCelsius + " ºC");

}

function CentigradosFahrenheit () 
{
	var temperaturaFahrenheit;
    var temperaturaCelsius;

    temperaturaCelsius = txtIdTemperatura.value;
    temepraturaCelsius = parseInt(temperaturaCelsius);

    temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;

    alert(temperaturaFahrenheit + " ºF");
}
