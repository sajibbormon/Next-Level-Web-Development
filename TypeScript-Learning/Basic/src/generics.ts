// generics: dynamically generalize the type.




const friends : string[] = ["Mr. X", "Mr. Y", "Mr. Z"];

const rollNumbers: number[] = [4, 7, 11];

const isEligibleList: boolean[] = [true, false, true];


// now writing everything with Array Constructor (the upper three variables and below three variables are same just written with Array constructor)



const friends1 : Array<string> = ["Mr. X", "Mr. Y", "Mr. Z"];

const rollNumbers1: Array<number> = [4, 7, 11];

const isEligibleList1: Array<boolean> = [true, false, true];


// now see, only changes happens inside Array<  > constructor. so we use a new concept Generic to dynamically change this.

type ArrayOfString = Array<string>
type ArrayOfNumber = Array<number>


const friends2 : ArrayOfString = ["Mr. X", "Mr. Y", "Mr. Z"];

const rollNumbers2: ArrayOfNumber = [4, 7, 11];

const isEligibleList2: Array<boolean> = [true, false, true];


//now generilze it and observer only by changing inside Array<> we can dynamically changes the type also, which is called generic.


type GenericArray<T> = Array<T> // suppose the type is T


const friends3 : GenericArray<string> = ["Mr. X", "Mr. Y", "Mr. Z"]; // now we are passing string for array of string

const rollNumbers3: GenericArray<number> = [4, 7, 11]; //for number array we are passing number

const isEligibleList3: GenericArray<boolean> = [true, false, true];




 type Coordinates = [number, number];

 const coordinates: Coordinates = [20, 30];

//  const coordinates1: Coordinates = ['20', '30'];//this will give error as we are providing it string. but we can also generilze it using generics

 type GenericCoordinates<T> = [T, T];

 const coordinates2: GenericCoordinates<number> = [20, 30];
 const coordinates3: GenericCoordinates<string> = ['20', '30']; //now it is possible with generics


 type GenericPersonInfo<X, Y> = [X, Y];

 const person1: GenericPersonInfo<string, number> = ["Sajib", 26];


 //Generic for object (let's see an example array of object)

 const userList = [
    {
        name: "Mr. X",
        age: 22
    },
    {
        name: "Mr. Y", 
        age: 25
    }
 ]

  type GenericArrayUser<T> = Array<T>;

  const userList1: GenericArrayUser<object> = [
    {
        name: "Mr. X",
        age: 22 //using number
    },
    {
        name: "Mr. Y", 
        age: "25"  //using string
    },
    {
        hasWatch: true, //no name of a person
    }
 ];

 //in this userList1, an object can be anything without a format, here can any has only one value without name? no, so, need to declare it more smartly and efficiently.


  type GenericArrayUser1<T> = Array<T>;

  const userList2: GenericArrayUser1<{name: string, age:number}> = [
    {
        name: "Mr. X",
        age: 22
    },
    {
        name: "Mr. Y", 
        age: 25
    },

 ];

 //now we have to declare it just as the format is given name should be string, age should be number and we can not add anything extra property just like hasWatch.
 
 
 // more clean code with type aliasing

 type User = {name: string, age:number};

   const userList3: GenericArrayUser1<User> = [
    {
        name: "Mr. X",
        age: 22
    },
    {
        name: "Mr. Y", 
        age: 25
    },

 ];
