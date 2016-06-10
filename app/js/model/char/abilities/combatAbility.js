import Ability from './ability.js';


class CombatAbility extends Ability {

  constructor(char) {

  	super(char);

    // Unarmed damage
    this.damageRange = {};
    this.damageRange.max = Math.floor(char.getSpecial().getStats("S")/2);
    this.damageRange.min = Math.floor(this.damageRange.max/2);

    // Action Points
    this.actionPoints = char.special.getStats("A");

    // Critical hit
    this.critChance = char.special.getStats("L")*10; // x1
    this.critMultipier = 10; // 3

    // Dodge
    this.dodgeChance = Math.floor( (char.getSpecial().getStats("A") + char.getSpecial().getStats("P") + char.getSpecial().getStats("L")) / 2 );

    // Damage threshold
    this.baseDT = Math.floor( char.getSpecial().getStats("E") / 2 );
    this.armourDT = 0;
    this.DT = this.baseDT + this.armourDT;
  }


  getInitiative() {
    return this.char.getExp().getLevel();
  }

  getDamageRange() {
    return this.damageRange;
  }
  getCritChance() {
    return this.critChance;
  }
  getCritMultipier() {
    return this.critMultipier;
  }  
  getDodgeChance() {
    return this.dodgeChance;
  }
  getDT() {
    return this.DT;
  }


  attackRoll() { 
    var attack = {};

    var baseDamage = this.dice.roll(this.damageRange.min, this.damageRange.max);
    var damMultipier = 1;

    var isCritical = this.dice.rollBool(this.critChance);
    if(isCritical) damMultipier = this.critMultipier;

    attack.damage = baseDamage * damMultipier;
    attack.isCritical = isCritical;

    return attack;
  }

  defenseRoll(attack) { 
    var defense = {};
    defense.damage = 0;
    defense.isCritical = false;
    defense.dodged = this.dice.rollBool(this.dodgeChance);

    if (!defense.dodged) {
      defense.damage = attack.damage - this.DT;
      if (defense.damage <0 ) defense.damage = 0; 
      defense.isCritical = attack.isCritical;
    }
    return defense;
  }

  chooseTarget(enemies) {
    // REFACTOR?
    var target = false; 
    // if (!this.actor._isPlayer) {
    if (true) {
      for (var i=0; i<enemies.length; i++) {
        var e = enemies[i];
        if (e.getHealth().isAlive() && e.getID()!=this.char.getID()) {
          target = e;
          break;
        }
      }
    } else {
      // Wait for the player to pick

    }
    return target;
  }
}

export default CombatAbility;