"use strict";
//explore type guard with typeof and in
{
    const add = (param1, param2) => {
        if (typeof param1 === "number" && typeof param2 === "number") {
            //checking with typeof of datatype, its called typeguard
            return param1 + param2;
        }
        else {
            return param1.toString() + param2.toString();
        }
    };
    //see data
    const result1 = add("2", "3");
    const result2 = add(2, 3);
    console.log(result1, result2);
}
{
    //create function that can get value type-wise. in type has role its admin or just have name property its normal user. like checking user.
    const getUser = (user) => {
        //that mean's in user data role already have there
        if ("role" in user) {
            console.log(`My name is ${user.name} and my role is ${user.role}`);
        }
        else {
            console.log(`My name is ${user.name}`);
        }
    };
    //set data
    const normalUser = {
        name: "vumi",
    };
    const adminUser = {
        name: "Mr. X",
        role: "Admin",
    };
    //get users
    getUser(normalUser);
    getUser(adminUser);
}
{
    const normalHouse = {
        houseType: "house of chatai or tati",
    };
    const higherHouse = {
        houseType: "house of brick",
        isBuilding: true,
    };
    const getHouse = (house) => {
        if ("isBuilding" in house) {
            console.log(`this house is heavy strong causes is build by brick`);
        }
        else {
            console.log(`this is normal house`);
        }
    };
    getHouse(normalHouse);
    getHouse(higherHouse);
}
