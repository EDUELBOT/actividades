
    let a = 0,b = 0,c = 0;
    alert ("Dame los lados que hay");
    a = prompt("adyacente:");
    b = prompt("opuesto:");
    c = prompt("hipotenusa");

    if(a == 0){
        a = Math.sqrt(Math.pow(c,2) - Math.pow(b,2));
        console.log("El resultado del cateto adyacente es:", a);
    }else if(b == 0){
        b = Math.sqrt(Math.pow(c,2) - Math.pow(a,2));
        console.log("El resultado del catoto opuesto es:", b);
    }else if(c == 0){
        c = Math.sqrt(Math.pow(a,2) + Math.pow(b,2));
        console.log("El resultado de la hipotenusa es:", c);
    }else if (c == 0 && b == 0 && a == 0){
        alert("Error...");
    }else{
        alert ("Error...");
    }