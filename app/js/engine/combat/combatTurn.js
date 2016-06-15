import {logger}   from 'js/engine/eventlogger/eventlogger.js';

import {app}   from 'js/app.js';

export class CombatTurn {

  constructor(combatant, combat) {
		this.combat = combat;
  	this.actor = combatant;
  	this.char = combatant.char;
    this.result = false;
		this.state; // started -> choosing-target -> acting -> finished
		this.actorControl;
		this.target;
		this.updateState("start");		
  }

	// TODO: move state management to superclass

	updateState(state) {
		this.state = state;
		console.log("---- turn state: " + state);
		app.render();
	}

	perform() {
		this.startPhase();
	}

	// -- FLOW: START -------------------
	startPhase() {
		var self = this;
		this.actorControl = "ai";
		if (this.char.isPlayer()) this.actorControl = "player";


		// -- FLOW: CHOOSE-TARGET -------------------
		// this.chooseTargetPhase();
		self.updateState("choosing-target");
		setTimeout(self.chooseTargetPhase.bind(self), "500" );
	}

	chooseTargetPhase(self) {
		if (!self) self = this;

    self.target = self.actor.chooseTarget(self.combatants);

		// -- FLOW: ACTION-PENDING -------------------
		// self.actPhase();
		this.updateState("action-pending");				
		setTimeout(self.actionPendingPhase.bind(self), "500" );		
	}

	actionPendingPhase(self) {
		if (!self) self = this;
				
    if (self.target) {
			// console.log("this.actorControl: " + this.actorControl);

	    if (self.actorControl == "ai") {
				// self.performActon();
				setTimeout(self.performActon.bind(self), "200" );		
			}
    }
	}

	// -- FLOW: ACTION-PERFORM -------------------
	performActon(self) {
		if (!self) self = this;

		self.updateState("acting");				
		self.attack();
		// self.finishPhase();
		setTimeout(self.finishPhase.bind(self), "200" );
	}

	// -- FLOW: FINISH TURN -------------------
	finishPhase(self) {
		if (!self) self = this;
		self.updateState("finished");
		self.combat.startNextTurn();
	}
	
  attack() {
    var attackAttempt = this.char.getCombatAbility().attackRoll();
    // console.dir("---- Attack attempt:");
    // console.dir(attackAttempt);

    var attackResult = this.target.char.getCombatAbility().defenseRoll(attackAttempt);
    // console.dir("---- Attack result:");
    // console.dir(attackResult);
    // console.log("");

    var message = this.char.getPerson().getName() + " hits " + this.target.char.getPerson().getName() + " for " + attackResult.damage + " HP";
    console.log(message);
    logger.log(message);

    this.target.char.receiveAttack(attackResult);
    // console.log("---- " +  target.getPerson().getName() + " HP: " + target.getHealth().getHP() + "/" + target.getHealth().getMaxHP());

		if (!this.target.char.getHealth().isAlive()) {
			this.target.die();
		}

    this.result = true;
  }

	getTarget() {
		var result = false;
		if(this.target) result = this.target;
		return result;
	}

}
