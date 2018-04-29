const Todo = require('./todo')

Todo.methods(['get', 'post', 'put', 'delete'])
// Aplica validações nos campos recebidos e enviados
Todo.updateOptions({new: true, runValidators: true})

module.exports = Todo