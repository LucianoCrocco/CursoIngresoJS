/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var ingreseImporte;
	var descuentoTotal;

	ingreseImporte = txtIdImporte.value;
	
	ingereseImporte = parseInt(ingreseImporte);

	descuentoTotal = (ingreseImporte * 0.75); // No usar 0","75, usar "."
	
	txtIdResultado.value = descuentoTotal;

}
