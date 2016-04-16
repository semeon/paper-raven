class Derived {

  constructor(char) {

    this.stats = {};

    // Unarmed damage
    this.stats.damageRange = {};
    this.stats.damageRange.max = Math.floor(char.special.getStats("S")/2);
    this.stats.damageRange.min = Math.floor(this.stats.damageRange.max/2);

    // Critical hit
    this.stats.critChance = char.special.getStats("L");
    this.stats.critMultipier = 3;

    // Dodge


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
}

export default Derived;