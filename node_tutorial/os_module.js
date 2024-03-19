const os=require('os')
// os module is used to find os related info and interact with the os

const user=os.userInfo()
console.log(user)

const uptime=os.uptime()
console.log(`the uptime of the system is ${uptime} seconds`)

const system={
    name:os.type(),
    version:os.version(),
    freemem:os.freemem(),
    totalmem:os.totalmem(),
    architechture:os.arch(),
    cpu:os.cpus(),
    host:os.hostname(),
    networkinterface:os.networkInterfaces(),
    platform:os.platform()
}
console.log(system)

