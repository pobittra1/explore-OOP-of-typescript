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
        increase_salary(amount) {
            return (this._salary = this._salary + amount); //access _salary in class
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
    console.log({ vumi });
    //update salary
    const update_salary = vumi.increase_salary(12000);
    console.log(`_salary is ${update_salary} taka`);
    //bossdata
    const boss = new Boss("mezba", "full-stack developer", 30000, 36, 80000);
    console.log(`${boss.getBossData()}`); // undefined why?
}
