// practice

// 1
let user1 = {
  name: "Nazrin",
  age: 17,
};

let user2 = {
  name: "John",
  age: 57,
};

let user3 = {
  name: "Ali",
  age: 55,
};

Object.assign(user1, user2, user3);
console.log(user1); // { name: 'Ali', age: 55 }

// 2
let fruit = {
  name: "apple",
};

let energy = {
  calorie: 95,
};

Object.assign(fruit, energy);
console.log(fruit); // { name: 'apple', calorie: 95 }

// 3
let obj1 = {
  surname: "Memmedov",
};

let obj2 = Object.assign({}, obj1);
console.log(obj1.surname); // Memmedov
console.log(obj2.surname); // Memmedov

// 4
// Write the code, one line for each action:

// 1. Create an empty object user.
// 2. Add the property name with the value John.
// 3. Add the property surname with the value Smith.
// 4. Change the value of the name to Pete.
// 5. Remove the property name from the object.

let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
