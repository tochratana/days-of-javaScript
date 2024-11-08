// What preventDefault
// preventDefault() is a method in JavaScript that prevents the default action that belongs to the event from being triggered. For example, it can be used to stop a form submission,

const submit = document.getElementById("submit");

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault(); // Prevents the form from submitting
  console.log("Form submission prevented.");
});
