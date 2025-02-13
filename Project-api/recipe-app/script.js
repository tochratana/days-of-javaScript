const inputSearch = document.querySelector(".inputSearch");
const searchButton = document.querySelector(".searchButton");
const product_container = document.querySelector(".product-container");
const text_not_found = document.querySelector(".text-not-found");
let storeValueSearch;

const fetchName = async (queryName) => {
  
  product_container.innerHTML = "";

  const urlName = await fetch(
    `https://themealdb.com/api/json/v1/1/search.php?s=${queryName}`
  );
  const respon = await urlName.json();
  if (respon.meals) {
    respon.meals.forEach((item) => {
      console.log(item);
      product_container.innerHTML += `
		  <div class="product">
			<img class="img"
			  src="${item.strMealThumb}"
			  alt=""
			/>
			<h2>${item.strMeal}</h2>
		  </div>
	  `;
    });
  } else {
    text_not_found.innerHTML = `<h1 class="text-not-found">We can't find ${storeValueSearch}</h1>`;
  }
};

fetchName("");
inputSearch.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    searchButton.click();
  }
});
searchButton.addEventListener("click", (e) => {
  console.log("Loading...");
  e.preventDefault();
  const searchValue = inputSearch.value.trim();
  storeValueSearch = searchValue;
  console.log(searchValue);
  fetchName(searchValue);
});
