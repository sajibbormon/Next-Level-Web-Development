/**
 * Class: It is the blueprint of object.

use class keyword to create class


 */

// class Animal {
//     name: string;
//     species: string;
//     sound: string;
// }

// the upper code will give error as it has no initializer and not assign in the constructor


// for example function

function add (num1: number, num2: number) {
    return num1 + num2;
}

add(2, 3);// we are passing values, and receiving them. similary we need a constructor in the class to receive those properties.

// class Animal {
//     name: string;
//     species: string;
//     sound: string;

//     constructor(name: string, species: string, sound: string){

//     }
// }

// still has error as no initializer.


class Animal {
    name: string;
    species: string;
    sound: string;

    constructor(name: string, species: string, sound: string){
        this.name = name;
        this.species = species;
        this.sound = sound;
    }

    // method
    makeSound() {
        console.log(`The animal is making sound ${this.sound}`);
    }
}

// calling constructor using new keyword
const dog = new Animal ('Doggesh Bhaw', "dog", "ghew ghew");

console.log(dog.name);

const cat = new Animal("Cat bro", "cat", "mew mew");

// let's see how to define method.

cat.makeSound();

// in the declaration of the class, we are declaring properties twice(one in the class anther in the constructor). We can use parameter properties to make it more clean.


//make it public to access them publicly
class AnimalPublic {
    public name: string;
    public species: string;
    public sound: string;

    constructor(name: string, species: string, sound: string){
        this.name = name;
        this.species = species;
        this.sound = sound;
    }

    // method
    makeSound() {
        console.log(`The animal is making sound ${this.sound}`);
    }
}


class AnimalWtihParameterPropertis {
    // name: string;
    // species: string;
    // sound: string;

    constructor(public name: string, public species: string, public sound: string){
        // this.name = name;
        // this.species = species;
        // this.sound = sound;
    }

    // method
    makeSound() {
        console.log(`The animal is making sound ${this.sound}`);
    }
}

//  public keyword, define them in the class automatically and initialize them automatically in the constructor.

