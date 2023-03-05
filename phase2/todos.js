// const fs = require('fs');
// const todos = fs.readFileSync('./todos.txt', {encoding:'utf8'});
// const list = todos.split('\r\n'); //beause of CRLF
// console.log(list);


const { readFileSync, writeFileSync } = require('fs');
//read file and return array
function getTodos() {
   const value = readFileSync('./todos.txt')
    .toString()
    .split('\n')
    .map(str => str.trim()) //because of CRLF. Incorporated below

    //Separated and moved to displayTodos
    // .map(str => ' - ' + str.trim())
    // .join('\n')


   return value;
}

//get data and dsilay to the user
// function displayTodos() {
//     const todos = getTodos()
//         .map((item, index) => `${(index + 1)}. ${item}`)
//         .join('\n')

//     console.log(todos);
// }

// displayTodos()

//export to cmd.js

function setTodos(todos) {
    const val = todos.join('\n');
    writeFileSync('./todos.txt', val);
}

function addTodo(todo) {
    const currentTodos = getTodos();
    currentTodos.push(todo);
    setTodos(currentTodos);
}

function deleteTodo(id) {
    const currentTodos = getTodos();
    const indexToRemove = id - 1;
    currentTodos.splice(indexToRemove, 1);
    setTodos(currentTodos);
}

function updateTodo(id, updatedTodo) {
    const currentTodos = getTodos();
    const indexToRemove = id - 1;
    currentTodos.splice(indexToRemove, 1, updatedTodo);
    setTodos(currentTodos);

}

module.exports = {
    getTodos,
    setTodos,
    addTodo,
    deleteTodo,
    updateTodo
};