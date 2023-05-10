const { resolve } = require("path");

let a = {
    name: "K.Simritha Reddy",
    Batch: "July 16",
    getIntro: function () {
        console.log(`${this.name} ${this.Batch}`)
    }
}

// console.log(a.name)

a.name = "KuppiReddy Simritha Reddy";

// console.log(a.name)

let ans = 75;



async function toReturnAsync() {

    let p1 = new Promise((resolveFun, rejectFun) => {
        setTimeout(() => {
            // console.log("HY I am Set Time out 1");
            // resolveFun(444_1)
            resolveFun("Failed_1")
        }, 1000)
    })

    let p2 = new Promise((resolve, reject) => {
        if (ans == 75) {
            setTimeout(() => {
                // console.log("HY I am Set Time out 2");
                resolve("Passed_2")
            }, 2000)
        }
        else reject("Failed")
    })


    let p3 = new Promise((resolve, reject) => {
        if (ans == 75) {
            setTimeout(() => {
                // console.log("HY I am Set Time out 3");
                resolve("Passed_3")
            }, 3000)
        }
        else reject("Failed")
    })

    let p1res = await p1
    let p2res = await p2
    let p3res = await p3

    return [p1res, p2res, p3res]
}




// let promises = Promise.all([p1, p2, p3])

// promises.then((res) => {
//     console.log(res, "I am Passed Result")
// }).catch((err) => {
//     console.log(err, "I am Failed result")
// })


// let promises1 = Promise.race([p1, p2, p3])

// promises1.then((res) => {
//     console.log(res, "I am Passed Result")
// }).catch((err) => {
//     console.log(err, "I am Failed result")
// })

const cherry = async () => {
    console.log("I am not waiting")
}
const main = async () => {

    let asy = await toReturnAsync()
    let b = await cherry();

    console.log(asy)
    // asy.then((res) => {
    //     console.log(res)
    // }).catch((err) => {
    //     console.log(err);
    // })
    
}

main();