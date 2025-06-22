const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");

let tasks = JSON.parse(localStorage.getItem("todoList")) || [];
renderTasks();

addBtn.addEventListener("click", () => {
  const taskText = input.value.trim();
  if(taskText === "") return;

  tasks.push(taskText);
  localStorage.setItem("todoList", JSON.stringify(tasks));

  input.value = "";
  renderTasks();
});

function renderTasks() {
  taskList.innerHTML = ""; 

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerText = task;

    const delBtn = document.createElement("button");
   delBtn.innerHTML = `<img src="https://cdn-icons-png.flaticon.com/512/1214/1214428.png" width="20" alt="delete" />`;

    delBtn.style.marginLeft = "10px";

    delBtn.addEventListener("click", () => {

      tasks.splice(index, 1);
      localStorage.setItem("todoList", JSON.stringify(tasks));
      renderTasks(); 
    });

    li.appendChild(delBtn);
    taskList.appendChild(li);
  });
}
