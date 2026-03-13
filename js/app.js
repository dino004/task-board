const taskForm = document.querySelector(".js-task-form-wrapper");
const taskInput = document.querySelector("[data-text-input]");
const taskSubmitBtn = document.querySelector("[data-add-todo-btn]");
const taskList = document.querySelector("[data-todo-container]");
// const removeBtn = document.querySelector(".remove-btn");

const taskArr = [];

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

  render();
}

function render() {
  taskList.innerHTML = "";
  taskArr.forEach(({ text, id }) => {
    const taskItem = createElement("li", text, "task");
    const removeBtn = createElement("button", "❌", "remove-btn");

    removeBtn.addEventListener("click", () => removeTask(id));

    taskItem.append(removeBtn);
    taskList.append(taskItem);
  });
}

function createElement(tagName, textContent, className) {
  const element = document.createElement(tagName);
  element.textContent = textContent;
  element.classList.add(className);
  return element;
}

function removeTask(id) {
  const index = taskArr.findIndex((task) => task.id === id);
  taskArr.splice(index, 1);
  render();
}
