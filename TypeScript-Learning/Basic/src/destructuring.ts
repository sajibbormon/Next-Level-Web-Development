/**
 * Destructuring: if we want to use a property of method or element from object, array or nested object or array
                  we can use destructuring to get the property(s) or method(s).

Two types of destructuring: 
    1. Object destructuring
    2. Array destructuring


 */


const user = {
    id: 123,
    name: {
        firstName: "Sajib",
        middleName: " ",
        lastName: "Bormon"
    },
    gender: "male", 
    favouriteColor: "whtie"
};

//generally we use . or "propertyName"

const myFavouriteColor = user.favouriteColor;

const myLastName = user.name.lastName; // this is not effiecient or smart way to write code

//but in destructuring in we can do like below.

const {favouriteColor} = user;
console.log(favouriteColor);

//we can also name it differently

const {favouriteColor : myFavColor} = user;

console.log(myFavColor);


const {lastName: myLastName_ } = user.name; // user.name because it is inside 1 level deep. and naming lastName as myLastName_ this is called name aliasing

console.log(myLastName_);


//array destructuring

const friends = ["rahim", "karim", "mahim"];

//generally we use indexing

// const myBestFriend = friends[2];

//using destructuring


const [, , myBestFriend] = friends; // directly moving to 2 index and we are skipping first two using comma

//suppose best friend is middle one then

const [, myBestFriendChanged] = friends; // now index 1

//first index

const [myBestFriendChangedAgain ] = friends;



