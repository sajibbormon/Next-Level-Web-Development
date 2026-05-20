//Generic with Function

// a function that create array from string

const createArrayWithString = (value: string) => [value];

// a function that create array from number
const createArrayWithNumber = (value: number) => [value];

const createArrayWithObj = (value: {id: number, name: string}) => {
    return [value];
}


const arrString = createArrayWithString("Sajib");
console.log(arrString);

const arrNumber = createArrayWithNumber(222);
console.log(arrNumber);

const arrObj = createArrayWithObj({id: 11, name: "Sajib"});
console.log(arrObj);

// now if I need boolean then I have to crate a function for boolean value. this is not a good way to write program. we can dynamically handle it. let's solve it using generic.

//generic function
const CreateArrayWithGeneric = <T> (value: T) => {
    return [value];
}


const arrStringGeneric = CreateArrayWithGeneric("Sajib");
console.log(arrString);

const arrNumberGeneric = CreateArrayWithGeneric(222);
console.log(arrNumber);

const arrObjGeneric = CreateArrayWithGeneric({id: 11, name: "Sajib"});
console.log(arrObj);


//for complex data we can also make multiple generic type at the same time. let's see an example of tuple

const crateArrayWtihTuple1 = (param1: string, param2: string) => [param1, param2];


const crateArrayWtihTuple2 = (param1: {id: number}, param2: string) => [param1, param2];

//generic function
const CreateArrayTupleWithGeneric = <X, Y> (value1: X, value2: Y) => {
    return [value1, value2];
}

const tupleArrayGeneric = CreateArrayTupleWithGeneric("Sajib Bormon", " and Payel Bormon");

console.log(`${tupleArrayGeneric} are the best couple.`);



const addStudentToCourse = <T> (studentInfo: T) => {
    return {
        compnayName: "Omniverse LTD",
        ...studentInfo,
    };
}

const student1 = {
    id: 1,
    name: "Sajib",
    hasPen: false,
    hasCar: true,
}

const student2 = {
    id: 2,
    name: "Payel", 
    hasPen: true,
}


const result1 = addStudentToCourse(student1);
console.log(result1);


const result2 = addStudentToCourse(student2);
console.log(result2);

