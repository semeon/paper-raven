const path = require('path');

export class AppState {
	constructor(app) {
		this.app = app;

		this.state = {};

		this.setDefaults();
	}

	setDefaults() {
		this.state.view = "location";
		this.state.location = "hope";
		this.state.activity = "combat";

	}

	// TODO: move state management to superclass
	update(field, value) {
		console.log("Updating App State:");
		console.log("-- Field: " + field);
		console.log("-- Value: " + value);
		this.state[field] = value;
	}

	getState(field) {
		var	result = this.state;
		if (field) result = this.state[field];
		return result;
	}

}