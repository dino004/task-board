import { taskArr } from "../state.js";
import { createElement } from "./dom.js";
import { removeTask, toggleTask } from "../app.js";

const taskList = document.querySelector("[data-todo-container]");

export function render() {
  taskList.innerHTML = "";
  taskArr.forEach(({ text, id, isDone }) => {
    const taskItem = createElement("li", text, "task");
    const removeBtn = createElement("button", "❌", "remove-btn");

    removeBtn.addEventListener("click", (evt) => removeTask(id, evt));
    taskItem.addEventListener("click", () => toggleTask(id));

    if (isDone) {
      taskItem.classList.add("is-completed");
    }

    taskItem.append(removeBtn);
    taskList.append(taskItem);
  });
}
