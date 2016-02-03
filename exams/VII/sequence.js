function solve(arr){
	var length = arr.length - 1,

		width = [],
	    len = parseInt(arr[arr.length-1]),
		i,
		lines = [],
		startIdx = len -= 1;


		arr.forEach(function(el){
			width.push(el.split(' ').length);
		})
		//console.log(width);

	var glueStr = arr.splice(0, arr.length-1).join(' '),
		glue = glueStr.split(' '),
	
		glueLen = glue.length,
		row = glueLen/length;

	for (i = startIdx; i < glueLen; i++ ){
		var isSame = true, 
		prev,
		current = glue[i];
		//console.log("current ", current, i)
		for ( var ii = i - 1; ii >= i - startIdx; ii--){
			prev = glue[ii];
			// console.log(ii)
			// console.log("prev ", glue[ii])
			if ( current !== prev){
				isSame = false;
			} 
		}
		//console.log( isSame )
		if ( isSame ) {
			glue[i] = '';
			for (  var ii = i - 1; ii >= i - startIdx; ii--){
				glue[ii] = '';
			}

		}
	}

	for (var iii = 0; iii < width.length - 1; iii += 1) {
		var line = glue.splice(0, width[iii]).filter(function (el){ if (el) return el}).join(' ');
		//lines.push(line)
		if (line){
			lines.push(line)
		} else {
			line = '(empty)';
			lines.push(line)
		}
	}
	//console.log(glue)

	lines.forEach(function(el){console.log(el )})
}

var input1 = [ '3 3 3 2 5 9 9 9 9 1 2',
  '1 1 1 1 1 2 5 8 1 1 7',
  '7 7 1 2 3 5 7 4 4 1 2',
  '2' ],
  input2 = [ '1 2 3 3', '3 5 7 8', '3 2 2 1', '3' ],
  input3 = [ '2 1 1 1', '1 1 1', '3 7 3 3 1', '2' ],
  input4 = [ '1 2 3 3 2 1', '5 2 2 1 1 0', '3 3 1 3 3', '2' ]


solve(input3)

