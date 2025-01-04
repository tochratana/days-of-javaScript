// This is a simple of using promise
const name = "Toch Ratana";

function promise(userName) {
  return new Promise((resolve, reject) => {
    if (name === userName) {
      resolve("You are sucessful");
    } else {
      reject("Something was wrong");
    }
  });
}
promise("tochratana")
  .then((resp) => {
    console.log(resp);
  })
  .catch((err) => {
    console.log(err);
  });

// change promise to use async and await

// create async funciton or arrow function
async function getUser(params) {
  console.log("Hello");
}
getUser();

const getUsers = async () => {
  console.log("this is a async function");
};
getUsers();

// to resolve the promise to use async and await we
// - create a async function
// - if we create a async function we can use await, it mean like wait for promise
// - but we just get a resolve
const getName = async () => {
  const result = await promise("Toch Ratana");
  console.log(result);
};
// call function aysnc
getName();
// We can use try catch to resolve and reject from promise

// we can use this for replace using catch and then
const getNameUser = async () => {
  try {
    const result = await promise("tochratana");
    console.log(result);
  } catch (error) {
    console.log("Something incorrect!");
  }
};
getNameUser();
