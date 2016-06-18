import {StatedSequencePhase}   from 'js/_abstract/statedSequencePhase.js';

export class FinishTurnState extends StatedSequencePhase {
	
	constructor(context, delayBefore, delayAfter) {
		super("TURN-FINISH", context, delayBefore, delayAfter);
	}

	act() {
		console.log("FinishTurnState.act() CALLED");
		this.context.combat.startNextTurn();
	}

}