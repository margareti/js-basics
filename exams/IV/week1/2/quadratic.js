function quadraticRoots(a,b,c) {
	var x1 = ( -b + Math.sqrt( Math.pow(b, 2) - 4 * (a*c) ) )/ (2 * a);
	var x2 = ( -b - Math.sqrt( Math.pow(b, 2) - 4 * (a*c) ) )/ (2 * a);

	if (x1 || x2) {
		if (x1 == x2){
			return "Root is " + x1;
		} else {
			return "x1" + " = " + x1 + "\nx2" + " = " + x2;
		}
	}
	return "No real roots"
}
var tests = [ [2, 5, -3], [2, -4, 2], [4, 2, 1]]
console.log(tests[0]);
console.log(quadraticRoots(tests[0][0], tests[0][1], tests[0][2]));
console.log()
console.log(tests[1]);
console.log(quadraticRoots(tests[1][0], tests[1][1], tests[1][2]));
console.log()
console.log(tests[2]);
console.log(quadraticRoots(tests[2][0], tests[2][1], tests[2][2]));
