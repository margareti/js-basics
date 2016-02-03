function solve(arr){
	var line = arr.join('\n'),
	regx = /(\s*#\w+)(\W)?/gi,
	match,
	matches = [],
	banned = arr[arr.length-1].split(' '), 
	lines = [];
	
	function formLink(user){

		return '<a href="/users/profile/show/' + match + '">' + umatch + '</a>'
	}

	while (match = regx.exec(line)) {
		var gotIt = match[1].trim();
		matches.push(gotIt)
	}

	for (var item = 0; item < arr.length; item ++){
		var element = arr[item].split(' ');
		lines.push(element)
	}

	for (var i = 0; i < lines.length; i ++) {

		for (var ii = 0; ii < lines[i].length; ii ++){
			var word = lines[i][ii];
			console.log("checking for ", word)
			console.log(matches)
		}
	}
	console.log(lines)


}


// <a href="/users/profile/show/RoYaL">RoYaL</a>: I'm not sure what you mean,
// but I am confident that I've written
// everything correctly. Ask <a href="/users/profile/show/iordan_93">iordan_93</a>
// and ***** if you don't believe me
// <code>
// #trying to print stuff
// print("yoo")
// </code>
 
var input1 = [ '#RoYaL: I\'m not sure what you mean,',
  'but I am confident that I\'ve written',
  'everything correctly. Ask #iordan_93',
  'and #pesho if you don\'t believe me',
  '<code>',
  '#trying to print stuff',
  'print("yoo")',
  '</code>',
  'pesho gosho' ];

solve(input1)