let Student = {

    name: "Sim",
    age: 78,
    printdetails:function(){
        console.log(this.name,this.age)
    }

}

Student.dob=90

delete Student.age

console.log(Student)
console.log(Student.name)
Student.printdetails()