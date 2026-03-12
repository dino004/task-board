const taskForm = document.querySelector(".js-task-form-wrapper");
const taskInput = document.querySelector("[data-text-input]");
const taskSubmitBtn = document.querySelector("[data-add-todo-btn]");
const taskList = document.querySelector("[data-todo-container]");

const taskArr = [];

taskForm.addEventListener("submit", handlerSubmitForm);

function handlerSubmitForm(evt) {
  evt.preventDefault();

  if (!taskInput.value.trim()) return;
  taskArr.push(taskInput.value);
  taskInput.value = "";

  render();
}

function render() {
  taskList.innerHTML = "";
  taskArr.forEach((task) => {
    const taskItem = createElement("li", task);
    taskList.append(taskItem);
  });
}

function createElement(tagName, textContent) {
  const element = document.createElement(tagName);
  element.textContent = textContent;
  return element;
}
