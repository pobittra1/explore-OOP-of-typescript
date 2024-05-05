{
  //abstract in oop

  //abstract using interface
  //create data type or i will get from here Idea
  interface Vehicle {
    startEngine(): void;
    stopEngine(): void;
  }

  //in class if i want to use interface data type so i we need impliments interface. also we can add extra method
  class Car1 implements Vehicle {
    startEngine(): void {
      console.log("i am starting the car");
    }
    stopEngine(): void {
      console.log("i am stoping the car");
    }
  }

  //creat instance
  const instanceOfCar1 = new Car1();

  //use instance
  instanceOfCar1.startEngine();
  instanceOfCar1.stopEngine();
}
