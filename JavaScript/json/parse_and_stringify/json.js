// JSON.parse
const json = `{"name": "Nezrin", "surname": "Osmanova", "age": 99}`;
const obj = JSON.parse(json);
console.log(obj); // { name: 'Nezrin', surname: 'Osmanova', age: 99 }
console.log(obj["surname"]); // Osmanova
console.log(obj["age"]); // 99

const Json = `{
  "book": {
    "name": "Ha Ha",
    "author": "Nezrin",
     "year" : 2001,
     "genre" : "drama",
     "price" : "$100000000000000000"
  }
}`;
const _obj = JSON.parse(Json);
console.log(_obj);
console.log(_obj.book["name"]); // Ha Ha
console.log(_obj.book["genre"]); // drama
console.log(_obj.book["price"]); // $100000000000000000

// JSON.stringify
const object = { name: "Nezrin", surname: "Osmanova", age: 99 };
const _json = JSON.stringify(object);
console.log(_json); // {"name":"Nezrin","surname":"Osmanova","age":99}

// JSON array
const json_ = `[1, 5, 55, 25, 52]`;
const arr = JSON.parse(json_);
console.log(arr); // [ 1, 5, 55, 25, 52 ]
console.log(arr[3]); // 25
