let firstName = process.argv[2]
let lastName = process.argv[3]

console.log(firstName + " " + lastName);
/**
 
   There 3 ways of taking input from user


 */

//    console.log(process.argv)

//process.env --> environment variable
process.env.NODE_ENV = "klmn"

// console.log(process.env)

if(process.env.NODE_ENV =="klmn"){
  console.log("Yes, I am")
}else{
  console.log("No, I am not there")
}

console.log(process.env.APIKEYS)
// console.log(process.env.APIKEYS.delete)

/**
 * To set any property in terminal
 * $env:APIKEYS = "Testing"
 * you can also delete it by .delete
 * 
 */