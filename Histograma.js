let datoIngresado;
let contadorPositivo=0;
let contadorNegativo=0;

do{
    datoIngresado = prompt("ingresar un valor entero positivo o negativo, termina con 0");
    console.log(datoIngresado)
    if(datoIngresado > 0){
        contadorPositivo++;
    }else if(datoIngresado<0){
        contadorNegativo++;
    }
}while(datoIngresado !=0)
let = renglon="positivos:";
for(let i=0;i<contadorPositivo;i=++){
    console.log("*")
}
console.log(renglon);
let = renglon="negativos";
for(let i=0;i<contadorNegativo;i=++){
    console.log("*")
}

