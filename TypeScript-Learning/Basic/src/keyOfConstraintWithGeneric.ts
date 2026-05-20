/**
 * Key of Operator Constraint with Generic
 */

// what is keyof: it is type operator.



type RichPeoplesVehicle = {
    car: string; // key: value
    bike: string;
    cng: string;
}

type MyVehicle = "bike" | "car" | "cng"; // string literal type and these string literals are taken as keys in RichPeopleVehicle type. 

// we can do the same using keyof
type MyVehicle2 = keyof RichPeoplesVehicle; 

// check

const myVehicle1 : MyVehicle2  = "cng";
const myVehicle2 : MyVehicle2  = "car";
const myVehicle3 : MyVehicle2  = "bike";

//but the below one will give error as ship is not a key of the RichPeopleVehicle type

// const myVehicle4 : MyVehicle2 = "ship"; // 

// let's know for key of constraint

const user = {
    id: 222,
    name: "Sajib",
    address: {
        city: "Dhaka",

    },
};

const myName = user.name;
const myId = user["id"]; // providing the key name 


const address = user["address"];

console.log(myId, myName, address);

//let's create function


// const getPropertyFromObj = (obj: object, key: string)=>{
//     return obj[key];
// }



// const result = getPropertyFromObj(user, "name");

// console.log(result);

//commented as the upper one is giving error

// we are getting result but having an error. bcz object is any type and it can be anything, so typescript is not sure whether it has the key that will be provided, means it doesn't know if it is a object holding key.  so we can solve it using keyof constrain

// first of all declare the type
type User = {
    id: number;
    name: string;
    address: {
        city: string,

    },
};

//now use the type on the object

const user1: User = {
    id: 222,
    name: "Sajib",
    address: {
        city: "Dhaka",

    },
};

// applying keyof constrain

const getPropertyFromObjWithoutError = (obj: User, key: keyof User)=>{
    return obj[key];
}


// now make it next level, let's make a efficient function that works for all types of objects not only for User object. To do this, we need to use Generic.


const getPropertyFromObjWithGeneric = <T> (obj: T, key: keyof T)=>{
    return obj[key];
}

//let's use the same generic function for multiple objects

const product = {
    brand: "HP",
}


const result4 = getPropertyFromObjWithGeneric(user, "name");

const result5 = getPropertyFromObjWithGeneric(product, "brand");


