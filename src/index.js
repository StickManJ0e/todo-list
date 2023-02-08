console.log("index.js is working");

let addTaskButton = document.querySelector('#add-task');
let body = document.querySelector('body');

//Function that creates a input with a custom id and input type
function createInputWithID(idName, inputType) {
    let element = document.createElement('input');
    element.setAttribute('id', idName);
    element.setAttribute('type', inputType);
    return element;
}

//Function that creates an input with a custom id, input type and placeholder text
function createInputWithPlaceholder(idName, inputType, placeholderText) {
    let element = document.createElement('input');
    element.setAttribute('id', idName)
    element.setAttribute('type', inputType);
    element.setAttribute('placeholder', placeholderText);
    return element;
}

function appendMultiple(appendLocation, ...elements) {
    elements.forEach((element) => {
        appendLocation.appendChild(element);
    });
};

function makeInputRequired(...elements) {
    elements.forEach(element => {
        element.setAttribute("required", "");
    });
}

function createElementWithID(elementType, idName, appendLocation) {
    let element = document.createElement(elementType);
    element.setAttribute('id', idName);
    appendLocation.appendChild(element);
    return element;
}

function createInputDiv(appendLocation) {
    let inputDiv = document.createElement('div');
    inputDiv.classList.add('input-position');
    appendLocation.appendChild(inputDiv);
    return inputDiv;
}

function createLabel(appendLocation, labelName) {
    let label = document.createElement('label');
    label.setAttribute('for', labelName);
    appendLocation.appendChild(label);
    return label;
}

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

function createAddTaskMenu() {
    //Create the task menu div
    let addTaskMenu = createElementWithID("form", "add-task-menu", body);

    //Create an exit menu button that exits back to the page on click
    let exitMenuButton = createElementWithID('button', 'exit-menu-button', addTaskMenu);
    exitMenu(exitMenuButton);
    
    //Create form inputs
    let taskNameInput = createInputWithPlaceholder('task-name', 'text', 'Task Name');
    let taskDescriptionInput = createInputWithPlaceholder('task-description', 'text', 'Description');
    let taskDueDateInput = createInputWithID('task-due-date', 'date');

    //Append the form inputs to a div with a label
    (createInputDivWithLabel(addTaskMenu, 'task-name')).appendChild(taskNameInput);
    (createInputDivWithLabel(addTaskMenu, 'task-description')).appendChild(taskDescriptionInput);
    let dateRadioDiv = createElementWithID('div', 'date-radio-div', addTaskMenu);
    (createInputDivWithLabel(dateRadioDiv, 'task-date-input')).appendChild(taskDueDateInput);
    createRadioInputs(dateRadioDiv, 'priority', 'low', 'medium', 'high');
    
    makeInputRequired(taskNameInput, taskDueDateInput);
    let submitFormButton = createElementWithID("button", "submit-form-button", addTaskMenu);
    submitFormButton.setAttribute('type', 'submit');
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