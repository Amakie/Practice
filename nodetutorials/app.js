const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user)

//uptime of system in seconds
console.log(`system uptime of user is ${os.uptime} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(currentOS)
