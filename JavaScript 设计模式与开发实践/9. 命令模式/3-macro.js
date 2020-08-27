let openDoorCommand = {
	execute () {
		console.log('openDoor...')
	}
}

let openLightCommand = {
	execute () {
		console.log('openLight...')
	}
}

let closeDoorCommand = {
	execute () {
		console.log('closeDoor...')
	}
}

class MacroCommand {
	constructor() {
		this.commandList = []
	}

	add (command) {
		this.commandList.push(command)
	}

	execute () {
		let command;

		while (command = this.commandList.shift()) {
			command.execute();
		}
	}
}

let macroCommand = new MacroCommand();

macroCommand.add(openDoorCommand);
macroCommand.add(openLightCommand);
macroCommand.add(closeDoorCommand);

macroCommand.execute();