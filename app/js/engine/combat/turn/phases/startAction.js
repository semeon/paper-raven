import {StatedSequencePhase}   from 'js/_abstract/statedSequencePhase.js';

export class StartActionState extends StatedSequencePhase {
	
	constructor(context, delayBefore, delayAfter) {
		super("TURN-STARTING-ACTION", context, delayBefore, delayAfter);
	}

	act() {
		console.log("StartActionState.act() CALLED");
    this.context.target = this.context.actor.chooseTarget(self.combatants);
		this.callSuccessor();
	}

}