/**
 * Enum: define set of fixed string  literal together.
 

suppose, we have some type of status: successful / pending / rejected

and role: admin  / user  / viewer  / editor

we use it as type and value


*/


type UserRole = "Admin" | "Editor" | "Viewer";

// let's create a function where a user can edit or not based on role.
const canEdit = (role: UserRole) =>{
    if(role === "Admin" || role === "Editor"){ // manually typing 
        return true;
    }else{
        return false;
    }
}

const isEditPermissable = canEdit("Admin");

console.log(isEditPermissable);

//here we are using ithe UserRole only a type not as value. in if condition we have written it manually, but using enum we can use it with dot . means, emun can be used as both type and value at the same time. 

enum UserRoleEnum  {
    Admin = "Admin",
    Editor = "Editor", 
    Viewere = "Viewer"
}


const canEditEnum = (role: UserRoleEnum) =>{
    if(role === UserRoleEnum.Admin || role === UserRoleEnum.Editor){ //now we can access the value too 
        return true;
    }else{
        return false;
    }
}

const isEditPermissableEnum = canEditEnum(UserRoleEnum.Admin);

console.log(isEditPermissableEnum);

// actually it will not work as it doen't work strict only mode. And this need to use --experimental-transform-types

// enum is not recommended to use, bcz if we convert the typescirpt to javascrit then it will create extra functions, for more enum there will be more functions in the javascript file to store. As a result, the bundle size of the application can increase. So it is not recommended to use in large scale project.


