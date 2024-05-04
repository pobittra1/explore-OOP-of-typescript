//explore inheritance in class--oop
{
  //create primary class that is also common in another class
  class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    generateAgeWithIdentity() {
      console.log(`${this.name} ${this.age} years old.`);
    }
  }

  //create another class and extends Person class for accessing their property, method.
  class Learner extends Person {
    constructor(name: string, age: number) {
      super(name, age); //need to calling super method in constructor and assign value that we need from Person primary class . like that name and age.
    }
  }

  //create another class and extends Person class for accessing their property, method.
  class GuideMan extends Person {
    guideTopic: string;
    gender: string;
    constructor(name: string, age: number, guideTopic: string, gender: string) {
      super(name, age); //need to calling super method in constructor and assign value that we need from Person primary class . like that name and age.

      //this are exta property that are not common between Leaner and Guideman class. so wee need to define this
      this.guideTopic = guideTopic;
      this.gender = gender;
    }

    //create extra method.
    guideTopicWithIdentity() {
      console.log(
        `${
          this.gender === "man"
            ? "He"
            : this.gender === "women"
            ? "She"
            : "other"
        } is teaching us ${this.guideTopic}`
      );
    }
  }

  // finally calling classes and see data..
  const learner1 = new Learner("vumi", 12);
  const learner2 = new Learner("pobi", 21);
  const guidMan1 = new GuideMan("mezba", 36, "typescript", "man");
  const guidMan2 = new GuideMan("jhankar", 28, "prisma", "man");
  const guidMan3 = new GuideMan("shafia", 26, "docker", "women");

  learner1.generateAgeWithIdentity();
  learner2.generateAgeWithIdentity();
  guidMan1.generateAgeWithIdentity();
  guidMan1.guideTopicWithIdentity();
  guidMan3.generateAgeWithIdentity();
  guidMan3.guideTopicWithIdentity();
}
