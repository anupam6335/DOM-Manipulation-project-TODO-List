// Define UI variable
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('.task');


// load all even listenser
loadAllEventListners();

function loadAllEventListners() {
  // add task event
  form.addEventListener('submit', addTask);
}

// Add Task function
function addTask(e) {

  if(taskInput.value === '') {
    alert('Add a task');
  }

  // create element
  const li = document.querySelector('li');
  // li class name
  li.className = 'collection-item';
  // create Text node appened to the li
  li.appendChild(document.createTextNode(taskInput.value));
  // create new link
  const link = document.createElement(a);
  // Add class
  link.className = 'delete-item secondary-content';
  // Add icon
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // append link to li
  li.appendChild(link);
  // console.log(li);
  // append li to ul
  taskList.appendChild(li);  

  // clear task 
  taskInput.value = '';
  e.preventDefault();
}
