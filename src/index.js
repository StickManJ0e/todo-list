console.log("index.js is working");

let addTaskButton = document.querySelector('#add-task');
let body = document.querySelector('body');
let projectArrays = [];
let currentProject;

//Function that creates a input with a custom id and input type
function createInputWithID(idName, inputType, name) {
    let element = document.createElement('input');
    element.setAttribute('id', idName);
    element.setAttribute('type', inputType);
    element.setAttribute('name', name);
    return element;
}

//Function that creates an input with a custom id, input type and placeholder text
function createInputWithPlaceholder(idName, inputType, placeholderText, name) {
    let element = document.createElement('input');
    element.setAttribute('id', idName)
    element.setAttribute('type', inputType);
    element.setAttribute('name', name);
    element.setAttribute('placeholder', placeholderText);
    return element;
}

//Apend multiple elements to the same location
function appendMultiple(appendLocation, ...elements) {
    elements.forEach((element) => {
        appendLocation.appendChild(element);
    });
};

//Make an input element required
function makeInputRequired(...elements) {
    elements.forEach(element => {
        element.setAttribute("required", "");
    });
}

//Create an element with id and append it to a location
function createElementWithID(elementType, idName, appendLocation) {
    let element = document.createElement(elementType);
    element.setAttribute('id', idName);
    appendLocation.appendChild(element);
    return element;
}

//Create a div for input positioning
function createInputDiv(appendLocation) {
    let inputDiv = document.createElement('div');
    inputDiv.classList.add('input-position');
    appendLocation.appendChild(inputDiv);
    return inputDiv;
}

//Create a label
function createLabel(appendLocation, labelName) {
    let label = document.createElement('label');
    label.setAttribute('for', labelName);
    appendLocation.appendChild(label);
    return label;
}

//Create a div with a label and append it
function createInputDivWithLabel(appendLocation, labelName) {
    let inputDiv = createInputDiv(appendLocation);
    createLabel(inputDiv, labelName);
    return inputDiv;
}

function createRadioInputs(appendLocation, inputName, ...options) {
    let radioDiv = createElementWithID("div", 'radio-inputs-div', appendLocation);
    options.forEach((option) => {
        let optionInput = document.createElement('input');
        optionInput.setAttribute('type', 'radio');
        optionInput.setAttribute('id', option);
        optionInput.setAttribute('name', inputName);
        optionInput.setAttribute('value', option.toUpperCase());
        radioDiv.appendChild(optionInput);
        let lable = createLabel(radioDiv, inputName);
        lable.textContent = option.toUpperCase();
        makeInputRequired(optionInput);
    });
}

//Create a project selctor based on current projects
function createProjectSelector(addTaskMenu) {
    let projectSelector = document.createElement('select');
    projectSelector.setAttribute('id', 'project-selector');
    projectSelector.setAttribute('name', 'project');
    createInputDiv(addTaskMenu).appendChild(projectSelector);

    for (let i = 0; i < projectArrays.length; i++) {
        let optionName = projectArrays[i].getProjectname();
        let option = document.createElement('option');
        option.setAttribute('value', optionName);
        option.textContent = optionName;
        projectSelector.appendChild(option);
    }
}

function createAddTaskMenu() {
    //Create the task menu div
    let addTaskMenu = createElementWithID("form", "add-task-menu", body);

    //Create an exit menu button that exits back to the page on click
    let exitMenuButton = createElementWithID('button', 'exit-menu-button', addTaskMenu);
    exitMenu(exitMenuButton);

    //Create form inputs
    let taskNameInput = createInputWithPlaceholder('task-name', 'text', 'Task Name', 'name');
    let taskDescriptionInput = createInputWithPlaceholder('task-description', 'text', 'Description', 'description');
    let taskDueDateInput = createInputWithID('task-due-date', 'date', 'date');

    //Append the form inputs to a div with a label
    (createInputDivWithLabel(addTaskMenu, 'task-name')).appendChild(taskNameInput);
    (createInputDivWithLabel(addTaskMenu, 'task-description')).appendChild(taskDescriptionInput);
    let dateRadioDiv = createElementWithID('div', 'date-radio-div', addTaskMenu);
    (createInputDivWithLabel(dateRadioDiv, 'task-date-input')).appendChild(taskDueDateInput);
    createRadioInputs(dateRadioDiv, 'priority', 'low', 'medium', 'high');
    createProjectSelector(addTaskMenu);

    makeInputRequired(taskNameInput, taskDueDateInput);
    let submitFormButton = createElementWithID("button", "submit-form-button", addTaskMenu);
    submitFormButton.setAttribute('type', 'submit');
    submitTaskForm(addTaskMenu);
}

function submitTaskForm(form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let data = Object.fromEntries(new FormData(event.target).entries());
        addToTaskList(data.name, data.description, data.date, data.priority);

        //Returns to main page
        removeAddTaskMenu();
        body.classList.remove('blur');
    })
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

//A task object
let Task = (taskName, taskDescription, taskDueDate, taskPriority) => {
    let getTaskName = () => taskName;
    let getTaskDescription = () => taskDescription;
    let getTaskDueDate = () => taskDueDate;
    let getTaskPriority = () => taskPriority;

    return { getTaskName, getTaskDescription, getTaskDueDate, getTaskPriority };
}

function addToTaskList(name, description, date, priority) {
    let task = Task(name, description, date, priority);
    (currentProject.taskArray).push(task);
}

let createProject = (projectName) => {
    let getProjectname = () => projectName;
    let taskArray = [];
    return { getProjectname, taskArray };
}

function createDefaultProjects() {
    let sidebar = document.querySelector('#sidebar');
    let inbox = document.createElement('button');
    inbox.setAttribute('id', 'tasks-inbox');
    sidebar.appendChild(inbox);
    let inboxProject = createProject("inbox");
    projectArrays.push(inboxProject);
    currentProject = projectArrays[0];
}


//On page load
createDefaultProjects() 

// console.log((currentProject.taskArray[0]).getTaskName());