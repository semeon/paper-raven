import {logger}   from 'js/engine/eventlogger/eventlogger.js';
import {app}   from 'js/app.js';

// Phases
import {PickTargetState}   	from './phases/pickTarget.js';
import {StartActionState}   from './phases/startAction.js';
import {PerformActionState}	from './phases/performAction.js';
import {FinishTurnState}		from './phases/finishTurn.js';


export class CombatTurn {

  constructor(combatant, combat) {
		this.combat = combat;
  	this.actor = combatant;
  	this.char = combatant.char;
		this.attackLog = [];
    this.result = {};
		this.state = "TURN-PICKING-TARGET";
		this.actorControl;
		this.target;
		
		this.pickTargetState = new PickTargetState(this, 1000, 0);
		this.startActionState = new StartActionState(this, 0, 500);
		this.performActionState = new PerformActionState(this, 0, 500);
		this.finishTurnState = new FinishTurnState(this, 0, 500);
		
		this.pickTargetState.setSuccessor(this.startActionState);
		this.startActionState.setSuccessor(this.performActionState);
		this.performActionState.setSuccessor(this.finishTurnState);
  }

	printAttackLog(message) {
		this.attackLog.push(message);
		app.render();
	}

	// ENTRY POINT
	perform() {
		// this.startPhase();
		this.pickTargetState.run();
	}

}
