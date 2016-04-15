class Special {

  constructor(p) {
		this.stats = {};
    this.stats["S"] = p["S"];
    this.stats["P"] = p["P"];
    this.stats["E"] = p["E"];
    this.stats["C"] = p["C"];
    this.stats["I"] = p["I"];
    this.stats["A"] = p["A"];
    this.stats["L"] = p["L"];
  }

  getSpecial(p) {
    if (p) {
      return this.stats[p];
    } else {
      return this.stats;
    }
  }
}

export default Special;