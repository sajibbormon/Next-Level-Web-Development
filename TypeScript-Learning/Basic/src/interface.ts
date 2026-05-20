/**
 * Interface that is similar like type alias.
 

 */

// type aliasing
type User = {
    name: string;
    age: number;

};


type Role = {
    role: "Avengers" | "Superhero";
}


type UserWithRole = User & Role;



const user1: UserWithRole = {
    name: "Ironman",
    age: 37,
    role: "Avengers",
}

const user2: User = {
    name: "Spiderman",
    age: 18,
}


// now using interface
// we don't need to use any equal

// can only be used with object type of data: object, array, function etc.

interface IUser {
    name: string;
    age: number;
}

const user3 : IUser = {
    name: "Ironman",
    age: 38
}

// it is seems like exactly type aliasing but there is a simple difference between them. In primitive type we can not use interface, but we can use type aliasing

type IsAdmin = boolean;

const isAdmin: IsAdmin = true;

interface IUserWithRole extends IUser{
    role: "Avengers" | "Superhero";
} 


// interfece in function

// let's see example with type aliasing
type Add = (num1: number, num2: number)=> number;

const add: Add = (num1, num2) =>{
    return num1 + num2;
}

// let's see example with interface

//first understand some concepts then move to it.

type Friends = string[];

const friends: Friends = ["A", "B", "C"];

// as array's indexes are number 0, 1, 2.... so the index is number and it is holding string value
interface IFriends{
    [index: number] : string;
}

const iFriends : IFriends = ["A", "B", "C"];

interface IAdd {
    (num1: number, num2: number): number;
}



const iAdd: IAdd = (num1, num2) => num1 + num2;


// now when to use what, generally interface should be use in object. and type aliasing in others cases.


