// TODO Day-01
console.log("Hello");

let a = 20;
const b = 90;
console.log(a + b);
if (a > b) {
  console.log("A is grather then B");
} else {
  console.log("B is grather then A");
}

function print() {
  if (true) {
    var c = "This is var variable";
  }
  console.log(c);
}
print();
// console.log(c);

var y = 20;

function varVariable() {
  y = 40;
}
varVariable();
console.log(y);
// Name of variable

let firstName = "Toch";
let lastName = "Ratana";
console.log(firstName + " " + lastName);

// case-sensitive

let d = 10;
let D = 20;
console.log(D, d);
// console ----

console.log("Print Log");
console.error("Print Error");

// Commend have two sigle line commend and Muiltiple line commend
// console.log("This is a commend ");
/* function printCommend() {
  return "This is a commend";
} */

// DOM

const button = document.getElementById("button");
// const img = document.getElementById("img");

console.log(button);
document.body.style.display = "flex";
document.body.style.flexDirection = "column";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";

let color = true;
button.addEventListener("click", () => {
  if (color) {
    document.body.style.backgroundColor = "black";
    color = false;
    // img.style.display = "none";
  } else {
    document.body.style.backgroundColor = "white";
    color = true;
    // img.style.display = "block";
  }
});
// img.style.display = "none";

// bigInt

let number = 2123456789034567654343554354544545454n;
console.log(typeof number);
console.log("Big Ing " + number.toLocaleString);

const obj = {
  name: "Toch Ratana",
  age: 12,
  code: function app() {
    return "Hello";
  },
  more() {
    return "This is shorthand";
  },
};

console.log(obj.code());
console.log(obj.more());

let operator = 30 > 40 ? "30 > 40" : "30 < 40";
console.log(operator);

let score = 76;

let grade =
  score >= 90
    ? "A"
    : score >= 80
    ? "B"
    : score >= 70
    ? "C"
    : score >= 60
    ? "D"
    : score >= 50
    ? "E"
    : "F";

console.log(grade);
