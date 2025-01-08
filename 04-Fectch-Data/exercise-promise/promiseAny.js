// Create three promises with different resolve and reject times
const promiseA = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise A reject");
  }, 1000);
});
const promiseB = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise B reject");
  }, 2000);
});
const promiseC = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Promise C reject");
  }, 3000);
});
// Use promise.any to reject first promise

Promise.any([promiseA, promiseB, promiseC])
  .then((res) => console.log("First promise : " + res))
  .catch((err) => console.log("All promise were reject : " + err));