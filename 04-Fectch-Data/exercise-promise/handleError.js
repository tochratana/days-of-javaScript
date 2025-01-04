// Create a promise that simulates an error
const errorPromise = new Promise((resolve, reject) => {
  setTimeout(() => reject("Your are error"), 3000);
});

// handle an error using catch

errorPromise
  .then((resp) => console.log(resp))
  .catch((error) => console.error("Error catch : " + error));

// Another way using then() to catch error second parameter
// then(first paramenter, second paramenter)
// the second parater can be return an error 
errorPromise.then(
  (ersp) => {
    console.log(ersp);
  },
  (error) => {
    console.error("Error catch using then() : " + error);
  }
);
