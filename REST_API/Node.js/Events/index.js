const EventEmit = require("events")

const event = new EventEmit();

event.on('Hello',()=>{
    console.log("Hello World")
})

event.on('Hello',()=>{
    console.log("Hello World")
})

event.once('Hello',()=>{
    console.log("Hello World")
})

event.emit("Hello")
event.emit("Hello")