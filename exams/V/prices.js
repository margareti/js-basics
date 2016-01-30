function solve(arr){
	var begin = '<table>\n<tr><th>Price</th><th>Trend</th></tr>\n',
	middle = '',
	rowStart = '<tr>',
	rowEnd = '</tr>\n',
	cellStart = '<td>',
	cellEnd = '</td>',
	end = '</table>',
	images = {
		'fixed' : '<img src="fixed.png"/>',
		'up' : '<img src="up.png"/>',
		'down' : '<img src="down.png"/>'
	};
	function isInt(num) {
		return Number(num) % 1 === 0;
	}

	for (var idx in arr) {
		middle += rowStart + cellStart;
		middle += parseFloat(arr[idx]).toFixed(2) + cellEnd + cellStart;
		var compare;
		if (idx == 0){
			compare = 'fixed';
		} else {
			var current = Math.round( Number (arr[idx]) * 100)/100,
				prev = Math.round( Number (arr[idx -1]) * 100)/100;

			if ( current > prev ) {
				compare = "up";
				
			} else if ( current < prev ) {
				compare = "down";
			} else {
				compare = "fixed";
			}
			//console.log(current, prev + " bigger " + compare )
			
		}

		middle += images[compare];
		middle += cellEnd + rowEnd;

	}
	console.log(begin + middle + end);
}


var input1 = [ '50', '60' ],
input2 = [ '36.333', '36.5', '37.019', '35.4', '35', '35.001', '36.225' ],
input3 = ['1.33',
'1.35',
'2.25',
'13.00',
'0.5',
'0.51',
'0.5',
'0.5',
'0.33',
'1.05',
'1.346',
'20',
'900',
'1500.1',
'1500.10',
'2000'
]

;
solve(input3)