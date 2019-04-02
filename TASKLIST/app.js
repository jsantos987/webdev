// DEFINE UI VARIALBLES

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// LOAD ALL EVENT LISTNERS
loadEventListeners();

//LOAD ALL EVNT LISTENERS
function loadEventListeners() {
    // DOM load event listner
    document.addEventListener('DOMContentLoaded', getTasks);
    // ADD TASK EVENTS
    form.addEventListener('submit', addTask);
    //REMOVE TASK EVENT
    taskList.addEventListener('click', removeTask);
    // CLEAR TASK EVENT
    clearBtn.addEventListener('click', clearTasks);
    // FILTER TASK EVENT
    filter.addEventListener('keyup', filterTasks);
}

//GET Tasks from LS
function getTasks(){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task){
        // CREATE li ELEMENT
        const li = document.createElement('li');
        // Add Class to li
        li.className = 'collection-item';
        // CREATE TEXT NODE AND APPEND TO li
        li.appendChild(document.createTextNode(task));
        //CREATE new link element
        const link = document.createElement('a');
        // ADD CLASS
        link.className = 'delete-item secondary-content';
        //Add icon HTML
        link.innerHTML= '<i class="fa fa-remove"></i>';
        // Append the link to li
        li.appendChild(link);
        // Append li to ul
        taskList.appendChild(li);
    });
}

// ADD TASK
function addTask(e) {
    if(taskInput.value === ''){
        alert('Add a task');
    }

// CREATE li ELEMENT
const li = document.createElement('li');
// Add Class to li
li.className = 'collection-item';
// CREATE TEXT NODE AND APPEND TO li
li.appendChild(document.createTextNode(taskInput.value));
//CREATE new link element
const link = document.createElement('a');
// ADD CLASS
link.className = 'delete-item secondary-content';
//Add icon HTML
link.innerHTML= '<i class="fa fa-remove"></i>';
// Append the link to li
li.appendChild(link);

// Append li to ul
taskList.appendChild(li);

// Store in local storage
storeTaskInLocalStorage(taskInput.value);

//clear input
taskInput.value = '';

    e.preventDefault();
}

// Store Task
function storeTaskInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));

}


// REMOVE TASK
function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
        if(confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove();

            // REMOVE FROM LS
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}

// REMOVE FROM LS
function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    if(localStorage.getItem('tasks') === null){
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index){
        if(taskItem.textContent === task){
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem('tasks', JSON.stringify(tasks));
}

/// CLEAR TASK
function clearTasks() {
   //  taskList.innerHTML = '';   // this works fine
   // FASTER loop is faster solution
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }
    // Clear from Local Storage
    clearTasksFromLocalStorage();
}

// Clear Tasks
function clearTasksFromLocalStorage(){
    localStorage.clear();
}

// FILTER TASK
function filterTasks(e){
    const text = e.target.value.toLowerCase();
    
    document.querySelectorAll('.collection-item').forEach
    (function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
            } else {
                task.style.display = 'none';
        }
    });

}