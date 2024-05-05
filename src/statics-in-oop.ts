{
  //statics in oop
  class Counter {
    static counter: number = 0;
    static increament() {
      return (Counter.counter = Counter.counter + 1);
    }
    static decreament() {
      return (Counter.counter = Counter.counter - 1);
    }
  }

  //create instance
console.log(Counter.increament());
console.log(Counter.increament());
console.log(Counter.increament());
}
