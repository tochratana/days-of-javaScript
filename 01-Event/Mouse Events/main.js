// Mouse Event
// 1. Click Event
// Triggered when a use r click on element.

const btnClick = document.getElementById("btnClick");

const reply = () => {
  console.log("Hello Bro");
};

// 2. Double Click Event
// Triggered when a user double-clicks on an element.
// append can input sting and many tage a elements
// appendChild can input one element

const btnDoubleClick = document.getElementById("btnDoubleClick");

btnDoubleClick.addEventListener("dblclick", () => {
  console.log("Hello Double Click");
});
// example to click create button
let btn = document.createElement("button");
btn.textContent = "Hello";
btn.addEventListener("click", () => {
  console.log("This is a Button Hello to click");
});

document.body.append(btn);

// example to create dropdonw menu

const btnSelect = document.createElement("button");
const element = document.createElement("p");

btnSelect.textContent = "Select a Subject";
element.textContent = "MIS";

document.body.append(btnSelect);
document.body.append(element);
btnSelect.addEventListener("click", () => {
  if (element.style.display == "none") {
    element.style.display = "flex";
  } else {
    element.style.display = "none";
  }
});

// 3. mouseenter Event
// Triggered when a user hover on an element.

const btnhoverenter = document.createElement("button");

btnhoverenter.textContent = "Hover For Enter ";

document.body.append(btnhoverenter);

btnhoverenter.addEventListener("mouseenter", () => {
  console.log("This is a mouse hover enter");
});
// example : write a function that change background element when hover

function changeBackground() {
  if (document.getElementById("paragraph").style.backgroundColor == "black") {
    document.getElementById("paragraph").style.backgroundColor = "white";
    document.getElementById("paragraph").style.color = "black";
  } else {
    document.getElementById("paragraph").style.backgroundColor = "black";
    document.getElementById("paragraph").style.color = "white";
  }
}

// 4. mouse over event
// Triggered when a user mouse over on an element. (The mouse enter)

const p = document.createElement("button");
p.textContent = "Mouse Over";
document.body.append(p);
p.addEventListener("mouseover", () => {
  console.log("This is a mourse over");
});

// 5. mouse out event
// Triggered when a user mouse out of an element.

const pout = document.createElement("button");
pout.textContent = "One more";
document.body.append(pout);
pout.addEventListener("mouseout", () => {
  console.log("If we in mouse out it not see but when we left we see");
});

// 6. mouse up event
// Triggered when a user mouse out of an element.(the same mouse out)

const mouseUp = document.createElement("button");
mouseUp.textContent = "Mouse Up events";
document.body.append(mouseUp);
mouseUp.addEventListener("mouseup", () => {
  console.log("We see it when we left");
});

// 6. mouse move event
// Triggered when a user mouse out of an element.(the same mouse out)
const mouseMove = document.createElement("p");
mouseMove.textContent = "Mouse Move events";
document.body.append(mouseMove);
mouseMove.addEventListener("mouseout", () => {
  console.log("We see it when we left");
});

const buttonTrim = document.getElementById("trim");
const input = document.querySelector("input");

buttonTrim.addEventListener("click", () => {
  console.log(input.value.trim());
});
