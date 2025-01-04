// 01-fetching Data
fetch("https://www.course-api.com/javascript-store-products")
  .then((resp) => {
    resp.json().then((data) => {
      console.log(data);
      data.forEach((item) => {
        console.log(item.id);
      });
    });
  })

  .catch((err) => {
    console.log(err);
  });

// 02-fetching Data

fetch("https://www.course-api.com/javascript-store-products")
  .then((resp) => resp.json()) // Convert the response to JSON
  .then((data) => {
    console.log(data); // Log the entire JSON data
    // Access specific properties here
    data.forEach((item) => {
      console.log(item.fields.company); // Example: Access the name of each product
    });
  })
  .catch((err) => {
    console.log("Error fetching data:", err);
  });
