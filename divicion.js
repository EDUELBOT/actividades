let numero, divisor, cosiente, producto;
    numero = prompt("Dame un numero que quieras dividir:");
    divisor = prompt("dame el divisor:");

    cosiente = numero/divisor;

    if(cosiente - Math.floor(cosiente) == 0){
        console.log("es exacta");
        console.log("Resultado: ", cosiente);
    }else{
        console.log("es inexacta");
        console.log("Resultado: ",Math.floor(cosiente));
        producto = cosiente - Math.floor(cosiente)
        console.log("Resto: ", producto);
    }