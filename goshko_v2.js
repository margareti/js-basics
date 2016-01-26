function goshko(arr){
	var directions = arr[0].split(","), 
	garden = []
	stats = {},
	cells = [],
	position = [0, 0],
	map = {
		"right": [1, 0],
		"left": [-1, 0],
		"up": [0, -1],
		"down": [0, 1]
	},

	output = {
		"{&}":0,
		"{*}":0,
		"{#}":0,
		"{!}":0,
		"wallHits": 0
	}
	overallRegx = /{&}|({\*})|({#})|{!}/g;
	
	

	//populate garden
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
console.log("directions ", directions)
	for (var idx in directions) {
		var direction = directions[idx].trim();
		console.log(position)
		var go = move(direction, position);
		if ( go[1] ) {
			// console.log(garden[go[0][1]][go[0][0]]);
			cells.push(garden[go[0][1]][go[0][0]])
		} else {
			console.log(idx, "hit wall")
			++output.wallHits;
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
	var newOutput = {};
	var strip = /{|}/g;
	for (var key in output) {
		if (key === "wallHits") {
			newOutput["wall hits"] = output[key];
		}
		else {
			var newKey = key.replace(strip, "");
			// console.log(newKey)
			newOutput[newKey] = output[key];
		}
	
	}
	// console.log(newOutput)
	
	console.log( JSON.stringify(newOutput) );
	if (cells){
		console.log( cells )
	} else {
		console.log("no")
	}
	
	
	

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
goshko(input4)