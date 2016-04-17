import CombatStats from './combatstats.js';

class Derived {

  constructor(char) {
    this.char = char;
    this.combat = new CombatStats(char);

  }

  // Combat 

    getCombatInitiative() {
      return this.char.getExp().getLevel();
    }

    getCombatStats() { // ??
      return this.combat;
    }
    getDamageRange() {
      return this.combat.damageRange;
    }
    getCritChance() {
      return this.combat.critChance;
    }
    getCritMultipier() {
      return this.combat.critMultipier;
    }  
    getDodgeChance() {
      return this.combat.dodgeChance;
    }
    getDT() {
      return this.combat.DT;
    }

}

export default Derived;