import readline from "readline"
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const todos = [ ]
function showMenu()
{
    console.log("1. Add your task.")
    console.log("2. Show your tasks.")
    console.log("3. Exit...")
    rl.question("Choose your option:", handleInput)
}
function handleInput(input)
{
    switch (input) {
        case "1":
            rl.question("Enter your task: \n", 
                (task) => {
                todos.push(task);
                console.log("Added your task:", task)
                showMenu()
            })
            break;
        case "2":
            if(todos.length===0)
            {
                console.log("You have no tasks \n")
            }else {
            console.log(`You have ${todos.length} tasks: \n`)
            todos.forEach((task, index) => {
                console.log(`${index+1}: ${task}`)
            })}
            showMenu()
            break;
        case "3":
            console.log("Good Bye!!")
            rl.close()
            break;
        default:
            console.log("Choose correct options")
            showMenu()
            break;
    }
}
showMenu();