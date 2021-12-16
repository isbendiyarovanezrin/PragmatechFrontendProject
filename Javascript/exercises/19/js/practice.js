// practice

// 1
let user = {
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

Object.assign(user, user2, user3);
console.log(user); // { name: 'Ali', age: 55 }

// 2
let fruit = {
  name: "apple",
};

let energy = {
  calorie: 95,
};

Object.assign(fruit, energy);
console.log(fruit); // { name: 'apple', calorie: 95 }
