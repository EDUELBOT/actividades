let ar = [[1,2,3],[4,5,6],[7,8,9]]

int main(){
	int contador;//Variable contadora de ciclos
	char numeros[5][20]; //Arreglo que guardara los numeros
	
	//Ciclo en el que solicitamos los numeros a ingresar
	for(contador=0;contador<5;contador++){
		printf("Ingresa un numeroo: ");
		gets(numeros[contador]);
	}
	
	//Ciclo que imprime los numeros guardados
	printf("\nNumeros ingresados: \n");	
	for(contador=0;contador<5;contador++){
		puts(numeros[contador]);
	} 
	
	return 0;		
}