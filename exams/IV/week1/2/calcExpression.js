
function evaluate(){
	var inputField = document.getElementById("inputField");
	expression = inputField.value;
	// console.log(expression);
	var symbols = [];
	var numbers = [];

	var operators = {
		"+" : function(a, b){ return a + b },
		"-" : function(a, b){ return a - b },
		"*" : function(a, b){ return a * b },
		"/" : function(a, b){ return a / b },
		"%" : function(a, b){ return a % b },
		"===" : function(a, b){ return a === b }
	}


 	for (var i = 0; i < expression.length; i++) {
 		
 		if ( isNaN(expression[i]) ) {
 			symbols.push(expression[i])
 			numbers.push(" ")
 		} else {
 			numbers.push(expression[i])
 		}
 	}
 	// console.log("symbols are ", symbols);
 	// console.log("numbers are ", numbers)

 	var nums = numbers.join("");
 	var numArr = nums.split(" ");
 	var numsInts = [];
 	for (var i = 0; i < numArr.length; i ++) {
 		// console.log(numArr[i])
 		numsInts.push( Number(numArr[i]) );
 	}
 	// console.log(numsInts)
 	var result = numsInts[0];
 	for (var i = 1; i < numsInts.length; i ++) {
 		result = operators[symbols[i-1]](result, numsInts[i]);
 		// result += intermediate;
 	}
 	// console.log("result is ", result)
	var output = document.getElementById("output");
	output.innerHTML = result;



}

var evalBtn = document.getElementById("evalButtonId");
evalBtn.addEventListener("click", evaluate, false);

