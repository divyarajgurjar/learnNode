import fs from "fs/promises"
import readline from "readline"
import path from "path"
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function fileCreation(address) {
    rl.question("what you want to write inside file?", async (data) => {
      await fs.writeFile(address,data, "utf-8")
    })
}

function showMenu() {
    console.log("Welcome to file manager app:")
    console.log("1. Create new file")
    console.log("2. Remove file")
    console.log("3. Update File")
    console.log("4. Exit")
    rl.question("Choose above option:", handleInput)
}
function handleInput(input) {
    switch (input) {
        case "1":
            rl.question("Add file in same folder or different directory. For same directory type \\'same' and \\'different' for differet directory", 
            (option) => {
                    if(option=== 'same')
                    {
                        rl.question("Give name to file - ", (name) => {
                            const address = path.join(__dirname,`${name}.txt` )
                            fileCreation(address);
                            console.log(`I have added ${name}.txt file to ${address}`)
                        })
                    } else if (option==="different")
                    {
                        rl.question("Give name to file - ", (name) => {
                            rl.question("Where you want to add that file ?", (address) => {
                                const fullAddress = `${address}/${name}`
                                fileCreation(fullAddress);
                                console.log(`I have added ${name}.txt to ${fullAddress}`)
                            })
                        })
                    }else {
                console.log("Enter correct file address.")
            }
            })
            showMenu()
            break;
    
        default:
            console.log("Choose correct option.")
            showMenu()
            break;
    }
}
showMenu()