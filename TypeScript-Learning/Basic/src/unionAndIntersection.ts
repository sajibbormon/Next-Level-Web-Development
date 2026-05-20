/**
 * Union | and Intersection &
 
 */

// Union similar like or 


type UserRole = 'admin' | 'user' ;

const getDashboard = (role: UserRole) => {
    if(role === 'admin'){
        return "Admin Dashboard";
    }else if(role === 'user'){
        return "User Dashboard";
    }else{
        return "guest Dashboard";
    }
};

// getDashboard("guest"); // it will give error as two literals types of string is provided 'admin' and 'user'

//Intersection, similar like And

type Employee = {
    id: string;
    name: string;
    phoneNo: string;
};

type Manager = {
    designation: string;
    teamSize: number;
}

// suppose if a employee is both employee and manager then.

type EmployeeAndManager = Employee & Manager 

const Sajib: EmployeeAndManager = {
    id: "123",
    name: "Sajib Bormon",
    phoneNo: "0xxxxxxxxxx", 
    designation: "CEO and Owner",
    teamSize: 200000000
}

// I have to provide every property value otherwise it will give error.



