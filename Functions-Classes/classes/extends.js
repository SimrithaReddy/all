class Parent{
    constructor(name,dob){
        this.name=name
        this.dob=dob
    }
    Updatedob(n){
        this.dob=n
    }
}
class Student extends Parent{
    constructor(name,dob,rollnumber=4556){
        super(name,dob)
        this.rollnumber=rollnumber
        this.name="NULL"
    }
}
class Rhea extends Student{
    constructor(name,dob,rollnumber,female="female"){
        super(name,dob,rollnumber)
        this.gender="female"
    }
}
class Professor extends Parent{
    constructor(name,dob,salary){
        super(name,dob)
        this.salary=salary
    }
}
let student1 = new Student("sim", 34, 124556)
let student2 = new Rhea("sim",67 )
console.log(student1)
console.log(student2)
student1.Updatedob(206)
console.log(student1.dob)