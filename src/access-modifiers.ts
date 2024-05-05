//explore about access modifiers
{
  class Person {
    readonly name: string; //we can't assign value, just read.
    job: string;
    private _salary: number; // we can't access outer scope of class. can access in class
    protected age: number;//we can access just in child classes.
    constructor(name: string, job: string, _salary: number, age: number) {
      this.name = name;
      this.job = job;
      this._salary = _salary;
      this.age = age;
    }

    increase_salary(amount: number) {
      return (this._salary = this._salary + amount); //access _salary in class
    }
  }

  //create child class of Person class
  class Boss extends Person {
    bossSalary:number;
    constructor(name:string, job:string, _salary:number , age:number, bossSalary:number){
        super(name,job,_salary,age)//why we can access salary
        this.bossSalary = bossSalary
    }
    getBossData(){
        console.log(`Boos salary is ${this.bossSalary} and boss age is ${this.age} years old`);
    }
  }

  //create instance
  const vumi = new Person("vumi", "software-engineer", 35000, 12);
  console.log({ vumi });
  //update salary
  const update_salary = vumi.increase_salary(12000);
  console.log(`_salary is ${update_salary} taka`);

  //bossdata
  const boss = new Boss("mezba","full-stack developer", 30000, 36 , 80000);
  console.log(`${boss.getBossData()}`); // undefined why?
}
