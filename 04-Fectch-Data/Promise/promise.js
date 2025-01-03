const promise = new Promise((resolve, reject) => {
  // promise like object
  resolve("You're successful");
  // reject("You're error");
});
promise
  .then((resp) => {
    console.log(resp);
  })
  .catch((err) => {
    console.error(err);
  });

const myPromise = new Promise((resolve, reject) => {
  let success = false; // Simulate an operation

  if (success) {
    resolve("Operation successful!"); // Fulfilled
  } else {
    reject("Operation failed!"); // Rejected
  }
});
myPromise
  .then((result) => {
    console.log(result); // Logs "Operation successful!" if resolved
  })
  .catch((error) => {
    console.error(error); // Logs "Operation failed!" if rejected
  })
  .finally(() => {
    console.log("Operation completed."); // Always runs
  });
