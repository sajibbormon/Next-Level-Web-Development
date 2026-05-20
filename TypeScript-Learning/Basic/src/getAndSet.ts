// now if we want to access these addBalance method or showBalance method as like properties then we can use set and get method.  

// to set the value we can use set method. 

// to get the value we can use get method. on get method we need to return some values





class BankAccount { 
    // userId: number;
    readonly userId: number;
    userName: string;
    // userBalance: number;
    // only making can be accessible inside the BankAccount class 
    private userBalance: number;
    protected nominee: string;

    constructor(userId: number, userName: string, userBalance: number, nominee: string){
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
        this.nominee = nominee;
    }

    // addBalance(amount: number){
    //     this.userBalance = this.userBalance + amount;
    // }

    set addBalance(amount: number) {
        this.userBalance = this.userBalance + amount;
    }

    // showBalance(){
    //     console.log(`Your balance is ${this.userBalance}`);
    // }

    
    get showBalance(){
        return this.userBalance;
    }


}


const sajibAccount = new BankAccount(1, "Sajib", 10000000000, "Payel");

// now we are not using any parenthesis after the function.

sajibAccount.addBalance = 4000000000;

console.log(sajibAccount.showBalance);
