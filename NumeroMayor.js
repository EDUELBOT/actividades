public static void main(String[] args) {
    Scanner sc = new Scanner(System.in);
    let maximo;
    let num;
    let mayor=0;
    let cont;
 
    System.out.println("Inserte el máximo de números: ");
    maximo = sc.nextInt();
 
    for(cont = 0;cont < maximo;cont++ ){
        System.out.println("Inserte un número: ");
        num = sc.nextInt();
        if(num>mayor)
        {
            mayor=num;
        }
    }
    System.out.println("El valor mayor es "+mayor);
}