class CcAccount{
    constructor(n,e,pN,u){
        this.name= n
        this.email=e
        this.phonenumber=pN;
        this.usedAmount = u
    }
    getPendingbill(){
        console.log(this.usedAmount)
    }
    isTranscationAllowed(){
        this.usedAmount+=amount
        if(this.usedAmount + amount >200000){
            console.log("Transcation is successful")
        }else{
            console.log("Transcation limit is exceeded")
        }
    }
}

class GoldAccount extends CcAccount{
    constructor(n,e,pN,u){
        super(n,e,pN)
        this.usedAmount = u
    }
    getPendingbill(){
        console.log(this.usedAmount)
    }
    isTranscationAllowed(amount){
        this.usedAmount+=amount
        console.log(this.usedAmount)
        if((this.usedAmount + amount)<200000){
            console.log("Transcation is successful")
        }else{
            console.log("Transcation limit is exceeded")
        }
    }
}

let golduser1 = new GoldAccount("sim", "sim@gmail.com", 123456, 60000)
let ccaccountuser1 = new CcAccount("sim", "sim1@gmail.com", 67889, 900000)

golduser1.isTranscationAllowed(60000)
golduser1.getPendingbill()
golduser1.isTranscationAllowed(470000)