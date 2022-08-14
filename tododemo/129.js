const todoForm = document.querySelector(".form-todo");
const todoInput = document.querySelector(".form-todo input[type='text']");
const todoList = document.querySelector(".todo-list");
const txt = document.querySelector(".text");
// const vle =[];

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  var newTodoText = todoInput.value;
  const newLi = document.createElement("li");
  const newLiInnerHtml = `
        <span class="text">${newTodoText}</span>
        <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
        </div>`;
  newLi.innerHTML = newLiInnerHtml;
  todoList.append(newLi);
  todoInput.value = "";
  updateLS();
});

todoList.addEventListener("click", (e) => {
  // check if user clicked on done button

  if (e.target.classList.contains("remove")) {
    const targetedLi = e.target.parentNode.parentNode;
    targetedLi.remove();
    updateLS();
  }
  if (e.target.classList.contains("done")) {
    const liSpan = e.target.parentNode.previousElementSibling;
    liSpan.style.textDecoration = "line-through";
  }
});

const updateLS = () => {
  const task = document.querySelectorAll(".text");
  // console.log(task)

  const tasks = [];
  task.forEach((item) => {
    console.log(item.innerHTML);
    return tasks.push(item.innerHTML);
  });
  localStorage.setItem("task", JSON.stringify(tasks));
};

const gettask = JSON.parse(localStorage.getItem("task"));
// console.log(gettask);

if (gettask) {
  gettask.forEach((e) => {
    const list = document.querySelector(".todo-list");
    const listI = document.createElement("li");
    listI.innerHTML = `
    <span class="text">${e}</span>
          <div class="todo-buttons">
            <button class="todo-btn done">Done</button>
            <button class="todo-btn remove">Remove</button>
          </div>

    `;
    list.appendChild(listI);
  });
}
