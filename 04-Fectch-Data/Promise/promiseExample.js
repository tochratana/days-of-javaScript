const user = "tochratana";

getUser("tochratana")
  .then((resp) => {
    console.log(resp);
  })
  .catch((err) => {
    console.error(err);
  });

function getUser(name) {
  return new Promise((resolve, reject) => {
    const result = user === name;
    if (result) {
      resolve(`Your name ${name} is in user`);
    } else {
      reject(`Somthing was wrong!`);
    }
  });
}
