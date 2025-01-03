const promsie = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("You are sucessful");
  }, 3000);
});
promsie.then((resp) => {
  console.log(resp);
});
