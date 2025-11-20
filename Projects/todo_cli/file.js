import readline from "readline"
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const todos = [];
const showMenu = () => {
    console.log(` 
        1. Add a Task
        2. View Tasks
        3. Exit  `);
        rl.question("Choose an option:", handleInput)   
}
const handleInput = (input) => {
    switch (input) {
        case "1":
                rl.question("Enter the task:", (task) =>{
                        todos.push(task)
                        console.log("Task added:", task)
                        showMenu()
                } );
                break
        case "2":
                (() => {
                    console.log("Your todo tasks are:")
                    todos.forEach((task) => {
                        console.log("You task:", task)
                    })
                })();
                showMenu()
                break
        case "3":
                (()=> {
                    console.log("Good Bye!!") ;
                    rl.close()
                })();
                break
        default:
            console.log("Kindly choose correct option.");
            showMenu()
    }
}
showMenu()