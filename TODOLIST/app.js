const form = document.getElementById("formulario");
const listaTareas = document.getElementById("lista-tareas");

// Add a submit event listener to the form
form.addEventListener("submit", function (e) {
  e.preventDefault(); // 

  // Get the task input value
  const tareainput = document.getElementById("input");
  const textotarea = tareainput.value;

  if (textotarea.trim() !== "") {
    // Creaamos un nuevo elemento 
    const taskElement = document.createElement("div");
    taskElement.className = "alert alert-warning d-flex justify-content-between align-items-center";

    taskElement.innerHTML = `
      <p class="m-0">${textotarea}</p>
      <h3 class="m-0">
        <i class="fas fa-check-circle" id="check" role="button"></i>
        <i class="fas fa-times-circle" id="cruz" role="button"></i>
      </h3>
    `;
    const checkIcon = taskElement.querySelector(".fa-check-circle");
    checkIcon.addEventListener("click", function () {
      taskElement.style.backgroundColor = "green"; // lo ponemos en verde si damos al check
      taskElement.style.textDecoration = "line-through"; // Add a line-through text decoration
    });
    const cruzicon = taskElement.querySelector(".fa-times-circle");
    cruzicon.addEventListener("click", function () {
      taskElement.style.backgroundColor = "green"; // lo ponemos en verde si damos al check
      listaTareas.removeChild(taskElement);
    });

    

    // añadimos la tarea al elemto listatareas
    listaTareas.appendChild(taskElement);

    
    taskInput.value = "";

    

    
  }
});