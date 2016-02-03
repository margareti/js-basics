function solve(arr){
	var rotation =  parseInt(arr[0].match(/Rotate\((\d+)\)/)[1]),
		rotate = rotation > 360 ? rotation % 360 : rotation,
		lines = [],
		width = 0,
		height = arr.length - 1,
		matrix = [];

	for (var i = 1; i < arr.length; i ++) {

		lines.push(arr[i].split(''))
		if (arr[i].length > width) {
			width = arr[i].length;
		}
	}

	for (var idx = 0; idx < height; idx ++) {

		matrix.push(new Array(width));
		for (var ii = 0; ii < width; ii++) {
			matrix[idx][ii] = lines[idx][ii];		
		}
	}
	
	var result = [];
	console.log("rotate ", rotate)
	if (rotate == 0) {
		matrix.forEach(function(el){
			console.log(el.join(''))
		})
	}
	else if (rotate == 90) {
		for (var iii = 0; iii < width; iii ++){
			result.push(new Array(height));
			for (iv = 0; iv < height; iv ++) {
				result[iii][iv] = matrix[height-1-iv][iii] ? matrix[height-1-iv][iii] : ' ';
			}
		}
	} else if (rotate == 180) {
		for (var iii = 0; iii < height; iii ++){
			result.push(new Array(width));
			for (iv = 0; iv < width; iv ++) {
				result[iii][iv] = matrix[height-1-iii][width-1-iv] ? matrix[height-1-iii][width-1-iv] : ' ';
			}
		} 
	} else if (rotate == 270) {
		for (var iii = 0; iii < width; iii ++){
			result.push(new Array(height));
			for (iv = 0; iv < height; iv ++) {
				result[iii][iv] = matrix[iv][width-1-iii] ? matrix[iv][width-1-iii] : ' ';
			}
		} 
	} 

	result.forEach(function(el){
		console.log(el.join(''))
	})
	


}

var input1 = [ 'Rotate(90)', 'hello', 'softuni', 'exam' ],
	input00 = [ 'Rotate(720)', 'js', 'exam' ];
	input2 = [ 'Rotate(180)', 'hello', 'softuni', 'exam' ],
	input3 = [ 'Rotate(270)', 'hello', 'softuni', 'exam' ],
	input4 = [ 'Rotate(720)', 'js', 'exam' ],
	input5 = [ 'Rotate(810)', 'js', 'exam' ],
	input6 = [ 'Rotate(0)', 'js', 'exam' ];

solve(input00);


