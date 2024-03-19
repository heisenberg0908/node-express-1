// events modules are a fundamental part of node , they help in facilitataing 
// asynchronous programming and helps in communication between different parts of 
// our system.
//events module provides u with a eventemitter class that allows u to work with events
// in a structured way.

// there are basically 2 methods in eventemitter class which are on and emit

const eventemitter=require('events')
const customevent=new eventemitter()

customevent.on('response',(name,id)=>{
    console.log(`hii ${name}, and ur id is ${id}`)
})

customevent.on('response',()=>{
    console.log('logic goes here')
})

customevent.emit('response','ayush',23)