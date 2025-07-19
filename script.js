const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");
    li.textContent = taskText;

    // Marcar como completada al hacer clic
    li.addEventListener("click", () => {
      li.classList.toggle("completed");
    });

    // Eliminar al hacer doble clic
    li.addEventListener("dblclick", () => {
      li.remove();
    });

    taskList.appendChild(li);
    taskInput.value = "";
  }
});
