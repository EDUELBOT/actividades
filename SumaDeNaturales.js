main(){
    let N;
    let i;
    let suma=0;


    printf("Teclee el valor de N\n");
    scanf("%d",& N);
    i=1;
    while (i<=N){
          suma=suma+i;
          i++;
    }
    printf("La suma es:%d",suma);
    getch();
}
