import {app} from 'js/app.js';

export class State {
	
	constructor(stateName) {
		this.state = stateName;
	}

	switchTo() {
		console.log("--  update state: " + this.state);
		app.render();
	}
	
	getName() {
		return this.state;
	}
}