const url = "https://www.course-api.com/javascript-store-products";

// fetch(url)
//   .then((resp) => resp.json())
//   .then((data) => {
//     console.log(data);
//     data.forEach((item) => console.log(item.id));
//   })
//   .catch((err) => console.log(err));

const getId = async () => {
  try {
    const result = (await fetch(url)).json().then((data) => {
      console.log(data);
      data.forEach((item) => console.log(item.id));
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

getId();
