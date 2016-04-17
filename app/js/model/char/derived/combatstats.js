class CombatStats {

  constructor(char) {

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
}

export default CombatStats;