function solve(arr){
	var line = arr.join('\n'),
	regx = /(.*)#([a-z][\w-]{3,20})(:|!|,)?$/gi,
	checkCode = /<code>[\sa-zA-Z\W]*<\/code>/,
	match,
	matches = [],
	banned = arr[arr.length-1].split(' '), 
	lines = [],
	codeOpen = '<code>',
	codeClose = '</code>';
	function formLink(user, symbol, pre){
		return pre + '<a href="/users/profile/show/' + user + '">' + user + '</a>' + symbol;
	}
  	var code = false;
	for (var item = 0; item < arr.length - 1; item ++){
		var element = arr[item].split(' ');
		for (var word = 0; word < element.length; word ++){

			if (!code) {
				if ( element[word].indexOf(codeOpen) !== -1  ) {

					var lineToCheck = element.slice(word, element.length);
					for (var i = item; i < arr.length; i++){
						lineToCheck += arr[i];
					}
					if (lineToCheck.match(checkCode)) {
						code = true;
					}
				}
			} else if (code) {
				code = element[word].indexOf(codeClose) === -1 ? true : false;
			}
			for (var person in banned) {
				if ( code && word === 0) {
				} else {
					var addRegx = new RegExp( '#' + banned[person] + '(\\W)?', 'gi');
					var theMatch;
						while ( theMatch = addRegx.exec(element[word]) ) {
							if ( theMatch ) {
								var symbol = theMatch[1] ? theMatch[1] : '';
								var wordLen = banned[person].length,
								ban = '';
							for (var letters = 0; letters < wordLen; letters++){
								ban += '*'
							}
							element[word] = ban + symbol;
						}
					}
				}
			}
			var match, gotIt, symb, pre;
			if (!code) {
				while (match = regx.exec(element[word])) {

					pre = match[1] ? match[1] : '';
					gotIt = match[2].trim();
					symb = match[3] ? match[3] : '';
					if (gotIt) {
						var checkLast = /[a-zA-Z\d]$/;
						var check = gotIt.match(checkLast);
						if (check) {
							var alter = formLink(gotIt, symb, pre);
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
'pisnami'],
i7 = ['Far far away, behind the word mountains,',
'far from the countries #Vokalia and Consonantia,',
'there live the #blind texts. Separated they #live in Bookmarksgrove',
'right at the coast of the Semantics, a large language ocean.',
'A #small #river named #Duden flows by their place and supplies',
'it with the necessary regelialia. It is a paradisematic country,',
'in which roasted parts of sentences fly into your mouth.',
'Even the all-powerful #Pointing has no control about the blind texts',
'it is an almost unorthographic life One day however a small line of blind',
'text by the name <code> of Lorem Ipsum #decided to </code>',
'leave for the far World of Grammar.',
'The Big #Oxmox advised her',
'not to do so, because there were thousands of bad Commas,',
'wild Question Marks and devious Semikoli,',
'but the Little Blind Text didn"t listen.',
'small river Vokalia'],
i6 = ['#1nvalid, #very_invalid_, #4alelele4ala,',
'#gosho, #pesho',
'#vesko_marinov_40',
'gosho pesho'],
i5 = ['#trifon',
'#Mega_trifon',
'#mega_trifon-ApoV',
'#are_trifone',
'#machkai_trifkaa',
'#balgaria_nad-sichk0',
'#Von_ApovBerger',
'Pitah go kolegata kakyw e problema, ama na nito edin ot teq',
'iusarneimi ne mi otgowarq kakwo da parwq??!',
'za kontakti: #stamat',
'stamat'],
i4 = ['#gosho, #pesho, #gosho, #pesho, #otiame, #namore',
'aideee #gosho i #pesho',
'<code>',
'function solve(input) {',
'//zaebi tapanarshtinata #trygwamsi',
'console.log(generateSolution(input));',
'}',
'</code>',
'gosho pesho otiame namore'],
i3 = ['<code>',
'#gosho',
'#pesho',
'#madafaka',
'</code>',
'#1nval1d says yoo and I had to reply, so I',
'typed "yoo muthafucka" and then',
'#another_invalid_ said gz gg gj so I had to go incognito',
'and changed my user name to:',
'#Make_me_a_LINK!',
'the code in question is:',
'<code>',
'Console.WriteLine("#nimoa");',
'</code>',
'Make_me_a_LINK'],
i1 = ['I"m not sure what you mean but #RoYaL',
'says that I"ve written everything correctly. Ask', 
'#iordan_93 and #pesho',
'if you don"t believe me',
'<code>',
'#trying to print stuff',
'print("yoo")',
'</code>',
'Yoo',
'<code>',
'#trying to print stuff',
'#gosho',
'print("yoo")',
'</code>',
'pesho gosho']


solve(i9)
