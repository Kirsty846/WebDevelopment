window.setTimeout(function() {

},500);

var todos = ["test1", "test2", "test3", "test4", "test5"];

var input = prompt("what would you like to do?")

while( input !== "quit")
{
    if(input === "list")
    {
        listTodos(); 
    }
    else if(input === "new")
    {
        addTodos();
    }
    else if(input === "delete")
    {
        deleteTodos();
    }
    input = prompt("what would you like to do?")
}

function listTodos()
{
    console.log("****");
    todos.forEach(function(eachItem, eachIndex,todos)
    {
        console.log(eachIndex + ": " + eachItem);
    });
    console.log("****");
}
function addTodos()
{
    var newTodo = prompt("Enter new todo");
        todos.push(newTodo);
        console.log("Added New")
}

function deleteLongTodos()
{
    var indexToDelete = prompt("what index would you like to delete?")
    if(indexToDelete === 0)
    {
        todos.shift();
    }
    else if(indexToDelete === todos.length-1)
    {
        todos.pop();
    }
    else
    {
        //delete todos[indexToDelete];
        todos.splice(indexToDelete,1);
    }
    console.log("Deleted")
}

function deleteTodos()
{
    var indexToDelete = prompt("what index would you like to delete?")
    todos.splice(indexToDelete,1);
    console.log("Deleted")
}

console.log("user Quit")

/*
var colors = ["red","orange","yellow","green"];

function printColor(color)
{
    console.log("***");
    console.log(color);
    console.log("***");
}
colors.forEach(printColor);

*/