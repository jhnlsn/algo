class Is{  
    static int factorial(int n){    
        if (n == 0)    
            return 1;    
        else    
            return(n * factorial(n-1));    
    }    
    public static void main(String[] args){  
        int fact = factorial(4);   
        System.out.println("Factorial is: " + fact);
    }
}