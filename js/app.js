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
  saveToLocalStorage();
  render();
}

render();
