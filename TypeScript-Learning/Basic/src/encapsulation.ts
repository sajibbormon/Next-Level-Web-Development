/**
 * Encapsulation: 
 */

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

    private addBalance(amount: number){
        this.userBalance = this.userBalance + amount;
    }

    showBalance(){
        console.log(`Your balance is ${this.userBalance}`);
    }

    callHiddenMethod(balance: number){
        this.addBalance(balance);
    }
}

const sajibAccount = new BankAccount(1, "Sajib", 10000000000, "Payel");


class StudentBankAccount extends BankAccount {
    constructor(userId: number, userName: string, userBalance: number, nominee: string){
        super(userId, userName, userBalance, nominee );
        
    }

    showNominee(){
        console.log(`Nominee name is ${this.nominee}`);
        // console.log(`User balance is ${this.userBalance}`);can not access to this class as private.
    }
    
}
