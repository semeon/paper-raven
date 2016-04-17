import {dice} from './../../model/dice/dice.js';

class CombatTurn {

  constructor(c, e, d) {
  	this.actor = c;
  	this.enemies = e;
  	this.target = false;
  }

  make() {

  	var turnResult = true;
  	// console.log("Turn: " + this.actor.getName());
    this.target = this.chooseTarget();

    if (this.target) {
  		// console.log("- Target: " + this.target.getName());
    	var attackAttempt = this.actor.attackRoll();
	    // console.dir("Attack attempt:");
	    // console.dir(attackAttempt);

    	var attackResult = this.target.defenseRoll(attackAttempt);
	    // console.dir("Attack result:");
	    // console.dir(attackResult);

      console.log("");
	    console.log("- " + this.actor.getName() + " hit " + this.target.getName() + " for " + attackResult.damage + " HP");
	    this.target.applyAttack(attackResult);

	    this.target.print("h");
    } else {
    	turnResult = false;
    }

    return turnResult;
  }


  chooseTarget() {
  	var target = false; 

  	for (var i=0; i<this.enemies.length; i++) {
  		var e = this.enemies[i];
  		if (e.isAlive() && e.getID()!=this.actor.getID()) {
  			target = e;
  			break;
  		}
  	}
  	return target;
  }

  move() {
  }



}

export default CombatTurn;


// **********************************

