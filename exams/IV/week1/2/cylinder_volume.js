function calcCylinderVol(arr) {
	var radius = arr[0];
	var height = arr[1];
	return Math.round( Math.PI * Math.pow(radius, 2) * height * 1000 )/ 1000; 
}

var tests = [ [2, 4], [5,8], [12,3]]
console.log(tests[0]);
console.log(calcCylinderVol(tests[0]));
console.log()
console.log(tests[1]);
console.log(calcCylinderVol(tests[1]));
console.log()
console.log(tests[2]);
console.log(calcCylinderVol(tests[2]));