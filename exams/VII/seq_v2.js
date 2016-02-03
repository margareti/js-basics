function solve(arr){
	var line = arr.join('\n'),
	regx = /^#(\w\w\w+)(:|!|,)?$/gi,
	match,
	matches = [],
	banned = arr[arr.length-1].split(' '), 
	lines = [],
	codeOpen = '<code>',
	codeClose = '</code>';
	
	function formLink(user, symbol){
				
				
					return '<a href="/users/profile/show/' + user + '">' + user + '</a>' + symbol;
				

	}
  	var code = false;
	for (var item = 0; item < arr.length - 1; item ++){
		var element = arr[item].split(' ');
		for (var word = 0; word < element.length; word ++){
			if (!code) {
				code = element[word].indexOf(codeOpen) === -1 ? false : true;
			} else if (code) {
				code = element[word].indexOf(codeClose) === -1 ? true : false;
			}
			for (var person in banned) {
				var addRegx = new RegExp( banned[person], 'gi');
				if (element[word].match(addRegx) ) {
					var wordLen = banned[person].length,
						ban = '';
					for (var letters = 0; letters < wordLen; letters++){
						ban += '*'
					}
					element[word] = ban;
				}
			}
			var match, gotIt, symb;
			if (!code) {
				while (match = regx.exec(element[word])) {
					gotIt = match[1].trim();
					symb = match[2] ? match[2] : '';


					if (gotIt) {
						var checkLast = /[a-zA-Z\d]$/;
						var check = gotIt.match(checkLast);
						if (check) {
							var alter = formLink(gotIt, symb);
							element[word] = alter;
						}
						
					}
				}
			}
			
		}
		lines.push(element)
	}

	lines.forEach(function(el){console.log(el.join(' '))})


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
  'pesho gosho' ],
  i10 = ['The quick, brown fox jumps over a lazy dog.',
'DJs flock by when MTV ax quiz prog. Junk MTV',
'quiz graced by fox whelps. Bawds jog, flick quartz,',
'vex nymphs. #Waltz, bad nymph, for quick jigs vex!',
'Fox nymphs grab #1quick-jived waltz. Brick quiz whangs',
'jumpy veldt fox. #Bright_ vixens jump; dozy fowl quack. Quick',
'wafting zephyrs vex #bold Jim. Quick zephyrs blow, vexing daft Jim.',
'Sex-charged fop',
'blew my junk TV quiz.',
'How quickly daft ',
'jumping zebras vex. Two driven jocks',
'help fax my big quiz. Quick, Baz,',
'get my woven flax jodhpurs!',
'"Now fax quiz Jack!" my #brave ghost pled.',
'brave bold'],
i9 = ['Asd asd asd asd asd <code>',
'#asdasd',
'#asdd',
'#asdddd',
'#asdasdasd',
'</code>',
'Kodime po cel den',
'<code>',
'//#namore',
'System.out.print("Otiame na more");',
'<code>',
'Tiq gornite tagowe shto ne mi rabotqt?',
'#pisnami',
'pisnami'];

solve(i9)