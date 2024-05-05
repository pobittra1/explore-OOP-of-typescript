"use strict";
{
    //in class if i want to use interface data type so i we need impliments interface. also we can add extra method
    class Minibus {
        startEngine() {
            console.log("Minibus: i am starting the car");
        }
        stopEngine() {
            console.log("Minibus: i am stoping the car");
        }
    }
    //creat instance
    const instanceOfMinibus = new Minibus();
    //use instance
    instanceOfMinibus.startEngine();
    instanceOfMinibus.stopEngine();
    //another example with direct abstract
    //create abstract using class
    class Car2 {
    }
    //extends Car2 causes abstract time we can't directly method implementation. that why need extra class.
    class Marcedez extends Car2 {
        startEngine() {
            console.log("Marcedez: i am starting the car");
        }
        stopEngine() {
            console.log("Marcedez: i am stoping the car");
        }
    }
    //create instance
    const marcedezInstance = new Marcedez();
    //get instance
    marcedezInstance.startEngine();
    marcedezInstance.stopEngine();
}
