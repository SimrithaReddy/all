// OOP

// 1) Abstraction(hiding methods or implementation details)
// 2) Encapsulation(hiding  attributes )
// 3) Polymorphism
// 4) Inheritance

let fs = require('fs') 
let data = fs.readFileSync(0 , 'utf-8')
let index = 0 
data = data.split('\n') 

function readLine() {
    index++ 
    return data[index - 1] 
}

class BPRecord {
    #systolic
    constructor( sys ,  dia , hB, hemogloblin  ) {
        this.#systolic = sys 
        this.diastolic = dia 
        this.heartBeat = hB
        this.hemogloblin = hemogloblin
    }
    #bpCheck() {
        console.log("BP value is: ", this.#systolic , "/" , this.diastolic ) ;
        if(this.systolic > 140 || this.diastolic > 90)  console.log("High BP")
        else if(this.systolic < 90 || this.diastolic < 60) console.log("Low BP")
        else console.log("Normal BP")
    }
    heartTest() {
        // this == patient1
        console.log(this.#systolic)
        this.#bpCheck() 
        console.log(this.heartBeat > 100 ? "Serious" : "Safe") 
    }
    sugarTest() {
        this.#bpCheck() 
        console.log( this.hemogloblin > 10 ? "High sugar" : "Normal")
    } 
    
}
let sys = parseInt(readLine())
let dia = parseInt(readLine()) 
let patient1 = new BPRecord(sys , dia , 90, 11 ) 
patient1.heartTest()