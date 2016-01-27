function knots(km){
	var result = (Math.round( (km / 1.852) * 100)/100).toString();
	var afterDecimal = result.split(".");
	
	if (afterDecimal[1].length == 0) {
		result += ".00";
	} else if (afterDecimal[1].length == 1) {
		result += "0"
	}
	return result;
}
// var getKm = prompt("Enter km to be converted to knots");
// console.log(knots(getKm))


var stdin = process.openStdin();
console.log("Input some value for calculation to take place");
stdin.addListener("data", function(d) {
   var input = d.toString().trim()
   console.log( "Result in knots is ", knots(parseInt(input)) )
  });