/**
 * Mapped types: 
 */


const arrayOfNumber: number[] = [1, 4, 6];

// now I want to make it string type.

const arrayOfString: string[] = ["1", "4", "6"];

// but we can do it without creating variable from scratch, but can generate from the arrayOfNumber variable.

const arrayOfStringUsingMap : string[] = arrayOfNumber.map((num)=> num.toString());

console.log(arrayOfStringUsingMap);


// example of type

type AreaOfNum = {
    height: number;
    width: number;
}

// craeating AreaOfString 
type AreaOfString = {
    height: string;
    width: string;
};

//let's do it using map with using Area 

//know some basic first
type height = AreaOfNum["height"]; 

// we can do the same using map 

type AreaOfStringExmplMap = {
    [key in "height" | "width" ] : string; // key will be height then second time it will be width and 
};

// more clean

type AreaOfStringMapKeyof = {
    [key in keyof AreaOfNum ] : string; // key will be height then second time it will be width and 
};


type AreaOfBooleanMapKeyof = {
    [key in keyof AreaOfNum ] : boolean; // key will be height then second time it will be width and 
};

//let make it next level dynamically using Generic

// now AreaOf'Given Type'

type Area<T> = {
    [key in keyof T]: boolean;
};

// const area1 : Area<{height: string; width: string}> = {
//     height: 50,
//     width: 40,
// }


// this is giving an error bcz type number is not assignable to type boolean, if we send true and false then it will not give error.

// let's make it dynamic too.

type AreaDynamic<T> = {
    [key in keyof T]: T[key] ;

    // each key is dynamically handled
};

// now the T = {height: string; width: string} object, so we need to get the type from the object. to do this we will lookup ['key']


const area1 : AreaDynamic<{height: string; width: number}> = {
    height: '50',
    width: 40,
}

