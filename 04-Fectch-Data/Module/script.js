const user = [
  {
    name: "Toch Ratana",
    position: "Teacher",
    age: 25,
  },
  {
    name: "John Doe",
    position: "Student",
    age: 30,
  },
  {
    name: "Jane Doe",
    position: "Student",
    age: 20,
  },
];

const mapArray = user
  .map((item) => {
    return `${item.name} is a ${item.position} and ${item.age} years old`;
  })
  .join("\n");

console.log(mapArray);
