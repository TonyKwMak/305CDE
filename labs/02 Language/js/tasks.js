// tasks.js
// This script manages a to-do list.

// Need a global variable:
var tasks = [];

function checkDuplicates(array, item) {
    'use strict';
    if (array.indexOf(item) === -1) {
        return true;
    } else {
        window.alert('Existed!');
    }
}

// Function called when the form is submitted.
// Function adds a task to the global array.
function addTask() {
    'use strict';
    var task, output, message, i, count;
    // Get the task:
    task = document.getElementById('task');

    // Reference to where the output goes:
    output = document.getElementById('output');
    
    // For the output:
    message = '';

    if (task.value) {
    
        // Add the item to the array:
        if (checkDuplicates(tasks, task.value) === true) {
            tasks.push(task.value);
        }
        // Update the page:
        message = '<h2>To-Do</h2><ol>';
        for (i = 0, count = tasks.length; i < count; i += 1) {
            message += '<li>' + tasks[i] + '</li>';
        }
        message += '</ol>';
        output.innerHTML = message;
        
    } // End of task.value IF.

    // Return false to prevent submission:
    return false;
    
} // End of addTask() function.

// Initial setup:
function init() {
    'use strict';
    document.getElementById('theForm').onsubmit = addTask;
} // End of init() function.

window.onload = init;
var button;

button = document.getElementById('submit');
button.onclick = addTask;