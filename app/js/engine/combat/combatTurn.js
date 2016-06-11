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
		this.updateState("started");		
  }

	updateState(state) {
		this.state = state;
		console.log("-- updating turn state to " + state)
		app.render();
	}

	perform() {
		this.startPhase();
	}

	startPhase() {
		this.actorControl = "ai";
		if (this.char.isPlayer()) this.actorControl = "player";
		this.chooseTargetPhase();
	}

	chooseTargetPhase() {
		this.updateState("choosing-target");
    this.target = this.actor.chooseTarget(this.combatants);
		this.actPhase();
	}

	actPhase() {
    if (this.target) {
			// console.log("this.actorControl: " + this.actorControl);
	    if (this.actorControl == "ai") {
				this.performActon();
			} else {
				this.updateState("action-pending");				
			}
    }
	}

	finishPhase(context) {
		if (!context) context = this;
		context.updateState("finished");
		context.combat.startNextTurn();
	}

	performActon() {
		var self = this;

		this.updateState("acting");				
		this.attack();
		// this.finishPhase();
		setTimeout(self.finishPhase.bind(self), "200" );
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

}
