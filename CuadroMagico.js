let n = 5;

let i_ant = 0;
let j_ant = 0;

let punto_ini = n/2;

let [][] matriz_magica = new let [n][n];

let temp = 1;

for(int i=0;i<n;i++){
    for(int j=0;j<n;j++){
        matriz_magica [i][j] = 0
    }
}

let i = 0;
let j = punto_ini;

while (temp != (n*n)+1){
    if(matriz_magica[i][j] == 0){
        matriz_magica[i][j] = temp;
    }else{
        i = i_ant +1;
        j = j_ant;
        matriz_magica[i][j]=temp;
    }
    i_ant = i;
    j_ant = j;

    temp++;
    j++;
    i--;
    if(i<0 && j==n){
        i = n -1;
        j = 0;
    }else if( 1 < 0){
        i = i + n;
    }else if(j==n){
        j = 0;
    }

  for(let x=0;x<n;x**){
    String resultado = "";
    for (let y = 0; y < n; y++) {
        resultado = resultado + " "+ matriz_magica[x][y];
    }
    FileSystem.out.println(""+resultado);
}
}