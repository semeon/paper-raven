class CombatTurn {

  constructor(c, e) {
  	this.actor = c;
  	this.enemies = e;
  	this.target = false;
  }

  make() {

  	var turnResult = true;
  	// console.log("Turn: " + this.actor.getPerson().getName());
    this.target = this.chooseTarget();

    if (this.target) {
  		// console.log("- Target: " + this.target.getPerson().getName());
    	var attackAttempt = this.actor.getActions().attackRoll();
	    // console.dir("Attack attempt:");
	    // console.dir(attackAttempt);

    	var attackResult = this.target.getActions().defenseRoll(attackAttempt);
	    // console.dir("Attack result:");
	    // console.dir(attackResult);

      console.log("");
	    console.log("- " +  this.actor.getPerson().getName() + " hit " + 
                          this.target.getPerson().getName() + " for " + 
                          attackResult.damage + " HP");
	    this.target.getActions().applyAttack(attackResult);

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
  		if (e.getHealth().isAlive() && e.getID()!=this.actor.getID()) {
  			target = e;
  			break;
  		}
  	}
  	return target;
  }
}

export default CombatTurn;

