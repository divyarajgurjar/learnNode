const eventEmitter = require("events");
const emitter = new eventEmitter();
//greet()
// 1. Define an event listener
emitter.on("greet", () => {
    console.log("Shows when greet is called")
});
// Trigger the event(same like calling the function)
emitter.emit("greet")

//What if you want to name arguments to event
emitter.on("newGreet", (username) => {
    console.log(`This is your username: ${username}`)
})

emitter.emit("newGreet", "Raj01") // You can also give object if there are multiple arguments.