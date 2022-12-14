let equipos = new Array(8);
let semifinales = new Array(4);
let finales = new Array(2);
for (let i = 0 ; i < 8; i++){
    equipos[i] = prompt("ingresa los nombres de los equipos de cuartos de final, equipo"+,(i*1))
}
let res;
console.log("cuartos de final");
for (let i = 0 ; i < 8; i++){
    console.log("a: "+equipos[2*i]+" - b: " + equipos[2*i+1]);
    res = prompt("ingresa el resultado")
    if(res == "a")
       semifinales[i] = 2*i;
    else
       semifinales[i] = 2*i*1;
}
console.log("semifinales");
for (let i = 0 ; i < 8; i++){
    console.log("a: "+equipos[semifinales[2*i]]+" - b: " + equipos[2*i+1]);
    res = prompt("ingresa el resultado")
    if(res == "a")
       finales[i] = 2*i;
    else
       finales[i] = 2*i*1;
}
console.log("la final es")
console.log(equipos[finales[0]]+ " vs " + equipos[finales[1]])
res = prompt("ingresa el resultado")
console.log("el ganador de la copa del mundo es")

if(res == "a")
   console.log(equipos[final[0]]);
else
   console.log(equipos[final[1]]);