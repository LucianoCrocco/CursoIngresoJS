/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
    var acumuladorPositivo;
    var respuesta;
    var contador;
    var numeroIngresado;
    var acumuladorPositivo;
    var acumuladorNegativo;

    acumuladorPositivo = 0;
    contador = 0;
    respuesta = true;
    acumuladorPositivo = 0;

    while (respuesta == true){
        do{
            numeroIngresado = parseInt(prompt("Ingrese un numero"));
        } while (isNaN(numeroIngresado));

        if (numeroIngresado >= 0) {
            acumuladorPositivo = acumuladorPositivo + numeroIngresado;
        } else if (numeroIngresado < 0 && contador == 0) {
            acumuladorNegativo = numeroIngresado;
            contador ++;
        } else {
            acumuladorNegativo = acumuladorNegativo * numeroIngresado;
        }
        respuesta = confirm("Desea continuar?");
    }
    txtIdProducto.value = acumuladorNegativo;
    txtIdSuma.value = acumuladorPositivo;
}//FIN DE LA FUNCIÓN