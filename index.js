const prompt = require('prompt-sync')()

let name = prompt("Enter your name:");

while (true) {
    if (name.trim()) {
        console.log(`Hello ${name}`)
        break
    } else {
        console.log("Bad name! Please, try again")
        name = prompt("Enter your name:")
    }
}
