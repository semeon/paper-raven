import {logger}   from 'js/engine/eventlogger/eventlogger.js';

class CombatTurn {

  constructor(combatant) {
  	this.actor = combatant;
  	this.char = combatant.char;
    this.result = false;
  }

  attack(target) {
    var attackAttempt = this.char.getCombatAbility().attackRoll();
    // console.dir("---- Attack attempt:");
    // console.dir(attackAttempt);

    var attackResult = this.char.getCombatAbility().defenseRoll(attackAttempt);
    // console.dir("---- Attack result:");
    // console.dir(attackResult);
    // console.log("");

    var message = this.char.getPerson().getName() + " hits " + target.getPerson().getName() + " for " + attackResult.damage + " HP";
    console.log(message);
    logger.log(message);

    target.receiveAttack(attackResult);
    // console.log("---- " +  target.getPerson().getName() + " HP: " + target.getHealth().getHP() + "/" + target.getHealth().getMaxHP());

    this.result = true;
  }

}

export default CombatTurn;