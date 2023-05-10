const score=200

//PROMISE STATE
//--> PENDING
//--> FULFILLED
//--> REJECTED

const result=new Promise(function(resolve, reject){//RESOLVE AND REJECT ARE METHODS
  if(score>80){
    const response={
      message:"PASSED WITH DISTINCTION"
    }
    
    resolve(response)
    }
  else if(score <80 && score > 33){
     const response={
      message:"PASSED "
    }
    
    resolve(response)
  }
    else {
      const response={
      message:"FAIL"
    };
      reject(response);
  }
});





// HANDLER

result.then(a=>{
  console.log(a.message + " and got lot of gifts");
}).catch(fail=>{
  console.log(fail.message+ " and better luck next time")
})
  

// Whenever there is a resolve it goes to then
// Whenever there is a reject it goes to catch
