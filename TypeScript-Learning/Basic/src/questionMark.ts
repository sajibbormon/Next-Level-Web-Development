/**
 * ternary ? , nullish coalescing ?? and optional chaning ?.
  


1. ?  :  ternary operator : decision making

2. ?? : nullish coalescing: used with null and undefined

3. ?. : optional chaining: to prevent error for undefined or null

 */


const userAge = 18;

const isVoter = (age: number) => {
    // if(userAge >= 18){
    //     console.log("You are eligible for vote");
    // }else{
    //     console.log("You are not eligible for vote");
    // }


    // we can do the same using ternary operator

    const result = age >= 18 ? "You are eligible for vote" : "You are not eligible for vote";
    console.log(result);
}

isVoter(17);

// nullish coalescing (only work for null and undefined)

// const userTheme = null; 
const userTheme = undefined; 

// if user didn't selected the theme, then we can selec it using nullish coalescing

const selectedTheme = userTheme ?? "Light theme"; // if it is null or undefined then select Light theme.


console.log(selectedTheme);

// what about other false value, then it will not work.

const userTheme1 = "";

const selectedTheme1 = userTheme1 ?? "Light theme"; // if it is null or undefined then select Light theme.

console.log(selectedTheme1);// it will print the false value empty string


// it will provide same result as it works for both

const isAuthenticated = null;

const resultWithTernary  = isAuthenticated ? isAuthenticated : "You are guest";

const resultWithNullish = isAuthenticated ?? "You are a guest";

console.log({resultWithTernary}, {resultWithNullish});

// but the result for empty string that is false value will be correct only with ternary operator
// as nullish works only with null and undefined.

const isAuthenticated1 = "";

const resultWithTernary1  = isAuthenticated1 ? isAuthenticated1 : "You are guest";

const resultWithNullish1 = isAuthenticated1 ?? "You are a guest";

console.log({resultWithTernary1}, {resultWithNullish1});


//optional chaining

const user: {
    address: {
        city: string;
        town: string;
        postalCode?:string; // this is optional now
    }
} = {
    address: {
        city: "Dhaka", 
        town: "Banani"
    }
}

console.log(user.address.postalCode); //  it will  print undefined and for this entire project can be crashed.

//to solve this we can use optional chaining


console.log(user?.address?.postalCode); // it will print undefined but the entire project won't crashed.

