let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}


class Student{
  constructor(names){
    this.student_name = names;
    this.marks = [];
  }

  enter_score = function(ele){
    this.marks.push(ele);
  }

  get_average_score = function(){
    let sum = 0;
    for(let i=0; i<this.marks.length; i++){
    sum+=this.marks[i]
    }
    let mean = Math.round(sum/this.marks.length)
    return mean;
  }

  get_test_score = function(test_number){
    if(test_number<=0||test_number>this.marks.length){
      return "NA"
    }else{
      return this.marks[test_number-1];
    }
  }
}
let student_name = readLine();
let names = new Student(student_name);
let no_of_tests = parseInt(readLine());


for(let i=0; i<no_of_tests; i++){
  names.enter_score(parseInt(readLine()))
}

let queries_no = parseInt(readLine())
for(let i=0; i<queries_no; i++){
if(readLine()=="get_marks"){
    let test_number = parseInt(readLine())
    let score = names.get_test_score(test_number);
    let output = `${names.student_name} test ${test_number} marks: ${score}`;
    console.log(output);
  }else{
    let avearge_score = names.get_average_score();
    let output = `${names.student_name} average score: ${avearge_score}`;
    console.log(output);
}
}