// Selecting the elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Event listener to add task
addTaskBtn.addEventListener('click', addTask);

function addTask() {
  const taskValue = taskInput.value.trim();

  if (taskValue === '') {
    alert('Please enter a task!');
    return;
  }

  // Create a new list item
  const li = document.createElement('li');
  
  // Task content
  li.innerHTML = `
    <span class="task-text">${taskValue}</span>
    <button class="edit">Edit</button>
    <button class="delete">Delete</button>
  `;

  // Append to the task list
  taskList.appendChild(li);
  taskInput.value = ''; // Clear the input field

  // Attach delete and edit event listeners
  li.querySelector('.delete').addEventListener('click', deleteTask);
  li.querySelector('.edit').addEventListener('click', editTask);
}

// Function to delete a task
function deleteTask(event) {
  const taskItem = event.target.closest('li');
  taskList.removeChild(taskItem);
}

// Function to edit a task
function editTask(event) {
  const taskItem = event.target.closest('li');
  const taskText = taskItem.querySelector('.task-text');
  const newTaskText = prompt('Edit your task:', taskText.textContent);

  if (newTaskText !== null && newTaskText.trim() !== '') {
    taskText.textContent = newTaskText;
  }
}
