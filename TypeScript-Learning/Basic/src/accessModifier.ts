/**
 * Access Modifier: give access and modify access: public, private
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

    addBalance(amount: number){
        this.userBalance = this.userBalance + amount;
    }

    showBalance(){
        console.log(`Your balance is ${this.userBalance}`);
    }
}

const sajibAccount = new BankAccount(1, "Sajib", 10000000000, "Payel");

// sajibAccount.userId = 222; // we can easily change the userId which is a big flaw to the banking system as we can not change the userId. so we need to use readonly.


// sajibAccount.userBalance = 0; // we can also make it 0 or direcltly assign value, as it is not recommended. also we can not make it readonly as balance changes over time. what if we need to add balance. then we can make a method for this. and also make it private only to access inside the main class


sajibAccount.addBalance(200000000);
sajibAccount.showBalance();

//let's know about protected keyword
//difference between private and protected is private can only accessible to the class where it is declare and protected can accessible to the declaration class alsso in the child class of the main class.

class StudentBankAccount extends BankAccount {
    constructor(userId: number, userName: string, userBalance: number, nominee: string){
        super(userId, userName, userBalance, nominee );
        
    }

    showNominee(){
        console.log(`Nominee name is ${this.nominee}`);
        // console.log(`User balance is ${this.userBalance}`);can not access to this class as private.
    }
    
}

