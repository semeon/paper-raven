import {dice} from './../dice/dice.js';
import Person from './person/person.js';
import Special from './special/special.js';
import Derived from './derived/derived.js';

import Health from './health/health.js';
import Experience from './experience/experience.js';


class Character {

  constructor(p) {
    this._id = p.id;

		this.person = new Person(p.person);
		this.special = new Special(p.special);
		this.derived = new Derived(this);

    this.health = new Health(this);
    this.exp = new Experience(this);
	}

  // Read
  getID() {
    return this._id;
  }
  getName() {
  	return this.person.getName();
  }

  getGender() {
  	return this.person.getGender();
  }

  getSpecial() {
    return this.special;
  }

  getDerived() {
  	return this.derived;
  }

  getCombatInitiative() {
    return this.exp.getLevel();
  }

  getAP() {
    return this.derived.getAP();
  }

  isAlive() {
    return this.health.getHP()>0;
  }

  // Write
  gainXP(xp) {
    this.exp.gainXP(xp);
  }

  takeDamage(d) {
    this.health.decHP(d);
  }


  attackRoll() { 
  	var damRange = this.derived.getDamageRange();
  	var baseDamage = dice.roll(damRange.min, damRange.max);
		var damMultipier = 1;

  	var isCritical = dice.rollBool(this.derived.getCritChance());
  	if(isCritical) damMultipier = this.derived.getCritMultipier();

  	var attack = {};
  	attack.damage = baseDamage * damMultipier;
  	attack.isCritical = isCritical;

  	return attack;
  }

  defenseRoll(attack) { 
    var defense = {};
    defense.damage = 0;
    defense.isCritical = false;
    defense.dodged = dice.rollBool(this.getDerived().getDodgeChance());

    if (!defense.dodged) {
      defense.damage = attack.damage - this.getDerived().getDT();
      if (defense.damage <0 ) defense.damage = 0; 
      defense.isCritical = attack.isCritical;
    }
    return defense;
  }

  applyAttack(a) {
    if (a.damage > 0) {
      this.takeDamage(a.damage);
    }
    if (!this.isAlive()) {
      console.log(this.getName() + " is dead.")
    }

  }

  print(p) {
    console.log("- Character: " + this.person.getName() + "/" + this.person.getGender());

    if(p == "S") {
      console.log("- SPECIAL:");
      console.log("-- S: " +    this.special.getStats("S"));
      console.log("-- P: " +    this.special.getStats("P"));
      console.log("-- E: " +    this.special.getStats("E"));
      console.log("-- C: " +    this.special.getStats("C"));
      console.log("-- I: " +    this.special.getStats("I"));
      console.log("-- A: " +    this.special.getStats("A"));
      console.log("-- L: " +    this.special.getStats("L"));
    }

    if (p == "a") {
      console.log("- ATTACK: ");
      console.log("-- Base Damage: " +  this.derived.getDamageRange().min + "-" + this.derived.getDamageRange().max);
      console.log("-- Crit Chance: " +  this.derived.getCritChance() + "%");
      console.log("-- Crit Damage: x" + this.derived.getCritMultipier());
    }

    if (p == "x") {
      // console.log("- EXPERIENCE: ");
      console.log("-- XP:  " + this.exp.getXP());
      console.log("-- LVL: " + this.exp.getLevel());
      console.log("-- SkP: " + this.exp.getSkillPoints());
    }

    if (p == "h") {
      // console.log("- HEALTH: ");
      console.log("-- HP:  " + this.health.getHP() + "/" + this.health.getMaxHP());
    }

  }


}


export default Character;