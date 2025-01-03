// create the first promise

const firstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("First Promise Resolve");
  }, 3000);
});
