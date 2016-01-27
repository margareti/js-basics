function solve(arr){
	var regx = /(?:coin\s)(\d*\.?\d*)/gi, 
	match, 
	joined = arr.join("\n"), 
	totalCoins = 0,
	gold,
	silver,
	bronze;

	function isInt(n) {
	   return Number(n) % 1 === 0;
	}
	
	while (match = regx.exec(joined)) {

		if ( match[1] && isInt( match[1] ) ) {
			totalCoins += parseInt(match[1]);
			
		}
		
		
	}

	gold = Math.floor(totalCoins / 100);
	silver = Math.floor( (totalCoins - gold*100) / 10);
	bronze = totalCoins % 10;
	console.log("gold : " + gold);
	console.log("silver : " + silver);
	console.log("bronze : " + bronze);

}





var input = ['coin 1','coin 2', 'coin 5', 'coin 10', 'coin 20', 'coin 50', 'coin 100', 'coin 200', 'coin 500','cigars 1'];
var input2 = ['coin 1', 'coin two', 'coin 5', 'coin 10.50', 'coin 20', 'coin 50', 'coin hundred', 'cigars 1'];
var input3 = ['coin one', 'coin two', 'coin five', 'coin ten', 'coin twenty', 'coin fifty', 'coin hundred', 'cigars 1'];

// solve(input)
solve(input2)
// solve(input3)