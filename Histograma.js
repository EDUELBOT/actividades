int datoIngresado;
int contadorPositivo=0;
contadorNegativo=0;

do{
    datoIngresado = prompt("ingresar un valor entero positivo o negativo, termina con 0");
    console.log(datoIngresado)
    if(datoIngresado > 0){
        contadorPositivo++;
    }else if(datoIngresado<0){
        contadorNegativo++;
    }
}while(datoIngresado !=0)
int renglon="positivos:";
for(int i=0;i<contadorPositivo;i=++){
    console.log("*")
}
console.log(renglon);
int renglon="negativos";
for(int i=0;i<contadorNegativo;i=++){
    console.log("*")
}

