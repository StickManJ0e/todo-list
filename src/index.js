console.log("index.js is working");

let addTaskButton = document.querySelector('#add-task');
let body = document.querySelector('body');

function createAddTaskMenu() {
    let addTaskMenu = document.createElement('div');
    addTaskMenu.setAttribute('id', 'add-task-menu');
    body.appendChild(addTaskMenu);

    let exitMenuButton = document.createElement('button');
    exitMenuButton.setAttribute('id', 'exit-menu-button');
    addTaskMenu.appendChild(exitMenuButton);
    exitMenu(exitMenuButton);
}

function removeAddTaskMenu() {
    let addTaskMenu = document.querySelector('#add-task-menu');
    addTaskMenu.remove();
}

function exitMenu(exitMenuButton) {
    exitMenuButton.addEventListener('click', () => {
        removeAddTaskMenu();
        body.classList.remove('blur');
    });
}

addTaskButton.addEventListener('click', () => {
    body.classList.add('blur');
    createAddTaskMenu();
});