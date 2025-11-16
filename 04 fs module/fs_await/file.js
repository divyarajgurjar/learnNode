//Same as in fs promises
const fs = require('fs/promises')
const path = require('path')

const writeFile = async () => {
    try {
        await fs.writeFile(path.join(__dirname,"new.txt"), "File Creatiion Successfull", 'utf-8')
    } catch (error) {
        console.log(error)
    }
}

writeFile()
23