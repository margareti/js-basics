function solve(arr){
	var tests = {};

	var Student = function(name){
		this.name = name;
		this.result = [];
		this.makeUpExams = 0;
	}

	for (var i in arr){
		var divide = arr[i].split("-"),
			name = divide[0].trim(),
			course = divide[1].split(":")[0].trim(),
			grade = parseInt(divide[1].split(":")[1].trim());

		if ( !tests[course] ) {
			tests[course] = {};
		}
		if ( !tests[course][name] ) {
			var student = new Student(name);
			tests[course][name] = student; 
		}
		grade >= 0 && grade <= 400 ? tests[course][name].result.push(grade) : console.log() ;
		
	}
	function sortKeys(obj){
		var tempArr = [],
			tempObj = {};

		for (var key in obj){
			tempArr.push([key, obj[key]]);
		}
		// tempArr = tempArr.sort();

		for (var item in tempArr) {
			tempObj[tempArr[item][0]] = [];
		}
		return tempObj;
	}
	function sortByGrade(arr){
		//console.log(arr)
		function compare(a, b){
			if (a.result > b.result) {
				return -1;
			} else if (a.result < b.result){
				return 1;
			} else {
				if (a.makeUpExams > b.result ) {
					return 1;
				} else if (a.makeUpExams < b.makeUpExams) {
					return -1;
				} else {
					return a.name.localeCompare(b.name)
				}
			}
		}
		return arr.sort(compare);
	}
	var result = sortKeys(tests);
	for (var k in tests) {
		for (var name in tests[k]) {

			tests[k][name].makeUpExams = tests[k][name].result.length - 1;
			var max = Math.max.apply(null, tests[k][name].result );
			tests[k][name].result = max;
			result[k].push(tests[k][name])
		}
		//console.log(tests[k])


	}

	for (var item in result) {
		result[item] = sortByGrade(result[item]);
	}

	console.log(JSON.stringify(result))
}

var input1 = [ 'Peter Jackson - Java : 350',
  'Jane - JavaScript : 200',
  'Jane     -    JavaScript :     400',
  'Simon Cowell - PHP : 100',
  'Simon Cowell-PHP: 500',
  'Simon Cowell - PHP : 200' ],
  	input2 = [ 'Simon Cowell - PHP : 100',
  'Simon Cowell-PHP: 500',
  'Peter Jackson - PHP: 350',
  'Simon Cowell - PHP : 400' ],
  i4 = [
'  Mila Kunis - C# : 200',
'Mila Kunis - Java : 100',
 '                         Mila Kunis                          -PHP : 350',
                   'Mila Kunis-HTML & CSS:400',
'Jessica Clement - C# : 200',
'Jessica Clement - Java : 100',
'Jessica Clement - Java : 100',
'Jessica Clement-PHP:300']



solve(i4)