const inputTask = document.getElementById("task-input");
const addButton = document.getElementById("add-task-button");
const taskList = document.getElementById("task-list");

function criarBotaoApagarTask(li) {
  li.innerText += " ";
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Apagar";
  deleteButton.setAttribute("class", "delete-button");
  li.appendChild(deleteButton);
}

function criarLi() {
  const li = document.createElement("li");
  return li;
}

function limparInput() {
  inputTask.value = "";
  inputTask.focus();
}

function addTask(task) {
  // Função "Principal"
  const li = criarLi();
  li.innerText = task;
  taskList.appendChild(li);
  limparInput();
  criarBotaoApagarTask(li);
  saveTasks();
}

inputTask.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    if (!inputTask.value) {
      alert("Por favor, insira uma tarefa.");
      return;
    }
    addTask(inputTask.value);
  }
});

addButton.addEventListener("click", function () {
  if (!inputTask.value) {
    alert("Por favor, insira uma tarefa.");
    return;
  }
  addTask(inputTask.value);
});

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete-button")) {
    const itemList = event.target.parentElement;
    itemList.remove();
    saveTasks();
  }
});

function saveTasks() {
  const tasksLi = taskList.querySelectorAll("li");
  const tasks = [];

  for (let task of tasksLi) {
    let taskText = task.innerText.replace(" Apagar", "").trim(); // Remove o texto do botão "Apagar"
    tasks.push(taskText);
  }

  const tasksJSON = JSON.stringify(tasks);
  localStorage.setItem("tasks", tasksJSON);
}

function loadTasks() {
  const tasksJSON = localStorage.getItem("tasks");
  if (tasksJSON) {
    const tasks = JSON.parse(tasksJSON);
    for (let task of tasks) {
      addTask(task);
    }
  }
}

loadTasks();
