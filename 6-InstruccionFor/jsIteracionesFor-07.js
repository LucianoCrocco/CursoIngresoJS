function mostrar()
{
    var numeroIngresado;
    var numeroDivisible;
    var cantidadDeDivisores

    cantidadDeDivisores = 0;
    do {
        numeroIngresado = parseInt(prompt("Ingrese un numero mayor a 1"));
    }while(isNaN(numeroIngresado) || numeroIngresado <= 1);
    
    for(let i = 1; i < numeroIngresado; i++){
        if(numeroIngresado % i == 0){
        numeroDivisible = i;
        console.log(i);
        cantidadDeDivisores++;
        }
    }
    console.log("Cantidad de divisores: " + cantidadDeDivisores); 
}
//FIN DE LA FUNCIÓN

/* OTRA MANERA
for(let contador = numeroIngresado; contador > 0; contador--){
    if(numeroIngresado % i == 0){
        numeroDivisible = i;
        console.log(i);
        cantidadDeDivisores++;
        }
    }
    console.log("Cantidad de divisores: " + cantidadDeDivisores);
}*/