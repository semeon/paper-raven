import {StatedSequencePhase}   from 'js/_abstract/statedSequencePhase.js';

export class PreCombatState extends StatedSequencePhase {
	
	constructor(context, delayBefore, delayAfter) {
		super("COMBAT-PRE-COMBAT", context, delayBefore, delayAfter);
	}

	act() {
		console.log("PreCombatState.act() CALLED");


		this.callSuccessor();
	}

}