function createTodo(todo) {
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
