class Experience {

  constructor(p) {
		this.xp = 0;
		this.level = 1;
    this.skillPoints = 0;

    this.maxLevel = 50;
    this.levelMap = getLevelMap(this.maxLevel);
    this.skillpointsPerLevel = 10;
  }

  getXp() {
  	return this.xp;
  }

  getLevel() {
  	return this.level;
  }

  getSkillPoints() {
    return this.skillPoints;
  }

  gainXp(xp) {
    console.log("You earned " + xp + " XP.");
    this.xp += xp;
    while (this.xp >= this.levelMap[this.level+1]) {
      this.levelUp();
    }
  }

  levelUp() {
    this.level = this.level + 1;
    this.skillPoints += this.skillpointsPerLevel; 
    console.log("Level Up! New level: " + this.level);
  }

}

export default Experience;

// *******************************************************************

function getLevelMap(maxLevel) {
  var levelMap = {};
  // console.log("Generating level map");
  for (var i=1; i<=maxLevel; i++ ) {
    var levExp = (i*(i-1)/2) * 200;
    // (n * (n-1) / 2) * 200 XP
    levelMap[i] = levExp;
    // console.log("- level: " + i + ", XP required: " + levelMap[i]);
  }
  return levelMap;
}