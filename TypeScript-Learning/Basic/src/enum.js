"use strict";
/**
 * Enum: define set of fixed string  literal together.
 

suppose, we have some type of status: successful / pending / rejected

and role: admin  / user  / viewer  / editor

we use it as type and value


*/
// let's create a function where a user can edit or not based on role.
const canEdit = (role) => {
    if (role === "Admin" || role === "Editor") { // manually typing 
        return true;
    }
    else {
        return false;
    }
};
const isEditPermissable = canEdit("Admin");
console.log(isEditPermissable);
//here we are using ithe UserRole only a type not as value. in if condition we have written it manually, but using enum we can use it with dot . means, emun can be used as both type and value at the same time. 
var UserRoleEnum;
(function (UserRoleEnum) {
    UserRoleEnum["Admin"] = "Admin";
    UserRoleEnum["Editor"] = "Editor";
    UserRoleEnum["Viewere"] = "Viewer";
})(UserRoleEnum || (UserRoleEnum = {}));
const canEditEnum = (role) => {
    if (role === UserRoleEnum.Admin || role === UserRoleEnum.Editor) { //now we can access the value too 
        return true;
    }
    else {
        return false;
    }
};
const isEditPermissableEnum = canEdit("Admin");
console.log(isEditPermissableEnum);
// actually it will not work as it doen't work strict only mode. And this need to use --experimental-transform-types
