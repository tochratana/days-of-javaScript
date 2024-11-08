// Keyboard Event
// 1. Keydown

const input = document.getElementById("input");
const para = document.getElementById("para");

input.addEventListener("keydown", () => {
  const valueOfKeydown = input.value;
  console.log(valueOfKeydown);
  para.innerHTML = valueOfKeydown;
  console.log(event.key); // in keydown we have event.key
});
