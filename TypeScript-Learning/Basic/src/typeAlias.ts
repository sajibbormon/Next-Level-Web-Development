/**
 * Type Alias: Define a type or create a template to resuse easily.
 
 */

//before type aliasing


const user1b : {
    id: number;
    name: {
        firstName: string;
        lastName: string;
    };
    gender: "male" | "female";

    contactNo: string;

    address: {
        division: string;
        city: string;
        

    };
    spouseName: string;

}
= {
    id: 1,
    name: {
        firstName: "Sajib",
        lastName: "Bormon"
    },
    gender: "male", 
    contactNo: "0xxxxxxxx",
    address:{
        division: "Gazipur",
        city: "Dhaka"
    },
    spouseName: "Payel Bormon"
}


const user2b : {
    id: number;
    name: {
        firstName: string;
        lastName: string;
    };
    gender: "male" | "female";

    contactNo: string;

    address: {
        division: string;
        city: string;
        

    };
    spouseName: string;

} = {
    id: 1,
    name: {
        firstName: "Payel",
        lastName: "Bormon"
    },
    gender: "female", 
    contactNo: "0xxxxxxxx",
    address:{
        division: "Gazipur",
        city: "Dhaka"
    },
    spouseName: "Sajib Bormon"
}


//now type aliasing (always start with upper case)

type User = {
    id: number;
    name: {
        firstName: string;
        lastName: string;
    };
    gender: "male" | "female";

    contactNo: string;

    address: {
        division: string;
        city: string;
        

    };
    spouseName: string;
};


const user1 : User = {
    id: 1,
    name: {
        firstName: "Sajib",
        lastName: "Bormon"
    },
    gender: "male", 
    contactNo: "0xxxxxxxx",
    address:{
        division: "Gazipur",
        city: "Dhaka"
    },
    spouseName: "Payel Bormon"
}


const user2 : User = {
    id: 1,
    name: {
        firstName: "Payel",
        lastName: "Bormon"
    },
    gender: "female", 
    contactNo: "0xxxxxxxx",
    address:{
        division: "Gazipur",
        city: "Dhaka"
    },
    spouseName: "Sajib Bormon"
}


// for variable
type Name = string;

const myName: Name = "Sajib Bormon";

// how to use type alias for function


type AddFunc = (num1: number, num2: number) => number;  // this type AddFunc takes two number as parameter and return a number

const add: AddFunc = (num1, num2)  => {
    return num1 + num2;
}