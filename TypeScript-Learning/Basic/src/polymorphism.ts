/**
 * Polymorphism: Mean different forms or action in different child classes. Means same function actions are different, showing poly actions.
 */

class Person {
    getSleep(){
        console.log(`Iam a normal person. I sleep for 8 hours`)
    }
}

class Student extends Person{
    getSleep() {
        console.log(`I am a student. I sleep for 7 hours`);
    }
}

class Teacher extends Person{
    getSleep() {
        console.log(`I am a Teacher. I sleep for 6 hours`);
    }
}

class NextLevelDeveloper extends Person{
    getSleep() {
        console.log(`I am a next level developer. I sleep for 6 hours`);
    }
}


const getSleepingHours = (param: Person) => {
    param.getSleep();
}

const person1 = new Person();
const person2 = new Student();
const person3 = new NextLevelDeveloper();

getSleepingHours(person1);
getSleepingHours(person2);
getSleepingHours(person3);

// for each instance of the different class and same function in each class giving different output.


class Shape {
    getArea() {
        return 0;
    }
}

class Circle extends Shape{
    //area = pi * r * r
    radius : number;

    constructor(radius: number){
        super();
        this.radius = radius;
    }

    
    // getArea(radius: number){ // we can not give radius as parameter as the parent method's structure and child method's structure should be same.  it will give error
    //     return Math.pi*radius*radius;
    // }

    // to solve this we need to declare the radius in the class and initilize it using constructor

    getArea(): number {
        return Math.PI * this.radius * this.radius;
    }

}


class Rectangle extends Shape {
    //area = height * width;

    height : number;
    width : number;

    constructor(height: number, width: number){
        super();
        this.height = height;
        this.width = width;
    }

    getArea() {
        return this.height * this.width;
    }
}

const getArea = (param: Shape) => {
    console.log(param.getArea());
};

const shape1 = new Shape();
const shape2 = new Circle(4);
const shape3 = new Rectangle(4, 4);

getArea(shape1);
getArea(shape2);
getArea(shape3);




