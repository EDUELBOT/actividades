let filaString = prompt("ingresa el movimiento del caballo");
let ColumnaString = prompt("ingresa la columnaas")

let fila = parseInt(filaString);
let columna = parseInt(ColumnaString);
let salidaFila
let salidaColumna
if(fila > 0 && fila < 9 && columna > 0 && columna < 9){
    console.log("el caballo de(" + salidaFila + "," + salidaColumna +")puede salatr a:")

    salidaFila = fila +2;
    salidaColumna = columna +1;
    if(salidaFila < 9 && salidaColumna <9){
        console.log(salidaFila, salidaColumna)
    }
    salidaFila = fila +1;
    salidaColumna = columna +2;
    if(salidaFila < 9 && salidaColumna <9){
        console.log(salidaFila, salidaColumna)
    }
    salidaFila = fila -2;
    salidaColumna = columna -1;
    if(salidaFila < 9 && salidaColumna <9){
        console.log(salidaFila, salidaColumna)
    }
    salidaFila = fila -1;
    salidaColumna = columna -2;
    if(salidaFila < 9 && salidaColumna <9){
        console.log(salidaFila, salidaColumna)
    }
    salidaFila = fila +1;
    salidaColumna = columna -2;
    if(salidaFila < 9 && salidaColumna <9){
        console.log(salidaFila, salidaColumna)
    }
}
else{
    console.log()
}
