import {logger}   from 'js/engine/eventlogger/eventlogger.js';

class CombatTurn {

  constructor(c, e) {
  	this.actor = c;
  	this.enemies = e;
  	this.target = false;
  }

  make() {

  	var turnResult = false;


    if (this.actor.getHealth().isAlive()) {

      this.target = this.chooseTarget();

      if (this.target) {
        // console.log("---- Target: " + this.target.getPerson().getName());

        var attackAttempt = this.actor.getCombatAbility().attackRoll();
        // console.dir("---- Attack attempt:");
        // console.dir(attackAttempt);

        var attackResult = this.target.getCombatAbility().defenseRoll(attackAttempt);
        // console.dir("---- Attack result:");
        // console.dir(attackResult);
        // console.log("");
        var message = this.actor.getPerson().getName() + " hits " + this.target.getPerson().getName() + " for " + attackResult.damage + " HP";
        console.log(message);
        logger.log(message);

        this.target.receiveAttack(attackResult);
        // console.log("---- " +  this.target.getPerson().getName() + " HP: " + this.target.getHealth().getHP() + "/" + this.target.getHealth().getMaxHP());

      	turnResult = true;

      } else {
        // console.log("---- Target not found");
      }
    } else {
      // console.log("---- " + this.actor.getPerson().getName() + " is dead and cannot make the turn.");
    }
    return turnResult;
  }


  chooseTarget() {
  	var target = false; 

  	for (var i=0; i<this.enemies.length; i++) {
  		var e = this.enemies[i];
  		if (e.getHealth().isAlive() && e.getID()!=this.actor.getID()) {
  			target = e;
  			break;
  		}
  	}
  	return target;
  }

  delay() {
  } 


}

export default CombatTurn;

