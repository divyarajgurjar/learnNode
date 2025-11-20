const http = require('http')
const server = http.createServer((req,res) => 
{
    if (req.url==="/"){
        res.setHeader("Content-Type","text/html")
        res.write("<h1>I am home page</h1>");
        res.end()}
    if (req.url==="/about")
    {   
        res.setHeader("Content-Type", "text/plain")
        res.write("I am an engineer")
        res.end()
    }
});




const PORT = 3000;
server.listen(PORT, 
    () => {
    console.log( `Listening to the port: ${PORT}`)
})


//You will have to restart server again and again to see changes
//but that's frustrating - we have solution to it.
//M1 npm nodemon
//M2 node --watch filename.js