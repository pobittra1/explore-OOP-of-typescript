//explore type guard with typeof and in

{
  //with typeof

  //create data type with union
  type DataType = number | string;
  const add = (param1: DataType, param2: DataType): DataType => {
    if (typeof param1 === "number" && typeof param2 === "number") {
      //checking with typeof of datatype, its called typeguard
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  };

  //see data
  const result1 = add("2", "3");
  const result2 = add(2, 3);
  console.log(result1, result2);
}

{
  //with in

  //set data type
  type NomalUser = {
    name: string;
  };
  type AdminUser = {
    name: string;
    role: "Admin";
  };

  //create function that can get value type-wise. in type has role its admin or just have name property its normal user. like checking user.
  const getUser = (user: NomalUser | AdminUser) => {
    //that mean's in user data role already have there
    if ("role" in user) {
      console.log(`My name is ${user.name} and my role is ${user.role}`);
    } else {
      console.log(`My name is ${user.name}`);
    }
  };

  //set data
  const normalUser: NomalUser = {
    name: "vumi",
  };
  const adminUser: AdminUser = {
    name: "Mr. X",
    role: "Admin",
  };

  //get users
  getUser(normalUser);
  getUser(adminUser);
}

{
  //with in / another example 2
  type NormalHouse = {
    houseType: string;
  };
  type HigherHouse = {
    houseType: string;
    isBuilding: boolean;
  };

  const normalHouse: NormalHouse = {
    houseType: "house of chatai or tati",
  };
  const higherHouse: HigherHouse = {
    houseType: "house of brick",
    isBuilding: true,
  };
  const getHouse = (house: NormalHouse | HigherHouse) => {
    if ("isBuilding" in house) {
      console.log(`this house is heavy strong causes is build by brick`);
    } else {
      console.log(`this is normal house`);
    }
  };

  getHouse(normalHouse);
  getHouse(higherHouse);
}
