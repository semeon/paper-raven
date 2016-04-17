class Derived {

  constructor(char) {

    this.stats = {};

    // Unarmed damage
    this.stats.damageRange = {};
    this.stats.damageRange.max = Math.floor(char.getSpecial().getStats("S")/2);
    this.stats.damageRange.min = Math.floor(this.stats.damageRange.max/2);

    // Action Points
    this.stats.actionPoints = char.special.getStats("A");

    // Critical hit
    this.stats.critChance = char.special.getStats("L") * 10;
    this.stats.critMultipier = 10;

    // Dodge
    this.stats.dodgeChance = Math.floor( (char.special.getStats("A") + char.special.getStats("P") + char.special.getStats("L")) / 2 );

    // Dodge
    this.stats.baseDT = Math.floor( char.special.getStats("E") / 2 );
    this.stats.armourDT = 0;
    this.stats.DT = this.stats.baseDT + this.stats.armourDT;


    // Armor threshold


  }

  getStats() {
    return this.stats;
  }
  
  getDamageRange() {
    return this.stats.damageRange;
  }

  getCritChance() {
    return this.stats.critChance;
  }

  getCritMultipier() {
    return this.stats.critMultipier;
  }  

  getDodgeChance() {
    return this.stats.dodgeChance;
  }

  getDT() {
    return this.stats.DT;
  }


  getAP() {
    return this.stats.actionPoints;
  }

}

export default Derived;