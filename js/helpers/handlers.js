import { taskArr } from "../state.js";
import { saveToLocalStorage } from "./local-storage.js";
import { render } from "./render.js";

export function removeTask(id, evt) {
  evt.stopPropagation();
  const index = taskArr.findIndex((task) => task.id === id);
  taskArr.splice(index, 1);
  saveToLocalStorage();
  render();
}

export function toggleTask(id) {
  const task = taskArr.find((task) => task.id === id);
  if (task) {
    task.isDone = !task.isDone;
  }
  saveToLocalStorage();
  render();
}
