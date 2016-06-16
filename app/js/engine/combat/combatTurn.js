import {logger}   from 'js/engine/eventlogger/eventlogger.js';

import {app}   from 'js/app.js';

export class CombatTurn {

  constructor(combatant, combat) {
		this.combat = combat;
  	this.actor = combatant;
  	this.char = combatant.char;
		this.attackLog = [];
    this.result = {};
		this.state; // started -> choosing-target -> acting -> finished
		this.actorControl;
		this.target;
		this.updateState("start");	
  }

	// TODO: move state management to superclass

	updateState(state) {
		if (state) {
			this.state = state;
			console.log("---- turn state: " + state);
		} else {
			console.log("---- turn state update without change");
		}
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
    // console.dir("---- Attack attempt:");
    // console.dir(this.result.attackAttempt);

    this.result.attackResult = this.target.char.getCombatAbility().defenseRoll(this.result.attackAttempt);
    // console.dir("---- Attack result:");
    // console.dir(this.result.attackResult);
    // console.log("");

    var message = this.char.getPerson().getName() + " hits " + this.target.char.getPerson().getName() + " for " + this.result.attackResult.damage + " HP";
    console.log(message);
    logger.log(message);

    this.target.char.receiveAttack(this.result.attackResult);
    // console.log("---- " +  target.getPerson().getName() + " HP: " + target.getHealth().getHP() + "/" + target.getHealth().getMaxHP());

		if (!this.target.char.getHealth().isAlive()) {
			this.target.die();
		}
  }

	printAttack() {
		var actorName = this.actor.char.getPerson().getName();
		var targetName = this.target.char.getPerson().getName();
		
		var message = "";

		message = "Attack roll (" + actorName + ")";
		this.delayedAttackPrint(message, 200);

		message = "Base damage: " + this.result.attackAttempt.baseDamage;
		this.delayedAttackPrint(message, 700);

		if (this.result.attackAttempt.isCritical) {
			message = "Critical hit: Yes!";
		} else{
			message = "Critical hit: Nope.";
		}
		this.delayedAttackPrint(message, 1200);

		message = "Damage multiplier: " + this.result.attackAttempt.damMultipier;
		this.delayedAttackPrint(message, 1700);

		message = "Defense roll (" + targetName + ")";
		this.delayedAttackPrint(message, 2500);


		if (this.result.attackResult.dodged) {
			message = "Dodge attempt: Successful!";
		} else{
			message = "Dodge attempt: Nope.";
		}
		this.delayedAttackPrint(message, 2700);

		message = "Damage: " + this.result.attackResult.damage;
		if (this.result.attackResult.isCritical) message += " (critical hit)"
		this.delayedAttackPrint(message, 3200);
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
