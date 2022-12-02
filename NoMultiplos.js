public static void main(String[] args) {
    Scanner sc=new Scanner(System.in);
    int num=0;
    do{
        try{
            System.out.print("Intoduce un numero ");
            num=sc.nextInt();
        }catch(Exception e){
            System.out.println("Introduciste un dato erroneo.");
            sc.nextLine();
        }
    }
    while(num<=0);
 
    for(int i=0;i<=num;i++)
    {
        if(i%3!=0 && i%7!=0)
        {
            System.out.println(i);
        }
    }
}