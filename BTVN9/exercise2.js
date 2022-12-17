// cho object

const obj = {
  name: "Hưng",
  age: 20,
  email: "dth27902@gamil.com",
};

const arr = [];

function run(obj) {
  for (const key in obj) {
    arr.push(`${key}: ${obj[key]}`);
  }
  return arr;
}

console.log(run(obj));

// Output:
// [
//      "name: Hưng",
//      "age: 20",
//      "emai: dth27902@gmail.com"
// ]
