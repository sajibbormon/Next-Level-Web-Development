/**
 * Function
 
Normal and arrow function.


 */

function add(num1: number, num2: number){ // return type is taken implicitly as number
    return num1 + num2;
}

console.log(add(1, 1));


function sum(num1: number, num2: number):number { // explicitly proving return type as number
    return num1 + num2;
}


// arrow function

const mul = (num1: number, num2: number):number => {
    return num1 * num2;
};


const user = {
    name: "Sajib",
    balance: 1000000000,
    addBalance(salary: number):number{
        const totalBalance = this.balance = this.balance + salary;
        return totalBalance;
    }
};

console.log(user.addBalance(10000000));



//callback function

const arr : number[] = [1, 2, 3];

const sqrArr = arr.map((elm: number):number => elm * elm);