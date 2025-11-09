const Path = require("path")
//to print directory name
console.log(__dirname)
//to print file name with directory
console.log(__filename)

//Now i want to use add something in some directory
const filePath = Path.join("folder","file","data.txt")
console.log(filePath)
console.log(Path.parse(filePath))
console.log(Path.resolve(filePath))
console.log(Path.extname(filePath))
console.log(Path.basename(filePath))
console.log(Path.dirname(filePath))