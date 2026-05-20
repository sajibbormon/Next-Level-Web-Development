/**
 * Type Assertion: If the coder understand the type better than typescript then it is called type assertion
 */

let anything: any;

anything = 222;  // now it is holding a number and type should be number but ts is not aware of it but the coder is aware that it is a number type variable now.

// (anything as number) // now we are making it a number using as keyword


// now if we provide number as a parameter then it should return number, if string then it should return string
const kgToGmConverter = (input: string | number): string | number | undefined => {
    if(typeof input === 'number'){
        return input*1000;
    }else if(typeof input === 'string'){
        const [value] = input.split(" ");
        return `converted output is: ${Number(value)*1000} kg`;
    }
}

const result1 = kgToGmConverter(2);
console.log(result1);
const result2 = kgToGmConverter('2 kg');
console.log(result2);

//now as a developer I know sure about that when I will send number it will return number, when I send string it will return string. so we can confirm it. Now I can use type assertion.

const result3 = kgToGmConverter(4) as number;


// we have to careful when we use type assertion. example

let anything2 : any;

anything2 = "Sajib";

(anything2 as number).toExponential();// here it is wrong as it is string but we assert it as number, that's why we should be careful while using type assertion.

type CustomError = {
    message: string;
}

try{

}catch(err){
    console.log((err as CustomError).message);
}