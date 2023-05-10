class Student{
    constructor(firstname,lastname,email,score){
      this._firstname = firstname;
      this._lastname = lastname;
      this._email = email;
      this._score = score;
    }
    
    set fName(fname){
      this._firstname = fname;
    }
    
    get fName(){
      return this._firstname;
    }
    
    
  }
  
  
  let sam = new Student("Sam","Cruise","abc@gmail.com","200");
  console.log(sam.fName)
  
  
  sam._lastname ="gfgh"
  console.log(sam._lastname)
  
  
  sam.fName = "Samuel"
  console.log(sam.fName )
  
  console.log(JSON.stringify(sam))
  
  
  
  
  var obj ={
    value:0,
    get prop(){
    return this.value;
},
  set prop(newValue){
    this.value = newValue;
  }
  }
  
  console.log(obj.prop)
  obj.prop = 90;
  console.log(obj.prop)
  
  
  let a = 10;
  console.log(a);
  
  console.log("hello World")
  
  
  class Person{
    
    
     static CURRENCY = "INR" //PUBLIC PROPERTY
    //static #Margin = "2"
    
    constructor(firstname,lastname){
      this._firstname = firstname;
      this._lastname = lastname;
    }
    
    get fName(){
      return this._firstname+" "+this._lastname
    }
    
    set fName(values){
      var names = values.split(" ");
      this._firstname = names[0];
      this._lastname =  names[1];
    }
  }
  

var person = new Person("Mark", "Michigen");
console.log(person.fName)
person.fName="Tom Cruise";
console.log(person.fName)
console.log(Person.CURRENCY)





//   Static class methods are defined on the class itself.
// You cannot call a static method on an object, only on an object class.