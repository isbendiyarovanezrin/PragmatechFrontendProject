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

// 5
let n = {};
let e = {};
console.log(n == e); // false

// 6
let object = {
  name: "Ali",
  sayName() {
    console.log(this.name);
  },
};
object.sayName(); // Ali

// 7
let id1 = Symbol("id");
let id2 = Symbol("id");
console.log(id1 == id2); // false

let id = Symbol.for("id");
let idAgain = Symbol.for("id");
console.log(id == idAgain); // true
console.log(Symbol.keyFor(id)); // id
console.log(Symbol.keyFor(idAgain)); // id
console.log(Symbol.keyFor(id1)); // undefined

// 8
function sayHello() {
  console.log(this);
}
sayHello();

// 9
function createUser() {
  return {
    name: "Samir",
    sayHello() {
      return this;
    },
  };
}

let _user = createUser();
console.log(_user.sayHello().name);

// 10
function sayHi() {
  console.log(new.target);
}
sayHi(); // undefined

function sayHi() {
  console.log(new.target);
}
new sayHi(); // [Function: sayHi]

// 11
let istifadeci = {};
console.log(istifadeci.age); // undefined
// console.log(istifadeci.age.year); // TypeError
console.log(istifadeci.age ? istifadeci.age.year : undefined); // undefined
console.log(istifadeci.age && istifadeci.age.year && istifadeci.age.year.day); // undefined
console.log(istifadeci?.age?.year?.day); // undefined
console.log(istifadeci?.age); // undefined

// 12
let _obj = {};
_obj.admin?.(); // nothing

// 13
let surname = "Aslanov",
  age = "55";

// const obj = {
//   surname: surname,
//   age: age,
// };
// console.log(obj.age); // 55

const obj = {
  surname,
  age,
};

console.log(obj.age); // 55

// 14
let prop1 = "name",
  prop2 = "age";

const myObj = {
  [prop1]: "Ali",
  [prop2]: "3",
};

console.log(`My name is ${myObj.name}. I'm ${myObj.age} years old.`); // My name is Ali. I'm 3 years old.

// 15
const _myObj = {
  author: "Nezrin",
  city: "Washington",
};

let { author, city } = _myObj;

console.log(author); // Nezrin
console.log(city); // Washington

// 16
let copy = { ..._myObj };

console.log(copy); // { author: 'Nezrin', city: 'Washington' }

let all = { ..._myObj, ...obj, title: "Books" };

console.log(all);

// 17
const person = {
  age: 55,
  name: "Ali",
  title: "Books",
  surname: "Aliyev",
  city: "Washington",
};

const { title, ...rest } = person;
console.log(title); // Books
console.log(rest); // { age: 55, name: 'Ali', surname: 'Aliyev', city: 'Washington' }

// 18
console.log(Object.keys(person)); // [ 'age', 'name', 'title', 'surname', 'city' ]
console.log(Object.values(person)); // [ 55, 'Ali', 'Books', 'Aliyev', 'Washington' ]
console.log(Object.entries(person));
