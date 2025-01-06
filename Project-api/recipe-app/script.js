const inputSearch = document.querySelector(".inputSearch");
const searchButton = document.querySelector(".searchButton");
const product_container = document.querySelector(".product-container");
let storeValueSearch;

const fetchName = async (queryName) => {
  product_container.innerHTML = "";

  const urlName = await fetch(
    `http://themealdb.com/api/json/v1/1/search.php?s=${queryName}`
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
    product_container.innerHTML = `<h1 class="text-not-found">We can't find ${storeValueSearch}</h1>`;
  }
};

fetchName("");
searchButton.addEventListener("click", (e) => {
  e.preventDefault();
  const searchValue = inputSearch.value.trim();
  storeValueSearch = searchValue;
  console.log(searchValue);
  fetchName(searchValue);
});
