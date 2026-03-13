import { taskArr } from "./state.js";
import { saveToLocalStorage } from "./helpers/local-storage.js";
import { render } from "./helpers/render.js";

const taskForm = document.querySelector(".js-task-form-wrapper");
const taskInput = document.querySelector("[data-text-input]");

taskForm.addEventListener("submit", handlerSubmitForm);

function handlerSubmitForm(evt) {
  evt.preventDefault();

  if (!taskInput.value.trim()) return;
  taskArr.push({
    id: Date.now(),
    text: taskInput.value,
    isDone: false,
  });
  taskInput.value = "";
saveToLocalStorage()
  render();
}

export function removeTask(id, evt) {
  evt.stopPropagation();
  const index = taskArr.findIndex((task) => task.id === id);
    taskArr.splice(index, 1);
    saveToLocalStorage()
  render();
}

export function toggleTask(id) {
  const task = taskArr.find((task) => task.id === id);
  if (task) {
    task.isDone = !task.isDone;
  }
  render();
}

render();
