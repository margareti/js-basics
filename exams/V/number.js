function solve(arr){
	var rows = [],
		regx = /<td>(\-?\d+\.?\d*)<\/td>/g,
		max = [-1,Number.NEGATIVE_INFINITY];


	arr.forEach(function(el){

		var temp = [];
		//console.log(el)
		while(match = regx.exec(el)){
			//console.log(match[1]);
			if (match[1]){
				temp.push(match[1]);
			}
			
		}
		
		if (temp.length != 0) rows.push(temp)
	})
	for (var row in rows){
		var total = rows[row].reduce(function(a, b){
			return new Number(a) + new Number(b);
		})
		rows[row].push(total)

		if (rows[row][rows[row].length - 1] > max[1]) {
			max[1] = new Number(rows[row][rows[row].length - 1]);
			max[0] = row;
		}

		//console.log(rows[row])

	}
	var output;
	if (max[0] != -1) {
		output = max[1] + " = ";

		if ( rows[max[0]].length > 2 ) {
			for (var i = 0; i < rows[max[0]].length-1; i ++){
				output += rows[max[0]][i];
				i < rows[max[0]].length-2 ? output += " + " : output ;

			}

		} else {
			output += rows[max[0]][0];
		}

	} else {
		output = "no data"
	}
	console.log(output)
}


var input1 = [ '<table>',
  '<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>',
  '<tr><td>Sofia</td><td>26.2</td><td>8.20</td><td>-</td></tr>',
  '<tr><td>Varna</td><td>11.2</td><td>18.00</td><td>36.10</td></tr>',
  '<tr><td>Plovdiv</td><td>17.2</td><td>12.3</td><td>6.4</td></tr>',
  '<tr><td>Bourgas</td><td>-</td><td>24.3</td><td>-</td></tr>',
  '</table>' ],
  input2 = [ '<table>',
  '<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>',
  '<tr><td>Sofia</td><td>-</td><td>-</td><td>-</td></tr>',
  '</table>' ],
  input3 = [ '<table>',
  '<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>',
  '<tr><td>Sofia</td><td>12850</td><td>-560</td><td>20833</td></tr>',
  '<tr><td>Rousse</td><td>-</td><td>50000.0</td><td>-</td></tr>',
  '<tr><td>Bourgas</td><td>25000</td><td>25000</td><td>-</td></tr>',
  '</table>' ],
  i1 = ['<table>',
'<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>',
'<tr><td>Sofia</td><td>1</td><td>1</td><td>1</td></tr>',
'</table>'],
i5 = [
'<table>',
'<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>',
'<tr><td>Pleven</td><td>-100</td><td>-200</td><td>-</td></tr>',
'<tr><td>Varna</td><td>-100</td><td>-</td><td>-300</td></tr>',
'<tr><td>Rousse</td><td>-</td><td>-200</td><td>-100</td></tr>',
'</table>'
];


solve(i5)