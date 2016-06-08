class Combatant {

  constructor(c) {
    this.char = c;
  }

	isActive() {
		var result = false;
		if (this.char.getHealth().isAlive()) result = true;
		return result;
	}

	chooseTarget(targetList) {
		var result = this.char.getCombatAbility().chooseTarget(targetList);
		return result;
	}

}

export default Combatant;