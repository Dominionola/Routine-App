function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  const taskList = document.getElementById("taskList");

  if (taskText === "") return;

  // Create task item
  const li = document.createElement("li");
  li.className = "flex items-center gap-4";

  // Checkbox
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.className =
    "my-auto appearance-none w-6 h-6 bg-white border border-gray-300 rounded-full checked:bg-green-500 checked:border-transparent focus:outline-none cursor-pointer";
  checkbox.onclick = function () {
    checkTask(checkbox);
  };

  // Task Text
  const textNode = document.createTextNode(taskText);

  // Delete icon
  const deleteIcon = document.createElement("i");
  deleteIcon.className =
    "ph ph-trash hover:text-red-500 cursor-pointer text-2xl";
  deleteIcon.onclick = function () {
    deleteTask(deleteIcon);
  };

  // Append elements
  li.appendChild(checkbox);
  li.appendChild(textNode);
  li.appendChild(deleteIcon);
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
}

function checkTask(checkbox) {
  const taskItem = checkbox.parentElement;
  if (checkbox.checked) {
    taskItem.classList.add("line-through", "text-gray-400");
  } else {
    taskItem.classList.remove("line-through", "text-gray-400");
  }
}

function deleteTask(icon) {
  const taskItem = icon.parentElement;
  taskItem.remove();
}
