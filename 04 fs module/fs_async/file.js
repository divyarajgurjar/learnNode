const fs = require('fs');
const path = require('path')
//fs.writeFile(path,data,options,callback)
const address = path.join(__dirname,"data.txt")
fs.writeFile(address,"Grok has no name",(error) => console.log("This is error",error) );
fs.readFile(address,'utf-8',(error,data)=> {
    if (error) console.error(error)
        else console.log("this is content of the file", data)
});