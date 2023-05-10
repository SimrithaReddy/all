let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
class Student{
    constructor(student_name){
        this.student_name = student_name;
		this.marks = [];
    }
    
    enter_score = function(ele){
		this.marks.push(ele)
    }

    get_average_score = function(){
		let sum = 0;
		for(let i=0; i<this.marks.length; i++){
			sum+=this.marks[i]
		}
		let mean = Math.round(sum/this.marks.length)
		return this.student_name+  "average score:" +mean;
    }

    get_test_score = function(){
        if(test_number<=0||test_number>this.marks.length){
			return "NA"
		}else{
            console.log(this.student_name)
			return "this.student_name+ " test" test_number "marks:" + this.marks[test_number]"
		}
    }
}

let student_name = new Student(readLine());
let no_of_tests = parseInt(readLine());


for(let i=0; i<no_of_tests; i++){
    student_name.enter_score(parseInt(readLine()))
}

let queries_no = parseInt(readLine())
for(let i=0; i<queries_no; i++){
    let query = readLine();
    if(query ==="get_marks"){
        let test_number = parseInt(readLine())
		let score = student_name.get_test_score(test_number);
		console.log(score)
    }else{
		let avearge_score = student_name.get_average_score()
		console.log(avearge_score)
	}
}