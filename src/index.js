import { format } from 'date-fns';

let addTaskButton = document.querySelector('#add-task');
let body = document.querySelector('body');
let projectArrays = [];
let currentProject;
let addProjectButton = document.querySelector('#add-project-button');
let mainDiv = document.querySelector('div#main');
let projects;

let projectArraysStorage = JSON.parse(window.localStorage.getItem('projectArraysStorage')) || [];
window.localStorage.setItem('projectArraysStorage', JSON.stringify(projectArraysStorage));
projectArraysStorage = JSON.parse(window.localStorage.getItem('projectArraysStorage'));

let taskArraysStorage = JSON.parse(window.localStorage.getItem('taskArraysStorage')) || [];
window.localStorage.setItem('taskArraysStorage', JSON.stringify(taskArraysStorage));
taskArraysStorage = JSON.parse(window.localStorage.getItem('taskArraysStorage'));

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

function createElementWithClassText(elementType, className, appendLocation, text) {
    let element = document.createElement(elementType);
    element.classList.add(className);
    element.textContent = text;
    appendLocation.appendChild(element);
    return element;
}

function createElementWithClass(elementType, className, appendLocation) {
    let element = document.createElement(elementType);
    element.classList.add(className);
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
        let optionName = projectArrays[i].getProjectName;
        let option = document.createElement('option');
        option.setAttribute('value', optionName);
        option.textContent = optionName;
        projectSelector.appendChild(option);
    };
}

function createAddTaskMenu() {
    //Create the task menu div
    let addTaskMenu = createElementWithID("form", "add-task-menu", body);

    //Create an exit menu button that exits back to the page on click
    let exitTaskMenuButton = createElementWithID('button', 'exit-menu-button', addTaskMenu);
    exitTaskMenu(exitTaskMenuButton);

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

    //Make a submit form button and call function when form submitted
    let submitFormButton = createElementWithID("button", "submit-form-button", addTaskMenu);
    submitFormButton.setAttribute('type', 'submit');
    submitTaskForm(addTaskMenu);
}

//Takes form inputs and turns into a Task List
function submitTaskForm(form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        //Creates a Task object using form inputs
        let data = Object.fromEntries(new FormData(event.target).entries());
        let task = addToTaskList(data.name, data.description, data.date, data.priority, data.project);

        taskArraysStorage.push(task);
        window.localStorage.setItem('taskArraysStorage', JSON.stringify(taskArraysStorage));
        removeProjectTasks();
        createProjectTasks();

        //Returns to main page
        removeAddTaskMenu();
        body.classList.remove('blur');
    })
}

function removeAddTaskMenu() {
    let addTaskMenu = document.querySelector('#add-task-menu');
    addTaskMenu.remove();
}

function removeAddProjectMenu() {
    let addProjectMenu = document.querySelector('#add-project-menu');
    addProjectMenu.remove();
}

function removeTaskDetailsMenu() {
    let detailsDiv = document.querySelector('.details-div');
    detailsDiv.remove();
}

function exitTaskMenu(exitTaskMenuButton) {
    exitTaskMenuButton.addEventListener('click', () => {
        removeAddTaskMenu();
        body.classList.remove('blur');
    });
}

function exitProjectMenu(exitProjectMenuButton) {
    exitProjectMenuButton.addEventListener('click', () => {
        removeAddProjectMenu();
        body.classList.remove('blur');
    });
}

function exitDetailsMenu(exitDetailsDivButton) {
    exitDetailsDivButton.addEventListener('click', () => {
        removeTaskDetailsMenu();
        body.classList.remove('blur');
        });
    };

addTaskButton.addEventListener('click', () => {
    createAddTaskMenu();
    body.classList.add('blur');
});

//A task object
let Task = (taskName, taskDescription, taskDueDate, taskPriority, taskProject) => {
    let getTaskName = () => taskName;
    let getTaskDescription = () => taskDescription;
    let getTaskDueDate = () => taskDueDate;
    let getTaskPriority = () => taskPriority;
    let getTaskProject = () => taskProject;

    return { getTaskName, getTaskDescription, getTaskDueDate, getTaskPriority, getTaskProject, taskName, taskDescription, taskDueDate, taskPriority, taskProject};
}


//Add task to selected project list
function addToTaskList(name, description, date, priority, project) {
    let task = Task(name, description, date, priority, project);
    let projectIndex = projectArrays.findIndex(object => object.getProjectName === project);
    (projectArrays[projectIndex].taskArray).push(task);

    if (projectIndex !== 0) {
        (projectArrays[0].taskArray).push(task);
        return task;
    }
    return task;
}

let createProject = (projectName) => {
    let getProjectName =  projectName;
    let taskArray = [];
    return { getProjectName, taskArray };
}

function createInboxProject() {
    let inboxProject = createProject("inbox");
    projectArrays.push(inboxProject);
    currentProject = projectArrays[0];
    changeCurrentProject()
}

addProjectButton.addEventListener('click', () => {
    createAddProjectMenu();
    body.classList.add('blur');
})

function createAddProjectMenu() {
    let addProjectMenu = document.createElement('form');
    addProjectMenu.setAttribute('id', 'add-project-menu');
    body.appendChild(addProjectMenu);

    let exitMenuButton = createElementWithID('button', 'exit-menu-button', addProjectMenu);
    exitProjectMenu(exitMenuButton);

    let projectNameInput = createInputWithPlaceholder('project-name', 'text', 'PROJECT NAME', 'name');
    projectNameInput.setAttribute('required', '');
    addProjectMenu.appendChild(projectNameInput);

    let submitFormButton = createElementWithID("button", "submit-form-button", addProjectMenu);
    submitFormButton.setAttribute('type', 'submit');
    submitProjectForm(addProjectMenu);
}

function addToProjectList(name) {
    let project = createProject(name);
    projectArrays.push(project);

    //Save Project To Storage
    projectArraysStorage.push(project);
    window.localStorage.setItem('projectArraysStorage', JSON.stringify(projectArraysStorage));
}

function submitProjectForm(form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let data = Object.fromEntries(new FormData(event.target).entries());
        addToProjectList((data.name).toLowerCase());
        createProjectDiv((data.name).toUpperCase());
        changeCurrentProject();

        //Returns to main page
        removeAddProjectMenu();
        body.classList.remove('blur');
    })
}

function changeCurrentProject() {
    projects = document.querySelectorAll('.project');
    projects.forEach((project) => {
        project.addEventListener('click', () => {
            let projectIndex = projectArrays.findIndex(object => object.getProjectName === (project.textContent).toLowerCase());
            currentProject = projectArrays[projectIndex];
            removeProjectTasks();
            createProjectTasks();
        })
    })
}

function createProjectDiv(name) {
    let projectsDiv = document.querySelector('.projects');
    let projectDiv = createElementWithClassText('button', 'project', projectsDiv, name);
}

function removeProjectTasks() {
    let currentTaskDiv = document.querySelector('.tasks-div');
    let checkDiv = (currentTaskDiv !== null) ? currentTaskDiv.remove() : "";
}

function createProjectTasks() {
    let tasksDiv = createElementWithClass('div', 'tasks-div', mainDiv);
    for (let i = 0; i < (currentProject.taskArray).length; i++) {
        createTask(tasksDiv, i);
    }
}

function createTask(appendLocation, indexNum) {
    let taskDiv = createElementWithClass('div', 'task-div', appendLocation);

    let completeTaskCheckbox = document.createElement('input');
    completeTaskCheckbox.classList.add('complete-task-checkbox');
    completeTaskCheckbox.setAttribute('type', 'checkbox');
    taskDiv.appendChild(completeTaskCheckbox);
    completeTask(completeTaskCheckbox, taskDiv, indexNum);

    let taskName = createElementWithClassText('div', 'task-name', taskDiv, (currentProject.taskArray[indexNum].getTaskName()));
    let dueDate = format(new Date(currentProject.taskArray[indexNum].getTaskDueDate()), 'dd MMM');
    let taskDueDate = createElementWithClassText('div', 'task-due-date', taskDiv, dueDate);
    let taskPriority = createElementWithClassText('div', 'task-priority', taskDiv, (currentProject.taskArray[indexNum].getTaskPriority()));
    taskPriority.textContent = currentProject.taskArray[indexNum].getTaskPriority();
    let expandTask = createElementWithClassText('button', 'expand-task-button', taskDiv, 'DETAILS');
    expandTaskDetails(indexNum);
}

function completeTask(checkbox, taskDiv, indexNum) {
    checkbox.addEventListener('change', () => {
        taskArraysStorage = JSON.parse(window.localStorage.getItem('taskArraysStorage'))
        let storageIndex = taskArraysStorage.findIndex(object => object.taskName === (currentProject.taskArray[indexNum]).getTaskName());
        (taskArraysStorage).splice(storageIndex, 1);
        window.localStorage.setItem('taskArraysStorage', JSON.stringify(taskArraysStorage));
        taskArraysStorage = JSON.parse(window.localStorage.getItem('taskArraysStorage'));
        
        taskDiv.remove();
        (currentProject.taskArray).splice(indexNum, 1);
    });
}

function expandTaskDetails(indexNum) {
    let detailButtons = document.querySelectorAll('.expand-task-button');
    detailButtons.forEach((button) => {
        button.addEventListener('click', () => {
            createDetails(indexNum);
        });
    });
}

function createDetails(indexNum) {
    let detailsDiv = createElementWithClass('div', 'details-div', body);
    body.classList.add('blur');
    let exitDetailsDivButton = createElementWithID('button', 'exit-details-button', detailsDiv);
    exitDetailsMenu(exitDetailsDivButton);

    let taskName = createElementWithClassText('div', 'task-name', detailsDiv, (currentProject.taskArray[indexNum].getTaskName()));
    let dueDate = format(new Date(currentProject.taskArray[indexNum].getTaskDueDate()), 'dd MMM');
    let taskDueDate = createElementWithClassText('div', 'task-due-date', detailsDiv, dueDate);
    let taskPriority = createElementWithClassText('div', 'task-priority', detailsDiv, (currentProject.taskArray[indexNum].getTaskPriority()));
    taskPriority.textContent = currentProject.taskArray[indexNum].getTaskPriority();
    let taskDescription = createElementWithClassText('div', 'task-description', detailsDiv, (currentProject.taskArray[indexNum].getTaskDescription()));
}

function createProjectsFromStorage() {
    projectArraysStorage = JSON.parse(window.localStorage.getItem('projectArraysStorage'));
    projectArraysStorage.forEach((project) => {
        projectArrays.push(createProject(project.getProjectName));
        createProjectDiv((project.getProjectName).toUpperCase());
        changeCurrentProject();
    })
}

function createTasksFromStorage() {
    taskArraysStorage = JSON.parse(window.localStorage.getItem('taskArraysStorage'));
    taskArraysStorage.forEach((task) => {
        addToTaskList(task.taskName, task.taskDescription, task.taskDueDate, task.taskPriority, task.taskProject);

        removeProjectTasks();
        createProjectTasks();
    })
}

//On page load
createInboxProject();
createProjectsFromStorage();
createTasksFromStorage();
