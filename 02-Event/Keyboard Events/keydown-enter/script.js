const input = document.getElementById("input");
const user = document.getElementById("name");
const add = document.getElementById("add");
let i = 1;

const addName = () => {
  let getValue = input.value;
  console.log(getValue);
  user.innerHTML += `<p>${i} ${getValue} <button>Delete</button></p>`;
  i++;
  input.value = "";
};

add.addEventListener("click", addName);

const handleEnter = () => {
  if (event.key == "Enter") {
    addName();
  } else {
    console.log("Test");
  }
};
