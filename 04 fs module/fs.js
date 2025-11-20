const fs = require('fs')
const path = require('path')
const filePath = fs.writeFileSync(path.join(__dirname,"data.txt"),"Creating File", "utf-8")
const fileAddress = "./data.txt"

console.log(fs.readFileSync(fileAddress, "utf-8"))
