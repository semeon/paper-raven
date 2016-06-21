import {State}   from 'js/_abstract/state.js';
import {AbstractSequencePhase}   from 'js/_abstract/sequencePhase.js';

export class StatedSequencePhase extends AbstractSequencePhase {
	
	constructor(phaseName, context, delayBefore, delayAfter) {
		super(context, delayBefore, delayAfter);
		this.phaseName = phaseName;
		this.state = new State(phaseName);
		this.superRun = super.run;
	}

	getState() {
		return this.state.getName();
	}

	updateState() {
		this.state.switchTo();
		this.context.state = this;
	}

	// updateContextState() {
	// 	this.context.state = this.phaseName;
	//   	console.log("--  update state: " + this.phaseName);
	// 	app.render();
	// }

	// Overwriting parent's run()
	run() {
		this.updateState();
		this.superRun();
	}
}