const TODOS_API = 'http://localhost:8080/todos'

function addTodoToView(todo) {
    let todoElement = document.createElement('div')
    todoElement.id = `todo-${todo.id}`

    let checkboxElement = document.createElement('input')
    checkboxElement.setAttribute('type', 'checkbox')
    checkboxElement.checked = todo.checked
    
    let textElement = document.createElement('span')
    textElement.innerHTML = todo.label
    
    todoElement.appendChild(checkboxElement)
    todoElement.appendChild(textElement)
    
    document.getElementById('todos').appendChild(todoElement)
}

function retrieveTodos() {
    get(TODOS_API)
        .then(todos => {
            todos.forEach(todo => {
                addTodoToView(todo)
            })
        })
        .catch(error => {
            console.log(error)
        })
}

function getTodoFormData(inputId) {
    const labelInput = document.querySelector(inputId)

    const label = labelInput.value

    if (!label) {
        alert('Missing label')
        return
    }

    return {
        label
    }
}

function createTodo(todo) {
    post(TODOS_API, todo)
        .then(createdTodo => {
            addTodoToView(createdTodo)
        })
}

function initTodoForm(formId, inputId) {
    const form = document.querySelector(formId)

    form.onsubmit = (event) => {
        event.preventDefault()

        const formData = getTodoFormData(inputId)

        createTodo(formData)
    }
}
