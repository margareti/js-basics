function solve(arr){
	var figures = {
		"I" : [[-3, 0], [-1, 0], [-2, 0] ],
		"L" : [[-2, 0], [0, 1], [-1, 0] ],
		"J" : [[-1, 0], [-2, 0], [0, -1]],
		"O" : [[0, 1], [-1, 0], [-1, 1]],
		"Z" : [[-1, -1], [-1, 0], [0, 1]],
		"S" : [[0, 1], [-1, 1], [-1, 2]],
		"T" : [[-1, -1], [-1, 0], [-1, 1]]
	},
	result = {
		"I" : 0,
		"L" : 0,
		"J" : 0,
		"O" : 0,
		"Z" : 0,
		"S" : 0,
		"T" : 0
	}
	positions = [],
	matrix = [];

	arr.forEach(function(el){
		matrix.push(el.split(""));
	})

	function checkPos(fig, pos){
		for (figure in fig) {
			//console.log("checking for ", figure, "pos ", pos);
			var isFig = true;
			for (var item in fig[figure]) {
				//console.log(fig[figure][item][0]);
				
				var row = fig[figure][item][0] + pos[0],
					col = fig[figure][item][1] + pos[1];
					//console.log(row, col)
				if ( row < 0 || col < 0 || matrix[row][col] !== "o") {
					isFig = false;

				}
				else  {
					//console.log( "cell contains ", matrix[row][col] );
				}	
			}
			if (isFig) {
				result[figure] += 1;
			}
		}
		
	}

	for (var i = matrix.length - 1; i >= 1; i -- ){
		//console.log(martix[i]);
		for (var letter = 0; letter < matrix[i].length; letter ++){
			if (matrix[i][letter] === "o") {
				checkPos(figures, [i, letter]);
			}
		}
	
	}
	console.log(JSON.stringify(result));


}	
var input1 = [ '--o--o-', '--oo-oo', 'ooo-oo-', '-ooooo-', '---oo--' ],
	input2 = [ '-oo', 'ooo', 'ooo' ];

solve(input2)

