class Director {
	constructor() {
		this.players = {};
	}

	/**
	 * 新增玩家
	 * @param player
	 */
	addPlayer(player) {
		let teamColor = player.teamColor;
		this.players[teamColor] = this.players[teamColor] || [];
		this.players[teamColor].push(player);
	}

	/**
	 * 删除玩家
	 * @param player
	 */
	removePlayer(player) {
		let teamColor = player.teamColor;
		let teamPlayer = this.players[teamColor] || [];

		teamPlayer.forEach((item, index) => {
			if (item === player) {
				teamPlayer.splice(index, 1);
			}
		})
	}

	/**
	 * 玩家死亡
	 * @param player
	 */
	playerDead(player) {
		let teamColor = player.teamColor;
		let teamPlayer = this.players[teamColor] || [];

		let ALL_DEAD = teamPlayer.every((item) => item.state === 'dead');

		if (ALL_DEAD) {
			// 失败
			teamPlayer.forEach((item) => {
				item.fail();
			})

			// 胜利
			for (let color in this.players) {
				if (color !== teamColor) {
					let otherTeamPlayer = this.players[color];

					otherTeamPlayer.forEach((item) => {
						item.win();
					})
				}
			}
		}
	}
}

module.exports = Director;