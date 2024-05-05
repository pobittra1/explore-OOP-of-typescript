"use strict";
{
    //statics in oop
    class Counter {
        static increament() {
            return (Counter.counter = Counter.counter + 1);
        }
        static decreament() {
            return (Counter.counter = Counter.counter - 1);
        }
    }
    Counter.counter = 0;
    //create instance
    console.log(Counter.increament());
    console.log(Counter.increament());
    console.log(Counter.increament());
}
