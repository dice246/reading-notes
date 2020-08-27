let Player = require('./Player')
let Director = require('./Director');

let director = new Director();

class FactoryPlayer {
	constructor(name, teamColor) {
		let player = new Player(name, teamColor, director);
		director.addPlayer(player);

		return player;
	}
}

let f1 = new FactoryPlayer('A', 'red');
let f2 = new FactoryPlayer('B', 'red');
let f3 = new FactoryPlayer('C', 'red');
let f4 = new FactoryPlayer('D', 'red');

let f5 = new FactoryPlayer('A', 'blue');
let f6 = new FactoryPlayer('B', 'blue');
let f7 = new FactoryPlayer('C', 'blue');
let f8 = new FactoryPlayer('D', 'blue');

f1.dead();
f5.dead();
f2.dead();
f6.dead();
f3.dead();
f7.dead();
f4.dead();