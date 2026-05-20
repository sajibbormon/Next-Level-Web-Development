/**
 * Conditional Type: The type that is dependent on condition is called conditional type.





 */

type A = null;
type B = undefined;

// now type C depends on A and B type

type C = A extends null ? true : false; //now type C is true bcz A extends null

//now depends on both of A and B (by using nested ternary)
type C2 = A extends string ? true : B extends undefined ? true: false; // now c is true and depend on B



type RichPeopleVehicle = {
    bike : string;
    car: string;
    ship: string;
}

// HasBike type depends on RichPeopleVehicle
// use generic

// type CheckVehicle<T> = T extends "bike" | "car" | "ship" ? true : false;

//let's make it more clean

type CheckVehicleKeyof<T> = T extends keyof RichPeopleVehicle ? true : false;




type HasBike = CheckVehicleKeyof<"bike">;
type HasTractor = CheckVehicleKeyof<"tractor">;






