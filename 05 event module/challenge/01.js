const eventEmitter = require('events')
const emitter = new eventEmitter()
const counterObject = 
{
    loginCount: 0,
    logoutCount: 0,
    updateCount: 0,
    userPurchaseCount: 0
}
emitter.on("login", (username) => {
    console.log(username);
    counterObject.loginCount++;
})

emitter.on("logout", (username) => {
    console.log(username)
    counterObject.logoutCount++
})

emitter.on("update", ()=> {
    console.log(first)
}
)

// TO execute this
emitter.emit("login", "Guddu")