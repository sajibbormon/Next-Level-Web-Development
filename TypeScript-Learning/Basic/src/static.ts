/**
 * Static: static mean no changes
 */


// sometime we need some variable where the memory address can not be changed dynamically.

class Counter{
    count : number = 0;

    increment(){
        return (this.count = this.count + 1);
    }

    dcrement(){
        return (this.count = this.count + 1);
    }
}

const instance1 = new Counter(); // as no constructor we don't need to send anything.

console.log(instance1.increment());
console.log(instance1.increment());
console.log(instance1.increment());


const instance2 = new Counter();

console.log(instance2.increment());
console.log(instance2.increment());
console.log(instance2.increment());
// here for instance1 one the count will be 1 2 3 and for instance2 count will be 1 2 3. means it is starting from 1 again.
// but we want to make the count variable static. if we make it static for instance2 the count will be 4 5 6. means it is starting from the count variable from the static memory address variable means no need to create another variable in another memory address.


// also we can not write this.count after making static. We need to write StaticCounter.count 

class StaticCounter{
    static count : number = 0;

    increment(){
        return (StaticCounter.count = StaticCounter.count + 1);
    }

    dcrement(){
        return (StaticCounter.count = StaticCounter.count + 1);
    }
}

console.log("Static Counter: ")
const instance3 = new StaticCounter();

console.log(instance3.increment());
console.log(instance3.increment());
console.log(instance3.increment());


const instance4 = new StaticCounter();

console.log(instance4.increment());
console.log(instance4.increment());
console.log(instance4.increment());

// also we don't need any instance for this increment or decrement now by making the increment and decrement method as static


class StaticCounterWithoutInstance{
    static count : number = 0;

    static increment(){
        return (StaticCounter.count = StaticCounter.count + 1);
    }

    static dcrement(){
        return (StaticCounter.count = StaticCounter.count + 1);
    }
}


console.log(StaticCounterWithoutInstance.increment());
console.log(StaticCounterWithoutInstance.increment());
console.log(StaticCounterWithoutInstance.increment());
console.log(StaticCounterWithoutInstance.increment());
console.log(StaticCounterWithoutInstance.increment());
console.log(StaticCounterWithoutInstance.increment());


