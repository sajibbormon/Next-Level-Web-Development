//nullable type

const getUser = (input: string | null) =>{
    if(input){
        console.log(`From DB: ${input}`);
    }else{
        console.log(`From DB: ALL USERS`);
    }
};

getUser("Sajib");

// now provide null as parameter to the function

getUser(null);

// unknown : if we don't know what type of value user will send then we can use unknown

const discountCalculator = (input: unknown) =>{ // the type is not known to me, it will be find out in run time
    if(typeof input === "number"){
        const discountedPrice = input * 0.1; // 10% discount
        console.log(discountedPrice);

    }else if(typeof input === "string"){
        const [inputPrice] = input.split(" ");
        const discountedPrice = Number(inputPrice) * 0.1; // typecasting to number from string
        console.log(discountedPrice);
    }else{
        console.log("Wrong input format");
    }
}

discountCalculator(100);
discountCalculator("100 tk");


// never: void  mean nothing/ none
// if this function is called then it will return nothing because it is throwing an error (if throw and error then returns nothing)
const throwError = (msg: string): never => { //as this function will return nothing so we are making it never type
    throw new Error (msg);
}

throwError("Erro....");

