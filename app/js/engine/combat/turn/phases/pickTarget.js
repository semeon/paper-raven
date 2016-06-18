import {StatedSequencePhase}   from 'js/_abstract/statedSequencePhase.js';

export class PickTargetState extends StatedSequencePhase {
	
	constructor(context, delayBefore, delayAfter) {
		super("TURN-PICKING-TARGET", context, delayBefore, delayAfter);
	}

	act() {
		console.log("PickTargetState.act() CALLED");
    this.context.target = this.context.actor.chooseTarget(self.combatants);
		this.callSuccessor();
	}

}