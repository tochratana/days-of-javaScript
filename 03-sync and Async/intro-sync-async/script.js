// sync and async code

// console.log("ONE");
// console.log("TWO");
// print();
// console.log("Last");

// function print(){
// 	console.log("printing");
// }

liverStream();

function liverStream() {
  console.log("Start Live");
  setTimeout(() => {
    console.log("First Song");
    setTimeout(() => {
      console.log("Second Song");
      setTimeout(() => {
        console.log("Third Song");
        console.log("Endding");
      }, 3000);
    }, 3000);
  }, 3000);
}
