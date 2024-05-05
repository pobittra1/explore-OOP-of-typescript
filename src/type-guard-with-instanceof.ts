//type guard with instanceof

{
  //create prime/common class
  class Person {
    name: string;
    age: number;
    constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
    }
    makeIdentity() {
      console.log(`i am ${this.name}`);
    }
  }

  //create another class and extends common class
  class Student extends Person {
    constructor(name: string, age: number) {
      super(name, age);
    }
    doSomething() {
      console.log(`i am collecting note's`);
    }
  }

  //create another class and extends common class
  class Teacher extends Person {
    //extra property
    salary: number;
    constructor(name: string, age: number, salary: number) {
      super(name, age);
      this.salary = salary;
    }
    makeSalaryStatement() {
      console.log(`i am getting the salary is ${this.salary} taka.`);
    }
  }

  //smart way, we can get value by function
  const isStudent = (person: Person): person is Student => {
    return student instanceof Student;
  };
  const isTeacher = (person: Person): person is Teacher => {
    return teacher instanceof Teacher;
  };

  //we can use class as a type of function parameter. here is the example
  const getPerson = (person: Person): void => {
    if (isStudent(person)) {
      //that mean's person if typeof Student we can access Student properties in if block.
      person.doSomething();
    } else if (isTeacher(person)) {
      //that mean's person if typeof Teacher we can access Teacher properties in if block.
      person.makeSalaryStatement();
    } else {
      person.makeIdentity();
    }
  };

  //create instance
  const student = new Student("vumi", 12);
  const teacher = new Teacher("mezba haque persian", 28, 45000);

  //calling data
  //   student.doSomething();
  //   student.makeIdentity();
  //   teacher.makeIdentity();
  //   teacher.makeSalaryStatement();

  //get data by function
  getPerson(teacher);
  getPerson(student);
}
