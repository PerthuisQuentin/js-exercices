const express = require('express')
const morgan = require('morgan')

const app = express()
const port = 8080

let id = 1

const todos = [
    {
        id: id++,
        label: 'Faire les courses',
        checked: false,
    },
    {
        id: id++,
        label: 'Sortir le chien',
        checked: true,
    },
    {
        id: id++,
        label: 'Réviser les appels API',
        checked: false,
    }
]

app.use(morgan('tiny'))

app.use(express.json())

app.get('/todos', (req, res) => {
    res.status(200).send(todos)
})

app.get('/todos/:id', (req, res) => {
    const id = Number(req.params.id)
    const todo = todos.find(item => item.id === id)
    if (todo) {
        res.status(200).send(todo)
    } else {
        res.status(404).send('not found')
    }
})

app.delete('/todos/:id', (req, res) => {
    const id = Number(req.params.id)
    const todoIndex = todos.findIndex(item => item.id === id)
    if (todoIndex !== -1) {
        todos.splice(todoIndex, 1)
        res.status(200).send()
    } else {
        res.status(404).send('not found')
    }
})

app.put('/todos/:id', (req, res) => {
    if (req.body.label !== undefined && typeof req.body.label !== 'string') return res.status(400).send('label must be a string')
    if (req.body.checked !== undefined && typeof req.body.checked !== 'boolean') return res.status(400).send('checked must be a boolean')

    const id = Number(req.params.id)
    const todo = todos.find(item => item.id === id)

    if (req.body.label !== undefined) todo.label = req.body.label
    if (req.body.checked !== undefined) todo.checked = req.body.checked

    res.status(200).send(todo)
})


app.post('/todos', (req, res) => {
    if (!req.body.label) return res.status(400).send('missing property label')
    if (typeof req.body.label !== 'string') return res.status(400).send('label must be a string')
    if (req.body.checked !== undefined && typeof req.body.checked !== 'boolean') return res.status(400).send('checked must be a boolean')

    const newTodo = {
        id: id++,
        label: req.body.label,
        checked: req.body.checked || false
    }

    todos.push(newTodo)

    res.status(201).send(newTodo)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})