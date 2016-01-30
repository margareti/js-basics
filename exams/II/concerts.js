function solve(arr){

	var cities = {};

	arr.forEach(function(el){

		var temp = el.split("|");
		temp = temp.map(function(el){
			return el.trim();
		})

		if ( !cities[temp[1]] ){
			cities[temp[1]] = {};

		}
		if ( !cities[temp[1]][temp[3]] ) {
			cities[temp[1]][temp[3]] = [];

		}
		if ( cities[temp[1]][temp[3]].indexOf(temp[0]) === -1) {
			cities[temp[1]][temp[3]].push(temp[0])
		}
		

	
	})

	for (var key in cities ){

		for (var item in cities[key]) {
			cities[key][item] = cities[key][item].sort();
		}
	}
	function sortObjKey(obj){
		var keysArr = [],
		tempObj = {};

		for (var key in obj){
			keysArr.push([key, obj[key]])
		}
		keysArr = keysArr.sort();

		for (var idx in keysArr){
			tempObj[keysArr[idx][0]] = keysArr[idx][1];
		}
		return tempObj;

	}
	for (var key in cities){
		cities[key] = sortObjKey(cities[key]);
	}


	console.log(JSON.stringify(sortObjKey(cities)))

}
var input = [ 'ZZ Top | London | 2-Aug-2014 | Wembley Stadium',
  'Iron Maiden | London | 28-Jul-2014 | Wembley Stadium',
  'Metallica | Sofia | 11-Aug-2014 | Lokomotiv Stadium',
  'Helloween | Sofia | 1-Nov-2014 | Vassil Levski Stadium',
  'Iron Maiden | Sofia | 20-June-2015 | Vassil Levski Stadium',
  'Helloween | Sofia | 30-July-2015 | Vassil Levski Stadium',
  'Iron Maiden | Sofia | 26-Sep-2014 | Lokomotiv Stadium',
  'Helloween | London | 28-Jul-2014 | Wembley Stadium',
  'Twisted Sister | London | 30-Sep-2014 | Wembley Stadium',
  'Metallica | London | 03-Oct-2014 | Olympic Stadium',
  'Iron Maiden | Sofia | 11-Apr-2016 | Lokomotiv Stadium',
  'Iron Maiden | Buenos Aires | 03-Mar-2014 | River Plate Stadium' ]

solve(input)