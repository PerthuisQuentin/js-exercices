// Have fun :)

get('http://localhost:8080/todos')
    .then(todos => {
        todos.forEach(todo => {
            createTodo(todo)
        })
    })
    .catch(error => {
        console.log('catch', error)
    })
