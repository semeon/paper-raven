import {app} from 'js/app.js';
import {AbstractSequencePhase}   from 'js/_abstract/sequencePhase.js';

export class StatedSequencePhase extends AbstractSequencePhase {
	
	constructor(phaseName, context, delayBefore, delayAfter) {
		super(context, delayBefore, delayAfter);
		this.phaseName = phaseName;
		// this.superRun = super.run.bind(this);
		this.superRun = super.run;
	}

	updateContextState() {
		this.context.state = this.phaseName;
		console.log("--  update state: " + this.phaseName);
		app.render();
	}

	run() {
		this.updateContextState();
		this.superRun();
	}
}