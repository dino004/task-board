import { taskArr } from "../state.js";

export function saveToLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(taskArr));
}
