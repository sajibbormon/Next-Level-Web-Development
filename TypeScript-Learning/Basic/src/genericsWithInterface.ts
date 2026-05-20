/**
 * Generics with Interface.
 */

//in the last code we have use type aliasing, now we will use interface.

// let's look at the previous example first


//here we want to dynamically declare the smart watch with generic

interface Developer<T>{
    name: string;
    salary: number;
    device: {
        brand: string;
        model: string;
        releaseYear: string;

    };
    smartWatch: T 
}

const poorDeveloper: Developer<{
    heartRate: string;
    stopWatch: boolean;
}> = {
    name: "Mr. Poor",
    salary: 96000,
    device: {
        brand: "Asus",
        model: "Scar Strix 2026",
        releaseYear: '2026'
    },
    smartWatch: {
        heartRate: "60/90",
        stopWatch: true,
    }
};


const richDeveloper: Developer<{
    heartRate: string;
    stopWatch: boolean;
    call: boolean;
    msg: boolean;

}> = {
    name: "Mr. Rich",
    salary: 960000,
    device: {
        brand: "Apple",
        model: "M5 2026",
        releaseYear: '2026'
    },
    smartWatch: {
        heartRate: "80/100",
        stopWatch: true,
        call: true,
        msg: true
    }
};

// so we are dynamically defining for smart watch object properties. 


// to write more clean code we can define the wacth using type alias or interface.


interface WatchInfoMediumRange  {
    heartRate: string;
    stopWatch: boolean;
}



const poorDeveloperClean: Developer<WatchInfoMediumRange> = {
    name: "Mr. Poor",
    salary: 96000,
    device: {
        brand: "Asus",
        model: "Scar Strix 2026",
        releaseYear: '2026'
    },
    smartWatch: {
        heartRate: "60/90",
        stopWatch: true,
    }
};

interface BrandWatch {
    heartRate: string;
    stopWatch: boolean;
    call: boolean;
    msg: boolean;

}

const richDeveloperClean: Developer<BrandWatch> = {
    name: "Mr. Rich",
    salary: 960000,
    device: {
        brand: "Apple",
        model: "M5 2026",
        releaseYear: '2026'
    },
    smartWatch: {
        heartRate: "80/100",
        stopWatch: true,
        call: true,
        msg: true
    }
};


interface DeveloperWithVehicle<T, T2> {
    name: string;
    salary: number;
    device: {
        brand: string;
        model: string;
        releaseYear: string;

    };
    smartWatch: T;
    vehicle?:T2;
}


const richestDeveloper: DeveloperWithVehicle<BrandWatch, {
    brand: string;
    model: string;
}> = {
    name: "Mr. Rich",
    salary: 960000,
    device: {
        brand: "Apple",
        model: "M5 2026",
        releaseYear: '2026'
    },
    smartWatch: {
        heartRate: "80/100",
        stopWatch: true,
        call: true,
        msg: true
    },
    vehicle: {
        brand: "Yamaha",
        model: "MT-09"
    }   
}

const billionaireDeveloper: DeveloperWithVehicle<BrandWatch, {
    type: string;
    brand: string;
    model: string;
}> = {
    name: "Mr. Rich",
    salary: 96000000,
    device: {
        brand: "Apple",
        model: "M5 2026",
        releaseYear: '2026'
    },
    smartWatch: {
        heartRate: "80/100",
        stopWatch: true,
        call: true,
        msg: true
    },
    vehicle: {
        type: "SUV",
        brand: "Range Rover",
        model: "Sports 2032"
    }   
}

// without providing data about vehicle it will give error, so we need to provide it to default value in the parameter.

const add = (num1: number, num2: number = 0)=> num1 + num2;

//here in this add function we have defined the default value of num2 to 0

// so we are providing null to the interface.
interface DeveloperWithVehicle1<T, T2 = null> {
    name: string;
    salary: number;
    device: {
        brand: string;
        model: string;
        releaseYear: string;

    };
    smartWatch: T;
    vehicle?:T2;
}

const millionaireDeveloper: DeveloperWithVehicle1<BrandWatch> = {
    name: "Mr. Rich",
    salary: 9600000,
    device: {
        brand: "Apple",
        model: "M5 2026",
        releaseYear: '2026'
    },
    smartWatch: {
        heartRate: "80/100",
        stopWatch: true,
        call: true,
        msg: true
    }   
}