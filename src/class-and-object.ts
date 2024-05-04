{
  // know about class and object

  //creating class / class name should be capital leter
  class Man {
    //declare properties with type
    // name: string;
    // gender: string;
    // passion: string;
    constructor(
      //this are parameter properties for shorthand code
      public name: string,
      public gender: string,
      public passion: string
    ) {
      // this.name = name;
      // this.gender = gender;
      // this.passion = passion;
    }
    //its a method. when i write a function in class it's called method
    makeIdentity() {
      console.log(
        `${this.gender === "man" ? "he" : "she"} is a ${this.passion}`
      );
    }
  }

  //get value from class
  const man = new Man("abul", "man", "teacher");
  const women = new Man("sabita", "women", "house-wife");
  man.makeIdentity(); //method
  women.makeIdentity(); //method
}
