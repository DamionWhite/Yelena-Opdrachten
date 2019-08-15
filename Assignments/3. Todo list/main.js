// Target html elements
var newTodo = document.getElementById('newTodo');
var todoItems = document.getElementById('todoItems');

var todos = [];

function handleAddTodo() {
    // VVVVVVV WRITE CODE BELOW VVVVVVV

    // Add value in text input to todos
    

    // Clear text typed in text input
    

    // Refresh items on screen
    
    
    // ^^^^^^^ WRITE CODE ABOVE ^^^^^^^
}

function showTodos() {
    // Empty todo items on screen
    todoItems.innerHTML = null;

    // Make a todo item on screen for each item in todos
    for(todo in todos) {
        console.log();
        todoItems.innerHTML += '<li class="todoItem">' + todos[todo] + '</li>';
    }
}

function fixMe() {
    console.log('You should fix me');
}