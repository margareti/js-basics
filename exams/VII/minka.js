function solve(arr){
	var i, 
		length = arr.length,
		obj = {}

	for (i = 0; i < length; i++ ){
		var line = arr[i].replace(/\s+/g, ' '),
			elements = line.split('&'),
			task = ("Task" + elements[2]).trim();

		elements = elements.map(function (el){
			return el.trim();
		})

		if ( !obj[task] ) {
			obj[task] = {};
		}
		
		if (!obj[task].tasks) {
			obj[task].tasks = [];
		}
		obj[task].tasks.push({
			'name' : elements[0],
			'type' : elements[1]
		})

		if (!obj[task].average) {
			obj[task].average = [];
		}
		obj[task].average.push(parseInt(elements[3]));
		if (!obj[task].lines) {
			obj[task].lines = 0;
		}
		obj[task].lines += parseInt(elements[4]);
	}
	var temp = [], tempObj = {};
	for (var key in obj) {
		var len = obj[key].average.length,
			sum = obj[key].average.reduce(function (a, b){
				return a + b;
			})
		obj[key].average = Math.round(sum/len * 100)/ 100;

		obj[key].tasks.sort(function(a, b){
			return a.name.localeCompare(b.name)
		})
		temp.push([obj[key], key]);
	}
	temp.sort(function(a, b) {
		if (a[0].average < b[0].average) {
			return 1
		} else if (a[0].average > b[0].average) {
			return -1
		} else if (a[0].lines > b[0].lines ) {
			return 1
		} else if (a[0].lines < b[0].lines ) {
			return -1
		} else {
			0
		}
	})
	for (var index in temp) {
		tempObj[temp[index][1]] = temp[index][0];
	}
	console.log(JSON.stringify(tempObj))
}

// {"Task 1":
//   {"tasks":
// 	[{"name":"Fit box in box","type":"conditionals"},
// 	 {"name":"Torrent Pirate","type":"calculations"}
// 	],
// 	"average":100,
// 	"lines":115
//   },
//   "Task 5":
//   	{"tasks":
//   		[{"name":"Friend Bits","type":"bits"},
//   		 {"name":"Game of bits","type":"bits"},
//   		 {"name":"Knight Path","type":"bits"}],
//   		"average":100,
//   		"lines":164
//   	},
//   "Task 3":
//   	{"tasks":[
//   		{"name":"Disk","type":"draw"},
//   		{"name":"Magic Wand","type":"draw"}],"average":95,"lines":30},
//   "Task 2":{"tasks":[
//   		{"name":"Basket Battle","type":"conditionals"},
//   		{"name":"Dream Item","type":"loops"}],
//   		"average":94,"lines":200},
//   "Task 4":{"tasks":[{"name":"Array Matcher","type":"strings"},{"name":"Encrypted Matrix","type":"nested loops"},{"name":"Poker Straight","type":"nested loops"}],"average":76.67,"lines":147}}


var input1 = [ 'Array Matcher & strings & 4 & 100 & 38',
  'Magic Wand & draw & 3 & 100 & 15',
  'Dream Item & loops & 2 & 88 & 80',
  'Knight Path & bits & 5 & 100 & 65',
  'Basket Battle & conditionals & 2 & 100 & 120',
  'Torrent Pirate & calculations & 1 & 100 & 20',
  'Encrypted Matrix & nested loops & 4 & 90 & 52',
  'Game of bits & bits & 5 & 100 & 18',
  'Fit box in box & conditionals & 1 & 100 & 95',
  'Disk & draw & 3 & 90 & 15',
  'Poker Straight & nested loops & 4 & 40 & 57',
  'Friend Bits & bits & 5 & 100 & 81' ]


solve(input1)