/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largo;
    var ancho;
    var alambre;
    var largoTotal;
    var anchoTotal;
    var perimetroRectangulo;

    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;

    largoTotal = parseInt(largo) * 2;
    anchoTotal = parseInt(ancho) * 2;

    perimetroRectangulo = largoTotal + anchoTotal;

    alambre = perimetroRectangulo * 3;

    alert("Se debe comprar: " + alambre + " de alambre");
    
}
function Circulo () 
{
    var radio;
    var perimetro
    var alambre;

    radio = txtIdRadio.value;
    radio = parseFloat(radio);

    perimetro = 2 * radio * Math.PI; // 2 * pi * radio

    console.log(perimetro.toFixed(3)); //toFixed para marcar los decimales
    console.log(Math.round(perimetro)); //redondea para arriba
    console.log(parseInt(perimetro)); //no redondea
    console.log(Math.floor(perimetro)); // redondea hacia abajo
    console.log(Math.ceil(perimetro)); //redondea hacia arriba
    
    perimetro = Math.ceil(perimetro); // redondeo hacia arriba xq son despreciables los cm
    console.log(perimetro);

    alambre = perimetro * 3; 

    alert("Se debe comprar: " + alambre + " de alambre");


}
function Materiales () 
{
    var largo;
    var ancho;
    var bolsasDeCemento;
    var bolsasDeCal;
    var area;

    largo = txtIdLargo.value;
    ancho = txtIdAncho.value;

    largo = parseFloat(largo);
    ancho = parseFloat(ancho);
    area = largo * ancho;

    bolsasDeCemento = area * 2; 
    bolsasDeCal = area * 3;

    alert("Se necesitan " + bolsasDeCal + " bolsas de cal y " + bolsasDeCemento + " de cemento");
}