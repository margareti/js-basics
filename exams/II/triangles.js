function solve(arr){
	var output = [];
	var stars = [];


	arr.forEach(function(el){
		output.push(el.split(""))
	})

	for (var i = 1; i < arr.length; i ++){
		for (var letter = 1; letter < arr[i].length-1; letter ++) {
			var currentLetter = arr[i][letter];
			var leftLetter = arr[i][letter - 1];
			var rightLetter = arr[i][letter + 1];
			var topLetter = arr[i-1][letter];
			if ( currentLetter == leftLetter && currentLetter == rightLetter && currentLetter ==topLetter) {
				stars.push([i, letter], [i, letter + 1], [i, letter - 1], [i-1, letter])
			}
		}		
	}
	// console.log(stars);
	for ( var i in stars) {
		var row = stars[i][0];
		var col = stars[i][1];
		// console.log(row, col)
		output[row][col] = "*";
	}
	// output[1][0] = "X"
	output.forEach(function(el){console.log(el.join(""))})
	// console.log(output)

}

var input1 = [ 'abcdexgh',
			   'bbbdxxxh', 
			   'abcxxxxx' ];

var input2 = [ 'aa', 
			   'aaa', 
			   'aaaa', 
			   'aaaaa' ];

var input3 = [ 'ax', 
			   'xxx', 
			   'b', 
			   'bbb', 
			   'bbbb' ];

var input4 = [ 'dffdsgyefg',
  			   'ffffeyeee',
  			   'jbfffays',
  			   'dagfffdsss',
    		   'dfdfa',
   			   'dadaaadddf',
  			   'sdaaaaa',
  			   'daaaaaaasf' ]

solve(input1)