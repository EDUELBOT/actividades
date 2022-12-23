var nextIndex = function(board){
    for(let i = 0;  Yo <  junta. longitud;  Yo++){
      for(sea j = 0;  J < Junta. longitud;  j++){ // tomando una de las filas(digamos primera fila)( teniendo ancho del tablero aquí)
          if(board[i][j] === '0'){
              devolver [i,j];  // Esto nos da el índice row(=i) y column(=j)
          }
      }
    }
  devolver false;  // si hemos llegado al final(no queda i,j en todo el tablero/Sudoku)
  };

  var isValidNum = function(board, row, col, num){
       num = num + '';
  Registrar en la misma fila si hay NUM
    for( sea j = 0;  J < Junta. longitud;  j++){ // registro de columnas(j) de la misma fila
        if(board[row][j] === num && j !== col){ // si encontramos el mismo no. en la fila
            devolver false;  // entonces no es un no válido. Allí
        }
    }
    //
    for( sea i = 0;  Yo <  junta. longitud;  i++){ // registro de filas(j) de la misma columna
      if(board[i][col] === num && i !== fila ){
          return false;
      }
  }
  Sub-cuadrícula
  let boxRow = parseInt(row /  3) * 3;
  let boxCol = parseInt(col /  3) * 3;
  for(let i = boxRow;  i < boxRow + 3;  Yo++){
      for(let j = boxCol;  j < boxCol + 3;  j++){
          if(board[i][j] === num && (i !== row && j    !== col )){
              return false;
          }
      }
  }
      Devolver verdadero;
  }

  Función principal
  var solveSudoku = function(board){
      Condición de la base
      si(! nextIndex(board)){ //Si no hay un índice siguiente dentro del tablero
            Devolver verdadero;
      }
      Pero si hay algunas celdas vacías en el tablero
      let boardIndexes = nextIndex(board) // Si los hay, encontrar sus índices(por ejemplo, [0,2]) 
      let row = boardIndexes[0];
      let col = boardIndexes[1];
      for(let num = 1;  núm < 10;  Num++){
          if(isValidNum(tablero, fila, col, num)){
              Rellenar con el número 
             tablero[fila][col] = num +'';  // esto tiene que ser una cadena
             recursivamente llamando a la misma función (solveSudoku) para comprobar el tablero
             if(solveSudoku(board)){ //true(es decir, todo este sudoku se puede resolver en primer lugar, es un sudoku válido)
                 Devolver verdadero;
             }
             retroceder
             board[row][col] = '0';
          }
      }
        return false;
  };

  let matrix =[['0','0','0','2','6','0','7','0','1'],
               ['6','8','0','0','7','0','0','9','0'],
               ['1','9','0','0','0','4','5','0','0'],
               ['8','2','0','1','0','0','0','4','0'],
               ['0','0','4','6','0','2','9','0','0'],
               ['0','5','0','0','0','3','0','2','8'],
               ['0','0','9','3','0','0','0','7','4'],
               ['0','4','0','0','5','0','0','3','6'],
               ['7','0','3','0','1','8','0','0','0']];

  consola. log(solveSudoku(matrix));
  consola. log(matriz);