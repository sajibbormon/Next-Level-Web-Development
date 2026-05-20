/**
 * Type Guard/ Type Narrowing: 

  We will make decision which type will be 

 */

  //Guard means checking everything, if everyting is good then we will give access.


  const add = (num1: number,num2: number)=> num1 + num2;

  add(2,2);//4

//   add(2,'2'); // 22 (it will concatenate them and give 22)
//   add('2',2); // 22 (it will concatenate them and give 22)

// to acheive this we can do 


  
  const addMultitype = (num1: number | string,num2: number | string)=> {
    if(typeof num1 == 'number' && typeof num2 == 'number'){
        return num1 + num2;
    }else{
        return num1.toLocaleString()+num2.toString();
    }
  };

  //now make it more clean

  // now inside if condition the num1. will give number method to access and else condition it will give string methods for num1. that means we narrow down the type.

  type Alphaneumeric = number | string; // type narrowing

  const addMultitypeClean = (num1: Alphaneumeric | string, num2: Alphaneumeric)=> {
    
    if(typeof num1 == 'number' && typeof num2 == 'number'){
        return num1 + num2;
    }else{
        return num1.toLocaleString()+num2.toString();
    }
  };

// in guard

type NormalUser = {
    name: string;

};

type AdminUser = {
    name: string;
    role: "Admin";
};

const getUserInfo = (user: NormalUser | AdminUser) => {
    // console.log(`This ${user.name} and his role is ${user.role}`); // now user. will suggest only name as it is common property in both of them. And it is not sure now if it is normal user or admin user. so we need to sure about the type, to make sure it we will use guard. 

    // using type guard
    if("role" in user){ // if role property is in user then 
        console.log(`This ${user.name} and his role is ${user.role}`); // now no error
    }else{
        console.log(`${user.name}`)
    }
}


getUserInfo({name: "Normal"});
getUserInfo({name: "Normal", role: "Admin"});

// now let's see example for clas
