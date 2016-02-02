function solve(arr){
	var start = parseInt(arr[0]),
		end = parseInt(arr[1]),
		num = 'num';

		function isRakiya(num){
			return false;
		}

		console.log("<ul>");
		for (var i = start; i <= end; i ++){
			var liStart = '<li>',
				liEnd = '</li>'
			var line = "<span class='" + num + "'>" + i + '</span>';

			if (isRakiya(i)) {
				var link = '<a href="view.php?id=' + i + '">View</a>';
				console.log(liStart + line + link + liEnd);
			} else {
				console.log(liStart + line + liEnd);
			}
			
		}
		console.log('</ul>')

}

var input1 = [ '5', '8' ],
	input2 = [ '11210', '11215' ],
	input3 = [ '55555', '55560' ];



solve(input1)

