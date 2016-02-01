function solve(arr){
	
	var format = arr[0].split(/(\.|\?|\!)/g),
		format2 = formatStr(arr[1]), // = arr[1].split(/\.|\?|\!/g),
		words = {},
		search = [];	

		function formatStr(str){
			var regx = /([^?!.]+\s*(?:\.|\?|\!))/g, 
				match, arr = [];
			while (match = regx.exec(str)) {
				arr.push(match[1].trim());
			}
			return arr;
		}

	for (var sent in format) {
		var wordsArr = format[sent].split(/\W/g); 
		wordsArr = wordsArr.map(function(el){
			return el.trim().toLowerCase();
		}).filter(function(el){return el});

		for (var word in wordsArr) {

			if ( !words[wordsArr[word]] ) {
				words[wordsArr[word]] = 0;
			} 
			words[wordsArr[word]] += 1;
			if ( words[wordsArr[word]] >= 3 && search.indexOf( wordsArr[word]) === -1) {
				search.push( wordsArr[word] );
			}
		}
	}

	function compare(){
		var wordsFreq = {}, 
			sentences = false;
		for (var sentence in format2) {
			wordsFreq = {};
			for (var word in search) {

				var regx = new RegExp('\\b' + search[word] + '\\b', 'gi'),
					match = format2[sentence].match(regx);
				if (match) {
					if ( !wordsFreq[search[word]] ) {
						wordsFreq[search[word]] = 0;
					}
					wordsFreq[search[word]]++;
				}
			}
			if (Object.keys(wordsFreq).length >= 2 ) {
				console.log(format2[sentence]);
				sentences = true; 
			}
		} 
		if (!sentences) {
			console.log("No sentences")
		}
	}
	if (search.length < 1) {
		console.log("No words");
	} else {
		compare();
	}
	
	
}

var input1 = [ 'Captain Obvious was walking down the street. As the captain was walking a person came and told him: You are Captain Obvious! He replied: Thank you CAPTAIN OBVIOUS you are the man!',
  'The captain was walking and he was obvious. He did not know what was going to happen to you in the future. Was he curious? We do not know.' ],
  	input2 = [ 'Why, why is he so crazy, so so crazy? Why?',
  'There are no words that you should be matching. You should be careful.' ],
  i2 = ['The words: the and are, are repeated more than three thimes. Look in the second text are there sentences with those words',
'Yup there are no such sentences.']




solve(input1)