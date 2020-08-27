class Player {
	constructor(name, teamColor, director) {
		this.name = name;
		this.teamColor = teamColor;
		this.state = 'alive'
		this.director = director;
	}

	win() {
		console.log(`${this.name} won`)
	}

	fail() {
		console.log(`${this.name} fail`)
	}

	dead() {
		this.state = 'dead';
		this.director.playerDead(this);
	}

	remove() {
		this.director.removePlayer(this)
	}
}

module.exports = Player;