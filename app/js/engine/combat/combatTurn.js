import {logger}   from 'js/engine/eventlogger/eventlogger.js';

export class CombatTurn {

  constructor(combatant) {
  	this.actor = combatant;
  	this.char = combatant.char;
    this.result = false;
  }

	perform() {
		console.log("--- Actor: ");
		console.dir(this.actor);
    var target = this.actor.chooseTarget(this.combatants);
		console.log("--- Target: ");
		console.dir(target);
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

    this.result = true;
  }

}
