const nameUser = "tochratana";
const functionToGetRespon = async () => {
  try {
    const result = await getUser("tochratana");
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

functionToGetRespon();
function getUser(name) {
  return new Promise((resolve, reject) => {
    if (name === nameUser) {
      resolve("You are sucessful");
    } else {
      reject("Something was wrong");
    }
  });
}
