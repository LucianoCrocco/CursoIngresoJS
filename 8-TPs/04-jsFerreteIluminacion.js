/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */ /*
function CalcularPrecio () 
{
    var precioIndividual;
    var cantidadDeLamparitas;
    var marcaArgentinaLuz;
    var marcaFelipeLamparas;
    var marcaJeLuz;
    var marcaHazIluminacion;
    var marcaOsram;
    var precioFinal;
    var precioImpuesto;
    var precioDescuento;

    precioIndividual = 35;

    marcaArgentinaLuz = (Marca.value == "ArgentinaLuz");
    marcaFelipeLamparas = (Marca.value == "FelipeLamparas");
    marcaJeLuz = (Marca.value == "JeLuz");
    marcaHazIluminacion = (Marca.value == "HazIluminacion");
    marcaOsram = (Marca.value == "Osram");

    cantidadDeLamparitas = txtIdCantidad.value;
    cantidadDeLamparitas = parseInt(cantidadDeLamparitas);

    if (cantidadDeLamparitas >= 6){
        precioFinal = (precioIndividual * cantidadDeLamparitas) * 0.5;
        console.log(precioFinal);
    } else {
        if(cantidadDeLamparitas == 5 && marcaArgentinaLuz){
            precioFinal = (precioIndividual * cantidadDeLamparitas) * 0.4;
            console.log(precioFinal);
        } else {
            if (cantidadDeLamparitas == 5){
                precioFinal = (precioIndividual * cantidadDeLamparitas) * 0.3;
                console.log(precioFinal);
            } else {
                if (cantidadDeLamparitas == 4 && (marcaArgentinaLuz || marcaFelipeLamparas)){
                    precioFinal = (precioIndividual * cantidadDeLamparitas) * 0.25;
                    console.log(precioFinal);
                } else {
                    if(cantidadDeLamparitas == 4){
                        precioFinal = (precioIndividual * cantidadDeLamparitas) * 0.2;
                        console.log(precioFinal);
                    } else{
                        if(cantidadDeLamparitas == 3 && marcaArgentinaLuz){
                            precioFinal = (precioIndividual * cantidadDeLamparitas) * 0.15;
                            console.log(precioFinal);
                        } else {
                            if (cantidadDeLamparitas == 3 && marcaFelipeLamparas){
                                precioFinal = (precioIndividual * cantidadDeLamparitas) * 0.10;
                                console.log(precioFinal) 
                            } else {
                                if(cantidadDeLamparitas == 3) {
                                precioFinal = (precioIndividual * cantidadDeLamparitas) * 0.05;
                                console.log(precioFinal);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    if(precioFinal >= 120){
        console.log("Recargo 10%, IIBB usted pago: " + (precioImpuesto = (precioFinal * 1.10) - precioFinal) + " como monto de recargo.")
        console.log(Math.floor(precioDescuento = (precioImpuesto + precioFinal)))
        txtIdprecioDescuento.value = parseInt(precioDescuento);;
    } else {
        console.log (precioDescuento = precioFinal);
        txtIdprecioDescuento.value = parseInt(precioDescuento);
    }
} */
/* ESTRUCTURA ELSE-IF
if(condition){
    alert(X)
} else if (condition) {
    alert (Y)
}
*/
// HECHO CON ELSE IF, NO SE IDENTAN  COMO ARRIBA.
function CalcularPrecio () 
{
    var precioIndividual;
    var cantidadDeLamparitas;
    var marcaArgentinaLuz;
    var marcaFelipeLamparas;
    var marcaJeLuz;
    var marcaHazIluminacion;
    var marcaOsram;
    var precioFinal;
    var precioImpuesto;
    var precioDescuento;

    precioIndividual = 35;

    marcaArgentinaLuz = (Marca.value == "ArgentinaLuz");
    marcaFelipeLamparas = (Marca.value == "FelipeLamparas");
    marcaJeLuz = (Marca.value == "JeLuz");
    marcaHazIluminacion = (Marca.value == "HazIluminacion");
    marcaOsram = (Marca.value == "Osram");

    cantidadDeLamparitas = txtIdCantidad.value;
    cantidadDeLamparitas = parseInt(cantidadDeLamparitas);

    if (cantidadDeLamparitas >= 6){
        precioFinal = (precioIndividual * cantidadDeLamparitas) * 0.5;
        console.log(precioFinal);
    } else if(cantidadDeLamparitas == 5 && marcaArgentinaLuz){
        precioFinal = (precioIndividual * cantidadDeLamparitas) * 0.4;
        console.log(precioFinal);
    } else  if (cantidadDeLamparitas == 5){
        precioFinal = (precioIndividual * cantidadDeLamparitas) * 0.3;
        console.log(precioFinal); 
    } else if (cantidadDeLamparitas == 4 && (marcaArgentinaLuz || marcaFelipeLamparas)){
        precioFinal = (precioIndividual * cantidadDeLamparitas) * 0.25;
        console.log(precioFinal);
    } else if(cantidadDeLamparitas == 4){
        precioFinal = (precioIndividual * cantidadDeLamparitas) * 0.2;
        console.log(precioFinal);
    } else if(cantidadDeLamparitas == 3 && marcaArgentinaLuz){
        precioFinal = (precioIndividual * cantidadDeLamparitas) * 0.15;
        console.log(precioFinal);
    } else if (cantidadDeLamparitas == 3 && marcaFelipeLamparas){
        precioFinal = (precioIndividual * cantidadDeLamparitas) * 0.10;
        console.log(precioFinal) 
    } else if(cantidadDeLamparitas == 3) {
        precioFinal = (precioIndividual * cantidadDeLamparitas) * 0.05;
        console.log(precioFinal);
    }
    if(precioFinal >= 120){
        console.log("Recargo 10%, IIBB usted pago: " + (precioImpuesto = (precioFinal * 1.10) - precioFinal) + " como monto de recargo.")
        console.log(Math.floor(precioDescuento = (precioImpuesto + precioFinal)));
        txtIdprecioDescuento.value = parseInt(precioDescuento);
        } else {
            console.log (precioDescuento = precioFinal);
            txtIdprecioDescuento.value = parseInt(precioDescuento);
                }
}