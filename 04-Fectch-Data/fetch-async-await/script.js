// const url = "https://www.course-api.com/javascript-store-products";

// // fetch(url)
// //   .then((resp) => resp.json())
// //   .then((data) => {
// //     console.log(data);
// //     data.forEach((item) => console.log(item.id));
// //   })
// //   .catch((err) => console.log(err));

// const getId = async () => {
//   try {
//     const result = (await fetch(url)).json().then((data) => {
//       console.log(data);
//       data.forEach((item) => console.log(item.id));
//     });
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// };

// getId();
// async function fetchMessage() {
//   return "Hello, this is a simple async function!";
// }

// async function displayMessage() {
//   const message = await fetchMessage(); // Wait for the message
//   console.log(message); // Display the message
// }

// displayMessage();
// console.log(fetchMessage());

// // console.log("This is my first ");
// // async function fetchUserData() {
// //   const response = await fetch(
// //     "https://www.course-api.com/javascript-store-products"
// //   );
// //   const data = await response.json();
// //   console.log(data);
// // }
// // fetchUserData();

// // Define an asynchronous function to fetch and log data
// async function fetchProducts() {
//   const apiURL = "https://www.course-api.com/javascript-store-products";

//   try {
//     // Fetch data from the API
//     const response = await fetch(apiURL);

//     if (!response.ok) {
//       throw new Error(`Error: ${response.status} ${response.statusText}`);
//     }
//     // Parse the JSON data
//     const products = await response.json();

//     // Log the fetched products
//     console.log(products);
//   } catch (error) {
//     // Handle errors
//     console.log("You are error");
//   }
// }

// // Call the function
// fetchProducts();

// async function fetchProducts() {
//   try {
//     const response = await fetch(
//       "https://www.course-api.com/javascript-store-product"
//     );
//     const products = await response.json(); // This will still try to parse
//     console.log(products); // May cause unexpected behavior
//   } catch (error) {
//     console.log("error");
//   }
// }

// fetchProducts();
async function fetchProducts() {
  const apiURL = "https://www.course-api.com/javascript-store-products";
  try {
    // Fetch data from the API
    const response = await fetch(apiURL);
    // Parse the JSON data
    const products = await response.json();
    // Log the fetched products
    console.log(products);
  } catch (error) {
    // Handle errors
    console.error("Error fetching products:", error.message);
  }
}
// Call the function
fetchProducts();
