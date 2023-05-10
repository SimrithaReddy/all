class Fruit{
    constructor(n,c,w){
        this.name=n
        this.color=c
        this.abc=w
        this.eleven=function(){
            return this.name
        }
    }                                          //2types of defining function in class
        print=function(){
            return this.color
        }
}

let apple =new Fruit('Apple', 'Red', 1)

console.log(apple.print())
console.log(apple.eleven())