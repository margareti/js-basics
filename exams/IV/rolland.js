function solve(arr) {
	var playersArray = [], players,
	regx = /\s+/g;

	var Player = function(name) {
		this.name = name
		this.matchesWon = 0;
		this.matchesLost = 0;
		this.setsWon = 0;
		this.setsLost = 0;
		this.gamesWon = 0;
		this.gamesLost = 0;
	}
			

	function trimStr(str) {
		var newStr = str.trim();
		return newStr.replace(regx, " ")
	}

	function formPlayers() {
		var i, item, players = {},
		names,
		scores, 
		player1, player2, scoresArray;

		for (var i in arr) {
			names = arr[i].split("vs.");

			scores = names[1].split(":");

			player1 = trimStr(names[0]);
			player2 = trimStr(scores[0]);

			if ( !players[player1] ) {
				players[player1] = new Player(player1);
			}
			if ( !players[player2] ) {
				players[player2] = new Player(player2);
			}
			
			

			scoresArray = scores[1].replace(regx, " ").split(" ").filter( function(el) {return el});
			
			// console.log(scoresArray);
			var gamesWonPerPlayer1 = 0;

			for (var item in scoresArray) {
				// console.log("item in scoresArray ", scoresArray[item])
				var match = scoresArray[item].split("-");
				// console.log("one match ", match);
				var match1 = parseInt(match[0]);
				var match2 = parseInt(match[1])
				
				players[player1].gamesWon += match1;
				players[player2].gamesWon += match2;

				players[player1].gamesLost += match2;
				players[player2].gamesLost += match1;

				if (match1 > match2) {

				players[player1].setsWon += 1;
				players[player2].setsLost +=1;
				gamesWonPerPlayer1 ++;

				} 
				else if ( match1 < match2 ) {

					players[player2].setsWon += 1;
					players[player1].setsLost +=1;
				}
				
			}
			// console.log("at the end of iteration ", gamesWonPerPlayer1, scoresArray.length);
			var player1Win = gamesWonPerPlayer1 >= Math.ceil(scoresArray.length/2)
			if  ( player1Win ) {
				players[player1].matchesWon +=1;
				players[player2].matchesLost += 1;
				
			} else {
				players[player2].matchesWon +=1;
				players[player1].matchesLost += 1;
			}

		}
		return players;

	}

	players = formPlayers();
	// console.log("players ", players)
	for (var i in players) {
		playersArray.push(players[i])
		
	}
	

	function compareMatches(a, b) {
		if (a.matchesWon < b.matchesWon) {
			return 1;
		} else if (a.matchesWon > b.matchesWon) {
			return -1;
		} else {
			if (a.setsWon < b.setsWon) {
				return 1;
			} else if (a.setsWon > b.setsWon) {
				return -1;
			}
			else {
				if (a.gamesWon < b.gamesWon) {
					return 1;
				} else if (a.gamesWon > b.gamesWon) {
					return -1
				} else {
					if (a.name < b.name) {
						return -1;
					} else if (a.name > b.name) {
						return 1;
					} else {
						return 0
					}
				}
			}
		}
	}
	playersArray.sort(compareMatches)
	console.log(JSON.stringify(playersArray));
	
}



var input1 = ["Novak Djokovic vs. Roger Federer : 6-3 6-3", 
"Roger    Federer    vs.        Novak Djokovic    :         6-2 6-3",
"Rafael Nadal vs. Andy Murray : 4-6 6-2 5-7",
"Andy Murray vs. David     Ferrer : 6-4 7-6",
"Tomas   Bedrych vs. Kei Nishikori : 4-6 6-4 6-3 4-6 5-7",
"Grigor Dimitrov vs. Milos Raonic : 6-3 4-6 7-6 6-2",
"Pete Sampras vs. Andre Agassi : 2-1",
"Boris Beckervs.Andre        Agassi:2-1"]

var input2 = ["Rafa Nadal vs. His Knees : 5-4 2-3 7-5 4-6 0-1",
"Roger 		Federervs.His			Age:7-6 6-3 6-1",
"HuanMartin  delPotro			vs.Wrist Injuries:		6-3		1-6 2-6",
"WAYNE ODESNIK vs. Doping TwiceAlready             :0-6 0-6",
"Rafa Nadal vs. His Knees : 5-4 1-3 7-5 4-6 0-1",
"Roger 		Federervs.His			Age:7-6 6-3 6-1",
"HuanMartin  delPotro			vs.Wrist Injuries:		6-3		1-6 2-6",
"WAYNE ODESNIK vs. Doping TwiceAlready             :0-6 0-6 6-0 6-0 0-6",
"Rafa Nadal vs. His Knees : 7-4 2-3 7-5 4-6 2-5",
"Roger 		Federervs.His			Age:7-6 6-3 6-1",
"HuanMartin  delPotro			vs.Wrist Injuries:		6-3		1-6 2-6",
"WAYNE ODESNIK vs.Doping TwiceAlready             :0-6 0-6",
"Rafa Nadalvs.His Knees : 5-3 2-3 7-1 4-6 0-1",
"Roger Federer	vs.		His Age:7-6 6-3 6-1",
"HuanMartin  delPotrn			vs.Wrist Injuries:		6-3		1-6 2-6",
"WAYNE ODESNIK vs. Doping TwiceAlready             :0-6 0-6",
"Rafa Nadal vs. His Knees : 5-4 2-3 7-5 4-6 0-1",
"Roger 		Federervs.His			Age:7-6 6-3 6-1",
"HuanMartin  delPotrn	  vs.Wrist Injuries:		6-3		1-6 2-6",
"WAYNE ODESNIKvs. Doping TwiceAlready             :0-6 0-6",
"Rafa Nadal vs. His Knees : 5-1 2-4 7-5 2-6 0-1",
"Roger 		Federervs.His			Age:7-6 6-3 6-1",
"HuanMartin  	delPotrn			vs.Wrist Injuries:		6-3 1-6 2-6",
"WAYNE 	ODESNIK 	vs. Doping 		TwiceAlready	:1-6 2-6",
]
solve(input2)

