/**
 * Constraint in Typescript is nothing but setting rules while defining type or receiving type as a parameter.
 */

// let's see a flaw in this example
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

//suppose I have student that has no id, name but only has hasWatch. It is not possible in real life as each student should have ID

const student3 = {
    hasWatch: false,
}

const result3 = addStudentToCourse(student3);
console.log(result3);

// this is actually wrong, so we can set rules, as id and name is required.
// setting constrain using extends 

const addStudentToCourseConstrain = <T extends {id: number; name: string;} > (studentInfo: T) => {
    return {
        compnayName: "Omniverse LTD",
        ...studentInfo,
    };
}


const studentConstrain1 = {
    id: 1,
    name: "Sajib",
    hasPen: true,
    hasCar: true,
}

const resultConstrain1 = addStudentToCourseConstrain(studentConstrain1);// now it will error if I comment the id or name from studentConstrain1 object. User must provide id and name.


// we can also smartly handle by creating a type and extends it to make it more clean


type studentRequiredInfo = {
    id: number;
    name: string;
    class: number;
    dob: string;
}

const addStudentToCourseConstrainClean = <T extends studentRequiredInfo > (studentInfo: T) => {
    return {
        compnayName: "Omniverse LTD",
        ...studentInfo,
    };
}

