"use strict";
{
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        generateAgeWithIdentity() {
            console.log(`${this.name} ${this.age} years old.`);
        }
    }
    class Learner extends Person {
        constructor(name, age) {
            super(name, age);
        }
    }
    class GuideMan extends Person {
        constructor(name, age, guideTopic, gender) {
            super(name, age);
            this.guideTopic = guideTopic;
            this.gender = gender;
        }
        guideTopicWithIdentity() {
            console.log(`${this.gender === "man" ? "He" : this.gender === "women" ? "She" : "other"} is teaching us ${this.guideTopic}`);
        }
    }
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
