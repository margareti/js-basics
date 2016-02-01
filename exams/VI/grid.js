function solve(arr){
	var number = parseInt(arr[1]),
		stringToChange = arr[0].split(""),
		matrix = [],
		i,
		idx,
		positions;

	for (var i = 2; i < arr.length; i++){
		var row =  arr[i].split(" ");
		row = row.map(function(el){return parseInt(el)});
		matrix.push(row);
	}
	//console.log(matrix)

	function calculate(pos){
		var sum; 
		for (i = 0; i < matrix.length; i ++ ) {
			for (idx = 0; idx < matrix[0].length; idx ++ ) {

				if (pos[0] !== i || pos[1] !== idx) {
					sum = matrix[pos[0]][pos[1]] + matrix[i][idx];
					//console.log("comparing to ", matrix[i][idx]);
					//console.log("sum is ", sum)
				}
				// if (sum === number) {
				// 	return [pos[0], pos[1], i, idx];
				// }
			}
		}

	}
	function getPos(){
		for (i = 0; i < matrix.length; i ++) {
			for (idx = 0; idx < matrix[0].length; idx ++ ) {
				var current = matrix[i][idx], 
					sum,
					result;
				for (var ii = 0; ii < matrix.length; ii ++) {
					for (var iii = 0; iii < matrix[0].length; iii ++) {
						var compare = matrix[ii][iii];
						if (i !== ii || idx !== iii) {
							sum = current + compare;
							if (sum == number) {
								//console.log(current, compare)
								result = [i, idx, ii, iii];
								return result;
							}
						}	
					}
				}
			}
		}
	}
	
	positions = getPos();

	var reduced = positions.reduce(function(a, b){ return a + b; })
	for (var ltr in stringToChange) {
		var letter = stringToChange[ltr];
		asciiNum = ltr % 2 == 0 ? letter.charCodeAt() + reduced : letter.charCodeAt() - reduced; 
		//console.log(asciiNum)
		convert = String.fromCharCode(asciiNum);

		stringToChange[ltr] = convert;

	}
	console.log(stringToChange.join(''));
}

var input1 = [ 'QqdvSpg', '400', '100 200 120', '120 300 310', '150 290 370' ],
	i1 = ['>scsimh$deo$]$^mnxdh]}',
'400',
'200 100 120',
'120 102 300',
'150 290 370'];

solve(i1)