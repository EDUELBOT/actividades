let numero, decimal;

    numero = prompt("ingresa un numero decimal:");

    if(numero - Math.floor(numero) == 0){
        alert ("Error");
    }else{
        decimal = numero - Math.floor(numero);
        console.log(decimal.toFixed(2));
    }
    