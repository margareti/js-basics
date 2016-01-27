function goshko(arr){
	var directions = arr[0].split(","), 
	garden = []
	stats = {},
	cells = [],
	position = [0, 0],
	map = {
		"right": [0, 1],
		"left": [0, -1],
		"up": [-1, 0],
		"down": [1, 0]
	},
	output = {
		"&":0,
		"*":0,
		"#":0,
		"!":0,
		"wall hits": 0
	},
	overallRegx = /{[*&!#]}/g;
	
	for (var i = 1; i < arr.length; i ++){
		var row = arr[i].split(",");
		garden.push(row)
	}
	function move(direction, position){
		var wasMove = false;
		if ( position[0] + map[direction][0] >= 0 && position[0] + map[direction][0] < garden.length 
			&& position[1] + map[direction][1] >= 0 && position[1] + map[direction][1] < garden[0].length) {
			position[0] += map[direction][0];
			position[1] += map[direction][1];
			wasMove = true;
		} 
		return [position, wasMove];
	}
// console.log("directions ", directions)
	for (var idx in directions) {
		var direction = directions[idx].trim();
		// console.log(position)
		var go = move(direction, position);
		if ( go[1] ) {
			// console.log(garden[go[0][1]][go[0][0]]);
			cells.push(garden[go[0][0]][go[0][1]])
		} else {
			// console.log(idx, "hit wall")
			++output['wall hits'];
		}
	}
	for (var cell in cells ) {
		cells[cell] = cells[cell].trim();
	}
	cells = cells.join("|");
	function format(str, regx) {
	  function replaceAndLog(match) { 

	  	output[match] += 1;
	    return '@';
	  }
	  return str.replace(regx, replaceAndLog);
	}
	cells = format(cells, overallRegx );
	console.log( JSON.stringify(output) );
	cells ? console.log( cells ) : console.log("no");	
}

var input1 = [ 'right, up, up, down',
  'asdf, as{#}aj{g}dasd, kjldk{}fdffd, jdflk{#}jdfj',
  'tr{X}yrty, zxx{*}zxc, mncvnvcn, popipoip',
  'poiopipo, nmf{X}d{X}ei, mzoijwq, omcxzne' ]

var input2 = [ 'up, right, left, down', 'as{!}xnk' ];
var input4 = [
'right, right, down, left, left, down, right, right, down, left',
'qwekjs, asd{#}a, mxz{#}{*}',
'qwekjs, asd{#}a, xnc{&}a',
'qwekjs, asd{#}a, xnc{&}a',
'qwekjs, asd{#}a, xnc{&}a'
]
goshko(input1)