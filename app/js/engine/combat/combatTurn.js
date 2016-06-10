import {logger}   from 'js/engine/eventlogger/eventlogger.js';

export class CombatTurn {

  constructor(combatant) {
  	this.actor = combatant;
  	this.char = combatant.char;
    this.result = false;
  }

	perform() {
    var target = this.actor.chooseTarget(this.combatants);
    if (target) {
			this.attack(target);
      // turn.perform(this.target);
    }
	}

  attack(target) {
    var attackAttempt = this.char.getCombatAbility().attackRoll();
    // console.dir("---- Attack attempt:");
    // console.dir(attackAttempt);

    var attackResult = target.char.getCombatAbility().defenseRoll(attackAttempt);
    // console.dir("---- Attack result:");
    // console.dir(attackResult);
    // console.log("");

    var message = this.char.getPerson().getName() + " hits " + target.char.getPerson().getName() + " for " + attackResult.damage + " HP";
    console.log(message);
    logger.log(message);

    target.char.receiveAttack(attackResult);
    // console.log("---- " +  target.getPerson().getName() + " HP: " + target.getHealth().getHP() + "/" + target.getHealth().getMaxHP());

		if (!target.char.getHealth().isAlive()) {
			target.die();
	    // message = target.char.getPerson().getName() + " is dead.";
	    // console.log(message);
	    // logger.log(message);
		}

    this.result = true;
  }

}
