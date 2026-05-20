/**
 * For oop we will use Instance of Guard 
 */

class Person { 
    name: string;
    
    constructor(name: string){
        this.name = name;
    }

    doSleep(numberOfhour: number){
        console.log(`${this.name} sleeps $${numberOfhour} hours`);
    }
}

class Student extends Person {
    constructor(name: string){
        super(name);
    }

    doStudy(numberOfhour: number){
        console.log(`${this.name} do study ${numberOfhour} hours`);
    }
}

class Teacher extends Person {
    constructor(name: string){
        super(name);

    }

    takeClass(numberOfhour: number){
        console.log(`${this.name} takes $${numberOfhour} hours class`);
    }
}

//defining function using person now

const getUserInfo = (user: Person) => {

    

}

// now create an instance

const student1 = new Student("Mr. Student");
const teacher1 = new Teacher("Mr. teacher");

// now if we call the getUserInfo function using these instances it will not understand is it student or teacher.

getUserInfo(student1);

// using guard (narrowing the type)

const getUserInfoGuard = (user: Person)=> {
    if(user instanceof Student ){
        user.doStudy(11);
    }else if(user instanceof Teacher){
        user.takeClass(4);
    }else {
        user.doSleep(7); // 
    }
}

getUserInfoGuard(student1);
getUserInfoGuard(teacher1);



// now using Function Guard (more clean version)

const isStudent = (user: Person) => {
    return user instanceof Student ; //  
}

const isTeacher = (user: Person) => {
    return user instanceof Teacher;
}

const getUserInfoFunctionGuard = (user: Person)=> {
    if(isStudent(user)){
        user.doStudy(11);
    }else if(isTeacher(user)){
        user.takeClass(4);
    }else {
        user.doSleep(7); // 
    }
}