class WeakLightState {
	constructor(light) {
		this.light = light;
	}

	buttonClick() {
		console.log('弱灯');
		this.light.setState(this.light.strongLightState);
	}
}

module.exports = WeakLightState;