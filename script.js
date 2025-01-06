import { nameLesson } from "./data/nameLesson.js";
const titleOfLessonContainer = document.querySelector(
  ".titleOfLessonContainer"
);
nameLesson.map((item) => {
  titleOfLessonContainer.innerHTML += `<li><a href="${item.url}">${item.name}</a></li>`;
});
