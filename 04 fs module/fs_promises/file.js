 const { error } = require('console')
const fs = require('fs')
const path = require('path')
 //To read directory
fs.promises.readdir(__dirname).then((data) => console.log(data)).catch((error) => console.log(error))

//To make file and and add data
fs.promises
.writeFile(path.join(__dirname,"raj.txt"),"FILE CREATED")
.then(() => console.log("I have add"))
.catch((err) => console.log(err))

//To read file data
fs.promises.readFile(path.join(__dirname,"raj.txt"),"utf-8")
.then((data)=> console.log(data))
.catch((err) => console.log(err))