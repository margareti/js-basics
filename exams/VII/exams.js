function solve(arr){
	var i, 
		length = arr.length,
		courseName = arr[arr.length-1].trim()
		courseGrades = [];

	function calcGrade(num){

		return num < 80 ? ((num/80*4) + 2).toFixed(2) : 6.00.toFixed(2);

	}
	function getAvg(array) {
		var sum = array.reduce(function (a, b) {
			return a + b;
		});
		return Math.round(sum / array.length *100)/100;
	}
	for (i = 0; i < length - 1; i ++){
		var line = arr[i].replace(/\s+/g," ").trim();
		var student = line.split(' ');
		//console.log(line)
		student.map(function(el){return el.trim()});
		var points, grade, 
		examPoints = parseInt(student[2]), 
		bonus = parseInt(student[3]),
		studentName = student[0].trim(),
		output,
		course = student[1].trim();

		if (course === courseName) {
			courseGrades.push(examPoints);
		} 
		

		points = examPoints < 100 ? false : Math.round(examPoints *.2 * 100)/100 + bonus;

		if (points) {
			
			grade = calcGrade(points);
			console.log(studentName + ': Exam - "' + course + '"; Points - ' + points + '; Grade - ' + grade);
		} else {
			console.log(studentName + ' failed at "' + course + '"');
		}
		
	}
	var avg = getAvg(courseGrades)
	console.log('"' + courseName + '" average points -> ' + avg)

}

// Pesho: Exam - "C#-Advanced"; Points - 23; Grade - 3.15
// Gosho: Exam - "Java-Basics"; Points - 34.4; Grade - 3.72
// Tosho: Exam - "HTML&CSS"; Points - 75.4; Grade - 5.77
// Minka failed at "C#-Advanced"
// Stanka: Exam - "C#-Advanced"; Points - 46.4; Grade - 4.32
// Kircho: Exam - "C#-Advanced"; Points - 60; Grade - 5.00
// Niki: Exam - "C#-Advanced"; Points - 90; Grade - 6.00
// "C#-Advanced" average points -> 202.8


var input1 = [ 'Pesho C#-Advanced 100 3',
  'Gosho Java-Basics 157 3',
  'Tosho HTML&CSS 317 12',
  'Minka C#-Advanced 57 15',
  'Stanka C#-Advanced 157 15',
  'Kircho C#-Advanced 300 0',
  'Niki C#-Advanced 400 10',
  'C#-Advanced' ],
  i6 = ['   EDUU    JS-Basics                317          15 ' ,       
        '   RoYaL        HTML5        121         10  ',      
'ApovBerger      OOP   0    10  '   ,
'Stamat OOP   190 10',
'MINKA OOP   230 10',
'   OOP']


solve(i6)