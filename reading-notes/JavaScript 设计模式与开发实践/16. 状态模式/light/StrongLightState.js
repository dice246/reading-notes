class StrongLightState {
	constructor(light) {
		this.light = light;
	}

	buttonClick() {
		console.log('强灯');
		this.light.setState(this.light.offLightState);
	}
}

module.exports = StrongLightState;