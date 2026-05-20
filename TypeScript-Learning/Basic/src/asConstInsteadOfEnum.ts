/**
 * Use As Const instead fo Enum which is called As assertion.
 */

// enum UserRoleEnum  {
//     Admin = "Admin",
//     Editor = "Editor", 
//     Viewere = "Viewer"
// }



// now we want to create an object and comment out the previous enum

const UserRoles = {
    Admin: "Admin",
    Editor: "Editor",
    Viewer: "Viewer",
};

// as it is an object, the value of any key can be changed any time, which is a flaw.

// UserRoles.Admin = "CEO";

// to solve it we can use it as const


const UserRolesAsConst = {
    Admin: "Admin",
    Editor: "Editor",
    Viewer: "Viewer",
} as const;
/*
now every key is readonly mode, can not edit/write it.

how can we make it as type as we want to use it as type and also access the value.

to solve it we can use two operator

1. typeof operator (works on runtime and can infer the value what type is it.)
2. keyof operator


how typeof works behind the scene:

const user = {
    id: 1,
    name: "Sajib",
}

typeof user;

what it will do in background:

type user {
    id: nubmer;
    name: string;
}


now without making it const that is

const UserRolesAsConst{
    ...
    ...
}

we can make it 

typeof UserRolesAsConst {
    Admin: "Admin";
    Editor: "Editor";
    Viewer: "Viewer";
}

//here the "Admin", "Editor", "Viewer" are string literals (fixed string values are called string literals).

so the type of Admin is "Admin", Editor is "Editor" not string.

now use of keyof in front to return the keys or union of keys 


keyof typeof UserRolesAsConst {
    Admin: "Admin";
    Editor: "Editor";
    Viewer: "Viewer";
}


keyof behind the scene:

"Admin" | "Editor" | "Viewere"


what if the keys and values are different form each other.


const UserRolesAsConstCapital {
    Admin: "ADMIN";
    Editor: "EDITOR";
    Viewer: "VIEWER";
} as const;

here, UserRolesAsConstCapital.Admin = "ADMIN" not "Admin", so role is not equal to UserRolesAsConstCapital.Admin.

to solve it we need to do one more thing. 


*/


const canEditEnum = (role: keyof typeof UserRolesAsConst) =>{ // we can't use it as types 
    if(role === UserRolesAsConst.Admin || role === UserRolesAsConst.Editor){ //now we can access the value too 
        return true;
    }else{
        return false;
    }
}

const isEditPermissableEnum = canEditEnum(UserRolesAsConst.Admin);

console.log(isEditPermissableEnum);




const UserRolesCapital = {
    Admin: "ADMIN",
    Editor: "EDITOR",
    Viewer: "VIEWER",
} as const;

