class Combatant {

	// GET RID OF COMBATANT LAYER?

  constructor(c) {
    this.char = c;
		this.status = "active"; // "idle", "down"
		this.name = c.getPerson().getName();
		this.targetList = [];
  }

	isActive() {
		var result = false;
		if (this.char.getHealth().isAlive() && this.status == "active") result = true;
		return result;
	}

	addEnemies(enemies) {
		for (var i=0; i<enemies.length; i++) {
			var target = enemies[i];
			if (target.char._id != this.char._id) this.targetList.push(target);
		}
	}

  chooseTarget() {
    // REFACTOR?
    var target = false; 

    // if (!this.actor._isPlayer) {
    if (true) {
      for (var i=0; i<this.targetList.length; i++) {
        var c = this.targetList[i];
        if (c.char.getHealth().isAlive()) {
          target = c;
          break;
        }
      }
    } else {
      // Wait for the player to pick
    }
    return target;
  }

	setIdle() {
		this.status = "idle";
	}

	die() {
		this.status = "down";
	}

}

export default Combatant;