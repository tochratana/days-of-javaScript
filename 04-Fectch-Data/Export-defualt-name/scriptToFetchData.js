import student from "./data.js";

const studentList = student
  .map((infor) => {
    return `${infor.id} - ${infor.name} - ${infor.age}`;
  })
  .join("\n");

console.log(studentList);
