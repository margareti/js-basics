function solve(arr){
	var parsed = [],
		result = {
			"silver" : 0,
			"gold" : 0,
			"diamonds" : 0
		},
		format = {
			"silver": "*Silver",
			"gold" : "*Gold",
			"diamonds" : "*Diamonds"
		},
		regx = /mine\s?.*\s*-\s*(gold|silver|diamonds)\s*:\s*(\d+)/g,
		match;

	for (var i in arr){
		while ( match = regx.exec( arr[i]) ) {
			//console.log(match);
			result[match[1]] += parseInt(match[2]);
		}
	}
	for (var item in result) {

		console.log( format[item] + ": " + result[item])

	}
	
	
	
}
var input1 = [ 'mine bobovDol - gold : 10',
  'mine medenRudnik - silver : 22',
  'mine chernoMore - shrimps : 24',
  'gold:50' ],
  	input2 = [ 'mine bobovdol - gold : 10',
  'mine - diamonds : 5',
  'mine colas - wood : 10',
  'mine myMine - silver :  14',
  'mine silver:14 - silver : 14' ]


solve(input2)