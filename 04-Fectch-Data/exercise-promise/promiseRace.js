// Create three promises that resolve after different times
const fastPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Fast promise resolved");
  }, 1000);
});

const mediumPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Medium promise resolved");
  }, 2000);
});

const slowPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Slow promise resolved");
  }, 3000);
});

// Use Promise.race to return the first resolved promise
Promise.race([fastPromise, mediumPromise, slowPromise])
  .then((res) => {
    console.log("Display short time of promise : " + res);
  })
  .catch((err) => {
    console.log(err);
  });
