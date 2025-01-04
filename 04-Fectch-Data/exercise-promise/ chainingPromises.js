// create the first promise
const firstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("First Promise Resolve");
  }, 1000);
});

// chain the second promise

const secondPromise = firstPromise.then((messeage) => {
  console.log(messeage); // log to the message frome first promise
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Second Promise Resolve");
    }, 1000);
  });
});

secondPromise
  .then((message) => {
    console.log(message); // log to the message frome second promise
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Third Promise Resolve");
      }, 1000);
    });
  })
  .then((message) => {
    console.log(message); // log to the message from third promise
  });
