const form = document.querySelector("form");
const taskInput = document.getElementById("new-task");
const tasks = document.querySelector("#tasks");

form.addEventListener("submit", addTask);
tasks.addEventListener("click", removeTask);

// Add task
function addTask(e) {
  e.preventDefault();
  if (taskInput.value === "") return;

  const li = document.createElement("li");
  li.innerHTML = `<span>${taskInput.value}</span> <button class="delete">X</button>`;
  tasks.appendChild(li);
  taskInput.value = "";
}

// Remove task
function removeTask(e) {
  if (!e.target.matches(".delete")) return;
  e.target.parentElement.remove();
}
