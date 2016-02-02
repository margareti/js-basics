function solve(arr){
	var start = parseInt(arr[0]),
		end = parseInt(arr[1]),
		num = 'num';

		function isRakiya(num){
			if (num < 1000) {
				return false;
			}
			var strNum = num.toString();
			//console.log(strNum)			
			for (var i = 1; i < strNum.length; i ++) {
				var current = strNum[i],
					prev = strNum[i-1],
					winner = prev + current,
					strCheck = strNum.substring(i + 1);

					//console.log("winner ", winner, "string ", strCheck)
					if (strCheck.indexOf(winner) != -1) {
						return true;
					}					
			}
		}

		console.log("<ul>");
		for (var i = start; i <= end; i ++){
			var liStart = '<li>',
				liEnd = '</li>',
				line;

			if (isRakiya(i)) {
				var link = '<a href="view.php?id=' + i + '">View</a>';
				line = "<span class='rakiya'>" + i + '</span>';
				console.log(liStart + line + link + liEnd);
			} else {
				line = "<span class='" + num + "'>" + i + '</span>';
				console.log(liStart + line + liEnd);
			}
			
		}
		console.log('</ul>')

}

var input1 = [ '5', '8' ],
	input2 = [ '11210', '11215' ],
	input3 = [ '55555', '55560' ];



solve(input3)

