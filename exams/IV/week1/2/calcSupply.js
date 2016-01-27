function calcSupply(age, maxAge, food, foodPerDay) {
	var timePeriod = maxAge - age;
	var foodVolume = Math.round(foodPerDay * 365 * timePeriod);
	return foodVolume + "kg of " + food + " would be enough until I am " + maxAge + " years old.";
}

var tests = [ [38, 118 , "chocolate", 0.5], [20,87,"fruits", 2], [16, 102, "nuts", 1.1]]
console.log(tests[0]);
console.log(calcSupply(tests[0][0], tests[0][1], tests[0][2], tests[0][3] ));
console.log()
console.log(tests[1]);
console.log(calcSupply(tests[1][0], tests[1][1], tests[1][2], tests[1][3] ));
console.log()
console.log(tests[2]);
console.log(calcSupply(tests[2][0], tests[2][1], tests[2][2], tests[2][3] ));