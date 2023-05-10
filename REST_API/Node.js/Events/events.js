const events = require("events")

//events.EventEmitter() is a class.  
const event = new events.EventEmitter(); 

//How to register a event
//----------------->One type

event.addListener("sayHello",()=>{
    console.log("Hello I am AddListener");
})

//----------------->Second type
function logData(name,lastName){
    console.log("Hello", name,lastName)
}

function logData(name){
    console.log("Hello", name)
}

function logData3(){
    console.log("I am Third Special Type")
}

// event.on("sayHello",logData)
// event.once("sayHello",logData3)

event.emit("sayHello","Simritha","Reddy")     //We have to register before emitting
// event.emit("sayHello","Simritha","Reddy")

//Remove a particular Listener
// event.off("sayHello",logData) //deregestering an event attach-detach
// event.emit("sayHello","Simritha","Reddy") 