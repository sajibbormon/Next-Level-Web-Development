/**
 * Inheritance: Parent and children, inheric from parent class to children clas
 */


class Student {
    
    name: string;
    age: number;
    address: string;

    constructor( name: string,  age: number, address: string){
        this.name = name;
        this.age = age;
        this.address = address;
    }

    getSleep(sleepTime: number){
        console.log(`${this.name} sleeps about ${sleepTime} hours`);
    }
}

const student1 = new Student(`Mr. Fakibaaz`, 18, "Bangladesh");

// now I want to send how much hours he sleeps then we can send the time in a parameter to the method

student1.getSleep(11);


class Teacher {
    
    name: string;
    age: number;
    address: string;
    designation: string; //extra property

    constructor( name: string,  age: number, address: string, designation: string){
        this.name = name;
        this.age = age;
        this.address = address;
        this.designation = designation;
    }

    getSleep(sleepTime: number){
        console.log(`${this.name} sleeps about ${sleepTime} hours`);
    }

    takeClass(classTime: number){
        console.log(`${this.name} takes class about ${classTime} hour`)
    }
}

const teacher1 = new Teacher(`Mr. Smart`, 25, "Bangladesh", "Senior");

teacher1.takeClass(4);


// now both of these classes has some properties are common. also a method is common.

// we can crete a parent class that has these common things.


class Parent {
    name: string;
    age: number;
    address: string;

    constructor( name: string,  age: number, address: string){
        this.name = name;
        this.age = age;
        this.address = address;
    }


    getSleep(sleepTime: number){
        console.log(`${this.name} sleeps about ${sleepTime} hours`);
    }

}


class StudentChild extends Parent {
    // automatically called the constructor
}


const student2 = new StudentChild(`Mr. Fakibaaz`, 18, "Bangladesh");
student2.getSleep(11);


// we can not directly initilize extra property as it is inheriting from parents, so we need to call super(). we need to again take all properties as parameter inside the constructor then sending them using super call.

//super means constructor of parent class.

class TeacherChild extends Parent {
    designation: string;
    

    constructor(name: string, age: number, address: string, designation: string){
        super(name, age, address);
        this.designation = designation;
    }
}