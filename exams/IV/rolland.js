function solve(arr) {
	var players = {},
	names,
	scores, 
	player1, player2,
	scoresArray,
	regx = /\s+/g;

	var Player = function() {
		this.gamesLost = 0;
		this.gamesWon = 0;
	}
			

	function trimStr(str) {
		var newStr = str.trim();
		return newStr.replace(regx, " ")
	}

	function formPlayers() {
		var i, item;

		for (var i in arr) {
			names = arr[i].split("vs.");

			scores = names[1].split(":");

			player1 = trimStr(names[0]);
			player2 = trimStr(scores[0]);
		
			players[player1] = new Player ;
			players[player2] = new Player;

			scoresArray = scores[1].split(" ").filter( function(el) {return el});
			
			console.log(scoresArray);
			for (var item in scoresArray) {
				console.log("item in scoresArray ",item)
				var match = item.split("-");
				console.log(match)
				
				players[player1].gamesWon += match[0];
				players[player2].gamesWon += match[1];
				
			}


		}

	}

	formPlayers()
	console.log("players ", players)

}



var input1 = ["Novak Djokovic vs. Roger Federer : 6-3 6-3", 
"Roger    Federer    vs.        Novak Djokovic    :         6-2 6-3",
"Rafael Nadal vs. Andy Murray : 4-6 6-2 5-7",
"Andy Murray vs. David     Ferrer : 6-4 7-6",
"Tomas   Bedrych vs. Kei Nishikori : 4-6 6-4 6-3 4-6 5-7",
"Grigor Dimitrov vs. Milos Raonic : 6-3 4-6 7-6 6-2",
"Pete Sampras vs. Andre Agassi : 2-1",
"Boris Beckervs.Andre        Agassi:2-1"]

solve(input1)