import {dice} from './../../dice/dice.js';

class Actions {

  constructor(char) {
		this.char = char;
  }

  // Combat
    attackRoll() { 
      var damRange = this.char.getDerived().getDamageRange();
      var baseDamage = dice.roll(damRange.min, damRange.max);
      var damMultipier = 1;

      var isCritical = dice.rollBool(this.char.getDerived().getCritChance());
      if(isCritical) damMultipier = this.char.getDerived().getCritMultipier();

      var attack = {};
      attack.damage = baseDamage * damMultipier;
      attack.isCritical = isCritical;

      return attack;
    }

    defenseRoll(attack) { 
      var defense = {};
      defense.damage = 0;
      defense.isCritical = false;
      defense.dodged = dice.rollBool(this.char.getDerived().getDodgeChance());

      if (!defense.dodged) {
        defense.damage = attack.damage - this.char.getDerived().getDT();
        if (defense.damage <0 ) defense.damage = 0; 
        defense.isCritical = attack.isCritical;
      }
      return defense;
    }

    applyAttack(a) {
      if (a.damage > 0) {
        this.char.getHealth().takeDamage(a.damage);
      }
      if (!this.char.getHealth().isAlive()) {
        console.log(this.char.getPerson().getName() + " is dead.")
      }
    }

}

export default Actions;