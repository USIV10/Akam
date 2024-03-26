// info about current user
const os = require('os')
const user = os.userInfo ()
console.log(user)

//method returns the current uptime
console.log(`The system uptime is ${os.uptime()} seconds`);


const currentOs = {
    name : os.type (),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOs); 