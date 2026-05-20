/**
 * Non-primitive: Array, Object, tuple ect.
 
 */

let bazarList = ["Shrimps", "Potato", "Coriander"]; //implictly given type (it is such that: barazList: string[] )

// bazarList.push(12); // it will give error as the array is string type

bazarList.push("Chicken");

let fruits = ["Apple", 2 , "Mango", 5, "Berry", 2, "Banana", 4]; // fruits: (string | number)[]. In this array we can push both string and number

fruits.push("Grape");
fruits.push(2);

console.log(bazarList, fruits);

let grocceries : (string | number)[] = ["Soup", 12, "Detergents", 2];

let chothes: string[] = ["Shirt", "Pant", "Payel's dress", "Payel's sharee"];

// fruits.push(true); //it will give error as we can assign boolean value to it.


// tuple

let coordinates : [number, number] = [20, 30];

let personInfo: [string, number] = ["Sajib", 27];

let destination : [string, string, number] = ["Dhaka", "Gazipur", 2];


// reference type: object

// implicitly takes string, string
let user1 = {
    firstName: "Sajib",
    lastName: "Bormon",

};

// explicitly providing variable type
let user2: {
    firstName : string;
    lastName : string;
} = {
    firstName : "Payel",
    lastName: "Bormon",
};


let user3: {
    organization: "Omniverse LTD.";  //selecting value as type (value = type), it can't be changed. Fixed value, which is called literal type.
    firstName : string; //required
    middleName?: string; //this one is option type
    lastName: string; //required
} = {
    organization: "Omniverse LTD.",
    firstName : "Frist Name",
    lastName: "Last Name"
};

//when a data type is optional, it will give error if user don't assign any value otherwise user must enter value



// to fixed a value we can also do it using access modifier (readonly).

let user4: {
    readonly organization: "Omniverse LTD.";  // using access modifier we are fixing the organization name.
    firstName : string; //required
    middleName?: string; //this one is option type
    lastName: string; //required
} = {
    organization: "Omniverse LTD.",
    firstName : "Frist Name",
    lastName: "Last Name"
};

