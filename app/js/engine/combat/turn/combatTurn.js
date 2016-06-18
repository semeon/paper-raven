import {logger}   from 'js/engine/eventlogger/eventlogger.js';
import {app}   from 'js/app.js';

import {PickTargetState}   	from './phases/pickTarget.js';
import {StartActionState}   from './phases/startAction.js';
import {PerformActionState}	from './phases/performAction.js';

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
		
		this.pickTargetState = new PickTargetState(this, 1000, 1000);
		this.startActionState = new StartActionState(this, 1000, 1000);
		this.performActionState = new PerformActionState(this, 1000, 1000);
		
		this.pickTargetState.setSuccessor(this.startActionState);
		this.startActionState.setSuccessor(this.performActionState);
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
		self.printAttack();
		
		// self.finishPhase();
		setTimeout(self.finishPhase.bind(self), "8000" );
	}



	// -- FLOW: FINISH TURN -------------------
	finishPhase(self) {
		if (!self) self = this;
		self.updateState("finished");
		self.combat.startNextTurn();
	}
	
  attack() {
    this.result.attackAttempt = this.char.getCombatAbility().attackRoll();
    this.result.attackResult = this.target.char.getCombatAbility().defenseRoll(this.result.attackAttempt);
  }

  applyAttack(char) {
		// if (!self) self = this;
		// self.target.char.receiveAttack(this.result.attackResult);
		char.receiveAttack(this.result.attackResult);
  }


	printAttack() {
		var self = this;
		
		var actorName = this.actor.char.getPerson().getName();
		var targetName = this.target.char.getPerson().getName();
		
		var message = "";

		message = actorName + " makes base damage roll: " + this.result.attackAttempt.baseDamage;
		this.delayedAttackPrint(message, 500);


		message = actorName + " makes critical hit roll: ";
		if (this.result.attackAttempt.isCritical) {
			message = message + "Success!";
		} else{
			message = message + "Failed.";
		}
		message = message + " Damage multiplier: x" + this.result.attackAttempt.damMultipier;
		
		this.delayedAttackPrint(message, 1000);


		message = targetName + " makes dodge attempt roll: ";
		if (this.result.attackResult.dodged) {
			message = message + "Success!";
		} else{
			message = message + "Failed.";
		}
		this.delayedAttackPrint(message, 1500);

		message = "Result damage: " + this.result.attackResult.damage;
		if (this.result.attackResult.isCritical) message += " (critical hit)"
		this.delayedAttackPrint(message, 2000);

		message = actorName;
		if (this.result.attackResult.isCritical) message += " critically "
		message += " hits " + targetName + " for " + this.result.attackResult.damage + " HP";

		setTimeout(function(){
		    console.log(message);
		    logger.log(message);

				self.applyAttack(self.target.char);

				if (!self.target.char.getHealth().isAlive()) {
					self.target.die();
				}				
				self.updateState();
		}, 2200 );
	
		
	}	
	

	delayedAttackPrint(message, delay) {
		var self = this;
		setTimeout(function(){
				self.attackLog.push(message);
				self.updateState();
		}, delay );
	}

	getTarget() {
		var result = false;
		if(this.target) result = this.target;
		return result;
	}

}
