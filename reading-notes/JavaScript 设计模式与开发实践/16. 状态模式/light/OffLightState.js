class OffLightState {
	constructor(light) {
		this.light = light;
	}

	buttonClick() {
		console.log('关灯');
		this.light.setState(this.light.weakLightState);
	}
}

module.exports = OffLightState;