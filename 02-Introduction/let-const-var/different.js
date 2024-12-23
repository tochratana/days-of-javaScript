// var is a global scope
// let is a block scope
// const is a block scope but it can't be reassigned

let a = 40;
if (a > 10) {
  var b = 20;
  console.log("a is greater than 10");
}

const c = 30;
// c = 40; // it will throw an error

console.log(b);

let name = "Toch Ratana";
const age = 19;
console.log(`His name is ${name} and he is ${age}`);
console.log(name);

console.log("100" - 10);
console.log("$" * 20); // Not a Number
