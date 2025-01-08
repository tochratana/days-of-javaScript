const form = document.querySelector("form");
const result = document.querySelector(".result");

function getWordFromInput(value) {
	alert("You input word : " + value);
  }

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getWordFromInput(form.elements[0].value);
});


