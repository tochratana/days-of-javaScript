// const sum = function (a, b) {
//   return a + b;
// };

// const resultSum = sum(10, 20);
// console.log(resultSum);
// (function () {
//   console.log("Welcome to function imeditely");
// })();

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  detail(name, age) {
    return `His name is ${name} and he is ${age}.`;
  }
}

const person1 = new Person();
person1.name = "Xoxo";
person1.age = 2000;
console.log(person1.name);
console.log(person1.age);

const result = person1.detail("Rratana", 18);
console.log(result);
