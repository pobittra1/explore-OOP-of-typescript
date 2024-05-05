"use strict";
//explore about access modifiers
{
    class Person {
        constructor(name, job, _salary, age) {
            this.name = name;
            this.job = job;
            this._salary = _salary;
            this.age = age;
        }
        // increase_salary(amount: number) {
        //   return (this._salary = this._salary + amount); //access _salary in class
        // }
        //using set modifier
        set increase_salary(amount) {
            this._salary = this._salary + amount; //access _salary in class
        }
        //get salary
        get getSalary() {
            return this._salary;
        }
    }
    //create child class of Person class
    class Boss extends Person {
        constructor(name, job, _salary, age, bossSalary) {
            super(name, job, _salary, age); //why we can access salary
            this.bossSalary = bossSalary;
        }
        getBossData() {
            console.log(`Boos salary is ${this.bossSalary} and boss age is ${this.age} years old`);
        }
    }
    //create instance
    const vumi = new Person("vumi", "software-engineer", 35000, 12);
    //update and get salary
    const update_salary = (vumi.increase_salary = 10000);
    console.log(`_salary is ${update_salary} taka`);
    //get salary
    const salary = vumi.getSalary;
    console.log(salary);
}
