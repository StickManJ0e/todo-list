console.log("index.js is working");

let addTaskButton = document.querySelector('#add-task');
let body = document.querySelector('body');

function createAddTaskMenu() {
    let addTaskMenu = document.createElement('div');
    addTaskMenu.setAttribute('id', 'add-task-menu');
    body.appendChild(addTaskMenu);
}

addTaskButton.addEventListener('click', () => {
    body.classList.add('blur');
    createAddTaskMenu();
});