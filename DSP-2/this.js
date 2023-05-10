this.a = 90
let getThis = () => {
    console.log(this.a);
}
getThis();



let obj = {
    firstName: "Simritha",
    getName() {
        let newName = "Simritha Reddy"
        console.log(this.firstName)
        function getFullName() {
            console.log(newName + " and " + this.firstName)
        }
        getFullName()
    }
}

obj.getName();

// class Sim {
//     constructor(u, k) {
//         this.u = u
//         this.k = k
//     }

//     getName = () => {
//         console.log(this)
//     }
// }

// let t = new Sim("Sim", "Reddy");
// t.getName()

// let l = new Sim("Simritha", "Reddy")
// l.getName()