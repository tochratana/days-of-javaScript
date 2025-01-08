const form = document.querySelector("form");
const result = document.querySelector(".result");
const word = document.querySelector(".word");
const preposition = document.querySelector(".preposition");
const meaning = document.querySelector(".meaning");

async function getWordFromInput(value) {
  const URL = `https://api.dictionaryapi.dev/api/v2/entries/en/${value}`;

  const fetchUrl = (await fetch(URL)).json();
  fetchUrl.then((res) => {
    res.forEach((item) => {
      word.innerHTML = `${
        item.word.charAt(0).toUpperCase() + item.word.slice(1).toLowerCase()
      }`;
      preposition.innerHTML = `${item.meanings[0].partOfSpeech}`;
      meaning.innerHTML = `${item.meanings[0].definitions[0].definition}`;
    });
  });
  console.log(fetchUrl);
}

form.addEventListener("submit", (e) => {
  result.classList.add("block");
  e.preventDefault();
  getWordFromInput(form.elements[0].value);
});
