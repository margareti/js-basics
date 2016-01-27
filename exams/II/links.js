function extract(arr){
	var newArr = arr.join("\n");

	var regex = /<a\s*[^>]*href\s*=\s*('([^']+)'|"([^"]+)"|(.+))[^<]*>/g;

	while (match = regex.exec(newArr)) {
		loopedMatch = match[1]
		if (loopedMatch){
			console.log(loopedMatch.replace(/^('|")/g, "").replace(/('|")$/g, ""))
		}
		
	}

}

var input1 = [ '<!DOCTYPE html>',
  '<html>',
  '<head>',
  '  <title>Hyperlinks</title>',
  '  <link href="theme.css" rel="stylesheet" />',
  '</head>',
  '<body>',
  '<ul><li><a   href="/"  id="home">Home</a></li><li><a',
  ' class="selected" href="/courses">Courses</a>',
  '</li><li><a href = ',
  '\'/forum\' >Forum</a></li><li><a class="href"',
  'onclick="go()" href= "#">Forum</a></li>',
  '<li><a id="js" href =',
  '"javascript:alert(\'hi\')" class="new">click</a></li>',
  '<li><a id=\'nakov\' href =',
  '\'http://www.nakov.com\' class=\'new\'>nak</a></li></ul>',
  '<a href="#"></a>',
  '<a id="href">href=\'fake\'<img src=\'http://abv.bg/i.gif\' ',
  'alt=\'abv\'/></a><a href="#">&lt;a href=\'hello\'&gt;</a>',
  '<!-- This code is commented:',
  '  <a href="#commented">commentex hyperlink</a> -->',
  '</body>' ]

  extract(input1)
