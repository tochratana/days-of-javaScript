// create three promise that resolve different time

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolve from Promise ONE");
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Resolve from Promise TWO");
  }, 2000);
});

const promise3 = new Promise((resolve, reject) => {
  setInterval(() => {
    resolve("Resolve from Promise THREE");
  }, 3000);
});

// Use promise.all to run all promise from parallel
Promise.all([promise1, promise2, promise3])
  .then((res) => {
    console.log("All promise");
    res.forEach((item, index) => {
      console.log(`Promise "${item}" at Promise ${index + 1}`);
    });
  })
  .catch((err) => {
    console.log("One of the promise is reject : " + err);
  });
