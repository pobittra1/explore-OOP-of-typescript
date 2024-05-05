"use strict";
{
    //explore about polymorphisom
    //-------------summary about polymorphism-----------(from my concepts)
    //method same but output can be different. if i pass dada in same method we should use property in class and constructor. send property as param when create instance. then do operation with same method and finally generate different output----its POLYMORPHISM
    {
        //example one
        //create main class
        class Shape {
            getArea() {
                return 0;
            }
        }
        //create another class and have one property but method is same. method output is not same. return type is same i mean number
        class Circle extends Shape {
            constructor(radious) {
                super();
                this.radius = radious;
            }
            getArea() {
                return Math.PI * (this.radius * this.radius);
            }
        }
        //create another class and have two property but method is same. method output is not same. return type is same i mean number
        class Regtangle extends Shape {
            constructor(height, width) {
                super();
                this.height = height;
                this.width = width;
            }
            getArea() {
                return this.height * this.width;
            }
        }
        //create a function that can console Area of this item. and param type is primary class. that mean Circle class and Regtangle class also same type. its polymorphism
        const getShapeArea = (param) => {
            console.log(param.getArea());
        };
        //create instance
        const shapeArea = new Shape();
        const circleArea = new Circle(10);
        const regtangleArea = new Regtangle(10, 20);
        //send instance and get area via function.
        getShapeArea(shapeArea);
        getShapeArea(circleArea);
        getShapeArea(regtangleArea);
    }
    {
        //example 2
        class NormalPerson {
            getSleep() {
                console.log("normal person sleeping time is  hours");
            }
        }
        class Student extends NormalPerson {
            getSleep() {
                console.log("student sleeping tiime is 7 hours");
            }
        }
        class Developer extends NormalPerson {
            getSleep() {
                console.log("developer sleeping time is 6 hours");
            }
        }
        const showData = (param) => {
            param.getSleep();
        };
        const normalPerson = new NormalPerson();
        const student = new Student();
        const developer = new Developer();
        showData(normalPerson);
        showData(student);
        showData(developer);
    }
}
