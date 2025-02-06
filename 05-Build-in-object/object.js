console.log("Welcome To JavaScript Array!");

const arr = [1, 2, 3, "Hello", true, 3.4];
arr.push("last"); // use for add last item to array
console.log(arr);

const popArray = [1, 2, 3, 4];
console.log(popArray.pop()); // use to remove last item from array
console.log(popArray);

const shiftArray = [1, 2, 3, 4];
console.log(shiftArray.shift(1)); // use for remove first item from array(the same pop)
console.log(shiftArray);
// pop and shift is return item that it remove from array

const unShiftArray = [1, 2, 3, 4, 5];
unShiftArray.unshift("Hello", "Un Hello"); // use for add new item to begining of array
console.log(unShiftArray);
// unshift is the same shift: shift is remove first, unshift add first

const mapArray = [1, 2, 3, 4, 5];
const us = [1, 2, 3, 4, 5];
console.log(mapArray);
const newArray = mapArray.map((item) => item * item);
console.log(newArray);
// ------------------------
console.log("-".repeat(30));
const number = [1, 2, 3, 4, 5, 6];
function numberTOFillter(number) {
  return number % 2 === 0;
}
const f = number.filter(numberTOFillter);
console.log(f);
// -------------------------
console.log("-".repeat(30));

const a = [1, 2, 3, 4, 5];
const resultFilter = a.filter((item) => item % 2 === 2);
console.log(resultFilter);
