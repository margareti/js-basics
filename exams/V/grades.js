function solve(arr){

	var courses = {};

	arr.forEach(function(element){
		var el = element.split("|");
		el = el.map(function(item){
			return item.trim();
		})
		if ( !courses[el[1]] ){
			courses[el[1]] = {};
		}
		if ( !courses[el[1]].avgGrade ) {
			courses[el[1]].avgGrade = [];
		}
		
		courses[el[1]].avgGrade.push(el[2]);

		if ( !courses[el[1]].avgVisits ) {
			courses[el[1]].avgVisits = [];
		}
		
		courses[el[1]].avgVisits.push(el[3]);
		if ( !courses[el[1]].students ) {
			courses[el[1]].students = [];
		}
		if ( courses[el[1]].students.indexOf(el[0]) === -1 ) {
			courses[el[1]].students.push(el[0]);
		}
		


	})
	function getAvg(array){
		var sum = array.reduce(function(a, b){
			return new Number(a) + new Number(b);
		});
		return Math.round(sum/array.length * 100)/ 100;

	}

	for ( var key in courses ){
		courses[key].avgGrade = getAvg(courses[key].avgGrade)
		courses[key].avgVisits = getAvg(courses[key].avgVisits)
		
	}
	function sortKey(obj){
		var tempKeys = [],
		tempObj = {};

		for (var i in obj){
			tempKeys.push([i, obj[i]]);
		}
		tempKeys = tempKeys.sort(function(a, b){
			if (a[0] < b[0]){
				return -1;
			} else if (a[0] > b[0]){
				return 1
			}
			else {
				return 0;
			}
		});
		
		for (var index in tempKeys){
			tempObj[tempKeys[index][0]] = tempKeys[index][1];
		}
		return tempObj;
	}
	for (var index in courses ){
		courses[index].students = courses[index].students.sort();
		courses[index] = sortKey(courses[index]);
	}

	console.log(JSON.stringify(sortKey(courses)))
}

var input1 = [ 'Peter Nikolov | PHP  | 5.50 | 8',
  'Maria Ivanova | Java | 5.83 | 7',
  'Ivan Petrov   | PHP  | 3.00 | 2',
  'Ivan Petrov   | C#   | 3.00 | 2',
  'Peter Nikolov | C#   | 5.50 | 8',
  'Maria Ivanova | C#   | 5.83 | 7',
  'Ivan Petrov   | C#   | 4.12 | 5',
  'Ivan Petrov   | PHP  | 3.10 | 2',
  'Peter Nikolov | Java | 6.00 | 9' ]

var input5 = [ 'Milen Georgiev|PHP|2.02|2',
'Ivan Petrov|C# Basics|3.20|22',
'Peter Nikolov|C#|5.522|18',
'Maria Kirova|C# Basics|2.20|4',
'Stanislav Peev|C#|4.12|15',
'Ivan Petrov|PHP|5.120|6',
'Ivan Goranov|SQL|5.926|12',
'Todor Kirov|PHP|5.50|0',
'Maria Ivanova|Java|5.83|37',
'Maria Ivanova|C#|1.823|4',
'Stanislav Peev|C#|4.122|15',
'Ivan Petrov|PHP|5.11|6',
'Ivan Petrov|SQL|5.926|12',
'Peter Nikolov|Java|5.9996|9',
'Stefan Nikolov|Java|4.00|9' ]
var input2 = [
'Peter Nikolov | PHP  | 5.50 | 0',
'Maria Ivanova | Java | 5.83 | 37',
'Ivan Petrov   | PHP  | 4.00 | 2',
'Ivan Petrov   | C#   | 3.20 | 22',
'Peter Nikolov | C#   | 5.50 | 18',
'Maria Ivanova | C#   | 5.83 | 4',
'Ivan Petrov   | JS   | 4.12 | 15',
'Ivan Genov    | PHP  | 5.10 | 6',
'Ivan Petrov   | SQL  | 5.96 | 12',
'Peter Nikolov | Java | 6.00 | 9']

solve(input2)

