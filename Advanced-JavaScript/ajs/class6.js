class Parent{
    message(){
      console.log("Hello from Parent Class")
    }
  }
  
  class Child extends Parent{
    message(){
      
      super();// CALLS CONSTRUCTOR PARENT 
      
      super.message(); //CALLS FUNCTION OF PARENT CLASS
      console.log("Hello from Child Class")
    }
  }
  
  let p = new Parent;
  let c = new Child;
  p.message();
  c.message();
  
  //no need to create an instance of class to use super keyword-->This is called 
  //method overriding (or) overriding built-in functions using super keyword.
  //overloading is also there like regular function parameters 
  //but not recommened in javascript.
  //constructor is default and implict in Class
  //no need to declare sometimes if not necessary